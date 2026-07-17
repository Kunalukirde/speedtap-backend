const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const verifyWindowsSubscription = require('../middleware/windowsSubscription');
const UserQuestionBank = require('../models/UserQuestionBank');
const NJobListingUrl = require('../models/NaukriJobListing');
const { decrypt } = require("../utils/crypto");


router.post('/call-login-api',  async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({success: false, message: 'Email is required'});
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not registered'
            });
        }
        const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d'});

        // fetch all job portals for this user
        const jobPortals = await require('../models/jobPortals').find({ userId: user._id });
        const portals = jobPortals.map(portal => {
            const obj = portal.toObject();
            obj.password = decrypt(obj.password);
            return obj;
        });

        // fetch job list url
        // const jobListing = await NJobListingUrl.findOne({userId: user._id});
        // Fetch or create default job listing URL
const jobListing = await NJobListingUrl.findOneAndUpdate(
    { userId: user._id },
    {
        $setOnInsert: {
            N_JobListingUrl: "https://www.naukri.com/developer-jobs?src=filters-qsbUsage&sort=f&jobAge=1&k=developer"
        }
    },
    {
        new: true,
        upsert: true
    }
);


        return res.status(200).json({
            success: true,
            message: 'User found',
            data: { email: user.email, token: token, jobPortals : portals, N_JobListingUrl: jobListing?.N_JobListingUrl || "" }
        });

    } catch (error) {
        return res.status(500).json({success: false, message: error.message});
    }
});


router.post('/save-job-listing-url',verifyWindowsSubscription, async (req, res) => {
    try {

        // Get Authorization Header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: 'Authorization token missing'
            });
        }

        // Extract Token
        const token = authHeader.split(' ')[1];

        // Verify Token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Get URL from body
        const { N_JobListingUrl } = req.body;

        if (!N_JobListingUrl) {
            return res.status(400).json({
                success: false,
                message: 'Job Listing URL is required.'
            });
        }

        // Save or Update
        const savedJobUrl = await NJobListingUrl.findOneAndUpdate(
            {
                userId: decoded.userId
            },
            {
                userId: decoded.userId,
                N_JobListingUrl
            },
            {
                new: true,
                upsert: true
            }
        );

        return res.status(200).json({
            success: true,
            message: 'Job Listing URL saved successfully.',
            data: savedJobUrl
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
});





router.post('/call-auto-apply-joblist',verifyWindowsSubscription, async (req, res) => {

    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: 'Authorization token missing'
            });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
       const jobData = await NJobListingUrl.findOne({
    userId: decoded.userId
});
        if (!jobData) {
            return res.status(404).json({
                success: false,
                message: 'Job Listing URL not found'
            });
        }
        res.json({
            success: true,
            message: 'success',
            data: {
                N_JobListingUrl: jobData.N_JobListingUrl
            }
        });
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Invalid or expired token'
        });
    }
});





router.post('/call-auto-apply-answers',verifyWindowsSubscription, async (req, res) => {
    try {
        console.log(req.body);

        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: 'Authorization token missing'
            });
        }

        const token = authHeader.split(' ')[1];

        if (!process.env.JWT_SECRET) {
            return res.status(500).json({
                success: false,
                message: 'JWT_SECRET is not configured'
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const { question, type, mode } = req.body;

        if (!question || !type || !mode) {
            return res.status(400).json({
                success: false,
                message: 'Question, type and mode are required'
            });
        }

        const userId = decoded?.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: 'Invalid token userId'
            });
        }

        const normalizedQuestion = question.trim().toLowerCase();

        const docs = await UserQuestionBank.find({
            userId,
            platform: 'windows',
            questionType: type,
            mode
        }).lean();

        let matchedDoc = null;

        if (mode === 'exact') {
            matchedDoc = docs.find(doc =>
                doc.question.trim().toLowerCase() === normalizedQuestion
            );
        } else if (mode === 'contain') {
            matchedDoc = docs.find(doc =>
                normalizedQuestion.includes(doc.question.trim().toLowerCase())
            );
        }

        return res.json({
            success: true,
            answer: matchedDoc?.answerText || null
        });

    } catch (err) {
        return res.status(401).json({
            success: false,
            message: err.message
        });
    }
});

router.post('/auto-apply-add-question',verifyWindowsSubscription, async (req,res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: 'Authorization token missing'
            });
        }
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET);
        const UnansweredQuestion = req.body;
        // console.log('auto-apply-unanswerd-question :',UnansweredQuestion);
        const payload = UnansweredQuestion?.data || UnansweredQuestion;
        const unansweredQuestion = payload?.unansweredQuestion;
        const questionType = payload?.questionType;
        const options = Array.isArray(payload?.options) ? payload.options : [];
        if (!unansweredQuestion || !questionType) {
            return res.status(400).json({
                success: false,
                message: 'unansweredQuestion and questionType are required'
            });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const normalizedQuestion = typeof unansweredQuestion === 'string' ? unansweredQuestion.trim() : unansweredQuestion;
        const doc = await UserQuestionBank.findOneAndUpdate(
            {
                userId: decoded?.userId,
                question: normalizedQuestion,
                platform: 'windows',
                mode: 'exact',
            },
            {
                $set: {
                    questionType,
                    options,
                    answerText: null,
                },
                $setOnInsert: {
                    date: new Date().toISOString().slice(0, 10),
                },
            },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );


        return res.status(201).json({
            success: true,
            message: 'Question stored',
            data: doc,
        });
    } catch (error) {
        console.log('error',error);
    }
})





























module.exports = router;
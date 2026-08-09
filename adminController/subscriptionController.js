const express = require("express");
const router = express.Router();
const User = require("../models/User");
const AdminauthMiddleware = require('../middleware/adminAuthMiddleware.js');
const Subscription = require("../models/subscription.js");


// GET /api/subscription/pending
router.get("/pending", AdminauthMiddleware, async (req, res) => {

    try {

        const payments = await Subscription.find({
            paymentStatus: "PENDING"
        })
        .populate("userId", "username email")
        .sort({ createdAt: -1 });

        return res.json({
            success: true,
            payments
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }

});

// appovd list
// GET /api/subscription/approved
router.get("/approved", AdminauthMiddleware, async (req, res) => {

    const payments = await Subscription.find({
        paymentStatus: "APPROVED"
    })
    .populate("userId", "username email")
    .sort({ createdAt: -1 });

    res.json({
        success: true,
        payments
    });

});

// GET /api/subscription/rejected
router.get("/rejected", AdminauthMiddleware, async (req, res) => {

    const payments = await Subscription.find({
        paymentStatus: "REJECTED"
    })
    .populate("userId", "username email")
    .sort({ createdAt: -1 });

    res.json({
        success: true,
        payments
    });

});


// approve
// POST /api/subscription/approve/6a5a1416ad0c766d3a63a57a

router.post("/approve/:id", AdminauthMiddleware, async (req, res) => {
    console.log('approve api hit');
    try {

        const payment = await Subscription.findById(req.params.id);

        if (!payment) {

            return res.status(404).json({
                success: false,
                message: "Payment not found"
            });

        }

if (payment.paymentStatus === "APPROVED") {

            return res.status(400).json({
                success: false,
                message: "Already approved"
            });

        }

        // Do not allow approving a free-trial record through the admin panel.
        // Trial plans are auto-activated on registration/start-trial and should
        // never be approved here, otherwise the user gets reset to the free-trial plan.
        if (payment.planName === "TRIAL") {

            return res.status(400).json({
                success: false,
                message: "Trial plans are auto-activated and cannot be approved."
            });

        }

        const user = await User.findById(payment.userId);

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User not found"
            });

        }

        const startDate = new Date();

        const expiryDate = new Date(startDate);

        switch (payment.planName) {

            case "TRIAL":
                expiryDate.setDate(expiryDate.getDate() + 3);
                break;

            case "PROFESSIONAL":
                expiryDate.setDate(expiryDate.getDate() + 15);
                break;

            case "PREMIUM":
                expiryDate.setDate(expiryDate.getDate() + 30);
                break;

            default:
                return res.status(400).json({
                    success: false,
                    message: "Invalid plan"
                });

        }

        payment.paymentStatus = "APPROVED";
        payment.status = "ACTIVE";
        payment.startDate = startDate;
        payment.expiryDate = expiryDate;

        await payment.save();

        user.subscription.plan = payment.planName;
        user.subscription.isActive = true;
        user.subscription.pendingApproval = false;
        user.subscription.startDate = startDate;
        user.subscription.expiryDate = expiryDate;

        await user.save();

        res.json({

            success: true,

            message: "Subscription Activated",

            subscription: user.subscription

        });

    } catch (err) {

        console.log(err);

        res.status(500).json({

            success: false,

            message: "Server Error"

        });

    }

});

// POST /api/subscription/reject/6a5a1416ad0c766d3a63a57a

router.post("/reject/:id", AdminauthMiddleware, async (req, res) => {

    try {

        const payment = await Subscription.findById(req.params.id);

        if (!payment) {

            return res.status(404).json({
                success: false,
                message: "Payment not found"
            });

        }

        const user = await User.findById(payment.userId);

        payment.paymentStatus = "REJECTED";
        payment.status = "CANCELLED";

        await payment.save();

        user.subscription.plan = "FREE";
        user.subscription.isActive = false;
        user.subscription.pendingApproval = false;
        user.subscription.startDate = null;
        user.subscription.expiryDate = null;

        await user.save();

        res.json({

            success: true,

            message: "Payment Rejected"

        });

    } catch (err) {

        console.log(err);

        res.status(500).json({

            success: false,

            message: "Server Error"

        });

    }

});

// GET /api/subscription/payment/:id
router.get("/payment/:id", AdminauthMiddleware, async (req, res) => {

    const payment = await Subscription.findById(req.params.id)
        .populate("userId", "username email");

    if (!payment) {

        return res.status(404).json({
            success: false
        });

    }

    res.json({

        success: true,

        payment

    });

});












module.exports = router;
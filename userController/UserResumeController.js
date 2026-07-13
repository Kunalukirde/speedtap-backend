const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const Resume = require("../models/Resume");

// ================= Upload Config =================

const uploadDir = path.join(__dirname, "../uploads/resumes");

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueName =
            Date.now() +
            "-" +
            Math.round(Math.random() * 1e9) +
            path.extname(file.originalname);

        cb(null, uniqueName);
    },
});

const upload = multer({
    storage,
    limits: {
        fileSize: 10 * 1024 * 1024,
    },
});

// ================= Upload Resume =================

router.post("/", upload.single("resume"), async (req, res) => {
    try {
        const userId = req.user?.userId;

        if (!userId) {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }

        if (!req.file) {
            return res.status(400).json({
                message: "Resume file is required",
            });
        }

        const existing = await Resume.findOne({ userId });

        if (existing) {
            const oldFile = path.join(uploadDir, existing.filename);

            if (fs.existsSync(oldFile)) {
                fs.unlinkSync(oldFile);
            }

            await Resume.deleteOne({ _id: existing._id });
        }

        const resume = await Resume.create({
            userId,
            originalName: req.file.originalname,
            filename: req.file.filename,
            fileUrl: `/uploads/resumes/${req.file.filename}`,
            size: req.file.size,
        });

        return res.status(201).json({
            success: true,
            message: "Resume uploaded successfully.",
            data: resume,
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message || "Failed to upload resume",
        });
    }
});

// ================= Get Logged In User Resume =================

router.get("/", async (req, res) => {
    try {
        const userId = req.user?.userId;

        if (!userId) {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }

        const resume = await Resume.findOne({ userId }).lean();

        return res.json({
            data: resume,
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message || "Failed to fetch resume",
        });
    }
});

// ================= Get Resume By Id =================

router.get("/:id", async (req, res) => {
    try {
        const resume = await Resume.findById(req.params.id).lean();

        if (!resume) {
            return res.status(404).json({
                message: "Resume not found",
            });
        }

        return res.json({
            data: resume,
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message || "Failed to fetch resume",
        });
    }
});

// ================= Get All Resumes =================

router.get("/all/list", async (req, res) => {
    try {
        const resumes = await Resume.find()
            .sort({ createdAt: -1 })
            .lean();

        return res.json({
            count: resumes.length,
            data: resumes,
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message || "Failed to fetch resumes",
        });
    }
});

// ================= Delete Resume =================

router.delete("/", async (req, res) => {
    try {
        const userId = req.user?.userId;

        if (!userId) {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }

        const resume = await Resume.findOne({ userId });

        if (!resume) {
            return res.status(404).json({
                message: "Resume not found",
            });
        }

        const filePath = path.join(uploadDir, resume.filename);

        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        await Resume.deleteOne({ _id: resume._id });

        return res.json({
            success: true,
            message: "Resume deleted successfully",
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message || "Failed to delete resume",
        });
    }
});

module.exports = router;
const express = require("express");
const router = express.Router();
const AdminauthMiddleware = require('../middleware/adminAuthMiddleware.js');
const User = require('../models/User');

// All routes require admin authentication
router.use(AdminauthMiddleware);

// GET /admin/users - Get all DB users with pagination, search, and filtering
router.get('/', async (req, res) => {
    try {
        const {
            page = 1,
            limit = 10,
            search = '',
            plan,
            isActive
        } = req.query;

        // Build filter query
        const filter = {};

        // Search by username or email (case-insensitive)
        if (search) {
            filter.$or = [
                { username: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } }
            ];
        }

        // Filter by subscription plan
        if (plan) {
            filter['subscription.plan'] = plan.toUpperCase();
        }

        // Filter by active status
        if (isActive !== undefined) {
            filter['subscription.isActive'] = isActive === 'true';
        }

        const pageNum = parseInt(page, 10);
        const limitNum = parseInt(limit, 10);
        const skip = (pageNum - 1) * limitNum;

        // Fetch users with pagination, exclude passwordHash
        const [users, total] = await Promise.all([
            User.find(filter)
                .select('-passwordHash')
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limitNum)
                .lean(),
            User.countDocuments(filter)
        ]);

        const totalPages = Math.ceil(total / limitNum);

        return res.json({
            success: true,
            users,
            total,
            page: pageNum,
            limit: limitNum,
            totalPages
        });

    } catch (err) {
        console.error('Error fetching users:', err);
        return res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
})












module.exports = router;
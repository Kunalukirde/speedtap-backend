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


























// 1. Get Pending Payments
// Method
// GET
// URL
// http://localhost:5000/admin/subscription/pending
// Headers
// Key	Value
// Authorization	Bearer YOUR_ADMIN_TOKEN
// Body
// No Body
// 2. Get Approved Payments
// Method
// GET
// URL
// http://localhost:5000/admin/subscription/approved
// Headers
// Key	Value
// Authorization	Bearer YOUR_ADMIN_TOKEN
// Body
// No Body
// 3. Get Rejected Payments
// Method
// GET
// URL
// http://localhost:5000/admin/subscription/rejected
// Headers
// Key	Value
// Authorization	Bearer YOUR_ADMIN_TOKEN
// Body
// No Body
// 4. Get Payment Details
// Method
// GET
// URL
// http://localhost:5000/admin/subscription/payment/:paymentId

// Example

// http://localhost:5000/admin/subscription/payment/6a5a1416ad0c766d3a63a57a
// Headers
// Key	Value
// Authorization	Bearer YOUR_ADMIN_TOKEN
// Body
// No Body
// 5. Approve Payment
// Method
// POST
// URL
// http://localhost:5000/admin/subscription/approve/:paymentId

// Example

// http://localhost:5000/admin/subscription/approve/6a5a1416ad0c766d3a63a57a
// Headers
// Key	Value
// Authorization	Bearer YOUR_ADMIN_TOKEN
// Body
// No Body

// Everything is taken from the payment document.

// The API will automatically:

// Activate subscription
// Calculate expiry
// Update User
// Update Subscription
// 6. Reject Payment
// Method
// POST
// URL
// http://localhost:5000/admin/subscription/reject/:paymentId

// Example

// http://localhost:5000/admin/subscription/reject/6a5a1416ad0c766d3a63a57a
// Headers
// Key	Value
// Authorization	Bearer YOUR_ADMIN_TOKEN
// Body
// No Body

// The API will:

// Reject payment
// Remove pending approval
// Reset user to FREE plan
// 7. Get All Payments

// Useful for the admin dashboard.

// Method
// GET
// URL
// http://localhost:5000/admin/subscription/all-payments
// Headers
// Key	Value
// Authorization	Bearer YOUR_ADMIN_TOKEN
// Body
// No Body

// Returns every payment regardless of status.

// 8. Dashboard Statistics
// Method
// GET
// URL
// http://localhost:5000/admin/subscription/dashboard
// Headers
// Key	Value
// Authorization	Bearer YOUR_ADMIN_TOKEN
// Body
// No Body

// Response example:

// {
//   "success": true,
//   "data": {
//     "pending": 5,
//     "approved": 18,
//     "rejected": 2,
//     "revenue": 35964
//   }
// }
// Summary
// API	Method	Body
// /pending	GET	None
// /approved	GET	None
// /rejected	GET	None
// /payment/:id	GET	None
// /approve/:id	POST	None
// /reject/:id	POST	None
// /all-payments	GET	None
// /dashboard	GET	None


module.exports = router;
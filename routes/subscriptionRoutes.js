const express = require("express");
const router = express.Router();
const User = require("../models/User");

const authMiddleware = require("../middleware/authMiddleware"); // adjust path if needed

const Subscription = require("../models/subscription.js");

router.post("/start-trial", authMiddleware, async (req, res) => {
  try {

    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // Already used trial
    if (user.subscription.trialUsed) {
      return res.status(400).json({
        success: false,
        message: "Free trial already used."
      });
    }

    const now = new Date();

    const expiry = new Date();

    expiry.setDate(expiry.getDate() + 3);

    // Update current subscription on User
    user.subscription = {
      plan: "TRIAL",
      isActive: true,
      startDate: now,
      expiryDate: expiry,
      trialUsed: true
    };

    await user.save();

    // Save subscription history
    await Subscription.create({

      userId: user._id,

planName: "TRIAL",

      amount: 0,

      paymentMethod: "TRIAL",

      paymentStatus: "APPROVED",

      startDate: now,

      expiryDate: expiry,

      status: "ACTIVE"

    });

    return res.json({

      success: true,

      message: "Trial Activated",

      expiryDate: expiry

    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }
});

router.get("/current", authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select("subscription");
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.json({
            success: true,
            subscription: user.subscription
        });
    } catch (err) {
        res.status(500).json({
            message: "Server Error"
        });
    }
});



router.post("/request-payment", authMiddleware, async (req, res) => {

    try {

      const { planName, amount, transactionId } = req.body;

      if (!planName || !amount || !transactionId) {
        return res.status(400).json({
          success: false,
          message: "All fields are required."
        });
      }

      // Get user FIRST
      const user = await User.findById(req.user.userId);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found"
        });
      }

      // Check if user's subscription is already pending
      if (user.subscription?.pendingApproval) {
        return res.status(400).json({
          success: false,
          message: "Your previous payment is already under verification."
        });
      }

      // Check if another payment request exists
      const pending = await Subscription.findOne({
        userId: user._id,
        paymentStatus: "PENDING"
      });

      if (pending) {
        return res.status(400).json({
          success: false,
          message: "You already have a payment pending verification."
        });
      }

      await Subscription.create({
        userId: user._id,
        planName,
        amount,
        paymentMethod: "QR",
        transactionId,
        paymentStatus: "PENDING",
        status: "PENDING"
      });

      user.subscription.plan = planName;
      user.subscription.pendingApproval = true;
      user.subscription.isActive = false;

      await user.save();

      return res.json({
        success: true,
        message: "Payment submitted successfully. Please wait while we verify your payment. Your subscription will start after approval."
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        success: false,
        message: "Server Error"
      });

    }

});














module.exports = router;
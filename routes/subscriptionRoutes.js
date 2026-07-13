const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware"); // adjust path if needed

const User = require("../models/User");
const Subscription = require("../models/Subscription.js");

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











module.exports = router;
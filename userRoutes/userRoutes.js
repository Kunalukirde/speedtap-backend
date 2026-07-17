const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const UserQuestionBankController = require('../userController/QuestionBankController.js');
const authMiddleware = require('../middleware/authMiddleware.js')
const UserJobPortalsController = require('../userController/UserJobPortalsController.js');
const UserResumeController = require('../userController/UserResumeController.js');
const UserProfileControlller = require('../userController/UserProfileControlller.js');
const UserChangePassword = require('../userController/UserChangePassword.js');
const Otp = require('../models/Otp.js');
const { sendOtpEmail } = require("../services/emailService.js");
const Subscription = require('../models/subscription.js')

// Access shared in-memory stores from the parent module via require cache.
// We'll fall back to module-local stores if not present.
const state = (() => {
  try { // eslint-disable-next-line global-require
    return require('../state');
  } catch {
    return null;
  }
})();

// (blacklist stays in-memory for now; users are moved to MongoDB)
const blacklistedJtis = state?.blacklistedJtis || new Set();

// Connect DB (lazy connect)
const { connectDB } = require('../config/dbconfig');
let dbConnected = false;
async function ensureDB() {
  if (dbConnected) return;
  await connectDB();
  dbConnected = true;
}


const JWT_SECRET = state?.JWT_SECRET || process.env.JWT_SECRET || 'dev-secret-change-me';
const JWT_ISSUER = state?.JWT_ISSUER || process.env.JWT_ISSUER || 'matdash';
const JWT_EXPIRES_IN = state?.JWT_EXPIRES_IN || process.env.JWT_EXPIRES_IN || '1h';

const User = require('../models/User');


function signAccessToken({ username, email, userId }) {
  const jti = `${Date.now()}-${Math.random().toString(16).slice(2)}`;

  const token = jwt.sign(
    { sub: username, email, userId },
    JWT_SECRET,
    {
      algorithm: 'HS256',
      issuer: JWT_ISSUER,
      expiresIn: JWT_EXPIRES_IN,
      jwtid: jti,
    }
  );

  return { token, jti };
}




router.get('/live', (req, res) => {
    return res.json({ message: 'Server is live' });
}); 



// send otp
router.post("/auth/send-otp", async (req, res) => {

    await ensureDB();

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({
            message: "Email is required"
        });
    }

    // Email should not already exist
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(409).json({
            message: "Email already registered"
        });
    }

    // Generate OTP
    const otp = Math.floor(
        100000 + Math.random() * 900000
    ).toString();

    const expiresAt = new Date(
        Date.now() + 5 * 60 * 1000
    );

    await Otp.findOneAndUpdate(

        {
            email,
            purpose: "register"
        },

        {
            email,
            otp,
            purpose: "register",
            expiresAt,
            verified: false
        },

        {
            upsert: true,
            new: true
        }

    );

    await sendOtpEmail(email, otp);

    return res.json({
        message: "OTP sent successfully"
    });

});


// verify otp
router.post("/auth/verify-otp", async (req, res) => {

    await ensureDB();

    const { email, otp } = req.body;

    if (!email || !otp) {
        return res.status(400).json({
            message: "Email and OTP are required"
        });
    }

    const otpRecord = await Otp.findOne({
        email,
        purpose: "register"
    });

    if (!otpRecord) {
        return res.status(404).json({
            message: "OTP not found"
        });
    }

    if (otpRecord.expiresAt < new Date()) {

        await Otp.deleteOne({
            email,
            purpose: "register"
        });

        return res.status(400).json({
            message: "OTP expired"
        });

    }

    if (otpRecord.otp !== otp) {

        return res.status(400).json({
            message: "Invalid OTP"
        });

    }

    otpRecord.verified = true;

    await otpRecord.save();

    return res.json({
        message: "Email verified successfully"
    });

});

// forgot-password send otp
router.post("/auth/forgot-password/send-otp", async (req, res) => {

    await ensureDB();

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({
            message: "Email is required"
        });
    }

    // User must exist
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({
            message: "No account found with this email."
        });
    }

    const otp = Math.floor(
        100000 + Math.random() * 900000
    ).toString();

    const expiresAt = new Date(
        Date.now() + 5 * 60 * 1000
    );

    await Otp.findOneAndUpdate(

        {
            email,
            purpose: "reset-password"
        },

        {
            email,
            otp,
            purpose: "reset-password",
            expiresAt,
            verified: false
        },

        {
            upsert: true,
            new: true
        }

    );

    await sendOtpEmail(email, otp);

    return res.json({
        message: "OTP sent successfully"
    });

});


// forgot pass verify otp
router.post("/auth/forgot-password/verify-otp", async (req, res) => {

    await ensureDB();

    const { email, otp } = req.body;

    if (!email || !otp) {
        return res.status(400).json({
            message: "Email and OTP are required"
        });
    }

    const otpRecord = await Otp.findOne({
        email,
        purpose: "reset-password"
    });

    if (!otpRecord) {
        return res.status(404).json({
            message: "OTP not found"
        });
    }

    if (otpRecord.expiresAt < new Date()) {

        await Otp.deleteOne({
            email,
            purpose: "reset-password"
        });

        return res.status(400).json({
            message: "OTP expired"
        });

    }

    if (otpRecord.otp !== otp) {

        return res.status(400).json({
            message: "Invalid OTP"
        });

    }

    otpRecord.verified = true;

    await otpRecord.save();

    return res.json({
        message: "OTP verified successfully"
    });

});


// reset pass
router.post("/auth/reset-password", async (req, res) => {

    await ensureDB();

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required"
        });
    }

    if (password.length < 6) {
        return res.status(400).json({
            message: "Password must be at least 6 characters"
        });
    }

    // Check verified reset-password OTP
    const otpRecord = await Otp.findOne({
        email,
        purpose: "reset-password"
    });

    if (!otpRecord) {
        return res.status(400).json({
            message: "Please verify OTP first"
        });
    }

    if (!otpRecord.verified) {
        return res.status(400).json({
            message: "Please verify OTP first"
        });
    }

    // Check OTP expiry
    if (otpRecord.expiresAt < new Date()) {

        await Otp.deleteOne({
            email,
            purpose: "reset-password"
        });

        return res.status(400).json({
            message: "OTP expired. Please request a new OTP."
        });

    }

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    // Prevent resetting to the same password
    const samePassword = await bcrypt.compare(
        password,
        user.passwordHash
    );

    if (samePassword) {
        return res.status(400).json({
            message: "New password cannot be the same as the current password"
        });
    }

    // Hash new password
    const passwordHash = await bcrypt.hash(password, 10);

    user.passwordHash = passwordHash;

    await user.save();

    // Delete OTP after successful reset
    await Otp.deleteOne({
        email,
        purpose: "reset-password"
    });

    return res.json({
        message: "Password updated successfully"
    });

});


// register user
router.post('/auth/register', async (req, res) => {

    await ensureDB();

    const { uname, email, password } = req.body || {};

    // // Validate username
    // if (!uname || typeof uname !== 'string' || uname.trim().length < 6) {
    //     return res.status(400).json({
    //         message: 'Username must be at least 6 characters'
    //     });
    // }

    // Validate email
    if (!email || typeof email !== 'string') {
        return res.status(400).json({
            message: 'Email is required'
        });
    }

    // Validate password
    if (!password || typeof password !== 'string' || password.length < 6) {
        return res.status(400).json({
            message: 'Password must be at least 6 characters'
        });
    }

    // Check if email already exists
    const existingEmail = await User.findOne({ email }).lean();

    if (existingEmail) {
        return res.status(409).json({
            message: 'Email already exists'
        });
    }

    // Check OTP verification
    const otpRecord = await Otp.findOne({
        email,
        purpose: "register"
    });

    if (!otpRecord) {
        return res.status(400).json({
            message: "Please verify your email first"
        });
    }

    if (!otpRecord.verified) {
        return res.status(400).json({
            message: "Please verify your email first"
        });
    }

    // Check OTP expiry
    if (otpRecord.expiresAt < new Date()) {

        await Otp.deleteOne({
            email,
            purpose: "register"
        });

        return res.status(400).json({
            message: "OTP expired. Please verify again."
        });

    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Trial dates
const now = new Date();

const expiry = new Date();
expiry.setDate(expiry.getDate() + 3);

// Create user
const user = await User.create({

    username: uname.trim(),

    email,

    passwordHash,

    subscription: {

        plan: "TRIAL",

        isActive: true,

        startDate: now,

        expiryDate: expiry,

        trialUsed: true

    }

});

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


    // Create user
    await User.create({
        username: uname.trim(),
        email,
        passwordHash
    });

    // Delete OTP after successful registration
    await Otp.deleteOne({
        email,
        purpose: "register"
    });

    return res.status(201).json({
        message: "Registration successful"
    });

});


router.post('/auth/login', async (req, res) => {
  const { email, password } = req.body || {};

  if (!email || typeof email !== 'string' || !password) {
    return res.status(400).json({ message: 'email and password are required' });
  }

    const user = await User.findOne({ email });  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }


  // Check subscription expiry
if (
  user.subscription &&
  user.subscription.isActive &&
  user.subscription.expiryDate &&
  new Date() > user.subscription.expiryDate
) {

  user.subscription.plan = "FREE";
  user.subscription.isActive = false;
  user.subscription.startDate = null;
  user.subscription.expiryDate = null;

  await user.save();

  await Subscription.findOneAndUpdate(
    {
      userId: user._id,
      status: "ACTIVE"
    },
    {
      status: "EXPIRED"
    },
    {
      sort: { createdAt: -1 }
    }
  );

}

  const { token } = signAccessToken({
    username: user.username,
    email: user.email,
    userId: user._id,
  });
  return res.json({ token });
});


router.post('/auth/logout', authMiddleware, (req, res) => {
  if (req.user?.jti) {
    blacklistedJtis.add(req.user.jti);
  }
  return res.json({ message: 'Logged out' });
});

router.get('/auth/me', authMiddleware, (req, res) => {
  return res.json({
    user: {
      username: req.user.username,
      email: req.user.email,
    },
  });
});

router.use('/user-question-bank', authMiddleware, UserQuestionBankController);


router.use('/user-job-portals', authMiddleware, UserJobPortalsController);

// upload resume controller 
router.use('/resume', authMiddleware, UserResumeController);

// user profile 
router.use('/profile', authMiddleware, UserProfileControlller);

// change-password
router.use('/change-password',authMiddleware, UserChangePassword);

module.exports = router;


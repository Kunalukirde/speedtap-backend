// User routes (auth demo)
// This module is mounted at: app.use('/api', UserApiRoutes)

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();

// Access shared in-memory stores from the parent module via require cache.
// We'll fall back to module-local stores if not present.
const state = (() => {
  try {
    // eslint-disable-next-line global-require
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



function signAccessToken({ username, email }) {
  const jti = `${Date.now()}-${Math.random().toString(16).slice(2)}`;

  const token = jwt.sign(
    { sub: username, email },
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

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing Authorization header' });
  }

  const token = authHeader.slice('Bearer '.length);

  try {
    const payload = jwt.verify(token, JWT_SECRET, {
      algorithms: ['HS256'],
      issuer: JWT_ISSUER,
    });

    if (payload?.jti && blacklistedJtis.has(payload.jti)) {
      return res.status(401).json({ message: 'Token has been logged out' });
    }

    req.user = {
      username: payload.sub,
      email: payload.email,
      jti: payload.jti,
    };

    return next();
  } catch {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}

router.get('/live', (req, res) => {
    return res.json({ message: 'Server is live' });
}); 

router.post('/auth/register', async (req, res) => {
  await ensureDB();

  const { uname, email, password } = req.body || {};

  if (!uname || typeof uname !== 'string' || uname.length < 6) {
    return res.status(400).json({ message: 'uname must be at least 6 characters' });
  }
  if (!email || typeof email !== 'string') {
    return res.status(400).json({ message: 'email is required' });
  }
  if (!password || typeof password !== 'string' || password.length < 6) {
    return res.status(400).json({ message: 'password must be at least 6 characters' });
  }

  const existing = await User.findOne({ username: uname }).lean();
  if (existing) {
    return res.status(409).json({ message: 'User already exists' });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await User.create({ username: uname, email, passwordHash });

  return res.status(201).json({ message: 'Registration successful' });
});


router.post('/auth/login', async (req, res) => {
  const { email, password } = req.body || {};

  if (!email || typeof email !== 'string' || !password) {
    return res.status(400).json({ message: 'email and password are required' });
  }

  const user = await User.findOne({ email: email }).lean();
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const { token } = signAccessToken({ username: user.username, email: user.email });
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

module.exports = router;


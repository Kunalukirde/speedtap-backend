const jwt = require('jsonwebtoken');

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

const JWT_SECRET = state?.JWT_SECRET || process.env.JWT_SECRET || 'dev-secret-change-me';
const JWT_ISSUER = state?.JWT_ISSUER || process.env.JWT_ISSUER || 'matdash';

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
      userId: payload.userId,
      jti: payload.jti,
    };

    return next();
  } catch {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}

module.exports = authMiddleware;


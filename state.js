// Shared in-memory stores for demo auth.
// This file exists so route modules can share the same state.

const users = new Map();
const blacklistedJtis = new Set();

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';
const JWT_ISSUER = process.env.JWT_ISSUER || 'matdash';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

module.exports = {
  users,
  blacklistedJtis,
  JWT_SECRET,
  JWT_ISSUER,
  JWT_EXPIRES_IN,
};


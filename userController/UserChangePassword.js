const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');


/**
 * Change password controller.
 * Mounted with auth middleware.
 * Expects body: { currentPassword, newPassword, confirmNewPassword }
 */
router.post('/', async (req, res) => {
  try {
    const { currentPassword, newPassword, confirmNewPassword } = req.body || {};

    if (!currentPassword || typeof currentPassword !== 'string') {
      return res.status(400).json({ message: 'currentPassword is required' });
    }

    if (!newPassword || typeof newPassword !== 'string' || newPassword.length < 8) {
      return res
        .status(400)
        .json({ message: 'newPassword must be at least 8 characters' });
    }

    if (!confirmNewPassword || typeof confirmNewPassword !== 'string') {
      return res.status(400).json({ message: 'confirmNewPassword is required' });
    }

    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const email = req.user?.email;
    if (!email) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const ok = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!ok) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }

    user.passwordHash = await bcrypt.hash(newPassword, 10);
    await user.save();

    return res.json({ message: 'Password updated successfully' });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('UserChangePassword error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});




module.exports = router;


const express = require('express');
const router = express.Router();
const { encrypt } = require("../utils/crypto");

const JobPortal = require('../models/jobPortals');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const { decrypt } = require("../utils/crypto");

// Create/update (connect) a portal for the logged-in user
router.post('/', async (req, res) => {
  try {
    const { portalName,username, email, password, autoSync, autoApply, notes } = req.body || {};
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (!portalName || !username) {
      return res.status(400).json({ message: 'portalName and username are required' });
    }

    // Ensure user exists (and validates userId type)
    const userExists = await User.exists({ _id: userId });
    if (!userExists) {
      return res.status(404).json({ message: 'User not found' });
    }

    const encryptedPassword = encrypt(password);
    // Upsert portal connection (unique: userId+portalName)
    const portal = await JobPortal.findOneAndUpdate(
      { userId, portalName },
      {
        $set: {
          email,
          password: encryptedPassword,
          username: username,
          autoSync: autoSync ?? true,
          autoApply: autoApply ?? true,
          notes: notes ?? '',
          status: 'Connected',
          lastLogin: new Date(),
        },
      },
      {
        upsert: true,
        new: true,
      }
    );

    return res.status(201).json({ message: 'Portal connected', data: portal });
  } catch (err) {
    console.error('UserJobPortalsController error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});


// fetch all portals for the logged-in user
router.get('/', async (req, res) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const jobPortals = await JobPortal.find({ userId });
     const data = jobPortals.map(portal => {
                const obj = portal.toObject();
                obj.password = decrypt(obj.password);
                return obj;
            });
    
    return res.status(200).json({ message: 'Portals fetched', data: data });
  } catch (err) {
    console.error('UserJobPortalsController error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  } 
});

// delete a portal for the logged-in user
router.delete('/:portalId', async (req, res) => {
  try {
    const userId = req.user?.userId;
    const { portalId } = req.params;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    } 

    const portal = await JobPortal.findOneAndDelete({ _id: portalId, userId });
    if (!portal) {
      return res.status(404).json({ message: 'Portal not found' });
    }
    return res.status(200).json({ message: 'Portal deleted', data: portal });
  } catch (err) {
    console.error('UserJobPortalsController error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});


// connect or disconnect a portal for the logged-in user
router.post('/:portalId/connect-disconnect', async (req, res) => {
  try {
    const userId = req.user?.userId;
    const { portalId } = req.params;
    // console.log('Connect/Disconnect request for portalId:', portalId, 'by userId:', userId);

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const portal = await JobPortal.findOne({ _id:portalId, userId });
    if (!portal) {
      return res.status(404).json({ message: 'Portal not found' });
    }

   const status =
  portal.status === "Connected"
    ? "Disconnected"
    : "Connected";

const updatedPortal = await JobPortal.findByIdAndUpdate(
  portalId,
  { status },
  { new: true }
);

return res.json({
  message: `Portal ${status.toLowerCase()}`,
  data: updatedPortal,
});
  } catch (err) {
    console.error('UserJobPortalsController error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  } 

});










module.exports = router;
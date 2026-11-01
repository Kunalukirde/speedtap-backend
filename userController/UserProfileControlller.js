const express = require('express');
const router = express.Router();
const Profile = require("../models/UserProfile");
const calculateProfileCompletion = require("../utils/profileCompletion.js");

router.post('/', async (req, res) => {
  try {

    const userId = req.user.userId;

    const profileData = req.body.data;

    // console.log(profileData);

    const existingProfile = await Profile.findOne({ userId });

    if (existingProfile) {
      return res.status(400).json({
        success: false,
        message: "Profile already exists",
      });
    }

    const profile = await Profile.create({
      userId,
      ...profileData
    });

    return res.status(201).json({
      success: true,
      message: "Profile created successfully",
      data: profile
    });

  } catch (err) {

    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message
    });

  }
});



router.get("/", async (req, res) => {
  try {
    const userId = req.user.userId;

    const profile = await Profile.findOne({ userId });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    const completion = calculateProfileCompletion(profile);
    return res.status(200).json({
      success: true,
      data: profile,
      profileCompletion: completion
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});



router.put('/', async (req, res) => {
  try {
    const userId = req.user.userId;

    const profileData = req.body.data || req.body;

    const profile = await Profile.findOneAndUpdate(
      { userId },
      {
        $set: profileData
      },
      {
        new: true,
        upsert: true,       // Create if not found
        runValidators: true,
        setDefaultsOnInsert: true
      }
    );

     const completion = calculateProfileCompletion(profile);

    return res.status(200).json({
      success: true,
      message: "Profile saved successfully",
      data: profile,
      profileCompletion: completion
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
});



router.delete("/", async (req, res) => {
  try {
    const userId = req.user.userId;

    const profile = await Profile.findOneAndDelete({ userId });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Profile deleted successfully",
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});














module.exports = router;
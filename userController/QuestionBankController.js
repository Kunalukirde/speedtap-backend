const express = require('express');

const UserQuestionBank = require('../models/userQuestionBank.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Require authMiddleware to attach req.user.userId
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const docs = await UserQuestionBank.find({ userId })
      .sort({ createdAt: -1 })
      .lean();

    return res.json({ data: docs });
  } catch (err) {
    return res
      .status(500)
      .json({ message: err?.message || 'Failed to fetch question bank entries' });
  }
});

router.post('/', async (req, res) => {
  try {
    // Ignore any client-provided userId; always use token userId.
    const tokenUserId = req.user?.userId;
    if (!tokenUserId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { question, platform, date, mode, answerText } = req.body || {};

    if (!question || typeof question !== 'string') {
      return res.status(400).json({ message: 'question is required' });
    }
    if (!platform || typeof platform !== 'string') {
      return res.status(400).json({ message: 'platform is required' });
    }
    if (!date || typeof date !== 'string') {
      return res.status(400).json({ message: 'date is required' });
    }
    if (!mode || (mode !== 'exact' && mode !== 'contain')) {
      return res.status(400).json({ message: "mode must be 'exact' or 'contain'" });
    }
    if (!answerText || typeof answerText !== 'string') {
      return res.status(400).json({ message: 'answerText is required' });
    }

    const doc = await UserQuestionBank.findOneAndUpdate(
      { userId: tokenUserId, question, platform, mode },
      { $set: { date, answerText } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    return res.status(201).json({ data: doc });
  } catch (err) {
    return res.status(400).json({ message: err?.message || 'Failed to create answer' });
  }
});

// router.patch('/:id', async (req, res) => {
//   try {
//     const tokenUserId = req.user?.userId;

//     if (!tokenUserId) {
//       return res.status(401).json({
//         message: 'Unauthorized'
//       });
//     }

//     const { id } = req.params;
//     const {
//       answerText,
//       date,
//       mode,
//       question,
//       platform
//     } = req.body || {};

//     // Get existing document
//     const existingDoc = await UserQuestionBank.findOne({
//       _id: id,
//       userId: tokenUserId
//     });

//     if (!existingDoc) {
//       return res.status(404).json({
//         message: 'Question not found'
//       });
//     }

//     // Final values after update
//     const finalQuestion =
//       typeof question === 'string'
//         ? question.trim()
//         : existingDoc.question;

//     const finalPlatform =
//       typeof platform === 'string'
//         ? platform.trim()
//         : existingDoc.platform;

//     const finalMode =
//       mode === 'exact' || mode === 'contain'
//         ? mode
//         : existingDoc.mode;

//     // Check duplicate except current document
//     const duplicate = await UserQuestionBank.findOne({
//       _id: { $ne: id },
//       userId: tokenUserId,
//       question: finalQuestion,
//       platform: finalPlatform,
//       mode: finalMode
//     });

//     if (duplicate) {
//       return res.status(400).json({
//         success: false,
//         message: 'A question with the same Question, Platform and Mode already exists.'
//       });
//     }

//     const update = {};

//     if (typeof answerText === 'string')
//       update.answerText = answerText;

//     if (typeof date === 'string')
//       update.date = date;

//     if (typeof question === 'string')
//       update.question = finalQuestion;

//     if (typeof platform === 'string')
//       update.platform = finalPlatform;

//     if (mode === 'exact' || mode === 'contain')
//       update.mode = finalMode;

//     const doc = await UserQuestionBank.findOneAndUpdate(
//       {
//         _id: id,
//         userId: tokenUserId
//       },
//       update,
//       {
//         new: true,
//         runValidators: true
//       }
//     );

//     return res.json({
//       success: true,
//       data: doc
//     });

//   } catch (err) {

//     console.error(err);

//     return res.status(500).json({
//       success: false,
//       message: err.message || 'Failed to update'
//     });

//   }
// });

router.patch('/:id', async (req, res) => {
  try {
    const tokenUserId = req.user?.userId;

    if (!tokenUserId) {
      return res.status(401).json({
        message: 'Unauthorized'
      });
    }

    const { id } = req.params;

    const {
      answerText,
      date,
      mode,
      question,
      platform
    } = req.body || {};

    const existingDoc = await UserQuestionBank.findOne({
      _id: id,
      userId: tokenUserId
    });

    if (!existingDoc) {
      return res.status(404).json({
        message: 'Question not found'
      });
    }

    const update = {};

    if (typeof answerText === 'string') {
      update.answerText = answerText;
    }

    if (typeof date === 'string') {
      update.date = date.trim();
    }

    if (typeof question === 'string') {
      update.question = question.trim();
    }

    if (typeof platform === 'string') {
      update.platform = platform.trim();
    }

    if (mode === 'exact' || mode === 'contain') {
      update.mode = mode;
    }

    const doc = await UserQuestionBank.findOneAndUpdate(
      {
        _id: id,
        userId: tokenUserId
      },
      update,
      {
        new: true,
        runValidators: true
      }
    );

    return res.json({
      success: true,
      data: doc
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message || 'Failed to update'
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tokenUserId = req.user?.userId;
    if (!tokenUserId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { id } = req.params;
    const doc = await UserQuestionBank.findOneAndDelete({ _id: id, userId: tokenUserId });
    if (!doc) return res.status(404).json({ message: 'Not found' });
    return res.json({ message: 'Deleted', data: doc });
  } catch (err) {
    return res.status(400).json({ message: err?.message || 'Failed to delete' });
  }
});

module.exports = router;




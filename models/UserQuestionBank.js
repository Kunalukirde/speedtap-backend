const mongoose = require('mongoose');

const UserQuestionBankSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    platform: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String,
      required: true,
      trim: true,
    },
    mode: {
      // exact | contain
      type: String,
      required: true,
      enum: ['exact', 'contain'],
    },

    // New (cleaner) fields to store the question UI metadata
    questionType: {
      type: String,
      required: false,
      enum: ['radio', 'input', 'checkbox'],
    },
    options: {
      type: [String],
      required: false,
      default: [],
    },

    // Keep for backward compatibility with existing logic.
    // For these unanswered questions, we can store a null/placeholder.
    answerText: {
      type: String,
      required: false,
      trim: true,
    },

    // optional: tie it to a user if you’re sending auth token
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// Helpful uniqueness to avoid duplicates for same question/platform/mode/user.
UserQuestionBankSchema.index(
  { userId: 1, platform: 1, mode: 1 },
  { unique: true, sparse: true }
);

module.exports =
  mongoose.models.UserQuestionBank ||
  mongoose.model('UserQuestionBank', UserQuestionBankSchema);






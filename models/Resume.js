const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    originalName: {
      type: String,
      required: true
    },

    filename: {
      type: String,
      required: true
    },

    fileUrl: {
      type: String,
      required: true
    },

    size: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Resume", ResumeSchema);
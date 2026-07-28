const mongoose = require('mongoose');
const JobPortalSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    portalName: {
      type: String,
      required: true,
      enum: ["Naukri", "Foundit", "LinkedIn", "Indeed", "Apna"],
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    username: {
      type: String,
      required: true,
      trim: true,
    },

    // NEW FIELD
    searchUrls: {
      type: [String],
      default: [],
    },

    autoSync: {
      type: Boolean,
      default: true,
    },

    autoApply: {
      type: Boolean,
      default: true,
    },

    status: {
      type: String,
      enum: ["Connected", "Disconnected", "Error"],
      default: "Connected",
    },

    lastSync: {
      type: Date,
      default: null,
    },

    lastLogin: {
      type: Date,
      default: null,
    },

    applicationCountToday: {
      type: Number,
      default: 0,
    },

    notes: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const JobPortal = mongoose.model('JobPortal', JobPortalSchema);
module.exports = JobPortal;

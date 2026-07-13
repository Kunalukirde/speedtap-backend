const mongoose = require("mongoose");

const OtpSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true
    },

    otp: {
        type: String,
        required: true
    },

    purpose: {
        type: String,
        enum: ["register", "reset-password"],
        required: true
    },

    verified: {
        type: Boolean,
        default: false
    },

    expiresAt: {
        type: Date,
        required: true
    }

}, { timestamps: true });

OtpSchema.index({ email: 1, purpose: 1 }, { unique: true });

module.exports = mongoose.model("Otp", OtpSchema);
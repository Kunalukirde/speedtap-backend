const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
{
    username: String,
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    passwordHash: {
        type: String,
        required: true
    },
subscription: {
    plan: {
        type: String,
        enum: ["FREE", "TRIAL", "PROFESSIONAL", "PREMIUM"],
        default: "FREE"
    },

    isActive: {
        type: Boolean,
        default: false
    },

    pendingApproval: {
        type: Boolean,
        default: false
    },

    trialUsed: {
        type: Boolean,
        default: false
    },

    startDate: Date,

    expiryDate: Date
}
},
{ timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
























































































// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema(
//   {
//     username: { type: String },
//     email: { type: String, required: true, unique: true, index: true },
//     passwordHash: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model('User', UserSchema);


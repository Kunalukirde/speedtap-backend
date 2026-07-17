const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema(
{
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    planName: {
        type: String,
        enum: ["TRIAL", "PROFESSIONAL", "PREMIUM"],
        required: true
    },

    amount: {
        type: Number,
        default: 0
    },

    paymentMethod: {
        type: String,
        enum: ["TRIAL", "QR"],
        required: true
    },

    // User entered UPI transaction ID
    transactionId: {
        type: String,
        default: ""
    },

    // Optional screenshot path
    paymentScreenshot: {
        type: String,
        default: ""
    },

    // Waiting for admin approval?
    paymentStatus: {
        type: String,
        enum: ["PENDING", "APPROVED", "REJECTED"],
        default: "PENDING"
    },

    startDate: Date,

    expiryDate: Date,

    status: {
        type: String,
        enum: ["PENDING", "ACTIVE", "EXPIRED", "CANCELLED"],
        default: "PENDING"
    }

},
{
    timestamps: true
});

module.exports =
    mongoose.models.Subscription ||
    mongoose.model("Subscription", subscriptionSchema);
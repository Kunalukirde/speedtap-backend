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
        enum: ["TRIAL", "RAZORPAY"],
        required: true
    },

    paymentId: String,

    orderId: String,

    razorpaySignature: String,

    startDate: {
        type: Date,
        required: true
    },

    expiryDate: {
        type: Date,
        required: true
    },

    status: {
        type: String,
        enum: ["ACTIVE", "EXPIRED", "CANCELLED"],
        default: "ACTIVE"
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("Subscription", subscriptionSchema);
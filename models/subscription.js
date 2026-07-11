const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },

  planName: String,

  amount: Number,

  paymentId: String,

  orderId: String,

  startDate: Date,

  expiryDate: Date,

  status: {
    type: String,
    default: 'ACTIVE'
  }

}, { timestamps: true });

module.exports =
  mongoose.model(
    'Subscription',
    subscriptionSchema
  );
const mongoose = require('mongoose');

const NJobListingUrlSchema = new mongoose.Schema(
{
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },

    N_JobListingUrl: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('NJobListingUrl', NJobListingUrlSchema);
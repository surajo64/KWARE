const mongoose = require('mongoose');

const scheduleSchema = mongoose.Schema({
    staffId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    staffName: {
        type: String,
        required: true
    },
    date: {
        type: String, // Format: YYYY-MM-DD
        required: true
    },
    shift: {
        type: String,
        enum: ['Morning', 'Afternoon', 'Night'],
        required: true
    },
    time: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['regular', 'overtime'],
        default: 'regular'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

// Index for faster queries
scheduleSchema.index({ staffId: 1, date: 1 });

module.exports = mongoose.model('Schedule', scheduleSchema);

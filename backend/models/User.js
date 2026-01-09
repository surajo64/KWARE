const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    username: {
        type: String
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    role: {
        type: String,
        enum: ['admin', 'staff'],
        default: 'staff'
    },
    department: {
        type: String,
        default: 'General'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);

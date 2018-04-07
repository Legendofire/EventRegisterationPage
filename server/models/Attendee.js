const mongoose = require('mongoose');

const AttendeeSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    startup: {
        type: String
    },
    reason: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Attendee', AttendeeSchema);

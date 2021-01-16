const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
    serialNo: {
        type: Number,
        required: true
    }, 
    name: {
        type: String,
        required: true
    },
    college: {
        type: String
    },
    certificateType: {
        type: String
    },
    position: {
        type: Number
    }
});

module.exports = mongoose.model('certificates', certificateSchema);
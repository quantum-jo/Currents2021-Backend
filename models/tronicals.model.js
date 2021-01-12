const mongoose = require('mongoose');

const tronicalsSchema = new mongoose.Schema({
    volume_no: {
        type: Number,
        required: true
    },
    issue_no: {
        type: Number,
        required: true
    },
    image: {
        type: String
    }, 
    file_link: {
        type: String
    }
});

module.exports = mongoose.model('tronicals',tronicalsSchema);


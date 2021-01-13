const mongoose = require('mongoose');

const tronicalsSchema = new mongoose.Schema({
    volume_no: {
        type: String,
        required: true
    },
    issue_1_img: {
        type: String,
    },
    issue_2_img: {
        type: String,
    },
    issue_1_file: {
        type: String,
    },
    issue_1_file: {
        type: String,
    }
});

module.exports = mongoose.model('tronicals',tronicalsSchema);


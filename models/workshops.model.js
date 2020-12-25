const mongoose = require('mongoose');

const workshopsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    long_desc: {
        type: String
    },
    date: {
        type: String
    },
    prize: {
        type: Number
    },
    img: {
        type: String
    },
    poster: {
        type: String
    },
    reg_link: {
        type: String
    },
    rule_link: {
        type: String
    }
});

module.exports = mongoose.model('workshops', workshopsSchema);


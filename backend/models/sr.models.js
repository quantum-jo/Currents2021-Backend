const mongoose = require('mongoose');

const srSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
});

const SR = mongoose.model("sr",srSchema);

module.exports = SR;

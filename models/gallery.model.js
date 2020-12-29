const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    src: {
        type: String,
        required: true
    },
    width: {
        type: Number
    },
    height: {
        type: Number
    }
});

module.exports = mongoose.model('gallery', gallerySchema);
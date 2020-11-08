const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
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
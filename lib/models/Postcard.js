const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({

    title: {
        type: String
    },
    date: {
        type: String
    },
    price: {
        type: Number
    }
});

module.exports = mongoose.model('Postcard', schema);
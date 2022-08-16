const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: 'Book title'
    }, isbn: {
        type: String,
        required: 'Book isbn'
    },
    image: {
        type: String,
        required: 'Book image'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Books', BookSchema);
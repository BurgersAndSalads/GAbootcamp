const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puppySchema = new Schema({
    name: {
        type: String,
        require: true
    },
    breed: {
        type: String,
        default: "Mixed"
    },
    age: {
        type: Number,
        default: 0
    }
})

module.exports = ("Puppies", puppySchema);
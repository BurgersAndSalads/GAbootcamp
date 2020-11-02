const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    item: String,
    rating: Number,
    complaint: String
});


module.exports = mongoose.model('Products', productsSchema);
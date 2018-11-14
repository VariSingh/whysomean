const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {type: String, unique : true},
    description: {type: String},
    price: {type:Number},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
})

module.exports = mongoose.model('Product',ProductSchema);
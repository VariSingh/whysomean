const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    orderId: {type: String, unique : true},
    paid: {type: Boolean},
    price: {type:Number},
    products:[
        {   quantity: {type:Number},
            product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'} 
        }
    ]
})

module.exports = mongoose.model('Order',OrderSchema);
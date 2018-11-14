const Order = require('../../models/order/order.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    order = new Order({
        "paid": req.body.paid,
        "products":req.body.products
    })

    order.save((error,result)=>{
        if(error){
            return res.status(400).send(error);
        }else{
            return res.status(200).send(result);
        }
    })
};

// Retrieve and return all Products from the database.
exports.findAll = (req, res) => {
    Order.find({},{"__v":0})
    .populate({
        path:"products.product",
        populate: {
            path: "category"
        }
    })
    .exec((error,result)=>{
        if(error){
            res.status(400).send(error);
        }else{
            res.status(200).send(result);
        }
    })
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};
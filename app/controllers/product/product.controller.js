const Product = require('../../models/product/product.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    product = new Product({
        "name": req.body.name,
        "description":req.body.description,
        "price":req.body.price,
        "category":req.body.category,
    })

    product.save((error,result)=>{
        if(error){
            return res.status(400).send(error);
        }else{
            return res.status(200).send(result);
        }
    })
};

// Retrieve and return all Products from the database.
exports.findAll = (req, res) => {
    Product.find({},{"__v":0})
    .populate('category')
    .exec((error,result)=>{
        console.log("error ==> ",error);
        console.log("result ==> ",result);
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
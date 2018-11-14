const Category = require('../../models/category/category.model.js');

// Create and Save a new Category
exports.create = (req, res) => {
    category = new Category({
        "name": req.body.name,
    })

    category.save((error,result)=>{
        if(error){
            return res.status(401).send(error);
        }else{
            return res.status(200).send(result);
        }
    })
};

// Retrieve and return all Category from the database.
exports.findAll = (req, res) => {
    Category.find({},{"__v":0},(error,result)=>{
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
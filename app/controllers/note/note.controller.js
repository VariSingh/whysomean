let Note = require('../../models/note/note.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    Note = new Note({
        "title": req.body.title,
        "note":req.body.note
    })

    Note.save((error,result)=>{
        if(error){
            return res.status(400).send(error);
        }else{
            return res.status(200).send(result);
        }
    })
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {

};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Note.find({},{"__v":0},(error,result)=>{
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
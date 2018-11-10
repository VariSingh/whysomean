var express = require('express');
var router = express.Router();

var notes_controller = require('../controllers/note/note.controller');


router.get("/note",(req,res) => notes_controller.findOne(req,res))
router.post("/note",(req,res) => notes_controller.create(req,res))


module.exports = router;
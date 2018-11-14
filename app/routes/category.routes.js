var express = require('express');
var router = express.Router();

var category_controller = require('../controllers/category/category.controller');


router.get("/category",(req,res) => category_controller.findAll(req,res))
router.post("/category",(req,res) => category_controller.create(req,res))
router.put("/category",(req,res) => category_controller.update(req,res))
router.delete("/category",(req,res) => category_controller.delete(req,res))


module.exports = router;
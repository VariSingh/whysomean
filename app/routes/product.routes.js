var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/product/product.controller');


router.get("/product",(req,res) => product_controller.findAll(req,res))
router.post("/product",(req,res) => product_controller.create(req,res))


module.exports = router;
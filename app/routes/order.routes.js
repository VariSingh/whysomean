var express = require('express');
var router = express.Router();

var order_controller = require('../controllers/order/order.controller');


router.get("/order",(req,res) => order_controller.findAll(req,res))
router.post("/order",(req,res) => order_controller.create(req,res))


module.exports = router;
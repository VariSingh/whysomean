var express = require('express');
var router = express.Router();

var auth_controller = require('../controllers/auth/auth.controller');


router.post("/signup",(req,res) => auth_controller.signup(req,res))
router.post("/login",(req,res) => auth_controller.login(req,res))


module.exports = router;
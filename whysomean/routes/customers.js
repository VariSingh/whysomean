/**
 * Created by cl-macmini-05 on 26/05/16.
 */


var express = require('express');
var router = express.Router();
var customers = require('../models/customers');
var md5 = require('md5');


router.get('/login', function(req, res, next) {
    var query = {
        username: req.query.username,
        password: md5(req.query.password)
    }
    var username = {
        username: req.query.username
    }


    customers.find(username,function(err,result){
        if(!err){
            res.status(200);
            if(result==""){
                res.send("username not found");
            }else{
                customers.find(query,function(err,result){
                   if(!err){
                       if(result==""){
                           res.send("invalid password")
                       }else{
                           res.send("successfully logged in");
                       }

                   }else{
                       res.send(err);
                   }
                });
            }
        }else{
            res.render(err);
        }
    });

});



router.get('/register', function(req, res, next) {

   var customer = new customers({
       username: req.query.username,
       password:md5(req.query.password)
   });

    customer.save(function(err,result){
        if(!err){
            res.status(200);
            res.send(result);
        }else{
            res.render(err);
        }
    });

});






module.exports = router;

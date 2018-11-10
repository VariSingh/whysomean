const mongoose = require('mongoose');

const SignupSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String
},{
    timestamp:true
})

module.exports = mongoose.model('Signup',SignupSchema);
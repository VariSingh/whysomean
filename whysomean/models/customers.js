/**
 * Created by cl-macmini-05 on 26/05/16.
 */

var mongoose = require("mongoose");
var Schema  = mongoose.Schema;



var customersSchema = new Schema({
    username: String,
    password: String
});


module.exports =  mongoose.model("Customers",customersSchema);

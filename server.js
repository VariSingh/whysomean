const express = require('express');
const bodyParser = require('body-parser');
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const io = require("socket.io").listen(3001);
const redis = require('redis');

//redis
const client = redis.createClient(); //creates a new client

client.on('connect',()=>{
    console.log("connected to redis");
})


client.hgetall('myhash', function(err, result) {
    console.log("redis result",result);
});



io.on("connection",(socket)=>{
    console.log("new user connected");

    socket.on("testmessage",(data)=>{
        console.log(data.message);
    })
    
    socket.on("disconnect",()=>{
        console.log("user disconnected");
    })
})



mongoose.connect(dbConfig.url,{
    useNewUrlParser: true
},() =>{
    console.log("Successfully connected to the database");   
},(err)=>{
    console.log('Could not connect to the database. Exiting now...', err);
})

const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

//serve static resources
app.use(express.static('public'));

// define a simple route
// app.get('/', (req, res) => {
//     res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
// });
let noteRoutes = require('./app/routes/note.routes.js');
let authRoutes = require('./app/routes/auth.routes.js');
let categoryRoutes = require('./app/routes/category.routes.js');
let productRoutes = require('./app/routes/product.routes.js');
let orderRoutes = require('./app/routes/order.routes.js');

app.use("/",noteRoutes);
app.use("/",authRoutes);
app.use("/",categoryRoutes);
app.use("/",productRoutes);
app.use("/",orderRoutes);

app.listen(3000, function() {
    console.log('listening on 3000')
})


//   app.get('/', function (request, response) {
//     console.log("get path /");
//   })
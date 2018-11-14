const jwt_secret = require('../../../settings/keys.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let Signup = require('../../models/auth/signup.model.js');


// Create and Save a new user
exports.signup = (req, res) => {

    let hash = bcrypt.hashSync(req.body.password, 10);

    Signup = new Signup({
        "name": req.body.name,
        "email": req.body.email,
        "password": hash
    })

    Signup.save((error,result)=>{
        if(error){
            return res.status(400).send(error);
        }else{
            return res.status(200).send(result);
        }
    })
};

// Login
exports.login = (req, res) => {


    let query = {
        email : req.body.email
    }

    Signup.findOne(query,(error,result)=>{
       if(!error){
           if(result){

            let compare = bcrypt.compareSync(req.body.password,result.password);
            let user_data = { 
                email: result.email,
                fullName: result.name,
                _id: result._id
            }
            console.log("jwt_secret ",jwt_secret.secret_key);
            if(compare){
                let token = jwt.sign(user_data,jwt_secret.secret_key)
                res.status(200).send({"message":"logged in successfuly","token": token});
            }else{
                res.status(401).send({"message":"invalid username or password"});
            }
           }else{
            res.status(401).send({"message":"invalid username or password"});
           }

       }else{
        res.status(500).send(error);
       }

    })

};
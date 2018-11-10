let Signup = require('../../models/auth/signup.model.js');
const bcrypt = require('bcrypt');



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
        let compare = bcrypt.compareSync(req.body.password,result.password);
        if(compare){
            res.status(200).send({"message":"logged in successfuly"});
        }else{
            res.status(403).send({"message":"invalid username or password"});
        }
       }else{
        res.status(500).send(error);
       }

    })

};
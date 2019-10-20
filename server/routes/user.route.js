const express = require('express');
const app = express();
const userRoutes = express.Router();

// Require Product model in our routes module
let User = require('../models/User');

// Defined store route
userRoutes.route('/add').post(function (req, res) {
  let user = new User(req.body);
  user.save()
    .then(user => {
      res.status(200).json({'User': 'User has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
userRoutes.route('/signin').post(function (req, res) {
    let email = req.body.email;
    let pass = req.body.password;
    User.find({ email: email}, function (err, user){
        if(user && user.length > 0){
            res.json(user[0].password===pass);
          }else{
            res.status(401).send("not authorized");
          }
          if(err) {
            console.log(err);            
            res.status(500).send("not authorized");
          }
    });  
});

module.exports = userRoutes;
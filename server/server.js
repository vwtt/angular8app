const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');


    let User = require('./models/User');
    User.find(function (err, users){
      if(users.length === 0){
          console.log('adding some users');
          let admin = new User({email: "vikram@srirangam.com", password: "Testeract#2019"});
          admin.save()
            .then(user => {
              console.log('Admin has been added successfully');
            })
            .catch(err => {
              console.log(err);
            });
        }
  }); 

   const productRoute = require('./routes/product.route');
   const userRoute = require('./routes/user.route');
    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/products', productRoute);
    app.use('/users', userRoute);
    const port = process.env.PORT || 4000;

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });
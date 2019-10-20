const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let User = new Schema({
  email: {
    type: String
  },
  password: {
    type: String
  }
},{
    collection: 'User'
});

module.exports = mongoose.model('User', User);
// Importing Mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose;


// Creating User Schema
const userSchema = new Schema({
  username:  String,
  password: String
});

const User = mongoose.model('User', userSchema);


// Exporting User Model
module.exports = User;
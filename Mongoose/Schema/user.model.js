var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var users = new Schema({
  user_name: { type: String, require: true, unique: true},
  password: { type: String, require: true},
  full_name: String,
  email: { type: String, require: true, unique: true},
  date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('userReg', users);

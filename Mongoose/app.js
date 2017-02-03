var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var userSchema = require('./Schema/user.model.js')

mongoose.db = connect('mongodb://localhost:27017/my_database_name');

app.listen('3000', function(){
  console.log('The server are runing, port: 3000');
});

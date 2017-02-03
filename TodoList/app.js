var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//Set engine
app.set('view engine', 'ejs');

//Ststic files, Withot the name mean it for everry route
app.use(express.static('./public'));

//Fire controller function
todoController(app);

//Listen to a port
app.listen(3000);
console.log('The server in 3000 port are starting...');

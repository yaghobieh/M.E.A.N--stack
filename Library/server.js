var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('library', ['library']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/bookList', function(req, res) {
  db.library.find(function(err, docs){
    res.json(docs);
  });
});

app.post('/bookList', function(req, res){
  db.library.insert(req.body, function(err, doc){
    res.json(doc)
  })
});

app.delete('/bookList/:id', function(req, res){
  var id= req.params.id;
  db.library.remove({_id:mongojs.ObjectId(id)}, function(err, doc){
      res.json(doc);
  })
});

// app.get('/addnewbook', function(req, res) {
//     console.log('someone ask for acsses to the add new book page');
// });

app.listen(3000);
console.log('This server on port 3000');

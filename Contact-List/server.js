var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['users']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/public', function(req, res) {
    db.users.find(function(err, docs) {

        res.json(docs);
    });
});

app.post('/public', function(req, res) {
    db.users.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});

app.delete('/public/:id', function(req, res) {
    var id= req.params.id;
    db.users.remove({_id:mongojs.ObjectId(id)}, function(err, doc){
      res.json(doc);
    });
});

app.get('/public/:id', function(req, res){
  var id= req.params.id;
  db.users.findOne({_id:mongojs.ObjectId(id)}, function(err, doc){
    res.json(doc);
  });
});

app.put('/public/:id', function(req, res){
  var id= req.params.id;
  db.users.findAndModify({query:{_id:mongojs.ObjectId(id)},
  update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number }},
  new: true},
  function(err, doc){
    res.json(doc);
  });
});


app.listen('3000');
console.log('Server running on port 3000');

var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('todolist', ['item']);

var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'Make shopping'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app) {
    app.get('/todo', function(req, res) {
        //Remainder --> render will go auto to the folder views
        res.render('todo', { todos: data });
    });

    app.post('/todo', urlencodedParser, function(req, res){
      data.push(req.body);
      res.json(data);
    });

    app.delete('/todo/:item', function(req, res) {
      //Over in all item (the single item is the todo parameter)
      data = data.filter(function(todo){
        //If the item is not equ to the param, will return it
        return todo.item.replace(/ /g, '-') !== req.params.item;
      });

      res.json(data);
    });
}

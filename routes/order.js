var model = require('../model.js') 

var ingredient = model.ingredient;
var order =  model.order;

exports.new = function(req, res){
	ingredient.find({}).exec(function(err, ingredientslist){
		
		res.render('neworder', {title: "Order a Burger:", ingredients: ingredientslist });
	});
};

exports.create = function(req, res){
    console.log("Trying to read ingredient")
    console.log(req.body)
    console.log("did it work")

    var neworder = new order({customerName: req.body.Name, ingredients: req.body.ingredient})
    neworder.save(function (err) {
        if (err) 
            console.log("error", err);
    });


}

exports.index = function (req, res) {
  res.render('index', {
    title: 'Todo list',
    todos: todos
  });
};

exports.index_post = function (req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
};

exports.index_delete = function (req, res) {
  todos.splice(parseInt(req.params.id), 1);
  res.redirect('/');
};

exports.orders = function(req, res){
    console.log("here")
    var orders = order.find({}).populate('ingredients').exec(function (err, docs) {
        if (err)
            return console.log("error", orders);
        console.log(docs)
        res.render('orders', { orders: docs, title: "Here are the orders!"  });
    }); 	
};

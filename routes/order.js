var model = require('../model.js') 
var ingredient = model.ingredient;
var order =  model.order;

exports.new = function(req, res){
	ingredient.find({}).exec(function(err, ingredientslist){
		
		res.render('neworder', {title: "Order a Burger:", ingredients: ingredientslist });
	});
};

exports.create = function(req, res){
    var neworder = new order({customerName: req.body.Name, ingredients: req.body.ingredient})
    neworder.save(function (err) {
        if (err) 
            console.log("error", err);
    });

}

exports.orders = function(req, res){
    var orders = order.find({}).populate('ingredients').exec(function (err, docs) {
        if (err)
            return console.log("error", orders);
        res.render('orders', { orders: docs, title: "Here are the orders!"  });
    }); 	
};


exports.update = function(req, res) {
    order.find({customerName:req.body.name}).exec(function(err, orders) {
        orders[0    ].remove()    
    }); 

    res.send("good job!")
}
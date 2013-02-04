var model = require('../model.js') 


var ingredient = model.ingredient;

exports.new = function(req, res){
	console.log("Hey thar");
	res.render('newingredient', {});
};





exports.create = function(req, res){
	console.log(req.body);
	var ingred = new ingredient({ingredient: req.body.ingredient, cost: req.body.Cost})
	ingred.save(function (err) {
    	if (err) 
	   		console.log("error", err);
		});
	res.send("Ingredient " + req.body.ingredient + " added.")
};
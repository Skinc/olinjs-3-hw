var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/burgers')


var schema = mongoose.Schema({ ingredient: String, cost: Number});
var ingredient = mongoose.model('Ingredient', schema);

var orderSchema = mongoose.Schema({
  customerName    : String,
  ingredients : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }]
});

order = mongoose.model('order', orderSchema)

exports.ingredient = ingredient
exports.order = order


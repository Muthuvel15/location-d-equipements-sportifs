const mongoose = require('mongoose');
const User = require('./user/User'); // Import du schéma de la collection "User"
const Product = require('./product/Product'); // Import du schéma de la collection "Product"

const PanierSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ 
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true }
  }]
});

const Panier = mongoose.model('Panier', PanierSchema);

module.exports = Panier;

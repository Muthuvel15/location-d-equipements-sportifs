const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  theme: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: { type: String, required: true }
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name required'],
  },
  price: {
    type: Number,
    required: [true, 'product price required'],
  },
  rating: {
    type: Number,
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Products = mongoose.model('Product', productSchema);

module.exports = Products;

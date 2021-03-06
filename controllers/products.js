const Product = require('../models/products');

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
};

const getAllDynamicProducts = async (req, res) => {
  const Products = await Product.find(req.query);
  res.status(200).json(Products);
};

module.exports = {
  getAllProducts,
  getAllDynamicProducts,
};

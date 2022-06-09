require('dotenv').config();
const connectDB = require('./db/connect');

const ProductsJson = require('./products.json');

const Products = require('./models/products');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Products.deleteMany();
    await Products.create(ProductsJson);
    console.log('success');
    process.exit();
  } catch (error) {
    console.error('error');
    process.exit();
  }
};

start();

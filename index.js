require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connect');
const productRouter = require('./routes/products');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

//route
app.use('/api/products', productRouter);

//server start
const start = async () => {
  try {
    //connect DB
    await connectDB(process.env.MONGO_URL);
    //listen port
    app.listen(port, console.log(`Server started at port ${port}...`));
  } catch (error) {
    console.error(error);
  }
};

start();

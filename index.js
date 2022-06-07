require('dotenv').config();
const express = require('express');
const { json } = require('express/lib/response');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

//route
app.get('/', (req, res) => {
  res.send('worked');
});

//server start
const start = async () => {
  try {
    //connect DB
    //listen port
    app.listen(port, console.log(`Server started at port ${port}...`));
  } catch (error) {
    console.error(error);
  }
};

start();

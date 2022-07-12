const express = require('express');
//cors is some middleware still not sure what it does. 
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
//not sure what this does



////////CONNECTING TO MONGODB
//need to add uri to environment varibales. 
///The database takes a long time to connect may need to do some async programming
const uri = "mongodb+srv://admin-claire-murphy:DRo4pOC5XjBUWYXh@cluster0.1knex.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("users");

  
  console.log("Connected successfully")
  // perform actions on the collection object
//   client.close();
});



///////

///Router for /log-in path
const userRouter = require(__dirname + '/routes/users');
app.use('/', userRouter);
////


app.listen(port, () => {
    console.log(`Server is runing on port: ${port}`);
});


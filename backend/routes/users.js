const router = require('express').Router();
const { default: mongoose } = require('mongoose');
let User = require("../models/user.models");
const { MongoClient, ServerApiVersion } = require('mongodb');

router.route('/').get(async (req,res) => {
try {
const uri = "mongodb+srv://admin-claire-murphy:DRo4pOC5XjBUWYXh@cluster0.1knex.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
await client.connect(err => {
  const collection = client.db("test").collection("users");
  const newUser = User({
    username: "clairemurphy",
    password: "password"
})
newUser.save();

  console.log("User Added!")
  // perform actions on the collection object
//   client.close();
});
    // finding all the users in the database

    res.send("Connected")
} catch (err) {
    res.status(400).json('Error' + err)

}});

router.route('/').post( async (req,res) => {
    try {
        const newUser = User({
            username: req.body.username,
            password: req.body.password
        });
        //this function saves the users to our database
        newUser.save();
        res.send("User added successfullly");
    } catch (err) {
        res.status.json('Error' + err);
    }
});
    
module.exports = router;
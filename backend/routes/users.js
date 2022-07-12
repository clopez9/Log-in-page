const router = require('express').Router();
let User = require("../models/user.models");

router.route('/').get(async (req,res) => {
try {
    //finding all the users in the database
   const users = await User.find()
    res.json(users);
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
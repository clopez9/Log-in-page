const router = require('express').Router();
let User = require("../models/user.models");

router.route('/').get( async(req,res) => {
try {
    const users = await User.find();
    // console.log('issue');
    res.send(users);
}catch (err) {
    console.log(err);
    res.status(400).json('Error' + err)

}});

router.route('/').post( async (req,res) => {
    try {
        const newUser = User({
            username: req.body.username,
            password: req.body.password
        });
        //this function saves the users to our database
        await newUser.save();
        res.send("User added successfullly");
    } catch (err) {
        res.json('Error' + err);
    }
});
    
module.exports = router;
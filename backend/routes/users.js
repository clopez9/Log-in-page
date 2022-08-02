const router = require('express').Router();
let User = require("../models/user.models");

router.route('/').get( async(req,res) => {
try {
    console.log(req.query);
    const users = await User.findOne({username: req.query.username});
    if(req.query.username === users.username){
        console.log('username is true');
        if(req.query.password === users.password){
            console.log('password is true');
            res.send([users, true]);
        } else {
            console.log('password is incorrect');
            console.log(users.password);
            res.send([null, false]);
        }
    } else {
        console.log('false');
        res.send([null, false]);
    }
    
}catch (err) {
    console.log(err);
    res.status(400).json('Error' + err);

}});

router.route('/').post( async (req,res) => {
    try {
        const newUser = User({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        });
        //this function saves the users to our database
        await newUser.save();
        res.send("User added successfullly");
    } catch (err) {
        res.json('Error' + err);
    }
});
    
module.exports = router;
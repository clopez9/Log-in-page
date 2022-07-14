const router = require('express').Router();
let User = require("../models/user.models");

router.route('/').get( async(req,res) => {
try {
  const newUser = User({
    username: "clairemuphy1",
    password: "password12"
});
    await newUser.save()

  console.log("User Added!");
    res.send("User Added!");
    
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
// router.route('/admin').post( async (req,res) => {
//     try {
//         console.log(req.body);

//     } catch (err) {
//         res.json('Error' + err);
//     }
// });
    
module.exports = router;
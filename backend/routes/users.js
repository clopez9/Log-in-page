const router = require('express').Router();
let User = require("../models/user.models");

router.route('/').get(async (req,res) => {
try {
   const users = await User.find()
    res.json(users);
} catch (err) {
    res.status(400).json('Error' + err)

}});
    
module.exports = router;
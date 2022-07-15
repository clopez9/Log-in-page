const router = require('express').Router();
let Quiz = require("../models/quiz.models");

router.route('/admin').post( async (req,res) => {
    try {
        console.log(req.body);
        

    } catch (err) {
        res.json('Error' + err);
    }
});

module.exports = router;
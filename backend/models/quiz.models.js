const mongoose = require('mongoose');
//This file is the schema for each user's log-in data
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    questions: {
        type: Array,
        required: true
    },

});
const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
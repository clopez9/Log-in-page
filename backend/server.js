const express = require('express');
//cors is some middleware still not sure what it does. 
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
//not sure what this does
app.use(express.json());


////////CONNECTING TO MONGODB

///This uses an environment variable for our atlas id. Check .env file
const uri = process.env.ATLAS_URI
//these flags are required to connect to mongodb
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully!")
});


///////

///Router for /log-in path
const userRouter = require(__dirname + '/routes/users');
app.use('/log-in', userRouter);
////


app.listen(port, () => {
    console.log(`Server is runing on port: ${port}`);
});


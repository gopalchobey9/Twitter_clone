const express = require('express');
const mongoose = require('mongoose');
// const User = require('./models/User');
const UserApi =require("./apis/UserApi");
const app = express();
const cors = require('cors');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/twitter_clone')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Define routes and middleware here
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors({origin:['http://localhost:3000']}));
app.use(UserApi);

app.get('/', (req,res)=>{
    res.send('Hello World');
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

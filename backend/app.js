const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const UserApi =require("./apis/UserApi");
const app = express();
const cors = require('cors');
const session =require("express-session");
const passport = require('passport');
const LocalStrategy = require('passport-local');



let configSession ={
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { 
       httpOnly: true,
    // expires :Date.now()+ 24*7*60*60*1000,
    //    maxAge:24*7*60*60*1000
             }
    } 

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/twitter_clone')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Define routes and middleware here
app.use(session(configSession));
passport.use(new LocalStrategy(User.authenticate()));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(UserApi);

app.get('/', (req,res)=>{
    res.send('Hello World');
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

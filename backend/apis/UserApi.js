// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');

const router = express.Router();

// User authentication route
router.post('/signup',  async (req, res) => {
    // Handle user authentication logic here
    // ...
    // console.log(req.body);
    const {email,username,password}=req.body;
    console.log(username);
    let newUser = new User({email,username})
    await User.register(newUser,password);
    res.redirect('/');
});
router.get('/login', (req, res) => {
    res.send('Welcome')
})

// Export the router
module.exports = router;

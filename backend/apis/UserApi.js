// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const passport = require('passport');

const router = express.Router();

// User authentication route
router.post('/signup',  async (req, res) => {
    try {
        const { email, username, password } = req.body;
        let newUser = new User({ email, username });
        await User.register(newUser, password);
        res.status(200).json({ success: true, message: 'Signup successful' });
      } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ success: false, message: 'Signup failed' });
      }
});
router.get('/home', (req, res) => {

})

router.post('/login', passport.authenticate('local', { 
}), (req, res)=> {
  console.log(req.user.createdAt)
  console.log(req.user.email)
    res.status(200).json({ success: true, message: 'Login successful' ,user:req.user,joindate:req.user.createdAt });
});
// Export the router
module.exports = router;

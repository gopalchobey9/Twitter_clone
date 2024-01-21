const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Route to save a new post
router.post('/posts', async (req, res) => {
    try {
        const { textData } = req.body;
        const newPost = new Post({ textData });
        await newPost.save();
        res.status(201).json({success:true, message: 'Post saved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to save post', error: error.message });
    }
});

// Route to get all posts
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve posts', error: error.message });
    }
});

module.exports = router;

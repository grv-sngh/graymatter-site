const express = require('express');
const router = express.Router();
const Post = require('../models/Post'); 

// Define API endpoints
router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// ... other API routes (create, update, delete)

// Create a new post
router.post('/create', async (req, res) => {
    try {
      const { title, content } = req.body;
  
      // Create a new post object
      const newPost = new Post({
        title,
        content,
      });
  
      // Save the post to the database
      const savedPost = await newPost.save();
  
      res.status(201).json(savedPost); 
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const Post = require('../models/Post'); 

// Get all posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get a single post by ID
router.get('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' }); 
    }
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// ... other API routes (create, update, delete)

// Create a new post
router.post('/create', async (req, res) => {
    try {
      const { title, content, imageUrl  } = req.body;
  
      // Create a new post object
      const newPost = new Post({
        title,
        content,
        imageUrl, 
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
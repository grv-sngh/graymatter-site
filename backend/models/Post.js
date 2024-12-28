const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  // ... other fields
});

// This is the name mongodb is using to automatically make collections with plurals and lowercase.
// Took years to figure this out and a whole 30 mins for this delaying my work in backend by a lot.
module.exports = mongoose.model('Post', PostSchema); 
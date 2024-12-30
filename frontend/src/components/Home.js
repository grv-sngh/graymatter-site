import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css'

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('https://symmetrical-invention-gj6gq6q6j44h9w9x-5000.app.github.dev/api/posts/'); //Huge mistake for not linking the front and backend and crying over not displayi9ng test for 5 mins.
        setPosts(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } 
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <div className="post-container">
      <h1>Blog Posts</h1>
        {posts.map((post) => (
          <div key={post._id} className="post-card">
            <a href={`https://symmetrical-invention-gj6gq6q6j44h9w9x-3000.app.github.dev/post/${post._id}`}>
              <h3>{post.title}</h3>
            </a>
            <p>{post.content.substring(0, 100)}...</p> <p>Author: {post.author}</p>
          </div>
        ))}
    </div>
    </div>
  );
}

export default Home;
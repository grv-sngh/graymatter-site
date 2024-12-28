import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
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
      <h1>My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}> 
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>Author: {post.author}</p> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
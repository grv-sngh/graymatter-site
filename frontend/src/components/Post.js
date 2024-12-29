import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 
import ReactMarkdown from 'react-markdown'; // Import a Markdown rendering library


function Post() {
  const [post, setPost] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`https://symmetrical-invention-gj6gq6q6j44h9w9x-5000.app.github.dev/api/posts/${id}`);
        setPost(res.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]); 

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>By {post.author}</p>
      {post.imageUrl && <img src={post.imageUrl} alt={post.title} />} 
      <ReactMarkdown children={post.content} /> 
      <h2>Actual content</h2>
      <p>{post.content}</p>
    </div> 
  );
}

export default Post;
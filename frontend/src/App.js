import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './components/Home'; // Import your Home component (or where you list all posts)
import Post from './components/Post'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/post/:id" element={<Post />} /> 
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './components/Home'; // Import your Home component (or where you list all posts)
import Post from './components/Post'; 
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/post/:id" element={<Post />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
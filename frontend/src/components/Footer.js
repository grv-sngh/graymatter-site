import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 
// import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-media">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <p>Designed by <a href="#" style={{ textDecoration: 'underline' }}>Gray</a></p> 
        <small>&copy; 2024 Your Blog Name. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
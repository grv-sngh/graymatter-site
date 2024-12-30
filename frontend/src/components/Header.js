import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../..public/logo12.png'; // Assuming your logo is in the 'assets' folder

const Header = () => {
  return (
    <header>
      <div className="container"> 
        <div className="logo">
          <Link to="/">
            {/* <img src={logo} alt="Your Blog Logo" />  */}
            <p>THE GRAY MATTER</p>
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li> 
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">LOGO</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      <button className="get-started">Get Started</button>
    </header>
  );
};

export default Header;

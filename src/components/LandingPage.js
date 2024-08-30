import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo">DinWave</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><button className="login-button">Login</button></li>
        </ul>
      </nav>
      <header className="header">
        <div className="header-content">
          <h1>DineWave</h1>
          <p>We Are A Restaurant Managing Software Company</p>
          <p>We Design And Innovate!</p>
        </div>
        <div className="header-images">
          <img src="/images/food1.jpg" alt="Food 1" />
          <img src="/images/food2.jpg" alt="Food 2" />
          <img src="/images/food3.jpg" alt="Food 3" />
          <img src="/images/food4.jpg" alt="Food 4" />
          <img src="/images/food5.jpg" alt="Food 5" />
        </div>
      </header>
      <footer className="footer">
        <marquee>Pizza|Panner|Aalo Parathe|Biryani|Dosa|Ragda|Chole Kulche|Dosa|Ragda|Chole</marquee>
      </footer>
    </div>
  );
};

export default LandingPage;
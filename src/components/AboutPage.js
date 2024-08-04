import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <nav className="navbar">
        <div className="logo">DineWave</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><button className="login-button">Login</button></li>
        </ul>
      </nav>
      <div className="about-content">
        <h1>About DineWave</h1>
        <img src="/images/logo.png" alt="DineWave Logo" className="about-logo" />
        <p className="description">DineWave is dedicated to providing the best dining experience.</p>
        <div className="mission-vision">
          <div className="mission">
            <h2>Our Mission:</h2>
            <p>We aim to revolutionize the dining industry by integrating advanced technology with exceptional culinary experiences.</p>
          </div>
          <div className="vision">
            <h2>Our Vision:</h2>
            <p>To be the leading provider of innovative restaurant management solutions worldwide.</p>
          </div>
        </div>
        <img src="/images/illustration.png" alt="Illustration" className="about-image" />
      </div>
    </div>
  );
};

export default AboutPage;

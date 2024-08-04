import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About DineWave</h1>
        <p>DineWave is dedicated to providing the best dining experience...</p>
      </header>
      <section className="about-content">
        <h2>Our Mission</h2>
        <p>We aim to revolutionize the dining industry by integrating advanced technology with exceptional culinary experiences.</p>
        <h2>Our Vision</h2>
        <p>To be the leading provider of innovative restaurant management solutions worldwide.</p>
      </section>
    </div>
  );
};

export default AboutPage;

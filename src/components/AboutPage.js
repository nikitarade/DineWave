import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="navbar">
        <div className="logo">DinWave</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <button className="login-button">Login</button>
        </ul>
      </header>

      <div className='about-box'>
        <div className="about-content">
          <h1>About </h1> 
          <div className="brand-container">
          <h2 className="brand-name">DinWave</h2>
          <img className="sound-wave" src="/images/logo_dinewave.png" alt="Sound Wave" />
          </div>

          
          
          <p className="about-description">DinWave is dedicated to providing the best dining experience.</p>
          

          <div className='robo-box'>
            <div className="content-wrapper">
              <img className="about-image" src="/images/about.jpg" alt="Illustration" />
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
            </div>
          </div>
          <br></br>

          <h2 className="automate">Automate | Productive | Efficiency | Innovate</h2>
          
        
        </div>
      </div>



      <br></br>




      <div className="additional-content">
        <div className="tech-stack">
          <h2>Tech-Stack</h2>
          <p>Web-Development | MERN | Computer-Vision | Deep Learning | Machine Learning | AI</p>
        </div>
        <div className="project-flow">
          <h2>Project Flow</h2>
          <p>call me when you make this part!</p>
        </div>
        <div className="research-paper">
          <h2>Research Paper</h2>
          <p>Our Published Research Paper</p>
        </div>
        <div className="team">
          <h2>Meet the Visionaries Behind Us</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="/path/to/member1.png" alt="Member 1" />
              <h3>MIRANDA</h3>
              <p>Head Design</p>
            </div>
            <div className="team-member">
              <img src="/path/to/member2.png" alt="Member 2" />
              <h3>JOHN</h3>
              <p>Lead Developer</p>
            </div>
            <div className="team-member">
              <img src="/path/to/member3.png" alt="Member 3" />
              <h3>SARA</h3>
              <p>Marketing Head</p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>Made By Nikita with ❤️</p>
      </footer>
    </div>
  );
};

export default AboutPage;
import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <main>
      <div className="text-content">
        <h1>Web Design</h1>
        <h2>Landing Page</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="learn-more">Learn More</button>
      </div>
      <div className="image-content">
        <img src="path/to/your/image.png" alt="Web Design Illustration" />
      </div>
    </main>
  );
};

export default MainContent;

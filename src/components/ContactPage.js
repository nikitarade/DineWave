import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <header className="navbar">
        <div className="logo">DinWave</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <button className="login-button">login</button>
        </ul>
      </header>
      <br></br>
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you! Please fill out the form below to get in touch.</p>
      </header>
      <section className="contact-form">
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
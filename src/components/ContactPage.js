import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);

    
    setFormData({ name: '', email: '', message: '' });

  };

  return (
    <><div className="about-page">
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
    </div><br></br><div className="contact-container">
        <h2>Contact Us</h2>
        <p className='contact-para'>We would love to hear from you! Please fill out the form below to get in touch.</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
          {submitted && <p className="success-message">Thank you! Your message has been sent.</p>}
        </form>
      </div></>
  );
};

export default ContactPage;

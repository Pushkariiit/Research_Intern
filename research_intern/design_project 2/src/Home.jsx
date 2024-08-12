// src/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-overlay">
        <div className="home-content">
          
          <a href="/about" className="home-button">Learn More</a>
          <a href="/contact" className="home-button">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us hidden-scrollbar">
      <h1>Welcome to Our Website</h1>
      <p className="intro">
        Embark on a journey of discovery and excitement! Our Website is your gateway to extraordinary experiences, blending flavors, magic, and insights.
      </p>
      <div className="sections">
        <div className="section">
          <h2>🍴 Exquisite Meals</h2>
          <p>Satisfy your cravings with a collection of delectable recipes crafted for every occasion.</p>
          <ul>
            <li>Global cuisines and contemporary dishes.</li>
            <li>Step-by-step guides for effortless cooking.</li>
            <li>Nutritious meal ideas for health enthusiasts.</li>
          </ul>
        </div>
        <div className="section">
          <h2>🍹 Mocktail Marvels</h2>
          <p>Explore a realm of refreshing mocktails designed to invigorate your senses.</p>
          <ul>
            <li>Vibrant mocktail recipes for every mood.</li>
            <li>Expert tips for crafting the perfect drink.</li>
            <li>Non-alcoholic delights for everyone to enjoy.</li>
          </ul>
        </div>
        <div className="section">
          <h2>🧙‍♂️ Harry Potter Universe</h2>
          <p>Step into the enchanting world of Harry Potter, where magic comes alive.</p>
          <ul>
            <li>Quizzes to test your wizarding knowledge.</li>
            <li>Trivia and insights about the Wizarding World.</li>
            <li>Interactive content to relive the magic.</li>
          </ul>
        </div>
        <div className="section">
          <h2>🏦 Bank Hub</h2>
          <p>Navigate the financial landscape with ease.</p>
          <ul>
            <li>Locate banks and branches near you.</li>
            <li>Comprehensive branch and service details.</li>
            <li>Guides to help you understand banking facilities.</li>
          </ul>
        </div>
      </div>
      <p className="cta">Ready to dive in? Click on the navigation links above to explore each section!</p>
    </div>
  );
};

export default AboutUs;

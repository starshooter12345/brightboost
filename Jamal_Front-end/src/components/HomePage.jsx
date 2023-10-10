// src/components/HomePage.jsx

import React from 'react';
import { useHistory } from 'react-router-dom';

function HomePage() {
  const history = useHistory();

  const handleLogoClick = () => {
    history.push('/'); // Redirects to the home page
  };

  return (
    <div className="home-page">
      <h1>Welcome to Bright Boost</h1>
      <img 
        src="/path/to/your/logo.png" // Update this to your logo's path
        alt="Bright Boost Logo"
        onClick={handleLogoClick}
        style={{ cursor: 'pointer' }} // Makes the logo act as a clickable element
      />
    </div>
  );
}

export default HomePage;

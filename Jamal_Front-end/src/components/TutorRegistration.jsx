import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function TutorRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    email: '',
    expertise: '',
  });

  const history = useHistory();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send the form data to the backend/API
    console.log('Tutor Registered:', formData);

    // After registration, redirect the user to the login page
    history.push('/login'); // adjust the path as per your route definition
  };

  return (
    <div>
      <h2>Tutor Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Expertise:
          <input type="text" name="expertise" value={formData.expertise} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default TutorRegistration;

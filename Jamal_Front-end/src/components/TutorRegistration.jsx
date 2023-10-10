import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function TutorRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    email: '',
    expertise: '',
    availability: {
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
    },
  });

  const history = useHistory();

  const handleCheckboxChange = (day) => {
    setFormData(prevState => ({
      ...prevState,
      availability: {
        ...prevState.availability,
        [day]: !prevState.availability[day]
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tutor Registered:', formData);
    history.push('/login');
  };

  return (
    <div>
      <h2>Tutor Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        </label>
        <br />
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
        </label>
        <br />
        <label>
          Expertise:
          <input type="text" name="expertise" value={formData.expertise} onChange={(e) => setFormData({ ...formData, expertise: e.target.value })} required />
        </label>
        <br />

        <div>
          <label>Availability:</label>
          {["Monday 8:30 -4:30", "Tuesday 8:30 -4:30", "Wednesday 8:30 -4:30", "Thursday 8:30 -4:30", "Friday 8:30 -4:30"].map(day => (
            <div key={day}>
              <input 
                type="checkbox" 
                name={day}
                checked={formData.availability[day]} 
                onChange={() => handleCheckboxChange(day)} 
              />
              <label>{day}</label>
            </div>
          ))}
        </div>
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default TutorRegistration;

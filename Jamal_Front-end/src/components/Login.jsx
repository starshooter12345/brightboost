import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student');

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy login validation logic (for demonstration purposes)
    // In real-world applications, you'd validate the credentials against a backend.

    if (role === 'Tutor') {
      history.push('/tutors/sidenav'); 
    } else if (role === 'Student') {
      history.push('/students/sidenav'); 
    } else if (role === 'Admin') {
      history.push('/admin-dashboard'); 
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Role:
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="Student">Student</option>
              <option value="Tutor">Tutor</option>
              <option value="Admin">Admin</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Username:
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </label>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>

      <div>
        <p>Don't have an account?</p>
        <Link to="/student-registration">Register as Student</Link>
        <span> | </span>
        <Link to="/tutor-registration">Register as Tutor</Link>
      </div>
    </div>
  );
}

export default Login;

import React from 'react';
import { Link } from 'react-router-dom';
import './Student.css'

function StudentSideNav() {
  return (
    <nav>
      <ul>
        <li><Link to="/students/ask-question">Ask a Question</Link></li>
        <li><Link to="/students/tutor-availability">Tutor Availability</Link></li>
      </ul>
    </nav>
  );
}

export default StudentSideNav;

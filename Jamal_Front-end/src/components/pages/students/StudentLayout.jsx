import React from 'react';
import './Student.css';
import StudentSideNav from './StudentSideNav';

const StudentLayout = ({ children }) => {
  console.log(children);
  return (
    <div className="studentLayout">
      <StudentSideNav />
      <div className="studentMainContent">
        { children}
      </div>
    </div>
  );
}

export default StudentLayout;

import React from 'react';
import StudentSideNav from './StudentSideNav';

const StudentLayout = ({ children }) => {
  return (
    <div className="studentLayout">
      <StudentSideNav />
      <div className="studentMainContent">
        {children}
      </div>
    </div>
  );
}

export default StudentLayout;

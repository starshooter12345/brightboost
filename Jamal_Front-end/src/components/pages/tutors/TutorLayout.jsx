import React from 'react';
import './Tutor.css';
import TutorSideNav from './TutorSideNav';

const TutorLayout = ({ children }) => {
  console.log(children);
  return (
    <div className="tutorLayout">
      <TutorSideNav />
      <div className="tutorMainContent">
        {children}
      </div>
    </div>
  );
}

export default TutorLayout;

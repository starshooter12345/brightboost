import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import StudentRegistration from './components/StudentRegistration';
import TutorRegistration from './components/TutorRegistration';

import AdminDashboard from './components/pages/AdminDashboard/AdminDashboard';

import StudentSideNav from './components/pages/students/StudentSideNav';
import AskQuestion from './components/pages/students/AskQuestion'
import TutorAvailability from './components/pages/students/TutorAvailability';

import TutorSideNav from './components/pages/tutors/TutorSideNav';
import SessionDetails from './components/pages/tutors/SessionDetails';
import ViewQuestions from './components/pages/tutors/ViewQuestions';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/student-registration" component={StudentRegistration} />
          <Route path="/tutor-registration" component={TutorRegistration} />
          <Route path="/admin-dashboard" component={AdminDashboard} />
          
          {/* Routes for student pages */}
          <Route path="/students/sidenav" component={StudentSideNav} />
          <Route path="/students/ask-question" component={AskQuestion} />
          <Route path="/students/tutor-availability" component={TutorAvailability} />

          {/* Routes for tutor pages */}
          <Route path="/tutors/sidenav" component={TutorSideNav} />
          <Route path="/tutors/session-details" component={SessionDetails} />
          <Route path="/tutors/view-questions" component={ViewQuestions} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

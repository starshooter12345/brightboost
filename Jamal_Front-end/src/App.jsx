import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Login from './components/Login';
import StudentRegistration from './components/StudentRegistration';
import TutorRegistration from './components/TutorRegistration';
/*AdminDashboard*/
import AdminDashboard from './components/pages/AdminDashboard/AdminDashboard';
/*students*/
import StudentDashboard from './components/pages/students/StudentDashboard';
import AskQuestion from './components/pages/students/AskQuestion'
import TutorAvailability from './components/pages/students/TutorAvailability';
/*Tutor*/
import TutorDashboard from './components/pages/tutors/TutorDashboard';
import SessionDetails from './components/pages/tutors/SessionDetails';
import ViewQuestions from './components/pages/tutors/ViewQuestions';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/student-registration" component={StudentRegistration} />
          <Route path="/tutor-registration" component={TutorRegistration} />
          {/* Routes for Admin pages */}
          <Route exact path="/admin-dashboard" component={AdminDashboard} />
          {/* Routes for student pages */}
          <Route exact path="/students" component={StudentDashboard}></Route>
            <Route path="/students/ask-question" component={AskQuestion} />
            <Route path="/students/tutor-availability" component={TutorAvailability} />
          {/* Routes for tutor pages */}
          <Route exact path="/tutors" component={TutorDashboard} />
            <Route path="/tutors/session-details" component={SessionDetails} />
            <Route path="/tutors/view-questions" component={ViewQuestions} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

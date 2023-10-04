import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import StudentRegistration from './components/StudentRegistration';
import TutorRegistration from './components/TutorRegistration';
/*AdminDashboard*/
import AdminDashboard from './components/pages/AdminDashboard/AdminDashboard';
/*students*/
import StudentLayout from './components/pages/students/StudentLayout'
import AskQuestion from './components/pages/students/AskQuestion'
import TutorAvailability from './components/pages/students/TutorAvailability';
/*Tutor*/
/*import TutorLayout from './components/pages/tutors/TutorLayout';
import SessionDetails from './components/pages/tutors/SessionDetails';
import ViewQuestions from './components/pages/tutors/ViewQuestions';*/

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
          {/* Routes for tutor pages */}
          <Route path="/students/ask-question">
          <StudentLayout>
            <AskQuestion />
            </StudentLayout>
          </Route>

          <Route path="/students/tutor-availability">
          <StudentLayout>
            <TutorAvailability />
            </StudentLayout>
          </Route>

          {/*<Route path="/tutors/session-details">
            <TutorLayout>
            <SessionDetails />
            </TutorLayout>
          </Route>

          <Route path="/tutors/view-questions">
          <TutorLayout>
            <ViewQuestions />
            </TutorLayout>
          </Route>*/}

        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

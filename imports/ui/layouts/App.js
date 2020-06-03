/* eslint-disable import/no-named-default, react/destructuring-assignment */

// import packages
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// import navbar
import Navbar from '../components/Navbar';

// import routes
import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import NotFound from '../pages/Not-Found';
import RecoverPassword from '../pages/RecoverPassword';
import ResetPassword from '../pages/ResetPassword';
import TermsOfUse from '../pages/TermsOfUse';
import PrivacyPolicy from '../pages/PrivacyPolicy';

// import Spinner
import Spinner from '../components/Spinner';

// import hoc to pass additional props to routes
import PropsRoute from '../pages/PropsRoute';
import Footer from '../components/Footer/index';

const App = (props) => (
  <Router>
    <div
      style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}
    >
      <PropsRoute component={Navbar} {...props} />
      <div style={{ flex: 1 }}>
        {props.loggingIn && <Spinner />}
        <Switch>
          <PropsRoute exact path="/" component={Landing} {...props} />
          <PropsRoute path="/signin" component={SignIn} {...props} />
          <PropsRoute path="/signup" component={SignUp} {...props} />
          <PropsRoute exact path="/profile" component={Profile} {...props} />
          <PropsRoute
            exact
            path="/profile/:_id"
            component={Profile}
            {...props}
          />
          <PropsRoute
            path="/recover-password"
            component={RecoverPassword}
            {...props}
          />
          <PropsRoute
            path="/reset-password/:token"
            component={ResetPassword}
            {...props}
          />
          <PropsRoute path="/terms-of-use" component={TermsOfUse} {...props} />
          <PropsRoute
            path="/privacy-policy"
            component={PrivacyPolicy}
            {...props}
          />
          <PropsRoute component={NotFound} {...props} />
        </Switch>
      </div>
      <PropsRoute component={Footer} {...props} />
    </div>
  </Router>
);

App.propTypes = {
  loggingIn: PropTypes.bool.isRequired,
  userReady: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const userSub = Meteor.subscribe('user');
  const user = Meteor.user();
  const userReady = userSub.ready() && !!user;
  const loggingIn = Meteor.loggingIn();
  const loggedIn = !loggingIn && userReady;
  return {
    loggingIn,
    userReady,
    loggedIn,
  };
})(App);

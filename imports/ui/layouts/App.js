/* eslint-disable import/no-named-default, react/destructuring-assignment */

// import packages
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React from 'react';
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

const App = () => {
  const values = useTracker(() => {
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
  }, []);

  return (
    <Router>
      <div
        style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}
      >
        <PropsRoute component={Navbar} {...values} />
        <div style={{ flex: 1 }}>
          {values.loggingIn && <Spinner />}
          <Switch>
            <PropsRoute exact path="/" component={Landing} {...values} />
            <PropsRoute path="/signin" component={SignIn} {...values} />
            <PropsRoute path="/signup" component={SignUp} {...values} />
            <PropsRoute exact path="/profile" component={Profile} {...values} />
            <PropsRoute
              exact
              path="/profile/:_id"
              component={Profile}
              {...values}
            />
            <PropsRoute
              path="/recover-password"
              component={RecoverPassword}
              {...values}
            />
            <PropsRoute
              path="/reset-password/:token"
              component={ResetPassword}
              {...values}
            />
            <PropsRoute
              path="/terms-of-use"
              component={TermsOfUse}
              {...values}
            />
            <PropsRoute
              path="/privacy-policy"
              component={PrivacyPolicy}
              {...values}
            />
            <PropsRoute component={NotFound} {...values} />
          </Switch>
        </div>
        <PropsRoute component={Footer} {...values} />
      </div>
    </Router>
  );
};

export default App;

import { Meteor } from 'meteor/meteor';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withTracker } from 'meteor/react-meteor-data';

// api
import Counters from '../../../api/counters/counters';
import { countersIncrease } from '../../../api/counters/methods';

// constants
import { supportEmail } from '../../../startup/client/lib/constants';

// global layout
import layout from '../../styles/Layout';

// components
import showAlert from '../../components/Alert';

const styles = theme => ({
  layout: layout(theme),
  button: {
    margin: theme.spacing(3),
  },
  input: {
    display: 'none',
  },
});

function Profile({ history, classes, loggedIn, countersReady, counter }) {
  useEffect(() => {
    if (!loggedIn) {
      history.push('/signin');
    }
  }, [loggedIn]);

  const handleCounterIncrease = async () => {
    try {
      await countersIncrease.callPromise({ _id: Meteor.userId() });
    } catch (error) {
      showAlert({
        title: 'Counter API Error',
        message: `Contact ${supportEmail}`,
      });
      throw new Error(error.message);
    }
  };

  return (
    <main className={classes.layout}>
      <h1>Profile Page</h1>
      {countersReady && <code>{JSON.stringify(counter, null, 2)}</code>}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleCounterIncrease}
      >
        Click
      </Button>
      <p>
        <code>count</code> is tied to this user,
      </p>
      <p>persisting on reload, logout/login.</p>
    </main>
  );
}

Profile.defaultProps = {
  // users: null, remote example (if using ddp)
  counter: null,
};

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  countersReady: PropTypes.bool.isRequired,
  counter: PropTypes.shape({
    _id: PropTypes.string,
    count: PropTypes.number,
  }),
};

const profile = withTracker(() => {
  // remote example (if using ddp)
  /*
  const usersSub = Remote.subscribe('users.friends'); // publication needs to be set on remote server
  const users = Users.find().fetch();
  const usersReady = usersSub.ready() && !!users;
  */

  // counters example
  const countersSub = Meteor.subscribe('counters.user');
  const counter = Counters.findOne({ _id: Meteor.userId() });
  const countersReady = countersSub.ready() && !!counter;

  return {
    // remote example (if using ddp)
    // usersReady,
    // users,
    countersReady,
    counter,
  };
})(Profile);

export default withStyles(styles)(profile);

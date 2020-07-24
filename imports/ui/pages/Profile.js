import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, makeStyles } from '@material-ui/core';

// api
import Counters from '../../api/counters/counters';
import { countersIncrease } from '../../api/counters/methods';

// constants
import { supportEmail } from '../../startup/client/lib/constants';

// global layout
import useSharedStyles from '../styles/useSharedStyles';

// components
import showAlert from '../components/Alert';

const useButtonStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
  },
}));

const Profile = ({ history, loggedIn }) => {
  const sharedClasses = useSharedStyles();
  const buttonClasses = useButtonStyles();

  useEffect(() => {
    if (!loggedIn) {
      history.push('/signin');
    }
  }, [loggedIn]);

  const { countersReady, counter } = useTracker(() => {
    // remote example (if using ddp)
    /*
    const usersSub = Remote.subscribe('users.friends'); // publication needs to be set on remote server
    const users = Users.find().fetch();
    const usersReady = usersSub.ready() && !!users;
    */

    // counters example
    const countersSub = Meteor.subscribe('counters.user');
    const userCounter = Counters.findOne({ _id: Meteor.userId() });
    const userCountersReady = countersSub.ready() && !!userCounter;

    return {
      counter: userCounter,
      countersReady: userCountersReady,
    };
  }, []);

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
    <main className={sharedClasses.container}>
      <h1>Profile Page</h1>
      {countersReady && <code>{JSON.stringify(counter, null, 2)}</code>}
      <Button
        variant="contained"
        color="primary"
        classes={buttonClasses}
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
};

Profile.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Profile;

import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// components
import Modal from '../../components/Modal/Modal';

// methods
import { countersIncrease } from '../../../api/counters/methods';

// collection
import Counters from '../../../api/counters/counters';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

// components
import Text from '../../components/Text';

import './Profile.scss';

class Profile extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      return this.props.history.push('/signin');
    }
  }

  shouldComponentUpdate(nextProps) {
    if (!nextProps.loggedIn) {
      nextProps.history.push('/signin');
      return false;
    }
    return true;
  }

  renderUserModal = () => {
    const Body = () => (
      <>
        <Typography variant="body1">Meteor.userId():</Typography>
        <code>{Meteor.userId()}</code>
        <br />
        <br />
        <Typography variant="body1">Meteor.user():</Typography>
        <code>
          <pre>{JSON.stringify(Meteor.user(), null, 2)}</pre>
        </code>
        <Typography variant="body1">Counter:</Typography>
        <code>
          <pre>{JSON.stringify(this.props.counter, null, 2)}</pre>
        </code>
      </>
    );
    ReactDOM.render(
      <Modal title="User info" body={<Body />} subtitle="subtitleeee" />,
      document.createElement('div')
    );
  };

  render() {
    const {
      classes,
      loggedIn,
      // remote example (if using ddp)
      // usersReady,
      // users,
      countersReady,
      counter,
    } = this.props;

    // eslint-disable-line
    // remote example (if using ddp)
    /*
    console.log('usersReady', usersReady);
    console.log('users', users);
    */
    if (!loggedIn) {
      return null;
    }
    return (
      <div className="profile-page">
        <h1>Profile Page</h1>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.renderUserModal}
        >
          Click for User Info
        </Button>
        <hr />
        {countersReady && <Text count={counter.count} />}
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => countersIncrease.call({ _id: Meteor.userId() })}
        >
          Click Me
        </Button>
      </div>
    );
  }
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
  // remote example (if using ddp)
  // usersReady: PropTypes.bool.isRequired,
  // users: Meteor.user() ? PropTypes.array.isRequired : () => null,
  countersReady: PropTypes.bool.isRequired,
  counter: Meteor.user()
    ? PropTypes.shape({
        _id: PropTypes.string,
        count: PropTypes.number,
      }).isRequired
    : () => null,
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

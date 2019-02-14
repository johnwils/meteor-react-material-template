import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

// components
import { layout } from '../../styles/Common';

const styles = theme => ({
  layout: layout(theme),
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

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

  render() {
    const { classes, loggedIn } = this.props;
    if (!loggedIn) {
      return null;
    }
    return (
      <main className={classes.layout}>
        <h1>Profile Page</h1>
      </main>
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
};

const profile = withTracker(() => {
  // remote example (if using ddp)
  /*
  const usersSub = Remote.subscribe('users.friends'); // publication needs to be set on remote server
  const users = Users.find().fetch();
  const usersReady = usersSub.ready() && !!users;
  */

  return {
    // remote example (if using ddp)
    // usersReady,
    // users,
  };
})(Profile);

export default withStyles(styles)(profile);

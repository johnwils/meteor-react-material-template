import { Accounts } from 'meteor/accounts-base';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

// components
import showAlert from '../../components/Alert';
import Sending from '../../components/Sending';

// global layout
import layout from '../../styles/Layout';

const styles = theme => ({
  layout: layout(theme),
  title: {
    marginBottom: 8,
  },
  password: {
    width: 240,
    marginBottom: 16,
  },
  button: {
    width: 250,
  },
});

function ResetPassword({ match, history, classes }) {
  const [sending, setSending] = useState(false);
  const [password, setPassword] = useState('');

  const updatePassword = () => {
    if (!password.length) {
      return showAlert({
        title: 'Reset Password Error',
        message: 'Password required',
      });
    }
    setSending(true);
    Accounts.resetPassword(match.params.token, password, err => {
      setSending(false);
      setPassword('false');
      if (err) {
        return showAlert({
          title: 'Reset Password Error',
          message: err.reason,
        });
      }
      showAlert({
        title: 'Password Reset',
        message: 'You successfully updated your password',
      });
      history.push('/profile');
    });
  };

  if (sending) {
    return <Sending />;
  }

  return (
    <Grid container direction="column" alignItems="center">
      <Typography className={classes.title} variant="h5">
        Reset Password
      </Typography>
      <FormControl margin="normal" required>
        <InputLabel htmlFor="password">New Password</InputLabel>
        <Input
          className={classes.password}
          id="password"
          name="password"
          autoFocus
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </FormControl>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={updatePassword}
      >
        Update Password
      </Button>
    </Grid>
  );
}

ResetPassword.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withStyles(styles)(ResetPassword);

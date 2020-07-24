import { Accounts } from 'meteor/accounts-base';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Input,
  InputLabel,
  FormControl,
  Button,
  Typography,
  makeStyles,
} from '@material-ui/core';

// components
import showAlert from '../components/Alert';
import Sending from '../components/Sending';

// global layout
import useSharedStyles from '../styles/useSharedStyles';

const useSyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(1),
  },
  password: {
    width: 240,
    marginBottom: theme.spacing(2),
  },
  button: {
    width: 250,
  },
}));

function ResetPassword({ match, history }) {
  const sharedClasses = useSharedStyles();
  const classes = useSyles();

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

    Accounts.resetPassword(match.params.token, password, (err) => {
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
    <main className={sharedClasses.container}>
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
            onChange={(e) => setPassword(e.target.value)}
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
    </main>
  );
}

ResetPassword.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default ResetPassword;

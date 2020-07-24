import { Accounts } from 'meteor/accounts-base';
import React, { useState } from 'react';
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

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(1),
  },
  email: {
    width: 240,
    marginBottom: theme.spacing(2),
  },
  button: {
    width: 250,
  },
}));

const RecoverPassword = () => {
  const sharedClasses = useSharedStyles();
  const classes = useStyles();

  const [sending, setSending] = useState(false);
  const [email, setEmail] = useState('');

  const sendPasswordReset = () => {
    if (!email.length) {
      return showAlert({
        title: 'Recover Password Error',
        message: 'Email required',
      });
    }

    setSending(true);

    Accounts.forgotPassword({ email }, (err) => {
      setSending(false);

      setEmail('');
      if (err) {
        return showAlert({
          title: 'Recover Password Error',
          message: err.reason,
        });
      }

      showAlert({
        title: 'Email Sent',
        message: 'Check your email to reset your password',
      });
    });
  };

  if (sending) {
    return <Sending />;
  }

  return (
    <main className={sharedClasses.container}>
      <Grid container direction="column" alignItems="center">
        <Typography className={classes.title} variant="h5">
          Recover Password
        </Typography>
        <FormControl margin="normal" required>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input
            className={classes.email}
            id="email"
            name="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={sendPasswordReset}
        >
          Send Password Reset Email
        </Button>
      </Grid>
    </main>
  );
};

export default RecoverPassword;

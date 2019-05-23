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
  email: {
    width: 240,
    marginBottom: 16,
  },
  button: {
    width: 250,
  },
});

function RecoverPassword({ classes }) {
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
    Accounts.forgotPassword({ email }, err => {
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
          onChange={e => setEmail(e.target.value)}
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
  );
}

RecoverPassword.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecoverPassword);

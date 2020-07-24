import { Meteor } from 'meteor/meteor';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Button,
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  InputLabel,
  Paper,
  Typography,
  Grid,
} from '@material-ui/core';

// components
import showAlert from '../components/Alert';

// styles
import useSharedAuthStyles from '../styles/custom/useSharedAuthStyles';

function SignIn({ loggedIn, history }) {
  const sharedAuthClasses = useSharedAuthStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      history.push('/profile');
    }

    if (localStorage.getItem('checkbox') === 'true') {
      setCheckbox(true);
      setEmail(localStorage.getItem('email'));
    }
  }, [loggedIn, checkbox]);

  const handleSubmit = (e) => {
    e.preventDefault();

    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        showAlert({ title: 'Sign in Error', message: err.reason });
        return console.log(err);
      }
    });
  };

  if (loggedIn) {
    return null;
  }

  return (
    <Paper className={sharedAuthClasses.paper}>
      <Avatar
        alt="logo"
        className={sharedAuthClasses.avatar}
        src="/img/logo.png"
      />
      <Typography variant="h5">Sign in</Typography>
      <form className={sharedAuthClasses.form} onSubmit={handleSubmit}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (checkbox) {
                localStorage.setItem('email', email);
              }
            }}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={checkbox}
                color="primary"
                onChange={() => {
                  if (!checkbox) {
                    localStorage.setItem('checkbox', 'true');
                    localStorage.setItem('email', email);
                  } else {
                    localStorage.setItem('checkbox', 'false');
                    localStorage.setItem('email', '');
                  }
                  setCheckbox(!checkbox);
                }}
              />
            }
            label="Remember me"
          />
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={sharedAuthClasses.submit}
        >
          Sign in
        </Button>
        <Grid
          container
          className={sharedAuthClasses.container}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Button
            component={Link}
            className={sharedAuthClasses.button}
            color="primary"
            to="/signup"
          >
            Create an account
          </Button>
          <Button
            component={Link}
            className={sharedAuthClasses.button}
            color="primary"
            to="/recover-password"
          >
            Forgot Password?
          </Button>
        </Grid>
      </form>
      &copy;
      {new Date().getFullYear()} John Wilson
    </Paper>
  );
}

SignIn.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignIn;

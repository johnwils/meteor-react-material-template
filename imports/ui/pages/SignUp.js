import { Accounts } from 'meteor/accounts-base';
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

const SignUp = ({ loggedIn, history }) => {
  const sharedAuthClasses = useSharedAuthStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      history.push('/profile');
    }
  }, [loggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkbox) {
      return showAlert({
        title: 'Terms of Use',
        message: 'Please agree to the Terms of Use',
      });
    }

    Accounts.createUser({ email, password }, (err) => {
      if (err) {
        showAlert({ title: 'Sign Up Error', message: err.reason });
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
      <Typography variant="h5">Sign up</Typography>
      <form className={sharedAuthClasses.form} onSubmit={handleSubmit}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input
            id="email"
            name="email"
            autoComplete="email"
            autoFocus={false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <FormControlLabel
          control={
            <Checkbox
              checked={checkbox}
              color="primary"
              onChange={() => setCheckbox(!checkbox)}
            />
          }
          label={
            <div>
              I agree to the <Link to="/terms-of-use">Terms of Use</Link>
            </div>
          }
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={sharedAuthClasses.submit}
        >
          Sign up
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
            to="/signin"
          >
            Already have an account?
          </Button>
        </Grid>
      </form>
      &copy;
      {new Date().getFullYear()} John Wilson
    </Paper>
  );
};

SignUp.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignUp;

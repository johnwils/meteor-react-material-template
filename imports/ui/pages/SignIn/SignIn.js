import { Meteor } from 'meteor/meteor';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

// components
import showAlert from '../../components/Alert';

// styles
import styles from '../../styles/custom/SignInUp';

function SignIn({ loggedIn, history, classes }) {
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
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Avatar alt="logo" className={classes.avatar} src="/img/logo.png" />
          <Typography variant="h5">Sign in</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
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
                className={classes.label}
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
              <Button
                component={Link}
                className={classes.button}
                color="primary"
                to="/recover-password"
              >
                Forgot Password?
              </Button>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
            </Button>
            <Grid
              container
              className={classes.container}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Button
                component={Link}
                className={classes.button}
                color="primary"
                to="/signup"
              >
                Create an account
              </Button>
            </Grid>
          </form>
          &copy;
          {new Date().getFullYear()} John Wilson
        </Paper>
      </main>
    </React.Fragment>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withStyles(styles)(SignIn);

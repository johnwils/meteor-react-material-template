import { Accounts } from 'meteor/accounts-base';
import React from 'react';
import ReactDOM from 'react-dom';
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
import styles from '../../styles/SignInUp';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errMsg: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.loggedIn) {
      return this.props.history.push('/profile');
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.loggedIn) {
      nextProps.history.push('/profile');
      return false;
    }
    return true;
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    Accounts.createUser({ email, password }, err => {
      if (err) {
        showAlert({ title: 'Sign Up Error', message: err.reason });
        return console.log(err);
      }
    });
  }
  render() {
    const { classes, loggedIn } = this.props;
    const { email, password, checkbox } = this.state;

    if (loggedIn) {
      return null;
    }
    return (
      <React.Fragment>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar alt="logo" className={classes.avatar} src="/img/logo.png" />
            <Typography variant="h5">Sign up</Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus={false}
                  value={email}
                  onChange={e => {
                    this.setState({ email: e.target.value }, () => {
                      if (this.state.checkbox) {
                        localStorage.setItem('email', this.state.email);
                      }
                    });
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
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </FormControl>
              <FormControlLabel
                className={classes.label}
                control={
                  <Checkbox
                    checked={checkbox}
                    color="primary"
                    onChange={e => {
                      this.setState({ checkbox: !checkbox }, () => {
                        if (this.state.checkbox) {
                          localStorage.setItem('checkbox', 'true');
                          localStorage.setItem('email', this.state.email);
                        } else {
                          localStorage.setItem('checkbox', 'false');
                          localStorage.setItem('email', '');
                        }
                      });
                    }}
                  />
                }
                label="I agree to the Terms and Conditions"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign up
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
                  to="/signin"
                >
                  Already have an account?
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
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withStyles(styles)(SignUp);

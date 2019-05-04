import { Accounts } from 'meteor/accounts-base';
import React from 'react';
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

// global layout
import { layout } from '../../styles/Layout';

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

class ResetPassword extends React.Component {
  state = {
    sending: false,
    password: '',
  };

  updatePassword = () => {
    const { token } = this.props.match.params;
    const { password } = this.state;
    if (!password.length) {
      return showAlert({
        title: 'Reset Password Error',
        message: 'Password required',
      });
    }
    this.setState({ sending: true });
    Accounts.resetPassword(token, password, err => {
      this.setState({ sending: false, email: '' });
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
      this.props.history.push('/profile');
    });
  };

  render() {
    const { classes } = this.props;
    const { password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
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
              onChange={e => this.setState({ password: e.target.value })}
            />
          </FormControl>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={this.updatePassword}
          >
            Update Password
          </Button>
        </Grid>
      </form>
    );
  }
}

ResetPassword.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }),
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default withStyles(styles)(ResetPassword);

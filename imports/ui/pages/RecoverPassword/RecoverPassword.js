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

class RecoverPassword extends React.Component {
  state = {
    sending: false,
    email: '',
  };

  sendPasswordReset = () => {
    const { email } = this.state;
    if (!email.length) {
      return showAlert({
        title: 'Recover Password Error',
        message: 'Email required',
      });
    }
    this.setState({ sending: true });
    Accounts.forgotPassword({ email }, err => {
      this.setState({ sending: false, email: '' });
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

  render() {
    const { classes } = this.props;
    const { email, sending } = this.state;

    if (sending) {
      return <div>Sending...</div>;
    }

    return (
      <form onSubmit={this.handleSubmit}>
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
              onChange={e => this.setState({ email: e.target.value })}
            />
          </FormControl>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={this.sendPasswordReset}
          >
            Send Password Reset Email
          </Button>
        </Grid>
      </form>
    );
  }
}

RecoverPassword.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecoverPassword);

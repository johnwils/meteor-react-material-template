import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

// eslint-disable-next-line
const styles = theme => ({
  root: {
    textAlign: 'center',
    padding: '16px 0',
  },
});

const Footer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs>
          <Link to="/terms-of-use">Terms of use</Link>
        </Grid>
        <Grid item xs>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </Grid>
      </Grid>
    </div>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({
  title: {
    marginBottom: 8,
  },
});
function Sending({ classes }) {
  return (
    <Grid container direction="column" alignItems="center">
      <Typography className={classes.title} variant="h5">
        Sending...
      </Typography>
    </Grid>
  );
}

Sending.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sending);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import layout from '../../styles/Layout';

const styles = theme => ({
  layout: layout(theme),
});

const Landing = ({ classes }) => {
  return (
    <div className={classes.layout}>
      <h1>Landing Page</h1>
    </div>
  );
};

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Landing);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import layout from '../../styles/Layout';

const styles = (theme) => ({
  layout: layout(theme),
});

const NotFound = ({ classes }) => (
  <div className={classes.layout}>
    <div className="mdc-typography--body1">Page Not Found</div>
  </div>
);

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withStyles(styles)(NotFound);

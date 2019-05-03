import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { layout } from '../../styles/Layout';

const styles = theme => ({
  layout: layout(theme),
});

class PrivacyPolicy extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.layout}>
        <h1>Privacy Policy Page</h1>
      </div>
    );
  }
}

PrivacyPolicy.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withStyles(styles)(PrivacyPolicy);

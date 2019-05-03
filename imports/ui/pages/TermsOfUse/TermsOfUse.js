import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { layout } from '../../styles/Layout';

const styles = theme => ({
  layout: layout(theme),
});

class TermsOfUse extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.layout}>
        <h1>Terms of Use Page</h1>
      </div>
    );
  }
}

TermsOfUse.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withStyles(styles)(TermsOfUse);

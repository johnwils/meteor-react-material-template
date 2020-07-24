import React from 'react';
import PropTypes from 'prop-types';

import useSharedStyles from '../styles/useSharedStyles';

const NotFound = () => {
  const sharedClasses = useSharedStyles();

  return (
    <main className={sharedClasses.container}>
      <div className="mdc-typography--body1">Page Not Found</div>
    </main>
  );
};

NotFound.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default NotFound;

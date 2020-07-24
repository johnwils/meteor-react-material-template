import React from 'react';
import PropTypes from 'prop-types';

import useSharedStyles from '../styles/useSharedStyles';

const Landing = () => {
  const sharedClasses = useSharedStyles();

  return (
    <main className={sharedClasses.container}>
      <h1>Landing Page</h1>
    </main>
  );
};

Landing.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Landing;

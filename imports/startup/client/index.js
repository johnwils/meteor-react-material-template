import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import './styles/main.scss';

// import client routes
import App from '../../ui/layouts/App';

// mount app
Meteor.startup(() => {
  // eslint-disable-next-line no-underscore-dangle
  window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
  render(
    <>
      <CssBaseline />
      <App />
    </>,
    document.getElementById('react-root')
  );
});

import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';

import theme from './styles/theme';

// import client routes
import App from '../../ui/layouts/App';

// mount app
Meteor.startup(() => {
  render(
    <>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </>,
    document.getElementById('react-root')
  );
});

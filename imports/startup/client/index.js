import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import './styles/main.scss';
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

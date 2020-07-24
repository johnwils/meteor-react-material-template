// https://material-ui.com/customization/themes/

import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
  typography: {
    fontFamily: `"Roboto", sans-serif`,
  },
  palette: {
    type: 'light',
    primary: blue,
    secondary: green,
  },
  status: {
    danger: orange,
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
});

export default theme;

// https://material-ui.com/customization/themes/

import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: 'light',
    primary: blue,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
  spacing: {
    unit: 8,
  },
  shape: {
    borderRadius: 4,
  },
});

export default theme;

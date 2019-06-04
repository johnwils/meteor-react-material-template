/**
 * Default layout used for each page
 * @param {Object} theme - Material UI theme (see imports/startup/client/styles/theme.js)
 */
const layout = theme => ({
  width: 'auto',
  display: 'block', // Fix IE11 issue.
  [theme.breakpoints.up(400 + theme.spacing(3 * 2))]: {
    width: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  marginTop: '2rem',
  textAlign: 'center',
});

export default layout;

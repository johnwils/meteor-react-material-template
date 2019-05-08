const layout = theme => ({
  width: 'auto',
  display: 'block', // Fix IE11 issue.
  [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
    width: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  marginTop: '2rem',
  textAlign: 'center',
});

export default layout;

import layout from '../Layout';

/**
 * Custom layout used for SignIn and SignUp pages
 */
export default theme => ({
  layout: layout(theme),
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0px ${theme.spacing.unit * 3}px`,
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  avatar: {
    margin: theme.spacing.unit,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  checkbox: {
    margin: 0,
  },
  submit: {
    marginTop: theme.spacing.unit,
  },
  container: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  label: {
    marginRight: 0,
    marginBottom: 0,
  },
});

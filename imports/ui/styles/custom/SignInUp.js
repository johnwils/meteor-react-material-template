import layout from '../Layout';

/**
 * Custom layout used for SignIn and SignUp pages
 */
export default (theme) => ({
  layout: layout(theme),
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0px ${theme.spacing(3)}px`,
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing(1),
  },
  checkbox: {
    margin: 0,
  },
  submit: {
    marginTop: theme.spacing(1),
  },
  container: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  label: {
    marginRight: 0,
    marginBottom: 0,
  },
});

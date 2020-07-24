import { makeStyles } from '@material-ui/core';

/**
 * Custom styles for the SignIn and SignUp pages
 */
const useSharedAuthStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  avatar: {
    marginTop: theme.spacing(2),
  },
  form: {
    width: '100%',
    padding: theme.spacing(2),
    maxWidth: 400,
  },
  checkbox: {},
  submit: {
    marginTop: theme.spacing(1),
  },
  container: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default useSharedAuthStyles;

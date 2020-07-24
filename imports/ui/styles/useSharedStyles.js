import { makeStyles } from '@material-ui/core';

const useSharedStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    maxWidth: 400,
    margin: 'auto',
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default useSharedStyles;

import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, makeStyles } from '@material-ui/core';

// eslint-disable-next-line
const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
    padding: 0,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs>
          <Link to="/terms-of-use">Terms of use</Link>
        </Grid>
        <Grid item xs>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

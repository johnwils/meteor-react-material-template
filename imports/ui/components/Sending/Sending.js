import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(1),
  },
}));

const Sending = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center">
      <Typography className={classes.title} variant="h5">
        Sending...
      </Typography>
    </Grid>
  );
};

export default Sending;

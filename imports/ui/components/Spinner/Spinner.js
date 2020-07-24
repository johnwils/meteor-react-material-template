import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '0',
    width: '100%',
    height: '100%',
    zIndex: '1000',
    backgroundColor: 'rgba(255,255,255,0.66)',
  },
  icon: {
    fontSize: '44px',
  },
});

const Spinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <i className="fa fa-circle-o-notch fa-spin" />
      </div>
    </div>
  );
};

export default Spinner;

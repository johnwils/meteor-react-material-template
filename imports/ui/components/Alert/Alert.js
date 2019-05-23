import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function Alert({ title, message }) {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    //
    // same as: componentDidMount(), componentDidUpdate()
    //
    return function cleanUp() {
      // same as: componentWillUnmount
      setOpen(false);
    };
    // effect dependency array
  }, [open]); // Only re-run the effect if variable changes

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted={false}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ({ title, message }) => {
  ReactDOM.render(
    <Alert title={title} message={message} />,
    document.createElement('div')
  );
};

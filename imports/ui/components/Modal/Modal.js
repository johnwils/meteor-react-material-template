import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, Modal, Slide, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '60%',
    height: '90%',
    overflowY: 'scroll',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
  },
}));

function SimpleModal({ title, body }) {
  const classes = useStyles();

  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="simple-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
    >
      <Slide direction="down" in={open} mountOnEnter unmountOnExit>
        <div className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            {title}
          </Typography>
          <br />
          {body}
        </div>
      </Slide>
    </Modal>
  );
}

SimpleModal.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired,
};

export default SimpleModal;

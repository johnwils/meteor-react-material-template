import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';

const styles = theme => ({
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
    padding: theme.spacing.unit * 4,
  },
});

class SimpleModal extends React.Component {
  state = {
    open: true,
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, title, body } = this.props;
    const { open } = this.state;

    return (
      <div>
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="simple-modal-description"
          className={classes.modal}
          open={open}
          onClose={this.handleClose}
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
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleModal);

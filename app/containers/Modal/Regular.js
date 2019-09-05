import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  withStyles,
  Typography,
  IconButton,
  Fade,
  Backdrop,
  Button,
} from '@material-ui/core';
import { CancelOutlined } from '@material-ui/icons';

const styles = theme => ({
  wrapper: {
    maxWidth: 800,
    margin: 'auto',
    backgroundColor: '#fff',
    outline: 'none !important',
    height: 'fit-content',
  },

  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundImage:
      'linear-gradient(to right, #00b464, #00b961, #00be5d, #00c358, #00c853);',
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    padding: theme.spacing(1.5),
    textTransform: 'uppercase',
  },

  modalFooter: {
    borderTop: `1px solid #eee`,
    maxHeight: 100,
    padding: theme.spacing(2),
  },

  modalBody: {
    backgroundColor: '#fff',
    '&:focus': {
      outline: 'none !important',
    },
  },
});

class RegularModal extends React.Component {
  render() {
    const {
      open,
      onClose,
      classes,
      headerTitle,
      children,
      hasCloseButton,
    } = this.props;

    return (
      <Modal
        disableAutoFocus
        open={open}
        onClose={onClose}
        className={classes.wrapper}
        // BackdropComponent={Backdrop}
        // BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <div className={classes.modalBody}>
            <div className={classes.modalHeader}>
              <Typography variant="h3">{headerTitle && headerTitle}</Typography>
              {hasCloseButton && (
                <IconButton>
                  <CancelOutlined />
                </IconButton>
              )}
            </div>
            {children}
            <div className={classes.modalFooter}>
              <Button onClick={onClose} variant="contained" color="secondary">
                Close
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    );
  }
}

RegularModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  classes: PropTypes.object,
  headerTitle: PropTypes.string,
  hasCloseButton: PropTypes.bool,
};

export default withStyles(styles)(RegularModal);

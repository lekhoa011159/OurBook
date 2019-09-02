import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
  button: {},
};

class ButtonControl extends React.Component {
  render() {
    return (
      <Button {...this.props.mainProps} className={this.props.classes.button}>
        {this.props.label}
      </Button>
    );
  }
}

ButtonControl.propTypes = {
  mainProps: PropTypes.object,
  label: PropTypes.string,
  classes: PropTypes.object,
};

export default withStyles(styles)(ButtonControl);

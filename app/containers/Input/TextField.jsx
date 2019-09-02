import React from 'react';
import { TextField, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import callbackHandlerEnums from 'constants/callbackHandler';
import classnames from 'classnames';

const styles = theme => ({
  input: {
    margin: theme.spacing(1),
  },
});

class TextInput extends React.Component {
  handleChange = e => {
    this.props.callbackHandler(callbackHandlerEnums.CHANGE_INPUT, {
      value: e.target.value,
      key: this.props.inputKey,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <TextField
        {...this.props.mainProps}
        margin="normal"
        value={this.props.value}
        onChange={this.handleChange}
        className={classnames(classes.input)}
      />
    );
  }
}

TextInput.propTypes = {
  callbackHandler: PropTypes.func,
  value: PropTypes.any,
  mainProps: PropTypes.object,
  inputKey: PropTypes.string,
  classes: PropTypes.object,
};

export default withStyles(styles)(TextInput);

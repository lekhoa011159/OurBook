import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Button, Typography } from '@material-ui/core';
import { TextInput } from 'containers/Input';
import { FlexedPanel } from 'components/Wrappers';
import { Link } from 'react-router-dom';

const styles = theme => ({
  form: {
    padding: theme.spacing(1),
    textAlign: 'center',
  },

  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
});

class SignupForm extends React.Component {
  render() {
    return (
      <FlexedPanel basis={100}>
        <form className={this.props.classes.form}>
          <TextInput
            mainProps={{
              type: 'text',
              label: 'Họ',
              value: this.props.user.firstName,
            }}
            inputKey="firstName"
            callbackHandler={this.props.callbackHandler}
          />
          <TextInput
            mainProps={{
              type: 'text',
              label: 'Tên',
              value: this.props.user.lastName,
            }}
            inputKey="lastName"
            callbackHandler={this.props.callbackHandler}
          />
          <TextInput
            mainProps={{
              type: 'text',
              label: 'Tên đăng nhập',
              value: this.props.user.userName,
            }}
            inputKey="userName"
            callbackHandler={this.props.callbackHandler}
          />
          <TextInput
            mainProps={{
              type: 'password',
              label: 'Mật khẩu',
              value: this.props.user.password,
            }}
            inputKey="password"
            callbackHandler={this.props.callbackHandler}
          />
          <TextInput
            mainProps={{
              type: 'password',
              label: 'Nhập lại mật khẩu',
              value: this.props.user.confirmPassword,
            }}
            inputKey="confirmPassword"
            callbackHandler={this.props.callbackHandler}
          />
          <TextInput
            mainProps={{
              type: 'number',
              label: 'Số điện thoại',
              value: this.props.user.phone,
            }}
            inputKey="phone"
            callbackHandler={this.props.callbackHandler}
          />

          <div className={this.props.classes.footer}>
            <Button to="/signup" variant="outlined" color="primary">
              Đăng Nhập
            </Button>
            <Typography>&nbsp; hoặc &nbsp;</Typography>
            <Button
              component={Link}
              to="/signup"
              variant="contained"
              color="primary"
            >
              Tạo tài khoản
            </Button>
          </div>
        </form>
      </FlexedPanel>
    );
  }
}

SignupForm.propTypes = {
  user: PropTypes.object,
  callbackHandler: PropTypes.func,
  classes: PropTypes.object,
};

export default withStyles(styles)(SignupForm);

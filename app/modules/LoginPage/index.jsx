import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { TextInput, ButtonControl } from 'containers/Input';
import callbackHandlerEnums from 'constants/callbackHandler';
import injectSaga from 'utils/injectSaga';
import { login } from '../actions';
import saga from '../saga';

class LoginPage extends React.Component {
  state = {
    userName: '',
    password: '',
  };

  callbackHandler = (type, data) => {
    switch (type) {
      case callbackHandlerEnums.CHANGE_INPUT: {
        this.handleChange(data);
        break;
      }
    }
  };

  handleChange = inputSource => {
    this.setState({
      [inputSource.key]: inputSource.value,
    });
  };

  handlelogin = () => {
    this.props.login(this.state);
  };

  render() {
    return (
      <div>
        <form>
          <TextInput
            mainProps={{
              type: 'text',
              label: 'User Name',
              value: this.state.userName,
            }}
            inputKey="userName"
            callbackHandler={this.callbackHandler}
          />
          <TextInput
            mainProps={{
              type: 'password',
              label: 'Password',
              value: this.state.password,
            }}
            inputKey="password"
            callbackHandler={this.callbackHandler}
          />

          <ButtonControl
            mainProps={{
              variant: 'contained',
              color: 'secondary',
              onClick: this.handlelogin,
            }}
            label="Đăng Nhập"
          />
        </form>
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => {
      dispatch(login(user));
    },
  };
};

const mapStateToProps = state => {
  // console.log(state);
  return {};
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'user-saga', saga });

export default compose(
  withConnect,
  withRouter,
  withSaga,
)(LoginPage);

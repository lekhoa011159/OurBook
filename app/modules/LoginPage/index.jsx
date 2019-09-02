import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { TextInput, ButtonControl } from 'containers/Input';
import callbackHandlerEnums from 'constants/callbackHandler';
import injectSaga from 'utils/injectSaga';
import styled from 'styled-components';
import { Loading } from 'components/Loading';
import { login } from '../actions';
import saga from '../saga';

const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorDesc = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.7em;
  align-self: flex-start;
  margin-left: 8px;
  margin-bottom: 8px;
  color: #f00;
`;

class LoginPage extends React.Component {
  state = {
    userName: '',
    password: '',
    btnDisabled: false,
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
    const { userName, password } = this.state;
    const { error, isLoading } = this.props;

    return (
      <Container>
        <Form>
          <TextInput
            mainProps={{
              error: error && error.get('type') === 'userName',
              fullWidth: true,
              type: 'text',
              label: 'Tên tài khoản',
              value: userName,
            }}
            inputKey="userName"
            callbackHandler={this.callbackHandler}
          />
          {error.get('type') === 'userName' && (
            <ErrorDesc>{error.get('message')}</ErrorDesc>
          )}

          <TextInput
            mainProps={{
              error: error && error.get('type') === 'password',
              fullWidth: true,
              type: 'password',
              label: 'Mật khẩu',
              value: password,
            }}
            inputKey="password"
            callbackHandler={this.callbackHandler}
          />
          {error.get('type') === 'password' && (
            <ErrorDesc>{error.get('message')}</ErrorDesc>
          )}

          <ButtonControl
            mainProps={{
              disabled: userName === '' || password === '',
              fullWidth: true,
              variant: 'contained',
              color: 'secondary',
              onClick: this.handlelogin,
            }}
            label="Đăng Nhập"
          />

          {isLoading && <Loading />}
        </Form>
      </Container>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func,
  error: PropTypes.object,
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => {
      dispatch(login(user));
    },
  };
};

const mapStateToProps = state => {
  const { homepage } = state;

  return {
    error: homepage.get('error'),
    isLoading: homepage.get('isLoading'),
  };
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

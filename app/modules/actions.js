import { AccountTypes } from './constants';

export function signup(user) {
  return {
    type: AccountTypes.USER_SIGNUP,
    payload: { user },
  };
}

export function login(user) {
  return {
    type: AccountTypes.USER_LOGIN,
    payload: { user },
  };
}

export function loginSuccess(output) {
  return {
    type: AccountTypes.USER_LOGIN_SUCCESS,
    payload: { output },
  };
}

export function loginFailure(output) {
  return {
    type: AccountTypes.USER_LOGIN_FAILURE,
    payload: { output },
  };
}

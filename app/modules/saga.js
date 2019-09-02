import { takeLatest, call, put } from 'redux-saga/effects';
import UserServices from 'services/Users';
import Cookies from 'universal-cookie';
import { push } from 'connected-react-router';
import { AccountTypes } from './constants';
import { loginSuccess, loginFailure } from './actions';

const cookies = new Cookies();

function* handleUserLogin(action) {
  const {
    payload: { user },
  } = action;
  const response = yield call(UserServices.login, { user });

  if (response && response.user) {
    cookies.set('ob_token', response.user.token);
    yield put(loginSuccess(response.user));
    yield put(push('/dashboard'));
  } else {
    cookies.remove('ob_token');
    yield put(loginFailure(response.message));
  }
}

function* handleUserSignup(action) {}

export default function*() {
  yield takeLatest(AccountTypes.USER_LOGIN, handleUserLogin);
  yield takeLatest(AccountTypes.USER_SIGNUP, handleUserSignup);
}

import { fromJS } from 'immutable';
import { AccountTypes } from './constants';

const initialState = fromJS({
  isLoading: false,
  user: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case AccountTypes.USER_LOGIN:
      return state.set('isLoading', true);
    case AccountTypes.USER_LOGIN_SUCCESS:
      return state.set('isLoading', false).set('user', action.payload.output);
    default:
      return state;
  }
};

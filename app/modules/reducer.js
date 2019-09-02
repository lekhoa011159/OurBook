import { fromJS, Map } from 'immutable';
import { AccountTypes } from './constants';

const initialState = fromJS({
  isLoading: false,
  user: Map({}),
  error: Map({}),
});

export default (state = initialState, action) => {
  switch (action.type) {
    case AccountTypes.USER_LOGIN:
      return state.set('isLoading', true).set('error', Map({}));
    case AccountTypes.USER_LOGIN_SUCCESS:
      return state
        .set('isLoading', false)
        .set('user', Map(action.payload.output));
    case AccountTypes.USER_LOGIN_FAILURE:
      return state
        .set('isLoading', false)
        .set('error', Map(action.payload.output));
    default:
      return state;
  }
};

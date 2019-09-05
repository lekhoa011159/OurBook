import { fromJS, Map } from 'immutable';
import { AccountTypes, Types } from './constants';

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
    case Types.MAP_COOKIE_TO_STATE:
      return state.set('isLoading', true);
    case Types.MAP_COOKIE_TO_STATE_SUCCESS:
      return state
        .set('isLoading', false)
        .set('user', fromJS(action.payload.output));

    default:
      return state;
  }
};

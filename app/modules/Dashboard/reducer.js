import { fromJS } from 'immutable';
import { mapRelationShipsToState } from 'utils/map';
import { Types } from './constants';

const initialState = fromJS({
  isLoading: false,
  availableRelationships: [],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_RELATIONSHIPS: {
      return state.set('isLoading', true);
    }
    case Types.FETCH_RELATIONSHIPS_DONE: {
      return state
        .set('isLoading', false)
        .set(
          'availableRelationships',
          mapRelationShipsToState(action.payload.output),
        );
    }
    default:
      return state;
  }
};

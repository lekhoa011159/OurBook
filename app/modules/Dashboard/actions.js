import { Types } from './constants';

export function fetchRelationships() {
  return {
    type: Types.FETCH_RELATIONSHIPS,
  };
}

export function fetchRelationshipsDone(output) {
  return {
    type: Types.FETCH_RELATIONSHIPS_DONE,
    payload: { output },
  };
}

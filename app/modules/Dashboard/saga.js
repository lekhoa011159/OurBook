import { takeLatest, call, put } from 'redux-saga/effects';
import RelationshipServices from 'services/Relationships';
import { Types } from './constants';
import { fetchRelationshipsDone } from './actions';

function* handleFetchRelationships() {
  const response = yield call(RelationshipServices.getAll);
  if (response.code === 200 && response.entries.length !== 0) {
    yield put(fetchRelationshipsDone(response.entries));
  }
}

export default function* workerSaga() {
  yield takeLatest(Types.FETCH_RELATIONSHIPS, handleFetchRelationships);
}

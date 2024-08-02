import { takeLatest, put, call, all } from "redux-saga/effects"
import {
  fetchCollectionStart,
  fetchCollectionFailure,
  fetchCollectionSuccess,
} from "./item.slice"
import { queryForCollections } from "../../firebase/firebase.utils"
export function* getCollections(): Generator {
  try {
    const collectionObj = yield call(queryForCollections)
    yield put(fetchCollectionSuccess(collectionObj))
  } catch (err) {
    yield put(fetchCollectionFailure(err))
  }
}
export function* onGetCollections(): Generator {
  yield takeLatest(fetchCollectionStart.type, getCollections)
}
export function* itemSagas() {
  yield all([call(onGetCollections)])
}

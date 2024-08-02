import { all, call } from "redux-saga/effects"
import { userSagas } from "./users/user.sagas"
import { itemSagas } from "./items/item.sagas"
export default function* rootSaga() {
  yield all([call(userSagas), call(itemSagas)])
}

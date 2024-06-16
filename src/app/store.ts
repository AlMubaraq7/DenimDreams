import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit"

import cartReducer from "../redux/cart/cart.slice"
import userReducer from "../redux/users/user.slice"
import itemReducer from "../redux/items/item.slice"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import createSagaMiddleware from "@redux-saga/core"
import rootSaga from "../redux/root-saga"
const persistConfig = {
  key: "root",
  storage,
}
const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  items: itemReducer,
  cart: cartReducer,
  user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
const middlewares = [sagaMiddleware]
// if (process.env.NODE_ENV === "development") {
//   middlewares.push(logger)
// }

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
})
export const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

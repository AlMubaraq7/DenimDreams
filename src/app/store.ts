import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import collectionReducer from "../redux/collections/collectionSlice"
export const store = configureStore({
  reducer: {
    collection: collectionReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

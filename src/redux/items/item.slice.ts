import { createSlice } from "@reduxjs/toolkit"
import { Categories, Category } from "../../utils"
import clothingCategories from "../../data/clothing-categories.data"
import { findCategory } from "./item.utils"
interface CollectionState {
  items: Categories | null
  selectedItem: null | Category
  isFetching: boolean
  error: any
}
const initialState: CollectionState = {
  items: null,
  selectedItem: null,
  isFetching: false,
  error: null,
}
export const itemSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    fetchCollectionStart: (state) => {
      return {
        ...state,
        items: null,
        selectedItem: null,
        isFetching: true,
      }
    },
    fetchCollectionSuccess: (state, action) => {
      return {
        ...state,
        items: action.payload,
        isFetching: false,
      }
    },
    fetchCollectionFailure: (state, action) => {
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      }
    },
    getCategory: (state, action) => {
      return {
        ...state,
        selectedItem: findCategory(state.items, action.payload),
      }
    },
  },
})
export const {
  getCategory,
  fetchCollectionFailure,
  fetchCollectionStart,
  fetchCollectionSuccess,
} = itemSlice.actions
export default itemSlice.reducer

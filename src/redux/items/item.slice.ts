import { createSlice } from "@reduxjs/toolkit"
import { Categories, Category } from "../../utils"
import clothingCategories from "../../data/clothing-categories.data"
import { findCategory } from "./item.utils"
interface CollectionState {
  items: Categories | null
  selectedItem: null | Category
  error: any
}
const initialState: CollectionState = {
  items: null,
  selectedItem: null,
  error: null,
}
export const itemSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    fetchCollectionStart: (state) => {
      return {
        ...state,
      }
    },
    fetchCollectionSuccess: (state, action) => {
      return {
        ...state,
        items: action.payload,
      }
    },
    fetchCollectionFailure: (state, action) => {
      return {
        ...state,
        error: action.payload,
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

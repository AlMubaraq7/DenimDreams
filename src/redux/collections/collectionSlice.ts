import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { filterCat } from "./collectionutils"
import clothingCategories from "../../data/clothing-categories.data"

interface CollectionState {
  collections: null | any[]
}
const initialState: CollectionState = {
  collections: clothingCategories,
}

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    filterCategory: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        collections: filterCat(clothingCategories, action.payload),
      }
    },
  },
})

export const { filterCategory } = collectionSlice.actions

export default collectionSlice.reducer

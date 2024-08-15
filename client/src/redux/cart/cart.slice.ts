import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ClothingItem } from "../../utils"
import { addItem, clearItem, reduceItem } from "./cart.utils"

interface CartState {
  hidden: boolean
  cartItems: ClothingItem[]
}
const initialState: CartState = {
  hidden: true,
  cartItems: [],
}
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartHidden: (state) => {
      return {
        ...state,
        hidden: !state.hidden,
      }
    },
    toggleCartHiddenWithPayload: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        hidden: action.payload,
      }
    },
    addItemToCart: (state, action) => {
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload),
      }
    },
    clearItemFromCart: (state, action) => {
      return {
        ...state,
        cartItems: clearItem(state.cartItems, action.payload),
      }
    },
    reduceItemQuantity: (state, action) => {
      return {
        ...state,
        cartItems: reduceItem(state.cartItems, action.payload),
      }
    },
    clearAllItems: (state) => {
      return {
        ...state,
        cartItems: [],
      }
    },
  },
})
export const {
  toggleCartHidden,
  toggleCartHiddenWithPayload,
  addItemToCart,
  clearItemFromCart,
  clearAllItems,
  reduceItemQuantity,
} = cartSlice.actions
export default cartSlice.reducer

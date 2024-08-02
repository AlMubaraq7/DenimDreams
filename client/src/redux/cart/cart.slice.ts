import { createSlice } from "@reduxjs/toolkit"
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
  },
})
export const {
  toggleCartHidden,
  addItemToCart,
  clearItemFromCart,
  reduceItemQuantity,
} = cartSlice.actions
export default cartSlice.reducer

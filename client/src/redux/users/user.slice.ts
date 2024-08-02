import { createSlice } from "@reduxjs/toolkit"
import { UserType } from "../../utils"
interface UserState {
  user: UserType
  isAuthenticating: boolean
  error: any
}

const initialState: UserState = {
  user: null,
  isAuthenticating: false,
  error: null,
}
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    signUpStart: (state, action) => {
      return {
        ...state,
        isAuthenticating: true,
      }
    },
    emailSignInStart: (state, action) => {
      return {
        ...state,
        isAuthenticating: true,
      }
    },
    googleSignInStart: (state) => {
      return {
        ...state,
        isAuthenticating: true,
      }
    },
    signOutStart: (state) => {
      return {
        ...state,
      }
    },
    signUpSuccess: (state, action) => {
      return {
        ...state,
        isAuthenticating: false,
        user: action.payload,
        error: null,
      }
    },
    onFailure: (state, action) => {
      return {
        ...state,
        user: null,
        isAuthenticating: false,
        error: action.payload,
      }
    },
    signOutSuccess: (state) => {
      return {
        ...state,
        user: null,
        error: null,
      }
    },
  },
})
export const {
  signUpStart,
  emailSignInStart,
  googleSignInStart,
  signOutStart,
  signUpSuccess,
  signOutSuccess,
  onFailure,
} = userSlice.actions
export default userSlice.reducer

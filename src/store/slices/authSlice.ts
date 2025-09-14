import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState, User } from '@types/index'

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  userType: null,
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true
      state.error = null
    },
    loginSuccess: (state, action: PayloadAction<{ user: User; userType: 'admin' | 'user' }>) => {
      state.loading = false
      state.isAuthenticated = true
      state.user = action.payload.user
      state.userType = action.payload.userType
      state.error = null
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.isAuthenticated = false
      state.user = null
      state.userType = null
      state.error = action.payload
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.userType = null
      state.loading = false
      state.error = null
    },
    clearError: (state) => {
      state.error = null
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, logout, clearError } = authSlice.actions
export default authSlice.reducer
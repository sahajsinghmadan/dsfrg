import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import appReducer from './slices/appSlice'
import trainReducer from './slices/trainSlice'
import staffReducer from './slices/staffSlice'
import scheduleReducer from './slices/scheduleSlice'
import stationReducer from './slices/stationSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
    trains: trainReducer,
    staff: staffReducer,
    schedules: scheduleReducer,
    stations: stationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState, Notification } from '@types/index'

const initialState: AppState = {
  theme: 'light',
  sidebarCollapsed: false,
  notifications: [
    {
      id: '1',
      title: 'Train Delay Alert',
      message: 'Train K101 delayed by 5 minutes',
      type: 'warning',
      timestamp: new Date().toISOString(),
      read: false,
    },
    {
      id: '2',
      title: 'System Update',
      message: 'Scheduled maintenance at 2:00 AM',
      type: 'info',
      timestamp: new Date().toISOString(),
      read: false,
    },
    {
      id: '3',
      title: 'Verification Complete',
      message: 'All morning operations verified',
      type: 'success',
      timestamp: new Date().toISOString(),
      read: false,
    },
  ],
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload
    },
    toggleSidebar: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed
    },
    setSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.sidebarCollapsed = action.payload
    },
    addNotification: (state, action: PayloadAction<Omit<Notification, 'id' | 'timestamp'>>) => {
      const notification: Notification = {
        ...action.payload,
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
      }
      state.notifications.unshift(notification)
    },
    markNotificationAsRead: (state, action: PayloadAction<string>) => {
      const notification = state.notifications.find(n => n.id === action.payload)
      if (notification) {
        notification.read = true
      }
    },
    markAllNotificationsAsRead: (state) => {
      state.notifications.forEach(notification => {
        notification.read = true
      })
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(n => n.id !== action.payload)
    },
  },
})

export const {
  toggleTheme,
  setTheme,
  toggleSidebar,
  setSidebarCollapsed,
  addNotification,
  markNotificationAsRead,
  markAllNotificationsAsRead,
  removeNotification,
} = appSlice.actions

export default appSlice.reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ScheduleState, Schedule } from '@types/index'

const initialState: ScheduleState = {
  schedules: [
    {
      id: '1',
      trainId: 'K101',
      route: 'Aluva - Tripunithura',
      departure: '06:00',
      arrival: '06:45',
      driver: 'Rajesh Kumar',
      status: 'operational',
    },
    {
      id: '2',
      trainId: 'K102',
      route: 'Tripunithura - Aluva',
      departure: '06:30',
      arrival: '07:15',
      driver: 'Priya Nair',
      status: 'delayed',
    },
    {
      id: '3',
      trainId: 'K103',
      route: 'Aluva - Tripunithura',
      departure: '07:00',
      arrival: '07:45',
      driver: 'Suresh Babu',
      status: 'operational',
    },
    {
      id: '4',
      trainId: 'K104',
      route: 'Maintenance',
      departure: '-',
      arrival: '-',
      driver: '-',
      status: 'maintenance',
    },
    {
      id: '5',
      trainId: 'K105',
      route: 'Tripunithura - Aluva',
      departure: '07:30',
      arrival: '08:15',
      driver: 'Meera Thomas',
      status: 'operational',
    },
    {
      id: '6',
      trainId: 'K106',
      route: 'Aluva - Tripunithura',
      departure: '08:00',
      arrival: '08:45',
      driver: 'Ravi Menon',
      status: 'operational',
    },
  ],
  loading: false,
  error: null,
}

const scheduleSlice = createSlice({
  name: 'schedules',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    setSchedules: (state, action: PayloadAction<Schedule[]>) => {
      state.schedules = action.payload
    },
    addSchedule: (state, action: PayloadAction<Schedule>) => {
      state.schedules.push(action.payload)
    },
    updateSchedule: (state, action: PayloadAction<Schedule>) => {
      const index = state.schedules.findIndex(schedule => schedule.id === action.payload.id)
      if (index !== -1) {
        state.schedules[index] = action.payload
      }
    },
    removeSchedule: (state, action: PayloadAction<string>) => {
      state.schedules = state.schedules.filter(schedule => schedule.id !== action.payload)
    },
    updateScheduleStatus: (state, action: PayloadAction<{ id: string; status: Schedule['status'] }>) => {
      const schedule = state.schedules.find(s => s.id === action.payload.id)
      if (schedule) {
        schedule.status = action.payload.status
      }
    },
  },
})

export const {
  setLoading,
  setError,
  setSchedules,
  addSchedule,
  updateSchedule,
  removeSchedule,
  updateScheduleStatus,
} = scheduleSlice.actions

export default scheduleSlice.reducer
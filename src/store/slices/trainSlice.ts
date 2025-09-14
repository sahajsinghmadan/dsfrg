import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TrainState, Train } from '@types/index'

const initialState: TrainState = {
  trains: [
    {
      id: 'K101',
      name: 'Aluva Express',
      route: 'Aluva - Tripunithura',
      driver: 'Rajesh Kumar',
      nextStation: 'Edappally',
      status: 'active',
      lastUpdated: new Date().toISOString(),
    },
    {
      id: 'K102',
      name: 'Tripunithura Express',
      route: 'Tripunithura - Aluva',
      driver: 'Priya Nair',
      nextStation: 'Kakkanad',
      status: 'delayed',
      lastUpdated: new Date().toISOString(),
    },
    {
      id: 'K103',
      name: 'Metro Line 1',
      route: 'Aluva - Tripunithura',
      driver: 'Suresh Babu',
      nextStation: 'Ernakulam South',
      status: 'active',
      lastUpdated: new Date().toISOString(),
    },
    {
      id: 'K104',
      name: 'Maintenance Unit',
      route: 'Maintenance Mode',
      driver: 'Arun Krishnan',
      nextStation: 'Depot',
      status: 'maintenance',
      lastUpdated: new Date().toISOString(),
    },
    {
      id: 'K105',
      name: 'Evening Express',
      route: 'Tripunithura - Aluva',
      driver: 'Meera Thomas',
      nextStation: 'JLN Stadium',
      status: 'active',
      lastUpdated: new Date().toISOString(),
    },
  ],
  loading: false,
  error: null,
}

const trainSlice = createSlice({
  name: 'trains',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    setTrains: (state, action: PayloadAction<Train[]>) => {
      state.trains = action.payload
    },
    addTrain: (state, action: PayloadAction<Train>) => {
      state.trains.push(action.payload)
    },
    updateTrain: (state, action: PayloadAction<Train>) => {
      const index = state.trains.findIndex(train => train.id === action.payload.id)
      if (index !== -1) {
        state.trains[index] = action.payload
      }
    },
    removeTrain: (state, action: PayloadAction<string>) => {
      state.trains = state.trains.filter(train => train.id !== action.payload)
    },
    updateTrainStatus: (state, action: PayloadAction<{ id: string; status: Train['status'] }>) => {
      const train = state.trains.find(t => t.id === action.payload.id)
      if (train) {
        train.status = action.payload.status
        train.lastUpdated = new Date().toISOString()
      }
    },
  },
})

export const {
  setLoading,
  setError,
  setTrains,
  addTrain,
  updateTrain,
  removeTrain,
  updateTrainStatus,
} = trainSlice.actions

export default trainSlice.reducer
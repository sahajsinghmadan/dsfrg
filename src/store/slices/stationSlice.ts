import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StationState, Station } from '@types/index'

const initialState: StationState = {
  stations: [
    { id: 'aluva', name: 'Aluva', lat: 10.1114, lng: 76.3516, status: 'operational' },
    { id: 'pulinchodu', name: 'Pulinchodu', lat: 10.1018, lng: 76.3482, status: 'operational' },
    { id: 'companypady', name: 'Companypady', lat: 10.0925, lng: 76.3450, status: 'operational' },
    { id: 'ambattukavu', name: 'Ambattukavu', lat: 10.0833, lng: 76.3395, status: 'operational' },
    { id: 'muttom', name: 'Muttom', lat: 10.0734, lng: 76.3363, status: 'operational' },
    { id: 'kalamassery', name: 'Kalamassery', lat: 10.0593, lng: 76.3260, status: 'operational' },
    { id: 'cusat', name: 'Cochin University (CUSAT)', lat: 10.0486, lng: 76.3208, status: 'operational' },
    { id: 'pathadipalam', name: 'Pathadipalam', lat: 10.0375, lng: 76.3128, status: 'operational' },
    { id: 'edapally', name: 'Edapally', lat: 10.0259, lng: 76.3087, status: 'operational' },
    { id: 'changampuzha', name: 'Changampuzha Park', lat: 10.0160, lng: 76.3041, status: 'operational' },
    { id: 'palarivattom', name: 'Palarivattom', lat: 10.0102, lng: 76.2999, status: 'operational' },
    { id: 'jlnstadium', name: 'JLN Stadium', lat: 9.9993, lng: 76.2986, status: 'operational' },
    { id: 'kaloor', name: 'Kaloor', lat: 9.9872, lng: 76.2952, status: 'operational' },
    { id: 'townhall', name: 'Town Hall', lat: 9.9816, lng: 76.2906, status: 'operational' },
    { id: 'mgroad', name: 'M.G. Road', lat: 9.9762, lng: 76.2857, status: 'operational' },
    { id: 'maharajas', name: "Maharaja's College", lat: 9.9698, lng: 76.2807, status: 'operational' },
    { id: 'ernakulamsouth', name: 'Ernakulam South', lat: 9.9574, lng: 76.2765, status: 'operational' },
    { id: 'kadavanthra', name: 'Kadavanthra', lat: 9.9507, lng: 76.2762, status: 'operational' },
    { id: 'elamkulam', name: 'Elamkulam', lat: 9.9411, lng: 76.2760, status: 'operational' },
    { id: 'vyttila', name: 'Vyttila', lat: 9.9323, lng: 76.2800, status: 'operational' },
    { id: 'thaikoodam', name: 'Thaikoodam', lat: 9.9244, lng: 76.2953, status: 'operational' },
    { id: 'pettah', name: 'Petta (Pettah)', lat: 9.9182, lng: 76.3025, status: 'operational' },
    { id: 'vadakkekotta', name: 'Vadakkekotta', lat: 9.9170, lng: 76.3105, status: 'operational' },
    { id: 'snjunction', name: 'SN Junction', lat: 9.9160, lng: 76.3185, status: 'operational' },
    { id: 'tripunithura', name: 'Tripunithura (Terminal)', lat: 9.9141, lng: 76.3262, status: 'operational' },
  ],
  loading: false,
  error: null,
}

const stationSlice = createSlice({
  name: 'stations',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    setStations: (state, action: PayloadAction<Station[]>) => {
      state.stations = action.payload
    },
    updateStationStatus: (state, action: PayloadAction<{ id: string; status: Station['status'] }>) => {
      const station = state.stations.find(s => s.id === action.payload.id)
      if (station) {
        station.status = action.payload.status
      }
    },
  },
})

export const {
  setLoading,
  setError,
  setStations,
  updateStationStatus,
} = stationSlice.actions

export default stationSlice.reducer
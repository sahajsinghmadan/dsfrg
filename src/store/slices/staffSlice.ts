import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StaffState, Staff } from '@types/index'

const initialState: StaffState = {
  staff: [
    {
      id: '1',
      name: 'Rajesh Kumar',
      department: 'Train Operations',
      employeeId: 'EMP001',
      status: 'on-duty',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop&crop=face',
    },
    {
      id: '2',
      name: 'Priya Nair',
      department: 'Train Operations',
      employeeId: 'EMP002',
      status: 'on-duty',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop&crop=face',
    },
    {
      id: '3',
      name: 'Arun Krishnan',
      department: 'Maintenance',
      employeeId: 'EMP003',
      status: 'on-duty',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop&crop=face',
    },
    {
      id: '4',
      name: 'Suresh Babu',
      department: 'Safety',
      employeeId: 'EMP004',
      status: 'off-duty',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop&crop=face',
    },
    {
      id: '5',
      name: 'Meera Thomas',
      department: 'Station Management',
      employeeId: 'EMP005',
      status: 'on-duty',
      avatar: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop&crop=face',
    },
    {
      id: '6',
      name: 'Ravi Menon',
      department: 'Security',
      employeeId: 'EMP006',
      status: 'on-duty',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop&crop=face',
    },
    {
      id: '7',
      name: 'Lakshmi Pillai',
      department: 'Customer Service',
      employeeId: 'EMP007',
      status: 'on-duty',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop&crop=face',
    },
    {
      id: '8',
      name: 'Vinod Kumar',
      department: 'Control Room',
      employeeId: 'EMP008',
      status: 'on-duty',
      avatar: 'https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop&crop=face',
    },
  ],
  loading: false,
  error: null,
}

const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    setStaff: (state, action: PayloadAction<Staff[]>) => {
      state.staff = action.payload
    },
    addStaff: (state, action: PayloadAction<Staff>) => {
      state.staff.push(action.payload)
    },
    updateStaff: (state, action: PayloadAction<Staff>) => {
      const index = state.staff.findIndex(member => member.id === action.payload.id)
      if (index !== -1) {
        state.staff[index] = action.payload
      }
    },
    removeStaff: (state, action: PayloadAction<string>) => {
      state.staff = state.staff.filter(member => member.id !== action.payload)
    },
    updateStaffStatus: (state, action: PayloadAction<{ id: string; status: Staff['status'] }>) => {
      const member = state.staff.find(s => s.id === action.payload.id)
      if (member) {
        member.status = action.payload.status
      }
    },
  },
})

export const {
  setLoading,
  setError,
  setStaff,
  addStaff,
  updateStaff,
  removeStaff,
  updateStaffStatus,
} = staffSlice.actions

export default staffSlice.reducer
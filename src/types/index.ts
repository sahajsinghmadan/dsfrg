export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
  avatar?: string
}

export interface Train {
  id: string
  name: string
  route: string
  driver: string
  nextStation: string
  status: 'active' | 'delayed' | 'maintenance'
  lastUpdated: string
}

export interface Staff {
  id: string
  name: string
  department: string
  employeeId: string
  status: 'on-duty' | 'off-duty'
  avatar?: string
}

export interface Schedule {
  id: string
  trainId: string
  route: string
  departure: string
  arrival: string
  driver: string
  status: 'operational' | 'delayed' | 'maintenance'
}

export interface Station {
  id: string
  name: string
  lat: number
  lng: number
  status: 'operational' | 'maintenance'
}

export interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'warning' | 'error' | 'success'
  timestamp: string
  read: boolean
}

export interface VerificationItem {
  id: string
  title: string
  type: string
  assignee: string
  status: 'pending' | 'in-progress' | 'completed'
  scheduledTime?: string
  description: string
}

export interface Report {
  id: string
  title: string
  description: string
  type: string
  generatedDate: string
  status: string
}

export interface Feedback {
  id: string
  name: string
  email?: string
  phone: string
  fromStation?: string
  toStation?: string
  journeyTime?: string
  rating: number
  comments?: string
  date: string
}

export interface Ticket {
  id: string
  passengerName: string
  fromStation: string
  toStation: string
  fare: number
  passengers: number
  journeyDate: string
  qrCode: string
  status: 'active' | 'used' | 'expired'
}

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
  userType: 'admin' | 'user' | null
  loading: boolean
  error: string | null
}

export interface AppState {
  theme: 'light' | 'dark'
  sidebarCollapsed: boolean
  notifications: Notification[]
}

export interface TrainState {
  trains: Train[]
  loading: boolean
  error: string | null
}

export interface StaffState {
  staff: Staff[]
  loading: boolean
  error: string | null
}

export interface ScheduleState {
  schedules: Schedule[]
  loading: boolean
  error: string | null
}

export interface StationState {
  stations: Station[]
  loading: boolean
  error: string | null
}
import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@store/index'
import { ErrorBoundary } from '@components/common/ErrorBoundary'
import { LoadingSpinner } from '@components/common/LoadingSpinner'
import { ToastContainer } from '@components/common/ToastContainer'
import { ThemeProvider } from '@components/providers/ThemeProvider'

// Lazy load pages for code splitting
const Dashboard = React.lazy(() => import('@pages/Dashboard'))
const TrainOperations = React.lazy(() => import('@pages/TrainOperations'))
const VerifyOperations = React.lazy(() => import('@pages/VerifyOperations'))
const StaffManagement = React.lazy(() => import('@pages/StaffManagement'))
const ScheduleManagement = React.lazy(() => import('@pages/ScheduleManagement'))
const LiveMap = React.lazy(() => import('@pages/LiveMap'))
const Reports = React.lazy(() => import('@pages/Reports'))
const AddTrain = React.lazy(() => import('@pages/AddTrain'))
const AddStaff = React.lazy(() => import('@pages/AddStaff'))
const AddSchedule = React.lazy(() => import('@pages/AddSchedule'))
const UserDashboard = React.lazy(() => import('@pages/UserDashboard'))
const TicketBooking = React.lazy(() => import('@pages/TicketBooking'))
const Feedback = React.lazy(() => import('@pages/Feedback'))
const FrontPage = React.lazy(() => import('@pages/FrontPage'))
const NotFound = React.lazy(() => import('@pages/NotFound'))

function App() {
  const { isAuthenticated, userType } = useSelector((state: RootState) => state.auth)

  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<FrontPage />} />
              <Route path="/user" element={<UserDashboard />} />
              <Route path="/ticket" element={<TicketBooking />} />
              <Route path="/feedback" element={<Feedback />} />
              
              {/* Protected admin routes */}
              <Route path="/admin" element={
                isAuthenticated && userType === 'admin' ? (
                  <Navigate to="/admin/dashboard" replace />
                ) : (
                  <Navigate to="/" replace />
                )
              } />
              
              <Route path="/admin/dashboard" element={
                isAuthenticated && userType === 'admin' ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/" replace />
                )
              } />
              
              <Route path="/admin/train-operations" element={
                isAuthenticated && userType === 'admin' ? (
                  <TrainOperations />
                ) : (
                  <Navigate to="/" replace />
                )
              } />
              
              <Route path="/admin/verify-operations" element={
                isAuthenticated && userType === 'admin' ? (
                  <VerifyOperations />
                ) : (
                  <Navigate to="/" replace />
                )
              } />
              
              <Route path="/admin/staff-management" element={
                isAuthenticated && userType === 'admin' ? (
                  <StaffManagement />
                ) : (
                  <Navigate to="/" replace />
                )
              } />
              
              <Route path="/admin/schedule-management" element={
                isAuthenticated && userType === 'admin' ? (
                  <ScheduleManagement />
                ) : (
                  <Navigate to="/" replace />
                )
              } />
              
              <Route path="/admin/live-map" element={
                isAuthenticated && userType === 'admin' ? (
                  <LiveMap />
                ) : (
                  <Navigate to="/" replace />
                )
              } />
              
              <Route path="/admin/reports" element={
                isAuthenticated && userType === 'admin' ? (
                  <Reports />
                ) : (
                  <Navigate to="/" replace />
                )
              } />
              
              <Route path="/admin/add-train" element={
                isAuthenticated && userType === 'admin' ? (
                  <AddTrain />
                ) : (
                  <Navigate to="/" replace />
                )
              } />
              
              <Route path="/admin/add-staff" element={
                isAuthenticated && userType === 'admin' ? (
                  <AddStaff />
                ) : (
                  <Navigate to="/" replace />
                )
              } />
              
              <Route path="/admin/add-schedule" element={
                isAuthenticated && userType === 'admin' ? (
                  <AddSchedule />
                ) : (
                  <Navigate to="/" replace />
                )
              } />
              
              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          
          <ToastContainer />
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
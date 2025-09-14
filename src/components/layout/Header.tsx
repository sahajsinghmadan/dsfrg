import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { RootState } from '@store/index'
import { toggleTheme, toggleSidebar } from '@store/slices/appSlice'
import { logout } from '@store/slices/authSlice'
import { NotificationDropdown } from './NotificationDropdown'
import { ProfileDropdown } from './ProfileDropdown'

export const Header: React.FC = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { theme, sidebarCollapsed } = useSelector((state: RootState) => state.app)
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth)

  const handleThemeToggle = () => {
    dispatch(toggleTheme())
  }

  const handleSidebarToggle = () => {
    dispatch(toggleSidebar())
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  const isAdminRoute = location.pathname.startsWith('/admin')

  const navigationItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: 'fas fa-tachometer-alt' },
    { 
      label: 'Operations', 
      icon: 'fas fa-cogs',
      children: [
        { path: '/admin/train-operations', label: 'Train Operations', icon: 'fas fa-train' },
        { path: '/admin/verify-operations', label: 'Verify Operations', icon: 'fas fa-check-circle' },
      ]
    },
    { path: '/admin/staff-management', label: 'Staff', icon: 'fas fa-users' },
    { path: '/admin/schedule-management', label: 'Schedule', icon: 'fas fa-calendar-alt' },
    { path: '/admin/live-map', label: 'Live Map', icon: 'fas fa-map-marked-alt' },
    { path: '/admin/reports', label: 'Reports', icon: 'fas fa-chart-bar' },
  ]

  if (!isAdminRoute) {
    return null
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side */}
          <div className="flex items-center space-x-4">
            {/* Sidebar toggle */}
            <button
              onClick={handleSidebarToggle}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 lg:hidden"
            >
              <i className={`fas ${sidebarCollapsed ? 'fa-bars' : 'fa-times'}`} />
            </button>

            {/* Logo */}
            <Link to="/admin/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-subway text-white text-sm" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Kochi Metro
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <div className="relative">
                      <button className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <i className={item.icon} />
                        <span>{item.label}</span>
                        <i className="fas fa-chevron-down text-xs" />
                      </button>
                      <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="py-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className={`flex items-center space-x-2 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                                location.pathname === child.path
                                  ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                                  : 'text-gray-700 dark:text-gray-300'
                              }`}
                            >
                              <i className={child.icon} />
                              <span>{child.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path!}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        location.pathname === item.path
                          ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                          : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <i className={item.icon} />
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-label="Toggle theme"
            >
              <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} />
            </button>

            {/* Notifications */}
            {isAuthenticated && <NotificationDropdown />}

            {/* Profile */}
            {isAuthenticated && user && (
              <ProfileDropdown user={user} onLogout={handleLogout} />
            )}
          </div>
        </div>
      </div>
    </motion.header>
  )
}
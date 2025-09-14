import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { RootState } from '@store/index'
import { setSidebarCollapsed } from '@store/slices/appSlice'

export const Sidebar: React.FC = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { sidebarCollapsed } = useSelector((state: RootState) => state.app)

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

  const handleSidebarToggle = () => {
    dispatch(setSidebarCollapsed(!sidebarCollapsed))
  }

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {!sidebarCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(setSidebarCollapsed(true))}
            className="fixed inset-0 bg-gray-600 bg-opacity-75 z-30 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{
          x: sidebarCollapsed ? -280 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 shadow-lg lg:relative lg:translate-x-0"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
            <Link to="/admin/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-subway text-white text-sm" />
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Kochi Metro
              </span>
            </Link>
            <button
              onClick={handleSidebarToggle}
              className="p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 lg:hidden"
            >
              <i className="fas fa-times" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
            {navigationItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      <i className={item.icon} />
                      <span>{item.label}</span>
                    </div>
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                            location.pathname === child.path
                              ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                              : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          <i className={child.icon} />
                          <span>{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path!}
                    className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
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

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
              © 2024 Kochi Metro Rail Corporation
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
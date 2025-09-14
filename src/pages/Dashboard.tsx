import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { RootState } from '@store/index'
import { Header } from '@components/layout/Header'
import { Sidebar } from '@components/layout/Sidebar'

const Dashboard: React.FC = () => {
  const { trains } = useSelector((state: RootState) => state.trains)
  const { staff } = useSelector((state: RootState) => state.staff)
  const { schedules } = useSelector((state: RootState) => state.schedules)

  const stats = [
    {
      title: 'Active Trains',
      value: trains.filter(t => t.status === 'active').length,
      change: '+2 from yesterday',
      changeType: 'positive',
      icon: 'fas fa-train',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      title: 'Staff on Duty',
      value: staff.filter(s => s.status === 'on-duty').length,
      change: '+5 from yesterday',
      changeType: 'positive',
      icon: 'fas fa-users',
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    },
    {
      title: 'On-Time Performance',
      value: '98.5%',
      change: '+1.2% from yesterday',
      changeType: 'positive',
      icon: 'fas fa-clock',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20'
    },
    {
      title: 'Active Alerts',
      value: 2,
      change: '-1 from yesterday',
      changeType: 'negative',
      icon: 'fas fa-exclamation-triangle',
      color: 'text-red-600',
      bgColor: 'bg-red-100 dark:bg-red-900/20'
    }
  ]

  const recentActivities = [
    {
      id: '1',
      title: 'Morning operations verified successfully',
      time: '2 hours ago',
      icon: 'fas fa-check-circle',
      iconColor: 'text-green-500'
    },
    {
      id: '2',
      title: 'New staff member added to system',
      time: '4 hours ago',
      icon: 'fas fa-user-plus',
      iconColor: 'text-blue-500'
    },
    {
      id: '3',
      title: 'Weekly schedule updated',
      time: '6 hours ago',
      icon: 'fas fa-calendar-check',
      iconColor: 'text-purple-500'
    },
    {
      id: '4',
      title: 'Train K105 completed maintenance',
      time: '8 hours ago',
      icon: 'fas fa-train',
      iconColor: 'text-orange-500'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Dashboard - Kochi Metro Management System</title>
        <meta name="description" content="Comprehensive dashboard for Kochi Metro rail operations and management" />
      </Helmet>

      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          
          <main className="flex-1 overflow-y-auto">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="relative px-6 py-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-7xl mx-auto"
                >
                  <h1 className="text-4xl font-bold mb-4">
                    Welcome to Kochi Metro Management
                  </h1>
                  <p className="text-xl opacity-90">
                    Efficient, Safe, and Sustainable Urban Transportation
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {stat.title}
                        </p>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                          {stat.value}
                        </p>
                        <p className={`text-sm mt-2 ${
                          stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.change}
                        </p>
                      </div>
                      <div className={`p-3 rounded-full ${stat.bgColor}`}>
                        <i className={`${stat.icon} ${stat.color} text-xl`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Recent Activity
                    </h2>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {recentActivities.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <i className={`${activity.icon} ${activity.iconColor}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {activity.title}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Quick Actions
                    </h2>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <motion.a
                        href="/admin/train-operations"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex flex-col items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                      >
                        <i className="fas fa-train text-blue-600 text-2xl mb-2" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          Train Operations
                        </span>
                      </motion.a>
                      
                      <motion.a
                        href="/admin/verify-operations"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex flex-col items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                      >
                        <i className="fas fa-check-circle text-green-600 text-2xl mb-2" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          Verify Operations
                        </span>
                      </motion.a>
                      
                      <motion.a
                        href="/admin/staff-management"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex flex-col items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                      >
                        <i className="fas fa-users text-purple-600 text-2xl mb-2" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          Staff Management
                        </span>
                      </motion.a>
                      
                      <motion.a
                        href="/admin/live-map"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex flex-col items-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
                      >
                        <i className="fas fa-map-marked-alt text-orange-600 text-2xl mb-2" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          Live Map
                        </span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Dashboard
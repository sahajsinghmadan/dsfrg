import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '@store/slices/authSlice'
import { showToast } from '@components/common/ToastContainer'

const FrontPage: React.FC = () => {
  const dispatch = useDispatch()
  const [currentQuote, setCurrentQuote] = useState(0)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [loginType, setLoginType] = useState<'customer' | 'admin'>('customer')
  const [loginTab, setLoginTab] = useState<'login' | 'signup'>('login')

  const quotes = [
    "Namaskaram! Welcome to Kochi Metro.",
    "നമസ്കാരം! കൊച്ചി മെട്രോയിലേക്ക് നിങ്ങളുടെ സ്വാഗതം.",
    "नमस्कार! कोच्चि मेट्रो में आपका स्वागत है।"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [quotes.length])

  const handleLogin = (type: 'customer' | 'admin') => {
    setLoginType(type)
    setShowLoginModal(true)
  }

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Mock login logic
    const mockUser = {
      id: '1',
      name: loginType === 'admin' ? 'Admin User' : 'Customer User',
      email: loginType === 'admin' ? 'admin@kochimetro.org' : 'user@example.com',
      role: loginType as 'admin' | 'user',
    }

    dispatch(loginSuccess({ user: mockUser, userType: loginType }))
    setShowLoginModal(false)
    
    showToast({
      type: 'success',
      title: 'Login Successful',
      message: `Welcome back, ${mockUser.name}!`
    })

    // Redirect based on user type
    if (loginType === 'admin') {
      window.location.href = '/admin/dashboard'
    } else {
      window.location.href = '/user'
    }
  }

  return (
    <>
      <Helmet>
        <title>Kochi Metro Rail Limited - Connecting the City</title>
        <meta name="description" content="Kochi Metro provides fast, safe, and eco-friendly urban transportation connecting key areas across Kochi metropolitan region." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        {/* Navigation */}
        <nav className="bg-blue-900 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <i className="fas fa-subway text-blue-900 text-lg" />
                </div>
                <h1 className="text-xl font-bold">Kochi Metro Rail Limited</h1>
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#hero" className="hover:text-blue-200 transition-colors">Home</a>
                <a href="#why" className="hover:text-blue-200 transition-colors">Why Metro</a>
                <a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="relative py-20 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Connecting the city with speed, comfort and style
            </h1>
            
            <motion.p
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-2xl md:text-3xl text-blue-800 dark:text-blue-300 font-medium italic mb-8"
            >
              {quotes[currentQuote]}
            </motion.p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {index === 0 ? 'English' : index === 1 ? 'Malayalam' : 'Hindi'}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLogin('customer')}
                className="flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                <i className="fas fa-user" />
                <span>Customer Login</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLogin('admin')}
                className="flex items-center space-x-2 px-8 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
              >
                <i className="fas fa-user-shield" />
                <span>Admin Login</span>
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* Why Metro Section */}
        <section id="why" className="py-20 px-4 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Travel by Kochi Metro?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Kochi Metro provides a fast, safe, and eco-friendly way to travel across the city. 
                It reduces traffic congestion, saves time, and connects key business and tourist areas efficiently.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Fast Travel',
                  description: 'Reach your destination quickly and efficiently, avoiding city traffic jams.',
                  icon: 'fas fa-bolt',
                  color: 'text-yellow-600',
                  bgColor: 'bg-yellow-100 dark:bg-yellow-900/20'
                },
                {
                  title: 'Safe & Reliable',
                  description: 'Travel in a secure environment with state-of-the-art surveillance and facilities.',
                  icon: 'fas fa-shield-alt',
                  color: 'text-green-600',
                  bgColor: 'bg-green-100 dark:bg-green-900/20'
                },
                {
                  title: 'Eco-Friendly',
                  description: 'Reduce your carbon footprint by choosing a sustainable mode of transportation.',
                  icon: 'fas fa-leaf',
                  color: 'text-green-600',
                  bgColor: 'bg-green-100 dark:bg-green-900/20'
                },
                {
                  title: 'Convenient',
                  description: 'Well-connected stations and regular schedules make commuting hassle-free.',
                  icon: 'fas fa-clock',
                  color: 'text-blue-600',
                  bgColor: 'bg-blue-100 dark:bg-blue-900/20'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${feature.icon} ${feature.color} text-2xl`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-blue-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-lg mb-4">&copy; 2024 Kochi Metro Rail Limited</p>
            <div className="flex justify-center space-x-6 mb-4">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <i className="fab fa-facebook text-xl" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <i className="fab fa-twitter text-xl" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <i className="fab fa-instagram text-xl" />
              </a>
            </div>
            <p className="text-blue-200">
              Email: info@kochimetro.org | Phone: +91 484 1234567
            </p>
          </div>
        </footer>

        {/* Login Modal */}
        <AnimatePresence>
          {showLoginModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setShowLoginModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {loginType === 'admin' ? 'Admin Portal' : 'Customer Portal'}
                  </h2>
                  <button
                    onClick={() => setShowLoginModal(false)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <i className="fas fa-times text-xl" />
                  </button>
                </div>

                <div className="flex mb-6 border-b border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => setLoginTab('login')}
                    className={`flex-1 py-2 text-center font-medium transition-colors ${
                      loginTab === 'login'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setLoginTab('signup')}
                    className={`flex-1 py-2 text-center font-medium transition-colors ${
                      loginTab === 'signup'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    Sign Up
                  </button>
                </div>

                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  {loginTab === 'signup' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="input"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="input"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      className="input"
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn btn-primary"
                  >
                    {loginTab === 'login' ? 'Login' : 'Sign Up'}
                  </button>
                </form>

                {loginTab === 'login' && (
                  <div className="mt-4 text-center">
                    <button className="text-sm text-blue-600 hover:text-blue-500">
                      Forgot Password?
                    </button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default FrontPage
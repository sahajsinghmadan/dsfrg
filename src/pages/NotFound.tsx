import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Kochi Metro</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl text-blue-600 mb-6">
              <i className="fas fa-train" />
            </div>
            
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
              404
            </h1>
            
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Station Not Found
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Looks like this train has taken a different route. 
              Let's get you back on track!
            </p>
            
            <div className="space-y-4">
              <Link
                to="/"
                className="block w-full btn btn-primary"
              >
                <i className="fas fa-home mr-2" />
                Back to Home
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="block w-full btn btn-secondary"
              >
                <i className="fas fa-arrow-left mr-2" />
                Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default NotFound
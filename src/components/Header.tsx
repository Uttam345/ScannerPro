import { motion } from 'framer-motion'
import { ShoppingBag, Star, User } from 'lucide-react'

const Header = () => {
  return (
    <motion.header 
      className="header"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <ShoppingBag className="logo-icon" />
            <div>
              <h1 className="app-title">Walmart SmartScan Pro</h1>
              <p className="app-subtitle">AI-Powered Shopping Revolution</p>
            </div>
          </div>
          
          <div className="header-actions">
            <div className="user-stats">
              <div className="stat-item">
                <Star className="stat-icon" />
                <div>
                  <span className="stat-value">2,847</span>
                  <span className="stat-label">W+ Points</span>
                </div>
              </div>
              <div className="stat-item">
                <div>
                  <span className="stat-value">Gold</span>
                  <span className="stat-label">Level</span>
                </div>
              </div>
            </div>
            
            <div className="walmart-logo">
              <span className="walmart-text">Walmart</span>
            </div>
            
            <button className="profile-btn">
              <User className="profile-icon" />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header

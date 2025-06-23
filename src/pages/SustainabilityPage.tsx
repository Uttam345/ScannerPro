import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Leaf, 
  Recycle, 
  Globe, 
  TrendingUp, 
  Award,
  Users,
  Heart,
  Zap,
  CheckCircle,
  ArrowUp,
  ShoppingBag,
  Star
} from 'lucide-react'

const SustainabilityPage = () => {
  const [animatedValues, setAnimatedValues] = useState({
    co2Saved: 0,
    recyclingRate: 0,
    ecoProducts: 0
  })

  // Animate values on mount
  useEffect(() => {
    const animateValue = (start: number, end: number, duration: number, callback: (value: number) => void) => {
      const startTime = Date.now()
      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const current = start + (end - start) * progress
        callback(Math.round(current))
        
        if (progress >= 1) {
          clearInterval(timer)
        }
      }, 16)
    }

    setTimeout(() => {
      animateValue(0, 12.4, 2000, (value) => 
        setAnimatedValues(prev => ({ ...prev, co2Saved: value }))
      )
      animateValue(0, 89, 2500, (value) => 
        setAnimatedValues(prev => ({ ...prev, recyclingRate: value }))
      )
      animateValue(0, 23, 1800, (value) => 
        setAnimatedValues(prev => ({ ...prev, ecoProducts: value }))
      )
    }, 500)
  }, [])

  const impactMetrics = [
    { 
      label: 'CO₂ Saved This Month', 
      value: `${animatedValues.co2Saved}.4 kg`, 
      icon: Globe,
      trend: '+12%',
      color: 'eco-green'
    },
    { 
      label: 'Recyclable Purchases', 
      value: `${animatedValues.recyclingRate}%`, 
      icon: Recycle,
      trend: '+5%',
      color: 'eco-leaf'
    },
    { 
      label: 'Eco Products Bought', 
      value: animatedValues.ecoProducts.toString(), 
      icon: Leaf,
      trend: '+18%',
      color: 'eco-green'
    },
    { 
      label: 'Green Score', 
      value: 'A+', 
      icon: Award,
      trend: 'Improved',
      color: 'eco-leaf'
    }
  ]

  const communityStats = [
    {
      title: '50K+ Eco Champions',
      description: 'Community members committed to sustainability',
      icon: Users,
      value: '50,247'
    },
    {
      title: '₢2.3M CO₂ Prevented',
      description: 'Total carbon footprint reduced by our community',
      icon: Globe,
      value: '2.3M kg'
    },
    {
      title: '89% Choose Sustainable',
      description: 'Members preferring eco-friendly options',
      icon: Heart,
      value: '89%'
    }
  ]

  const realtimeActivity = [
    { user: 'Sarah M.', action: 'chose organic produce', time: '2 min ago', avatar: 'S' },
    { user: 'Mike R.', action: 'bought reusable bags', time: '5 min ago', avatar: 'M' },
    { user: 'Emma L.', action: 'selected eco-friendly detergent', time: '8 min ago', avatar: 'E' },
    { user: 'David K.', action: 'purchased solar charger', time: '12 min ago', avatar: 'D' },
    { user: 'Lisa P.', action: 'chose bamboo utensils', time: '15 min ago', avatar: 'L' }
  ]

  const ecoProducts = [
    {
      name: 'Bamboo Fiber Plates Set',
      ecoScore: 'A+',
      carbonSaved: '3.2 kg',
      price: '$24.99',
      rating: 4.8,
      reviews: 342,
      trending: true
    },
    {
      name: 'Organic Cotton Tote Bags',
      ecoScore: 'A+',
      carbonSaved: '2.8 kg',
      price: '$8.99',
      rating: 4.9,
      reviews: 567,
      trending: false
    },
    {
      name: 'Solar LED String Lights',
      ecoScore: 'A',
      carbonSaved: '5.1 kg',
      price: '$18.99',
      rating: 4.7,
      reviews: 423,
      trending: true
    },
    {
      name: 'Stainless Steel Water Bottle',
      ecoScore: 'A+',
      carbonSaved: '8.5 kg',
      price: '$12.99',
      rating: 4.8,
      reviews: 892,
      trending: false
    },
    {
      name: 'Biodegradable Phone Case',
      ecoScore: 'A',
      carbonSaved: '1.2 kg',
      price: '$15.99',
      rating: 4.6,
      reviews: 234,
      trending: true
    },
    {
      name: 'Recycled Paper Notebooks',
      ecoScore: 'A+',
      carbonSaved: '0.8 kg',
      price: '$6.99',
      rating: 4.7,
      reviews: 156,
      trending: false
    }
  ]

  return (
    <div className="page sustainability-page">
      <div className="container">
        <motion.div
          className="sustainability-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="page-title">
            <Leaf className="page-icon" />
            Social & Eco Hub
          </h2>
          <p className="page-description">
            Track your environmental impact, connect with eco-conscious shoppers, and discover sustainable products together
          </p>
        </motion.div>

        {/* Enhanced Impact Dashboard */}
        <motion.section
          className="enhanced-impact-dashboard fade-in"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="section-title">Your Environmental Impact</h3>
          <div className="impact-metrics-grid">
            {impactMetrics.map(({ label, value, icon: Icon, trend, color }, index) => (
              <motion.div
                key={label}
                className="impact-metric-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                <div className="metric-header">
                  <div className="metric-icon">
                    <Icon size={20} />
                  </div>
                  <div className="metric-info">
                    <h3>{label}</h3>
                    <p>Personal contribution</p>
                  </div>
                </div>
                <div className="metric-value">{value}</div>
                <div className="metric-trend">
                  <ArrowUp className="trend-icon" />
                  <span>{trend} this month</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Social Impact Visualizations */}
        <motion.section
          className="social-impact-section slide-in-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="section-title">Community Impact</h3>
          <div className="impact-visualization">
            <div className="community-stats">
              <h4 style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--text-dark)', fontSize: 'var(--font-size-xl)' }}>
                Community Statistics
              </h4>
              {communityStats.map(({ title, description, icon: Icon, value }, index) => (
                <motion.div
                  key={title}
                  className="stat-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  <div className="stat-icon-wrapper">
                    <Icon size={20} />
                  </div>
                  <div className="stat-content">
                    <h4>{value}</h4>
                    <p>{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="real-time-activity">
              <h4 style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--text-dark)', fontSize: 'var(--font-size-xl)' }}>
                <Zap size={20} style={{ marginRight: 'var(--spacing-sm)', color: 'var(--eco-green)' }} />
                Live Eco Activity
              </h4>
              <div className="activity-feed">
                {realtimeActivity.map(({ user, action, time, avatar }, index) => (
                  <motion.div
                    key={`${user}-${index}`}
                    className="activity-item"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  >
                    <div className="activity-avatar">{avatar}</div>
                    <div className="activity-content">
                      <div className="activity-text">
                        <strong>{user}</strong> {action}
                      </div>
                      <div className="activity-time">{time}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Enhanced Eco Products */}
        <motion.section
          className="eco-products-section slide-in-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="section-title">Community Recommended Eco Products</h3>
          <div className="eco-products-grid">
            {ecoProducts.map((product, index) => (
              <motion.div
                key={product.name}
                className="eco-product-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
              >
                <div className="eco-product-header">
                  <span className="eco-score">{product.ecoScore}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                    {product.trending && (
                      <div style={{ 
                        background: 'var(--walmart-yellow)', 
                        color: 'var(--text-dark)', 
                        padding: '2px 8px', 
                        borderRadius: 'var(--radius-sm)', 
                        fontSize: '12px',
                        fontWeight: '600'
                      }}>
                        Trending
                      </div>
                    )}
                    <Leaf className="eco-product-icon" />
                  </div>
                </div>
                
                <h4 className="eco-product-name">{product.name}</h4>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                  <Star size={16} style={{ color: 'var(--walmart-yellow)', fill: 'currentColor' }} />
                  <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600' }}>{product.rating}</span>
                  <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-light)' }}>({product.reviews})</span>
                </div>
                
                <div className="eco-product-stats">
                  <span className="carbon-saved">
                    <Globe size={16} />
                    Saves {product.carbonSaved} CO₂
                  </span>
                  <span className="eco-product-price">{product.price}</span>
                </div>
                
                <button className="btn btn-eco" style={{ width: '100%', marginTop: 'var(--spacing-md)' }}>
                  <ShoppingBag className="btn-icon" />
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Sustainability Tips */}
        <motion.section
          className="sustainability-tips fade-in"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            width: '100%',
            maxWidth: '1200px',
            background: 'var(--white)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--spacing-xxl)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            border: '1px solid var(--medium-gray)',
            marginTop: 'var(--spacing-xl)'
          }}
        >
          <h3 className="section-title">Community Sustainability Tips</h3>
          <div className="grid grid-3">
            <motion.div
              className="tip-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: 'var(--spacing-xl)',
                background: 'linear-gradient(135deg, var(--eco-light-green) 0%, rgba(187, 247, 208, 0.3) 100%)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--eco-green)',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ y: -5, boxShadow: '0 12px 32px rgba(34, 197, 94, 0.2)' }}
            >
              <Recycle style={{ width: '3rem', height: '3rem', color: 'var(--eco-green)', marginBottom: 'var(--spacing-md)' }} />
              <h4 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--spacing-sm)', color: 'var(--text-dark)' }}>
                Choose Recyclable
              </h4>
              <p style={{ color: 'var(--text-light)' }}>
                Look for products with minimal, recyclable packaging to reduce waste
              </p>
            </motion.div>
            
            <motion.div
              className="tip-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: 'var(--spacing-xl)',
                background: 'linear-gradient(135deg, rgba(0, 113, 206, 0.1) 0%, rgba(0, 113, 206, 0.05) 100%)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--walmart-blue)',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ y: -5, boxShadow: '0 12px 32px rgba(0, 113, 206, 0.2)' }}
            >
              <Globe style={{ width: '3rem', height: '3rem', color: 'var(--walmart-blue)', marginBottom: 'var(--spacing-md)' }} />
              <h4 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--spacing-sm)', color: 'var(--text-dark)' }}>
                Support Local
              </h4>
              <p style={{ color: 'var(--text-light)' }}>
                Buy from local producers to reduce transportation emissions and support community
              </p>
            </motion.div>
            
            <motion.div
              className="tip-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: 'var(--spacing-xl)',
                background: 'linear-gradient(135deg, rgba(255, 194, 32, 0.1) 0%, rgba(255, 194, 32, 0.05) 100%)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--walmart-yellow)',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ y: -5, boxShadow: '0 12px 32px rgba(255, 194, 32, 0.2)' }}
            >
              <TrendingUp style={{ width: '3rem', height: '3rem', color: 'var(--walmart-yellow)', marginBottom: 'var(--spacing-md)' }} />
              <h4 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--spacing-sm)', color: 'var(--text-dark)' }}>
                Quality Over Quantity
              </h4>
              <p style={{ color: 'var(--text-light)' }}>
                Invest in durable, high-quality products that last longer and reduce replacement needs
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default SustainabilityPage
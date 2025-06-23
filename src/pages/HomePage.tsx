import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Scan, 
  MessageCircle, 
  Users, 
  Leaf, 
  Trophy, 
  TrendingUp,
  Star,
  ThumbsUp,
  Eye
} from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      id: 'scanner',
      title: 'Social Proof Scanner',
      description: 'Scan products and see real-time reviews, ratings, and social validation from the Walmart community',
      icon: Scan,
      link: '/scanner',
      color: 'blue',
      primary: true
    },
    {
      id: 'social',
      title: 'Community Reviews',
      description: 'Connect with millions of shoppers and discover what others are buying',
      icon: Users,
      link: '/social',
      color: 'green'
    },
    {
      id: 'assistant',
      title: 'Smart Recommendations',
      description: 'AI-powered suggestions based on community trends and your preferences',
      icon: MessageCircle,
      link: '/assistant',
      color: 'purple'
    },
    {
      id: 'sustainability',
      title: 'Verified Impact',
      description: 'See community-verified sustainability ratings and eco-friendly alternatives',
      icon: Leaf,
      link: '/sustainability',
      color: 'green'
    }
  ]

  const stats = [
    { label: 'Products Scanned', value: '127', icon: Scan },
    { label: 'Money Saved', value: '$284', icon: TrendingUp },
    { label: 'Friends Connected', value: '18', icon: Users },
    { label: 'Eco Score', value: 'A+', icon: Leaf }
  ]

  return (
    <div className="page home-page">
      <div className="container">
        {/* Hero Section */}
        <motion.section 
          className="hero-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >          <div className="hero-content">
            <h2 className="hero-title">
              <Scan className="hero-icon" />
              Walmart Social Proof Scanner
            </h2>
            <p className="hero-description">
              Scan any product and instantly see real reviews, community ratings, and social validation 
              from millions of Walmart shoppers. Make smarter purchases with the power of community wisdom.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <Star className="hero-stat-icon" />
                <span>50M+ Reviews</span>
              </div>
              <div className="hero-stat">
                <Eye className="hero-stat-icon" />
                <span>Real-time Insights</span>
              </div>
              <div className="hero-stat">
                <ThumbsUp className="hero-stat-icon" />
                <span>Verified Ratings</span>
              </div>
            </div>
            <div className="hero-actions">
              <Link to="/scanner" className="btn btn-primary btn-large">
                <Scan className="btn-icon" />
                Start Scanning Products
              </Link>
              <Link to="/social" className="btn btn-secondary btn-large">
                <Users className="btn-icon" />
                Explore Community
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          className="stats-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h3 className="section-title">Your Shopping Journey</h3>
          <div className="stats-grid">
            {stats.map(({ label, value, icon: Icon }, index) => (
              <motion.div
                key={label}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              >
                <Icon className="stat-card-icon" />
                <div className="stat-card-content">
                  <span className="stat-card-value">{value}</span>
                  <span className="stat-card-label">{label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>        {/* Features Section */}
        <motion.section 
          className="features-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="section-title">Powered by Community Intelligence</h3>
          <div className="features-grid">
            {features.map(({ id, title, description, icon: Icon, link, color, primary }, index) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
              >
                <Link to={link} className={`feature-card feature-card--${color} ${primary ? 'feature-card--primary' : ''}`}>
                  <div className="feature-card-header">
                    <Icon className="feature-card-icon" />
                    <h4 className="feature-card-title">{title}</h4>
                    {primary && <span className="feature-badge">Featured</span>}
                  </div>
                  <p className="feature-card-description">{description}</p>
                  <div className="feature-card-footer">
                    {primary && (
                      <div className="social-proof-indicators">
                        <div className="indicator">
                          <Star className="indicator-icon" />
                          <span>4.8★ Rated</span>
                        </div>
                        <div className="indicator">
                          <Users className="indicator-icon" />
                          <span>10M+ Users</span>
                        </div>
                      </div>
                    )}
                    <div className="feature-card-arrow">→</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>        {/* Quick Actions */}
        <motion.section 
          className="quick-actions-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="quick-actions-card">
            <h3 className="quick-actions-title">Quick Actions</h3>
            <div className="quick-actions-grid">
              <Link to="/scanner" className="quick-action">
                <Scan className="quick-action-icon" />
                <span>Scan Product</span>
              </Link>
              <Link to="/assistant" className="quick-action">
                <MessageCircle className="quick-action-icon" />
                <span>Ask AI</span>
              </Link>
              <Link to="/social" className="quick-action">
                <Users className="quick-action-icon" />
                <span>Community</span>
              </Link>
              <Link to="/sustainability" className="quick-action">
                <Trophy className="quick-action-icon" />
                <span>Rewards</span>
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default HomePage

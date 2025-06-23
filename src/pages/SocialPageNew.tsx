import { motion } from 'framer-motion'
import { Users, MessageSquare, Share, Star, DollarSign, Clock, ThumbsUp, Eye, Zap, ShoppingCart, MapPin, Flame } from 'lucide-react'
import { useState, useEffect } from 'react'

const SocialPage = () => {
  const [newPost, setNewPost] = useState('')
  const [showNewActivity, setShowNewActivity] = useState(false)

  const [liveActivities, setLiveActivities] = useState([
    {
      id: 1,
      user: 'Sarah M.',
      avatar: '👩',
      action: 'just bought',
      product: 'Organic Bananas',
      time: 'now',
      location: 'Dallas, TX',
      rating: 5,
      savings: '$3.50',
      likes: 12,
      comments: 3,
      image: '🍌',
      isLive: true,
      category: 'Groceries'
    },
    {
      id: 2,
      user: 'Mike R.',
      avatar: '👨',
      action: 'found amazing deal on',
      product: 'Eco-Friendly Toothbrush Set',
      time: '2 min ago',
      location: 'Austin, TX',
      likes: 8,
      comments: 1,
      image: '🪥',
      savings: '$12.99',
      isHot: true,
      category: 'Health & Beauty'
    },
    {
      id: 3,
      user: 'Emily K.',
      avatar: '👩‍🦰',
      action: 'gave 5 stars to',
      product: 'Bamboo Water Bottle',
      time: '5 min ago',
      location: 'Houston, TX',
      rating: 5,
      likes: 15,
      comments: 5,
      image: '🍃',
      category: 'Eco-Friendly'
    },
    {
      id: 4,
      user: 'David L.',
      avatar: '👨‍💼',
      action: 'shared savings on',
      product: 'Organic Quinoa',
      time: '8 min ago',
      location: 'San Antonio, TX',
      savings: '$4.20',
      likes: 7,
      comments: 2,
      image: '🌾',
      category: 'Organic Food'
    },
    {
      id: 5,
      user: 'Jessica W.',
      avatar: '👩‍💻',
      action: 'discovered',
      product: 'Smart LED Bulbs',
      time: '12 min ago',
      location: 'Fort Worth, TX',
      savings: '$15.75',
      likes: 22,
      comments: 8,
      image: '💡',
      isHot: true,
      category: 'Smart Home'
    },
    {
      id: 6,
      user: 'Carlos M.',
      avatar: '👨‍🏫',
      action: 'recommended',
      product: 'Greek Yogurt',
      time: '15 min ago',
      location: 'El Paso, TX',
      rating: 4,
      likes: 5,
      comments: 1,
      image: '🥛',
      category: 'Dairy'
    },
    {
      id: 7,
      user: 'Amanda T.',
      avatar: '👩‍🎨',
      action: 'found deal on',
      product: 'Art Supplies Bundle',
      time: '18 min ago',
      location: 'Arlington, TX',
      savings: '$25.50',
      likes: 18,
      comments: 6,
      image: '🎨',
      category: 'Arts & Crafts'
    },
    {
      id: 8,
      user: 'Ryan P.',
      avatar: '👨‍🔧',
      action: 'reviewed',
      product: 'Tool Set',
      time: '22 min ago',
      location: 'Plano, TX',
      rating: 5,
      likes: 12,
      comments: 3,
      image: '🔧',
      category: 'Tools'
    }
  ])

  const communityStats = {
    activeNow: 1247,
    todaysSavings: '$25,489',
    liveDeals: 89,
    newReviews: 156
  }

  useEffect(() => {
    // Simulate live updates
    const interval = setInterval(() => {
      setShowNewActivity(true)
      setTimeout(() => setShowNewActivity(false), 3000)
    }, 8000)

    return () => clearInterval(interval)
  }, [])  const addLiveActivity = () => {
    if (!newPost.trim()) return
    
    const newActivity = {
      id: Date.now(),
      user: 'You',
      avatar: '😊',
      action: 'shared',
      product: newPost,
      time: 'now',
      location: 'Your Location',
      likes: 0,
      comments: 0,
      image: '✨',
      isLive: true,
      category: 'Community',
      savings: '$0.00'
    }
    
    setLiveActivities([newActivity, ...liveActivities])
    setNewPost('')
  }

  return (
    <div className="page social-page">
      <div className="container">
        {/* Header */}
        <motion.div
          className="social-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="page-title">
            <Users className="page-icon" />
            Community Live Updates
          </h2>
          <p className="page-description">
            See what the Walmart community is buying, sharing, and saving right now
          </p>
        </motion.div>

        {/* Live Stats */}
        <motion.section
          className="live-stats"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="live-stats-grid">
            <motion.div 
              className="live-stat-card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="stat-indicator live"></div>
              <Zap className="stat-icon" />
              <div className="stat-content">
                <span className="stat-value">{communityStats.activeNow}</span>
                <span className="stat-label">Active Now</span>
              </div>
            </motion.div>
            <motion.div 
              className="live-stat-card"
              whileHover={{ scale: 1.02 }}
            >
              <DollarSign className="stat-icon savings" />
              <div className="stat-content">
                <span className="stat-value">{communityStats.todaysSavings}</span>
                <span className="stat-label">Saved Today</span>
              </div>
            </motion.div>
            <motion.div 
              className="live-stat-card"
              whileHover={{ scale: 1.02 }}
            >
              <ShoppingCart className="stat-icon deals" />
              <div className="stat-content">
                <span className="stat-value">{communityStats.liveDeals}</span>
                <span className="stat-label">Live Deals</span>
              </div>
            </motion.div>
            <motion.div 
              className="live-stat-card"
              whileHover={{ scale: 1.02 }}
            >
              <Star className="stat-icon reviews" />
              <div className="stat-content">
                <span className="stat-value">{communityStats.newReviews}</span>
                <span className="stat-label">New Reviews</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* New Activity Alert */}
        {showNewActivity && (
          <motion.div
            className="live-activity-alert"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="alert-content">
              <Flame className="alert-icon" />
              <span>🔥 New activity! Someone just found an amazing deal</span>
            </div>
            <button onClick={() => setShowNewActivity(false)}>×</button>
          </motion.div>
        )}

        {/* Share Section */}
        <motion.div
          className="share-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="share-container">
            <input
              type="text"
              placeholder="Share your latest find or deal with the community..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="share-input"
              onKeyPress={(e) => e.key === 'Enter' && addLiveActivity()}
            />
            <motion.button
              className="share-button"
              onClick={addLiveActivity}
              disabled={!newPost.trim()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Share className="share-icon" />
              Share Live
            </motion.button>
          </div>
        </motion.div>

        {/* Live Activity Feed */}
        <motion.section
          className="live-activity-feed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="live-feed-header">
            <h3 className="feed-title">Live Community Updates</h3>
            <div className="live-indicator">
              <div className="pulse-dot"></div>
              <span>LIVE</span>
            </div>
          </div>
          
          <div className="activity-stream">
            {liveActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                className={`live-activity-card ${activity.isLive ? 'live' : ''} ${activity.isHot ? 'hot' : ''}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <div className="activity-main">
                  <div className="activity-user">
                    <span className="user-avatar">{activity.avatar}</span>
                    <div className="user-info">
                      <span className="user-name">{activity.user}</span>
                      <div className="user-location">
                        <MapPin className="location-icon" />
                        <span>{activity.location}</span>
                      </div>
                    </div>
                    {activity.isLive && <div className="live-badge">LIVE</div>}
                    {activity.isHot && <div className="hot-badge">🔥 HOT</div>}
                  </div>
                  
                  <div className="activity-content">
                    <div className="activity-text">
                      <span className="action-text">{activity.action} </span>
                      <strong className="product-name">{activity.product}</strong>
                      <span className="category-tag">{activity.category}</span>
                    </div>
                    
                    <div className="activity-details">
                      <div className="product-image">{activity.image}</div>
                      <div className="activity-meta">
                        {activity.rating && (
                          <div className="rating-display">
                            {Array.from({ length: 5 }, (_, i) => (
                              <Star
                                key={i}
                                className={`star ${i < activity.rating ? 'filled' : ''}`}
                              />
                            ))}
                          </div>
                        )}
                        {activity.savings && (
                          <div className="savings-display">
                            <DollarSign className="savings-icon" />
                            <span className="savings-text">Saved {activity.savings}</span>
                          </div>
                        )}
                        <div className="time-display">
                          <Clock className="time-icon" />
                          <span>{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="activity-actions">
                  <motion.button
                    className="action-btn like"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ThumbsUp className="action-icon" />
                    <span>{activity.likes}</span>
                  </motion.button>
                  <motion.button
                    className="action-btn comment"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <MessageSquare className="action-icon" />
                    <span>{activity.comments}</span>
                  </motion.button>
                  <motion.button
                    className="action-btn share"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Share className="action-icon" />
                  </motion.button>
                  <motion.button
                    className="action-btn view"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Eye className="action-icon" />
                    View
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default SocialPage

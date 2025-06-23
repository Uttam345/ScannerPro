import { motion } from 'framer-motion'
import { Users, Heart, MessageSquare, TrendingUp, Share } from 'lucide-react'

const SocialPage = () => {
  const activities = [
    {
      id: 1,
      user: 'Sarah M.',
      action: 'bought',
      product: 'Organic Bananas',
      time: '2 minutes ago',
      rating: 5
    },
    {
      id: 2,
      user: 'Mike R.',
      action: 'shared',
      product: 'Eco-Friendly Toothbrush',
      time: '15 minutes ago'
    },
    {
      id: 3,
      user: 'Emily K.',
      action: 'reviewed',
      product: 'Bamboo Water Bottle',
      time: '1 hour ago',
      rating: 4
    }
  ]

  const friends = [
    { name: 'Sarah M.', avatar: '👩', recent: 'Bought 3 items today' },
    { name: 'Mike R.', avatar: '👨', recent: 'Saved $25 this week' },
    { name: 'Emily K.', avatar: '👩‍🦰', recent: 'Found eco-friendly deals' }
  ]

  return (
    <div className="page social-page">
      <div className="container">
        <motion.div
          className="social-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="page-title">
            <Users className="page-icon" />
            Social Shopping Hub
          </h2>
          <p className="page-description">
            Connect with friends, discover trending products, and share your finds
          </p>
        </motion.div>

        <div className="social-content">
          <motion.section
            className="activity-feed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="section-title">Live Activity Feed</h3>
            <div className="activity-list">
              {activities.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-content">
                    <span className="activity-user">{activity.user}</span>
                    <span className="activity-action">{activity.action}</span>
                    <span className="activity-product">{activity.product}</span>
                    {activity.rating && (
                      <div className="activity-rating">
                        {'⭐'.repeat(activity.rating)}
                      </div>
                    )}
                  </div>
                  <span className="activity-time">{activity.time}</span>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="friends-section"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="section-title">Shopping Friends</h3>
            <div className="friends-list">
              {friends.map((friend) => (
                <div key={friend.name} className="friend-item">
                  <span className="friend-avatar">{friend.avatar}</span>
                  <div className="friend-info">
                    <span className="friend-name">{friend.name}</span>
                    <span className="friend-recent">{friend.recent}</span>
                  </div>
                  <button className="friend-action">
                    <MessageSquare className="action-icon" />
                  </button>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        <motion.section
          className="social-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="social-actions-grid">
            <button className="social-action-card">
              <Share className="social-action-icon" />
              <span>Share Your Find</span>
            </button>
            <button className="social-action-card">
              <Heart className="social-action-icon" />
              <span>Create Wishlist</span>
            </button>
            <button className="social-action-card">
              <TrendingUp className="social-action-icon" />
              <span>Trending Now</span>
            </button>
            <button className="social-action-card">
              <Users className="social-action-icon" />
              <span>Find Friends</span>
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default SocialPage

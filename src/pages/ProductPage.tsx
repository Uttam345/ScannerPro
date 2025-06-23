import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Star, 
  Heart, 
  Share, 
  ShoppingCart, 
  TrendingUp,
  Users,
  Leaf,
  MessageSquare
} from 'lucide-react'

const ProductPage = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState<'overview' | 'social' | 'sustainability' | 'reviews'>('overview')

  // Mock product data
  const product = {
    id: id || '1',
    name: 'Organic Bananas',
    brand: 'Great Value',
    price: 1.98,
    originalPrice: 2.48,
    rating: 4.6,
    reviews: 1247,
    image: '/api/placeholder/400/400',
    inStock: true,
    description: 'Fresh, organic bananas perfect for snacking, baking, or smoothies.',
    ecoScore: 'A+',
    carbonFootprint: '0.5kg CO₂',
    socialScore: 4.7
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'social', label: 'Social Proof', icon: Users },
    { id: 'sustainability', label: 'Eco Impact', icon: Leaf },
    { id: 'reviews', label: 'Reviews', icon: MessageSquare }
  ]

  const priceComparison = [
    { retailer: 'Walmart', price: 1.98, current: true },
    { retailer: 'Target', price: 2.15, current: false },
    { retailer: 'Kroger', price: 2.28, current: false },
    { retailer: 'Whole Foods', price: 2.99, current: false }
  ]

  return (
    <div className="page product-page">
      <div className="container">
        <motion.div
          className="product-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="product-main-info">
            <div className="product-image-container">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-image"
              />
              <div className="product-badges">
                <span className="badge badge-eco">Eco-Friendly</span>
                <span className="badge badge-organic">Organic</span>
              </div>
            </div>

            <div className="product-details">
              <h1 className="product-name">{product.name}</h1>
              <p className="product-brand">by {product.brand}</p>
              
              <div className="product-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`star ${i < Math.floor(product.rating) ? 'star--filled' : ''}`}
                    />
                  ))}
                </div>
                <span className="rating-text">{product.rating} ({product.reviews} reviews)</span>
              </div>

              <div className="product-pricing">
                <span className="current-price">${product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="original-price">${product.originalPrice}</span>
                )}
                <span className="savings">Save ${(product.originalPrice - product.price).toFixed(2)}</span>
              </div>

              <div className="product-actions">
                <button className="btn btn-primary btn-large">
                  <ShoppingCart className="btn-icon" />
                  Add to Cart
                </button>
                <button className="btn btn-secondary">
                  <Heart className="btn-icon" />
                  Save
                </button>
                <button className="btn btn-secondary">
                  <Share className="btn-icon" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Tabs */}
        <motion.section 
          className="product-tabs-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="product-tabs">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                className={`tab-button ${activeTab === id ? 'tab-button--active' : ''}`}
                onClick={() => setActiveTab(id as any)}
              >
                <Icon className="tab-icon" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <div className="tab-content">
            {activeTab === 'overview' && (
              <motion.div 
                className="tab-panel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="overview-content">
                  <div className="product-description">
                    <h3>Product Description</h3>
                    <p>{product.description}</p>
                  </div>

                  <div className="price-comparison">
                    <h3>Price Comparison</h3>
                    <div className="comparison-list">
                      {priceComparison.map(({ retailer, price, current }) => (
                        <div key={retailer} className={`comparison-item ${current ? 'comparison-item--current' : ''}`}>
                          <span className="retailer">{retailer}</span>
                          <span className="price">${price}</span>
                          {current && <span className="current-badge">Current Store</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'social' && (
              <motion.div 
                className="tab-panel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="social-content">
                  <div className="social-stats">
                    <div className="social-stat">
                      <Users className="social-stat-icon" />
                      <div>
                        <span className="social-stat-value">847</span>
                        <span className="social-stat-label">Friends bought this</span>
                      </div>
                    </div>
                    <div className="social-stat">
                      <TrendingUp className="social-stat-icon" />
                      <div>
                        <span className="social-stat-value">4.7/5</span>
                        <span className="social-stat-label">Community Rating</span>
                      </div>
                    </div>
                  </div>

                  <div className="social-activity">
                    <h3>Recent Activity</h3>
                    <div className="activity-list">
                      <div className="activity-item">
                        <span className="activity-user">Sarah M.</span>
                        <span className="activity-action">bought this yesterday</span>
                        <span className="activity-rating">⭐⭐⭐⭐⭐</span>
                      </div>
                      <div className="activity-item">
                        <span className="activity-user">Mike R.</span>
                        <span className="activity-action">added to wishlist</span>
                        <span className="activity-time">2 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'sustainability' && (
              <motion.div 
                className="tab-panel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="sustainability-content">
                  <div className="eco-score">
                    <div className="eco-score-main">
                      <Leaf className="eco-score-icon" />
                      <div>
                        <span className="eco-score-grade">{product.ecoScore}</span>
                        <span className="eco-score-label">Eco Score</span>
                      </div>
                    </div>
                    <p className="eco-score-description">
                      This product has minimal environmental impact and supports sustainable farming practices.
                    </p>
                  </div>

                  <div className="environmental-impact">
                    <h3>Environmental Impact</h3>
                    <div className="impact-metrics">
                      <div className="impact-metric">
                        <span className="metric-label">Carbon Footprint</span>
                        <span className="metric-value">{product.carbonFootprint}</span>
                      </div>
                      <div className="impact-metric">
                        <span className="metric-label">Packaging</span>
                        <span className="metric-value">Minimal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'reviews' && (
              <motion.div 
                className="tab-panel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="reviews-content">
                  <div className="reviews-summary">
                    <h3>Customer Reviews</h3>
                    <div className="reviews-overview">
                      <div className="rating-breakdown">
                        <span className="rating-score">{product.rating}</span>
                        <div className="rating-stars">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`star ${i < Math.floor(product.rating) ? 'star--filled' : ''}`}
                            />
                          ))}
                        </div>
                        <span className="rating-count">({product.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="reviews-list">
                    <div className="review-item">
                      <div className="review-header">
                        <span className="reviewer-name">Jennifer K.</span>
                        <div className="review-stars">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="star star--filled" />
                          ))}
                        </div>
                      </div>
                      <p className="review-text">
                        "These bananas are always fresh and perfect for my morning smoothies. Great quality!"
                      </p>
                      <span className="review-date">3 days ago</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default ProductPage

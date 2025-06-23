import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Camera, 
  QrCode, 
  Mic, 
  Image as ImageIcon, 
  Zap,
  Users,
  Star,
  ThumbsUp,
  MessageSquare,
  Shield
} from 'lucide-react'

const ScannerPage = () => {
  const [activeMode, setActiveMode] = useState<'ar' | 'barcode' | 'image' | 'voice'>('ar')
  const [isScanning, setIsScanning] = useState(false)
  const [showSampleResult, setShowSampleResult] = useState(true) // Show sample by default

  const scanModes = [
    { 
      id: 'ar', 
      label: 'Social Proof Scan', 
      icon: Camera, 
      description: 'Get instant community reviews & ratings',
      socialFeature: 'Real-time social validation'
    },
    { 
      id: 'barcode', 
      label: 'Community Barcode', 
      icon: QrCode, 
      description: 'Scan for verified community feedback',
      socialFeature: 'Trusted community data'
    },
    { 
      id: 'image', 
      label: 'Social Image Search', 
      icon: ImageIcon, 
      description: 'Find products with community insights',
      socialFeature: 'Visual social proof'
    },
    { 
      id: 'voice', 
      label: 'Community Voice', 
      icon: Mic, 
      description: 'Ask about community favorites',
      socialFeature: 'Voice-activated social search'
    }
  ]

  const socialStats = [
    { label: 'Community Reviews', value: '2.5M+', icon: MessageSquare, color: 'blue' },
    { label: 'Verified Ratings', value: '4.8★', icon: Star, color: 'yellow' },
    { label: 'Active Members', value: '15.3K', icon: Users, color: 'green' },
    { label: 'Trust Score', value: '96%', icon: Shield, color: 'purple' }
  ]

  const sampleResult = {
    productName: "Great Value 2% Reduced Fat Milk, 128 fl oz",
    price: "$3.68",
    rating: 4.8,
    reviews: 1247,
    socialProof: {
      trending: true,
      friendsBought: 12,
      communityChoice: true,
      verifiedPurchases: 89
    },
    recommendations: [
      "Perfect for family breakfast",
      "Great value for money",
      "Fresh and long-lasting"
    ]
  }
  const handleStartScan = () => {
    setIsScanning(true)
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false)
      setShowSampleResult(true)
    }, 3000)
  }

  return (
    <div className="page scanner-page">
      <div className="container">
        <motion.div
          className="scanner-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >          <h2 className="page-title">Social Proof Scanner</h2>
          <p className="page-description">
            Scan any product and instantly see what the Walmart community thinks. 
            Get real reviews, ratings, and trusted insights from millions of verified shoppers.
          </p>
        </motion.div>

        {/* Scan Modes */}
        <motion.section 
          className="scan-modes-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >          <h3 className="section-title">Select Scan Mode</h3>
          <div className="scan-modes-grid">
            {scanModes.map(({ id, label, icon: Icon, description, socialFeature }) => (
              <button
                key={id}
                className={`scan-mode ${activeMode === id ? 'scan-mode--active' : ''}`}
                onClick={() => setActiveMode(id as any)}
              >
                <Icon className="scan-mode-icon" />
                <div className="scan-mode-content">
                  <span className="scan-mode-label">{label}</span>
                  <span className="scan-mode-description">{description}</span>
                  <div className="social-feature-badge">
                    <Users className="badge-icon" />
                    <span>{socialFeature}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </motion.section>

        {/* Scanner Interface */}
        <motion.section 
          className="scanner-interface"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="scanner-container">
            <div className="scanner-viewport">
              {isScanning ? (
                <div className="scanning-overlay">
                  <div className="scanning-animation">
                    <div className="scan-line"></div>
                  </div>
                  <p className="scanning-text">Scanning product...</p>
                </div>
              ) : (
                <div className="scanner-placeholder">
                  <Camera className="scanner-placeholder-icon" />
                  <p className="scanner-placeholder-text">
                    {activeMode === 'ar' && 'Point camera at product'}
                    {activeMode === 'barcode' && 'Align barcode in frame'}
                    {activeMode === 'image' && 'Take or upload photo'}
                    {activeMode === 'voice' && 'Ready to listen'}
                  </p>
                </div>
              )}
            </div>

            <div className="scanner-controls">
              <button 
                className="scan-button"
                onClick={handleStartScan}
                disabled={isScanning}
              >
                <Zap className="scan-button-icon" />
                {isScanning ? 'Scanning...' : 'Start Smart Scan'}
              </button>
            </div>
          </div>        </motion.section>

        {/* Sample Scan Result */}
        {showSampleResult && (
          <motion.section 
            className="scan-result-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="scan-result-card">
              <div className="scan-result-header">
                <h3 className="scan-result-title">Scan Result</h3>
                <div className="scan-result-badge">
                  <Users className="badge-icon" />
                  <span>Community Verified</span>
                </div>
              </div>
              
              <div className="product-info">
                <h4 className="product-name">{sampleResult.productName}</h4>
                <div className="product-details">
                  <span className="product-price">{sampleResult.price}</span>
                  <div className="product-rating">
                    <Star className="rating-icon" fill="currentColor" />
                    <span className="rating-value">{sampleResult.rating}</span>
                    <span className="rating-count">({sampleResult.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              <div className="social-proof-info">
                <h5 className="social-proof-title">Community Insights</h5>
                <div className="social-proof-stats">
                  <div className="social-stat">
                    <ThumbsUp className="social-stat-icon" />
                    <span>{sampleResult.socialProof.verifiedPurchases}% verified purchases</span>
                  </div>
                  <div className="social-stat">
                    <Users className="social-stat-icon" />
                    <span>{sampleResult.socialProof.friendsBought} friends bought this</span>
                  </div>
                  {sampleResult.socialProof.trending && (
                    <div className="social-stat trending">
                      <Zap className="social-stat-icon" />
                      <span>Trending in community</span>
                    </div>
                  )}
                  {sampleResult.socialProof.communityChoice && (
                    <div className="social-stat community-choice">
                      <Shield className="social-stat-icon" />
                      <span>Community Choice Award</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="recommendations">
                <h5 className="recommendations-title">What the Community Says</h5>
                <div className="recommendation-list">
                  {sampleResult.recommendations.map((recommendation, index) => (
                    <div key={index} className="recommendation-item">
                      <MessageSquare className="recommendation-icon" />
                      <span>"{recommendation}"</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="scan-result-actions">
                <button className="btn btn-primary">
                  Add to Cart
                </button>
                <button className="btn btn-secondary">
                  View Full Details
                </button>
                <button 
                  className="btn btn-outline"
                  onClick={() => setShowSampleResult(false)}
                >
                  Scan Another
                </button>
              </div>
            </div>
          </motion.section>
        )}

        {/* Features Grid */}
        <motion.section 
          className="scanner-features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >          <h3 className="section-title">Community-Powered Features</h3>
          <div className="features-grid">
            <div className="feature-box">
              <Star className="feature-box-icon" />
              <h4 className="feature-box-title">Instant Ratings</h4>
              <p className="feature-box-description">
                See real-time community ratings and reviews
              </p>
            </div>
            <div className="feature-box">
              <ThumbsUp className="feature-box-icon" />
              <h4 className="feature-box-title">Social Validation</h4>
              <p className="feature-box-description">
                See what friends and community think
              </p>
            </div>
            <div className="feature-box">
              <Shield className="feature-box-icon" />
              <h4 className="feature-box-title">Verified Reviews</h4>
              <p className="feature-box-description">
                Trusted insights from verified purchases
              </p>
            </div>
          </div>
        </motion.section>{/* Social Stats */}
        <motion.section 
          className="social-stats-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="stats-card">
            <h3 className="stats-title">Community Impact</h3>
            <div className="stats-grid">
              {socialStats.map(({ label, value, icon: Icon, color }) => (
                <div key={label} className={`stat-item stat-item--${color}`}>
                  <Icon className="stat-item-icon" />
                  <div className="stat-item-content">
                    <span className="stat-item-value">{value}</span>
                    <span className="stat-item-label">{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default ScannerPage

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Camera, 
  Zap,
  Users,
  Star,
  ThumbsUp,
  MessageSquare,
  Shield
} from 'lucide-react'

const ScannerPage = () => {
  const [isScanning, setIsScanning] = useState(false)

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
    setTimeout(() => {
      setIsScanning(false)
    }, 2000)
  }

  return (
    <div className="page scanner-page">
      <div className="container">
        <motion.div
          className="scanner-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="page-title">Social Proof Scanner</h2>
          <p className="page-description">
            Scan any product and instantly see what the Walmart community thinks. 
            Get real reviews, ratings, and trusted insights from millions of verified shoppers.
          </p>
        </motion.div>

        {/* Quick Scan Button */}
        <motion.section 
          className="quick-scan-section"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="quick-scan-container">
            <button 
              className="quick-scan-button"
              onClick={handleStartScan}
              disabled={isScanning}
            >
              <Camera className="scan-icon" />
              <span>{isScanning ? 'Scanning...' : 'Scan Product'}</span>
              {isScanning && <div className="scan-animation"></div>}
            </button>
            <p className="scan-hint">Tap to scan any product and see community insights</p>
          </div>
        </motion.section>

        {/* Sample Scan Result - Always Visible */}
        <motion.section 
          className="scan-result-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="scan-result-card">
            <div className="scan-result-header">
              <h3 className="scan-result-title">Sample Scan Result</h3>
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
                onClick={handleStartScan}
                disabled={isScanning}
              >
                {isScanning ? 'Scanning...' : 'Scan Another Product'}
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default ScannerPage

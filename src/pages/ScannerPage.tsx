import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Camera, 
  Zap,
  Users,
  Star,
  ThumbsUp,
  MessageSquare,
  Shield,
  CheckCircle,
  TrendingUp
} from 'lucide-react'

const ScannerPage = () => {
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const [showSuccess, setShowSuccess] = useState(false)
  const [currentSample, setCurrentSample] = useState(0)

  const sampleResults = [
    {
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
    },
    {
      productName: "Honey Nut Cheerios Cereal, 17 oz",
      price: "$4.98",
      rating: 4.6,
      reviews: 2156,
      socialProof: {
        trending: false,
        friendsBought: 8,
        communityChoice: false,
        verifiedPurchases: 94
      },
      recommendations: [
        "Kids love the taste",
        "Heart-healthy option",
        "Great for busy mornings"
      ]
    },
    {
      productName: "Organic Bananas, 2 lbs",
      price: "$1.98",
      rating: 4.9,
      reviews: 892,
      socialProof: {
        trending: true,
        friendsBought: 15,
        communityChoice: true,
        verifiedPurchases: 96
      },
      recommendations: [
        "Always fresh and ripe",
        "Perfect for smoothies",
        "Great source of potassium"
      ]
    }
  ]

  const currentResult = sampleResults[currentSample]

  // Haptic feedback function for mobile devices
  const triggerHapticFeedback = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate([50, 30, 50])
    }
  }

  const handleStartScan = () => {
    setIsScanning(true)
    setShowSuccess(false)
    setScanProgress(0)
    triggerHapticFeedback()

    // Simulate scanning progress
    const progressInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => {
            setIsScanning(false)
            setShowSuccess(true)
            triggerHapticFeedback()
            // Switch to next sample
            setCurrentSample((prev) => (prev + 1) % sampleResults.length)
            
            // Hide success after 2 seconds
            setTimeout(() => {
              setShowSuccess(false)
            }, 2000)
          }, 500)
          return 100
        }
        return prev + 8
      })
    }, 100)
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
          <h2 className="page-title">
            <Camera className="page-icon" />
            Social Proof Scanner
          </h2>
          <p className="page-description">
            Scan any product and instantly see what the Walmart community thinks. 
            Get real reviews, ratings, and trusted insights from millions of verified shoppers.
          </p>
        </motion.div>

        {/* Enhanced Scanning Interface */}
        <motion.section 
          className="scanner-interface fade-in"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="scanner-viewport-container">
            <div className={`scanner-viewport ${isScanning ? 'scanning' : ''}`}>
              {/* Scanning Guidelines */}
              <div className="scanner-guides">
                <span className="guide-text">
                  {isScanning ? 'Scanning...' : 'Place product here'}
                </span>
              </div>

              {/* Scanning Line Animation */}
              {isScanning && <div className="scan-line"></div>}

              {/* Pulsing Light Effect */}
              {isScanning && <div className="pulse-light"></div>}

              {/* Success State */}
              <div className={`scan-success ${showSuccess ? 'visible' : ''}`}>
                <CheckCircle className="success-icon" />
                <span className="success-text">Product Scanned!</span>
              </div>
            </div>

            {/* Enhanced Scan Button */}
            <button 
              className={`enhanced-scan-button ${isScanning ? 'scanning' : ''}`}
              onClick={handleStartScan}
              disabled={isScanning}
            >
              <Camera className="scan-icon" />
              <span>{isScanning ? 'Scanning Product...' : 'Start Smart Scan'}</span>
            </button>

            {/* Progress Indicator */}
            <div className={`scan-progress ${isScanning ? 'visible' : ''}`}>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${scanProgress}%` }}
                ></div>
              </div>
              <div className="progress-text">
                {isScanning ? `Analyzing... ${Math.round(scanProgress)}%` : 'Ready to scan'}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Enhanced Scan Result */}
        <motion.section 
          className="scan-result-section fade-in"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="scan-result-card">
            <div className="scan-result-header">
              <h3 className="scan-result-title">Community Insights</h3>
              <div className="scan-result-badge">
                <Users className="badge-icon" />
                <span>Community Verified</span>
              </div>
            </div>
            
            <div className="product-info">
              <h4 className="product-name">{currentResult.productName}</h4>
              <div className="product-details">
                <span className="product-price">{currentResult.price}</span>
                <div className="product-rating">
                  <Star className="rating-icon" fill="currentColor" />
                  <span className="rating-value">{currentResult.rating}</span>
                  <span className="rating-count">({currentResult.reviews} reviews)</span>
                </div>
              </div>
            </div>

            <div className="social-proof-info">
              <h5 className="social-proof-title">Real-Time Community Data</h5>
              <div className="social-proof-stats">
                <div className="social-stat">
                  <ThumbsUp className="social-stat-icon" />
                  <span>{currentResult.socialProof.verifiedPurchases}% verified purchases</span>
                </div>
                <div className="social-stat">
                  <Users className="social-stat-icon" />
                  <span>{currentResult.socialProof.friendsBought} friends bought this</span>
                </div>
                {currentResult.socialProof.trending && (
                  <div className="social-stat trending">
                    <Zap className="social-stat-icon" />
                    <span>Trending in community</span>
                  </div>
                )}
                {currentResult.socialProof.communityChoice && (
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
                {currentResult.recommendations.map((recommendation: string, index: number) => (
                  <div key={index} className="recommendation-item">
                    <MessageSquare className="recommendation-icon" />
                    <span>"{recommendation}"</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="scan-result-actions">
              <button className="btn btn-primary">
                <TrendingUp className="btn-icon" />
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
                <Camera className="btn-icon" />
                {isScanning ? 'Scanning...' : 'Scan Another Product'}
              </button>
            </div>
          </div>
        </motion.section>

        {/* Community Stats */}
        <motion.section 
          className="community-stats-section fade-in"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="section-title">Community Impact</h3>
          <div className="grid grid-4">
            <div className="stat-card slide-in-left">
              <MessageSquare className="stat-card-icon" />
              <div className="stat-card-content">
                <span className="stat-card-value">2.5M+</span>
                <span className="stat-card-label">Community Reviews</span>
              </div>
            </div>
            <div className="stat-card slide-in-left" style={{ animationDelay: '0.1s' }}>
              <Star className="stat-card-icon" />
              <div className="stat-card-content">
                <span className="stat-card-value">4.8★</span>
                <span className="stat-card-label">Average Rating</span>
              </div>
            </div>
            <div className="stat-card slide-in-right" style={{ animationDelay: '0.2s' }}>
              <Users className="stat-card-icon" />
              <div className="stat-card-content">
                <span className="stat-card-value">15.3K</span>
                <span className="stat-card-label">Active Today</span>
              </div>
            </div>
            <div className="stat-card slide-in-right" style={{ animationDelay: '0.3s' }}>
              <Shield className="stat-card-icon" />
              <div className="stat-card-content">
                <span className="stat-card-value">96%</span>
                <span className="stat-card-label">Trust Score</span>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default ScannerPage
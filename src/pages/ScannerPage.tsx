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
  const [scanProgress, setScanProgress] = useState(0)
  const [showResults, setShowResults] = useState(true)
  const [scanPhase, setScanPhase] = useState<'idle' | 'detecting' | 'analyzing' | 'complete'>('idle')
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
    }
  ]

  const currentResult = sampleResults[currentSample]
  const handleStartScan = () => {
    setIsScanning(true)
    setShowResults(false)
    setScanProgress(0)
    setScanPhase('detecting')
    
    // Phase 1: Product Detection (0-30%)
    const detectionInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 30) {
          clearInterval(detectionInterval)
          setScanPhase('analyzing')
          
          // Phase 2: Social Analysis (30-80%)
          const analysisInterval = setInterval(() => {
            setScanProgress(prevProgress => {
              if (prevProgress >= 80) {
                clearInterval(analysisInterval)
                setScanPhase('complete')
                
                // Phase 3: Finalizing (80-100%)
                const finalizeInterval = setInterval(() => {
                  setScanProgress(finalProgress => {
                    if (finalProgress >= 100) {
                      clearInterval(finalizeInterval)
                      
                      // Complete scan and show results
                      setTimeout(() => {
                        setIsScanning(false)
                        setShowResults(true)
                        setScanPhase('idle')
                        setScanProgress(0)
                        // Switch to next sample
                        setCurrentSample((prev) => (prev + 1) % sampleResults.length)
                      }, 500)
                      return 100
                    }
                    return finalProgress + 4
                  })
                }, 50)
                return 80
              }
              return prevProgress + 2
            })
          }, 80)
          return 30
        }
        return prev + 3
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
          <h2 className="page-title">Social Proof Scanner</h2>
          <p className="page-description">
            Scan any product and instantly see what the Walmart community thinks. 
            Get real reviews, ratings, and trusted insights from millions of verified shoppers.
          </p>
        </motion.div>        {/* Enhanced Scan Interface */}
        <motion.section 
          className="quick-scan-section"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="quick-scan-container">
            <div className={`scan-interface ${isScanning ? 'scanning' : ''}`}>
              <button 
                className="quick-scan-button"
                onClick={handleStartScan}
                disabled={isScanning}
              >
                <Camera className="scan-icon" />
                <span>
                  {scanPhase === 'detecting' && 'Detecting Product...'}
                  {scanPhase === 'analyzing' && 'Analyzing Social Data...'}
                  {scanPhase === 'complete' && 'Processing Results...'}
                  {scanPhase === 'idle' && 'Scan Product'}
                </span>
                {isScanning && (
                  <>
                    <div className="scan-animation"></div>
                    <div className="scan-pulse"></div>
                  </>
                )}
              </button>
              
              {isScanning && (
                <div className="scan-progress-container">
                  <div className="scan-progress-bar">
                    <motion.div 
                      className="scan-progress-fill"
                      style={{ width: `${scanProgress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="scan-progress-text">
                    {scanProgress}% - {scanPhase === 'detecting' && 'Scanning barcode...'}
                    {scanPhase === 'analyzing' && 'Gathering community insights...'}
                    {scanPhase === 'complete' && 'Almost ready...'}
                  </div>
                </div>
              )}
            </div>
            <p className="scan-hint">
              {isScanning 
                ? 'Hold steady while we gather community insights...' 
                : 'Tap to scan any product and see community insights'
              }
            </p>
          </div>
        </motion.section>        {/* Animated Scan Results */}
        {showResults && (
          <motion.section 
            className="scan-result-section"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <div className="scan-result-card">
              <motion.div 
                className="scan-result-header"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h3 className="scan-result-title">Scan Results</h3>
                <div className="scan-result-badge">
                  <Users className="badge-icon" />
                  <span>Community Verified</span>
                </div>
              </motion.div>

              <motion.div 
                className="product-info"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <h4 className="product-name">{currentResult.productName}</h4>
                <div className="product-details">
                  <span className="product-price">{currentResult.price}</span>
                  <div className="product-rating">
                    <Star className="rating-icon" fill="currentColor" />
                    <span className="rating-value">{currentResult.rating}</span>
                    <span className="rating-count">({currentResult.reviews} reviews)</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="social-proof-info"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <h5 className="social-proof-title">
                  <Zap className="social-title-icon" />
                  Live Community Insights
                </h5>
                <div className="social-proof-stats">
                  {[
                    {
                      icon: ThumbsUp,
                      text: `${currentResult.socialProof.verifiedPurchases}% verified purchases`,
                      delay: 0.9
                    },
                    {
                      icon: Users,
                      text: `${currentResult.socialProof.friendsBought} friends bought this`,
                      delay: 1.0
                    },
                    ...(currentResult.socialProof.trending ? [{
                      icon: Zap,
                      text: "Trending in community",
                      delay: 1.1,
                      className: "trending"
                    }] : []),
                    ...(currentResult.socialProof.communityChoice ? [{
                      icon: Shield,
                      text: "Community Choice Award",
                      delay: 1.2,
                      className: "community-choice"
                    }] : [])
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className={`social-stat ${stat.className || ''}`}
                      initial={{ opacity: 0, x: -20, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ 
                        delay: stat.delay, 
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100
                      }}
                    >
                      <stat.icon className="social-stat-icon" />
                      <span>{stat.text}</span>
                      <div className="stat-pulse"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="recommendations"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                <h5 className="recommendations-title">What the Community Says</h5>
                <div className="recommendation-list">
                  {currentResult.recommendations.map((recommendation: string, index: number) => (
                    <motion.div 
                      key={index} 
                      className="recommendation-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 + (index * 0.1), duration: 0.5 }}
                    >
                      <MessageSquare className="recommendation-icon" />
                      <span>"{recommendation}"</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="scan-result-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, duration: 0.6 }}
              >
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
              </motion.div>
            </div>
          </motion.section>
        )}
      </div>
    </div>
  )
}

export default ScannerPage

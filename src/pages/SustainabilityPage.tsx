import { motion } from 'framer-motion'
import { Leaf, Recycle, Globe, TrendingUp, Award } from 'lucide-react'

const SustainabilityPage = () => {
  const impactStats = [
    { label: 'CO₂ Saved This Month', value: '12.4 kg', icon: Globe },
    { label: 'Recyclable Purchases', value: '89%', icon: Recycle },
    { label: 'Eco Products Bought', value: '23', icon: Leaf },
    { label: 'Green Score', value: 'A+', icon: Award }
  ]

  const ecoProducts = [
    {
      name: 'Bamboo Toothbrush',
      ecoScore: 'A+',
      carbonSaved: '2.1 kg',
      price: '$3.99'
    },
    {
      name: 'Reusable Water Bottle',
      ecoScore: 'A',
      carbonSaved: '8.5 kg',
      price: '$12.99'
    },
    {
      name: 'Organic Cotton Bag',
      ecoScore: 'A+',
      carbonSaved: '3.2 kg',
      price: '$7.49'
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
            Sustainability Hub
          </h2>
          <p className="page-description">
            Track your environmental impact and discover eco-friendly alternatives
          </p>
        </motion.div>

        <motion.section
          className="impact-dashboard"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="section-title">Your Environmental Impact</h3>
          <div className="impact-grid">
            {impactStats.map(({ label, value, icon: Icon }, index) => (
              <motion.div
                key={label}
                className="impact-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                <Icon className="impact-icon" />
                <div className="impact-content">
                  <span className="impact-value">{value}</span>
                  <span className="impact-label">{label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="eco-recommendations"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="section-title">Eco-Friendly Recommendations</h3>
          <div className="eco-products-grid">
            {ecoProducts.map((product, index) => (
              <motion.div
                key={product.name}
                className="eco-product-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              >
                <div className="eco-product-header">
                  <span className={`eco-score eco-score--${product.ecoScore.toLowerCase()}`}>
                    {product.ecoScore}
                  </span>
                  <Leaf className="eco-product-icon" />
                </div>
                <h4 className="eco-product-name">{product.name}</h4>
                <div className="eco-product-stats">
                  <span className="carbon-saved">Saves {product.carbonSaved} CO₂</span>
                  <span className="eco-product-price">{product.price}</span>
                </div>
                <button className="btn btn-eco">Learn More</button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="sustainability-tips"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="tips-container">
            <h3 className="section-title">Sustainability Tips</h3>
            <div className="tips-grid">
              <div className="tip-card">
                <Recycle className="tip-icon" />
                <h4>Choose Recyclable</h4>
                <p>Look for products with minimal, recyclable packaging</p>
              </div>
              <div className="tip-card">
                <Globe className="tip-icon" />
                <h4>Buy Local</h4>
                <p>Support local producers to reduce transportation emissions</p>
              </div>
              <div className="tip-card">
                <TrendingUp className="tip-icon" />
                <h4>Quality Over Quantity</h4>
                <p>Invest in durable products that last longer</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default SustainabilityPage

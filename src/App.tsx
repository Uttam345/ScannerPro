import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import ScannerPage from './pages/ScannerPage'
import ProductPage from './pages/ProductPage'
import AIAssistantPage from './pages/AIAssistantPage'
import SocialPage from './pages/SocialPage'
import SustainabilityPage from './pages/SustainabilityPage'
import GamePage from './pages/GamePage'
import './styles/App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navigation />
        <motion.main 
          className="main-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/scanner" element={<ScannerPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/assistant" element={<AIAssistantPage />} />
            <Route path="/social" element={<SocialPage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/achievements" element={<GamePage />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  )
}

export default App

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mic, 
  Send, 
  Bot, 
  User, 
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Heart,
  Star,
  Coffee,
  Home,
  Baby,
  Shirt,
  Book
} from 'lucide-react'

interface Message {
  id: number
  type: 'user' | 'assistant'
  text: string
  timestamp: Date
  suggestions?: string[]
  productRecommendations?: {
    name: string
    price: string
    rating: number
    image: string
    trending: boolean
  }[]
}

const AIAssistantPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'assistant',
      text: "Welcome to your AI Shopping Assistant! 🛍️ I'm powered by Walmart's community intelligence. Ask me anything about products, compare prices, or get personalized recommendations!",
      timestamp: new Date(),
      suggestions: ['Show trending products', 'Compare prices', 'Find deals', 'Get recommendations']
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isListening, setIsListening] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const categories = [
    { id: 'all', name: 'All Categories', icon: Sparkles },
    { id: 'food', name: 'Food & Groceries', icon: Coffee },
    { id: 'home', name: 'Home & Garden', icon: Home },
    { id: 'baby', name: 'Baby & Kids', icon: Baby },
    { id: 'clothing', name: 'Clothing', icon: Shirt },
    { id: 'books', name: 'Books & Media', icon: Book }
  ]

  const quickActions = [
    { text: 'Show me trending products', icon: TrendingUp, color: 'blue' },
    { text: 'Find deals under $20', icon: ShoppingCart, color: 'green' },
    { text: 'Compare similar products', icon: Star, color: 'yellow' },
    { text: 'Show my favorites', icon: Heart, color: 'red' }
  ]

  const aiResponses = [
    "I found some great options based on community reviews! Here are the top-rated products:",
    "Based on Walmart community data, here are the best deals right now:",
    "The community loves these products! Here's what shoppers are saying:",
    "I've analyzed thousands of reviews to find these recommendations for you:",
    "Great choice! Let me show you what similar shoppers have purchased:"
  ]

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue
    if (!messageText.trim()) return

    const newMessage: Message = {
      id: Date.now(),
      type: 'user',
      text: messageText,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response with typing delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        type: 'assistant',
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date(),
        productRecommendations: [
          {
            name: "Great Value Organic Milk",
            price: "$3.98",
            rating: 4.8,
            image: "🥛",
            trending: true
          },
          {
            name: "Honey Nut Cheerios",
            price: "$4.98",
            rating: 4.6,
            image: "🥣",
            trending: false
          }
        ]
      }
      setIsTyping(false)
      setMessages(prev => [...prev, aiResponse])
    }, 2000)
  }

  const toggleListening = () => {
    setIsListening(!isListening)
    if (!isListening) {
      // Simulate voice recognition
      setTimeout(() => {
        setInputValue("Show me the best deals on groceries")
        setIsListening(false)
      }, 3000)
    }
  }
  return (
    <div className="page ai-assistant-page">
      <div className="container">
        {/* Header */}
        <motion.div
          className="assistant-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="page-title">
            <Bot className="title-icon" />
            AI Shopping Assistant
          </h2>
          <p className="page-description">
            Get instant help from our AI assistant powered by millions of community reviews and insights.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div 
          className="ai-categories"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              className={`category-chip ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <category.icon size={16} />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          className="quick-actions-ai"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3>Quick Actions</h3>
          <div className="quick-actions-grid-ai">
            {quickActions.map((action, index) => (
              <motion.button
                key={index}
                className={`quick-action-ai ${action.color}`}
                onClick={() => handleSendMessage(action.text)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <action.icon size={20} />
                {action.text}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Chat Interface */}
        <motion.div 
          className="chat-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="chat-messages">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`message ${message.type}`}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="message-avatar">
                    {message.type === 'assistant' ? (
                      <Bot className="avatar-icon" />
                    ) : (
                      <User className="avatar-icon" />
                    )}
                  </div>
                  <div className="message-content">
                    <div className="message-text">{message.text}</div>
                    
                    {message.suggestions && (
                      <div className="message-suggestions">
                        {message.suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            className="suggestion-chip"
                            onClick={() => handleSendMessage(suggestion)}
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}

                    {message.productRecommendations && (
                      <div className="product-recommendations">
                        {message.productRecommendations.map((product, index) => (
                          <motion.div
                            key={index}
                            className="product-card-mini"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="product-image">{product.image}</div>
                            <div className="product-details-mini">
                              <h4>{product.name}</h4>
                              <div className="product-meta">
                                <span className="price">{product.price}</span>
                                <div className="rating">
                                  <Star size={14} fill="currentColor" />
                                  {product.rating}
                                </div>
                                {product.trending && (
                                  <span className="trending-badge">🔥 Trending</span>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div
                className="typing-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="message-avatar">
                  <Bot className="avatar-icon" />
                </div>
                <div className="typing-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="chat-input-container">
            <div className="chat-input-wrapper">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything about products..."
                className="chat-input"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button
                className={`voice-button ${isListening ? 'listening' : ''}`}
                onClick={toggleListening}
              >
                <Mic size={20} />
              </button>
              <button
                className="send-button"
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AIAssistantPage

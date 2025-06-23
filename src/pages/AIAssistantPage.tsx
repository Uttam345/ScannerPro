import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Mic, Send, Bot, User } from 'lucide-react'

const AIAssistantPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'assistant',
      text: "Hi! I'm your AI shopping assistant. How can I help you find the perfect products today?",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isListening, setIsListening] = useState(false)

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    }

    setMessages([...messages, newMessage])
    setInputValue('')

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'assistant',
        text: "I'd be happy to help you with that! Let me search for the best options for you.",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
    }, 1000)
  }

  return (
    <div className="page ai-assistant-page">
      <div className="container">
        <motion.div
          className="assistant-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="assistant-avatar-large">
            <Bot className="assistant-avatar-icon" />
          </div>
          <h2 className="page-title">AI Shopping Assistant</h2>
          <p className="page-description">
            Get personalized recommendations, price comparisons, and shopping guidance
          </p>
        </motion.div>

        <motion.div
          className="chat-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="messages-container">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.type === 'user' ? 'message--user' : 'message--assistant'}`}
              >
                <div className="message-avatar">
                  {message.type === 'user' ? (
                    <User className="message-avatar-icon" />
                  ) : (
                    <Bot className="message-avatar-icon" />
                  )}
                </div>
                <div className="message-content">
                  <p className="message-text">{message.text}</p>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="chat-input-container">
            <div className="chat-input-wrapper">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything about products..."
                className="chat-input"
              />
              <button
                className={`voice-button ${isListening ? 'voice-button--active' : ''}`}
                onClick={() => setIsListening(!isListening)}
              >
                <Mic className="voice-icon" />
              </button>
              <button
                className="send-button"
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
              >
                <Send className="send-icon" />
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="assistant-features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="section-title">What I Can Help With</h3>
          <div className="features-grid">
            <div className="feature-item">
              <MessageCircle className="feature-icon" />
              <h4>Product Questions</h4>
              <p>Ask about specifications, reviews, and comparisons</p>
            </div>
            <div className="feature-item">
              <Bot className="feature-icon" />
              <h4>Smart Recommendations</h4>
              <p>Get personalized suggestions based on your preferences</p>
            </div>
            <div className="feature-item">
              <Mic className="feature-icon" />
              <h4>Voice Commands</h4>
              <p>Use voice for hands-free shopping assistance</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AIAssistantPage

# Walmart SmartScan Pro

A world-class React + Vite + TypeScript application for Walmart's SmartScan Pro - an AI-powered shopping experience with AR scanning, social proof, and personalized recommendations.

## 🚀 Features

- **🔍 Smart Scanner**: AR/barcode scanning with multiple scan modes
- **📱 Product Information**: Detailed product pages with tabbed interface
- **🤖 AI Assistant**: Voice and chat-powered shopping assistant
- **👥 Social Features**: Community reviews and social proof
- **🌱 Sustainability**: Environmental impact tracking and eco-recommendations
- **🎮 Gamification**: Achievement system with rewards and challenges

## 🏗️ Architecture

This application follows a modular, component-based architecture with distinct feature separation:

```
src/
├── components/          # Shared components
│   ├── Header.tsx      # Main navigation header
│   └── Navigation.tsx  # Feature navigation
├── pages/              # Feature pages (routes)
│   ├── HomePage.tsx    # Landing page with hero and stats
│   ├── ScannerPage.tsx # AR/Barcode scanning interface
│   ├── ProductPage.tsx # Product details with tabs
│   ├── AIAssistantPage.tsx # Chat/voice assistant
│   ├── SocialPage.tsx  # Community and social features
│   ├── SustainabilityPage.tsx # Environmental impact
│   └── GamePage.tsx    # Achievements and rewards
├── styles/             # CSS styles
│   └── App.css        # Main stylesheet with design system
└── App.tsx            # Main app with routing
```

## 🎨 Design System

- **Brand Colors**: Walmart Blue (#0071ce), Walmart Yellow (#ffc220)
- **Typography**: Clean, readable fonts with proper hierarchy
- **Components**: Minimalist, boxed design with clear separation
- **Layout**: Responsive grid system with mobile-first approach
- **Accessibility**: WCAG compliant with focus indicators

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚦 Development Guidelines

### Component Structure
- Use functional components with React hooks
- Implement proper TypeScript interfaces
- Follow the established file naming convention
- Keep components focused and modular

### Styling
- Use the CSS variables defined in the design system
- Follow the BEM-like class naming convention
- Ensure responsive design for all components
- Maintain accessibility standards

### Code Quality
- Use TypeScript strictly with proper types
- Follow React best practices
- Implement proper error boundaries
- Add loading states for async operations

## 📱 Features Overview

### Scanner Module
- **Barcode Scanning**: Traditional barcode recognition
- **AR Scanning**: Augmented reality product identification
- **Text Recognition**: OCR for product labels
- **Voice Search**: Spoken product queries

### Product Display
- **Overview Tab**: Basic product information and pricing
- **Social Tab**: Community reviews and ratings
- **Sustainability Tab**: Environmental impact and certifications
- **Details Tab**: Specifications and additional information

### AI Assistant
- **Chat Interface**: Text-based product assistance
- **Voice Commands**: Hands-free shopping help
- **Smart Recommendations**: Personalized product suggestions
- **Shopping Lists**: AI-powered list management

### Social Features
- **Activity Feed**: Community shopping activity
- **Reviews & Ratings**: User-generated content
- **Friends System**: Social shopping connections
- **Sharing**: Product recommendations to friends

### Sustainability
- **Impact Dashboard**: Personal environmental metrics
- **Eco Recommendations**: Sustainable product alternatives
- **Carbon Footprint**: Shopping impact tracking
- **Green Tips**: Environmental shopping advice

### Gamification
- **Achievement System**: Shopping milestone rewards
- **Points & Levels**: Progression-based engagement
- **Challenges**: Weekly and monthly goals
- **Rewards Store**: Point redemption system

## 🔧 Configuration

The application uses Vite's configuration system. Key configurations:

- **TypeScript**: Strict mode enabled with path mapping
- **ESLint**: React and TypeScript rules configured
- **Build**: Optimized production builds with code splitting

## 📄 License

This project is part of Walmart's internal development and follows company guidelines.

## 🤝 Contributing

1. Follow the coding guidelines in `.github/copilot-instructions.md`
2. Ensure all components are properly typed
3. Add appropriate tests for new features
4. Follow the established design system
5. Maintain responsive design principles
    ...reactDom.configs.recommended.rules,
  },
})
```

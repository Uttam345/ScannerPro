import { motion } from 'framer-motion'
import { Trophy, Star, Award, Crown, Zap, Target, Gift, Heart, Leaf, Users, Scan, ShoppingCart, TrendingUp, Calendar, Globe, Flame, Shield, Diamond, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: any;
  category: string;
  rarity: string;
  points: number;
  progress: number;
  maxProgress: number;
  completed: boolean;
  unlockedDate?: string;
  requirements: string[];
  reward: string;
  difficulty: string;
}

interface AchievementCategory {
  id: string;
  name: string;
  icon: any;
  color: string;
  achievements: Achievement[];
  totalPoints: number;
  completedCount: number;
}

const GamePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [animateProgress, setAnimateProgress] = useState(false)
  const [filter, setFilter] = useState('all') // all, completed, incomplete

  const achievements: Achievement[] = [
    // Scanning Achievements
    {
      id: 'first-scan',
      title: 'First Steps',
      description: 'Complete your very first product scan',
      icon: Scan,
      category: 'scanning',
      rarity: 'common',
      points: 50,
      progress: 1,
      maxProgress: 1,
      completed: true,
      unlockedDate: '2024-12-15',
      requirements: ['Scan 1 product'],
      reward: 'Scanner Badge',
      difficulty: 'Beginner'
    },
    {
      id: 'scan-master',
      title: 'Scan Master',
      description: 'Scan 100 different products',
      icon: Target,
      category: 'scanning',
      rarity: 'rare',
      points: 500,
      progress: 73,
      maxProgress: 100,
      completed: false,
      requirements: ['Scan 100 unique products'],
      reward: 'Master Scanner Badge + Premium Features',
      difficulty: 'Advanced'
    },
    {
      id: 'speed-scanner',
      title: 'Lightning Scanner',
      description: 'Scan 20 products in under 5 minutes',
      icon: Zap,
      category: 'scanning',
      rarity: 'epic',
      points: 750,
      progress: 0,
      maxProgress: 20,
      completed: false,
      requirements: ['Scan 20 products within 5 minutes'],
      reward: 'Speed Demon Badge + 2x Point Multiplier',
      difficulty: 'Expert'
    },
    
    // Shopping Achievements
    {
      id: 'first-purchase',
      title: 'Smart Shopper',
      description: 'Make your first purchase using app recommendations',
      icon: ShoppingCart,
      category: 'shopping',
      rarity: 'common',
      points: 100,
      progress: 1,
      maxProgress: 1,
      completed: true,
      unlockedDate: '2024-12-10',
      requirements: ['Make 1 purchase through app'],
      reward: 'Shopper Badge',
      difficulty: 'Beginner'
    },
    {
      id: 'deal-hunter',
      title: 'Deal Hunter Supreme',
      description: 'Find and use 50 exclusive deals',
      icon: Gift,
      category: 'shopping',
      rarity: 'rare',
      points: 600,
      progress: 32,
      maxProgress: 50,
      completed: false,
      requirements: ['Use 50 app-exclusive deals'],
      reward: 'Deal Hunter Crown + VIP Access',
      difficulty: 'Advanced'
    },
    {
      id: 'savings-master',
      title: 'Savings Mastermind',
      description: 'Save over $500 using app recommendations',
      icon: TrendingUp,
      category: 'shopping',
      rarity: 'legendary',
      points: 1000,
      progress: 347,
      maxProgress: 500,
      completed: false,
      requirements: ['Save $500+ through app'],
      reward: 'Golden Piggy Bank + Lifetime Discounts',
      difficulty: 'Legendary'
    },
    
    // Social Achievements
    {
      id: 'social-butterfly',
      title: 'Social Butterfly',
      description: 'Share 10 product reviews with friends',
      icon: Users,
      category: 'social',
      rarity: 'uncommon',
      points: 200,
      progress: 7,
      maxProgress: 10,
      completed: false,
      requirements: ['Share 10 product reviews'],
      reward: 'Social Star Badge + Friend Bonuses',
      difficulty: 'Intermediate'
    },
    {
      id: 'influencer',
      title: 'Community Influencer',
      description: 'Help 100 friends save money through your recommendations',
      icon: Crown,
      category: 'social',
      rarity: 'epic',
      points: 800,
      progress: 23,
      maxProgress: 100,
      completed: false,
      requirements: ['Help 100 friends save money'],
      reward: 'Influencer Crown + Special Features',
      difficulty: 'Expert'
    },
    {
      id: 'viral-post',
      title: 'Viral Sensation',
      description: 'Get 1000 likes on a single product review',
      icon: Flame,
      category: 'social',
      rarity: 'legendary',
      points: 1200,
      progress: 0,
      maxProgress: 1000,
      completed: false,
      requirements: ['Get 1000 likes on one review'],
      reward: 'Viral Badge + Media Recognition',
      difficulty: 'Legendary'
    },
    
    // Sustainability Achievements
    {
      id: 'eco-warrior',
      title: 'Eco Warrior',
      description: 'Choose 25 sustainable products',
      icon: Leaf,
      category: 'sustainability',
      rarity: 'uncommon',
      points: 300,
      progress: 25,
      maxProgress: 25,
      completed: true,
      unlockedDate: '2024-11-28',
      requirements: ['Purchase 25 eco-friendly products'],
      reward: 'Green Warrior Badge + Eco Perks',
      difficulty: 'Intermediate'
    },
    {
      id: 'carbon-neutral',
      title: 'Carbon Neutral Champion',
      description: 'Reduce carbon footprint by 100kg through shopping choices',
      icon: Globe,
      category: 'sustainability',
      rarity: 'epic',
      points: 750,
      progress: 67,
      maxProgress: 100,
      completed: false,
      requirements: ['Reduce 100kg CO₂ through purchases'],
      reward: 'Planet Protector Crown + Carbon Credits',
      difficulty: 'Expert'
    },
    {
      id: 'zero-waste',
      title: 'Zero Waste Hero',
      description: 'Complete a month of zero-waste shopping',
      icon: Heart,
      category: 'sustainability',
      rarity: 'legendary',
      points: 1000,
      progress: 18,
      maxProgress: 30,
      completed: false,
      requirements: ['30 days of zero-waste purchases'],
      reward: 'Zero Waste Crown + Lifetime Recognition',
      difficulty: 'Legendary'
    },
    
    // Streak Achievements
    {
      id: 'weekly-streak',
      title: 'Weekly Warrior',
      description: 'Maintain a 7-day scanning streak',
      icon: Calendar,
      category: 'streaks',
      rarity: 'common',
      points: 150,
      progress: 7,
      maxProgress: 7,
      completed: true,
      unlockedDate: '2024-12-18',
      requirements: ['Scan products for 7 consecutive days'],
      reward: 'Consistency Badge + Streak Multiplier',
      difficulty: 'Beginner'
    },
    {
      id: 'monthly-streak',
      title: 'Dedication Master',
      description: 'Maintain a 30-day scanning streak',
      icon: Shield,
      category: 'streaks',
      rarity: 'rare',
      points: 500,
      progress: 23,
      maxProgress: 30,
      completed: false,
      requirements: ['Scan products for 30 consecutive days'],
      reward: 'Diamond Streak Badge + Premium Rewards',
      difficulty: 'Advanced'
    },
    {
      id: 'legendary-streak',
      title: 'Unstoppable Force',
      description: 'Maintain a 100-day scanning streak',
      icon: Diamond,
      category: 'streaks',
      rarity: 'legendary',
      points: 1500,
      progress: 23,
      maxProgress: 100,
      completed: false,
      requirements: ['Scan products for 100 consecutive days'],
      reward: 'Legendary Crown + Hall of Fame',
      difficulty: 'Legendary'
    },
    
    // Special Achievements
    {
      id: 'beta-tester',
      title: 'Beta Pioneer',
      description: 'Test new features before official release',
      icon: Sparkles,
      category: 'special',
      rarity: 'epic',
      points: 1000,
      progress: 1,
      maxProgress: 1,
      completed: true,
      unlockedDate: '2024-10-01',
      requirements: ['Participate in beta testing'],
      reward: 'Pioneer Badge + Exclusive Access',
      difficulty: 'Special'
    },
    {
      id: 'community-leader',
      title: 'Community Champion',
      description: 'Be elected as a community moderator',
      icon: Award,
      category: 'special',
      rarity: 'legendary',
      points: 2000,
      progress: 0,
      maxProgress: 1,
      completed: false,
      requirements: ['Community nomination and approval'],
      reward: 'Champion Crown + Moderation Powers',
      difficulty: 'Legendary'
    }
  ]

  const categories: AchievementCategory[] = [
    {
      id: 'scanning',
      name: 'Scanning Mastery',
      icon: Scan,
      color: 'blue',
      achievements: achievements.filter(a => a.category === 'scanning'),
      totalPoints: achievements.filter(a => a.category === 'scanning').reduce((sum, a) => sum + a.points, 0),
      completedCount: achievements.filter(a => a.category === 'scanning' && a.completed).length
    },
    {
      id: 'shopping',
      name: 'Smart Shopping',
      icon: ShoppingCart,
      color: 'green',
      achievements: achievements.filter(a => a.category === 'shopping'),
      totalPoints: achievements.filter(a => a.category === 'shopping').reduce((sum, a) => sum + a.points, 0),
      completedCount: achievements.filter(a => a.category === 'shopping' && a.completed).length
    },
    {
      id: 'social',
      name: 'Social Impact',
      icon: Users,
      color: 'purple',
      achievements: achievements.filter(a => a.category === 'social'),
      totalPoints: achievements.filter(a => a.category === 'social').reduce((sum, a) => sum + a.points, 0),
      completedCount: achievements.filter(a => a.category === 'social' && a.completed).length
    },
    {
      id: 'sustainability',
      name: 'Eco Champion',
      icon: Leaf,
      color: 'emerald',
      achievements: achievements.filter(a => a.category === 'sustainability'),
      totalPoints: achievements.filter(a => a.category === 'sustainability').reduce((sum, a) => sum + a.points, 0),
      completedCount: achievements.filter(a => a.category === 'sustainability' && a.completed).length
    },
    {
      id: 'streaks',
      name: 'Consistency King',
      icon: Calendar,
      color: 'orange',
      achievements: achievements.filter(a => a.category === 'streaks'),
      totalPoints: achievements.filter(a => a.category === 'streaks').reduce((sum, a) => sum + a.points, 0),
      completedCount: achievements.filter(a => a.category === 'streaks' && a.completed).length
    },
    {
      id: 'special',
      name: 'Special Honors',
      icon: Award,
      color: 'golden',
      achievements: achievements.filter(a => a.category === 'special'),
      totalPoints: achievements.filter(a => a.category === 'special').reduce((sum, a) => sum + a.points, 0),
      completedCount: achievements.filter(a => a.category === 'special' && a.completed).length
    }
  ]

  const playerStats = {
    totalPoints: achievements.filter(a => a.completed).reduce((sum, a) => sum + a.points, 0),
    completedAchievements: achievements.filter(a => a.completed).length,
    totalAchievements: achievements.length,
    completionRate: Math.round((achievements.filter(a => a.completed).length / achievements.length) * 100),
    rank: 'Achievement Hunter',
    level: 12,
    nextMilestone: 'Legendary Achiever',
    pointsToMilestone: 2500
  }

  const filteredAchievements = achievements.filter(achievement => {
    const categoryMatch = selectedCategory === 'all' || achievement.category === selectedCategory
    const statusMatch = filter === 'all' || 
                       (filter === 'completed' && achievement.completed) || 
                       (filter === 'incomplete' && !achievement.completed)
    return categoryMatch && statusMatch
  })

  useEffect(() => {
    const timer = setTimeout(() => setAnimateProgress(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return '#9ca3af'
      case 'uncommon': return '#22c55e'
      case 'rare': return '#3b82f6'
      case 'epic': return '#8b5cf6'
      case 'legendary': return '#f59e0b'
      default: return '#6b7280'
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return '#22c55e'
      case 'Intermediate': return '#3b82f6'
      case 'Advanced': return '#f59e0b'
      case 'Expert': return '#ef4444'
      case 'Legendary': return '#8b5cf6'
      case 'Special': return '#f43f5e'
      default: return '#6b7280'
    }
  }

  return (
    <div className="page game-page">
      <div className="container">
        {/* Header */}
        <motion.div
          className="achievements-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="page-title">
            <Trophy className="page-icon" />
            Achievement Center
          </h2>
          <p className="page-description">
            Unlock badges, earn points, and showcase your SmartScan Pro mastery
          </p>
        </motion.div>

        {/* Player Stats Overview */}
        <motion.section
          className="player-stats-overview"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="stats-grid">
            <motion.div 
              className="stat-card main-achievement-card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="stat-header">
                <div className="stat-icon-wrapper main">
                  <Trophy className="stat-icon" />
                </div>
                <div className="level-badge">
                  Level {playerStats.level}
                </div>
              </div>
              <div className="stat-content">
                <div className="main-stat">
                  <span className="stat-value">{playerStats.totalPoints.toLocaleString()}</span>
                  <span className="stat-label">Total Points</span>
                </div>
                <div className="rank-info">
                  <span className="rank-title">{playerStats.rank}</span>
                  <span className="next-milestone">Next: {playerStats.nextMilestone}</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="stat-card achievements-progress"
              whileHover={{ scale: 1.02 }}
            >
              <div className="stat-header">
                <Award className="progress-icon" />
                <span className="completion-rate">{playerStats.completionRate}%</span>
              </div>
              <div className="progress-content">
                <div className="achievement-count">
                  <span className="completed">{playerStats.completedAchievements}</span>
                  <span className="divider">/</span>
                  <span className="total">{playerStats.totalAchievements}</span>
                </div>
                <span className="progress-label">Achievements Unlocked</span>
                <div className="overall-progress-bar">
                  <motion.div 
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: animateProgress ? `${playerStats.completionRate}%` : 0 }}
                    transition={{ delay: 0.8, duration: 1.5 }}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="stat-card milestone-card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="milestone-content">
                <Star className="milestone-icon" />
                <div className="milestone-info">
                  <span className="milestone-points">{playerStats.pointsToMilestone}</span>
                  <span className="milestone-label">Points to next milestone</span>
                </div>
                <div className="milestone-progress">
                  <motion.div 
                    className="milestone-bar"
                    initial={{ width: 0 }}
                    animate={{ width: animateProgress ? '68%' : 0 }}
                    transition={{ delay: 1, duration: 1.2 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Category Navigation */}
        <motion.section
          className="category-navigation"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="category-tabs">
            <motion.button
              className={`category-tab ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Award className="tab-icon" />
              <span className="tab-label">All Achievements</span>
              <span className="tab-count">{achievements.length}</span>
            </motion.button>
            
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                className={`category-tab ${selectedCategory === category.id ? 'active' : ''} ${category.color}`}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              >
                <category.icon className="tab-icon" />
                <span className="tab-label">{category.name}</span>
                <span className="tab-count">{category.completedCount}/{category.achievements.length}</span>
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Filter Controls */}
        <motion.div
          className="filter-controls"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="filter-group">
            <span className="filter-label">Show:</span>
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
            <button 
              className={`filter-btn ${filter === 'incomplete' ? 'active' : ''}`}
              onClick={() => setFilter('incomplete')}
            >
              In Progress
            </button>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.section
          className="achievements-grid-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="achievements-grid">
            {filteredAchievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              const progressPercentage = (achievement.progress / achievement.maxProgress) * 100
              
              return (
                <motion.div
                  key={achievement.id}
                  className={`achievement-card ${achievement.completed ? 'completed' : 'locked'} ${achievement.rarity}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                  whileHover={{ scale: 1.03, y: -8 }}
                >
                  <div className="achievement-glow"></div>
                  
                  {/* Achievement Header */}
                  <div className="achievement-header">
                    <div className="achievement-icon-wrapper">
                      <IconComponent className="achievement-icon" />
                      {achievement.completed && (
                        <div className="completion-checkmark">✓</div>
                      )}
                    </div>
                    <div className="achievement-badges">
                      <span 
                        className={`rarity-badge ${achievement.rarity}`}
                        style={{ borderColor: getRarityColor(achievement.rarity) }}
                      >
                        {achievement.rarity}
                      </span>
                      <span 
                        className="difficulty-badge"
                        style={{ backgroundColor: getDifficultyColor(achievement.difficulty) }}
                      >
                        {achievement.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Achievement Content */}
                  <div className="achievement-content">
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-description">{achievement.description}</p>
                    
                    <div className="achievement-rewards">
                      <Gift className="reward-icon" />
                      <span className="reward-text">{achievement.reward}</span>
                    </div>

                    <div className="achievement-requirements">
                      <span className="requirements-label">Requirements:</span>
                      <ul className="requirements-list">
                        {achievement.requirements.map((req, idx) => (
                          <li key={idx} className="requirement">{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Achievement Progress */}
                  <div className="achievement-progress">
                    {achievement.completed ? (
                      <div className="completion-info">
                        <div className="completed-status">
                          <Trophy className="trophy-icon" />
                          <span className="completed-text">Completed!</span>
                        </div>
                        <div className="unlock-info">
                          <span className="points-earned">+{achievement.points} points</span>
                          <span className="unlock-date">Unlocked {achievement.unlockedDate}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="progress-info">
                        <div className="progress-header">
                          <span className="progress-text">{achievement.progress}/{achievement.maxProgress}</span>
                          <span className="progress-percentage">{Math.round(progressPercentage)}%</span>
                        </div>
                        <div className="progress-bar">
                          <motion.div 
                            className="progress-fill"
                            initial={{ width: 0 }}
                            animate={{ width: animateProgress ? `${progressPercentage}%` : 0 }}
                            transition={{ delay: 0.7 + index * 0.05, duration: 1 }}
                          />
                        </div>
                        <div className="potential-reward">
                          <span className="potential-points">Earn {achievement.points} points</span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default GamePage

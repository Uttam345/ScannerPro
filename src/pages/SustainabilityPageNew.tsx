import { motion } from 'framer-motion'
import { Leaf, Recycle, Globe, TrendingUp, Award, Droplets, Zap, TreePine, Heart, Target, Calendar, Trophy } from 'lucide-react'
import { useState, useEffect } from 'react'

interface EcoStat {
  id: string;
  label: string;
  value: string;
  unit: string;
  icon: any;
  color: string;
  progress: number;
  target: string;
  trend: number;
  description: string;
}

interface MonthlyGoal {
  id: number;
  title: string;
  description: string;
  progress: number;
  target: number;
  reward: string;
  daysLeft: number;
  category: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  earned: boolean;
  rarity: string;
  points: number;
  category: string;
  earnedDate?: string;
}

const SustainabilityPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month')
  const [animateProgress, setAnimateProgress] = useState(false)

  const ecoStats: EcoStat[] = [
    { 
      id: 'carbon',
      label: 'CO₂ Footprint Reduced', 
      value: '47.8', 
      unit: 'kg',
      icon: Globe, 
      color: 'blue',
      progress: 85,
      target: '50.0 kg',
      trend: 12,
      description: 'Carbon emissions saved through eco-friendly choices'
    },
    { 
      id: 'recycle',
      label: 'Recyclable Products', 
      value: '92', 
      unit: '%',
      icon: Recycle, 
      color: 'green',
      progress: 92,
      target: '95%',
      trend: 8,
      description: 'Percentage of recyclable products purchased'
    },
    { 
      id: 'eco-score',
      label: 'Eco Shopping Score', 
      value: 'A+', 
      unit: '',
      icon: Leaf, 
      color: 'emerald',
      progress: 95,
      target: 'Maintain A+',
      trend: 5,
      description: 'Overall sustainability rating for purchases'
    },
    { 
      id: 'water',
      label: 'Water Conservation', 
      value: '1,240', 
      unit: 'L',
      icon: Droplets, 
      color: 'cyan',
      progress: 78,
      target: '1,500 L',
      trend: 15,
      description: 'Water saved through efficient product choices'
    },
    { 
      id: 'energy',
      label: 'Energy Efficiency', 
      value: '89', 
      unit: '%',
      icon: Zap, 
      color: 'yellow',
      progress: 89,
      target: '90%',
      trend: 3,
      description: 'Energy-efficient products in your purchases'
    },
    { 
      id: 'biodiversity',
      label: 'Biodiversity Impact', 
      value: '156', 
      unit: 'pts',
      icon: TreePine, 
      color: 'forest',
      progress: 72,
      target: '200 pts',
      trend: 18,
      description: 'Points earned supporting biodiversity-friendly brands'
    }
  ]

  const monthlyGoals: MonthlyGoal[] = [
    {
      id: 1,
      title: 'Carbon Neutral Challenge',
      description: 'Achieve net-zero carbon footprint through smart shopping',
      progress: 85,
      target: 100,
      reward: '🌍 Climate Hero Badge + 500 pts',
      daysLeft: 8,
      category: 'Climate'
    },
    {
      id: 2,
      title: 'Zero Waste Warrior',
      description: 'Purchase only zero-waste and minimal packaging products',
      progress: 67,
      target: 100,
      reward: '♻️ Waste Champion Badge + 400 pts',
      daysLeft: 15,
      category: 'Waste'
    },
    {
      id: 3,
      title: 'Local Heroes Support',
      description: 'Support local and sustainable producers exclusively',
      progress: 92,
      target: 100,
      reward: '🏠 Community Champion + 300 pts',
      daysLeft: 3,
      category: 'Community'
    },
    {
      id: 4,
      title: 'Biodiversity Guardian',
      description: 'Choose products that support wildlife conservation',
      progress: 54,
      target: 100,
      reward: '🦋 Nature Protector Badge + 600 pts',
      daysLeft: 22,
      category: 'Nature'
    }
  ]

  const achievements: Achievement[] = [
    { 
      id: 'eco-warrior',
      title: 'Eco Warrior', 
      description: '100+ sustainable products purchased', 
      earned: true, 
      rarity: 'gold',
      points: 1000,
      category: 'Shopping',
      earnedDate: '2024-11-15'
    },
    { 
      id: 'carbon-crusher',
      title: 'Carbon Crusher', 
      description: 'Saved 500kg CO₂ through eco choices', 
      earned: true, 
      rarity: 'platinum',
      points: 1500,
      category: 'Climate',
      earnedDate: '2024-10-28'
    },
    { 
      id: 'green-guru',
      title: 'Green Guru', 
      description: '12 months of consistent sustainable shopping', 
      earned: true, 
      rarity: 'diamond',
      points: 2500,
      category: 'Consistency',
      earnedDate: '2024-12-01'
    },
    { 
      id: 'planet-protector',
      title: 'Planet Protector', 
      description: 'Influenced 25+ friends to shop sustainably', 
      earned: false, 
      rarity: 'legendary',
      points: 5000,
      category: 'Community'
    },
    { 
      id: 'waste-warrior',
      title: 'Waste Warrior', 
      description: '6 months of zero-waste shopping', 
      earned: true, 
      rarity: 'silver',
      points: 800,
      category: 'Waste',
      earnedDate: '2024-09-12'
    },
    { 
      id: 'biodiversity-champion',
      title: 'Biodiversity Champion', 
      description: 'Supported 50+ wildlife-friendly brands', 
      earned: false, 
      rarity: 'emerald',
      points: 1200,
      category: 'Nature'
    }
  ]

  const personalStats = {
    totalEcoPoints: 12580,
    streakDays: 127,
    rank: 'Eco Champion',
    percentile: 94,
    totalSavings: '$1,247.50',
    impactRating: 'Exceptional'
  }

  useEffect(() => {
    const timer = setTimeout(() => setAnimateProgress(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="page sustainability-page">
      <div className="container">
        {/* Header */}
        <motion.div
          className="eco-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="page-title">
            <Leaf className="page-icon" />
            Eco Hub - Your Sustainability Dashboard
          </h2>
          <p className="page-description">
            Track your environmental impact and celebrate your eco-friendly achievements
          </p>
        </motion.div>

        {/* Personal Eco Overview */}
        <motion.section
          className="eco-overview"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="overview-grid">
            <motion.div 
              className="overview-card main-stats"
              whileHover={{ scale: 1.02 }}
            >
              <div className="main-stats-content">
                <div className="stats-left">
                  <div className="eco-rank">
                    <Trophy className="rank-icon" />
                    <div className="rank-info">
                      <span className="rank-title">{personalStats.rank}</span>
                      <span className="rank-subtitle">Top {100 - personalStats.percentile}% of shoppers</span>
                    </div>
                  </div>
                  <div className="eco-points">
                    <span className="points-value">{personalStats.totalEcoPoints.toLocaleString()}</span>
                    <span className="points-label">Eco Points</span>
                  </div>
                </div>
                <div className="stats-right">
                  <div className="streak-counter">
                    <Calendar className="streak-icon" />
                    <div className="streak-info">
                      <span className="streak-number">{personalStats.streakDays}</span>
                      <span className="streak-label">Day Streak</span>
                    </div>
                  </div>
                  <div className="impact-rating">
                    <Heart className="impact-icon" />
                    <span className="impact-text">{personalStats.impactRating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="overview-card savings-card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="savings-content">
                <div className="savings-icon-wrapper">
                  <Award className="savings-icon" />
                </div>
                <div className="savings-info">
                  <span className="savings-amount">{personalStats.totalSavings}</span>
                  <span className="savings-label">Total Eco Savings</span>
                  <span className="savings-note">Money saved through sustainable choices</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Eco Stats Grid */}
        <motion.section
          className="eco-stats-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="section-header">
            <h3 className="section-title">Your Environmental Impact</h3>
            <div className="period-selector">
              <button 
                className={`period-btn ${selectedPeriod === 'week' ? 'active' : ''}`}
                onClick={() => setSelectedPeriod('week')}
              >
                This Week
              </button>
              <button 
                className={`period-btn ${selectedPeriod === 'month' ? 'active' : ''}`}
                onClick={() => setSelectedPeriod('month')}
              >
                This Month
              </button>
              <button 
                className={`period-btn ${selectedPeriod === 'year' ? 'active' : ''}`}
                onClick={() => setSelectedPeriod('year')}
              >
                This Year
              </button>
            </div>
          </div>
          
          <div className="eco-stats-grid">
            {ecoStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.id}
                  className={`eco-stat-card ${stat.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="stat-header">
                    <div className="stat-icon-wrapper">
                      <IconComponent className="stat-icon" />
                    </div>
                    <div className="trend-indicator positive">
                      <TrendingUp className="trend-icon" />
                      <span>+{stat.trend}%</span>
                    </div>
                  </div>
                  
                  <div className="stat-content">
                    <div className="stat-value-container">
                      <span className="stat-value">{stat.value}</span>
                      <span className="stat-unit">{stat.unit}</span>
                    </div>
                    <span className="stat-label">{stat.label}</span>
                    <span className="stat-description">{stat.description}</span>
                  </div>
                  
                  <div className="progress-section">
                    <div className="progress-header">
                      <span className="progress-label">Progress to goal</span>
                      <span className="progress-target">{stat.target}</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div 
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={{ width: animateProgress ? `${stat.progress}%` : 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      />
                    </div>
                    <span className="progress-percentage">{stat.progress}%</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Monthly Goals */}
        <motion.section
          className="monthly-goals-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="section-title">Monthly Eco Challenges</h3>
          <div className="goals-grid">
            {monthlyGoals.map((goal, index) => (
              <motion.div
                key={goal.id}
                className={`goal-card ${goal.category.toLowerCase()}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="goal-header">
                  <div className="goal-category-badge">{goal.category}</div>
                  <div className="days-left">
                    <span className="days-number">{goal.daysLeft}</span>
                    <span className="days-label">days left</span>
                  </div>
                </div>
                
                <div className="goal-content">
                  <h4 className="goal-title">{goal.title}</h4>
                  <p className="goal-description">{goal.description}</p>
                  
                  <div className="goal-progress">
                    <div className="progress-info">
                      <span className="progress-text">{goal.progress}% Complete</span>
                      <span className="progress-fraction">{goal.progress}/{goal.target}</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div 
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={{ width: animateProgress ? `${goal.progress}%` : 0 }}
                        transition={{ delay: 0.7 + index * 0.1, duration: 1 }}
                      />
                    </div>
                  </div>
                  
                  <div className="goal-reward">
                    <Target className="reward-icon" />
                    <span className="reward-text">{goal.reward}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section
          className="achievements-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="section-header">
            <h3 className="section-title">Eco Achievements</h3>
            <div className="achievements-summary">
              <span className="earned-count">{achievements.filter(a => a.earned).length} of {achievements.length} earned</span>
              <span className="total-points">{achievements.filter(a => a.earned).reduce((sum, a) => sum + a.points, 0)} points</span>
            </div>
          </div>
          
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className={`achievement-card ${achievement.earned ? 'earned' : 'locked'} ${achievement.rarity}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                whileHover={achievement.earned ? { scale: 1.05, y: -5 } : { scale: 1.02 }}
              >
                <div className="achievement-glow"></div>
                <div className="achievement-content">
                  <div className="achievement-header">
                    <div className="achievement-icon">
                      {achievement.earned ? '🏆' : '🔒'}
                    </div>
                    <div className={`rarity-badge ${achievement.rarity}`}>
                      {achievement.rarity}
                    </div>
                  </div>
                  
                  <h4 className="achievement-title">{achievement.title}</h4>
                  <p className="achievement-description">{achievement.description}</p>
                  
                  <div className="achievement-footer">
                    <div className="achievement-points">
                      <span className="points-value">{achievement.points}</span>
                      <span className="points-label">points</span>
                    </div>
                    {achievement.earned && achievement.earnedDate && (
                      <div className="earned-date">
                        Earned {new Date(achievement.earnedDate).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                  
                  <div className="achievement-category">
                    <span className="category-label">{achievement.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default SustainabilityPage

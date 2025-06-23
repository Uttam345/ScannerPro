import { Trophy, Star, Gift, Target, TrendingUp, Award } from 'lucide-react';

export default function GamePage() {
  const achievements = [
    { id: 1, title: 'First Scan', description: 'Completed your first product scan', points: 100, completed: true, icon: Trophy },
    { id: 2, title: 'Eco Warrior', description: 'Chose 10 sustainable products', points: 250, completed: true, icon: Star },
    { id: 3, title: 'Social Butterfly', description: 'Shared 5 product reviews', points: 150, completed: false, icon: Gift },
    { id: 4, title: 'Scanner Pro', description: 'Scan 100 products', points: 500, completed: false, icon: Target },
  ];

  const challenges = [
    { id: 1, title: 'Weekly Sustainability Goal', description: 'Choose 5 eco-friendly products this week', progress: 60, reward: '50 points' },
    { id: 2, title: 'Social Sharing Challenge', description: 'Share 3 product reviews', progress: 33, reward: 'Badge + 75 points' },
    { id: 3, title: 'Scanner Master', description: 'Scan 25 products this month', progress: 80, reward: '200 points' },
  ];

  const rewards = [
    { id: 1, title: '$5 Walmart Gift Card', cost: 1000, available: true },
    { id: 2, title: '$10 Walmart Gift Card', cost: 2000, available: true },
    { id: 3, title: 'Free Grocery Delivery', cost: 750, available: true },
    { id: 4, title: '$25 Walmart Gift Card', cost: 5000, available: false },
  ];

  const userStats = {
    totalPoints: 1250,
    level: 'Bronze Scanner',
    nextLevel: 'Silver Scanner',
    pointsToNext: 750,
    completedAchievements: 8,
    totalScans: 47,
  };

  return (
    <div className="game-page">
      {/* User Stats Overview */}
      <div className="stats-overview">
        <h1>Gaming Dashboard</h1>
        <div className="user-stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <Trophy className="icon" />
            </div>
            <div className="stat-info">
              <h3>{userStats.totalPoints}</h3>
              <p>Total Points</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <Award className="icon" />
            </div>
            <div className="stat-info">
              <h3>{userStats.level}</h3>
              <p>Current Level</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <Star className="icon" />
            </div>
            <div className="stat-info">
              <h3>{userStats.completedAchievements}</h3>
              <p>Achievements</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <TrendingUp className="icon" />
            </div>
            <div className="stat-info">
              <h3>{userStats.totalScans}</h3>
              <p>Total Scans</p>
            </div>
          </div>
        </div>
        
        {/* Level Progress */}
        <div className="level-progress">
          <div className="progress-info">
            <span>Progress to {userStats.nextLevel}</span>
            <span>{userStats.pointsToNext} points needed</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${(userStats.totalPoints / (userStats.totalPoints + userStats.pointsToNext)) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="achievements-section">
        <h2>Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon;
            return (
              <div key={achievement.id} className={`achievement-card ${achievement.completed ? 'completed' : 'locked'}`}>
                <div className="achievement-icon">
                  <IconComponent className="icon" />
                </div>
                <div className="achievement-info">
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                  <div className="achievement-points">
                    <span>{achievement.points} points</span>
                    {achievement.completed && <span className="completed-badge">✓ Completed</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Challenges */}
      <div className="challenges-section">
        <h2>Active Challenges</h2>
        <div className="challenges-grid">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="challenge-card">
              <div className="challenge-info">
                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>
                <div className="challenge-reward">
                  <Gift className="icon" />
                  <span>Reward: {challenge.reward}</span>
                </div>
              </div>
              <div className="challenge-progress">
                <div className="progress-text">
                  <span>{challenge.progress}% Complete</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${challenge.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rewards Store */}
      <div className="rewards-section">
        <h2>Rewards Store</h2>
        <div className="rewards-grid">
          {rewards.map((reward) => (
            <div key={reward.id} className={`reward-card ${!reward.available ? 'unavailable' : ''}`}>
              <div className="reward-icon">
                <Gift className="icon" />
              </div>
              <div className="reward-info">
                <h3>{reward.title}</h3>
                <p className="reward-cost">{reward.cost} points</p>
                <button 
                  className={`redeem-btn ${!reward.available ? 'disabled' : ''}`}
                  disabled={!reward.available || userStats.totalPoints < reward.cost}
                >
                  {userStats.totalPoints < reward.cost ? 'Not Enough Points' : 'Redeem'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { NavLink } from 'react-router-dom'
import { 
  Home, 
  Scan, 
  MessageCircle, 
  Users, 
  Leaf, 
  Trophy 
} from 'lucide-react'

const Navigation = () => {
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/scanner', icon: Scan, label: 'Scanner' },
    { path: '/assistant', icon: MessageCircle, label: 'AI Assistant' },
    { path: '/social', icon: Users, label: 'Social' },
    { path: '/sustainability', icon: Leaf, label: 'Eco Hub' },
    { path: '/achievements', icon: Trophy, label: 'Achievements' }
  ]

  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-content">
          {navItems.map(({ path, icon: Icon, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => 
                `nav-item ${isActive ? 'nav-item--active' : ''}`
              }
            >
              <Icon className="nav-icon" />
              <span className="nav-label">{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation

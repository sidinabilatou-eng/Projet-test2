import { Home, Sparkles, BookOpen, Users } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const navItems = [
    { name: 'Accueil', path: '/', icon: Home },
    { name: 'Valeurs', path: '/values', icon: Sparkles },
    { name: 'Héritage', path: '/heritage', icon: BookOpen },
    { name: 'Agir', path: '/action', icon: Users },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-sand pb-safe px-4 py-2 flex justify-around items-center z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path
        const Icon = item.icon
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center space-y-1 ${
              isActive ? 'text-emerald' : 'text-gray-400'
            }`}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-sans font-semibold uppercase tracking-wider">
              {item.name}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}

export default Navbar

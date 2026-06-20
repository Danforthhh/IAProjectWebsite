import { NavLink, Link } from 'react-router-dom'

const serif = { fontFamily: "'DM Serif Display', Georgia, serif" }

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-black italic text-stone-900" style={serif}>Smash'd</span>
          <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium hidden sm:inline">100% Végétal</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {[
            { to: '/', label: 'Accueil' },
            { to: '/product', label: 'Le Produit' },
            { to: '/checkout', label: 'Commander' },
          ].map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-orange-600' : 'text-stone-600 hover:text-stone-900'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <NavLink
            to="/annexe"
            className={({ isActive }) =>
              `text-xs font-medium transition-colors hidden sm:block ${isActive ? 'text-stone-900' : 'text-stone-400 hover:text-stone-600'}`
            }
          >
            Annexe MBA
          </NavLink>
          <Link
            to="/checkout"
            className="text-sm font-semibold px-4 py-2 rounded-full text-white transition-colors"
            style={{ backgroundColor: '#ea580c' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f97316')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ea580c')}
          >
            Commander
          </Link>
        </div>
      </div>
    </nav>
  )
}

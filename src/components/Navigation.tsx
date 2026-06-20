import { NavLink, Link } from 'react-router-dom'

const serif = { fontFamily: "'DM Serif Display', Georgia, serif" }

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div>
            <span className="text-2xl font-black italic text-stone-900 block leading-tight" style={serif}>Smash'd</span>
            <span className="text-[10px] text-stone-400 font-medium leading-none hidden sm:block">by CrunchLab</span>
          </div>
          <span className="text-xs bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full font-medium hidden sm:inline">100% Végétal</span>
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
                `text-sm font-medium transition-colors ${isActive ? 'text-brand-600' : 'text-stone-600 hover:text-stone-900'}`
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
            style={{ backgroundColor: '#cc2200' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e03300')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#cc2200')}
          >
            Commander
          </Link>
        </div>
      </div>
    </nav>
  )
}

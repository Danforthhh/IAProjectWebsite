import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const serif = { fontFamily: "'DM Serif Display', Georgia, serif" }

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-md border-b border-stone-100 transition-all duration-300"
      style={{ paddingTop: scrolled ? '10px' : '18px', paddingBottom: scrolled ? '10px' : '18px' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}crunchlab-logo.png`}
            alt="CrunchLab"
            className="w-auto transition-all duration-300"
            style={{ height: scrolled ? '28px' : '56px' }}
          />
          <div className="border-l border-stone-200 pl-3">
            <span
              className="font-black italic text-stone-900 block leading-tight transition-all duration-300"
              style={{ ...serif, fontSize: scrolled ? '1.1rem' : '1.5rem' }}
            >
              Smash'd
            </span>
            {!scrolled && (
              <span className="text-[10px] text-stone-400 font-medium uppercase tracking-[0.15em] leading-none block">
                chips de lentilles
              </span>
            )}
          </div>
          <span className="text-xs bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full font-medium hidden md:inline">
            100% Végétal
          </span>
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
            style={{ backgroundColor: '#d44008' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#eb5215')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#d44008')}
          >
            Commander
          </Link>
        </div>
      </div>
    </nav>
  )
}

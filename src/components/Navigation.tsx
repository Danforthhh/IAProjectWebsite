import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-stone-950/95 backdrop-blur-md border-b border-white/8 transition-all duration-300"
      style={{ paddingTop: scrolled ? '10px' : '14px', paddingBottom: scrolled ? '10px' : '14px' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}crunchlab-logo.png`}
            alt="CrunchLab"
            className="w-auto transition-all duration-300"
            style={{ height: scrolled ? '40px' : '80px' }}
          />
          <div className="border-l border-white/15 pl-3">
            <span
              className="font-display font-black italic text-white block leading-tight transition-all duration-300"
              style={{ fontSize: scrolled ? '1.2rem' : '1.6rem' }}
            >
              Smash'd
            </span>
            {!scrolled && (
              <span className="text-base text-white/90 font-medium leading-none block mt-0.5">
                chips de lentilles
              </span>
            )}
          </div>
          <span className="text-xs bg-brand-500/20 text-brand-400 px-2 py-0.5 rounded-full font-medium hidden md:inline">
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
                `text-sm font-medium transition-colors ${isActive ? 'text-brand-400' : 'text-white/60 hover:text-white'}`
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
              `text-xs font-medium transition-colors hidden sm:block ${isActive ? 'text-white' : 'text-white/30 hover:text-white/60'}`
            }
          >
            Annexe MBA
          </NavLink>
          <Link
            to="/checkout"
            className="text-sm font-semibold px-4 py-2 rounded-full text-white bg-brand-500 hover:bg-brand-400 transition-colors"
          >
            Commander
          </Link>
        </div>
      </div>
    </nav>
  )
}

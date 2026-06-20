export default function Navigation() {
  const links = [
    { href: '#exercice', label: "L'Exercice" },
    { href: '#produits', label: 'Les Produits' },
    { href: '#analyse', label: 'Analyse' },
    { href: '#reflexion', label: 'Réflexion IA' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-amber-100">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-amber-800">
          <span className="text-xl">✨</span>
          <span className="text-sm font-bold tracking-wide uppercase">AI First Snack Co.</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-stone-600 hover:text-amber-700 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-medium">MBA · GenAI</span>
        </div>
      </div>
    </nav>
  )
}

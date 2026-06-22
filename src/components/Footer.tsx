import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <div className="text-2xl font-black italic text-white mb-1 font-display">Smash'd</div>
            <p className="text-sm text-stone-500">Chips de lentilles 100% végétales.</p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-stone-500 justify-center">
            <Link to="/" className="hover:text-brand-400 transition-colors">Accueil</Link>
            <Link to="/product" className="hover:text-brand-400 transition-colors">Le Produit</Link>
            <Link to="/checkout" className="hover:text-brand-400 transition-colors">Commander</Link>
            <Link to="/annexe" className="hover:text-stone-300 transition-colors">Annexe MBA</Link>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <img
              src={`${import.meta.env.BASE_URL}crunchlab-logo.png`}
              alt="CrunchLab"
              className="h-14 w-auto"
            />
            <p className="text-sm text-stone-400">Concept MBA HEC Montréal · Built with Claude</p>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 text-center text-xs text-stone-500">
          Smash'd est un produit de CrunchLab, développé dans le cadre d'un exercice MBA à HEC Montréal.
          Site réalisé avec React · Vite · Tailwind CSS.
        </div>
      </div>
    </footer>
  )
}

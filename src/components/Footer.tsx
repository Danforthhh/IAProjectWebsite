import { Link } from 'react-router-dom'

const serif = { fontFamily: "'DM Serif Display', Georgia, serif" }

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <div className="text-2xl font-black italic text-white mb-1" style={serif}>Smash'd</div>
            <p className="text-sm text-stone-500">La chip végétale qui change tout.</p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-stone-500 justify-center">
            <Link to="/" className="hover:text-orange-400 transition-colors">Accueil</Link>
            <Link to="/product" className="hover:text-orange-400 transition-colors">Le Produit</Link>
            <Link to="/checkout" className="hover:text-orange-400 transition-colors">Commander</Link>
            <Link to="/annexe" className="hover:text-stone-300 transition-colors">Annexe MBA</Link>
          </div>

          <div className="text-xs text-stone-600 text-center md:text-right">
            <p>Concept MBA · GenAI Exercise</p>
            <p className="mt-1">Built with GPT-4 · Hosted on GitHub Pages</p>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 text-center text-xs text-stone-700">
          Smash'd est un concept développé dans le cadre d'un exercice académique MBA.
          Site réalisé avec React · Vite · Tailwind CSS.
        </div>
      </div>
    </footer>
  )
}

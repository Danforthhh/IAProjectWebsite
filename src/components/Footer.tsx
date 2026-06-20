export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <span className="text-xl">✨</span>
              <span className="font-bold text-white">AI First Snack Co.</span>
            </div>
            <p className="text-sm text-stone-500">Exercice MBA — Generative AI in Business Innovation</p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-stone-500 justify-center">
            <a href="#exercice" className="hover:text-amber-400 transition-colors">L'Exercice</a>
            <a href="#produits" className="hover:text-amber-400 transition-colors">Les Produits</a>
            <a href="#analyse" className="hover:text-amber-400 transition-colors">Analyse</a>
            <a href="#reflexion" className="hover:text-amber-400 transition-colors">Réflexion IA</a>
          </div>

          <div className="text-center md:text-right text-xs text-stone-600">
            <p>Built with Claude · React · Vite</p>
            <p className="mt-1">Hosted on GitHub Pages</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-4 text-xs text-stone-600">
          <span className="bg-white/5 rounded-full px-3 py-1">Claude (Anthropic)</span>
          <span className="bg-white/5 rounded-full px-3 py-1">Google Gemini</span>
          <span className="bg-white/5 rounded-full px-3 py-1">Microsoft Copilot</span>
          <span className="bg-white/5 rounded-full px-3 py-1">GPT-4 (OpenAI)</span>
        </div>
      </div>
    </footer>
  )
}

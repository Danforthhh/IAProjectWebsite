export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-stone-950 text-white">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(217,119,6,0.3),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_80%_80%,rgba(234,179,8,0.1),transparent)]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* MBA badge */}
        <div className="animate-fadeInUp inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-amber-300 mb-8">
          <span>🎓</span>
          <span className="font-medium">MBA · Exercice Generative AI</span>
        </div>

        {/* Main title */}
        <h1 className="animate-fadeInUp-delay-1 text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Building an{' '}
          <span className="gold-shimmer">AI First</span>
          <br />
          Snack Company
        </h1>

        {/* Subtitle */}
        <p className="animate-fadeInUp-delay-2 text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-4 leading-relaxed">
          Cinq étudiants. Cinq outils d'IA générative. Cinq concepts de snacks innovants conçus de A à Z.
          De la formulation à la stratégie commerciale — entièrement assistés par l'IA.
        </p>

        <p className="animate-fadeInUp-delay-2 text-sm text-stone-400 mb-12">
          Claude · Google Gemini · Microsoft Copilot · GPT-4
        </p>

        {/* CTA */}
        <div className="animate-fadeInUp-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#produits"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Voir les produits
            <span>↓</span>
          </a>
          <a
            href="#analyse"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-8 py-3 rounded-full transition-colors"
          >
            Analyse comparative
          </a>
        </div>

        {/* Product emoji row */}
        <div className="animate-fadeInUp-delay-3 mt-16 flex items-center justify-center gap-8 text-3xl opacity-60">
          <span title="Smash'd">🌿</span>
          <span className="text-white/30">·</span>
          <span title="Honeycrisp">🍯</span>
          <span className="text-white/30">·</span>
          <span title="KÜB">🟩</span>
          <span className="text-white/30">·</span>
          <span title="GlowBar">🍋</span>
          <span className="text-white/30">·</span>
          <span title="La Pépite" className="opacity-100 text-4xl">✨</span>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/30 text-sm flex flex-col items-center gap-1">
        <span>↓</span>
      </div>
    </section>
  )
}

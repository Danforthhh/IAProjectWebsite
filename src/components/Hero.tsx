import { products } from '../data/products'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#0F0D0A] text-white overflow-hidden">
      {/* Very subtle warm texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_40%,rgba(180,83,9,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_70%,rgba(201,145,58,0.06),transparent)]" />

      {/* Main content — editorial two-column on desktop */}
      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 md:px-12">
        {/* Top eyebrow */}
        <div className="pt-28 pb-0">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#C8912E] mb-8">
            MBA · Exercice Generative AI · 2026
          </p>
        </div>

        {/* Editorial title block */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:gap-16 pb-12">
          {/* Left: big title */}
          <div className="flex-1">
            <h1
              className="leading-[0.92] tracking-tight mb-8"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              <span className="block text-[clamp(3.5rem,9vw,8rem)] text-white">
                Building an
              </span>
              <span
                className="block text-[clamp(3.5rem,9vw,8rem)] italic"
                style={{ color: '#C8912E' }}
              >
                AI First
              </span>
              <span className="block text-[clamp(3.5rem,9vw,8rem)] text-white">
                Snack Company
              </span>
            </h1>

            <p className="text-base md:text-lg text-stone-300 max-w-lg leading-relaxed mb-8 font-light">
              Cinq étudiants. Cinq outils d'IA générative. Cinq snacks conçus en jours —
              formulation, production industrielle et stratégie commerciale incluses.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#produits"
                className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full transition-all"
                style={{ backgroundColor: '#C8912E', color: '#0F0D0A' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#E8A83C')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#C8912E')}
              >
                Découvrir les produits
              </a>
              <a
                href="#analyse"
                className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full bg-white/8 hover:bg-white/14 border border-white/12 transition-colors"
              >
                Analyse comparative
              </a>
            </div>
          </div>

          {/* Right: AI tools used — stacked list */}
          <div className="hidden lg:block shrink-0 text-right pb-2">
            <p className="text-xs tracking-widest uppercase text-stone-500 mb-4">Outils utilisés</p>
            <div className="space-y-1.5">
              {[
                { tool: 'Claude', company: 'Anthropic', count: 2 },
                { tool: 'Gemini', company: 'Google', count: 1 },
                { tool: 'Copilot', company: 'Microsoft', count: 1 },
                { tool: 'GPT-4', company: 'OpenAI', count: 1 },
              ].map(t => (
                <div key={t.tool} className="flex items-baseline justify-end gap-2">
                  <span className="text-xs text-stone-500">{t.company}</span>
                  <span className="text-sm font-medium text-stone-200">{t.tool}</span>
                  <span className="text-xs text-stone-600 tabular-nums">×{t.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/8 w-full" />

        {/* Signature: 5 product names as a large typographic shelf */}
        <div className="flex-1 flex flex-col justify-end pb-10 pt-6">
          <p className="text-xs tracking-[0.2em] uppercase text-stone-600 mb-5">Les cinq concepts</p>
          <div className="flex flex-wrap items-end gap-x-6 gap-y-3 md:gap-x-10">
            {products.map((p) => (
              <a
                key={p.id}
                href="#produits"
                className="group flex items-baseline gap-2 transition-opacity hover:opacity-100"
                style={{ opacity: p.isHero ? 1 : 0.45 }}
              >
                <span
                  className="font-bold leading-none transition-colors"
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: p.isHero ? 'clamp(2.2rem, 4.5vw, 4rem)' : 'clamp(1.6rem, 3vw, 2.6rem)',
                    color: p.isHero ? '#C8912E' : '#e5e7eb',
                  }}
                >
                  {p.name}
                </span>
                <span className="text-xs text-stone-600 hidden sm:inline">{p.aiTool}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

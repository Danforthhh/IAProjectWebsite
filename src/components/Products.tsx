import { useState } from 'react'
import { products, type Product } from '../data/products'

function ScoreBadge({ score }: { score: number }) {
  const color = score >= 4.5 ? 'bg-emerald-100 text-emerald-800' : score >= 4.0 ? 'bg-amber-100 text-amber-800' : 'bg-stone-100 text-stone-600'
  return (
    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${color}`}>
      {score.toFixed(1)}/5
    </span>
  )
}

function ScoreBar({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-amber-400 rounded-full transition-all duration-500"
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  )
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const scoreEntries = [
    { key: 'manufacturing', label: 'Production & Supply Chain' },
    { key: 'differentiation', label: 'Différenciation & Unicité' },
    { key: 'consumerAppeal', label: 'Attrait Consommateur' },
    { key: 'brandMarketing', label: 'Potentiel Marketing' },
  ] as const

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{product.emoji}</span>
              <h3 className="text-2xl font-bold text-stone-900">{product.name}</h3>
              {product.isHero && <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-medium">Projet vedette</span>}
            </div>
            <p className="text-stone-500 text-sm">{product.tagline} · {product.creator}</p>
          </div>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-700 text-xl leading-none">✕</button>
        </div>

        <div className="mb-5 p-4 rounded-xl text-sm leading-relaxed" style={{ backgroundColor: product.accentLight }}>
          {product.concept}
        </div>

        <div className="mb-5">
          <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">Ingrédients clés</div>
          <div className="flex flex-wrap gap-2">
            {product.keyIngredients.map(ing => (
              <span key={ing} className="text-xs bg-stone-100 text-stone-600 px-3 py-1 rounded-full">{ing}</span>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">Scores de viabilité</div>
          <div className="space-y-3">
            {scoreEntries.map(({ key, label }) => (
              <div key={key}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-stone-600">{label}</span>
                  <ScoreBadge score={product.scores[key]} />
                </div>
                <ScoreBar value={product.scores[key]} />
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between p-3 bg-stone-950 text-white rounded-xl">
            <span className="font-semibold text-sm">Score global</span>
            <span className="text-xl font-black text-amber-400">{product.scores.overall.toFixed(1)}<span className="text-sm text-stone-400 font-normal">/5</span></span>
          </div>
        </div>

        <div className="mb-4 p-3 border-l-2 border-amber-400 bg-amber-50 rounded-r-xl">
          <p className="text-sm text-amber-900 font-medium">{product.highlight}</p>
        </div>

        <div className="text-xs text-stone-400 flex items-center gap-2">
          <span>📊</span>
          <span>{product.marketStat}</span>
        </div>
      </div>
    </div>
  )
}

function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  return (
    <div
      className={`card-hover cursor-pointer rounded-3xl border overflow-hidden bg-white group ${
        product.isHero ? 'ring-2 ring-amber-400 ring-offset-2' : 'border-stone-200'
      }`}
      onClick={onClick}
    >
      {/* Color header */}
      <div
        className="h-2"
        style={{ backgroundColor: product.accent }}
      />

      <div className="p-6">
        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{product.emoji}</span>
            <div>
              <h3
                className="italic text-stone-900 text-xl leading-tight"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                {product.name}
              </h3>
              <p className="text-xs text-stone-400">{product.creator}</p>
            </div>
          </div>
          {product.isHero && (
            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-bold shrink-0">⭐ Vedette</span>
          )}
        </div>

        {/* Tagline */}
        <p className="text-sm text-stone-500 mb-4 leading-relaxed">{product.concept.slice(0, 90)}…</p>

        {/* AI Tool badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs text-stone-400">Outil IA :</span>
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full text-white"
            style={{ backgroundColor: product.aiColor }}
          >
            {product.aiTool}
          </span>
        </div>

        {/* Score */}
        <div className="flex items-center justify-between">
          <div className="text-xs text-stone-400">{product.format}</div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-stone-400">Score</span>
            <span className="font-black text-xl" style={{ color: product.accent }}>
              {product.scores.overall.toFixed(1)}
            </span>
            <span className="text-xs text-stone-300">/5</span>
          </div>
        </div>

        {/* Progress bars mini */}
        <div className="mt-4 space-y-1.5">
          <ScoreBar value={product.scores.differentiation} />
          <ScoreBar value={product.scores.brandMarketing} />
        </div>

        <div className="mt-4 text-xs text-stone-400 group-hover:text-amber-600 transition-colors flex items-center gap-1">
          Voir le détail <span>→</span>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  const [selected, setSelected] = useState<Product | null>(null)

  return (
    <section id="produits" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-amber-600 mb-4">Les Produits</span>
          <h2
            className="text-5xl md:text-6xl italic text-stone-900 mb-4"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Cinq concepts. Cinq IA.
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-lg font-light">
            Cliquez sur un produit pour découvrir sa formulation, ses scores de viabilité et l'analyse IA associée.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelected(product)}
            />
          ))}
        </div>

        {/* Legend */}
        <p className="text-center text-xs text-stone-400 mt-8">
          Les scores reflètent l'analyse de viabilité commerciale réalisée lors de l'exercice (1–5 par dimension).
        </p>
      </div>

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}

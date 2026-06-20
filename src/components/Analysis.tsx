import { useState } from 'react'
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'
import { products, dimensions } from '../data/products'

const COLORS = ['#ea580c', '#b45309', '#059669', '#ca8a04', '#d97706']

export default function Analysis() {
  const [view, setView] = useState<'radar' | 'bar'>('radar')
  const [highlightId, setHighlightId] = useState<string | null>('pepite')

  // Radar data — one entry per dimension
  const radarData = dimensions.map(dim => {
    const entry: Record<string, number | string> = { dimension: dim.label }
    products.forEach(p => {
      entry[p.name] = p.scores[dim.key]
    })
    return entry
  })

  // Bar data — one entry per product
  const barData = products.map(p => ({
    name: p.name,
    Production: p.scores.manufacturing,
    Différenciation: p.scores.differentiation,
    'Attrait Conso.': p.scores.consumerAppeal,
    Marketing: p.scores.brandMarketing,
  }))

  const rankings = [...products].sort((a, b) => b.scores.overall - a.scores.overall)

  return (
    <section id="analyse" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">Analyse Comparative</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Les scores en un coup d'œil
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-lg">
            Chaque produit évalué selon 4 dimensions de viabilité commerciale.
          </p>
        </div>

        {/* View toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-stone-100 rounded-full p-1">
            {(['radar', 'bar'] as const).map(v => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  view === v ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500 hover:text-stone-700'
                }`}
              >
                {v === 'radar' ? '🕸 Radar' : '📊 Barres'}
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="bg-stone-50 rounded-3xl p-6 md:p-10 mb-12">
          {view === 'radar' ? (
            <div className="h-80 md:h-96">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="dimension" tick={{ fontSize: 13, fill: '#6b7280' }} />
                  {products.map((p, i) => (
                    <Radar
                      key={p.id}
                      name={p.name}
                      dataKey={p.name}
                      stroke={COLORS[i]}
                      fill={COLORS[i]}
                      fillOpacity={highlightId === p.id ? 0.25 : 0.05}
                      strokeWidth={highlightId === p.id ? 2.5 : 1.2}
                      strokeOpacity={highlightId ? (highlightId === p.id ? 1 : 0.4) : 1}
                    />
                  ))}
                  <Legend
                    wrapperStyle={{ paddingTop: '16px', cursor: 'pointer' }}
                    onClick={(e) => setHighlightId(prev => prev === products.find(p => p.name === e.value)?.id ? null : products.find(p => p.name === e.value)?.id ?? null)}
                  />
                </RadarChart>
              </ResponsiveContainer>
              <p className="text-center text-xs text-stone-400 mt-2">Cliquez sur la légende pour isoler un produit</p>
            </div>
          ) : (
            <div className="h-80 md:h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#6b7280' }} />
                  <YAxis domain={[3, 5.1]} tick={{ fontSize: 11, fill: '#9ca3af' }} />
                  <Tooltip
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                    formatter={(v: number) => [`${v.toFixed(1)}/5`, '']}
                  />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Bar dataKey="Production" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Différenciation" fill="#fbbf24" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Attrait Conso." fill="#6ee7b7" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Marketing" fill="#f97316" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* Rankings */}
        <div>
          <h3 className="text-xl font-bold text-stone-900 mb-6 text-center">Classement général</h3>
          <div className="space-y-3">
            {rankings.map((p, i) => (
              <div
                key={p.id}
                className={`flex items-center gap-4 p-4 rounded-2xl border transition-colors cursor-default ${
                  p.isHero ? 'bg-amber-50 border-amber-200' : 'bg-stone-50 border-stone-100'
                }`}
              >
                <div className="text-2xl font-black text-stone-200 w-8 text-center">{i + 1}</div>
                <span className="text-xl">{p.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-stone-900">{p.name}</span>
                    {p.isHero && <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full font-medium">Votre projet</span>}
                    <span
                      className="text-xs text-white px-2 py-0.5 rounded-full font-medium"
                      style={{ backgroundColor: p.aiColor }}
                    >
                      {p.aiTool}
                    </span>
                  </div>
                  <p className="text-xs text-stone-400 truncate">{p.tagline}</p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-xl font-black" style={{ color: p.accent }}>{p.scores.overall.toFixed(1)}</div>
                  <div className="text-xs text-stone-400">/5</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

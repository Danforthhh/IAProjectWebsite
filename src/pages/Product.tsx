import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductVisual from '../components/ProductVisual'

const serif = { fontFamily: "'DM Serif Display', Georgia, serif" }

export default function Product() {
  const [qty, setQty] = useState(1)

  return (
    <div className="bg-[#FAFAF7]">

      {/* ── Product Hero ─────────────────────────────────────── */}
      <section className="pt-24 pb-0 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Visual */}
            <div className="flex flex-col items-center sticky top-24">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-12 w-full flex items-center justify-center">
                <ProductVisual size="lg" />
              </div>
              <div className="flex gap-2 mt-4">
                {['40g', 'Mono-portion', '100% Végétal'].map(tag => (
                  <span key={tag} className="text-xs bg-stone-100 text-stone-600 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="py-4">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-orange-500 block mb-3">Chips de lentilles</span>
              <h1 className="text-5xl md:text-6xl italic text-stone-900 mb-2" style={serif}>Smash'd</h1>
              <p className="text-xl text-stone-500 font-light mb-6">Saveur Crème Sure & Oignon</p>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-black text-stone-900">$3.75</span>
                <span className="text-sm text-stone-400">/ 40g</span>
                <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">En stock</span>
              </div>

              <p className="text-stone-600 leading-relaxed mb-8">
                La seule chip qui reproduit exactement la saveur crème sure & oignon sans le moindre produit laitier.
                Base lentilles ultra-croustillante, séchée à l'air. Pas de friture.
              </p>

              {/* Qty + CTA */}
              <div id="order" className="bg-stone-50 rounded-2xl p-5 mb-6 border border-stone-100">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium text-stone-700">Quantité</span>
                  <div className="flex items-center border border-stone-200 rounded-full overflow-hidden">
                    <button
                      onClick={() => setQty(q => Math.max(1, q - 1))}
                      className="w-9 h-9 flex items-center justify-center text-stone-500 hover:bg-stone-100 transition-colors"
                    >−</button>
                    <span className="w-10 text-center text-sm font-semibold">{qty}</span>
                    <button
                      onClick={() => setQty(q => q + 1)}
                      className="w-9 h-9 flex items-center justify-center text-stone-500 hover:bg-stone-100 transition-colors"
                    >+</button>
                  </div>
                  <span className="text-sm text-stone-400">${(qty * 3.75).toFixed(2)}</span>
                </div>
                <Link
                  to="/checkout"
                  state={{ qty, price: qty * 3.75 }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-white transition-colors"
                  style={{ backgroundColor: '#ea580c' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f97316')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ea580c')}
                >
                  Commander · ${(qty * 3.75).toFixed(2)}
                </Link>
              </div>

              {/* Key claims */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '🌱', label: '100% Végétal', desc: 'Aucun ingrédient animal' },
                  { icon: '🔥', label: 'Sans friture', desc: 'Air-dried process' },
                  { icon: '💪', label: 'Lentilles', desc: 'Source de protéines' },
                  { icon: '⏱', label: '9 mois', desc: 'Durée de conservation' },
                ].map(c => (
                  <div key={c.label} className="flex items-center gap-2 p-3 rounded-xl border border-stone-100 bg-white">
                    <span className="text-lg">{c.icon}</span>
                    <div>
                      <div className="text-xs font-bold text-stone-800">{c.label}</div>
                      <div className="text-xs text-stone-400">{c.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Formulation détaillée ─────────────────────────────── */}
      <section className="py-20 bg-[#FAFAF7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-orange-500 block mb-4">Transparence totale</span>
            <h2 className="text-4xl italic text-stone-900" style={serif}>Ce qu'il y a dedans</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">

            {/* Ingredients */}
            <div className="bg-white rounded-2xl p-6 border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-4">Ingrédients</h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                <strong>Farine de lentilles corail finement moulue</strong>, fécule de tapioca, huile de tournesol pressée à froid,
                levure nutritionnelle, poudre d'oignon déshydratée, poudre d'ail, acide citrique (E330), sel marin.
              </p>
              <p className="text-xs text-stone-400">
                Sans gluten · Sans lactose · Sans œufs · Convient aux végétaliens
              </p>
            </div>

            {/* Nutrition */}
            <div className="bg-white rounded-2xl p-6 border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-4">Valeurs nutritionnelles <span className="font-normal text-stone-400">pour 40g</span></h3>
              <div className="space-y-2">
                {[
                  { label: 'Énergie', val: '182 kcal', sub: true },
                  { label: 'Glucides', val: '22g', sub: false },
                  { label: '  dont sucres', val: '1.2g', sub: true },
                  { label: 'Protéines', val: '7g', sub: false },
                  { label: 'Lipides', val: '7g', sub: false },
                  { label: '  dont saturés', val: '0.8g', sub: true },
                  { label: 'Fibres', val: '3.5g', sub: false },
                  { label: 'Sel', val: '0.6g', sub: false },
                ].map(n => (
                  <div key={n.label} className={`flex justify-between py-1 border-b border-stone-50 last:border-0 ${n.sub ? 'pl-4 text-stone-400' : ''}`}>
                    <span className="text-sm text-stone-600">{n.label}</span>
                    <span className="text-sm font-semibold text-stone-800">{n.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="py-20 bg-stone-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-orange-400 block mb-4">Processus de fabrication</span>
            <h2 className="text-4xl italic" style={serif}>Comment on fabrique Smash'd</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Extrusion thermique', desc: 'Mélange farine de lentilles + tapioca extrudé à chaud via vis bi-vis. Forme et texture obtenues en une seule étape.' },
              { step: '02', title: 'Découpe & formage', desc: 'Les chips sont découpées à la sortie de l\'extrudeuse à la forme et l\'épaisseur cibles.' },
              { step: '03', title: 'Séchage air pulsé', desc: 'Tunnel de séchage continu, élimine l\'humidité résiduelle sans friture. Texture croustillante.' },
              { step: '04', title: 'Enrobage arômes', desc: 'Tambour d\'enrobage : application de l\'huile + levure nutritionnelle + épices sur toute la surface.' },
            ].map(s => (
              <div key={s.step} className="bg-white/5 border border-white/8 rounded-2xl p-5">
                <div className="text-3xl font-black text-white/10 mb-2">{s.step}</div>
                <h4 className="font-bold mb-2">{s.title}</h4>
                <p className="text-sm text-stone-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

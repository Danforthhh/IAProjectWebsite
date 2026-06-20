import { Link } from 'react-router-dom'
import ProductVisual from '../components/ProductVisual'

const serif = { fontFamily: "'DM Serif Display', Georgia, serif" }

function Placeholder({ step, title }: { step: string; title: string }) {
  return (
    <div className="border-2 border-dashed border-brand-200 bg-brand-50/40 rounded-2xl p-8 text-center">
      <div className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-2">{step}</div>
      <div className="text-lg font-semibold text-stone-400 italic mb-1" style={serif}>{title}</div>
      <p className="text-sm text-stone-400">Cette section sera complétée une fois les informations disponibles.</p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="bg-[#FAFAF7]">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0F0D0A] text-white min-h-screen flex flex-col">
        {/* Lentil texture background */}
        <img
          src={`${import.meta.env.BASE_URL}hero-lentils.jpg`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.28]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_50%,rgba(212,64,8,0.22),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_30%,rgba(212,64,8,0.08),transparent)]" />

        <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 md:px-12 pt-40 pb-12">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-brand-500 mb-8">
            100% Plant-Based · Lentil Chips · Crème Sure & Oignon
          </p>

          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 flex-1">
            {/* Left */}
            <div className="flex-1 mb-12 lg:mb-0">
              <h1 className="leading-[0.9] tracking-tight mb-6" style={serif}>
                <span className="block text-[clamp(4rem,11vw,9rem)] text-white">The chip</span>
                <span
                  className="block text-[clamp(4rem,11vw,9rem)] italic"
                  style={{ color: '#eb5215' }}
                >
                  they forgot
                </span>
                <span className="block text-[clamp(4rem,11vw,9rem)] text-white">to make.</span>
              </h1>
              <p className="text-base md:text-xl text-stone-300 max-w-lg leading-relaxed font-light mb-8">
                Smash'd est la première chip 100% végétale qui reproduit exactement la saveur crème sure & oignon,
                sans produits laitiers ni friture. À base de lentilles.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/product"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-full transition-all"
                  style={{ backgroundColor: '#d44008', color: 'white' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#eb5215')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#d44008')}
                >
                  Découvrir le produit
                </Link>
                <Link
                  to="/checkout"
                  className="inline-flex items-center gap-2 text-sm font-medium px-7 py-3.5 rounded-full bg-white/8 hover:bg-white/14 border border-white/12 transition-colors"
                >
                  Commander
                </Link>
              </div>
            </div>

            {/* Right — product visual */}
            <div className="flex justify-center lg:justify-end shrink-0">
              <div className="relative">
                <ProductVisual size="lg" />
                {/* Score badge */}
                <div
                  className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-white text-stone-900 flex flex-col items-center justify-center shadow-lg"
                >
                  <span className="text-lg font-black leading-none" style={{ color: '#d44008' }}>4.7</span>
                  <span className="text-[9px] text-stone-400 font-medium">/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key stats */}
          <div className="mt-12 pt-8 border-t border-white/8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: '100%', label: 'Végétal' },
              { val: '4.7', label: 'Score viabilité' },
              { val: '+47%', label: 'Croissance segment' },
              { val: '0', label: 'Produit laitier' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-2xl font-black text-white" style={{ color: s.val === '0' ? '#d44008' : undefined }}>
                  {s.val}
                </div>
                <div className="text-xs text-stone-500 uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Notre Produit (teaser) ────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-500 block mb-4">Le Produit</span>
              <h2 className="text-5xl italic text-stone-900 mb-6 leading-tight" style={serif}>
                Du goût. Pas de compromis.
              </h2>
              <p className="text-stone-600 text-lg font-light leading-relaxed mb-6">
                Pringles et Ruffles imposent leurs dérivés laitiers. Smash'd ne le fait pas.
                Chip ultra-croustillante à base de farine de lentilles, séchée à l'air sans friture.
                La levure nutritionnelle reproduit l'umami du lait.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: '🌱', label: '100% végétal', desc: 'Aucun ingrédient d\'origine animale' },
                  { icon: '🔥', label: 'Sans friture', desc: 'Séchage par air pulsé continu' },
                  { icon: '💪', label: 'Base lentille', desc: 'Protéines + fibres naturelles' },
                  { icon: '😋', label: 'Saveur identique', desc: 'Crème sure & oignon, pour de vrai' },
                ].map(f => (
                  <div key={f.label} className="flex gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="text-xl shrink-0">{f.icon}</span>
                    <div>
                      <div className="text-sm font-semibold text-stone-800">{f.label}</div>
                      <div className="text-xs text-stone-500">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/product"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors"
              >
                Voir la fiche produit complète →
              </Link>
            </div>

            {/* Ingredients visual */}
            <div className="bg-stone-950 rounded-3xl p-8 text-white">
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-6">Formulation</p>
              {[
                { ing: 'Farine de lentilles', pct: '55%', role: 'Base & texture croustillante', color: '#d44008' },
                { ing: 'Fécule de tapioca', pct: '15%', role: 'Liant, légèreté', color: '#eb5215' },
                { ing: 'Levure nutritionnelle', pct: '8%', role: 'Umami végétal, sans lait', color: '#fb923c' },
                { ing: 'Poudre d\'oignon', pct: '6%', role: 'Arôme signature', color: '#fdba74' },
                { ing: 'Acide citrique', pct: '3%', role: 'Note crème sure', color: '#fed7aa' },
              ].map(item => (
                <div key={item.ing} className="mb-4 last:mb-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-sm font-medium">{item.ing}</span>
                    <span className="text-xs font-bold" style={{ color: item.color }}>{item.pct}</span>
                  </div>
                  <div className="h-1 bg-white/8 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: item.pct, backgroundColor: item.color }} />
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5">{item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Notre Vision ─────────────────────────────────────── */}
      <section className="py-24 bg-brand-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-500 block mb-4">Notre Vision</span>
            <h2 className="text-5xl italic text-stone-900 mb-4" style={serif}>Rendre le végétal irrésistible</h2>
            <p className="text-stone-500 max-w-xl mx-auto text-lg font-light">
              Les chips végétales ont progressé de +47% entre 2019 et 2023.
              Aucun acteur majeur ne propose cette saveur en version végétale. C'est ce que Smash'd change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { stat: '+47%', label: 'Croissance chips végétales', period: '2019–2023' },
              { stat: '0', label: 'Concurrent végétal direct', period: 'Saveur crème sure & oignon' },
              { stat: '5.0', label: 'Score différenciation', period: 'Note maximale' },
            ].map(s => (
              <div key={s.label} className="bg-white rounded-2xl p-6 text-center border border-brand-100">
                <div className="text-4xl font-black text-brand-500 mb-1">{s.stat}</div>
                <div className="font-semibold text-stone-800 mb-0.5">{s.label}</div>
                <div className="text-xs text-stone-400">{s.period}</div>
              </div>
            ))}
          </div>

          {/* Step 5 — CrunchLab */}
          <div className="bg-stone-950 rounded-3xl p-8 md:p-10 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-400 block mb-3">Produit par</span>
                <img
                  src={`${import.meta.env.BASE_URL}crunchlab-logo.png`}
                  alt="CrunchLab"
                  className="h-24 w-auto drop-shadow-lg"
                />
              </div>
              <div className="flex gap-3 flex-wrap">
                {['100% Végétal', 'Anti-austérité', 'Science du croustillant'].map(tag => (
                  <span key={tag} className="text-xs border border-brand-500/40 text-brand-400 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Notre philosophie</h4>
                <p className="text-sm text-stone-400 leading-relaxed">
                  CrunchLab produit des snacks gourmands sans compromis. Là où la plupart des marques végétales sacrifient le goût au nom de la santé, CrunchLab fait le choix inverse : le plaisir immédiat d'abord. L'anti-snack austère.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Modèle de fabrication</h4>
                <p className="text-sm text-stone-400 leading-relaxed">
                  Production sous-traitée auprès de co-manufacturers spécialisés en extrusion thermique et séchage par air pulsé. Procédés standards, facilement scalables, qui permettent de rester agiles sans investir en capex industriel.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Pringles', note: 'Contient lactosérum', icon: '✗' },
                { label: 'Ruffles', note: 'Contient poudre de lait', icon: '✗' },
                { label: 'Smash\'d', note: '100% végétal, saveur identique', icon: '✓' },
                { label: 'Marché cible', note: 'Flexitariens & lactose-intolérants', icon: '→' },
              ].map(c => (
                <div key={c.label} className={`rounded-xl p-3 border ${c.icon === '✓' ? 'border-brand-500/40 bg-brand-500/8' : c.icon === '→' ? 'border-white/10 bg-white/4' : 'border-white/8 bg-white/3'}`}>
                  <div className={`text-xs font-bold mb-1 ${c.icon === '✓' ? 'text-brand-400' : c.icon === '→' ? 'text-stone-300' : 'text-stone-500'}`}>{c.icon} {c.label}</div>
                  <div className="text-xs text-stone-500">{c.note}</div>
                </div>
              ))}
            </div>

            {/* Manufacturers */}
            <div className="mt-8 pt-8 border-t border-white/8">
              <h4 className="text-sm font-semibold text-white mb-5">Partenaires de fabrication potentiels</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {/* Frankie's Organic — recommended */}
                <div className="rounded-2xl p-5 border-2 border-brand-500/50 bg-brand-500/8 relative">
                  <div className="absolute -top-3 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-500 text-white px-2.5 py-1 rounded-full">
                      Recommandé
                    </span>
                  </div>
                  <div className="flex items-start justify-between mb-3 mt-1">
                    <div>
                      <div className="text-sm font-bold text-white">Frankie's Organic</div>
                      <div className="text-xs text-stone-400 mt-0.5">Aliments Biologiques Frankie inc.</div>
                    </div>
                    <div className="text-brand-400 text-xs font-bold shrink-0">⭐⭐⭐⭐⭐</div>
                  </div>
                  <div className="space-y-1.5 text-xs text-stone-400 mb-4">
                    <div className="flex items-start gap-1.5"><span className="text-brand-400 mt-0.5 shrink-0">📍</span>2060 rue Michelin, Laval, QC H7L 5C2</div>
                    <div className="flex items-start gap-1.5"><span className="text-brand-400 mt-0.5 shrink-0">🌐</span>frankiesorganic.ca</div>
                    <div className="flex items-start gap-1.5"><span className="text-brand-400 mt-0.5 shrink-0">✓</span>Certifié bio · Sans gluten · Sans OGM</div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {['Extrusion thermique', 'Robotisation', 'Private label'].map(t => (
                      <span key={t} className="text-[10px] bg-brand-500/20 text-brand-300 px-2 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Néo Chips */}
                <div className="rounded-2xl p-5 border border-white/10 bg-white/4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-sm font-bold text-white">Néo Chips</div>
                      <div className="text-xs text-stone-400 mt-0.5">Startup économie circulaire</div>
                    </div>
                    <div className="text-yellow-500/60 text-xs font-bold shrink-0">⭐⭐⭐</div>
                  </div>
                  <div className="space-y-1.5 text-xs text-stone-400 mb-4">
                    <div className="flex items-start gap-1.5"><span className="text-stone-500 mt-0.5 shrink-0">📍</span>4395 av Beaudry, Saint-Hyacinthe, QC J2S 8W2</div>
                    <div className="flex items-start gap-1.5"><span className="text-stone-500 mt-0.5 shrink-0">📞</span>(418) 730-3589</div>
                    <div className="flex items-start gap-1.5"><span className="text-stone-500 mt-0.5 shrink-0">✉</span>jerome@neochips.ca</div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {['Lyophilisation', 'Valorisation', 'Végan'].map(t => (
                      <span key={t} className="text-[10px] bg-white/8 text-stone-400 px-2 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Vibe Foods */}
                <div className="rounded-2xl p-5 border border-white/10 bg-white/4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-sm font-bold text-white">Vibe Foods</div>
                      <div className="text-xs text-stone-400 mt-0.5">Fabricant artisanal chips végétales</div>
                    </div>
                    <div className="text-yellow-500/60 text-xs font-bold shrink-0">⭐⭐</div>
                  </div>
                  <div className="space-y-1.5 text-xs text-stone-400 mb-4">
                    <div className="flex items-start gap-1.5"><span className="text-stone-500 mt-0.5 shrink-0">📍</span>Montréal, QC H4N 2R9</div>
                    <div className="flex items-start gap-1.5"><span className="text-stone-500 mt-0.5 shrink-0">✉</span>info@vibefoods.ca</div>
                    <div className="flex items-start gap-1.5"><span className="text-stone-500 mt-0.5 shrink-0">🌐</span>vibefoods.ca</div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {['Déshydratation', 'Artisanal', 'Co-développement'].map(t => (
                      <span key={t} className="text-[10px] bg-white/8 text-stone-400 px-2 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Notre Cible & Packaging ───────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-500 block mb-4">Notre Cible & Packaging</span>
            <h2 className="text-5xl italic text-stone-900 mb-4" style={serif}>Pour qui, dans quel emballage</h2>
          </div>

          {/* Partial known info */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-3 flex items-center gap-2">
                <span>🎯</span> Profil cible (estimé)
              </h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-start gap-2"><span className="text-brand-400 mt-0.5">•</span> Flexitariens & consommateurs lactose-intolérants</li>
                <li className="flex items-start gap-2"><span className="text-brand-400 mt-0.5">•</span> 18–35 ans, attentifs à la composition des produits</li>
                <li className="flex items-start gap-2"><span className="text-brand-400 mt-0.5">•</span> Amateurs de snacks gourmands, sans produits d'origine animale</li>
                <li className="flex items-start gap-2"><span className="text-brand-400 mt-0.5">•</span> Achat en épicerie fine, circuits bio, e-commerce</li>
              </ul>
            </div>
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-3 flex items-center gap-2">
                <span>📦</span> Packaging (estimé)
              </h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-start gap-2"><span className="text-brand-400 mt-0.5">•</span> Sachet mono-portion 40g, format nomade</li>
                <li className="flex items-start gap-2"><span className="text-brand-400 mt-0.5">•</span> Identité visuelle orange vif + vert végétal</li>
                <li className="flex items-start gap-2"><span className="text-brand-400 mt-0.5">•</span> Claims: 100% Végétal · Sans friture · Source de protéines</li>
                <li className="flex items-start gap-2"><span className="text-brand-400 mt-0.5">•</span> Clean label — liste d'ingrédients courte, lisible</li>
              </ul>
            </div>
          </div>

          <Placeholder step="Étape 6 — À venir" title="Persona détaillé & design packaging final" />
        </div>
      </section>

      {/* ── Campagne Marketing ────────────────────────────────── */}
      <section className="py-24 bg-stone-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-400 block mb-4">Campagne Marketing</span>
            <h2 className="text-5xl italic mb-4" style={serif}>Lancer la marque</h2>
            <p className="text-stone-400 max-w-xl mx-auto font-light">
              Stratégie de lancement, canaux, messages clés, et plan de campagne.
            </p>
          </div>

          {/* Known positioning */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              { icon: '⚡', title: 'Message central', desc: '"The chip they forgot to make" : adresse le vide laissé par Pringles & Ruffles sur le segment végétal.' },
              { icon: '📱', title: 'Canaux estimés', desc: 'D2C e-commerce + épiceries fine & bio + TikTok/Instagram (contenu UGC, challenge saveur).' },
              { icon: '🤝', title: 'Partenaires potentiels', desc: 'Influenceurs vegan food, box d\'abonnement snack, distributeurs bio indépendants.' },
            ].map(c => (
              <div key={c.title} className="bg-white/5 border border-white/8 rounded-2xl p-6">
                <div className="text-2xl mb-3">{c.icon}</div>
                <div className="font-semibold mb-2">{c.title}</div>
                <p className="text-sm text-stone-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <Placeholder step="Étape 7 — À venir" title="Plan de campagne complet, budget, timeline, créatifs" />
        </div>
      </section>

    </div>
  )
}

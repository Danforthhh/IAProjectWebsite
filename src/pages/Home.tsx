import { Link } from 'react-router-dom'
import ProductVisual from '../components/ProductVisual'

const serif = { fontFamily: "'DM Serif Display', Georgia, serif" }


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
          className="absolute inset-0 w-full h-full object-cover opacity-[0.42]"
          style={{ objectPosition: 'center 30%' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_50%,rgba(212,64,8,0.22),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_30%,rgba(212,64,8,0.08),transparent)]" />

        <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 md:px-12 pt-32 pb-8">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-brand-500 mb-8">
            100% Végétal · Chips de lentilles · Crème sure & oignon
          </p>

          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 flex-1">
            {/* Left */}
            <div className="flex-1 mb-12 lg:mb-0">
              <h1 className="leading-[0.9] tracking-tight mb-6" style={serif}>
                <span className="block text-[clamp(3.5rem,8vw,7rem)] text-white">Le crunch</span>
                <span
                  className="block text-[clamp(3.5rem,8vw,7rem)] italic"
                  style={{ color: '#eb5215' }}
                >
                  sans
                </span>
                <span className="block text-[clamp(3.5rem,8vw,7rem)] text-white">compromis.</span>
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
              <ProductVisual size="lg" />
            </div>
          </div>

          {/* Key stats */}
          <div className="mt-12 pt-8 border-t border-white/8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: '100%', label: 'Végétal' },
              { val: '6g', label: 'Protéines / portion' },
              { val: '12 mois', label: 'Conservation' },
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
              { stat: '0', label: 'Concurrent végétal direct', period: 'Saveur crème sure & oignon' },
              { stat: '6g', label: 'Protéines par portion', period: 'Base lentilles corail' },
              { stat: '100%', label: 'Végétal & sans lactose', period: 'Aucun produit laitier' },
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
                <span className="text-sm font-medium uppercase tracking-[0.15em] text-brand-400 block mb-3">Produit par</span>
                <img
                  src={`${import.meta.env.BASE_URL}crunchlab-logo.png`}
                  alt="CrunchLab"
                  className="h-32 w-auto drop-shadow-lg"
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
                  CrunchLab travaille avec des partenaires sélectionnés pour leurs certifications bio et leurs standards qualité. Chaque lot est traçable de la matière première au sachet — pour que vous sachiez exactement ce que vous mangez.
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

            {/* Manufacturer */}
            <div className="mt-8 pt-8 border-t border-white/8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="shrink-0">
                  <span className="text-sm font-medium uppercase tracking-[0.15em] text-brand-400 block mb-2">Partenaire de fabrication</span>
                  <div className="text-2xl font-bold text-white">Frankie's Organic</div>
                  <div className="text-sm text-stone-400">Aliments Biologiques Frankie inc.</div>
                  <div className="space-y-1.5 text-xs text-stone-400 mt-4">
                    <div className="flex items-center gap-2"><span className="text-brand-400">📍</span>2060 rue Michelin, Laval, QC H7L 5C2</div>
                    <div className="flex items-center gap-2"><span className="text-brand-400">🌐</span>frankiesorganic.ca</div>
                    <div className="flex items-center gap-2"><span className="text-brand-400">✓</span>Certifié bio · Sans gluten · Sans OGM</div>
                  </div>
                </div>
                <div className="flex-1 grid sm:grid-cols-2 gap-3">
                  {[
                    { icon: '🌿', title: 'Certifié bio, sans gluten, sans OGM', desc: 'Certifications reconnues par la grande distribution et les épiceries fines — accès facilité aux rayons santé et bio.' },
                    { icon: '📋', title: 'Clean label garanti', desc: 'Liste d\'ingrédients courte et lisible, conforme aux attentes des acheteurs soucieux de transparence.' },
                    { icon: '🔍', title: 'Traçabilité de bout en bout', desc: 'Chaque lot documenté de la matière première au produit fini. Fiches techniques et certificats d\'analyse disponibles sur demande.' },
                    { icon: '✅', title: 'Sécurité alimentaire certifiée', desc: 'HACCP en place, zéro contamination croisée avec allergènes non déclarés. Documentation lot disponible à chaque commande.' },
                  ].map(r => (
                    <div key={r.title} className="bg-white/5 border border-white/8 rounded-xl p-4">
                      <div className="text-base mb-1">{r.icon}</div>
                      <div className="text-xs font-semibold text-white mb-1">{r.title}</div>
                      <div className="text-xs text-stone-500 leading-relaxed">{r.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Témoignages ──────────────────────────────────────── */}
      <section
        className="py-24 text-white"
        style={{ background: 'radial-gradient(ellipse 110% 70% at 8% 25%, rgba(212,64,8,0.09) 0%, transparent 55%), radial-gradient(ellipse 55% 60% at 92% 85%, rgba(251,146,60,0.06) 0%, transparent 50%), #0a0807' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-400 block mb-4">Ils ont goûté</span>
            <h2 className="text-4xl italic text-white" style={serif}>Ce qu'ils en pensent.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { quote: "Crème sure & oignon sans lactose, c'est EXACTEMENT ce que je cherche depuis 10 ans. Je l'achète immédiatement.", name: 'Aïcha M.', role: 'Designer UX · Toronto', initials: 'AM', highlight: true },
              { quote: "Enfin une chip végane qui ne ressemble pas à du carton bio. La couleur orange m'attire en rayon.", name: 'Claire L.', role: 'Gestionnaire de projet · MTL', initials: 'CL', highlight: false },
              { quote: "Liste d'ingrédients courte, c'est le critère n°1. Lentilles, oignon, levure nutritionnelle — je comprends tout.", name: 'Mathieu T.', role: 'Développeur · Québec', initials: 'MT', highlight: false },
              { quote: "Le fait qu'il y ait des lentilles me rassure — c'est un vrai aliment, pas une poudre transformée.", name: 'Valérie R.', role: 'Infirmière · Sherbrooke', initials: 'VR', highlight: false },
              { quote: "6 g de protéines pour 45 g, c'est mieux que des chips classiques. Ça peut entrer dans ma journée.", name: 'Derek K.', role: 'Consultant crossfit · Vancouver', initials: 'DK', highlight: false },
              { quote: "Le prix premium ne me dérange pas. Je paie pour la qualité et l'éthique.", name: 'Rachel B.', role: 'Avocate · Westmount', initials: 'RB', highlight: false },
            ].map(t => (
              <div
                key={t.initials}
                className={`rounded-2xl p-6 border ${t.highlight ? 'border-brand-500/50 bg-brand-500/8' : 'border-white/8 bg-white/4'}`}
              >
                <p className={`text-sm leading-relaxed mb-5 ${t.highlight ? 'text-white' : 'text-stone-300'}`}>
                  « {t.quote} »
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${t.highlight ? 'bg-brand-500 text-white' : 'bg-white/10 text-stone-400'}`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">{t.name}</div>
                    <div className="text-[11px] text-stone-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pour qui ──────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-500 block mb-4">Pour tout le monde</span>
          <h2 className="text-5xl italic text-stone-900 mb-6" style={serif}>Une chip pour tous — et surtout pour eux.</h2>
          <p className="text-stone-500 text-lg font-light max-w-xl mx-auto mb-4 leading-relaxed">
            Pensée pour les <strong className="text-stone-700">flexitariens et les intolérants au lactose</strong> — la seule chip crème sure & oignon sans produits laitiers.
          </p>
          <p className="text-stone-400 text-base font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Mais si vous aimez juste les bonnes chips, vous êtes les bienvenus aussi.
          </p>
          <Link
            to="/checkout"
            className="inline-flex items-center gap-2 text-sm font-semibold px-8 py-4 rounded-full text-white transition-all"
            style={{ backgroundColor: '#d44008' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#eb5215')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#d44008')}
          >
            Commander maintenant
          </Link>
        </div>
      </section>

    </div>
  )
}


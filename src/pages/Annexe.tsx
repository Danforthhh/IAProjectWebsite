import Exercise from '../components/Exercise'
import Products from '../components/Products'
import Analysis from '../components/Analysis'
import Reflection from '../components/Reflection'

const serif = { fontFamily: "'DM Serif Display', Georgia, serif" }

const manufacturers = [
  {
    name: "Frankie's Organic",
    sub: 'Aliments Biologiques Frankie inc.',
    location: '2060 rue Michelin, Laval, QC H7L 5C2',
    contact: 'frankiesorganic.ca',
    type: 'Collations extrudées et emballées',
    tech: 'Extrusion thermique, robotisation',
    scale: 5,
    compat: 'Très élevée',
    chosen: true,
    tags: ['Certifié bio', 'Sans gluten', 'Sans OGM', 'Private label'],
    reason: 'Maîtrise de l\'extrusion, capacité de sous-traitance, certifications alignées avec le clean label de Smash\'d, infrastructure déjà financée pour la montée en volume.',
  },
  {
    name: 'Néo Chips',
    sub: 'Startup économie circulaire',
    location: '4395 av Beaudry, Saint-Hyacinthe, QC J2S 8W2',
    contact: '(418) 730-3589 · jerome@neochips.ca',
    type: 'Chips de fruits revalorisés',
    tech: 'Lyophilisation',
    scale: 3,
    compat: 'Moyenne',
    chosen: false,
    tags: ['Végan', 'Sans OGM', 'Économie circulaire'],
    reason: 'Approche innovante et durable, mais technologie de lyophilisation non adaptée à l\'extrusion de lentilles.',
  },
  {
    name: 'Vibe Foods',
    sub: 'Fabricant artisanal chips végétales',
    location: 'Montréal, QC H4N 2R9',
    contact: 'info@vibefoods.ca · vibefoods.ca',
    type: 'Chips végétales artisanales',
    tech: 'Déshydratation basse température',
    scale: 2,
    compat: 'Co-développement',
    chosen: false,
    tags: ['Artisanal', 'Végan', 'Sans OGM'],
    reason: 'Pertinent pour tester des saveurs ou procédés, mais capacité industrielle insuffisante pour une mise à l\'échelle.',
  },
]

const logos = [
  { file: 'logo-v1.png', label: 'V1 — Wordmark simple', desc: 'Typographie noir/vert, feuille. Minimaliste, adapté fonds clairs.' },
  { file: 'logo-v2.png', label: 'V2 — Chip + beaker doré', desc: 'Illustration or sur fond transparent. Première direction "labo".' },
  { file: 'logo-v3.png', label: 'V3 — Orange vif', desc: 'Version épurée orange vif. Fort contraste, lecture claire.' },
  { file: 'logo-v4.png', label: 'V4 — Illustré coloré', desc: 'Illustration détaillée avec tagline "Science du croustillant."' },
  { file: 'logo-v5.png', label: 'V5 — Or premium ✓ Choisi', desc: '"L\'innovation gourmande." Version finale retenue — ton luxe, fond sombre.', chosen: true },
]

export default function Annexe() {
  return (
    <div>
      {/* Header */}
      <div className="bg-stone-950 text-white pt-24 pb-12 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400 block mb-4">Annexe MBA</span>
        <h1 className="text-4xl md:text-5xl italic mb-4" style={serif}>Exercice GenAI — Analyse comparative</h1>
        <p className="text-stone-400 max-w-xl mx-auto font-light">
          Les 5 concepts de snacks développés dans le cadre de l'exercice MBA "Building an AI First Snack Company",
          leurs scores de viabilité et la réflexion critique sur les outils GenAI utilisés.
        </p>
      </div>

      <Exercise />
      <Products />
      <Analysis />
      <Reflection />

      {/* ── Comparaison des fournisseurs ─────────────────────── */}
      <section className="py-20 bg-[#FAFAF7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-500 block mb-3">Tâche 5 — Fabrication</span>
            <h2 className="text-3xl italic text-stone-900" style={serif}>Comparaison des fournisseurs</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-4">
            {manufacturers.map(m => (
              <div key={m.name} className={`rounded-2xl p-6 border-2 relative ${m.chosen ? 'border-brand-400 bg-white shadow-lg' : 'border-stone-200 bg-white'}`}>
                {m.chosen && (
                  <div className="absolute -top-3 left-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-500 text-white px-3 py-1 rounded-full">Choisi</span>
                  </div>
                )}
                <div className="mt-1 mb-4">
                  <div className="font-bold text-stone-900 text-base">{m.name}</div>
                  <div className="text-xs text-stone-400">{m.sub}</div>
                </div>
                <div className="space-y-1.5 text-xs text-stone-500 mb-4">
                  <div className="flex gap-1.5"><span className="shrink-0">📍</span>{m.location}</div>
                  <div className="flex gap-1.5"><span className="shrink-0">📞</span>{m.contact}</div>
                  <div className="flex gap-1.5"><span className="shrink-0">⚙️</span>{m.tech}</div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-stone-400">Industrialisation :</span>
                  <span className="text-xs font-bold text-stone-700">{'⭐'.repeat(m.scale)}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {m.tags.map(t => (
                    <span key={t} className={`text-[10px] px-2 py-0.5 rounded-full ${m.chosen ? 'bg-brand-50 text-brand-600' : 'bg-stone-100 text-stone-500'}`}>{t}</span>
                  ))}
                </div>
                <p className="text-xs text-stone-500 leading-relaxed border-t border-stone-100 pt-3">{m.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Évolution du logo CrunchLab ──────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-500 block mb-3">Identité visuelle</span>
            <h2 className="text-3xl italic text-stone-900" style={serif}>Évolution du logo CrunchLab</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {logos.map(l => (
              <div key={l.file} className={`rounded-2xl border-2 overflow-hidden ${l.chosen ? 'border-brand-400 shadow-md' : 'border-stone-100'}`}>
                <div className="bg-stone-50 p-4 flex items-center justify-center h-32">
                  <img src={`${import.meta.env.BASE_URL}${l.file}`} alt={l.label} className="max-h-24 max-w-full object-contain" />
                </div>
                <div className="p-3">
                  <div className={`text-[11px] font-bold mb-1 ${l.chosen ? 'text-brand-600' : 'text-stone-700'}`}>{l.label}</div>
                  <div className="text-[10px] text-stone-400 leading-relaxed">{l.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

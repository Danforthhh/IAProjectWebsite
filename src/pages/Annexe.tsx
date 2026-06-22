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

      {/* ── Tâche 6 — Cible & Emballage ───────────────────────── */}
      <section className="py-24 bg-[#FAFAF7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-500 block mb-4">Tâche 6 — Cible & Emballage</span>
            <h2 className="text-4xl italic text-stone-900 mb-4" style={serif}>Pour qui, dans quel emballage</h2>
            <p className="text-stone-500 max-w-xl mx-auto font-light">
              Segment retenu : les <strong>flexitariens</strong> — réduisent viande et produits laitiers sans s'identifier comme végans stricts.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { val: '90%', label: 'de la demande végétale', sub: 'achetée par des omnivores & flexitariens (ProVeg)' },
              { val: '40%', label: 'des consommateurs EU', sub: 'se déclarent flexitariens ou végétariens' },
              { val: '25–40', label: 'ans', sub: 'cœur de cible Millennials urbains' },
              { val: '86%', label: 'des flexitariens', sub: 'veulent une étiquette courte et lisible (BENEO)' },
            ].map(s => (
              <div key={s.label} className="bg-white rounded-2xl p-4 border border-stone-100 text-center shadow-sm">
                <div className="text-2xl font-black text-brand-500 mb-0.5">{s.val}</div>
                <div className="text-xs font-semibold text-stone-800">{s.label}</div>
                <div className="text-[11px] text-stone-400 mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
              <h3 className="font-bold text-stone-900 mb-3">Profil cible</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-start gap-2"><span className="text-brand-400 mt-0.5">•</span>Flexitariens & intolérants au lactose — le produit résout un vrai problème</li>
                <li className="flex items-start gap-2"><span className="text-brand-400 mt-0.5">•</span>25–40 ans, urbains · 55 % des 24–29 ans américains sont flexitariens (Edlong)</li>
                <li className="flex items-start gap-2"><span className="text-brand-400 mt-0.5">•</span>Cherchent le plaisir gourmand, pas la santé austère — le goût reste l'attribut n°1</li>
                <li className="flex items-start gap-2"><span className="text-brand-400 mt-0.5">•</span>64 % apprécient tester de nouveaux aliments — early adopters naturels (FoodThink)</li>
                <li className="flex items-start gap-2"><span className="text-brand-400 mt-0.5">•</span>Distribution initiale : épiceries fines & bio, e-commerce · mass-market en phase 2</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
              <h3 className="font-bold text-stone-900 mb-3">Emballage</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-start gap-2"><span className="text-brand-400 mt-0.5">•</span>Sachet portion individuelle 45 g — film multicouche MAP à l'azote, 12 mois de conservation</li>
                <li className="flex items-start gap-2"><span className="text-brand-400 mt-0.5">•</span>Fond coral chaud (#D85A30) — signal plaisir, évite le vert « santé austère »</li>
                <li className="flex items-start gap-2"><span className="text-brand-400 mt-0.5">•</span>SMASH'D en héros visuel avec fissure typographique narrative (évoque le crunch)</li>
                <li className="flex items-start gap-2"><span className="text-brand-400 mt-0.5">•</span>Claims : 100% Végétal · Sans produits laitiers · 6 g protéines / 4 g fibres</li>
                <li className="flex items-start gap-2"><span className="text-brand-400 mt-0.5">•</span>Phase 2 : format partage 150 g pour capter les acheteurs familiaux</li>
              </ul>
            </div>
          </div>

          <h3 className="text-base font-semibold text-stone-700 mb-4">Panel consommateur — 4 personas clés</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                initials: 'AM', name: 'Aïcha M., 31 ans', role: 'Designer UX · Toronto', type: 'Cliente idéale',
                plus: "Crème sure & oignon sans lactose — exactement ce qu'elle cherche depuis 10 ans.",
                minus: 'Le crunch doit vraiment livrer — les versions véganes qu\'elle a essayées étaient molles.',
                highlight: true,
              },
              {
                initials: 'CL', name: 'Claire L., 29 ans', role: 'Gestionnaire de projet · MTL', type: 'Cliente secondaire',
                plus: 'Enfin une chip végane qui ne ressemble pas à du carton bio. Le design attire en rayon.',
                minus: "À 6 $, c'est cher pour 45 g — achat occasionnel, pas un staple quotidien.",
                highlight: false,
              },
              {
                initials: 'MT', name: 'Mathieu T., 34 ans', role: 'Développeur logiciel · Québec', type: 'Client secondaire',
                plus: "Liste d'ingrédients courte — critère n°1. Lentilles, oignon, levure : tout compréhensible.",
                minus: "« Smash'd » sonne trop ado — pas sûr d'aimer le ton de marque.",
                highlight: false,
              },
              {
                initials: 'SR', name: 'Sophie R., 26 ans', role: 'Étudiante marketing · MTL', type: 'Ambassadrice UGC',
                plus: 'Packaging super photogénique — elle le posterait dans une story juste pour l\'esthétique.',
                minus: 'Budget serré — produit "try" une fois, pas un staple régulier.',
                highlight: false,
              },
            ].map(p => (
              <div key={p.initials} className={`rounded-2xl p-4 border-2 ${p.highlight ? 'border-brand-400 bg-brand-50' : 'border-stone-100 bg-white'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${p.highlight ? 'bg-brand-500 text-white' : 'bg-stone-200 text-stone-600'}`}>{p.initials}</div>
                  <div>
                    <div className="text-xs font-bold text-stone-800">{p.name}</div>
                    <div className="text-[10px] text-stone-400">{p.role}</div>
                  </div>
                </div>
                <div className={`text-[10px] font-semibold mb-2 uppercase tracking-wider ${p.highlight ? 'text-brand-600' : 'text-stone-400'}`}>{p.type}</div>
                <div className="text-[11px] text-stone-700 mb-1.5"><span className="text-green-600 font-bold mr-1">+</span>{p.plus}</div>
                <div className="text-[11px] text-stone-500"><span className="text-red-400 font-bold mr-1">−</span>{p.minus}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tâche 7 — Lancement & Campagne ───────────────────── */}
      <section className="py-24 bg-stone-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-400 block mb-4">Tâche 7 — Lancement & Campagne</span>
            <h2 className="text-4xl italic mb-4" style={serif}>Lancer la marque</h2>
            <p className="text-stone-400 max-w-xl mx-auto font-light">
              Phase pilote à Los Angeles — la ville la plus alignée avec le positionnement premium flexitarien de Smash'd.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-brand-500/10 border border-brand-500/30 rounded-2xl p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-400 mb-3">Slogan</p>
              <p className="text-3xl italic font-black text-white leading-tight" style={serif}>« Le crunch sans compromis. »</p>
              <p className="text-sm text-stone-400 mt-3 leading-relaxed">Pas de compromis sur le goût, pas de compromis sur les valeurs végétales. Inverse du discours « santé d'abord » des concurrents traditionnels.</p>
            </div>
            <div className="bg-white/5 border border-white/8 rounded-2xl p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-400 mb-3">Ville pilote — Los Angeles</p>
              <ul className="space-y-2 text-sm text-stone-300">
                <li className="flex gap-2"><span className="text-brand-400 shrink-0">→</span>Densité maximale de Millennials flexitariens prêts pour un prix premium à 6 $</li>
                <li className="flex gap-2"><span className="text-brand-400 shrink-0">→</span>Culture épiceries spécialisées (Erewhon, Whole Foods) — circuit d'entrée naturel</li>
                <li className="flex gap-2"><span className="text-brand-400 shrink-0">→</span>Audience TikTok/Instagram très réceptive au design coral photogénique</li>
                <li className="flex gap-2"><span className="text-brand-400 shrink-0">→</span>Forte communauté d'intolérants au lactose — déclencheur d'achat immédiat</li>
              </ul>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { icon: '🛒', title: 'Retail premium', desc: "Épiceries indépendantes haut de gamme — Erewhon, Whole Foods Silver Lake / Santa Monica. Profils à fort pouvoir d'achat." },
              { icon: '📦', title: 'Vente en ligne & livraison rapide', desc: 'D2C + Gopuff (livraison rapide) + Thrive Market (écoresponsable). Millennials connectés et pressés.' },
              { icon: '📱', title: 'TikTok & Instagram Reels', desc: 'Micro-influenceurs foodies de LA. Tests de goût ASMR crunch. UGC authentique autour du design photogénique.' },
              { icon: '🎪', title: 'Sampling événementiel', desc: 'Marchés fermiers premium (Melrose, Santa Monica). Studios de fitness branchés. Faire goûter = lever le frein du prix.' },
            ].map(c => (
              <div key={c.title} className="bg-white/5 border border-white/8 rounded-2xl p-5">
                <div className="text-2xl mb-3">{c.icon}</div>
                <div className="font-semibold text-sm mb-2">{c.title}</div>
                <p className="text-xs text-stone-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/8 rounded-2xl p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-400 mb-2">Concept publicitaire — TikTok / Reels 30s</p>
            <h4 className="text-xl italic font-semibold text-white mb-6" style={serif}>« Le son de la liberté (sans lactose) »</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { time: '0–3s', label: "L'accroche", desc: 'Sachet coral ouvert, bruissement MAP. Texte : "Attendez... Crème sure & oignon ?! 😭"' },
                { time: '3–8s', label: 'La tension', desc: "Étiquette classique — LACTOSÉRUM en rouge. Voix off : \"Votre estomac déteste les laitiers ? On connaît l'histoire.\"" },
                { time: '8–15s', label: 'La révélation', desc: "Chips au ralenti. CRUNCH massif. Musique démarre. \"Bienvenue chez Smash'd. 100 % végétal.\"" },
                { time: '15–30s', label: 'Le CTA', desc: 'Pop-ups : "Sans laitiers ❌🥛 · Recette propre 🌿 · 6g Protéines 💪". Logo + slogan. Disponible chez Erewhon.' },
              ].map(s => (
                <div key={s.time} className="bg-white/5 rounded-xl p-4">
                  <div className="text-xs font-mono text-brand-400 mb-1">{s.time}</div>
                  <div className="text-xs font-bold text-white mb-1.5">{s.label}</div>
                  <p className="text-xs text-stone-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

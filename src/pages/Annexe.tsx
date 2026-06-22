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

          <div className="bg-white/5 border border-white/8 rounded-2xl p-6 md:p-8 mb-10">
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

          {/* ── Tâche 7.2 — Itération de la description produit ── */}
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-400 mb-6">Tâche 7.2 — Processus de rédaction marketing (itération IA)</p>
            <div className="space-y-4">
              {/* Draft 1 */}
              <div className="bg-white/4 border border-white/8 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-700 text-stone-300 px-2 py-0.5 rounded-full">Draft 1 — brut IA</span>
                </div>
                <p className="text-sm text-stone-400 leading-relaxed italic">
                  "Smash'd est une chip à base de lentilles, 100 % végétale, avec une saveur crème sure et oignon. Elle ne contient pas de produits laitiers et est fabriquée sans friture. C'est un snack sain pour les personnes qui veulent manger mieux tout en profitant d'une saveur classique. Disponible en sachets de 45 g."
                </p>
              </div>
              {/* Critique */}
              <div className="bg-red-900/15 border border-red-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-red-900/40 text-red-400 px-2 py-0.5 rounded-full">Auto-critique IA — faiblesses identifiées</span>
                </div>
                <ul className="space-y-2 text-xs text-stone-400">
                  <li className="flex gap-2"><span className="text-red-400 shrink-0">✗</span>Ton trop fonctionnel — liste de caractéristiques, pas d'émotion ni de désir</li>
                  <li className="flex gap-2"><span className="text-red-400 shrink-0">✗</span>"Manger mieux" active le registre santé austère — exactement ce que le positionnement rejette</li>
                  <li className="flex gap-2"><span className="text-red-400 shrink-0">✗</span>Absence de tension narrative — pas de problème résolu, pas de frustration soulagée</li>
                  <li className="flex gap-2"><span className="text-red-400 shrink-0">✗</span>Le mot "sain" est à bannir — il attire le mauvais segment (chercheurs de santé, pas de plaisir)</li>
                  <li className="flex gap-2"><span className="text-red-400 shrink-0">✗</span>Pas de voix de marque distinctive — pourrait décrire n'importe quel snack végétal</li>
                </ul>
              </div>
              {/* Draft final */}
              <div className="bg-brand-500/8 border border-brand-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-500 text-white px-2 py-0.5 rounded-full">Draft final — version retenue</span>
                </div>
                <p className="text-sm text-stone-200 leading-relaxed">
                  "Pringles en met du lactosérum. Ruffles de la poudre de lait. Vous ? Vous méritez le vrai crunch — sans les laitiers qui vont avec.
                  Smash'd, c'est la première chip crème sure & oignon 100 % végétale : base lentilles ultra-croustillante, séchée à l'air, aromatisée à la levure nutritionnelle et à l'oignon. Le résultat : exactement la saveur que vous connaissiez, sans le compromis que vous n'acceptez plus.
                  Six grammes de protéines. Une liste d'ingrédients que vous comprenez. Un crunch que vous entendez de l'autre bout de la pièce."
                </p>
              </div>
            </div>
          </div>

          {/* ── Tâche 7.3c — Mood Board ── */}
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-400 mb-2">Tâche 7.3c — Mood Board</p>
            <p className="text-xs text-stone-500 mb-6">Références visuelles destinées au directeur artistique de la campagne</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  category: 'Palette & couleur',
                  description: 'Fond coral chaud (#D85A30) contrastant avec blanc cassé crème. Accents charbon profond. Aucun vert — éviter le signal "santé austère". Référence : packaging Fly By Jing, Olipop.',
                  icon: '🎨',
                },
                {
                  category: 'Typographie',
                  description: 'Serif italique expressif pour le hero (DM Serif Display, Canela). Sans-serif condensé bold pour claims. Effet "fissure" ou "explosion" sur le mot SMASH\'D — évoque le crunch physique.',
                  icon: '🖋',
                },
                {
                  category: 'Food photography ASMR',
                  description: 'Gros plan macro sur texture lentille croustillante. Photo en lumière naturelle chaude, ombres douces. Chips en vol au-dessus du sachet ouvert — moment du crunch figé. Référence : compte @snackdad, Kettle Brand.',
                  icon: '📸',
                },
                {
                  category: 'Ambiance retail',
                  description: "Rayon épicerie Erewhon / Whole Foods haut de gamme — lumière chaude, bois clair, clients Millennials décontractés. Signal aspirationnel sans ostentation. Le sachet coral ressort naturellement sur fond beige.",
                  icon: '🛒',
                },
                {
                  category: 'UGC & TikTok',
                  description: "Cadrage vertical 9:16. Personne filmée de face, décontractée, première bouchée avec réaction authentique. Son CRUNCH amplifié. Texte superposé spontané. Référence : format \"taste test\" @HungryElephant.",
                  icon: '📱',
                },
                {
                  category: 'Lifestyle cible',
                  description: 'Espace de travail moderne, sac gym posé au sol, table marché fermier. La chip apparaît naturellement dans des moments de pause — pas en plat santé, pas en fast-food. Référence : Soylent, Lesser Evil.',
                  icon: '🌆',
                },
              ].map(m => (
                <div key={m.category} className="bg-white/5 border border-white/8 rounded-2xl p-5">
                  <div className="text-xl mb-2">{m.icon}</div>
                  <div className="text-xs font-bold text-brand-400 uppercase tracking-wider mb-2">{m.category}</div>
                  <p className="text-xs text-stone-400 leading-relaxed">{m.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Tâche 7.4 — Jingle ── */}
          <div className="bg-white/5 border border-white/8 rounded-2xl p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-400 mb-2">Tâche 7.4 — Jingle publicitaire</p>
            <p className="text-xs text-stone-500 mb-6">Paroles générées pour accompagner la campagne TikTok/Reels · Production audio recommandée : Suno / Udio</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">Paroles — version française</p>
                <div className="space-y-3 text-sm">
                  <div className="border-l-2 border-brand-500/40 pl-4">
                    <p className="text-stone-500 text-[10px] uppercase tracking-wider mb-1">Couplet</p>
                    <p className="text-stone-300 italic leading-relaxed">
                      "Crème sure et oignon — la saveur que t'adores,<br/>
                      Mais t'es pas pour les laitiers, on sait que t'en as marre.<br/>
                      Lentilles corail, levure et oignon doux,<br/>
                      Le crunch que t'attendais — il arrive chez vous."
                    </p>
                  </div>
                  <div className="border-l-2 border-brand-500 pl-4">
                    <p className="text-stone-500 text-[10px] uppercase tracking-wider mb-1">Refrain</p>
                    <p className="text-white font-semibold italic leading-relaxed">
                      "Smash'd — le crunch sans compromis,<br/>
                      100 % végétal, goût amplifié.<br/>
                      Smash'd — t'as pas à choisir,<br/>
                      Entre ce que tu aimes et ce en quoi tu crois."
                    </p>
                  </div>
                  <div className="border-l-2 border-white/10 pl-4">
                    <p className="text-stone-500 text-[10px] uppercase tracking-wider mb-1">Outro</p>
                    <p className="text-stone-500 italic leading-relaxed">
                      "Six grammes de protéines, liste propre, crunch net —<br/>
                      Smash'd. Sans compromis. Et c'est pas fini."
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">Notes de production</p>
                <ul className="space-y-3 text-xs text-stone-400">
                  <li className="flex gap-2"><span className="text-brand-400 shrink-0">♪</span>Tempo : 95–105 BPM · Genre : indie pop / électro-acoustique chaud</li>
                  <li className="flex gap-2"><span className="text-brand-400 shrink-0">♪</span>Instrument signature : crunch réel de chip intégré comme percussion (beat 1 et 3)</li>
                  <li className="flex gap-2"><span className="text-brand-400 shrink-0">♪</span>Voix : femme 25–30 ans, ton décontracté et direct — pas de voix "pub classique"</li>
                  <li className="flex gap-2"><span className="text-brand-400 shrink-0">♪</span>Version courte 6s pour bumper TikTok : refrain seul + crunch + logo</li>
                  <li className="flex gap-2"><span className="text-brand-400 shrink-0">♪</span>Production audio recommandée : Suno.ai ou Udio pour prototype sonore</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tâche 7.5 — Stratégie Marketing Consolidée ────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-500 block mb-3">Tâche 7.5 — Document stratégique</span>
            <h2 className="text-3xl italic text-stone-900" style={serif}>Stratégie Marketing — Smash'd</h2>
            <p className="text-stone-400 text-sm mt-2">Document synthèse destiné aux investisseurs et partenaires de distribution</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Segment & Positionnement */}
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-500 text-white text-xs flex items-center justify-center font-bold">1</span>
                Segment cible & positionnement
              </h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li><strong>Segment primaire :</strong> Flexitariens et intolérants au lactose, 25–40 ans, urbains, revenu médian+</li>
                <li><strong>Proposition de valeur :</strong> Seule chip crème sure & oignon sans produits laitiers — goût identique aux leaders, valeurs végétales sans austérité</li>
                <li><strong>Positionnement prix :</strong> 6,00 $ / 45 g — premium justifié (vs ~3,50 $ chips standard). Achat plaisir, pas substitut low-cost</li>
                <li><strong>Contre-positionnement :</strong> Anti-snack-santé austère. L'ennemi est Pringles, pas Whole Foods 365</li>
              </ul>
            </div>

            {/* Marché & opportunité */}
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-500 text-white text-xs flex items-center justify-center font-bold">2</span>
                Marché & opportunité
              </h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li><strong>+47 %</strong> de croissance segment chips végétales (2019–2023)</li>
                <li><strong>0 concurrent direct</strong> sur la saveur crème sure & oignon en version 100 % végétale</li>
                <li><strong>40 %</strong> des consommateurs EU se déclarent flexitariens ou végétariens (Euromonitor)</li>
                <li><strong>90 %</strong> de la demande végétale achetée par des omnivores et flexitariens — pas des vegans stricts (ProVeg)</li>
              </ul>
            </div>

            {/* Lancement & distribution */}
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-500 text-white text-xs flex items-center justify-center font-bold">3</span>
                Lancement & distribution — Phase 1
              </h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li><strong>Ville pilote :</strong> Los Angeles (densité flexitariens, culture Erewhon, communauté TikTok food)</li>
                <li><strong>Canal 1 :</strong> Retail premium — Erewhon, Whole Foods Silver Lake & Santa Monica</li>
                <li><strong>Canal 2 :</strong> D2C + Gopuff + Thrive Market</li>
                <li><strong>Canal 3 :</strong> TikTok / Instagram Reels — micro-influenceurs foodies (10k–150k abonnés)</li>
                <li><strong>Canal 4 :</strong> Sampling événementiel — marchés fermiers Melrose & Santa Monica, studios fitness</li>
                <li><strong>Phase 2 (M+6) :</strong> Expansion côte Est + Canada (Montréal, Toronto). Format partage 150 g</li>
              </ul>
            </div>

            {/* Budget & métriques */}
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-500 text-white text-xs flex items-center justify-center font-bold">4</span>
                Budget estimatif & métriques de succès
              </h3>
              <div className="space-y-3 text-sm text-stone-600">
                <div>
                  <p className="font-semibold text-stone-800 mb-1">Allocation budget lancement (Phase 1, 6 mois)</p>
                  <ul className="space-y-1 text-xs">
                    <li className="flex justify-between"><span>Référencement retail (slotting fees)</span><span className="font-mono">40 %</span></li>
                    <li className="flex justify-between"><span>Influenceurs & contenu social</span><span className="font-mono">30 %</span></li>
                    <li className="flex justify-between"><span>Sampling événementiel</span><span className="font-mono">20 %</span></li>
                    <li className="flex justify-between"><span>Publicité payante (TikTok Ads)</span><span className="font-mono">10 %</span></li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-stone-800 mb-1">KPIs — M+3</p>
                  <ul className="space-y-1 text-xs">
                    <li>Taux de réachat cible : ≥ 35 % (validation goût)</li>
                    <li>NPS cible : ≥ 50 (benchmark snacking premium)</li>
                    <li>Présence retail : ≥ 12 points de vente actifs à LA</li>
                    <li>UGC organique : ≥ 200 posts tagués #Smashdchips</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-stone-950 rounded-2xl p-6 md:p-8 text-white">
            <h3 className="font-bold mb-6 text-sm uppercase tracking-wider text-brand-400">Timeline de lancement</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { phase: 'M0–M2', title: 'Pré-lancement', items: ['Finalisation formule avec Frankie\'s Organic', 'Homologation emballage MAP', 'Référencement Erewhon & Whole Foods', 'Production lot pilote 500 kg'] },
                { phase: 'M3', title: 'Lancement LA', items: ['Mise en rayon J-Day', 'Activation influenceurs (10 créateurs)', 'Sampling Santa Monica Farmers Market', 'Campagne TikTok Ads 2 semaines'] },
                { phase: 'M4–M5', title: 'Amplification', items: ['Analyse taux réachat & NPS', 'Ajustements recette si nécessaire', 'Ajout canaux D2C & Gopuff', 'Contenu UGC — 2e vague influenceurs'] },
                { phase: 'M6+', title: 'Expansion', items: ['Côte Est (NYC, Boston)', 'Canada : MTL & Toronto', 'Format partage 150 g', 'Négociation distribution nationale'] },
              ].map(t => (
                <div key={t.phase} className="bg-white/5 border border-white/8 rounded-xl p-4">
                  <div className="text-xs font-mono text-brand-400 mb-1">{t.phase}</div>
                  <div className="text-sm font-bold text-white mb-3">{t.title}</div>
                  <ul className="space-y-1.5">
                    {t.items.map(item => (
                      <li key={item} className="text-xs text-stone-500 flex gap-1.5">
                        <span className="text-brand-500 shrink-0 mt-0.5">·</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

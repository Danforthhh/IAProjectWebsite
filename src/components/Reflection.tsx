const strengths = [
  {
    icon: '⚡',
    title: 'Vitesse de prototypage',
    desc: "En quelques heures, l'IA génère une fiche produit complète avec formulation, processus industriel et analyse marché — ce qui prendrait des semaines à une équipe R&D classique.",
  },
  {
    icon: '🔗',
    title: 'Connexions interdisciplinaires',
    desc: "L'IA opère simultanément dans la chimie alimentaire, le marketing, la logistique et la finance. Elle croise des données de marchés différents pour identifier des gaps invisibles à un seul expert.",
  },
  {
    icon: '📐',
    title: 'Structuration rigoureuse',
    desc: "Les fiches produites sont cohérentes, bien structurées et argumentées. L'IA force une pensée systématique là où une intuition humaine seule peut manquer de rigueur documentaire.",
  },
  {
    icon: '💡',
    title: 'Génération d\'alternatives rapides',
    desc: "Reformuler un concept, tester une variante d'ingrédient ou re-cibler un segment de marché prend quelques secondes — permettant une exploration large avant de converger.",
  },
]

const limitations = [
  {
    icon: '🔮',
    title: 'Hallucinations de chiffres',
    desc: "Certains chiffres de marché ou coûts industriels générés sont plausibles mais non vérifiés. L'IA invente des données avec la même confiance qu'elle cite des données réelles.",
    severity: 'high',
  },
  {
    icon: '📅',
    title: 'Données figées dans le temps',
    desc: "Le modèle ne connaît pas les tendances post-formation (nouveaux entrants, crises supply chain récentes). Les analyses de marché peuvent être obsolètes sans que l'IA le signale.",
    severity: 'high',
  },
  {
    icon: '👅',
    title: 'Absence d\'expérience sensorielle',
    desc: "L'IA ne peut pas goûter, sentir ni toucher. Les formulations peuvent être théoriquement correctes mais organoleptiquement décevantes — seul un test humain en cuisine valide.",
    severity: 'medium',
  },
  {
    icon: '🪞',
    title: 'Biais de confirmation',
    desc: "L'IA tend à valider les prémisses du prompt. Si vous demandez de prouver qu'un concept est viable, elle trouvera des arguments. La critique négative doit être explicitement demandée.",
    severity: 'medium',
  },
]

const humanRole = [
  { icon: '🎯', label: 'Définir la direction stratégique', desc: "L'IA ne choisit pas — c'est l'humain qui décide quelle saveur, quel segment, quelle vision de marque." },
  { icon: '✅', label: 'Vérifier les faits critiques', desc: "Tout chiffre utilisé dans une décision réelle doit être croisé avec des sources primaires (Nielsen, Euromonitor, fournisseurs)." },
  { icon: '🔬', label: 'Tester physiquement', desc: "Les formulations générées sont des points de départ, pas des recettes finalisées. La cuisine et le laboratoire restent irremplaçables." },
  { icon: '⚖️', label: 'Exercer le jugement éthique', desc: "Allégations santé, conformité réglementaire, impact environnemental — l'IA cite des cadres, mais la responsabilité reste humaine." },
]

function SeverityDot({ s }: { s: string }) {
  return (
    <span className={`inline-block w-2 h-2 rounded-full mr-1.5 ${s === 'high' ? 'bg-red-400' : 'bg-amber-400'}`} />
  )
}

export default function Reflection() {
  return (
    <section id="reflexion" className="py-24 bg-stone-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Réflexion Critique</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            L'IA en toute honnêteté
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto text-lg">
            Ce que la GenAI fait mieux que nous. Ce qu'elle ne peut pas faire. Et pourquoi l'humain reste au centre.
          </p>
        </div>

        {/* Strengths */}
        <div className="mb-16">
          <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-6 flex items-center gap-2">
            <span>✓</span> Forces identifiées
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {strengths.map(s => (
              <div key={s.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors">
                <div className="text-2xl mb-3">{s.icon}</div>
                <h4 className="font-bold mb-2">{s.title}</h4>
                <p className="text-sm text-stone-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Limitations */}
        <div className="mb-16">
          <h3 className="text-sm font-bold uppercase tracking-widest text-red-400 mb-6 flex items-center gap-2">
            <span>⚠</span> Limites et risques
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {limitations.map(l => (
              <div key={l.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-2xl shrink-0">{l.icon}</span>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <SeverityDot s={l.severity} />
                      <h4 className="font-bold">{l.title}</h4>
                    </div>
                    <p className="text-sm text-stone-400 leading-relaxed">{l.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-stone-500 mt-3 flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-red-400" /> Impact élevé
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 ml-3" /> Impact modéré
          </p>
        </div>

        {/* Human in the loop */}
        <div className="bg-gradient-to-br from-amber-900/30 to-stone-900/50 border border-amber-700/30 rounded-3xl p-8 md:p-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-2">Le rôle humain dans la boucle</h3>
          <h4 className="text-2xl font-bold mb-8">L'IA accélère. L'humain décide.</h4>
          <div className="grid sm:grid-cols-2 gap-5">
            {humanRole.map(r => (
              <div key={r.label} className="flex gap-3">
                <span className="text-xl shrink-0">{r.icon}</span>
                <div>
                  <div className="font-semibold mb-0.5">{r.label}</div>
                  <div className="text-sm text-stone-400 leading-relaxed">{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote / conclusion */}
        <blockquote className="mt-12 text-center">
          <p className="text-xl md:text-2xl text-stone-300 font-light italic leading-relaxed max-w-3xl mx-auto">
            "La GenAI n'a pas remplacé la créativité entrepreneuriale. Elle l'a amplifiée — en compressant le temps de prototypage et en forçant une rigueur documentaire que l'intuition seule ne produit pas."
          </p>
          <cite className="block mt-4 text-sm text-stone-500 not-italic">— Synthèse de l'exercice MBA</cite>
        </blockquote>
      </div>
    </section>
  )
}

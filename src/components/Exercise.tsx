const steps = [
  {
    num: '01',
    title: 'Choisir un outil IA',
    desc: 'Chaque étudiant sélectionne un outil de GenAI différent : Claude, Gemini, Copilot, GPT-4…',
  },
  {
    num: '02',
    title: 'Concevoir un snack',
    desc: "Utiliser l'IA pour développer un concept complet : formulation, processus industriel, profil nutritionnel.",
  },
  {
    num: '03',
    title: 'Valider la viabilité',
    desc: "Analyser la commercialisation selon 4 dimensions : production, différenciation, attrait consommateur, marketing.",
  },
  {
    num: '04',
    title: 'Réflexion critique',
    desc: "Évaluer les forces et limites de l'IA utilisée, identifier les biais, mesurer le rôle humain dans le processus.",
  },
]

const aiTools = [
  { name: 'Claude', company: 'Anthropic', color: '#d97706', students: ['Kevin', 'Vincent'], emoji: '🟠' },
  { name: 'Gemini', company: 'Google', color: '#4285f4', students: ['Gemeni'], emoji: '🔵' },
  { name: 'Copilot', company: 'Microsoft', color: '#0078d4', students: ['(Copilot)'], emoji: '🔷' },
  { name: 'GPT-4', company: 'OpenAI', color: '#10a37f', students: ['Karim'], emoji: '🟢' },
]

export default function Exercise() {
  return (
    <section id="exercice" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">L'Exercice</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Comment l'IA construit une marque
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-lg">
            Un exercice MBA en 4 étapes pour explorer les capacités réelles de la GenAI dans un processus d'innovation produit.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map(step => (
            <div key={step.num} className="relative p-6 rounded-2xl border border-stone-100 bg-stone-50 hover:border-amber-200 hover:bg-amber-50/50 transition-colors">
              <div className="text-3xl font-black text-amber-200 mb-3">{step.num}</div>
              <h3 className="font-bold text-stone-900 mb-2">{step.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* AI Tools used */}
        <div className="bg-stone-950 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2">Les outils GenAI mis à l'épreuve</h3>
            <p className="text-stone-400 text-sm">Chaque produit a été conçu avec un outil différent — une expérience comparative unique</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {aiTools.map(tool => (
              <div key={tool.name} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition-colors">
                <div className="text-2xl mb-2">{tool.emoji}</div>
                <div className="font-bold text-lg mb-0.5">{tool.name}</div>
                <div className="text-xs text-stone-400 mb-3">{tool.company}</div>
                <div className="flex flex-wrap gap-1 justify-center">
                  {tool.students.map(s => (
                    <span key={s} className="text-xs bg-white/10 rounded-full px-2 py-0.5 text-stone-300">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grading criteria */}
        <div className="mt-12 grid md:grid-cols-4 gap-4">
          {[
            { pct: '60%', label: 'Pensée critique', desc: 'Forces/limites IA, biais, rôle humain', color: 'bg-amber-500' },
            { pct: '20%', label: 'Présentation', desc: 'Structure, clarté, communication', color: 'bg-stone-700' },
            { pct: '10%', label: 'Clarté & précision', desc: 'Prompts utilisés, résultats obtenus', color: 'bg-stone-400' },
            { pct: '10%', label: 'Application réelle', desc: 'Pertinence en contexte professionnel', color: 'bg-stone-300' },
          ].map(c => (
            <div key={c.label} className="bg-white border border-stone-100 rounded-2xl p-5">
              <div className={`inline-block text-white text-2xl font-black rounded-xl px-3 py-1 mb-3 ${c.color}`}>
                {c.pct}
              </div>
              <div className="font-semibold text-stone-900 mb-1">{c.label}</div>
              <div className="text-xs text-stone-400">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Exercise from '../components/Exercise'
import Products from '../components/Products'
import Analysis from '../components/Analysis'
import Reflection from '../components/Reflection'

const serif = { fontFamily: "'DM Serif Display', Georgia, serif" }

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
    </div>
  )
}

import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Exercise from './components/Exercise'
import Products from './components/Products'
import Analysis from './components/Analysis'
import Reflection from './components/Reflection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Exercise />
      <Products />
      <Analysis />
      <Reflection />
      <Footer />
    </div>
  )
}

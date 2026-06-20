import { HashRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import Checkout from './pages/Checkout'
import Annexe from './pages/Annexe'

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/annexe" element={<Annexe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

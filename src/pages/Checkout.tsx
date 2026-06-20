import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const serif = { fontFamily: "'DM Serif Display', Georgia, serif" }

type LocationState = { qty?: number; price?: number } | null

export default function Checkout() {
  const location = useLocation()
  const state = location.state as LocationState
  const qty = state?.qty ?? 1
  const price = state?.price ?? qty * 3.75

  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping')
  const [shipping, setShipping] = useState({ firstName: '', lastName: '', email: '', address: '', city: '', zip: '', country: 'France' })
  const [payment, setPayment] = useState({ card: '', expiry: '', cvv: '', name: '' })

  function handleShippingSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStep('payment')
  }

  function handlePaymentSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStep('confirmation')
  }

  if (step === 'confirmation') {
    return (
      <div className="min-h-screen bg-[#FAFAF7] flex items-center justify-center px-6 pt-20">
        <div className="max-w-md w-full text-center">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-3xl italic text-stone-900 mb-4" style={serif}>Commande confirmée !</h1>
          <p className="text-stone-500 mb-2">Merci {shipping.firstName}, votre commande de {qty} × Smash'd est enregistrée.</p>
          <p className="text-sm text-stone-400 mb-8">Un email de confirmation a été envoyé à <strong>{shipping.email}</strong>. Livraison estimée : 3–5 jours ouvrés.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full text-white transition-colors"
            style={{ backgroundColor: '#ea580c' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f97316')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ea580c')}
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FAFAF7] pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link to="/product" className="text-sm text-stone-400 hover:text-stone-700 transition-colors">← Retour au produit</Link>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-10">

          {/* Form */}
          <div>
            {/* Steps indicator */}
            <div className="flex items-center gap-3 mb-8">
              {(['shipping', 'payment'] as const).map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  {i > 0 && <div className="w-8 h-px bg-stone-200" />}
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        backgroundColor: step === s ? '#ea580c' : (step === 'payment' && s === 'shipping') ? '#16a34a' : '#e5e7eb',
                        color: step === s || (step === 'payment' && s === 'shipping') ? 'white' : '#6b7280',
                      }}
                    >
                      {step === 'payment' && s === 'shipping' ? '✓' : i + 1}
                    </div>
                    <span className={`text-sm font-medium ${step === s ? 'text-stone-900' : 'text-stone-400'}`}>
                      {s === 'shipping' ? 'Livraison' : 'Paiement'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {step === 'shipping' && (
              <form onSubmit={handleShippingSubmit}>
                <h2 className="text-2xl italic text-stone-900 mb-6" style={serif}>Adresse de livraison</h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    { id: 'firstName', label: 'Prénom', placeholder: 'Jean' },
                    { id: 'lastName', label: 'Nom', placeholder: 'Dupont' },
                  ].map(f => (
                    <div key={f.id}>
                      <label className="block text-sm font-medium text-stone-700 mb-1">{f.label}</label>
                      <input
                        required
                        type="text"
                        placeholder={f.placeholder}
                        value={shipping[f.id as keyof typeof shipping]}
                        onChange={e => setShipping(s => ({ ...s, [f.id]: e.target.value }))}
                        className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white"
                      />
                    </div>
                  ))}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                  <input
                    required
                    type="email"
                    placeholder="jean@exemple.fr"
                    value={shipping.email}
                    onChange={e => setShipping(s => ({ ...s, email: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-stone-700 mb-1">Adresse</label>
                  <input
                    required
                    type="text"
                    placeholder="12 rue de la Paix"
                    value={shipping.address}
                    onChange={e => setShipping(s => ({ ...s, address: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white"
                  />
                </div>
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { id: 'city', label: 'Ville', placeholder: 'Paris', span: 2 },
                    { id: 'zip', label: 'Code postal', placeholder: '75001', span: 1 },
                  ].map(f => (
                    <div key={f.id} className={f.span === 2 ? 'sm:col-span-2' : ''}>
                      <label className="block text-sm font-medium text-stone-700 mb-1">{f.label}</label>
                      <input
                        required
                        type="text"
                        placeholder={f.placeholder}
                        value={shipping[f.id as keyof typeof shipping]}
                        onChange={e => setShipping(s => ({ ...s, [f.id]: e.target.value }))}
                        className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white"
                      />
                    </div>
                  ))}
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full font-semibold text-white transition-colors"
                  style={{ backgroundColor: '#ea580c' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f97316')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ea580c')}
                >
                  Continuer vers le paiement →
                </button>
              </form>
            )}

            {step === 'payment' && (
              <form onSubmit={handlePaymentSubmit}>
                <h2 className="text-2xl italic text-stone-900 mb-6" style={serif}>Informations de paiement</h2>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-stone-700 mb-1">Nom sur la carte</label>
                  <input
                    required
                    type="text"
                    placeholder="Jean Dupont"
                    value={payment.name}
                    onChange={e => setPayment(p => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-stone-700 mb-1">Numéro de carte</label>
                  <input
                    required
                    type="text"
                    placeholder="4242 4242 4242 4242"
                    maxLength={19}
                    value={payment.card}
                    onChange={e => setPayment(p => ({ ...p, card: e.target.value.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim() }))}
                    className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white font-mono"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { id: 'expiry', label: 'Date d\'expiration', placeholder: 'MM/AA' },
                    { id: 'cvv', label: 'CVV', placeholder: '123' },
                  ].map(f => (
                    <div key={f.id}>
                      <label className="block text-sm font-medium text-stone-700 mb-1">{f.label}</label>
                      <input
                        required
                        type="text"
                        placeholder={f.placeholder}
                        maxLength={f.id === 'cvv' ? 3 : 5}
                        value={payment[f.id as keyof typeof payment]}
                        onChange={e => setPayment(p => ({ ...p, [f.id]: e.target.value }))}
                        className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white font-mono"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-400 mb-5">
                  <span>🔒</span>
                  <span>Paiement sécurisé · données cryptées SSL. Simulation uniquement.</span>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full font-semibold text-white transition-colors"
                  style={{ backgroundColor: '#ea580c' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f97316')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ea580c')}
                >
                  Confirmer la commande · ${price.toFixed(2)}
                </button>
              </form>
            )}
          </div>

          {/* Order summary */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-2xl border border-stone-100 p-6">
              <h3 className="font-bold text-stone-900 mb-4">Récapitulatif</h3>
              <div className="flex items-center gap-3 mb-4 p-3 bg-orange-50 rounded-xl">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white text-lg font-black shrink-0" style={serif}>S</div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-stone-900">Smash'd Original</div>
                  <div className="text-xs text-stone-400">Crème Sure & Oignon, 40g</div>
                </div>
                <div className="text-sm font-bold">×{qty}</div>
              </div>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between text-stone-600">
                  <span>Sous-total</span>
                  <span>${price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Livraison</span>
                  <span className="text-green-600">Gratuite</span>
                </div>
                <div className="border-t border-stone-100 pt-2 flex justify-between font-bold text-stone-900">
                  <span>Total</span>
                  <span>${price.toFixed(2)}</span>
                </div>
              </div>
              <div className="text-xs text-stone-400 text-center">TVA incluse · Livraison 3–5 jours</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const serif = { fontFamily: "'DM Serif Display', Georgia, serif" }

type LocationState = { qty?: number; price?: number } | null

const DEMO_SHIPPING = {
  firstName: 'Cristina',
  lastName: 'Rizzuto',
  email: 'cristina.rizzuto@hec.ca',
  address: '501 rue De La Gauchetière Ouest',
  city: 'Montréal',
  zip: 'H2Z 1E5',
  country: 'Canada',
}

const DEMO_PAYMENT = { card: '4716 8834 2291 0573', expiry: '08/28', cvv: '391', name: 'Cristina Rizzuto' }

function TruckScene() {
  return (
    <div className="relative h-28 mx-auto overflow-visible" style={{ width: 320 }}>
      <div className="absolute bottom-0 left-[-60px] right-[-60px] h-px bg-white/10" />
      <div
        className="absolute bottom-8"
        style={{ left: '50%', animation: 'bagLoad 3.4s ease-in-out forwards' }}
      >
        <div
          className="w-9 h-11 rounded flex flex-col items-center justify-center gap-0.5 shadow-lg"
          style={{ background: 'linear-gradient(160deg,#eb5215,#c2410c)' }}
        >
          <span className="text-[9px] font-black italic text-white leading-none" style={serif}>Smash'd</span>
          <div className="flex gap-0.5">
            {[0,1,2].map(i => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/30" />
            ))}
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 select-none text-6xl leading-none"
        style={{ left: '50%', marginLeft: -32, animation: 'truckRide 3.4s ease-in-out forwards' }}
      >
        🚚
      </div>
    </div>
  )
}

export default function Checkout() {
  const location = useLocation()
  const state = location.state as LocationState
  const qty = state?.qty ?? 1
  const price = state?.price ?? qty * 6.00

  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping')
  const [shipping, setShipping] = useState({ firstName: '', lastName: '', email: '', address: '', city: '', zip: '', country: 'Canada' })
  const [payment, setPayment] = useState({ card: '', expiry: '', cvv: '', name: '' })
  const [trackStep, setTrackStep] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const [demoRunning, setDemoRunning] = useState(false)
  const [demoField, setDemoField] = useState<string | null>(null)

  // Style helpers for demo click animation
  const demoRing = (id: string): React.CSSProperties =>
    demoField === id
      ? {
          boxShadow: '0 0 0 3px rgba(212,64,8,0.4)',
          borderColor: '#ea580c',
          transform: 'scale(1.01)',
          transition: 'all 0.15s ease',
          outline: 'none',
        }
      : { transition: 'all 0.15s ease' }

  const demoBtnRing = (id: string): React.CSSProperties => ({
    backgroundColor: demoField === id ? '#eb5215' : '#d44008',
    boxShadow: demoField === id ? '0 0 0 6px rgba(212,64,8,0.28)' : 'none',
    transform: demoField === id ? 'scale(1.03)' : 'scale(1)',
    transition: 'all 0.2s ease',
  })

  useEffect(() => {
    if (step === 'confirmation') {
      setShowDetails(false)
      setTrackStep(0)
      const tDetails = setTimeout(() => setShowDetails(true), 3700)
      const t1 = setTimeout(() => setTrackStep(1), 4200)
      const t2 = setTimeout(() => setTrackStep(2), 5100)
      return () => { clearTimeout(tDetails); clearTimeout(t1); clearTimeout(t2) }
    }
  }, [step])

  async function handleDemoMode() {
    setDemoRunning(true)
    const pause = (ms: number) => new Promise<void>(r => setTimeout(r, ms))

    const typeShipping = async (key: keyof typeof DEMO_SHIPPING, value: string) => {
      setDemoField(key)
      await pause(280)
      for (let i = 1; i <= value.length; i++) {
        setShipping(s => ({ ...s, [key]: value.slice(0, i) }))
        await pause(32)
      }
      await pause(200)
      setDemoField(null)
      await pause(80)
    }
    const typePayment = async (key: keyof typeof DEMO_PAYMENT, value: string) => {
      setDemoField(key)
      await pause(280)
      for (let i = 1; i <= value.length; i++) {
        setPayment(p => ({ ...p, [key]: value.slice(0, i) }))
        await pause(32)
      }
      await pause(200)
      setDemoField(null)
      await pause(80)
    }

    await typeShipping('firstName', DEMO_SHIPPING.firstName)
    await typeShipping('lastName', DEMO_SHIPPING.lastName)
    await typeShipping('email', DEMO_SHIPPING.email)
    await typeShipping('address', DEMO_SHIPPING.address)
    await typeShipping('city', DEMO_SHIPPING.city)
    await typeShipping('zip', DEMO_SHIPPING.zip)

    setDemoField('btn-shipping')
    await pause(700)
    setDemoField(null)
    await pause(100)
    setStep('payment')
    await pause(400)

    await typePayment('name', DEMO_PAYMENT.name)
    await typePayment('card', DEMO_PAYMENT.card)
    await typePayment('expiry', DEMO_PAYMENT.expiry)
    await typePayment('cvv', DEMO_PAYMENT.cvv)

    setDemoField('btn-payment')
    await pause(700)
    setDemoField(null)
    await pause(100)
    setStep('confirmation')
    setDemoRunning(false)
  }

  function handleShippingSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStep('payment')
  }

  function handlePaymentSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStep('confirmation')
  }

  if (step === 'confirmation') {
    const trackLabels = ['Confirmée', 'En préparation', 'Expédiée']
    return (
      <div className="min-h-screen bg-[#0F0D0A] flex items-start justify-center px-6 pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(234,88,12,0.12),transparent)]" />

        <div className="relative z-10 max-w-lg w-full text-center">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.25em] text-brand-500 mb-6">Commande en route</p>
            <TruckScene />
          </div>

          <div
            style={{
              opacity: showDetails ? 1 : 0,
              transform: showDetails ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <div
              className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-4xl font-bold text-white"
              style={{
                backgroundColor: '#d44008',
                animation: showDetails ? 'scaleIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards' : 'none',
                opacity: 0,
              }}
            >
              ✓
            </div>

            <h1 className="text-4xl md:text-5xl italic text-white mb-2" style={serif}>C'est parti !</h1>
            <p className="text-stone-400 mb-1">
              Merci {shipping.firstName}, votre commande de {qty} × Smash'd est confirmée.
            </p>
            <p className="text-sm text-stone-500 mb-8">
              Un email a été envoyé à <span className="text-stone-300">{shipping.email}</span>
            </p>

            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8">
              <span className="text-xs text-stone-500 uppercase tracking-wider">Commande</span>
              <span className="text-sm font-mono font-bold text-brand-400">#SM-00042</span>
            </div>

            <div className="bg-white/4 border border-white/8 rounded-2xl p-6 mb-8">
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-5">Suivi en temps réel</p>
              <div className="flex items-start justify-between relative">
                <div className="absolute left-[16%] right-[16%] top-4 h-px bg-white/10" />
                {trackLabels.map((label, i) => (
                  <div key={label} className="flex flex-col items-center gap-2 relative z-10">
                    <div
                      className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all duration-500"
                      style={{
                        borderColor: trackStep > i ? '#d44008' : trackStep === i + 1 ? '#d44008' : 'rgba(255,255,255,0.15)',
                        backgroundColor: trackStep > i ? '#d44008' : trackStep === i + 1 ? 'rgba(234,88,12,0.15)' : 'transparent',
                        color: trackStep >= i + 1 ? '#d44008' : 'rgba(255,255,255,0.2)',
                        animation: trackStep === i + 1 ? 'trackPulse 1s ease 0.1s 3' : 'none',
                      }}
                    >
                      {trackStep > i ? '✓' : i + 1}
                    </div>
                    <span
                      className="text-xs font-medium transition-colors duration-500 text-center"
                      style={{ color: trackStep > i ? '#eb5215' : trackStep === i + 1 ? '#e5e7eb' : 'rgba(255,255,255,0.25)' }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full text-white transition-colors"
              style={{ backgroundColor: '#d44008' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#eb5215')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#d44008')}
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FAFAF7] pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <Link to="/product" className="text-sm text-stone-400 hover:text-stone-700 transition-colors">
            ← Retour au produit
          </Link>
          <button
            onClick={handleDemoMode}
            disabled={demoRunning}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all"
            style={{
              borderColor: '#d44008',
              color: demoRunning ? '#fb923c' : '#d44008',
              backgroundColor: demoRunning ? 'rgba(234,88,12,0.08)' : 'transparent',
            }}
          >
            {demoRunning ? (
              <>
                <span
                  className="w-3 h-3 rounded-full border-2 border-brand-400 border-t-transparent inline-block"
                  style={{ animation: 'spin 0.7s linear infinite' }}
                />
                Démo en cours...
              </>
            ) : (
              <>⚡ Mode démo</>
            )}
          </button>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-10">
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
                        backgroundColor: step === s ? '#d44008' : (step === 'payment' && s === 'shipping') ? '#16a34a' : '#e5e7eb',
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
                        required type="text" placeholder={f.placeholder}
                        value={shipping[f.id as keyof typeof shipping]}
                        onChange={e => setShipping(s => ({ ...s, [f.id]: e.target.value }))}
                        className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none bg-white"
                        style={demoRing(f.id)}
                      />
                    </div>
                  ))}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                  <input
                    required type="email" placeholder="jean@exemple.fr"
                    value={shipping.email}
                    onChange={e => setShipping(s => ({ ...s, email: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none bg-white"
                    style={demoRing('email')}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-stone-700 mb-1">Adresse</label>
                  <input
                    required type="text" placeholder="12 rue de la Paix"
                    value={shipping.address}
                    onChange={e => setShipping(s => ({ ...s, address: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none bg-white"
                    style={demoRing('address')}
                  />
                </div>
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { id: 'city', label: 'Ville', placeholder: 'Montréal', span: 2 },
                    { id: 'zip', label: 'Code postal', placeholder: 'H2Z 1E5', span: 1 },
                  ].map(f => (
                    <div key={f.id} className={f.span === 2 ? 'sm:col-span-2' : ''}>
                      <label className="block text-sm font-medium text-stone-700 mb-1">{f.label}</label>
                      <input
                        required type="text" placeholder={f.placeholder}
                        value={shipping[f.id as keyof typeof shipping]}
                        onChange={e => setShipping(s => ({ ...s, [f.id]: e.target.value }))}
                        className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none bg-white"
                        style={demoRing(f.id)}
                      />
                    </div>
                  ))}
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full font-semibold text-white"
                  style={demoBtnRing('btn-shipping')}
                  onMouseEnter={e => { if (demoField !== 'btn-shipping') e.currentTarget.style.backgroundColor = '#eb5215' }}
                  onMouseLeave={e => { if (demoField !== 'btn-shipping') e.currentTarget.style.backgroundColor = '#d44008' }}
                >
                  Continuer vers le paiement
                </button>
              </form>
            )}

            {step === 'payment' && (
              <form onSubmit={handlePaymentSubmit}>
                <h2 className="text-2xl italic text-stone-900 mb-6" style={serif}>Informations de paiement</h2>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-stone-700 mb-1">Nom sur la carte</label>
                  <input
                    required type="text" placeholder="Jean Dupont"
                    value={payment.name}
                    onChange={e => setPayment(p => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none bg-white"
                    style={demoRing('name')}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-stone-700 mb-1">Numéro de carte</label>
                  <input
                    required type="text" placeholder="4242 4242 4242 4242" maxLength={19}
                    value={payment.card}
                    onChange={e => setPayment(p => ({ ...p, card: e.target.value.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim() }))}
                    className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none bg-white font-mono"
                    style={demoRing('card')}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { id: 'expiry', label: "Date d'expiration", placeholder: 'MM/AA' },
                    { id: 'cvv', label: 'CVV', placeholder: '123' },
                  ].map(f => (
                    <div key={f.id}>
                      <label className="block text-sm font-medium text-stone-700 mb-1">{f.label}</label>
                      <input
                        required type="text" placeholder={f.placeholder}
                        maxLength={f.id === 'cvv' ? 3 : 5}
                        value={payment[f.id as keyof typeof payment]}
                        onChange={e => setPayment(p => ({ ...p, [f.id]: e.target.value }))}
                        className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none bg-white font-mono"
                        style={demoRing(f.id)}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-400 mb-5">
                  <span>🔒</span>
                  <span>Paiement sécurisé · données cryptées SSL · simulation uniquement.</span>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full font-semibold text-white"
                  style={demoBtnRing('btn-payment')}
                  onMouseEnter={e => { if (demoField !== 'btn-payment') e.currentTarget.style.backgroundColor = '#eb5215' }}
                  onMouseLeave={e => { if (demoField !== 'btn-payment') e.currentTarget.style.backgroundColor = '#d44008' }}
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
              <div className="flex items-center gap-3 mb-4 p-3 bg-brand-50 rounded-xl">
                <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center text-white text-lg font-black shrink-0" style={serif}>S</div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-stone-900">Smash'd Original</div>
                  <div className="text-xs text-stone-400">Crème Sure & Oignon, 45g</div>
                </div>
                <div className="text-sm font-bold">×{qty}</div>
              </div>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between text-stone-600">
                  <span>Sous total</span>
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
              <div className="text-xs text-stone-400 text-center">TVA incluse · Livraison 3-5 jours</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// CSS chip-bag illustration for Smash'd

export default function ProductVisual({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const w = size === 'sm' ? 160 : size === 'lg' ? 280 : 220
  const h = Math.round(w * 1.35)

  return (
    <div className="relative mx-auto select-none" style={{ width: w, height: h }}>
      {/* Bag body */}
      <div
        className="absolute inset-0 rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #f97316 0%, #ea580c 40%, #c2410c 100%)',
          boxShadow: '0 12px 48px rgba(234,88,12,0.4), inset 2px 2px 0 rgba(255,255,255,0.15)',
        }}
      >
        {/* Top seal */}
        <div
          className="w-full"
          style={{
            height: '12%',
            background: 'rgba(0,0,0,0.25)',
            borderBottom: '2px solid rgba(0,0,0,0.15)',
          }}
        />

        {/* Brand name area */}
        <div className="flex flex-col items-center justify-center" style={{ height: '30%' }}>
          <div
            className="font-black text-white tracking-tight leading-none"
            style={{
              fontSize: w * 0.22,
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontStyle: 'italic',
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            Smash'd
          </div>
          <div
            className="text-orange-200 font-medium tracking-widest uppercase mt-1"
            style={{ fontSize: w * 0.055, fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            Lentil Chips
          </div>
        </div>

        {/* Chip illustration — stylised circles */}
        <div className="flex items-center justify-center gap-1" style={{ height: '28%' }}>
          {[0.85, 1, 0.9, 1.05, 0.8].map((scale, i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: w * 0.12 * scale,
                height: w * 0.10 * scale,
                background: 'radial-gradient(ellipse at 35% 35%, rgba(255,255,255,0.35), rgba(255,255,255,0.05))',
                border: '1.5px solid rgba(255,255,255,0.3)',
                transform: `rotate(${(i - 2) * 8}deg)`,
              }}
            />
          ))}
        </div>

        {/* Claims strip */}
        <div
          className="w-full flex items-center justify-center gap-3"
          style={{
            height: '16%',
            background: 'rgba(0,0,0,0.2)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {['100% Végétal', 'Sans friture', '40g'].map(claim => (
            <span
              key={claim}
              className="text-orange-100 font-medium"
              style={{
                fontSize: w * 0.048,
                fontFamily: "'DM Sans', system-ui, sans-serif",
              }}
            >
              {claim}
            </span>
          ))}
        </div>

        {/* Bottom seal */}
        <div
          className="w-full"
          style={{
            height: '14%',
            background: 'rgba(0,0,0,0.25)',
            borderTop: '2px solid rgba(0,0,0,0.15)',
          }}
        />
      </div>

      {/* Shine overlay */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%)',
        }}
      />
    </div>
  )
}

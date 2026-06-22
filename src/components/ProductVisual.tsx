export default function ProductVisual({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const w = size === 'sm' ? 160 : size === 'lg' ? 280 : 220

  return (
    <img
      src={`${import.meta.env.BASE_URL}smashd-packaging.png`}
      alt="Smash'd — Crème sure & oignon"
      style={{ width: w, height: 'auto' }}
      className="drop-shadow-2xl select-none"
    />
  )
}

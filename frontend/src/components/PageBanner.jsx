export default function PageBanner({ title, subtitle, image }) {
  return (
    <div style={{
      width: '100%',
      position: 'relative',
      marginTop: 70, // navbar height
      overflow: 'hidden',
      height: 'clamp(280px, 45vw, 560px)',
    }}>

      {/* ── Background Image ── */}
      <img
        src={image || 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1400'}
        alt={title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
        }}
      />

      {/* ── Optional dark overlay (remove if you want pure image) ── */}
      {(title || subtitle) && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(10,31,68,0.55) 0%, transparent 60%)',
          display: 'flex', alignItems: 'flex-end',
          padding: '40px 6%'
        }}>
          <div>
            {title && (
              <h1 style={{
                color: 'white', fontWeight: 800,
                fontSize: 'clamp(24px, 4vw, 42px)',
                margin: 0, textShadow: '0 2px 8px rgba(0,0,0,0.3)'
              }}>{title}</h1>
            )}
            {subtitle && (
              <p style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: 16, marginTop: 8
              }}>{subtitle}</p>
            )}
          </div>
        </div>
      )}

      {/* ── Scroll Up Button (bottom right) ── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'absolute', bottom: 20, right: 20,
          width: 42, height: 42, borderRadius: '50%',
          border: '2px solid rgba(255,255,255,0.6)',
          background: 'rgba(255,255,255,0.15)',
          color: 'white', fontSize: 18, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(4px)',
          transition: 'background 0.3s'
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
      >↑</button>

    </div>
  )
}
import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer style={{ background: '#0a1f44', color: 'rgba(255,255,255,0.6)', padding: '60px 6% 30px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 50, maxWidth: 1200, margin: '0 auto 40px' }} className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span style={{ fontSize: 32 }}>🪷</span>
              <div>
                <strong style={{ color: 'white', fontSize: 16, display: 'block' }}>Lotus Science HSS</strong>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: 1.5 }}>KENDRAPARA, ODISHA</span>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)' }}>
              Empowering students with knowledge, discipline, and vision to excel in board exams and competitive entrances.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'white', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16, paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Quick Links</h4>
            {[['Home','#home'],['About','#about'],['Academics','#academics'],['Toppers','#toppers'],['Gallery','#gallery'],['Contact','#contact']].map(([l, h]) => (
              <a key={l} href={h} style={{ display: 'block', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 14, marginBottom: 8 }}>{l}</a>
            ))}
          </div>
          <div>
            <h4 style={{ color: 'white', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16, paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Courses</h4>
            {['PCM Stream','PCB Stream','NEET Coaching','JEE Coaching','Foundation Program'].map(c => (
              <div key={c} style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, marginBottom: 8 }}>{c}</div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.3)', maxWidth: 1100, margin: '0 auto' }}>
          © 2025 <span style={{ color: '#c8a84b' }}>Lotus Science Higher Secondary School</span>, Kendrapara, Odisha. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}

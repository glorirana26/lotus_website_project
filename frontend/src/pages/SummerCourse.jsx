import PageBanner from '../components/PageBanner'

export default function SummerCourse() {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', width: '100%' }}>

      {/* ── Banner ── */}
      <PageBanner
        image="/summer-course.jpg"
        title="Summer Course"
        subtitle="Special program for Class X students"
      />

      {/* ── Main Content ── */}
      <div style={{ background: '#f5f5f5', padding: '70px 6%', width: '100%', boxSizing: 'border-box' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 60,
          alignItems: 'center',
          maxWidth: 1300,
          margin: '0 auto'
        }} className="summer-grid">

          {/* ── Left Text ── */}
          <div>
            <h2 style={{
              fontSize: 'clamp(22px, 3vw, 28px)',
              fontWeight: 800,
              color: '#111',
              marginBottom: 24
            }}>Summer Course</h2>

            <p style={{
              fontSize: 15,
              lineHeight: 1.95,
              color: '#333',
              textAlign: 'justify',
              marginBottom: 20
            }}>
              The Summer Course is specially and systematically designed by Lotus Science Higher Secondary School,
              aimed at the students of class X to have access and understand the demands of the science stream
              in the senior secondary classes. The course content and the systematic teaching methodology at
              Lotus Science HSS ensures that students progress from the basics to the advanced levels, fulfilling both the
              requirements of the board and the competitive examinations.
            </p>

            <p style={{
              fontSize: 15,
              lineHeight: 1.95,
              color: '#333',
              textAlign: 'justify',
              marginBottom: 32
            }}>
              Apart from building confidence in the students from the very beginning, the course helps them
              to create much needed interest to learn from the best faculty in the state which plays a crucial
              role in realizing their cherished dream of pursuing a career in medicine or engineering.
            </p>

            {/* Highlights */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 32 }}>
              {[
                ['📅', 'Duration', '45 Days Intensive'],
                ['👨‍🏫', 'Faculty', 'Expert Teachers'],
                ['📚', 'Subjects', 'Physics, Chemistry, Math & Bio'],
                ['🎯', 'Target', 'Class X Students'],
              ].map(([icon, label, val]) => (
                <div key={label} style={{
                  background: 'white',
                  borderRadius: 12,
                  padding: '16px 18px',
                  borderLeft: '3px solid #c0392b',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.06)'
                }}>
                  <div style={{ fontSize: 20, marginBottom: 6 }}>{icon}</div>
                  <div style={{ fontSize: 11, color: '#888', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>{label}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#111', marginTop: 3 }}>{val}</div>
                </div>
              ))}
            </div>

            {/* Apply Button */}
            <a href="/admission" style={{
              display: 'inline-block',
              background: '#c0392b',
              color: 'white',
              padding: '14px 40px',
              borderRadius: 6,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none',
              transition: 'background 0.3s'
            }}
              onMouseEnter={e => e.target.style.background = '#a93226'}
              onMouseLeave={e => e.target.style.background = '#c0392b'}
            >Apply Now →</a>
          </div>

          {/* ── Right Image ── */}
          <div style={{ position: 'relative' }}>
            <img
              src="/summer-course.jpg"
              alt="Summer Course"
              style={{
                width: '100%',
                height: '460px',
                objectFit: 'cover',
                display: 'block',
                borderRadius: 4,
                boxShadow: '0 8px 40px rgba(0,0,0,0.15)'
              }}
              onError={e => {
                e.target.src = 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800'
              }}
            />
            {/* Badge */}
            <div style={{
              position: 'absolute',
              bottom: 24, left: -20,
              background: '#c0392b',
              color: 'white',
              padding: '16px 24px',
              borderRadius: 12,
              boxShadow: '0 8px 24px rgba(192,57,43,0.4)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: 28, fontWeight: 800 }}>45</div>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1 }}>DAYS PROGRAM</div>
            </div>
          </div>

        </div>
      </div>

      {/* ── What You Will Learn ── */}
      <div style={{ background: '#0d3349', padding: '70px 6%', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(22px,3vw,30px)', fontWeight: 800, marginBottom: 8 }}>
            What You Will Learn
          </h2>
          <div style={{ width: 40, height: 3, background: '#c8a84b', marginBottom: 40 }}></div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {[
              { icon: '⚗️', subject: 'Chemistry', topics: ['Atomic Structure', 'Chemical Bonding', 'Periodic Table', 'Basic Reactions'] },
              { icon: '🔭', subject: 'Physics', topics: ['Mechanics', 'Optics', 'Electricity', 'Modern Physics Basics'] },
              { icon: '🧮', subject: 'Mathematics', topics: ['Algebra', 'Trigonometry', 'Coordinate Geometry', 'Calculus Intro'] },
              { icon: '🧬', subject: 'Biology', topics: ['Cell Biology', 'Human Physiology', 'Genetics Basics', 'Ecology'] },
            ].map(item => (
              <div key={item.subject} style={{
                background: 'rgba(255,255,255,0.06)',
                borderRadius: 16, padding: '28px 24px',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'transform 0.3s'
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: 40, marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ color: '#c8a84b', fontSize: 18, fontWeight: 700, marginBottom: 16 }}>{item.subject}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {item.topics.map(t => (
                    <li key={t} style={{
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: 13.5, padding: '7px 0',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                      display: 'flex', alignItems: 'center', gap: 8
                    }}>
                      <span style={{ color: '#c8a84b', fontSize: 10 }}>●</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Apply CTA ── */}
      <div style={{
        background: '#c0392b', padding: '50px 6%',
        textAlign: 'center'
      }}>
        <h2 style={{ color: 'white', fontSize: 'clamp(20px,3vw,28px)', fontWeight: 800, marginBottom: 12 }}>
          Secure Your Seat in Summer Course 2025!
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, marginBottom: 28 }}>
          Limited seats available. Register now before it's too late!
        </p>
        <a href="/admission" style={{
          display: 'inline-block',
          background: 'white', color: '#c0392b',
          padding: '14px 48px', borderRadius: 6,
          fontWeight: 800, fontSize: 16, textDecoration: 'none',
          transition: 'transform 0.2s'
        }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >Register Now →</a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .summer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </div>
  )
}
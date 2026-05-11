import PageBanner from '../components/PageBanner'

export default function Examination() {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', width: '100%' }}>

      {/* Banner */}
      <PageBanner
        image="/images/examination.jpg"
        title="Examination"
        subtitle="Comprehensive test series for student excellence"
      />

      {/* Main Content */}
      <div style={{ background: '#f8f9ff', padding: '70px 6%', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Title */}
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, color: '#0a1f44', marginBottom: 8 }}>
              Our Examination Pattern
            </h2>
            <div style={{ width: 50, height: 3, background: '#c8a84b', margin: '16px auto' }}></div>
            <p style={{ color: '#666', fontSize: 15, maxWidth: 600, margin: '0 auto' }}>
              Lotus Science HSS conducts a series of examinations throughout the year to ensure continuous evaluation and preparation of students.
            </p>
          </div>

          {/* Year Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 50 }} className="year-grid">

            {/* 1st Year */}
            <div style={{ background: 'white', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
              <div style={{ background: '#0a1f44', padding: '24px 28px', display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(200,168,75,0.2)', border: '2px solid #c8a84b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>📋</div>
                <div>
                  <h3 style={{ color: 'white', fontSize: 20, fontWeight: 800, margin: 0 }}>1st Year</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, margin: 0, letterSpacing: 1 }}>TEST SERIES</p>
                </div>
              </div>
              <div style={{ padding: '28px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#f0f4ff' }}>
                      <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: '#0a1f44', letterSpacing: 1, textTransform: 'uppercase', borderRadius: '8px 0 0 8px' }}>Test Type</th>
                      <th style={{ padding: '12px 16px', textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#0a1f44', letterSpacing: 1, textTransform: 'uppercase', borderRadius: '0 8px 8px 0' }}>No. of Tests</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['WAT (Weekly Assessment Test)', '8 NOS'],
                      ['MAT (Monthly Assessment Test)', '8 NOS'],
                      ['Annual Examination', '1 NOS'],
                    ].map(([type, nos], i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #f0f0f0' }}>
                        <td style={{ padding: '16px', fontSize: 14, color: '#333', display: 'flex', alignItems: 'center', gap: 10 }}>
                          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1e5fc4', flexShrink: 0, display: 'inline-block' }}></span>
                          {type}
                        </td>
                        <td style={{ padding: '16px', fontSize: 14, fontWeight: 700, color: '#1e5fc4', textAlign: 'center' }}>{nos}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Total */}
                <div style={{ marginTop: 20, background: '#0a1f44', borderRadius: 12, padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'white', fontWeight: 700, fontSize: 15 }}>Total Tests</span>
                  <span style={{ color: '#c8a84b', fontWeight: 800, fontSize: 18 }}>17 NOS</span>
                </div>
              </div>
            </div>

            {/* 2nd Year */}
            <div style={{ background: 'white', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
              <div style={{ background: '#c0392b', padding: '24px 28px', display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>📝</div>
                <div>
                  <h3 style={{ color: 'white', fontSize: 20, fontWeight: 800, margin: 0 }}>2nd Year</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, margin: 0, letterSpacing: 1 }}>TEST SERIES</p>
                </div>
              </div>
              <div style={{ padding: '28px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#fff5f5' }}>
                      <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: '#0a1f44', letterSpacing: 1, textTransform: 'uppercase', borderRadius: '8px 0 0 8px' }}>Test Type</th>
                      <th style={{ padding: '12px 16px', textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#0a1f44', letterSpacing: 1, textTransform: 'uppercase', borderRadius: '0 8px 8px 0' }}>No. of Tests</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['WAT (Weekly Assessment Test)', '8 NOS'],
                      ['MAT (Monthly Assessment Test)', '8 NOS'],
                      ['Half VST (Half Syllabus Test)', '2 NOS'],
                      ['Full VST (Full Syllabus Test)', '2 NOS'],
                    ].map(([type, nos], i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #f0f0f0' }}>
                        <td style={{ padding: '16px', fontSize: 14, color: '#333', display: 'flex', alignItems: 'center', gap: 10 }}>
                          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#c0392b', flexShrink: 0, display: 'inline-block' }}></span>
                          {type}
                        </td>
                        <td style={{ padding: '16px', fontSize: 14, fontWeight: 700, color: '#c0392b', textAlign: 'center' }}>{nos}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Total */}
                <div style={{ marginTop: 20, background: '#c0392b', borderRadius: 12, padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'white', fontWeight: 700, fontSize: 15 }}>Total Tests</span>
                  <span style={{ color: 'white', fontWeight: 800, fontSize: 18 }}>20 NOS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Test Description Cards */}
          <h3 style={{ fontSize: 'clamp(20px,3vw,28px)', fontWeight: 800, color: '#0a1f44', marginBottom: 8, textAlign: 'center' }}>About Each Test</h3>
          <div style={{ width: 50, height: 3, background: '#c8a84b', margin: '12px auto 40px' }}></div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              { icon: '📋', title: 'WAT', full: 'Weekly Assessment Test', color: '#1e5fc4', desc: 'Conducted every week to assess students on topics covered in that week. Helps in regular revision and identifying weak areas early.' },
              { icon: '📊', title: 'MAT', full: 'Monthly Assessment Test', color: '#8e44ad', desc: 'Monthly test covering all topics taught during the month. Ensures comprehensive understanding of the curriculum on a monthly basis.' },
              { icon: '📝', title: 'Half VST', full: 'Half Syllabus Test (2nd Year)', color: '#e67e22', desc: 'Conducted for 2nd year students covering half of the total syllabus. Prepares students for board examinations systematically.' },
              { icon: '📖', title: 'Full VST', full: 'Full Syllabus Test (2nd Year)', color: '#c0392b', desc: 'Full syllabus test for 2nd year students. This is the most comprehensive internal test before the actual board examination.' },
              { icon: '🏆', title: 'Annual Exam', full: 'Annual Examination (1st Year)', color: '#27ae60', desc: 'End of year examination for 1st year students covering the complete annual syllabus to promote to 2nd year.' },
            ].map(item => (
              <div key={item.title} style={{
                background: 'white', borderRadius: 16, padding: '28px 24px',
                boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
                borderTop: `4px solid ${item.color}`,
                transition: 'transform 0.3s'
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: 36, marginBottom: 14 }}>{item.icon}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <span style={{ background: `${item.color}15`, color: item.color, padding: '3px 10px', borderRadius: 50, fontSize: 12, fontWeight: 700 }}>{item.title}</span>
                </div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: '#0a1f44', marginBottom: 10 }}>{item.full}</h4>
                <p style={{ fontSize: 13.5, color: '#666', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#0a1f44', padding: '60px 6%', textAlign: 'center' }}>
        <h2 style={{ color: 'white', fontSize: 'clamp(20px,3vw,28px)', fontWeight: 800, marginBottom: 12 }}>
          Prepare with the Best — Join Lotus Science HSS!
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, marginBottom: 28 }}>
          Our comprehensive test series ensures you are always exam-ready!
        </p>
        <a href="/admission" style={{
          display: 'inline-block', background: '#c8a84b', color: '#0a1f44',
          padding: '14px 48px', borderRadius: 6,
          fontWeight: 800, fontSize: 16, textDecoration: 'none'
        }}>Apply for Admission →</a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .year-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
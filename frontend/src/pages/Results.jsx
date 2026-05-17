import { useState } from 'react'
import PageBanner from '../components/PageBanner'

const results = {
  2025: {
    passPercent: '95%',
    totalStudents: 120,
    toppers: [
      { rank: 1, name: 'Student Name', roll: 'LSS2501', percent: '96.67%', score: '580/600', stream: 'PCM' },
      { rank: 2, name: 'Student Name', roll: 'LSS2502', percent: '95.50%', score: '573/600', stream: 'PCB' },
      { rank: 3, name: 'Student Name', roll: 'LSS2503', percent: '95.33%', score: '572/600', stream: 'PCM' },
      { rank: 4, name: 'Student Name', roll: 'LSS2504', percent: '94.83%', score: '569/600', stream: 'PCB' },
      { rank: 5, name: 'Student Name', roll: 'LSS2505', percent: '94.33%', score: '566/600', stream: 'PCM' },
      { rank: 6, name: 'Student Name', roll: 'LSS2506', percent: '94.17%', score: '565/600', stream: 'PCB' },
    ]
  },
  2024: {
    passPercent: '93%',
    totalStudents: 108,
    toppers: [
      { rank: 1, name: 'Student Name', roll: 'LSS2401', percent: '95.83%', score: '575/600', stream: 'PCM' },
      { rank: 2, name: 'Student Name', roll: 'LSS2402', percent: '94.67%', score: '568/600', stream: 'PCB' },
      { rank: 3, name: 'Student Name', roll: 'LSS2403', percent: '94.50%', score: '567/600', stream: 'PCM' },
      { rank: 4, name: 'Student Name', roll: 'LSS2404', percent: '93.83%', score: '563/600', stream: 'PCB' },
      { rank: 5, name: 'Student Name', roll: 'LSS2405', percent: '93.33%', score: '560/600', stream: 'PCM' },
      { rank: 6, name: 'Student Name', roll: 'LSS2406', percent: '93.17%', score: '559/600', stream: 'PCB' },
    ]
  }
}

const streamColor = { 'PCM': '#1e5fc4', 'PCB': '#27ae60' }
const medalEmoji = { 1: '🥇', 2: '🥈', 3: '🥉' }

export default function Results() {
  const [activeYear, setActiveYear] = useState(2025)
  const data = results[activeYear]

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', width: '100%' }}>

      {/* Banner */}
      <PageBanner
        image="/images/results.jpg"
        title="Results"
        subtitle="Our students' outstanding achievements in CHSE and CBSE Board Examinations"
      />

      {/* Year Tabs */}
      <div style={{ background: 'white', padding: '40px 6%', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, color: '#0a1f44', marginBottom: 8 }}>
         Both CHSE & CBSE Board Results
        </h2>
        <div style={{ width: 50, height: 3, background: '#c8a84b', margin: '16px auto 32px' }}></div>

        {/* Year Selector */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          {[2025, 2024].map(year => (
            <button key={year} onClick={() => setActiveYear(year)} style={{
              padding: '12px 40px', borderRadius: 50,
              border: 'none', cursor: 'pointer',
              fontFamily: 'inherit', fontSize: 16, fontWeight: 700,
              background: activeYear === year ? '#0a1f44' : '#f0f4ff',
              color: activeYear === year ? 'white' : '#0a1f44',
              boxShadow: activeYear === year ? '0 4px 20px rgba(10,31,68,0.3)' : 'none',
              transition: 'all 0.3s'
            }}>
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ background: '#0a1f44', padding: '36px 6%' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, textAlign: 'center' }} className="stats-bar">
          {[
            ['🏆', 'Pass Percentage', data.passPercent],
            ['🎓', 'Total Students', data.totalStudents],
            ['⭐', 'Board Year', `CHSE ${activeYear}`],
          ].map(([icon, label, val], i) => (
            <div key={label} style={{ padding: '20px 0', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{icon}</div>
              <div style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: 800, color: '#c8a84b', marginBottom: 4 }}>{val}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', letterSpacing: 1, textTransform: 'uppercase' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Toppers Section */}
      <div style={{ background: '#f8f9ff', padding: '70px 6%', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          <h3 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 800, color: '#0a1f44', marginBottom: 8, textAlign: 'center' }}>
            🏆 Toppers — CHSE {activeYear}
          </h3>
          <div style={{ width: 50, height: 3, background: '#c8a84b', margin: '12px auto 50px' }}></div>

          {/* Top 3 Special Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 32 }} className="top3-grid">
            {data.toppers.slice(0, 3).map((t, i) => (
              <div key={i} style={{
                background: 'white', borderRadius: 20,
                overflow: 'hidden',
                boxShadow: i === 0 ? '0 8px 40px rgba(200,168,75,0.25)' : '0 4px 20px rgba(0,0,0,0.08)',
                border: i === 0 ? '2px solid #c8a84b' : '1px solid #eee',
                transform: i === 0 ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform 0.3s'
              }}
                onMouseEnter={e => e.currentTarget.style.transform = i === 0 ? 'scale(1.06)' : 'scale(1.03)'}
                onMouseLeave={e => e.currentTarget.style.transform = i === 0 ? 'scale(1.04)' : 'scale(1)'}
              >
                {/* Top */}
                <div style={{
                  background: i === 0 ? 'linear-gradient(135deg, #c8a84b, #e8c96a)' : i === 1 ? 'linear-gradient(135deg, #aaa, #ccc)' : 'linear-gradient(135deg, #cd7f32, #e8a56a)',
                  padding: '28px 20px', textAlign: 'center'
                }}>
                  <div style={{ fontSize: 48, marginBottom: 8 }}>{medalEmoji[t.rank] || '🎓'}</div>
                  <div style={{ color: 'white', fontWeight: 800, fontSize: 18 }}>Rank #{t.rank}</div>
                </div>

                {/* Photo Placeholder */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: -30 }}>
                  <div style={{
                    width: 70, height: 70, borderRadius: '50%',
                    background: '#f0f4ff', border: '3px solid white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 30, boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}>👤</div>
                </div>

                {/* Details */}
                <div style={{ padding: '16px 20px 24px', textAlign: 'center' }}>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: '#0a1f44', marginBottom: 4 }}>{t.name}</h4>
                  <p style={{ fontSize: 12, color: '#aaa', marginBottom: 12 }}>Roll: {t.roll}</p>
                  <div style={{ fontSize: 32, fontWeight: 800, color: '#0a1f44', marginBottom: 4 }}>{t.percent}</div>
                  <div style={{ fontSize: 13, color: '#666', marginBottom: 12 }}>Score: {t.score}</div>
                  <span style={{
                    background: `${streamColor[t.stream]}15`,
                    color: streamColor[t.stream],
                    padding: '4px 14px', borderRadius: 50,
                    fontSize: 12, fontWeight: 700
                  }}>{t.stream}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Remaining Toppers Table */}
          <div style={{ background: 'white', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            <div style={{ padding: '20px 28px', borderBottom: '1px solid #f0f0f0' }}>
              <h4 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#0a1f44' }}>All Toppers — CHSE {activeYear}</h4>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f8f9ff' }}>
                    {['Rank', 'Photo', 'Name', 'Roll No', 'Stream', 'Score', 'Percentage'].map(h => (
                      <th key={h} style={{ padding: '14px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: 1, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.toppers.map((t, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #f5f5f5' }}>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{
                          background: i < 3 ? '#0a1f44' : '#f0f4ff',
                          color: i < 3 ? 'white' : '#0a1f44',
                          width: 32, height: 32, borderRadius: '50%',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontWeight: 700, fontSize: 13
                        }}>{t.rank}</span>
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        <div style={{
                          width: 44, height: 44, borderRadius: '50%',
                          background: '#f0f4ff', border: '2px solid #e0e8ff',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 20
                        }}>👤</div>
                      </td>
                      <td style={{ padding: '14px 16px', fontWeight: 600, fontSize: 14 }}>{t.name}</td>
                      <td style={{ padding: '14px 16px', fontSize: 13, color: '#888' }}>{t.roll}</td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{
                          background: `${streamColor[t.stream]}15`,
                          color: streamColor[t.stream],
                          padding: '4px 12px', borderRadius: 50,
                          fontSize: 11, fontWeight: 700
                        }}>{t.stream}</span>
                      </td>
                      <td style={{ padding: '14px 16px', fontSize: 14, fontWeight: 600 }}>{t.score}</td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{ color: '#c8a84b', fontWeight: 800, fontSize: 16 }}>{t.percent}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#c0392b', padding: '60px 6%', textAlign: 'center' }}>
        <h2 style={{ color: 'white', fontSize: 'clamp(20px,3vw,28px)', fontWeight: 800, marginBottom: 12 }}>
          Be Our Next Topper!
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, marginBottom: 28 }}>
          Join Lotus Science HSS and achieve excellence in CHSE Board Examinations!
        </p>
        <a href="/admission" style={{
          display: 'inline-block', background: 'white', color: '#c0392b',
          padding: '14px 48px', borderRadius: 6,
          fontWeight: 800, fontSize: 16, textDecoration: 'none'
        }}>Apply for Admission →</a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .top3-grid { grid-template-columns: 1fr !important; }
          .stats-bar { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
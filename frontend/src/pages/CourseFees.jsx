import { useState } from 'react'
import PageBanner from '../components/PageBanner'

export default function CourseFees() {
  const [activeTab, setActiveTab] = useState('chse')

  const gold = '#f5a623'
  const lightYellow = '#fffbe6'

  const headerStyle = {
    background: gold, color: 'white',
    padding: '14px 20px', fontWeight: 700,
    fontSize: 13, letterSpacing: 1, textTransform: 'uppercase',
    textAlign: 'center', border: '1px solid #e09400'
  }
  const cellStyle = {
    padding: '13px 20px', fontSize: 14,
    color: '#333', textAlign: 'center',
    border: '1px solid #e8d8b0'
  }
  const sectionTitle = {
    fontSize: 'clamp(17px,2.5vw,21px)', fontWeight: 800,
    color: '#111', marginBottom: 6, marginTop: 44,
    textTransform: 'uppercase', letterSpacing: 0.5
  }
  const divider = { width: 40, height: 3, background: gold, marginBottom: 24 }
  const note = {
    background: '#fff3cd', border: '1px solid #ffc107',
    borderRadius: 8, padding: '13px 18px', marginTop: 14,
    fontSize: 13, color: '#856404'
  }

  // ── Reusable table component ──
  const FeeTable = ({ headers, rows, totalRow }) => (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
        <thead>
          <tr>{headers.map((h, i) => <th key={i} style={{ ...headerStyle, textAlign: i === 1 ? 'left' : 'center' }}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? lightYellow : 'white' }}>
              {row.map((cell, j) => (
                <td key={j} style={{
                  ...cellStyle, background: 'inherit',
                  textAlign: j === 1 ? 'left' : 'center',
                  color: cell === 'NO ADMISSION' ? '#c0392b' : '#333',
                  fontWeight: j === 0 ? 600 : 400
                }}>{cell}</td>
              ))}
            </tr>
          ))}
          {totalRow && (
            <tr>
              {totalRow.map((cell, j) => (
                <td key={j} style={{
                  ...cellStyle, background: gold,
                  color: 'white', fontWeight: 800, fontSize: 15,
                  textAlign: j === 1 ? 'left' : 'center'
                }}>{cell}</td>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )

  // ── Scholarship table (shared structure) ──
  const ScholarshipTable = ({ rows }) => (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 650 }}>
        <thead>
          <tr>
            {['10TH %', 'DISCOUNT', 'ADM FEES', 'TUITION FEES', 'HOSTEL FEES', 'TOTAL FEES'].map((h, i) => (
              <th key={i} style={headerStyle}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? lightYellow : 'white' }}>
              {row.map((cell, j) => (
                <td key={j} style={{
                  ...cellStyle, background: 'inherit',
                  fontWeight: j <= 1 ? 700 : 400,
                  color: i === 0 && j === 1 ? '#27ae60'
                    : i === rows.length - 1 ? '#c0392b'
                    : '#333'
                }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // ── CHSE Data ──
  const chse = {
    college: {
      rows: [
        ['1', 'Admission Fees / Re-Admission Fees', '₹ 13,300/-', '₹ 13,300/-'],
        ['2', 'Tuition Fees / Coaching Fees', '₹ 48,000/-', '₹ 48,000/-'],
        ['3', 'Test Series (WAT×8, MAT×8, Annual×1 / Half VST×2, Full VST×2)', '₹ 2,000/-', '₹ 4,000/-'],
      ],
      total: ['', 'TOTAL', '₹ 63,300/-', '₹ 65,300/-'],
      yr1: '₹ 63,300/-', yr2: '₹ 65,300/-'
    },
    hostel: {
      rows: [
        ['1', 'Hostel Lodging', '₹ 12,000/-'],
        ['2', 'Hostel Fooding (3 Times)', '₹ 24,000/-'],
      ],
      total: ['', 'TOTAL', '₹ 36,000/-']
    },
    other: [
      ['1', 'Application Fees', '₹ 300/-'],
      ['2', 'Uniform Fees (2 Pairs, 2 T-Shirts, 2 Bags, I-Card, Library Card)', '₹ 3,500/-'],
      ['3', 'Evening Snacks (Optional)', '₹ 1,000/Month'],
    ],
    scholarship: [
      ['95% & Above', '100%', '₹ 13,300/-', '₹ 0/-',      '₹ 36,000/-', '₹ 49,300/-'],
      ['90% – 95%',   '50%',  '₹ 13,300/-', '₹ 25,000/-', '₹ 36,000/-', '₹ 74,300/-'],
      ['80% – 90%',   '40%',  '₹ 13,300/-', '₹ 30,000/-', '₹ 36,000/-', '₹ 79,300/-'],
      ['70% – 80%',   '30%',  '₹ 13,300/-', '₹ 35,000/-', '₹ 36,000/-', '₹ 84,300/-'],
      ['60% – 70%',   '20%',  '₹ 13,300/-', '₹ 40,000/-', '₹ 36,000/-', '₹ 89,300/-'],
      ['50% – 60%',   '10%',  '₹ 13,300/-', '₹ 45,000/-', '₹ 36,000/-', '₹ 94,300/-'],
      ['Below 50%',   'NO ADMISSION', '—', '—', '—', '—'],
    ]
  }

  // ── CBSE Data ──
  const cbse = {
    college: {
      rows: [
        ['1', 'Admission Fees / Re-Admission Fees', '₹ 25,600/-', '₹ 25,600/-'],
        ['2', 'Tuition Fees / Coaching Fees', '₹ 60,000/-', '₹ 60,000/-'],
        ['3', 'Test Series (WAT×8, MAT×8, Annual×1 / Half VST×2, Full VST×2)', '₹ 5,000/-', '₹ 5,000/-'],
      ],
      total: ['', 'TOTAL', '₹ 90,600/-', '₹ 90,600/-'],
      yr1: '₹ 90,600/-', yr2: '₹ 90,600/-'
    },
    hostel: {
      rows: [
        ['1', 'Hostel Lodging', '₹ 18,000/-'],
        ['2', 'Hostel Fooding (3 Times)', '₹ 36,000/-'],
      ],
      total: ['', 'TOTAL', '₹ 54,000/-'],
      acNote: true
    },
    other: [
      ['1', 'Application Fees', '₹ 500/-'],
      ['2', 'Uniform Fees (2 Pairs, 2 T-Shirts, 2 Bags, I-Card, Library Card)', '₹ 5,000/-'],
      ['3', 'Evening Snacks (Optional)', '₹ 1,000/Month'],
    ],
    scholarship: [
      ['95% & Above', '100%', '₹ 25,600/-', '₹ 0/-',      '₹ 54,000/-', '₹ 79,600/-'],
      ['90% – 95%',   '50%',  '₹ 25,600/-', '₹ 32,500/-', '₹ 54,000/-', '₹ 1,12,100/-'],
      ['80% – 90%',   '40%',  '₹ 25,600/-', '₹ 39,000/-', '₹ 54,000/-', '₹ 1,18,600/-'],
      ['70% – 80%',   '30%',  '₹ 25,600/-', '₹ 45,500/-', '₹ 54,000/-', '₹ 1,25,100/-'],
      ['60% – 70%',   '20%',  '₹ 25,600/-', '₹ 52,000/-', '₹ 54,000/-', '₹ 1,31,600/-'],
      ['50% – 60%',   '10%',  '₹ 25,600/-', '₹ 58,500/-', '₹ 54,000/-', '₹ 1,38,100/-'],
      ['Below 50%',   'NO ADMISSION', '—', '—', '—', '—'],
    ]
  }

  const data = activeTab === 'chse' ? chse : cbse
  const boardName = activeTab === 'chse' ? 'CHSE' : 'CBSE'

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', width: '100%' }}>

      {/* Banner */}
      <PageBanner
        image="/fees.jpg"
        title="Course Fees"
        subtitle="Lotus Science HSS — Fee Structure 2025"
      />

      <div style={{ background: 'white', padding: '60px 6%', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Title */}
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h1 style={{ fontSize: 'clamp(20px,3vw,28px)', fontWeight: 800, color: '#111', marginBottom: 8 }}>
              OUR <span style={{ color: gold }}>COURSE FEES</span>
            </h1>
            <p style={{ color: '#555', fontSize: 14, marginBottom: 4 }}>Lotus Science Higher Secondary School</p>
            <p style={{ color: '#777', fontSize: 13 }}>Kajala, Behind Kajala Shiv Temple, Tinimuhani, Kendrapara</p>
          </div>

          {/* ── TABS ── */}
          <div style={{
            display: 'flex', background: '#f5f5f5',
            borderRadius: 12, padding: 5,
            marginBottom: 40, width: 'fit-content', margin: '0 auto 40px'
          }}>
            {[['chse', '🎓 CHSE Board'], ['cbse', '📚 CBSE Board']].map(([key, label]) => (
              <button key={key} onClick={() => setActiveTab(key)} style={{
                padding: '12px 40px', border: 'none', borderRadius: 10,
                background: activeTab === key ? gold : 'transparent',
                color: activeTab === key ? 'white' : '#555',
                fontWeight: activeTab === key ? 700 : 400,
                fontSize: 15, cursor: 'pointer',
                fontFamily: 'inherit', transition: 'all 0.25s',
                boxShadow: activeTab === key ? '0 4px 14px rgba(245,166,35,0.4)' : 'none'
              }}>{label}</button>
            ))}
          </div>

          {/* Board Label */}
          <div style={{
            background: activeTab === 'chse' ? '#0d3349' : '#1a3a6b',
            color: 'white', borderRadius: 10, padding: '16px 24px',
            marginBottom: 8, display: 'flex', alignItems: 'center', gap: 12
          }}>
            <span style={{ fontSize: 24 }}>{activeTab === 'chse' ? '🎓' : '📚'}</span>
            <div>
              <strong style={{ fontSize: 16 }}>Lotus Science HSS ({boardName})</strong>
              <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
                Kajala, Behind Kajala Shiv Temple, Tinimuhani, Kendrapara
              </p>
            </div>
          </div>

          {/* ── COLLEGE FEES ── */}
          <h2 style={sectionTitle}>{boardName} — College Fees</h2>
          <div style={divider}></div>

          <div style={{
            display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',
            gap: 16, marginBottom: 20, padding: '16px 24px',
            background: '#fff8e1', border: '1px solid #f5a623', borderRadius: 8
          }}>
            <p style={{ fontSize: 15, fontWeight: 700, color: '#333', margin: 0 }}>
              TOTAL 1ST YEAR : <span style={{ color: '#c0392b' }}>{data.college.yr1}</span>
            </p>
            <p style={{ fontSize: 15, fontWeight: 700, color: '#333', margin: 0 }}>
              TOTAL 2ND YEAR : <span style={{ color: '#c0392b' }}>{data.college.yr2}</span>
            </p>
          </div>

          <FeeTable
            headers={['SL', 'PARTICULARS', '1ST YEAR', '2ND YEAR']}
            rows={data.college.rows}
            totalRow={data.college.total}
          />

          <div style={note}>
            ⚠️ <strong>For Integrated NEET or IIT-JEE:</strong> ₹ 30,000/- Extra per Year
          </div>

          {/* ── HOSTEL FEES ── */}
          <h2 style={sectionTitle}>Hostel Fees</h2>
          <div style={divider}></div>

          <FeeTable
            headers={['SL', 'PARTICULARS', 'AMOUNT']}
            rows={data.hostel.rows}
            totalRow={data.hostel.total}
          />

          {data.hostel.acNote && (
            <div style={note}>
              ⚠️ <strong>AC Hostel:</strong> ₹ 12,000/- Extra per Year
            </div>
          )}

          {/* ── OTHER FEES ── */}
          <h2 style={sectionTitle}>Other Fees</h2>
          <div style={divider}></div>

          <FeeTable
            headers={['SL', 'PARTICULARS', 'AMOUNT']}
            rows={data.other}
          />

          {/* ── SCHOLARSHIP ── */}
          <h2 style={sectionTitle}>Scholarship & Discount Schemes</h2>
          <div style={divider}></div>

          <ScholarshipTable rows={data.scholarship} />

          <div style={note}>
            ⚠️ <strong>Note:</strong> If a student discontinues from the study, no scheme will be applicable. He/She has to pay the full course fees of the institution.
          </div>

          {/* ── MESS FEES (CHSE only same, CBSE same structure) ── */}
          <h2 style={sectionTitle}>Fees for Mess Students</h2>
          <div style={divider}></div>

          <FeeTable
            headers={['SL', 'PARTICULARS', 'AMOUNT', 'PAYMENT SYSTEM']}
            rows={[
              ['1', 'Lodging', '₹ 12,000/-', 'One Time'],
              ['2', 'Fooding (3 Times)', '₹ 2,500/Month or ₹ 140/Day', 'One Month Advance'],
            ]}
          />

          {/* ── CTA ── */}
          <div style={{
            marginTop: 50, background: '#0d3349',
            borderRadius: 16, padding: '36px', textAlign: 'center'
          }}>
            <h3 style={{ color: 'white', fontSize: 22, fontWeight: 800, marginBottom: 12 }}>
              Ready to Join Lotus Science HSS?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, marginBottom: 24 }}>
              Apply now and take advantage of our scholarship schemes!
            </p>
            <a href="/admission" style={{
              background: gold, color: '#0a1f44',
              padding: '14px 40px', borderRadius: 6,
              fontWeight: 800, fontSize: 15, textDecoration: 'none',
              display: 'inline-block'
            }}>Apply for Admission →</a>
          </div>

        </div>
      </div>
    </div>
  )
}
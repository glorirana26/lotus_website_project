import PageBanner from '../components/PageBanner'
export default function Admission() {
  return (
    <div id="admission" style={{ fontFamily: 'Segoe UI, sans-serif', width: '100%' }}>
         <PageBanner
              image="/building.jpg"   
              title="Admission"                  
              subtitle="Join Lotus Science HSS"/>
      {/* ── Online Application Button ── */}
      <div style={{
        background: 'white', padding: '40px 6%',
        display: 'flex', justifyContent: 'center'
      }}>
        <a href="#admission-form" style={{
          background: '#c0392b', color: 'white',
          padding: '18px 60px', fontSize: 18, fontWeight: 600,
          textDecoration: 'none', borderRadius: 4,
          display: 'inline-block', transition: 'background 0.3s'
        }}
          onMouseEnter={e => e.target.style.background = '#a93226'}
          onMouseLeave={e => e.target.style.background = '#c0392b'}
        >Online Application</a>
      </div>

      {/* ── Main Admission Content ── */}
      <div style={{
        background: '#0d3349', color: 'white',
        padding: '60px 6%', width: '100%', boxSizing: 'border-box'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Title */}
          <h2 style={{
            fontSize: 'clamp(22px,3vw,30px)', fontWeight: 800,
            marginBottom: 28, color: 'white'
          }}>Our Admission Process</h2>

          {/* Seats */}
          <p style={{ fontSize: 15, marginBottom: 32, color: 'rgba(255,255,255,0.85)' }}>
            Number of Seats : <strong style={{ color: 'white', fontSize: 17 }}>512</strong>
          </p>

          {/* Compulsory Subjects */}
          <div style={{ marginBottom: 40 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: 'white' }}>Compulsory Subjects</h3>
            <div style={{ width: 40, height: 3, background: '#c8a84b', marginBottom: 20 }}></div>
            <p style={{ fontSize: 14.5, lineHeight: 1.9, color: 'rgba(255,255,255,0.85)', marginBottom: 10 }}>
              English, M.I.L., (Oriya/Alt. English / Hindi / Sanskrit – any one) and Environmental Education (1st Year Only)
            </p>
            <p style={{ fontSize: 14.5, lineHeight: 1.9, color: 'rgba(255,255,255,0.85)', marginBottom: 10 }}>
              Elective Subjects are 1st Physics, 2nd Chemistry, 3rd Mathematics & 4th Elective Subjects : Biology, Information Technology (IT), Electronics (EL), Biotechnology & Statistics (The Student is required to choose any one of the 4th Elective Subjects)
            </p>
            <p style={{ fontSize: 14.5, lineHeight: 1.9, color: 'rgba(255,255,255,0.85)' }}>
              Subject Combinations : <strong>PCM-B, PCM-IT, PCM-EL, PCB-IT</strong>
            </p>
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginBottom: 40 }}></div>

          {/* Eligibility */}
          <div style={{ marginBottom: 40 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: 'white' }}>Eligibility for Admission</h3>
            <div style={{ width: 40, height: 3, background: '#c8a84b', marginBottom: 20 }}></div>
            <p style={{ fontSize: 14.5, lineHeight: 2, color: 'rgba(255,255,255,0.85)', textAlign: 'justify' }}>
              Students who have passed the 10th Board Examination conducted by the BSE Odisha / CBSE / ICSE are eligible for admission. Admission will be strictly based on merit under the Student Academic Management System (SAMS) as per Resolution No.: 1-A-HE-4A-2010-3702/HE dated 20.02.2010 of Government of Odisha, Higher Education Department. Candidates selected under the e-admission procedure (SAMS) are intimated individually by post/e-mail in the prescribed intimation letter formulated by the Govt. of Odisha, regarding the date of admission and fees to be paid. The names of the selected candidates are also displayed in the notice board. In case of any complaint, the decision of the Principal of the destination school is final and binding.
            </p>
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginBottom: 40 }}></div>

          {/* How to Apply */}
          <div style={{ marginBottom: 40 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: 'white' }}>How to Apply</h3>
            <div style={{ width: 40, height: 3, background: '#c8a84b', marginBottom: 20 }}></div>
            <p style={{ fontSize: 14.5, lineHeight: 2, color: 'rgba(255,255,255,0.85)', textAlign: 'justify' }}>
              The admission into the Higher Secondary School shall be done through the ONLINE e-admission procedure under SAMS for the academic session. Students shall download the Common Application Form from the Govt. of Odisha website (www.dheorissa.in) only after the publication of results from the Board of Secondary Education, Odisha.
            </p>
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginBottom: 40 }}></div>

          {/* Submission of CAF */}
          <div style={{ marginBottom: 40 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: 'white' }}>Submission of Common Application Form (CAF)</h3>
            <div style={{ width: 40, height: 3, background: '#c8a84b', marginBottom: 20 }}></div>
            <p style={{ fontSize: 14.5, lineHeight: 2, color: 'rgba(255,255,255,0.85)', textAlign: 'justify' }}>
              After the 'Application Forms' is collected from the Govt. website for admission into the +2 streams, the student must read the CAF carefully and fill it in CAPITAL LETTERS and submit the form online only. Printed copy of the form and certificates will be submitted in the destination college / Resource Centre / Nodal College within the prescribed period by the Govt. of Odisha.
            </p>
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginBottom: 40 }}></div>

          {/* Documents */}
          <div style={{ marginBottom: 40 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: 'white' }}>Documents to be Submitted at the Time of Admission</h3>
            <div style={{ width: 40, height: 3, background: '#c8a84b', marginBottom: 24 }}></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
              {[
                'SLC in Original',
                'Attested photocopy of Mark-sheet of the 10th Board Exam',
                'Conduct certificate in original',
                'Four recent passport size coloured photographs',
                'Attested photocopy of the caste certificate (for reserve categories only)',
                'Migration certificate in original (for students from boards other than the BSE)',
              ].map((doc, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  padding: '14px 16px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: 10,
                  border: '1px solid rgba(255,255,255,0.08)'
                }}>
                  <span style={{ color: '#c8a84b', fontSize: 18, flexShrink: 0, marginTop: 2 }}>→</span>
                  <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14, lineHeight: 1.6 }}>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginBottom: 40 }}></div>

          {/* Online Application Form */}
          <div id="admission-form">
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: 'white' }}>Online Application Form</h3>
            <div style={{ width: 40, height: 3, background: '#c8a84b', marginBottom: 28 }}></div>
            <div style={{
              background: 'rgba(255,255,255,0.05)', borderRadius: 16,
              padding: '36px', border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="adm-form-grid">
                {[
                  ['Full Name', 'text', 'Enter your full name'],
                  ['Father\'s Name', 'text', 'Enter father\'s name'],
                  ['Date of Birth', 'date', ''],
                  ['Mobile Number', 'tel', '+91 XXXXX XXXXX'],
                  ['Email Address', 'email', 'your@email.com'],
                  ['10th Board', 'text', 'BSE / CBSE / ICSE'],
                  ['10th Percentage', 'text', 'e.g. 85%'],
                  ['Preferred Course', 'text', 'PCM-B / PCM-IT / PCB-IT'],
                ].map(([label, type, ph]) => (
                  <div key={label}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>{label}</label>
                    <input type={type} placeholder={ph} style={{
                      width: '100%', padding: '12px 14px',
                      background: 'rgba(255,255,255,0.08)',
                      border: '1.5px solid rgba(255,255,255,0.15)',
                      borderRadius: 10, fontSize: 14, color: 'white',
                      fontFamily: 'inherit', outline: 'none',
                      boxSizing: 'border-box'
                    }}
                      onFocus={e => e.target.style.borderColor = '#c8a84b'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
                    />
                  </div>
                ))}
              </div>

              {/* Address - full width */}
              <div style={{ marginTop: 20 }}>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>Full Address</label>
                <textarea rows={3} placeholder="Enter your complete address..." style={{
                  width: '100%', padding: '12px 14px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1.5px solid rgba(255,255,255,0.15)',
                  borderRadius: 10, fontSize: 14, color: 'white',
                  fontFamily: 'inherit', outline: 'none',
                  resize: 'vertical', boxSizing: 'border-box'
                }}
                  onFocus={e => e.target.style.borderColor = '#c8a84b'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
                />
              </div>

              <button style={{
                marginTop: 24, background: '#c0392b', color: 'white',
                border: 'none', padding: '15px 48px',
                borderRadius: 8, fontSize: 15, fontWeight: 700,
                cursor: 'pointer', fontFamily: 'inherit',
                transition: 'background 0.3s'
              }}
                onMouseEnter={e => e.target.style.background = '#a93226'}
                onMouseLeave={e => e.target.style.background = '#c0392b'}
                onClick={() => alert('Application submitted! We will contact you soon. 🪷')}
              >Submit Application →</button>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .adm-form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
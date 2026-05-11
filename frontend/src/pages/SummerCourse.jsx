import { useState } from 'react'
import PageBanner from '../components/PageBanner'

export default function SummerCourse() {
  const [form, setForm] = useState({
    name: '', fatherName: '', mobile: '', email: '',
    school: '', currentClass: '', board: '', percentage: '', address: ''
  })
  const [fieldErrors, setFieldErrors] = useState({})
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email)
  const isValidPhone = (phone) => /^[6-9]\d{9}$/.test(phone)

  const validateField = (field, value) => {
    let msg = ''
    if (field === 'name' && value.length > 0 && value.length < 3) msg = 'Name must be at least 3 characters'
    if (field === 'mobile' && value.length > 0 && !isValidPhone(value)) msg = 'Enter valid 10 digit mobile number starting with 6-9'
    if (field === 'email' && value.length > 0 && !isValidEmail(value)) msg = 'Enter valid email address (e.g. abc@gmail.com)'
    setFieldErrors(prev => ({ ...prev, [field]: msg }))
  }

  const handleSubmit = async () => {
    if (!form.name || form.name.length < 3) return setError('Enter valid full name')
    if (!isValidPhone(form.mobile)) return setError('Enter valid 10 digit mobile number')
    if (!isValidEmail(form.email)) return setError('Enter valid email address')
    if (!form.school) return setError('Please enter your school name')
    if (!form.currentClass) return setError('Please enter your current class')
    if (!form.address) return setError('Address is required')

    setError('')

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL || 'https://lotus-backend-dfsi.onrender.com/api'}/enquiries`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name,
            mobile: form.mobile,
            email: form.email,
            course: 'Summer Course Registration',
            message: `Father: ${form.fatherName}, School: ${form.school}, Class: ${form.currentClass}, Board: ${form.board}, %: ${form.percentage}, Address: ${form.address}`
          })
        }
      )
      if (res.ok) {
        setSubmitted(true)
        setForm({ name: '', fatherName: '', mobile: '', email: '', school: '', currentClass: '', board: '', percentage: '', address: '' })
        setFieldErrors({})
      } else {
        setError('Server error. Please try again!')
      }
    } catch {
      setError('Server error. Please check your connection!')
    }
  }

  const inputStyle = (field) => ({
    width: '100%', padding: '12px 14px',
    background: 'rgba(255,255,255,0.08)',
    border: `1.5px solid ${fieldErrors[field] ? '#ff4d4d' : 'rgba(255,255,255,0.15)'}`,
    borderRadius: 10, fontSize: 14, color: 'white',
    fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box'
  })

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', width: '100%' }}>

      {/* Banner */}
      <PageBanner
        image="/images/students.jpeg"
        title="Summer Course"
        subtitle="Special program for Class X students"
      />

      {/* Main Content */}
      <div style={{ background: '#f5f5f5', padding: '70px 6%', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', maxWidth: 1300, margin: '0 auto' }} className="summer-grid">

          {/* Left Text */}
          <div>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 800, color: '#111', marginBottom: 24 }}>Summer Course</h2>
            <p style={{ fontSize: 15, lineHeight: 1.95, color: '#333', textAlign: 'justify', marginBottom: 20 }}>
              The Summer Course is specially and systematically designed by Lotus Science Higher Secondary School,
              aimed at the students of class X to have access and understand the demands of the science stream
              in the senior secondary classes.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.95, color: '#333', textAlign: 'justify', marginBottom: 32 }}>
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
                <div key={label} style={{ background: 'white', borderRadius: 12, padding: '16px 18px', borderLeft: '3px solid #c0392b', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: 20, marginBottom: 6 }}>{icon}</div>
                  <div style={{ fontSize: 11, color: '#888', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>{label}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#111', marginTop: 3 }}>{val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div style={{ position: 'relative' }}>
            <img
              src="/images/summer-course.jpg"
              alt="Summer Course"
              style={{ width: '100%', height: '460px', objectFit: 'cover', display: 'block', borderRadius: 4, boxShadow: '0 8px 40px rgba(0,0,0,0.15)' }}
              onError={e => { e.target.src = 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800' }}
            />
            <div style={{ position: 'absolute', bottom: 24, left: -20, background: '#c0392b', color: 'white', padding: '16px 24px', borderRadius: 12, boxShadow: '0 8px 24px rgba(192,57,43,0.4)', textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 800 }}>45</div>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1 }}>DAYS PROGRAM</div>
            </div>
          </div>
        </div>
      </div>

      {/* What You Will Learn */}
      <div style={{ background: '#0d3349', padding: '70px 6%', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(22px,3vw,30px)', fontWeight: 800, marginBottom: 8 }}>What You Will Learn</h2>
          <div style={{ width: 40, height: 3, background: '#c8a84b', marginBottom: 40 }}></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {[
              { icon: '⚗️', subject: 'Chemistry', topics: ['Atomic Structure', 'Chemical Bonding', 'Periodic Table', 'Basic Reactions'] },
              { icon: '🔭', subject: 'Physics', topics: ['Mechanics', 'Optics', 'Electricity', 'Modern Physics Basics'] },
              { icon: '🧮', subject: 'Mathematics', topics: ['Algebra', 'Trigonometry', 'Coordinate Geometry', 'Calculus Intro'] },
              { icon: '🧬', subject: 'Biology', topics: ['Cell Biology', 'Human Physiology', 'Genetics Basics', 'Ecology'] },
            ].map(item => (
              <div key={item.subject} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 16, padding: '28px 24px', border: '1px solid rgba(255,255,255,0.1)', transition: 'transform 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: 40, marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ color: '#c8a84b', fontSize: 18, fontWeight: 700, marginBottom: 16 }}>{item.subject}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {item.topics.map(t => (
                    <li key={t} style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13.5, padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ color: '#c8a84b', fontSize: 10 }}>●</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div style={{ background: '#0d3349', padding: '0 6% 70px', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(22px,3vw,30px)', fontWeight: 800, marginBottom: 8 }}>
            Register for Summer Course
          </h2>
          <div style={{ width: 40, height: 3, background: '#c8a84b', marginBottom: 32 }}></div>

          {submitted ? (
            <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 20, padding: '60px 40px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: 64, marginBottom: 16 }}>🪷</div>
              <h3 style={{ color: 'white', fontSize: 26, fontWeight: 800, marginBottom: 10 }}>Registration Successful!</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, marginBottom: 24 }}>
                We have received your registration. Our team will contact you soon with further details!
              </p>
              <button onClick={() => setSubmitted(false)} style={{ background: '#c0392b', color: 'white', border: 'none', padding: '12px 32px', borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' }}>
                Register Another Student
              </button>
            </div>
          ) : (
            <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 20, padding: '40px 36px', border: '1px solid rgba(255,255,255,0.1)' }}>

              {error && <p style={{ color: '#ff4d4d', marginBottom: 16, fontSize: 14 }}>⚠️ {error}</p>}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="summer-form-grid">
                {[
                  ['Student Name', 'text', 'Enter full name', 'name'],
                  ["Father's Name", 'text', "Enter father's name", 'fatherName'],
                  ['Mobile Number', 'tel', '+91 XXXXX XXXXX', 'mobile'],
                  ['Email Address', 'email', 'your@email.com', 'email'],
                  ['Current School', 'text', 'Enter school name', 'school'],
                  ['Current Class', 'text', 'e.g. Class X', 'currentClass'],
                  ['Board', 'text', 'BSE / CBSE', 'board'],
                  ['10th % (if appeared)', 'text', 'e.g. 85% (optional)', 'percentage'],
                ].map(([label, type, ph, field]) => (
                  <div key={field}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>{label}</label>
                    <input
                      type={type}
                      placeholder={ph}
                      value={form[field]}
                      onChange={e => {
                        setForm({ ...form, [field]: e.target.value })
                        validateField(field, e.target.value)
                      }}
                      style={inputStyle(field)}
                      onFocus={e => e.target.style.borderColor = '#c8a84b'}
                      onBlur={e => e.target.style.borderColor = fieldErrors[field] ? '#ff4d4d' : 'rgba(255,255,255,0.15)'}
                    />
                    {fieldErrors[field] && (
                      <p style={{ color: '#ff4d4d', fontSize: 12, marginTop: 5, marginBottom: 0 }}>⚠️ {fieldErrors[field]}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Address */}
              <div style={{ marginTop: 20 }}>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>Full Address</label>
                <textarea
                  rows={3}
                  placeholder="Enter your complete address..."
                  value={form.address}
                  onChange={e => setForm({ ...form, address: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 10, fontSize: 14, color: 'white', fontFamily: 'inherit', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                  onFocus={e => e.target.style.borderColor = '#c8a84b'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
                />
              </div>

              <button onClick={handleSubmit} style={{ marginTop: 28, background: '#c0392b', color: 'white', border: 'none', padding: '15px 48px', borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
                Register Now →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#193c7d', padding: '50px 6%', textAlign: 'center' }}>
        <h2 style={{ color: 'white', fontSize: 'clamp(20px,3vw,28px)', fontWeight: 800, marginBottom: 12 }}>
          Secure Your Seat in Summer Course 2025!
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, marginBottom: 28 }}>
          Limited seats available. Register now before it's too late!
        </p>
        <a href="#" onClick={e => { e.preventDefault(); document.querySelector('.summer-form-grid')?.scrollIntoView({ behavior: 'smooth' }) }}
          style={{ display: 'inline-block', background: 'white', color: '#c0392b', padding: '14px 48px', borderRadius: 6, fontWeight: 800, fontSize: 16, textDecoration: 'none' }}>
          Register Now →
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .summer-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .summer-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
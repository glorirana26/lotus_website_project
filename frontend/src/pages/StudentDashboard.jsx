import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function StudentDashboard() {
  const navigate = useNavigate()
  const [student, setStudent] = useState(null)
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({})
  const [loading, setLoading] = useState(true)
  const [saved, setSaved] = useState(false)

  const token = localStorage.getItem('token')

  useEffect(() => {
    const s = localStorage.getItem('student')
    if (!s || !token) { navigate('/login'); return }
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/students/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
      setStudent(res.data)
      setForm(res.data)
    } catch {
      navigate('/login')
    }
    setLoading(false)
  }

  const saveProfile = async () => {
    try {
      const res = await axios.patch('http://localhost:8080/api/students/me', form, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setStudent(res.data.student)
      localStorage.setItem('student', JSON.stringify(res.data.student))
      setEditing(false)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch {
      alert('Could not update. Try again!')
    }
  }

  const logout = () => {
    localStorage.clear()
    navigate('/login')
  }

  if (loading) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f9ff' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🪷</div>
        <p style={{ color: '#666' }}>Loading...</p>
      </div>
    </div>
  )

  const notices = [
    { icon: '🗓️', title: 'Unit Test – Physics', date: 'May 10, 2025', color: '#1e5fc4' },
    { icon: '📝', title: 'CHSE Form Fill-up Deadline', date: 'May 15, 2025', color: '#e67e22' },
    { icon: '🎉', title: 'Annual Day Celebration', date: 'May 20, 2025', color: '#27ae60' },
    { icon: '📚', title: 'Library Extended Hours Start', date: 'May 1, 2025', color: '#8e44ad' },
    { icon: '🏆', title: 'Science Quiz Competition', date: 'May 25, 2025', color: '#e74c3c' },
  ]

  const inp = {
    width: '100%', padding: '11px 14px',
    border: '1.5px solid #e0e0e0', borderRadius: 10,
    fontSize: 14, fontFamily: 'inherit', outline: 'none',
    background: '#f8f9ff', boxSizing: 'border-box'
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f0f4ff', fontFamily: 'Segoe UI, sans-serif' }}>

      {/* Header */}
      <div style={{
        background: '#0a1f44', padding: '0 5%', height: 68,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        boxShadow: '0 2px 20px rgba(0,0,0,0.3)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 28 }}>🪷</span>
          <div>
            <strong style={{ color: 'white', fontSize: 15, display: 'block' }}>Student Portal</strong>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>Lotus Science HSS</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button onClick={() => navigate('/')} style={{
            background: 'transparent', border: '1.5px solid rgba(255,255,255,0.3)',
            color: 'white', padding: '8px 16px', borderRadius: 8,
            cursor: 'pointer', fontFamily: 'inherit', fontSize: 13
          }}>🏠 Home</button>
          <button onClick={logout} style={{
            background: '#e74c3c', color: 'white', border: 'none',
            padding: '8px 18px', borderRadius: 8, cursor: 'pointer',
            fontFamily: 'inherit', fontWeight: 700, fontSize: 13
          }}>Logout</button>
        </div>
      </div>

      <div style={{ padding: '36px 5%', maxWidth: 1100, margin: '0 auto' }}>

        {/* Welcome Card */}
        <div style={{
          background: 'linear-gradient(135deg, #0a1f44, #1a3a6b)',
          borderRadius: 24, padding: '40px 36px', marginBottom: 28,
          display: 'flex', alignItems: 'center', gap: 28,
          boxShadow: '0 8px 32px rgba(10,31,68,0.3)'
        }}>
          <div style={{
            width: 88, height: 88, borderRadius: '50%',
            background: 'rgba(255,255,255,0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 44, flexShrink: 0,
            border: '2px solid rgba(200,168,75,0.5)'
          }}>🎓</div>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', margin: '0 0 6px' }}>Welcome Back</p>
            <h2 style={{ color: 'white', fontSize: 28, fontWeight: 800, margin: '0 0 6px' }}>{student?.name}</h2>
            <p style={{ color: '#c8a84b', margin: 0, fontSize: 14, fontWeight: 600 }}>{student?.course || 'Course not assigned'}</p>
          </div>
          {student?.roll_number && (
            <div style={{
              marginLeft: 'auto', background: 'rgba(200,168,75,0.2)',
              border: '1px solid rgba(200,168,75,0.5)',
              borderRadius: 12, padding: '14px 20px', textAlign: 'center'
            }}>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 }}>Roll Number</div>
              <div style={{ color: '#c8a84b', fontSize: 22, fontWeight: 800 }}>{student.roll_number}</div>
            </div>
          )}
        </div>

        {/* Success Message */}
        {saved && (
          <div style={{
            background: '#d4edda', border: '1px solid #c3e6cb',
            color: '#155724', padding: '12px 20px', borderRadius: 10,
            marginBottom: 20, fontWeight: 600, fontSize: 14
          }}>✅ Profile updated successfully!</div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>

          {/* Profile Card */}
          <div style={{ background: 'white', borderRadius: 20, padding: '28px 24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#0a1f44' }}>👤 My Profile</h3>
              <button onClick={() => setEditing(!editing)} style={{
                background: editing ? '#fff0f0' : '#e8f4fd',
                color: editing ? '#e74c3c' : '#1e5fc4',
                border: 'none', padding: '7px 16px', borderRadius: 8,
                cursor: 'pointer', fontWeight: 600, fontSize: 13, fontFamily: 'inherit'
              }}>{editing ? 'Cancel' : '✏️ Edit'}</button>
            </div>

            {editing ? (
              <>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>Name</label>
                  <input style={inp} value={form.name || ''} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>Phone</label>
                  <input style={inp} value={form.phone || ''} onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>Course</label>
                  <select style={{ ...inp }} value={form.course || ''} onChange={e => setForm({ ...form, course: e.target.value })}>
                    <option value="">-- Select --</option>
                    <option>PCM – Physics, Chemistry, Mathematics</option>
                    <option>PCB – Physics, Chemistry, Biology</option>
                    <option>Crash Course – NEET</option>
                    <option>Crash Course – JEE</option>
                  </select>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>New Password (optional)</label>
                  <input style={inp} type="password" placeholder="Leave empty if not changing"
                    onChange={e => setForm({ ...form, password: e.target.value })} />
                </div>
                <button onClick={saveProfile} style={{
                  width: '100%', padding: 13,
                  background: 'linear-gradient(135deg, #1e5fc4, #0a1f44)',
                  color: 'white', border: 'none', borderRadius: 10,
                  fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit'
                }}>💾 Save Changes</button>
              </>
            ) : (
              <>
                {[
                  ['👤', 'Naam', student?.name],
                  ['📧', 'Email', student?.email],
                  ['📞', 'Phone', student?.phone || 'Not added'],
                  ['📚', 'Course', student?.course || 'Not assigned'],
                  ['🎫', 'Roll No', student?.roll_number || 'Will be assigned by Admin'],
                  ['📅', 'Join Date', student?.created_at ? new Date(student.created_at).toLocaleDateString('en-IN') : '—'],
                ].map(([icon, label, val]) => (
                  <div key={label} style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '12px 0', borderBottom: '1px solid #f5f5f5'
                  }}>
                    <span style={{ fontSize: 20, width: 28, textAlign: 'center' }}>{icon}</span>
                    <div>
                      <div style={{ fontSize: 11, color: '#aaa', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>{label}</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#0a1f44' }}>{val}</div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Notice Board */}
          <div style={{ background: 'white', borderRadius: 20, padding: '28px 24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <h3 style={{ margin: '0 0 24px', fontSize: 18, fontWeight: 700, color: '#0a1f44' }}>📌 Notice Board</h3>
            {notices.map((n, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '14px 0', borderBottom: i < notices.length - 1 ? '1px solid #f5f5f5' : 'none'
              }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 12, flexShrink: 0,
                  background: `${n.color}15`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20
                }}>{n.icon}</div>
                <div style={{ flex: 1 }}>
                  <strong style={{ fontSize: 14, color: '#0a1f44', display: 'block', marginBottom: 3 }}>{n.title}</strong>
                  <span style={{ fontSize: 12, color: '#aaa' }}>{n.date}</span>
                </div>
                <span style={{
                  background: `${n.color}15`, color: n.color,
                  padding: '4px 10px', borderRadius: 20, fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap'
                }}>Upcoming</span>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div style={{ background: 'white', borderRadius: 20, padding: '28px 24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', gridColumn: 'span 2' }}>
            <h3 style={{ margin: '0 0 20px', fontSize: 18, fontWeight: 700, color: '#0a1f44' }}>⚡ Quick Links</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
              {[
                ['📋', 'CHSE Website', 'https://chseodisha.nic.in', '#1e5fc4'],
                ['🔬', 'NEET Portal', 'https://neet.nta.nic.in', '#27ae60'],
                ['⚙️', 'JEE Portal', 'https://jeemain.nta.nic.in', '#e67e22'],
                ['📚', 'NCERT Books', 'https://ncert.nic.in', '#8e44ad'],
              ].map(([icon, label, url, color]) => (
                <a key={label} href={url} target="_blank" rel="noreferrer" style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                  padding: '20px 16px', borderRadius: 14, textDecoration: 'none',
                  background: `${color}10`, border: `1px solid ${color}25`,
                  transition: 'transform 0.2s'
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <span style={{ fontSize: 32 }}>{icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color, textAlign: 'center' }}>{label}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
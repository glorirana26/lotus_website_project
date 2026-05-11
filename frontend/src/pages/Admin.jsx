import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Admin() {
  const navigate = useNavigate()
  const [enquiries, setEnquiries] = useState([])
  const [stats, setStats] = useState({})
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  const token = localStorage.getItem('token')

  useEffect(() => {
    if (!localStorage.getItem('adminLoggedIn')) {
      navigate('/login')
      return
    }
    fetchAll()
  }, [])

  const fetchAll = async () => {
    setLoading(true)
    try {
      const headers = { Authorization: `Bearer ${token}` }
      const base = import.meta.env.VITE_API_URL || 'https://lotus-backend-dfsi.onrender.com/api'

      const [enqRes, statRes] = await Promise.all([
        fetch(`${base}/enquiries`, { headers }),
        fetch(`${base}/enquiries/stats`, { headers }),
      ])
      const enqData = await enqRes.json()
      const statData = await statRes.json()
      setEnquiries(Array.isArray(enqData) ? enqData : [])
      setStats(statData)
    } catch {
      alert('Session expired! Please login again.')
      navigate('/login')
    }
    setLoading(false)
  }

  const deleteEnquiry = async (id) => {
    if (!window.confirm('Are you sure you want to delete this enquiry?')) return
    const base = import.meta.env.VITE_API_URL || 'https://lotus-backend-dfsi.onrender.com/api'
    await fetch(`${base}/enquiries/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })
    setEnquiries(enquiries.filter(e => e.id !== id))
  }

  const updateStatus = async (id, status) => {
    const base = import.meta.env.VITE_API_URL || 'https://lotus-backend-dfsi.onrender.com/api'
    await fetch(`${base}/enquiries/${id}/status`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    })
    setEnquiries(enquiries.map(e => e.id === id ? { ...e, status } : e))
  }

  const logout = () => {
    localStorage.clear()
    navigate('/login')
  }

  const filtered = enquiries.filter(e =>
    e.name?.toLowerCase().includes(search.toLowerCase()) ||
    e.mobile?.includes(search) ||
    e.course?.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f4ff', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🪷</div>
        <p style={{ color: '#666' }}>Loading...</p>
      </div>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', background: '#f0f4ff', fontFamily: 'Segoe UI, sans-serif' }}>

      {/* Header */}
      <div style={{ background: '#0a1f44', padding: '0 5%', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 28 }}>🪷</span>
          <div>
            <strong style={{ color: 'white', fontSize: 15, display: 'block' }}>Admin Panel</strong>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>Lotus Science HSS</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button onClick={() => navigate('/')} style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.3)', color: 'white', padding: '8px 16px', borderRadius: 8, cursor: 'pointer', fontFamily: 'inherit', fontSize: 13 }}>🏠 Home</button>
          <button onClick={logout} style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '8px 18px', borderRadius: 8, cursor: 'pointer', fontFamily: 'inherit', fontWeight: 700, fontSize: 13 }}>Logout</button>
        </div>
      </div>

      <div style={{ padding: '36px 5%', maxWidth: 1200, margin: '0 auto' }}>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 }} className="stats-grid">
          {[
            ['📋', 'Total Enquiries', stats.total || 0, '#1e5fc4'],
            ['⏳', 'Pending', stats.pending || 0, '#e67e22'],
            ['✅', 'Resolved', stats.resolved || 0, '#27ae60'],
            ['📅', 'Today', stats.today || 0, '#e74c3c'],
          ].map(([icon, label, val, color]) => (
            <div key={label} style={{ background: 'white', borderRadius: 16, padding: '22px 18px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', borderTop: `3px solid ${color}` }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
              <div style={{ fontSize: 28, fontWeight: 800, color, marginBottom: 4 }}>{val}</div>
              <div style={{ fontSize: 12, color: '#888' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div style={{ marginBottom: 20 }}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="🔍 Search by name, mobile or course..."
            style={{ padding: '12px 18px', border: '1.5px solid #e0e0e0', borderRadius: 10, fontSize: 14, fontFamily: 'inherit', outline: 'none', width: 380, background: 'white' }}
          />
        </div>

        {/* Enquiries Table */}
        <div style={{ background: 'white', borderRadius: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#0a1f44' }}>All Enquiries ({filtered.length})</h3>
            <button onClick={fetchAll} style={{ background: '#f0f4ff', color: '#1e5fc4', border: 'none', padding: '8px 16px', borderRadius: 8, cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600, fontSize: 13 }}>🔄 Refresh</button>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8f9ff' }}>
                  {['#', 'Name', 'Mobile', 'Email', 'Course', 'Message', 'Status', 'Date', 'Action'].map(h => (
                    <th key={h} style={{ padding: '14px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: 1, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={9} style={{ textAlign: 'center', padding: 40, color: '#aaa', fontSize: 15 }}>
                      No enquiries found 📭
                    </td>
                  </tr>
                ) : filtered.map((e, i) => (
                  <tr key={e.id} style={{ borderBottom: '1px solid #f5f5f5' }}>
                    <td style={{ padding: '14px 16px', color: '#aaa', fontSize: 13 }}>{i + 1}</td>
                    <td style={{ padding: '14px 16px', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}>{e.name}</td>
                    <td style={{ padding: '14px 16px', fontSize: 13 }}>{e.mobile}</td>
                    <td style={{ padding: '14px 16px', fontSize: 13, color: '#1e5fc4' }}>{e.email || '—'}</td>
                    <td style={{ padding: '14px 16px', fontSize: 12, whiteSpace: 'nowrap' }}>{e.course || '—'}</td>
                    <td style={{ padding: '14px 16px', fontSize: 12, color: '#888', maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{e.message || '—'}</td>
                    <td style={{ padding: '14px 16px' }}>
                      <select value={e.status} onChange={ev => updateStatus(e.id, ev.target.value)} style={{
                        padding: '5px 10px', borderRadius: 20, border: 'none',
                        fontWeight: 700, fontSize: 11, cursor: 'pointer',
                        background: e.status === 'pending' ? '#fff3cd' : '#d4edda',
                        color: e.status === 'pending' ? '#856404' : '#155724'
                      }}>
                        <option value="pending">⏳ Pending</option>
                        <option value="resolved">✅ Resolved</option>
                      </select>
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: 12, color: '#aaa', whiteSpace: 'nowrap' }}>
                      {e.submitted_at ? new Date(e.submitted_at).toLocaleDateString('en-IN') : '—'}
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      <button onClick={() => deleteEnquiry(e.id)} style={{ background: '#fff0f0', color: '#e74c3c', border: 'none', padding: '6px 12px', borderRadius: 6, cursor: 'pointer', fontSize: 12, fontWeight: 600 }}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  )
}
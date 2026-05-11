import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('admin')
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const loginAdmin = async () => {
    if (!form.username || !form.password) return setError('Please enter username and password!')
    setLoading(true)
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL || 'https://lotus-backend-dfsi.onrender.com/api'}/auth/admin-login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: form.username, password: form.password })
        }
      )
      const data = await res.json()
      if (res.ok) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('adminLoggedIn', 'true')
        navigate('/admin')
      } else {
        setError(data.error || 'Invalid credentials')
      }
    } catch {
      setError('Server error. Please try again!')
    }
    setLoading(false)
  }

  const inp = {
    width: '100%', padding: '13px 16px',
    border: '1.5px solid #e0e0e0', borderRadius: 10,
    fontSize: 14, fontFamily: 'inherit', outline: 'none',
    marginBottom: 14, boxSizing: 'border-box', background: '#f8f9ff',
    color: '#333'
  }

  const btn = {
    width: '100%', padding: 14,
    background: 'linear-gradient(135deg, #1e5fc4, #0a1f44)',
    color: 'white', border: 'none', borderRadius: 10,
    fontSize: 15, fontWeight: 700, cursor: 'pointer',
    fontFamily: 'inherit', marginTop: 4
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a1f44, #1a3a6b)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 20, fontFamily: 'Segoe UI, sans-serif'
    }}>
      <div style={{
        background: 'white', borderRadius: 24, padding: '44px 40px',
        width: '100%', maxWidth: 420,
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 50, marginBottom: 8 }}>🪷</div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0a1f44', margin: 0 }}>
            Lotus Science HSS
          </h2>
          <p style={{ color: '#888', fontSize: 13, marginTop: 4 }}>Kendrapara, Odisha</p>
        </div>

        {/* Admin Login Form */}
        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0a1f44', marginBottom: 20, textAlign: 'center' }}>
          🛠️ Admin Login
        </h3>

        {error && (
          <div style={{
            background: '#fff0f0', border: '1px solid #ffcccc',
            color: '#c0392b', padding: '10px 14px', borderRadius: 8,
            fontSize: 13, marginBottom: 16
          }}>⚠️ {error}</div>
        )}

        <input
          style={inp}
          placeholder="Admin Username"
          value={form.username}
          onChange={e => setForm({ ...form, username: e.target.value })}
        />
        <input
          style={inp}
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
          onKeyDown={e => e.key === 'Enter' && loginAdmin()}
        />
        <button style={btn} onClick={loginAdmin} disabled={loading}>
          {loading ? 'Logging in...' : 'Login as Admin'}
        </button>

        <p style={{ textAlign: 'center', marginTop: 14, fontSize: 12, color: '#aaa' }}>
          Default: admin / lotus@123
        </p>

        <button onClick={() => navigate('/')} style={{
          width: '100%', marginTop: 16, padding: '10px 0',
          background: 'transparent', border: '1.5px solid #e0e0e0',
          borderRadius: 10, color: '#888', cursor: 'pointer',
          fontFamily: 'inherit', fontSize: 13
        }}>← Back to Home</button>
      </div>
    </div>
  )
}
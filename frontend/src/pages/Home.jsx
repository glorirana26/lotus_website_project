import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1400',
    title: 'Welcome to Lotus Science HSS',
    subtitle: 'Preparation to fly high in life',
    btn: 'Explore Academics'
  },
  {
    id: 2,
    image: '/images/banner.jpeg',
    title: 'Excellence in Science Education',
    subtitle: 'Best coaching for Engineering & Medical entrance in Odisha',
    btn: 'View Results'
  },
  {
    id: 3,
    image: '/images/campus.jpg',
    title: 'JEE & NEET Coaching Now Started',
    subtitle: 'Start your journey for Engineering & Medical entrance',
    btn: 'Apply Now'
  }
]

const toppers = [
  { name: 'SUBHADRA',  roll: 'LSS001', percent: '88.33%', score: '530' },
  { name: 'SHUVRANSHU',    roll: 'LSS002', percent: '88.00%', score: '528' },
  { name: 'SUVAJIT',       roll: 'LSS003', percent: '86.33%', score: '518' },
  { name: 'PRATEEKSHYA',      roll: 'LSS004', percent: '86.17%', score: '517' },
  { name: 'SANDIP',      roll: 'LSS005', percent: '84.50%', score: '507' },
  { name: 'TWINKLE',     roll: 'LSS006', percent: '83.83%', score: '503' },
]

const gallery = [
  { img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600', label: 'Main Campus' },
  { img: '/images/computer.jpeg', label: 'Computer lab' },
  { img: '/images/lab.jpeg', label: 'Science Lab' },
  { img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600', label: 'Library' },
  { img: '/images/physics.jpeg', label: 'Physics lab' },
  { img: '/images/chem.jpeg', label: 'Chemistry lab' },
  { img: '/images/botany.jpeg', label: 'Biology ' },
  { img: '/images/classroom.jpg', label: 'classroom' },
  { img: '/images/hostel.jpeg', label: 'Hostel' },
]

export default function Home() {
  const navigate = useNavigate()
  const [current, setCurrent]     = useState(0)
  const [form, setForm]           = useState({ name: '', mobile: '', email: '', course: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const handleSubmit = async () => {
    if (!form.name || !form.mobile) return alert('Please enter name and mobile number!')
    try {
      await axios.post('http://localhost:8080/api/enquiries', form)
      setSubmitted(true)
    } catch {
      alert('Server error. Is backend running?')
    }
  }

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', background: '#fff' }}>
      {/* ── HERO SLIDER ── */}
      <section id="home" style={{ marginTop: 68, position: 'relative', height: '92vh', overflow: 'hidden' }}>
        {slides.map((slide, i) => (
          <div key={slide.id} style={{
            position: 'absolute', inset: 0,
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1s ease',
          }}>
            <img src={slide.image} alt={slide.title} style={{
              width: '100%', height: '100%', objectFit: 'cover'
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, rgba(10,31,68,0.85) 40%, rgba(10,31,68,0.3))',
              display: 'flex', alignItems: 'center', padding: '0 6%'
            }}>
              <div style={{ maxWidth: 620 }}>
                <div style={{
                  background: 'rgba(200,168,75,0.2)', border: '1px solid rgba(200,168,75,0.5)',
                  color: '#c8a84b', display: 'inline-block', padding: '6px 18px',
                  borderRadius: 50, fontSize: 12, letterSpacing: 2, marginBottom: 20
                }}>🪷 KENDRAPARA, ODISHA</div>
                <h1 style={{
                  color: 'white', fontSize: 'clamp(26px, 5vw, 58px)',
                  fontWeight: 800, lineHeight: 1.15, marginBottom: 16
                }}>{slide.title}</h1>
                <p style={{
                  color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(14px, 2vw, 17px)',
                  lineHeight: 1.7, marginBottom: 32
                }}>{slide.subtitle}</p>
                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <a href="#contact" style={{
                    background: '#c8a84b', color: '#0a1f44',
                    padding: '13px 28px', borderRadius: 8,
                    fontWeight: 700, textDecoration: 'none', fontSize: 14
                  }}>{slide.btn}</a>
                  <a href="#about" style={{
                    border: '1.5px solid rgba(255,255,255,0.5)', color: 'white',
                    padding: '13px 28px', borderRadius: 8,
                    textDecoration: 'none', fontSize: 14
                  }}>Learn More</a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div style={{
          position: 'absolute', bottom: 24, left: '50%',
          transform: 'translateX(-50%)', display: 'flex', gap: 10
        }}>
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              width: i === current ? 28 : 10, height: 10,
              borderRadius: 5, border: 'none', cursor: 'pointer',
              background: i === current ? '#c8a84b' : 'rgba(255,255,255,0.5)',
              transition: 'all 0.3s'
            }} />
          ))}
        </div>

        {/* Arrows */}
        <button onClick={() => setCurrent((current - 1 + slides.length) % slides.length)} style={{
          position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white',
          width: 40, height: 40, borderRadius: '50%', fontSize: 20, cursor: 'pointer'
        }}>‹</button>
        <button onClick={() => setCurrent((current + 1) % slides.length)} style={{
          position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white',
          width: 40, height: 40, borderRadius: '50%', fontSize: 20, cursor: 'pointer'
        }}>›</button>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{
        background: '#c8a84b', padding: '22px 6%',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 16, textAlign: 'center'
      }} className="stats-bar">
        {[['100+','Students'],['20+','Expert Teachers'],['90%','Pass Rate'],['4+','Years of Excellence']].map(([num, label]) => (
          <div key={label}>
            <div style={{ fontSize: 'clamp(22px,4vw,32px)', fontWeight: 800, color: '#0a1f44' }}>{num}</div>
            <div style={{ fontSize: 13, color: '#0a1f44', fontWeight: 600 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: '70px 6%', background: '#f8f9ff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="about-grid">
          <div>
            <div style={{ color: '#1e5fc4', fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 8 }}>About Us</div>
            <h2 style={{ fontSize: 'clamp(26px,4vw,38px)', fontWeight: 800, color: '#0a1f44', marginBottom: 16, lineHeight: 1.2 }}>
              Why Choose <span style={{ color: '#1e5fc4' }}>Lotus Science HSS?</span>
            </h2>
            <div style={{ width: 50, height: 3, background: '#c8a84b', marginBottom: 20 }}></div>
            <p style={{ color: '#555', fontSize: 15, lineHeight: 1.9, marginBottom: 24 }}>
              Lotus Science Higher Secondary School provides quality education in Kendrapara, combining CHSE board excellence with competitive exam preparation for Engineering and Medical entrance.
            </p>
            {[
              ['🎓','CHSE Affiliated','Fully aligned with Odisha CHSE board curriculum'],
              ['🔬','Modern Labs','State-of-the-art Physics, Chemistry & Biology labs'],
              ['🏆','Competitive Coaching','Dedicated NEET & JEE preparation'],
              ['🏠','Hostel Facility','24×7 supervised residential facility'],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{
                display: 'flex', gap: 14, padding: '14px 18px',
                background: 'white', borderRadius: 12, marginBottom: 12,
                borderLeft: '3px solid #1e5fc4', boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
              }}>
                <span style={{ fontSize: 24 }}>{icon}</span>
                <div>
                  <strong style={{ display: 'block', fontSize: 14, color: '#0a1f44', marginBottom: 2 }}>{title}</strong>
                  <span style={{ fontSize: 13, color: '#666' }}>{desc}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600"
              alt="Campus" style={{ width: '100%', borderRadius: 20, boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }} />
            <div style={{
              position: 'absolute', bottom: -20, right: -20,
              background: '#c8a84b', borderRadius: 16, padding: '20px 28px',
              textAlign: 'center', boxShadow: '0 8px 30px rgba(200,168,75,0.4)'
            }}>
              <strong style={{ display: 'block', fontSize: 32, color: '#0a1f44' }}>4+</strong>
              <span style={{ fontSize: 12, color: '#0a1f44', fontWeight: 600 }}>Years of Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACADEMICS ── */}
      <section id="academics" style={{ padding: '70px 6%', background: 'white' }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <div style={{ color: '#1e5fc4', fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 8 }}>Academics</div>
          <h2 style={{ fontSize: 'clamp(26px,4vw,38px)', fontWeight: 800, color: '#0a1f44' }}>Our <span style={{ color: '#1e5fc4' }}>Courses</span></h2>
          <div style={{ width: 50, height: 3, background: '#c8a84b', margin: '16px auto' }}></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28, maxWidth: 1100, margin: '0 auto' }} className="courses-grid">
          {[
            { icon:'⚗️', tag:'Engineering Stream', title:'PCM', desc:'Physics, Chemistry & Mathematics', color:'#1e5fc4', subjects:['Physics (Theory + Practical)','Chemistry (Theory + Practical)','Mathematics','English & MIL','JEE / OJEE Coaching'] },
            { icon:'🧬', tag:'Medical Stream', title:'PCB', desc:'Physics, Chemistry & Biology', color:'#16a085', subjects:['Physics (Theory + Practical)','Chemistry (Theory + Practical)','Biology (Theory + Practical)','English & MIL','NEET Coaching'] },
            { icon:'💡', tag:'Integrated', title:'Foundation & Crash', desc:'Intensive entrance preparation', color:'#8e44ad', subjects:['NEET Foundation (Class XI)','JEE Foundation (Class XI)','CHSE Board Crash Course','Mock Tests','Study Material'] },
          ].map(c => (
            <div key={c.title} style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', transition: 'transform 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ padding: '32px 28px', background: c.color }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>{c.icon}</div>
                <div style={{ background: 'rgba(255,255,255,0.2)', color: 'white', display: 'inline-block', padding: '3px 12px', borderRadius: 50, fontSize: 10, fontWeight: 700, letterSpacing: 1, marginBottom: 10 }}>{c.tag}</div>
                <h3 style={{ color: 'white', fontSize: 24, fontWeight: 800, marginBottom: 6 }}>{c.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13 }}>{c.desc}</p>
              </div>
              <div style={{ padding: '24px 28px', background: 'white' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {c.subjects.map(s => (
                    <li key={s} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13.5, color: '#555', marginBottom: 8 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: c.color, flexShrink: 0, display: 'inline-block' }}></span>{s}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ display: 'inline-block', marginTop: 18, color: c.color, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>Enquire Now →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TOPPERS ── */}
      <section id="toppers" style={{ padding: '70px 6%', background: '#0a1f44' }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <div style={{ color: '#c8a84b', fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 8 }}>Results</div>
          <h2 style={{ fontSize: 'clamp(26px,4vw,38px)', fontWeight: 800, color: 'white' }}>Our <span style={{ color: '#c8a84b' }}>Toppers</span> — CHSE 2025</h2>
          <div style={{ width: 50, height: 3, background: '#c8a84b', margin: '16px auto' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15 }}>Excellence is not an act, but a habit.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 20, maxWidth: 1100, margin: '0 auto' }} className="toppers-grid">
          {toppers.map((t, i) => (
            <div key={t.name} style={{
              background: 'rgba(255,255,255,0.06)', borderRadius: 16,
              padding: '28px 20px', textAlign: 'center',
              border: i === 0 ? '2px solid #c8a84b' : '1px solid rgba(255,255,255,0.1)',
              transition: 'transform 0.3s'
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: 28, marginBottom: 8 }}>{['🥇','🥈','🥉'][i] || '🎓'}</div>
              <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg,#1e5fc4,#4a90d9)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, margin: '0 auto 14px' }}>👤</div>
              <h4 style={{ color: 'white', fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{t.name}</h4>
              <div style={{ color: '#c8a84b', fontSize: 20, fontWeight: 800, marginBottom: 4 }}>{t.percent}</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11 }}>Roll: {t.roll}</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11 }}>Score: {t.score}/600</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CHAIRMAN MESSAGE ── */}
      <section style={{ padding: '70px 6%', background: '#f8f9ff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60, alignItems: 'center' }} className="chairman-grid">
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 180, height: 180, borderRadius: '50%', background: 'linear-gradient(135deg,#1e5fc4,#0a1f44)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 72, margin: '0 auto 20px', boxShadow: '0 20px 60px rgba(30,95,196,0.3)' }}>👨‍💼</div>
            <h4 style={{ fontSize: 20, fontWeight: 700, color: '#0a1f44', marginBottom: 4 }}>prof. Saroj kumar Samal</h4>
            <p style={{ color: '#1e5fc4', fontWeight: 600, fontSize: 17 }}>Chairman, Lotus Science HSS</p>
          </div>
          <div>
            <div style={{ color: '#1e5fc4', fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 8 }}>Chairman's Message</div>
            <h2 style={{ fontSize: 'clamp(24px,4vw,34px)', fontWeight: 800, color: '#0a1f44', marginBottom: 16 }}>A Message from Our <span style={{ color: '#1e5fc4' }}>Chairman</span></h2>
            <div style={{ width: 50, height: 3, background: '#c8a84b', marginBottom: 20 }}></div>
            <div style={{ fontSize: 48, color: '#c8a84b', lineHeight: 1, marginBottom: 8 }}>"</div>
            <p style={{ color: '#555', fontSize: 15, lineHeight: 1.9, marginBottom: 16 }}>
              Education is the most valuable asset which helps in empowering the person to acquire skills and knowledge. At Lotus Science HSS, we believe that successful careers begin with focus, undeterred confidence and strong determination.
            </p>
            <p style={{ color: '#555', fontSize: 16, lineHeight: 1.9 }}>
              We provide a competitive environment, committed faculty, unique teaching methodologies, and well managed hostel facilities. Our system is dedicated to exploring the full potential of every student.
            </p>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" style={{ padding: '70px 6%', background: 'white' }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <div style={{ color: '#1e5fc4', fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 8 }}>Campus Life</div>
          <h2 style={{ fontSize: 'clamp(26px,4vw,38px)', fontWeight: 800, color: '#0a1f44' }}>Life at <span style={{ color: '#1e5fc4' }}>Lotus Science</span></h2>
          <div style={{ width: 50, height: 3, background: '#c8a84b', margin: '16px auto' }}></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 1100, margin: '0 auto' }} className="gallery-grid">
          {gallery.map((item, i) => (
            <div key={i} style={{
              borderRadius: 16, overflow: 'hidden',
              gridColumn: i === 0 ? 'span 2' : 'span 1',
              gridRow: i === 0 ? 'span 2' : 'span 1',
              position: 'relative', cursor: 'pointer'
            }}>
              <img src={item.img} alt={item.label} style={{
                width: '100%', height: i === 0 ? 420 : 200,
                objectFit: 'cover', display: 'block', transition: 'transform 0.4s'
              }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(transparent, rgba(10,31,68,0.85))',
                padding: '20px 18px'
              }}>
                <span style={{ color: 'white', fontWeight: 600, fontSize: 14 }}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: 24, color: '#aaa', fontSize: 13 }}>
          📸 You can add your real school photos later!
        </p>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: '70px 6%', background: '#f8f9ff' }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <div style={{ color: '#1e5fc4', fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 8 }}>Admission</div>
          <h2 style={{ fontSize: 'clamp(26px,4vw,38px)', fontWeight: 800, color: '#0a1f44' }}>Get In <span style={{ color: '#1e5fc4' }}>Touch</span></h2>
          <div style={{ width: 50, height: 3, background: '#c8a84b', margin: '16px auto' }}></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 50, maxWidth: 1100, margin: '0 auto' }} className="contact-grid">
          <div>
            {[
              ['📍','Address','Lotus Science HSS, near Kajala shiv temple, Tinimuhani ,Kendrapara, Odisha – 754211'],
              ['📞','Phone','+91 9438177802'],
              ['📧','Email','lotussciencecollege@gmail.com'],
              ['🕐','Timings','Mon–Sat: 9AM – 5PM'],
            ].map(([icon, label, val]) => (
              <div key={label} style={{
                display: 'flex', gap: 16, padding: '18px 20px',
                background: 'white', borderRadius: 14, marginBottom: 14,
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
              }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, flexShrink: 0, background: 'linear-gradient(135deg,#1e5fc4,#4a90d9)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{icon}</div>
                <div>
                  <strong style={{ display: 'block', fontSize: 13, marginBottom: 3, color: '#0a1f44' }}>{label}</strong>
                  <span style={{ fontSize: 14, color: '#666' }}>{val}</span>
                </div>
              </div>
            ))}
          </div>

          {submitted ? (
            <div style={{ background: 'white', borderRadius: 20, padding: '60px 40px', textAlign: 'center', boxShadow: '0 4px 30px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: 64, marginBottom: 16 }}>🪷</div>
              <h3 style={{ fontSize: 26, fontWeight: 800, color: '#0a1f44', marginBottom: 10 }}>Thank You!</h3>
              <p style={{ color: '#666', fontSize: 15 }}>We have received your enquiry. We will contact you soon!</p>
              <button onClick={() => setSubmitted(false)} style={{ marginTop: 24, background: '#1e5fc4', color: 'white', border: 'none', padding: '12px 28px', borderRadius: 8, cursor: 'pointer', fontWeight: 600, fontSize: 14 }}>Submit Another Enquiry</button>
            </div>
          ) : (
            <div style={{ background: 'white', borderRadius: 20, padding: '40px 36px', boxShadow: '0 4px 30px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: '#0a1f44', marginBottom: 24 }}>Admission Enquiry Form</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }} className="form-row">
                {[['Student Name','name','text','Full Name'],['Mobile Number','mobile','tel','+91 XXXXX XXXXX']].map(([label, field, type, ph]) => (
                  <div key={field}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>{label}</label>
                    <input type={type} placeholder={ph} value={form[field]}
                      onChange={e => setForm({ ...form, [field]: e.target.value })}
                      style={{ width: '100%', padding: '12px 14px', border: '1.5px solid #e0e0e0', borderRadius: 10, fontSize: 14, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>Email</label>
                <input type="email" placeholder="your@email.com" value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', border: '1.5px solid #e0e0e0', borderRadius: 10, fontSize: 14, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>Course</label>
                <select value={form.course} onChange={e => setForm({ ...form, course: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', border: '1.5px solid #e0e0e0', borderRadius: 10, fontSize: 14, fontFamily: 'inherit', outline: 'none', background: 'white', boxSizing: 'border-box' }}>
                  <option value="">-- Select Course --</option>
                  <option>PCM – Physics, Chemistry, Mathematics</option>
                  <option>PCB – Physics, Chemistry, Biology</option>
                  <option>Crash Course – NEET</option>
                  <option>Crash Course – JEE</option>
                </select>
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>Message</label>
                <textarea rows={4} placeholder="Write your query here..." value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', border: '1.5px solid #e0e0e0', borderRadius: 10, fontSize: 14, fontFamily: 'inherit', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
              </div>
              <button onClick={handleSubmit} style={{
                width: '100%', padding: 15,
                background: 'linear-gradient(135deg,#1e5fc4,#0a1f44)',
                color: 'white', border: 'none', borderRadius: 10,
                fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit'
              }}>Submit Enquiry →</button>
            </div>
          )}
        </div>
      </section>

      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── TABLET (max 1024px) ── */
        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .chairman-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 30px !important; }
        }

        /* ── MOBILE (max 768px) ── */
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .hamburger    { display: flex !important; }

          .stats-bar { grid-template-columns: 1fr 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .courses-grid { grid-template-columns: 1fr !important; }
          .toppers-grid { grid-template-columns: 1fr 1fr !important; }
          .chairman-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }

          .gallery-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .gallery-grid > div:first-child {
            grid-column: span 2 !important;
            grid-row: span 1 !important;
          }
          .gallery-grid > div:first-child img {
            height: 220px !important;
          }
          .gallery-grid > div img {
            height: 160px !important;
          }
        }

        /* ── SMALL MOBILE (max 480px) ── */
        @media (max-width: 480px) {
          .stats-bar { grid-template-columns: 1fr 1fr !important; }
          .toppers-grid { grid-template-columns: 1fr 1fr !important; }
          .gallery-grid { grid-template-columns: 1fr !important; }
          .gallery-grid > div:first-child { grid-column: span 1 !important; }
        }
      `}</style>
    </div>
  )
}
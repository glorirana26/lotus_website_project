import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [acadOpen, setAcadOpen] = useState(false)
  const [admOpen, setAdmOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileAcad, setMobileAcad] = useState(false)
  const [mobileAdm, setMobileAdm] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['home', 'about', 'academics', 'admission', 'gallery', 'contact']
      sections.forEach(id => {
        const section = document.getElementById(id)
        if (section) {
          const top = section.offsetTop - 100
          const height = section.offsetHeight
          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(id)
          }
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkStyle = (id) => ({
    color: active === id ? '#c8a84b' : 'white',
    textDecoration: 'none',
    fontSize: 14,
    cursor: 'pointer',
    transition: '0.3s',
    fontWeight: active === id ? 700 : 400,
    borderBottom: active === id ? '2px solid #c8a84b' : '2px solid transparent',
    paddingBottom: 4,
  })

  const dropdownItemStyle = {
    display: 'block',
    padding: '11px 18px',
    color: '#0a1f44',
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: 500,
    borderBottom: '1px solid #f5f5f5',
    transition: 'background 0.2s'
  }

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: 70,
          background: "#0a1f44",
          boxShadow: scrolled
            ? "0 4px 24px rgba(0,0,0,0.4)"
            : "0 2px 20px rgba(0,0,0,0.3)",
          transition: "box-shadow 0.3s",
        }}
      >
        <div
          style={{
            maxWidth: "100%",
            margin: "0 auto",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 5%",
          }}
        >
          {/* ── Logo ── */}
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
            }}
          >
            <img
              src="/logo.png"
              alt="logo"
              style={{ height: 45 }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div>
              <div
                style={{
                  color: "#c8a84b",
                  fontWeight: 800,
                  fontSize: 16,
                  lineHeight: 1.2,
                }}
              >
                Lotus Science HSS
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 11,
                  letterSpacing: 1,
                }}
              >
                Kendrapara, Odisha
              </div>
            </div>
          </a>

          {/* ── Desktop Menu ── */}
          <div
            className="desktop-menu"
            style={{ display: "flex", gap: 28, alignItems: "center" }}
          >
            {/* Home */}
            <a
              href="/"
              style={linkStyle("home")}
              onMouseEnter={(e) => (e.target.style.color = "#c8a84b")}
              onMouseLeave={(e) =>
                (e.target.style.color = active === "home" ? "#c8a84b" : "white")
              }
            >
              Home
            </a>

            {/* About */}
            <a
              href="/#about"
              style={linkStyle("about")}
              onMouseEnter={(e) => (e.target.style.color = "#c8a84b")}
              onMouseLeave={(e) =>
                (e.target.style.color =
                  active === "about" ? "#c8a84b" : "white")
              }
            >
              About
            </a>

            {/* ── Academics Dropdown ── */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setAcadOpen(true)}
              onMouseLeave={() => setAcadOpen(false)}
            >
              <span
                style={{
                  ...linkStyle("academics"),
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                Academics <span style={{ fontSize: 10, marginTop: 1 }}>▾</span>
              </span>

              {acadOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: 38,
                    left: 0,
                    background: "white",
                    borderRadius: 10,
                    minWidth: 200,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                    padding: "8px 0",
                    zIndex: 100,
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  {["CHSE Pattern", "Examination", "Syllabus", "Results"].map(
                    (label) => (
                      <div
                        key={label}
                        onClick={() => {
                          navigate("/academics");
                          setAcadOpen(false);
                        }}
                        style={dropdownItemStyle}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#f0f4ff";
                          e.currentTarget.style.color = "#1e5fc4";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "white";
                          e.currentTarget.style.color = "#0a1f44";
                        }}
                      >
                        {label}
                      </div>
                    ),
                  )}
                </div>
              )}
            </div>

            {/* ── Admission Dropdown ── */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setAdmOpen(true)}
              onMouseLeave={() => setAdmOpen(false)}
            >
              <span
                style={{
                  ...linkStyle("admission"),
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                Admission <span style={{ fontSize: 10, marginTop: 1 }}>▾</span>
              </span>

              {admOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: 38,
                    left: 0,
                    background: "white",
                    borderRadius: 10,
                    minWidth: 200,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                    padding: "8px 0",
                    zIndex: 100,
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  {[
                    ["Online Application", "/admission"],
                    ["Admission Process", "/admission"],
                    ["Course Fees", "/admission"],
                    ["Rules & Regulations", "/admission"],
                    ["Summer Course", "/summer-course"],
                  ].map(([label, path]) => (
                    <div
                      key={label}
                      onClick={() => {
                        navigate(path);
                        setAdmOpen(false);
                      }}
                      style={dropdownItemStyle}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#f0f4ff";
                        e.currentTarget.style.color = "#1e5fc4";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "white";
                        e.currentTarget.style.color = "#0a1f44";
                      }}
                    >
                      {label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Contact */}
            <a
              href="/#contact"
              style={linkStyle("contact")}
              onMouseEnter={(e) => (e.target.style.color = "#c8a84b")}
              onMouseLeave={(e) =>
                (e.target.style.color =
                  active === "contact" ? "#c8a84b" : "white")
              }
            >
              Contact
            </a>
          </div>

          {/* ── Hamburger (Mobile) ── */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              flexDirection: "column",
              gap: 5,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 6,
            }}
          >
            <span
              style={{
                width: 24,
                height: 2,
                background: "white",
                display: "block",
                borderRadius: 2,
                transition: "0.3s",
                transform: menuOpen
                  ? "rotate(45deg) translate(5px, 5px)"
                  : "none",
              }}
            ></span>
            <span
              style={{
                width: 24,
                height: 2,
                background: "white",
                display: "block",
                borderRadius: 2,
                transition: "0.3s",
                opacity: menuOpen ? 0 : 1,
              }}
            ></span>
            <span
              style={{
                width: 24,
                height: 2,
                background: "white",
                display: "block",
                borderRadius: 2,
                transition: "0.3s",
                transform: menuOpen
                  ? "rotate(-45deg) translate(5px, -5px)"
                  : "none",
              }}
            ></span>
          </button>
        </div>
      </nav>

      {/* ── Mobile Dropdown Menu ── */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 70,
            left: 0,
            right: 0,
            zIndex: 999,
            background: "#0a1f44",
            padding: "10px 5% 20px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* Home */}
          <a
            href="/"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              color: "white",
              textDecoration: "none",
              fontSize: 15,
              padding: "13px 0",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            🏠 Home
          </a>

          {/* About */}
          <a
            href="/#about"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              color: "white",
              textDecoration: "none",
              fontSize: 15,
              padding: "13px 0",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            ℹ️ About
          </a>

          {/* Academics */}
          <div>
            <div
              onClick={() => setMobileAcad(!mobileAcad)}
              style={{
                color: "white",
                fontSize: 15,
                padding: "13px 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>📚 Academics</span>
              <span
                style={{
                  fontSize: 12,
                  transition: "0.3s",
                  transform: mobileAcad ? "rotate(180deg)" : "none",
                  display: "inline-block",
                }}
              >
                ▾
              </span>
            </div>
            {mobileAcad && (
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 8,
                  margin: "4px 0 8px",
                  overflow: "hidden",
                }}
              >
                {["CHSE Pattern", "Examination", "Syllabus", "Results"].map(
                  (l) => (
                    <div
                      key={l}
                      onClick={() => {
                        navigate("/academics");
                        setMenuOpen(false);
                      }}
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: 14,
                        padding: "10px 16px",
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                        cursor: "pointer",
                      }}
                    >
                      → {l}
                    </div>
                  ),
                )}
              </div>
            )}
          </div>

          {/* Admission */}
          <div>
            <div
              onClick={() => setMobileAdm(!mobileAdm)}
              style={{
                color: "white",
                fontSize: 15,
                padding: "13px 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>📝 Admission</span>
              <span
                style={{
                  fontSize: 12,
                  transition: "0.3s",
                  transform: mobileAdm ? "rotate(180deg)" : "none",
                  display: "inline-block",
                }}
              >
                ▾
              </span>
            </div>
            {mobileAdm && (
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 8,
                  margin: "4px 0 8px",
                  overflow: "hidden",
                }}
              >
                {[
                  ["Online Application", "/admission"],
                  ["Admission Process", "/admission"],
                  ["Summer Course", "/summer-course"],
                  ["Course Fees", "/admission"],
                 ].map(([l, path]) => (
                  <div
                    key={l}
                    onClick={() => { navigate(path); setMenuOpen(false);  }}
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      fontSize: 14,
                      padding: "10px 16px",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      cursor: "pointer",
                    }}
                  >
                    → {l}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Contact */}
          <a
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              color: "white",
              textDecoration: "none",
              fontSize: 15,
              padding: "13px 0",
            }}
          >
            📞 Contact
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .hamburger    { display: flex !important; }
        }
      `}</style>
    </>
  );
}
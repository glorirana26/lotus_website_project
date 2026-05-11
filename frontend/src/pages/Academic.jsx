import { Link} from 'react-router-dom';
export default function Academic() {
  const academicItems = [
    {
      icon: "👨‍🏫",
      title: "Faculty",
      desc: "Highly experienced and dedicated teachers providing quality education and personal guidance.",
      link :"/academics/faculty",
    },
    {
      icon: "📝",
      title: "Examinations",
      desc: "Regular weekly tests, mock exams and performance analysis for better preparation.",
      link :"/academics/examinations",
    },
    {
      icon: "🏆",
      title: "Results",
      desc: "Excellent CHSE board results with outstanding NEET & JEE achievements every year.",
      link :"/academics/results",
    },
    {
      icon: "🚀",
      title: "NEET / JEE Coaching",
      desc: "Integrated coaching program with conceptual learning and competitive preparation.",
      link :"/academics/coaching",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#f4f7fb",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)",
          padding: "90px 8% 140px",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
            top: -100,
            right: -80,
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            width: 220,
            height: 220,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            bottom: -80,
            left: -60,
          }}
        ></div>

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <p
            style={{
              color: "#f5f6f8",
              fontWeight: 700,
              letterSpacing: 2,
              fontSize: 14,
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            Lotus Science HSS
          </p>

          <h1
            style={{
              fontSize: "clamp(40px,6vw,72px)",
              fontWeight: 900,
              marginBottom: 20,
              lineHeight: 1.1,
              color:"white",
            }}
          >
            Academic <br /> Excellence
          </h1>

          <p
            style={{
              maxWidth: 700,
              lineHeight: 1.9,
              fontSize: 17,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Lotus Science Higher Secondary School provides a strong academic
            foundation with modern teaching methods, experienced faculty,
            competitive preparation and continuous student mentoring.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          maxWidth: 1200,
          margin: "-70px auto 0",
          padding: "0 6% 70px",
          position: "relative",
          zIndex: 5,
        }}
      >
        {/* Highlight Card */}
        <div
          style={{
            background: "white",
            borderRadius: 30,
            padding: "40px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
            marginBottom: 50,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: 40,
              alignItems: "center",
            }}
            className="academic-top-grid"
          >
            <div>
              <p
                style={{
                  color: "#2563eb",
                  fontWeight: 700,
                  marginBottom: 10,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  fontSize: 13,
                }}
              >
                Why Choose Lotus?
              </p>

              <h2
                style={{
                  fontSize: "clamp(28px,4vw,42px)",
                  color: "#0d1323",
                  marginBottom: 18,
                  lineHeight: 1.2,
                  fontWeight: 800,
                }}
              >
                Transforming Students Into Future Achievers
              </h2>

              <p
                style={{
                  color: "#596473",
                  lineHeight: 1.9,
                  fontSize: 15,
                }}
              >
                Our academic structure combines board education with NEET & JEE
                preparation, ensuring students achieve excellence in both
                academics and competitive examinations through discipline,
                mentorship and smart learning.
              </p>

              <button
                style={{
                  marginTop: 24,
                  background: "#050a16",
                  color: "white",
                  border: "none",
                  padding: "15px 32px",
                  borderRadius: 12,
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                Explore Programs →
              </button>
            </div>

            <div>
              <img
                src="/building.jpg"
                alt="Academic"
                style={{
                  width: "100%",
                  height: 320,
                  objectFit: "cover",
                  borderRadius: 24,
                }}
              />
            </div>
          </div>
        </div>

        {/* Academic Cards */}
        <div>
          <div style={{ marginBottom: 40 }}>
            <p
              style={{
                color: "#2563eb",
                fontWeight: 700,
                letterSpacing: 1,
                marginBottom: 10,
                textTransform: "uppercase",
                fontSize: 13,
              }}
            >
              Academic Sections
            </p>

            <h2
              style={{
                fontSize: "clamp(28px,4vw,44px)",
                color: "#0f172a",
                margin: 0,
                fontWeight: 800,
              }}
            >
              Discover Our Academic System
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: 24,
            }}
          >
            {academicItems.map((item, i) => (
              <Link
                to={item.link}
                key={i}
                style={{
                  textDecoration:"none",
                  background: "white",
                  borderRadius: 24,
                  padding: "30px 24px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
                  transition: "0.3s",
                  border: "1px solid #eef2ff",
                  display: "block",
                }}
              >
                <div
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 20,
                    background: "#dbeafe",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 34,
                    marginBottom: 20,
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    color: "#0f172a",
                    marginBottom: 12,
                    fontSize: 20,
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    lineHeight: 1.8,
                    fontSize: 14,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .academic-top-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
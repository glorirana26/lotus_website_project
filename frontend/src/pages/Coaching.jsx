export default function Coaching() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)",
        fontFamily: "Segoe UI, sans-serif",
        padding: "40px 20px 80px",
      }}
    >
      {/* Top Hero Card */}
      <div
        style={{
          background: "rgb(233, 241, 240)",
          padding: "60px 40px",
          borderRadius: 28,
          textAlign: "center",
          maxWidth: 800,
          margin: "0 auto",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            fontSize: 70,
            marginBottom: 20,
          }}
        >
          🚀
        </div>

        <p
          style={{
            color: "#f3291f",
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          Lotus Science HSS
        </p>

        <h1
          style={{
            fontSize: "clamp(34px,5vw,56px)",
            color: "#0f172a",
            marginBottom: 20,
            fontWeight: 800,
          }}
        >
          NEET / JEE Coaching <br /> Starting Soon
        </h1>

        <p
          style={{
            color: "#64748b",
            lineHeight: 1.9,
            fontSize: 16,
            marginBottom: 30,
          }}
        >
          Our integrated NEET & JEE coaching program will begin shortly with
          expert faculty, concept-based learning, regular mock tests and
          personalized mentoring for students.
        </p>

        <button
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "15px 34px",
            borderRadius: 14,
            fontWeight: 700,
            fontSize: 15,
            cursor: "pointer",
          }}
        >
          Admissions Opening Soon
        </button>
      </div>

      {/* Coaching Programs Section */}
      <div
        style={{
          maxWidth: 1200,
          margin: "70px auto 0",
        }}
      >
        <div style={{ marginBottom: 40, textAlign: "center" }}>
          <p
            style={{
              color: "#25e1eb",
              fontWeight: 700,
              letterSpacing: 1,
              marginBottom: 10,
              textTransform: "uppercase",
              fontSize: 13,
            }}
          >
            Coaching Programs
          </p>

          <h2
            style={{
              fontSize: "clamp(30px,4vw,48px)",
              color: "#0f172a",
              marginBottom: 16,
              fontWeight: 800,
            }}
          >
            NEET / JEE Coaching Options
          </h2>

          <p
            style={{
              maxWidth: 700,
              margin: "0 auto",
              color: "#a82a16",
              lineHeight: 1.9,
              fontSize: 16,
            }}
          >
            Students can choose integrated coaching along with regular academics
            or enroll separately for dedicated NEET / JEE preparation.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: 28,
          }}
        >
          {/* Integrated Coaching */}
          <div
            style={{
              background: "white",
              borderRadius: 28,
              padding: "40px 32px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.07)",
              border: "1px solid #e2e8f0",
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
                marginBottom: 24,
              }}
            >
              📘
            </div>

            <h3
              style={{
                fontSize: 28,
                color: "#0f172a",
                marginBottom: 16,
                fontWeight: 800,
              }}
            >
              Integrated Coaching
            </h3>

            <p
              style={{
                color: "#64748b",
                lineHeight: 1.9,
                marginBottom: 24,
              }}
            >
              NEET / JEE preparation integrated with regular academic classes
              for better conceptual understanding and competitive readiness.
            </p>

            <h2
              style={{
                color: "#0754f9",
                fontSize: 42,
                marginBottom: 8,
                fontWeight: 900,
              }}
            >
              ₹30,000
            </h2>

            <p
              style={{
                color: "#475569",
                fontWeight: 600,
              }}
            >
              Extra Per Year
            </p>
          </div>

          {/* Separate Coaching */}
          <div
            style={{
              background: "#0f172a",
              borderRadius: 28,
              padding: "40px 32px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              color: "white",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 180,
                height: 180,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                top: -60,
                right: -60,
              }}
            ></div>

            <div
              style={{
                width: 70,
                height: 70,
                borderRadius: 20,
                background: "rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 34,
                marginBottom: 24,
                position: "relative",
              }}
            >
              🚀
            </div>

            <h3
              style={{
                fontSize: 28,
                marginBottom: 16,
                fontWeight: 800,
                position: "relative",
              }}
            >
              Separate NEET / JEE Coaching
            </h3>

            <p
              style={{
                color: "rgba(255,255,255,0.78)",
                lineHeight: 1.9,
                marginBottom: 24,
                position: "relative",
              }}
            >
              Dedicated coaching program focused entirely on NEET & JEE
              preparation with expert faculty, mock tests and personalized
              mentoring.
            </p>

            <h2
              style={{
                color: "#60a5fa",
                fontSize: 42,
                marginBottom: 8,
                fontWeight: 900,
                position: "relative",
              }}
            >
              ₹90,000
            </h2>

            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontWeight: 600,
                position: "relative",
              }}
            >
              Full Course Fee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
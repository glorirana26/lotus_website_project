import PageBanner from "../components/PageBanner";
import {useState} from 'react'
export default function Admission() {
  const [form, setForm] = useState({
  name: "",
  fatherName: "",
  dob: "",
  mobile: "",
  email: "",
  board: "",
  percentage: "",
  course: "",
  address: ""
})

const [error, setError] = useState("")

const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email)
const isValidPhone = (phone) => /^[6-9]\d{9}$/.test(phone)

const handleSubmit = () => {
  if (!form.name || form.name.length < 3) {
    return setError("Enter valid full name")
  }

  if (!isValidPhone(form.mobile)) {
    return setError("Enter valid 10 digit mobile number")
  }

  if (!isValidEmail(form.email)) {
    return setError("Enter valid email address")
  }

  if (!form.course) {
    return setError("Please select course")
  }

  if (!form.address) {
    return setError("Address is required")
  }

  setError("")
  alert("Application submitted successfully! 🪷")
}
  return (
    <div id="admission" style={{ fontFamily: "Segoe UI, sans-serif", width: "100%" }}>

      {/* Banner */}
      <PageBanner
        image="/images/building.jpg"
        title="Admission"
        subtitle="Join Lotus Science HSS"
      />

      {/* Online Application Button */}
      <div style={{ background: "white", padding: "40px 6%", display: "flex", justifyContent: "center" }}>
        <a href="#admission-form" style={{
          background: "#c0392b", color: "white",
          padding: "18px 60px", fontSize: 18, fontWeight: 600,
          textDecoration: "none", borderRadius: 4, display: "inline-block"
        }}>Online Application</a>
      </div>

      {/* Main Content */}
      <div style={{ background: "#0d3349", color: "white", padding: "60px 6%", width: "100%", boxSizing: "border-box" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Title */}
          <h2 style={{ fontSize: "clamp(22px,3vw,30px)", fontWeight: 800, marginBottom: 28, color: "white" }}>
            Our Admission Process
          </h2>

          {/* Seats */}
          <p style={{ fontSize: 15, marginBottom: 32, color: "rgba(255,255,255,0.85)" }}>
            Number of Seats : <strong style={{ color: "white", fontSize: 17 }}>512</strong>
          </p>

          {/* Compulsory Subjects */}
          <div style={{ marginBottom: 40 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "white" }}>Compulsory Subjects</h3>
            <div style={{ width: 40, height: 3, background: "#c8a84b", marginBottom: 20 }}></div>
            <p style={{ fontSize: 14.5, lineHeight: 1.9, color: "rgba(255,255,255,0.85)", marginBottom: 10 }}>
              English, M.I.L., (Oriya/Alt. English / Hindi – any one) and Environmental Education (1st Year Only)
            </p>
            <p style={{ fontSize: 14.5, lineHeight: 1.9, color: "rgba(255,255,255,0.85)", marginBottom: 10 }}>
              Elective Subjects are 1st Physics, 2nd Chemistry, 3rd Mathematics & 4th Elective Subjects : Biology, Information Technology (IT)
            </p>
            <p style={{ fontSize: 14.5, lineHeight: 1.9, color: "rgba(255,255,255,0.85)" }}>
              Subject Combinations : <strong>PCM-B, PCM-IT, PCB-IT</strong>
            </p>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginBottom: 40 }}></div>

          {/* Eligibility */}
          <div style={{ marginBottom: 40 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "white" }}>Eligibility for Admission</h3>
            <div style={{ width: 40, height: 3, background: "#c8a84b", marginBottom: 20 }}></div>
            <p style={{ fontSize: 14.5, lineHeight: 2, color: "rgba(255,255,255,0.85)", textAlign: "justify" }}>
              Students who have passed the 10th Board Examination conducted by the BSE Odisha / CBSE / ICSE are eligible for admission.
              Admission will be strictly based on merit under the Student Academic Management System (SAMS) as per Resolution No.:
              1-A-HE-4A-2010-3702/HE dated 20.02.2010 of Government of Odisha, Higher Education Department. Candidates selected under
              the e-admission procedure (SAMS) are intimated individually by post/e-mail in the prescribed intimation letter formulated
              by the Govt. of Odisha, regarding the date of admission and fees to be paid. The names of the selected candidates are also
              displayed in the notice board. In case of any complaint, the decision of the Principal of the destination school is final and binding.
            </p>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginBottom: 40 }}></div>

          {/* How to Apply */}
          <div style={{ marginBottom: 40 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "white" }}>How to Apply</h3>
            <div style={{ width: 40, height: 3, background: "#c8a84b", marginBottom: 20 }}></div>
            <p style={{ fontSize: 14.5, lineHeight: 2, color: "rgba(255,255,255,0.85)", textAlign: "justify" }}>
              The admission into the Higher Secondary School shall be done through the ONLINE e-admission procedure under SAMS
              for the academic session. Students shall download the Common Application Form from the Govt. of Odisha website
              (www.dheorissa.in) only after the publication of results from the Board of Secondary Education, Odisha.
            </p>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginBottom: 40 }}></div>

          {/* CAF */}
          <div style={{ marginBottom: 40 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "white" }}>Submission of Common Application Form (CAF)</h3>
            <div style={{ width: 40, height: 3, background: "#c8a84b", marginBottom: 20 }}></div>
            <p style={{ fontSize: 14.5, lineHeight: 2, color: "rgba(255,255,255,0.85)", textAlign: "justify" }}>
              After the Application Forms is collected from the Govt. website for admission into the +2 streams, the student must
              read the CAF carefully and fill it in CAPITAL LETTERS and submit the form online only. Printed copy of the form and
              certificates will be submitted in the destination college / Resource Centre / Nodal College within the prescribed
              period by the Govt. of Odisha.
            </p>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginBottom: 40 }}></div>

          {/* Documents */}
          <div style={{ marginBottom: 40 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "white" }}>Documents to be Submitted at the Time of Admission</h3>
            <div style={{ width: 40, height: 3, background: "#c8a84b", marginBottom: 24 }}></div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
              {[
                "SLC in Original",
                "Attested photocopy of Mark-sheet of the 10th Board Exam",
                "Conduct certificate in original",
                "Four recent passport size coloured photographs",
                "Attested photocopy of the caste certificate (for reserve categories only)",
                "Migration certificate in original (for students from boards other than the BSE)",
              ].map((doc, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: 12,
                  padding: "14px 16px", background: "rgba(255,255,255,0.05)",
                  borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)"
                }}>
                  <span style={{ color: "#c8a84b", fontSize: 18, flexShrink: 0, marginTop: 2 }}>→</span>
                  <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, lineHeight: 1.6 }}>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginBottom: 40 }}></div>

          {/* Online Application Form */}
          <div id="admission-form">
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "white" }}>Online Application Form</h3>
            {error && (
  <p style={{ color: "#ff4d4d", marginBottom: 10 }}>{error}</p>
)}
            <div style={{ width: 40, height: 3, background: "#c8a84b", marginBottom: 28 }}></div>
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 16, padding: "36px", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="adm-form-grid">
                {[
  ["Full Name", "text", "Enter your full name", "name"],
  ["Father's Name", "text", "Enter father's name", "fatherName"],
  ["Date of Birth", "date", "", "dob"],
  ["Mobile Number", "tel", "+91 XXXXX XXXXX", "mobile"],
  ["Email Address", "email", "your@email.com", "email"],
  ["10th Board", "text", "BSE / CBSE", "board"],
  ["10th Percentage", "text", "e.g. 85%", "percentage"],
  ["Preferred Course", "text", "PCM-B / PCM-IT / PCB-IT", "course"],
].map(([label, type, ph, field]) => (
  <div key={label}>
    <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>{label}</label>
    <input
      type={type}
      placeholder={ph}
      value={form[field]}
      onChange={e => setForm({ ...form, [field]: e.target.value })}
      style={{
        width: "100%", padding: "12px 14px",
        background: "rgba(255,255,255,0.08)",
        border: "1.5px solid rgba(255,255,255,0.15)",
        borderRadius: 10, fontSize: 14, color: "white",
        fontFamily: "inherit", outline: "none", boxSizing: "border-box"
      }}
      onFocus={e => e.target.style.borderColor = "#c8a84b"}
      onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.15)"}
    />
  </div>
))}
              </div>

              <div style={{ marginTop: 20 }}>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Full Address</label>
                <textarea rows={3} placeholder="Enter your complete address..." 
                value ={form.address}
                onchange={e => setForm({...form, address: e.target.value})}style={{
                  width: "100%", padding: "12px 14px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1.5px solid rgba(255,255,255,0.15)",
                  borderRadius: 10, fontSize: 14, color: "white",
                  fontFamily: "inherit", outline: "none", resize: "vertical", boxSizing: "border-box"
                }}
                  onFocus={e => e.target.style.borderColor = "#c8a84b"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.15)"}
                />
              </div>

              <button style={{
                marginTop: 24, background: "#c0392b", color: "white",
                border: "none", padding: "15px 48px", borderRadius: 8,
                fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit"
              }}
               onClick={handleSubmit}
              >Submit Application →</button>
            </div>
          </div>

          {/* ── SUMMER COURSE ── */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 60, paddingTop: 50 }}>
            <h2 style={{ fontSize: "clamp(20px,3vw,28px)", fontWeight: 800, color: "white", marginBottom: 8 }}>Summer Course</h2>
            <div style={{ width: 40, height: 3, background: "#c8a84b", marginBottom: 24 }}></div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, alignItems: "center" }} className="summer-adm-grid">
              <div>
                <p style={{ fontSize: 15, lineHeight: 1.95, color: "rgba(255,255,255,0.85)", textAlign: "justify", marginBottom: 16 }}>
                  The Summer Course is specially and systematically designed by Lotus Science Higher Secondary School,
                  aimed at the students of class X to have access and understand the demands of the science stream
                  in the senior secondary classes.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.95, color: "rgba(255,255,255,0.85)", textAlign: "justify", marginBottom: 24 }}>
                  The course content and the systematic teaching methodology ensures that students progress from
                  the basics to the advanced levels, fulfilling both the requirements of the board and the competitive
                  examinations. The course helps them to create much needed interest to learn from the best faculty
                  in the state which plays a crucial role in realizing their cherished dream of pursuing a career in
                  medicine or engineering.
                </p>
                <a href="/summer-course" style={{
                  display: "inline-block", background: "#c0392b", color: "white",
                  padding: "13px 32px", borderRadius: 6, fontWeight: 700, fontSize: 14, textDecoration: "none"
                }}>Know More →</a>
              </div>
              <div>
                <img src="/images/summer-course.jpg" alt="Summer Course"
                  style={{ width: "100%", height: 320, objectFit: "cover", borderRadius: 8, display: "block" }}
                  onError={e => { e.target.src = "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800" }}
                />
              </div>
            </div>
          </div>

          {/* ── COURSE FEES ── */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 60, paddingTop: 50 }}>
            <h2 style={{ fontSize: "clamp(20px,3vw,28px)", fontWeight: 800, color: "white", marginBottom: 8 }}>OUR COURSE FEES</h2>
            <div style={{ width: 40, height: 3, background: "#c8a84b", marginBottom: 10 }}></div>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 30, letterSpacing: 1, textTransform: "uppercase" }}>Mode of Payments</p>

            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 24, padding: "16px 24px", background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.4)", borderRadius: 8 }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: "white", margin: 0 }}>TOTAL 2 YEARS (CHSE) : <span style={{ color: "#f5a623" }}>₹ 1,28,600/-</span></p>
              <p style={{ fontSize: 15, fontWeight: 700, color: "white", margin: 0 }}>TOTAL 2 YEARS (CBSE) : <span style={{ color: "#f5a623" }}>₹ 1,81,200/-</span></p>
            </div>

            {/* CHSE Table */}
            <h3 style={{ color: "#c8a84b", fontSize: 16, fontWeight: 700, marginBottom: 14 }}>🎓 CHSE Board</h3>
            <div style={{ overflowX: "auto", marginBottom: 32 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 500 }}>
                <thead>
                  <tr>
                    {["PARTICULARS", "1ST YEAR", "2ND YEAR"].map((h, i) => (
                      <th key={i} style={{ background: "#f5a623", color: "white", padding: "13px 18px", fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: "uppercase", textAlign: i === 0 ? "left" : "center", border: "1px solid #e09400" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Admission / Re-Admission Fees", "₹ 13,300/-", "₹ 13,300/-"],
                    ["Tuition / Coaching Fees", "₹ 48,000/-", "₹ 48,000/-"],
                    ["Test Series", "₹ 2,000/-", "₹ 4,000/-"],
                    ["Hostel Lodging", "₹ 12,000/-", "₹ 12,000/-"],
                    ["Hostel Fooding (3 Times)", "₹ 24,000/-", "₹ 24,000/-"],
                  ].map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.02)" }}>
                      <td style={{ padding: "12px 18px", fontSize: 14, color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.1)", textAlign: "left" }}>{row[0]}</td>
                      <td style={{ padding: "12px 18px", fontSize: 14, color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>{row[1]}</td>
                      <td style={{ padding: "12px 18px", fontSize: 14, color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>{row[2]}</td>
                    </tr>
                  ))}
                  <tr style={{ background: "#f5a623" }}>
                    <td style={{ padding: "13px 18px", fontWeight: 800, fontSize: 15, color: "white", border: "1px solid #e09400", textAlign: "left" }}>TOTAL</td>
                    <td style={{ padding: "13px 18px", fontWeight: 800, fontSize: 15, color: "white", border: "1px solid #e09400", textAlign: "center" }}>₹ 99,300/-</td>
                    <td style={{ padding: "13px 18px", fontWeight: 800, fontSize: 15, color: "white", border: "1px solid #e09400", textAlign: "center" }}>₹ 1,01,300/-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CBSE Table */}
            <h3 style={{ color: "#c8a84b", fontSize: 16, fontWeight: 700, marginBottom: 14 }}>📚 CBSE Board</h3>
            <div style={{ overflowX: "auto", marginBottom: 24 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 500 }}>
                <thead>
                  <tr>
                    {["PARTICULARS", "1ST YEAR", "2ND YEAR"].map((h, i) => (
                      <th key={i} style={{ background: "#f5a623", color: "white", padding: "13px 18px", fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: "uppercase", textAlign: i === 0 ? "left" : "center", border: "1px solid #e09400" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Admission / Re-Admission Fees", "₹ 25,600/-", "₹ 25,600/-"],
                    ["Tuition / Coaching Fees", "₹ 60,000/-", "₹ 60,000/-"],
                    ["Test Series", "₹ 5,000/-", "₹ 5,000/-"],
                    ["Hostel Lodging", "₹ 18,000/-", "₹ 18,000/-"],
                    ["Hostel Fooding (3 Times)", "₹ 36,000/-", "₹ 36,000/-"],
                  ].map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.02)" }}>
                      <td style={{ padding: "12px 18px", fontSize: 14, color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.1)", textAlign: "left" }}>{row[0]}</td>
                      <td style={{ padding: "12px 18px", fontSize: 14, color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>{row[1]}</td>
                      <td style={{ padding: "12px 18px", fontSize: 14, color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>{row[2]}</td>
                    </tr>
                  ))}
                  <tr style={{ background: "#f5a623" }}>
                    <td style={{ padding: "13px 18px", fontWeight: 800, fontSize: 15, color: "white", border: "1px solid #e09400", textAlign: "left" }}>TOTAL</td>
                    <td style={{ padding: "13px 18px", fontWeight: 800, fontSize: 15, color: "white", border: "1px solid #e09400", textAlign: "center" }}>₹ 1,44,600/-</td>
                    <td style={{ padding: "13px 18px", fontWeight: 800, fontSize: 15, color: "white", border: "1px solid #e09400", textAlign: "center" }}>₹ 1,44,600/-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ background: "rgba(255,193,7,0.15)", border: "1px solid rgba(255,193,7,0.4)", borderRadius: 8, padding: "13px 18px", marginBottom: 20 }}>
              <p style={{ margin: 0, fontSize: 13, color: "#ffc107", fontWeight: 600 }}>
                ⚠️ For Integrated NEET or IIT-JEE: <strong>₹ 30,000/- Extra per Year</strong>
              </p>
            </div>

            <div style={{ textAlign: "center", marginTop: 28 }}>
              <a href="/course-fees" style={{
                display: "inline-block", background: "#f5a623", color: "#0a1f44",
                padding: "14px 40px", borderRadius: 6, fontWeight: 800, fontSize: 15, textDecoration: "none"
              }}>View Full Fee Structure →</a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .adm-form-grid { grid-template-columns: 1fr !important; }
          .summer-adm-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </div>
  );
}
import React from "react";

const facultyData = [
  {
    name: "prof. Saroj kanta Samal",
    department: "Physics Department",
    qualification: "B.Tech, M.Tech",
    experience: "14 Years Experience",
  },
  {
    name: "Mrs. Ritupurna Samal",
    department: "English Department",
    qualification: "M.A, Mphil, MBA",
    experience: "7 Years Experience",
  },
  {
    name: "Dr. Subhash ch. Mishra",
    department: "Mathematics Department",
    qualification: "M.Sc, M.phil, Phd",
    experience: "32 Years Experience",
  },
  {
    name: "Mr. Abinash Mahalik",
    department: "Mathematics Department",
    qualification: "M.Sc, M.phil",
    experience: "5 Years Experience",
  },
  {
    name: "AKD(Arun Kumar Das)",
    department: "Chemistry Department",
    qualification: "M.sc, M.phil",
    experience: "25 Years Experience",
  },
  {
    name: "Miss. Mansi Nayak",
    department: "Chemistry Department",
    qualification: "M.sc(Goldmadalist)",
    experience: "4 Years Experience",
  },
  {
    name: "Miss. Saheba Rizwi",
    department: "Biology Department",
    qualification: "M.Sc, Mphil",
    experience: "3 Years Experience",
  },
  {
    name: "prof. Satyajit Biswal",
    department: "Biology Department",
    qualification: "",
    experience: "10 Years Experience",
  },
  {
    name: "Mr.Bibhu Pr. Panda",
    department: "Physics Department",
    qualification: "",
    experience: "6 Years Experience",
  },
  {
    name: "Mr. Prasant Ku. Pani",
    department: "Computer Science Department",
    qualification: "MCA",
    experience: "13 Years Experience",
  },
  {
    name: "Miss Glori Rana",
    department: "Computer Science Department",
    qualification: "BCA, MCA",
    experience: "",
  },
  {
    name: "Miss Itishree Tripathy",
    department: "Odia Department",
    qualification: "M.A",
    experience: "20 Years Experience",
  },
  {
    name: "prof. Iswar Chandra Prusty",
    department: "Odia Department",
    qualification: "M.A. M.Phil",
    experience: "27 Years Experience",
  },
  
];

export default function Faculty() {
  return (
    <div style={{ background: "#f5f7fb", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #0f172a, #1e3a8a, #2563eb)",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          Our Faculty
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "1.8",
            opacity: 0.9,
          }}
        >
          Meet our experienced and dedicated faculty members who guide
          students towards academic excellence and personal growth.
        </p>
      </section>

      {/* Faculty Cards */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "60px auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {facultyData.map((faculty, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                transition: "0.3s",
              }}
            >
              {/* Placeholder for Photo */}
              <div
                style={{
                  height: "160px",
                  background: "#dbeafe",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  color: "#1e3a8a",
                  fontWeight: "600",
                }}
              >
                Faculty Photo
              </div>

              {/* Faculty Details */}
              <div style={{ padding: "16px" }}>
                <h2
                  style={{
                    fontSize: "18px",
                    marginBottom: "6px",
                    lineHeight: "1.4",
                    color: "#111827",
                  }}
                >
                  {faculty.name}
                </h2>

                <p
                  style={{
                    color: "#2563eb",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  {faculty.department}
                </p>

                <p
                  style={{
                    color: "#4b5563",
                    marginBottom: "8px",
                    lineHeight: "1.4",
                  }}
                >
                  <strong>Qualification:</strong> {faculty.qualification}
                </p>

                <p
                  style={{
                    color: "#4b5563",
                    lineHeight: "1.4",
                  }}
                >
                  <strong>Experience:</strong> {faculty.experience}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

# 🪷 Lotus Science HSS — Backend

Node.js + Express + SQLite backend.
No database installation needed — SQLite creates a single file automatically!

---

## 📁 Folder Structure

```
lotus-backend/
├── server.js          ← Main entry point
├── database.js        ← SQLite setup + table creation
├── package.json       ← Dependencies
├── api.js             ← Copy this to your React src/ folder
├── lotus_school.db    ← Created automatically on first run
└── routes/
    ├── auth.js        ← Register, Login (student + admin)
    ├── enquiries.js   ← Submit, Get, Delete, Status update
    └── students.js    ← Profile, All students, Roll number
```

---

## 🚀 How to Run (Step by Step)

### Step 1 — Install Node.js
Download from: https://nodejs.org → Choose LTS version → Install

### Step 2 — Open this folder in VS Code
- Open VS Code
- File → Open Folder → Select `lotus-backend`

### Step 3 — Open Terminal in VS Code
Press: Ctrl + ` (backtick key)

### Step 4 — Install packages
```bash
npm install
```
Wait for it to finish (about 30 seconds)

### Step 5 — Start the server
```bash
npm run dev
```

You should see:
```
🪷  Lotus Science HSS — Backend Server
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀  Running at   : http://localhost:8080
🗄️   Database     : lotus_school.db (SQLite)
🔑  Admin login  : admin / lotus@123
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

✅ Backend is ready!

---

## 🔗 Connect to React Frontend

1. Copy `api.js` into your React project at: `lotus-school/src/api.js`
2. Make sure React runs on port 5173 (default with Vite)
3. Backend runs on port 8080

---

## 🔑 Default Login

| Role    | Username | Password  |
|---------|----------|-----------|
| Admin   | admin    | lotus@123 |
| Student | Register first via the app |

---

## 📡 All API Endpoints

### Auth
| Method | URL                        | Description          | Auth?  |
|--------|----------------------------|----------------------|--------|
| POST   | /api/auth/register         | Register new student | No     |
| POST   | /api/auth/student-login    | Student login        | No     |
| POST   | /api/auth/admin-login      | Admin login          | No     |

### Enquiries
| Method | URL                          | Description           | Auth?  |
|--------|------------------------------|-----------------------|--------|
| POST   | /api/enquiries               | Submit enquiry        | No     |
| GET    | /api/enquiries               | Get all enquiries     | Admin  |
| GET    | /api/enquiries/stats         | Dashboard stats       | Admin  |
| PATCH  | /api/enquiries/:id/status    | Update status         | Admin  |
| DELETE | /api/enquiries/:id           | Delete enquiry        | Admin  |

### Students
| Method | URL                          | Description           | Auth?    |
|--------|------------------------------|-----------------------|----------|
| GET    | /api/students/me             | My profile            | Student  |
| PATCH  | /api/students/me             | Update my profile     | Student  |
| GET    | /api/students                | All students          | Admin    |
| PATCH  | /api/students/:id/roll       | Assign roll number    | Admin    |
| DELETE | /api/students/:id            | Remove student        | Admin    |

---

## 🛠️ Troubleshooting

**"npm not found"**
→ Install Node.js from https://nodejs.org and restart VS Code

**"Port 8080 already in use"**
→ Change PORT in server.js from 8080 to 8081

**"Cannot find module better-sqlite3"**
→ Run: npm install again

**React shows CORS error**
→ Make sure backend is running on port 8080
→ Make sure React is running on port 5173

---

## 🌐 Deploy to Internet (Free)

1. Push code to GitHub
2. Go to https://render.com → New Web Service → Connect GitHub
3. Build command: `npm install`
4. Start command: `node server.js`
5. Done! You get a free URL like: https://lotus-backend.onrender.com

Then update BASE_URL in `src/api.js` to your Render URL.

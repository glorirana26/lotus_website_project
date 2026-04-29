const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { readDB, writeDB } = require('./database')

const app = express()
const SECRET = 'lotus_school_secret'

app.use(cors())
app.use(express.json())

// ── Helper: make token ──
function makeToken(data) {
  return jwt.sign(data, SECRET, { expiresIn: '7d' })
}

// ── Helper: verify token ──
function verifyToken(req, res, next) {
  const auth = req.headers.authorization
  if (!auth) return res.status(401).json({ error: 'Login required' })
  try {
    req.user = jwt.verify(auth.split(' ')[1], SECRET)
    next()
  } catch {
    res.status(401).json({ error: 'Invalid token' })
  }
}

// ─────────────────────────────────────────
// AUTH ROUTES
// ─────────────────────────────────────────

// Student Register
app.post('/api/auth/register', (req, res) => {
  const db = readDB()
  const { name, email, password, course, phone } = req.body

  if (!name || !email || !password)
    return res.status(400).json({ error: 'Name, email and password required' })

  if (db.students.find(s => s.email === email))
    return res.status(409).json({ error: 'Email already registered' })

  const newStudent = {
    id: Date.now(),
    name, email,
    password: bcrypt.hashSync(password, 10),
    course: course || '',
    phone: phone || '',
    roll_number: '',
    created_at: new Date().toISOString()
  }

  db.students.push(newStudent)
  writeDB(db)

  const { password: _, ...safe } = newStudent
  const token = makeToken({ id: safe.id, role: 'student', email: safe.email })
  res.status(201).json({ message: 'Registered successfully!', token, student: safe })
})

// Student Login
app.post('/api/auth/student-login', (req, res) => {
  const db = readDB()
  const { email, password } = req.body

  const student = db.students.find(s => s.email === email)
  if (!student) return res.status(401).json({ error: 'Email not found' })

  if (!bcrypt.compareSync(password, student.password))
    return res.status(401).json({ error: 'Wrong password' })

  const { password: _, ...safe } = student
  const token = makeToken({ id: safe.id, role: 'student', email: safe.email })
  res.json({ message: 'Login successful!', token, student: safe })
})

// Admin Login
app.post('/api/auth/admin-login', (req, res) => {
  const db = readDB()
  const { username, password } = req.body

  const admin = db.admins.find(a => a.username === username)
  if (!admin || admin.password !== password)
    return res.status(401).json({ error: 'Wrong username or password' })

  const token = makeToken({ id: admin.id, role: 'admin', username: admin.username })
  res.json({ message: 'Admin login successful!', token, role: 'admin' })
})

// ─────────────────────────────────────────
// ENQUIRY ROUTES
// ─────────────────────────────────────────

// Submit enquiry (no login needed)
app.post('/api/enquiries', (req, res) => {
  const db = readDB()
  const { name, mobile, email, course, message } = req.body

  if (!name || !mobile)
    return res.status(400).json({ error: 'Name and mobile required' })

  const enquiry = {
    id: Date.now(),
    name, mobile,
    email: email || '',
    course: course || '',
    message: message || '',
    status: 'pending',
    submitted_at: new Date().toISOString()
  }

  db.enquiries.push(enquiry)
  writeDB(db)
  res.status(201).json({ message: 'Enquiry submitted! We will contact you soon.', enquiry })
})

// Get all enquiries (admin only)
app.get('/api/enquiries', verifyToken, (req, res) => {
  if (req.user.role !== 'admin')
    return res.status(403).json({ error: 'Admin only' })

  const db = readDB()
  const { search, status } = req.query
  let list = db.enquiries

  if (search) {
    const s = search.toLowerCase()
    list = list.filter(e =>
      e.name.toLowerCase().includes(s) ||
      e.mobile.includes(s) ||
      e.course.toLowerCase().includes(s)
    )
  }
  if (status && status !== 'all') {
    list = list.filter(e => e.status === status)
  }

  res.json(list.reverse())
})

// Get stats (admin only)
app.get('/api/enquiries/stats', verifyToken, (req, res) => {
  if (req.user.role !== 'admin')
    return res.status(403).json({ error: 'Admin only' })

  const db = readDB()
  res.json({
    total:    db.enquiries.length,
    pending:  db.enquiries.filter(e => e.status === 'pending').length,
    resolved: db.enquiries.filter(e => e.status === 'resolved').length,
    students: db.students.length,
    today:    db.enquiries.filter(e =>
      new Date(e.submitted_at).toDateString() === new Date().toDateString()
    ).length
  })
})

// Update enquiry status (admin only)
app.patch('/api/enquiries/:id/status', verifyToken, (req, res) => {
  if (req.user.role !== 'admin')
    return res.status(403).json({ error: 'Admin only' })

  const db = readDB()
  const idx = db.enquiries.findIndex(e => e.id === Number(req.params.id))
  if (idx === -1) return res.status(404).json({ error: 'Enquiry not found' })

  db.enquiries[idx].status = req.body.status
  writeDB(db)
  res.json({ message: 'Status updated', enquiry: db.enquiries[idx] })
})

// Delete enquiry (admin only)
app.delete('/api/enquiries/:id', verifyToken, (req, res) => {
  if (req.user.role !== 'admin')
    return res.status(403).json({ error: 'Admin only' })

  const db = readDB()
  db.enquiries = db.enquiries.filter(e => e.id !== Number(req.params.id))
  writeDB(db)
  res.json({ message: 'Deleted successfully' })
})

// ─────────────────────────────────────────
// STUDENT ROUTES
// ─────────────────────────────────────────

// Get my profile
app.get('/api/students/me', verifyToken, (req, res) => {
  const db = readDB()
  const student = db.students.find(s => s.id === req.user.id)
  if (!student) return res.status(404).json({ error: 'Student not found' })
  const { password: _, ...safe } = student
  res.json(safe)
})

// Get all students (admin only)
app.get('/api/students', verifyToken, (req, res) => {
  if (req.user.role !== 'admin')
    return res.status(403).json({ error: 'Admin only' })

  const db = readDB()
  const safe = db.students.map(({ password: _, ...s }) => s)
  res.json(safe.reverse())
})

// Assign roll number (admin only)
app.patch('/api/students/:id/roll', verifyToken, (req, res) => {
  if (req.user.role !== 'admin')
    return res.status(403).json({ error: 'Admin only' })

  const db = readDB()
  const idx = db.students.findIndex(s => s.id === Number(req.params.id))
  if (idx === -1) return res.status(404).json({ error: 'Student not found' })

  db.students[idx].roll_number = req.body.roll_number
  writeDB(db)
  const { password: _, ...safe } = db.students[idx]
  res.json({ message: 'Roll number assigned', student: safe })
})

// Delete student (admin only)
app.delete('/api/students/:id', verifyToken, (req, res) => {
  if (req.user.role !== 'admin')
    return res.status(403).json({ error: 'Admin only' })

  const db = readDB()
  db.students = db.students.filter(s => s.id !== Number(req.params.id))
  writeDB(db)
  res.json({ message: 'Student removed' })
})

// ─────────────────────────────────────────
// START SERVER
// ─────────────────────────────────────────
app.listen(8080, () => {
  console.log('')
  console.log('🪷  Lotus Science HSS — Backend')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('🚀  http://localhost:8080')
  console.log('🔑  Admin: admin / lotus@123')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
})
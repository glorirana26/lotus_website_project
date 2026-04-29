// routes/auth.js
// Handles: Student Register, Student Login, Admin Login

const express = require('express')
const bcrypt  = require('bcryptjs')
const jwt     = require('jsonwebtoken')
const db      = require('../database')

const router = express.Router()
const JWT_SECRET = process.env.JWT_SECRET || 'lotus_school_secret_2025'

// ─── Helper: generate token ───────────────────────────────────────────────────
function makeToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
}

// ─── POST /api/auth/register ──────────────────────────────────────────────────
// Register a new student
router.post('/register', (req, res) => {
  try {
    const { name, email, password, course, phone } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email and password are required' })
    }

    // Check if email already exists
    const existing = db.prepare('SELECT id FROM students WHERE email = ?').get(email)
    if (existing) {
      return res.status(409).json({ error: 'Email already registered. Please login.' })
    }

    const hashedPassword = bcrypt.hashSync(password, 10)
    const result = db.prepare(`
      INSERT INTO students (name, email, password, course, phone)
      VALUES (?, ?, ?, ?, ?)
    `).run(name, email, hashedPassword, course || '', phone || '')

    const student = db.prepare('SELECT id, name, email, course, phone, roll_number, created_at FROM students WHERE id = ?').get(result.lastInsertRowid)
    const token = makeToken({ id: student.id, role: 'student', email: student.email })

    res.status(201).json({
      message: 'Registration successful!',
      token,
      student
    })
  } catch (err) {
    console.error('Register error:', err)
    res.status(500).json({ error: 'Server error during registration' })
  }
})

// ─── POST /api/auth/student-login ────────────────────────────────────────────
// Student login with email + password
router.post('/student-login', (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }

    const student = db.prepare('SELECT * FROM students WHERE email = ?').get(email)
    if (!student) {
      return res.status(401).json({ error: 'No account found with this email' })
    }

    const passwordMatch = bcrypt.compareSync(password, student.password)
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Incorrect password' })
    }

    const token = makeToken({ id: student.id, role: 'student', email: student.email })

    // Return student without password
    const { password: _, ...safeStudent } = student
    res.json({
      message: 'Login successful!',
      token,
      student: safeStudent
    })
  } catch (err) {
    console.error('Student login error:', err)
    res.status(500).json({ error: 'Server error during login' })
  }
})

// ─── POST /api/auth/admin-login ───────────────────────────────────────────────
// Admin login with username + password
router.post('/admin-login', (req, res) => {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' })
    }

    const admin = db.prepare('SELECT * FROM admins WHERE username = ?').get(username)
    if (!admin) {
      return res.status(401).json({ error: 'Invalid admin credentials' })
    }

    const passwordMatch = bcrypt.compareSync(password, admin.password)
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid admin credentials' })
    }

    const token = makeToken({ id: admin.id, role: 'admin', username: admin.username })

    res.json({
      message: 'Admin login successful!',
      token,
      role: 'admin',
      username: admin.username
    })
  } catch (err) {
    console.error('Admin login error:', err)
    res.status(500).json({ error: 'Server error during admin login' })
  }
})

module.exports = router

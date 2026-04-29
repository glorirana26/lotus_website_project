// routes/students.js
// Handles: Student profile, Update profile, Admin view all students

const express = require('express')
const bcrypt  = require('bcryptjs')
const jwt     = require('jsonwebtoken')
const db      = require('../database')

const router = express.Router()
const JWT_SECRET = process.env.JWT_SECRET || 'lotus_school_secret_2025'

// ─── Middleware: verify student token ─────────────────────────────────────────
function requireStudent(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Login required' })
  }
  try {
    const token = authHeader.split(' ')[1]
    const decoded = jwt.verify(token, JWT_SECRET)
    if (decoded.role !== 'student') {
      return res.status(403).json({ error: 'Student access only' })
    }
    req.student = decoded
    next()
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' })
  }
}

// ─── Middleware: verify admin token ──────────────────────────────────────────
function requireAdmin(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Admin access required' })
  }
  try {
    const token = authHeader.split(' ')[1]
    const decoded = jwt.verify(token, JWT_SECRET)
    if (decoded.role !== 'admin') {
      return res.status(403).json({ error: 'Admin access only' })
    }
    req.admin = decoded
    next()
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' })
  }
}

// ─── GET /api/students/me ─────────────────────────────────────────────────────
// Get logged-in student's own profile
router.get('/me', requireStudent, (req, res) => {
  try {
    const student = db.prepare(
      'SELECT id, name, email, course, phone, roll_number, created_at FROM students WHERE id = ?'
    ).get(req.student.id)

    if (!student) return res.status(404).json({ error: 'Student not found' })
    res.json(student)
  } catch (err) {
    console.error('Get profile error:', err)
    res.status(500).json({ error: 'Failed to fetch profile' })
  }
})

// ─── PATCH /api/students/me ───────────────────────────────────────────────────
// Update logged-in student's own profile
router.patch('/me', requireStudent, (req, res) => {
  try {
    const { name, phone, course, password } = req.body
    const student = db.prepare('SELECT * FROM students WHERE id = ?').get(req.student.id)
    if (!student) return res.status(404).json({ error: 'Student not found' })

    const newName    = name     || student.name
    const newPhone   = phone    || student.phone
    const newCourse  = course   || student.course
    const newPassword = password ? bcrypt.hashSync(password, 10) : student.password

    db.prepare(`
      UPDATE students SET name = ?, phone = ?, course = ?, password = ? WHERE id = ?
    `).run(newName, newPhone, newCourse, newPassword, req.student.id)

    const updated = db.prepare(
      'SELECT id, name, email, course, phone, roll_number, created_at FROM students WHERE id = ?'
    ).get(req.student.id)

    res.json({ message: 'Profile updated successfully', student: updated })
  } catch (err) {
    console.error('Update profile error:', err)
    res.status(500).json({ error: 'Failed to update profile' })
  }
})

// ─── GET /api/students ────────────────────────────────────────────────────────
// Admin: get all students
router.get('/', requireAdmin, (req, res) => {
  try {
    const students = db.prepare(
      'SELECT id, name, email, course, phone, roll_number, created_at FROM students ORDER BY created_at DESC'
    ).all()
    res.json(students)
  } catch (err) {
    console.error('Get all students error:', err)
    res.status(500).json({ error: 'Failed to fetch students' })
  }
})

// ─── PATCH /api/students/:id/roll ─────────────────────────────────────────────
// Admin: assign roll number to a student
router.patch('/:id/roll', requireAdmin, (req, res) => {
  try {
    const { roll_number } = req.body
    if (!roll_number) return res.status(400).json({ error: 'Roll number is required' })

    const result = db.prepare('UPDATE students SET roll_number = ? WHERE id = ?').run(roll_number, req.params.id)
    if (result.changes === 0) return res.status(404).json({ error: 'Student not found' })

    const updated = db.prepare(
      'SELECT id, name, email, course, phone, roll_number, created_at FROM students WHERE id = ?'
    ).get(req.params.id)

    res.json({ message: 'Roll number assigned', student: updated })
  } catch (err) {
    console.error('Assign roll error:', err)
    res.status(500).json({ error: 'Failed to assign roll number' })
  }
})

// ─── DELETE /api/students/:id ─────────────────────────────────────────────────
// Admin: remove a student
router.delete('/:id', requireAdmin, (req, res) => {
  try {
    const result = db.prepare('DELETE FROM students WHERE id = ?').run(req.params.id)
    if (result.changes === 0) return res.status(404).json({ error: 'Student not found' })
    res.json({ message: 'Student removed successfully' })
  } catch (err) {
    console.error('Delete student error:', err)
    res.status(500).json({ error: 'Failed to delete student' })
  }
})

module.exports = router

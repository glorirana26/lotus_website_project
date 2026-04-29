// routes/enquiries.js
// Handles: Submit enquiry, Get all (admin), Delete, Update status

const express = require('express')
const db      = require('../database')
const jwt     = require('jsonwebtoken')

const router = express.Router()
const JWT_SECRET = process.env.JWT_SECRET || 'lotus_school_secret_2025'

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

// ─── POST /api/enquiries ──────────────────────────────────────────────────────
// Submit a new enquiry (public – no auth needed)
router.post('/', (req, res) => {
  try {
    const { name, mobile, email, course, message } = req.body

    if (!name || !mobile) {
      return res.status(400).json({ error: 'Name and mobile number are required' })
    }

    const result = db.prepare(`
      INSERT INTO enquiries (name, mobile, email, course, message)
      VALUES (?, ?, ?, ?, ?)
    `).run(name, mobile, email || '', course || '', message || '')

    const enquiry = db.prepare('SELECT * FROM enquiries WHERE id = ?').get(result.lastInsertRowid)

    res.status(201).json({
      message: 'Enquiry submitted successfully! We will contact you soon.',
      enquiry
    })
  } catch (err) {
    console.error('Enquiry submit error:', err)
    res.status(500).json({ error: 'Failed to submit enquiry' })
  }
})

// ─── GET /api/enquiries ───────────────────────────────────────────────────────
// Get all enquiries – Admin only
router.get('/', requireAdmin, (req, res) => {
  try {
    const { search, status } = req.query
    let query = 'SELECT * FROM enquiries WHERE 1=1'
    const params = []

    if (search) {
      query += ' AND (name LIKE ? OR mobile LIKE ? OR email LIKE ? OR course LIKE ?)'
      const s = `%${search}%`
      params.push(s, s, s, s)
    }
    if (status && status !== 'all') {
      query += ' AND status = ?'
      params.push(status)
    }

    query += ' ORDER BY submitted_at DESC'
    const enquiries = db.prepare(query).all(...params)
    res.json(enquiries)
  } catch (err) {
    console.error('Get enquiries error:', err)
    res.status(500).json({ error: 'Failed to fetch enquiries' })
  }
})

// ─── PATCH /api/enquiries/:id/status ─────────────────────────────────────────
// Update enquiry status (pending / resolved) – Admin only
router.patch('/:id/status', requireAdmin, (req, res) => {
  try {
    const { status } = req.body
    if (!['pending', 'resolved'].includes(status)) {
      return res.status(400).json({ error: 'Status must be pending or resolved' })
    }

    const result = db.prepare('UPDATE enquiries SET status = ? WHERE id = ?').run(status, req.params.id)
    if (result.changes === 0) {
      return res.status(404).json({ error: 'Enquiry not found' })
    }

    const updated = db.prepare('SELECT * FROM enquiries WHERE id = ?').get(req.params.id)
    res.json({ message: 'Status updated', enquiry: updated })
  } catch (err) {
    console.error('Update status error:', err)
    res.status(500).json({ error: 'Failed to update status' })
  }
})

// ─── DELETE /api/enquiries/:id ────────────────────────────────────────────────
// Delete an enquiry – Admin only
router.delete('/:id', requireAdmin, (req, res) => {
  try {
    const result = db.prepare('DELETE FROM enquiries WHERE id = ?').run(req.params.id)
    if (result.changes === 0) {
      return res.status(404).json({ error: 'Enquiry not found' })
    }
    res.json({ message: 'Enquiry deleted successfully' })
  } catch (err) {
    console.error('Delete enquiry error:', err)
    res.status(500).json({ error: 'Failed to delete enquiry' })
  }
})

// ─── GET /api/enquiries/stats ─────────────────────────────────────────────────
// Dashboard stats – Admin only
router.get('/stats', requireAdmin, (req, res) => {
  try {
    const total    = db.prepare('SELECT COUNT(*) as count FROM enquiries').get().count
    const pending  = db.prepare("SELECT COUNT(*) as count FROM enquiries WHERE status = 'pending'").get().count
    const resolved = db.prepare("SELECT COUNT(*) as count FROM enquiries WHERE status = 'resolved'").get().count
    const students = db.prepare('SELECT COUNT(*) as count FROM students').get().count
    const today    = db.prepare("SELECT COUNT(*) as count FROM enquiries WHERE date(submitted_at) = date('now')").get().count

    res.json({ total, pending, resolved, students, today })
  } catch (err) {
    console.error('Stats error:', err)
    res.status(500).json({ error: 'Failed to fetch stats' })
  }
})

module.exports = router

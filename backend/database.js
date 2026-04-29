// Database - JSON file use karega (no installation needed!)
const fs = require('fs')
const path = require('path')

const DB_FILE = path.join(__dirname, 'db.json')

// Default empty database structure
const defaultDB = {
  admins: [
    { id: 1, username: 'admin', password: 'lotus@123' }
  ],
  students: [],
  enquiries: []
}

// Read database
function readDB() {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify(defaultDB, null, 2))
  }
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'))
}

// Save database
function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2))
}

module.exports = { readDB, writeDB }
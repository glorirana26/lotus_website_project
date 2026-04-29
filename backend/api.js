// src/api.js
// Central API helper — import this in any React page
// All backend calls go through here

import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api'

// Axios instance with base URL
const api = axios.create({ baseURL: BASE_URL })

// Automatically attach JWT token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// ─── AUTH ─────────────────────────────────────────────────────────────────────
export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  studentLogin: (data) => api.post('/auth/student-login', data),
  adminLogin: (data) => api.post('/auth/admin-login', data),
}

// ─── ENQUIRIES ────────────────────────────────────────────────────────────────
export const enquiryAPI = {
  submit: (data) => api.post('/enquiries', data),
  getAll: (params) => api.get('/enquiries', { params }),
  updateStatus: (id, status) => api.patch(`/enquiries/${id}/status`, { status }),
  delete: (id) => api.delete(`/enquiries/${id}`),
  getStats: () => api.get('/enquiries/stats'),
}

// ─── STUDENTS ─────────────────────────────────────────────────────────────────
export const studentAPI = {
  getProfile: () => api.get('/students/me'),
  updateProfile: (data) => api.patch('/students/me', data),
  getAll: () => api.get('/students'),
  assignRoll: (id, roll_number) => api.patch(`/students/${id}/roll`, { roll_number }),
  delete: (id) => api.delete(`/students/${id}`),
}

export default api

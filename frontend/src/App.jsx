import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import StudentDashboard from './pages/StudentDashboard'
import Layout from './components/Layout'
import Admission from './pages/Admission'
import SummerCourse from './pages/SummerCourse'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout wrapper — Navbar + Footer sab pages pe */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/summer-course" element={<SummerCourse />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
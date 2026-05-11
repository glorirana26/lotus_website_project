import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import StudentDashboard from './pages/StudentDashboard'
import Layout from './components/Layout'
import Admission from './pages/Admission'
import Faculty from './pages/Faculty'
import Examinations from './pages/Examinations'
import Results from './pages/Results'
import Coaching from './pages/Coaching'
import CourseFees from './pages/CourseFees'
import SummerCourse from './pages/SummerCourse'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Academic from './pages/Academic'

export default function App() {
  return (
      <Routes>
        {/* Layout wrapper — Navbar + Footer sab pages pe */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/summer-course" element={<SummerCourse />} />
          <Route path="/course-fees" element={<CourseFees />} />
          <Route path="/academics" element={<Academic />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/academics/faculty" element={<Faculty />} />
          <Route path="/academics/examinations" element={<Examinations />} />
          <Route path="/academics/results" element={<Results />} />
          <Route path="/academics/coaching" element={<Coaching />} />
        </Route>
 
        {/* Bina Layout ke */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
  );
}
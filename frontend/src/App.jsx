import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';

import DepartmentDetail from './pages/DepartmentDetail';

import News from './pages/News';
import Gallery from './pages/Gallery';
import StaffPortal from './pages/StaffPortal';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import StaffDashboard from './pages/dashboard/StaffDashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="department/:id" element={<DepartmentDetail />} />
                    <Route path="team" element={<Team />} />
                    <Route path="news" element={<News />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="staff-portal" element={<StaffPortal />} />
                </Route>
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/staff-dashboard" element={<StaffDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;

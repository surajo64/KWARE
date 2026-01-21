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

import AdminOverview from './pages/dashboard/components/AdminOverview';
import AdminStaff from './pages/dashboard/components/AdminStaff';
import AdminReports from './pages/dashboard/components/AdminReports';
import AdminPayslips from './pages/dashboard/components/AdminPayslips';
import AdminSchedules from './pages/dashboard/components/AdminSchedules';
import StaffOverview from './pages/dashboard/components/StaffOverview';
import StaffSchedule from './pages/dashboard/components/StaffSchedule';
import StaffPayslip from './pages/dashboard/components/StaffPayslip';
import StaffProfile from './pages/dashboard/components/StaffProfile';

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
                <Route path="/admin-dashboard" element={<AdminDashboard />}>
                    <Route index element={<AdminOverview />} />
                    <Route path="staff" element={<AdminStaff />} />
                    <Route path="schedules" element={<AdminSchedules />} />
                    <Route path="payslips" element={<AdminPayslips />} />
                    <Route path="reports" element={<AdminReports />} />
                    {/* Placeholder for settings if needed */}
                    <Route path="settings" element={<AdminOverview />} />
                </Route>
                <Route path="/staff-dashboard" element={<StaffDashboard />}>
                    <Route index element={<StaffOverview />} />
                    <Route path="schedule" element={<StaffSchedule />} />
                    <Route path="payslip" element={<StaffPayslip />} />
                    <Route path="profile" element={<StaffProfile />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;

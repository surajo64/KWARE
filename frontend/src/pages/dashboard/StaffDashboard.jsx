import { Calendar, User, FileText, LogOut, Bell, Activity } from 'lucide-react';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function StaffDashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (!loggedInUser) {
            navigate('/staff-portal');
            return;
        }
        const parsedUser = JSON.parse(loggedInUser);
        if (parsedUser.role !== 'staff') {
            // navigate('/admin-dashboard'); 
        }
        setUser(parsedUser);
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/staff-portal');
    };

    if (!user) return null;

    const navLinkClass = ({ isActive }) =>
        `flex items-center gap-3 p-3 rounded-lg transition ${isActive ? 'bg-white/10 text-white' : 'text-gray-300 hover:text-white hover:bg-white/5'}`;

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="w-64 bg-primary-dark text-white p-6 hidden md:block">
                <div className="flex items-center gap-2 mb-8">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-primary-dark font-bold">FNPH</div>
                    <span className="font-bold text-lg">Staff Portal</span>
                </div>
                <nav className="space-y-4">
                    <NavLink to="/staff-dashboard" end className={navLinkClass}>
                        <Activity size={20} /> Overview
                    </NavLink>
                    <NavLink to="/staff-dashboard/schedule" className={navLinkClass}>
                        <Calendar size={20} /> Schedule
                    </NavLink>
                    <NavLink to="/staff-dashboard/payslip" className={navLinkClass}>
                        <FileText size={20} /> Payslip
                    </NavLink>
                    <NavLink to="/staff-dashboard/profile" className={navLinkClass}>
                        <User size={20} /> My Profile
                    </NavLink>
                </nav>
                <div className="absolute bottom-6 left-6">
                    <button onClick={handleLogout} className="flex items-center gap-2 text-gray-300 hover:text-white transition">
                        <LogOut size={18} /> Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Navbar */}
                <header className="bg-white shadow-sm sticky top-0 z-10 px-8 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-gray-800">Staff Dashboard</h1>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3 bg-gray-100 py-1 px-3 rounded-full">
                            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center font-bold text-primary-dark">
                                {user.name.charAt(0)}
                            </div>
                            <span className="text-sm font-bold text-gray-700 hidden md:block">{user.name}</span>
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto">
                    <Outlet context={{ user }} />
                </div>
            </div>
        </div>
    );
}

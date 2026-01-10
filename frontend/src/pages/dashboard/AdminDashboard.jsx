import { Users, Activity, FileText, Settings, LogOut, Bell } from 'lucide-react';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function AdminDashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (!loggedInUser) {
            navigate('/staff-portal');
            return;
        }
        const parsedUser = JSON.parse(loggedInUser);
        if (parsedUser.role !== 'admin') {
            navigate('/staff-portal');
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
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-primary-dark text-white p-6 hidden md:block">
                <h2 className="text-2xl font-bold mb-8">Admin Portal</h2>
                <nav className="space-y-4">
                    <NavLink to="/admin-dashboard" end className={navLinkClass}>
                        <Activity size={20} /> Overview
                    </NavLink>
                    <NavLink to="/admin-dashboard/staff" className={navLinkClass}>
                        <Users size={20} /> Staff Management
                    </NavLink>
                    <NavLink to="/admin-dashboard/reports" className={navLinkClass}>
                        <FileText size={20} /> Reports
                    </NavLink>
                    <NavLink to="/admin-dashboard/settings" className={navLinkClass}>
                        <Settings size={20} /> Settings
                    </NavLink>
                </nav>
                <div className="absolute bottom-6 left-6">
                    <button onClick={handleLogout} className="flex items-center gap-2 text-gray-300 hover:text-white transition">
                        <LogOut size={18} /> Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto">
                {/* Header */}
                <header className="bg-white shadow-sm p-6 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
                            <Bell size={20} />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center font-bold text-primary-dark">
                                {user.name.charAt(0)}
                            </div>
                            <div>
                                <p className="font-bold text-sm text-gray-800">{user.name}</p>
                                <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                            </div>
                        </div>
                    </div>
                </header>

                <Outlet context={{ user }} />
            </div>
        </div>
    );
}

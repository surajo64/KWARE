import { Users, Activity, Calendar, FileText, Settings, LogOut, Bell } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
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

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-primary-dark text-white p-6 hidden md:block">
                <h2 className="text-2xl font-bold mb-8">Admin Portal</h2>
                <nav className="space-y-4">
                    <a href="#" className="flex items-center gap-3 bg-white/10 p-3 rounded-lg text-white"><Activity size={20} /> Overview</a>
                    <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-white/5 p-3 rounded-lg transition"><Users size={20} /> Staff Management</a>
                    <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-white/5 p-3 rounded-lg transition"><FileText size={20} /> Reports</a>
                    <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-white/5 p-3 rounded-lg transition"><Settings size={20} /> Settings</a>
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
                    <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
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

                {/* Stats Grid */}
                <div className="p-8">
                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary">
                            <p className="text-gray-500 text-sm mb-1">Total Staff</p>
                            <h3 className="text-3xl font-bold text-gray-800">142</h3>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-secondary">
                            <p className="text-gray-500 text-sm mb-1">Departments</p>
                            <h3 className="text-3xl font-bold text-gray-800">26</h3>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                            <p className="text-gray-500 text-sm mb-1">Active Patients</p>
                            <h3 className="text-3xl font-bold text-gray-800">315</h3>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
                            <p className="text-gray-500 text-sm mb-1">Today's Admissions</p>
                            <h3 className="text-3xl font-bold text-gray-800">12</h3>
                        </div>
                    </div>

                    {/* Recent Table */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-100">
                            <h3 className="font-bold text-lg text-gray-800">Recent Login Activity</h3>
                        </div>
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 text-gray-500 text-sm">
                                <tr>
                                    <th className="p-4">User</th>
                                    <th className="p-4">Role</th>
                                    <th className="p-4">Time</th>
                                    <th className="p-4">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                                <tr>
                                    <td className="p-4 font-medium">Dr. Zubairu Umar</td>
                                    <td className="p-4 text-gray-500">CMAC</td>
                                    <td className="p-4 text-gray-500">2 mins ago</td>
                                    <td className="p-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Active</span></td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">Nurse Amina</td>
                                    <td className="p-4 text-gray-500">Staff</td>
                                    <td className="p-4 text-gray-500">15 mins ago</td>
                                    <td className="p-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Active</span></td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">System Admin</td>
                                    <td className="p-4 text-gray-500">Admin</td>
                                    <td className="p-4 text-gray-500">1 hour ago</td>
                                    <td className="p-4"><span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Offline</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

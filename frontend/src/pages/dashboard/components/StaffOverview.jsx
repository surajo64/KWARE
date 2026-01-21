import { Bell, FileText, User, Clock, Calendar, TrendingUp, CheckCircle, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

export default function StaffOverview() {
    const { user } = useOutletContext();

    if (!user) return null;

    // Get current date and time
    const now = new Date();
    const currentDate = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const currentTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });

    // Sample stats (in real app, these would come from backend)
    const stats = [
        { label: 'Shifts This Month', value: '18', icon: Calendar, color: 'bg-blue-100 text-blue-600' },
        { label: 'Upcoming Shifts', value: '5', icon: Clock, color: 'bg-green-100 text-green-600' },
        { label: 'Completed Tasks', value: '12', icon: CheckCircle, color: 'bg-purple-100 text-purple-600' },
        { label: 'Latest Payslip', value: 'Dec 2025', icon: FileText, color: 'bg-orange-100 text-orange-600' },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white mb-8 shadow-lg">
                <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
                <p className="opacity-90 mb-4">Department: {user.department}</p>
                <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{currentDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{currentTime}</span>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-lg ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</h3>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="md:col-span-2 space-y-8">
                    {/* Announcements */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <h2 className="font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
                            <Bell size={20} className="text-primary" /> Hospital Announcements
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-1">Staff Meeting</h4>
                                        <p className="text-sm text-gray-600">General staff meeting scheduled for Friday 17th at 10:00 AM in the Conference Hall.</p>
                                    </div>
                                    <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded whitespace-nowrap">Important</span>
                                </div>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-1">New Payslip Available</h4>
                                        <p className="text-sm text-gray-600">Your December 2025 payslip is now available for download in the Payslip section.</p>
                                    </div>
                                    <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded whitespace-nowrap">New</span>
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-gray-300">
                                <h4 className="font-bold text-gray-800 mb-1">System Maintenance</h4>
                                <p className="text-sm text-gray-600">EMR system will undergo maintenance on Saturday night from 12 AM to 4 AM.</p>
                            </div>
                        </div>
                    </div>

                    {/* Pending Tasks */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <h2 className="font-bold text-xl text-gray-800 mb-4">My Tasks</h2>
                        <ul className="divide-y divide-gray-100">
                            <li className="py-3 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                                    <span className="text-gray-700">Submit monthly report</span>
                                </div>
                                <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">High Priority</span>
                            </li>
                            <li className="py-3 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                                    <span className="text-gray-700">Update patient records (Ward C)</span>
                                </div>
                                <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded">Medium</span>
                            </li>
                            <li className="py-3 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                                    <span className="text-gray-700">Review shift schedule for next week</span>
                                </div>
                                <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">Low</span>
                            </li>
                        </ul>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <h2 className="font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
                            <TrendingUp size={20} className="text-primary" /> Recent Activity
                        </h2>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                <div>
                                    <p className="text-sm font-medium text-gray-800">Completed morning shift</p>
                                    <p className="text-xs text-gray-500">Today at 4:00 PM</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                <div>
                                    <p className="text-sm font-medium text-gray-800">Downloaded December payslip</p>
                                    <p className="text-xs text-gray-500">Yesterday at 2:30 PM</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                                <div>
                                    <p className="text-sm font-medium text-gray-800">Updated profile information</p>
                                    <p className="text-xs text-gray-500">3 days ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                    {/* Quick Actions */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <h2 className="font-bold text-lg text-gray-800 mb-4">Quick Actions</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <Link
                                to="/staff-dashboard/payslip"
                                className="p-4 bg-gray-50 hover:bg-primary/10 hover:text-primary rounded-xl flex flex-col items-center justify-center gap-2 transition"
                            >
                                <FileText size={24} />
                                <span className="text-xs font-bold text-center">View Payslips</span>
                            </Link>
                            <Link
                                to="/staff-dashboard/profile"
                                className="p-4 bg-gray-50 hover:bg-primary/10 hover:text-primary rounded-xl flex flex-col items-center justify-center gap-2 transition"
                            >
                                <User size={24} />
                                <span className="text-xs font-bold text-center">My Profile</span>
                            </Link>
                            <Link
                                to="/staff-dashboard/schedule"
                                className="p-4 bg-gray-50 hover:bg-primary/10 hover:text-primary rounded-xl flex flex-col items-center justify-center gap-2 transition"
                            >
                                <Calendar size={24} />
                                <span className="text-xs font-bold text-center">My Schedule</span>
                            </Link>
                            <button className="p-4 bg-gray-50 hover:bg-primary/10 hover:text-primary rounded-xl flex flex-col items-center justify-center gap-2 transition">
                                <LinkIcon size={24} />
                                <span className="text-xs font-bold text-center">Quick Links</span>
                            </button>
                        </div>
                    </div>

                    {/* Current Shift Info */}
                    <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl shadow-md p-6">
                        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <Clock size={18} /> Today's Shift
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <p className="text-gray-200 text-sm">Date</p>
                                <p className="font-bold text-lg">{now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                            </div>
                            <div>
                                <p className="text-gray-200 text-sm">Time</p>
                                <p className="font-bold text-lg">08:00 AM - 04:00 PM</p>
                            </div>
                            <div>
                                <p className="text-gray-200 text-sm">Department</p>
                                <p className="font-bold text-lg">{user.department}</p>
                            </div>
                            <div className="pt-4 border-t border-white/20">
                                <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">Morning Shift</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <h2 className="font-bold text-lg text-gray-800 mb-4">This Month</h2>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                <span className="text-sm text-gray-700">Total Hours</span>
                                <span className="font-bold text-blue-600">144 hrs</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                                <span className="text-sm text-gray-700">Attendance</span>
                                <span className="font-bold text-green-600">100%</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                                <span className="text-sm text-gray-700">Overtime</span>
                                <span className="font-bold text-purple-600">8 hrs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

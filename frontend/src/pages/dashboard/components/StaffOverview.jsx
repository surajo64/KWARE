import { Bell, FileText, User, Clock } from 'lucide-react';

export default function StaffOverview({ user }) {
    if (!user) return null;

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-white mb-8 shadow-lg">
                <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}</h1>
                <p className="opacity-90">Department: {user.department} | Have a great shift today!</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="md:col-span-2 space-y-8">
                    {/* Announcements */}
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <h2 className="font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
                            <Bell size={20} className="text-primary" /> Hospital Announcements
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                                <h4 className="font-bold text-gray-800 mb-1">Staff Meeting</h4>
                                <p className="text-sm text-gray-600">General staff meeting scheduled for Friday 10th at 10:00 AM in the Conference Hall.</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-gray-300">
                                <h4 className="font-bold text-gray-800 mb-1">System Maintenance</h4>
                                <p className="text-sm text-gray-600">EMR system will undergo maintenance on Saturday night from 12 AM to 4 AM.</p>
                            </div>
                        </div>
                    </div>

                    {/* Pending Tasks */}
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <h2 className="font-bold text-xl text-gray-800 mb-4">My Tasks</h2>
                        <ul className="divide-y divide-gray-100">
                            <li className="py-3 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" className="rounded text-primary focu:ring-primary" />
                                    <span className="text-gray-700">Submit monthly report</span>
                                </div>
                                <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">High Priority</span>
                            </li>
                            <li className="py-3 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" className="rounded text-primary focu:ring-primary" />
                                    <span className="text-gray-700">Update patient records (Ward C)</span>
                                </div>
                                <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded">Medium</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                    {/* Quick Actions */}
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <h2 className="font-bold text-lg text-gray-800 mb-4">Quick Actions</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="p-4 bg-gray-50 hover:bg-primary/10 hover:text-primary rounded-xl flex flex-col items-center justify-center gap-2 transition">
                                <FileText size={24} />
                                <span className="text-xs font-bold">New Request</span>
                            </button>
                            <button className="p-4 bg-gray-50 hover:bg-primary/10 hover:text-primary rounded-xl flex flex-col items-center justify-center gap-2 transition">
                                <User size={24} />
                                <span className="text-xs font-bold">My Profile</span>
                            </button>
                        </div>
                    </div>

                    {/* Shift Info */}
                    <div className="bg-primary-dark text-white rounded-xl shadow-sm p-6">
                        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <Clock size={18} /> Current Shift
                        </h2>
                        <div className="mb-4">
                            <p className="text-gray-300 text-sm">Date</p>
                            <p className="font-bold text-lg">Oct 24, 2024</p>
                        </div>
                        <div>
                            <p className="text-gray-300 text-sm">Time</p>
                            <p className="font-bold text-lg">08:00 AM - 04:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Users, Activity, LogOut, Bell } from 'lucide-react';

export default function AdminOverview() {
    const { user } = useOutletContext();
    const [stats, setStats] = useState({
        totalStaff: 0,
        totalDepartments: 0,
        activePatients: 0,
        todaysAdmissions: 0
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch('/api/users/stats', {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                });
                const data = await res.json();
                if (res.ok) {
                    setStats(data);
                }
            } catch (error) {
                console.error('Error fetching stats:', error);
            }
        };

        if (user && user.token) {
            fetchStats();
        }
    }, [user]);

    return (
        <div className="p-8">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary">
                    <p className="text-gray-500 text-sm mb-1">Total Staff</p>
                    <h3 className="text-3xl font-bold text-gray-800">{stats.totalStaff}</h3>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-secondary">
                    <p className="text-gray-500 text-sm mb-1">Departments</p>
                    <h3 className="text-3xl font-bold text-gray-800">{stats.totalDepartments}</h3>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                    <p className="text-gray-500 text-sm mb-1">Total Admins</p>
                    <h3 className="text-3xl font-bold text-gray-800">{stats.totalAdmins}</h3>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
                    <p className="text-gray-500 text-sm mb-1">Today's Admissions</p>
                    <h3 className="text-3xl font-bold text-gray-800">{stats.todaysAdmissions}</h3>
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
    );
}

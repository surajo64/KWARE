import { useState, useEffect } from 'react';
import { Plus, Trash2, Edit, X } from 'lucide-react';
import { departments } from '../../../data/departments';

export default function AdminStaff() {
    const [staff, setStaff] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        department: 'General',
        role: 'staff'
    });
    const [editingId, setEditingId] = useState(null);

    // Fetch Staff
    useEffect(() => {
        fetchStaff();
    }, []);

    const fetchStaff = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));

            if (!user || !user.token) {
                setLoading(false);
                return;
            }

            const res = await fetch('/api/users', {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            if (res.status === 401) {
                // Token is invalid/expired
                localStorage.removeItem('user');
                window.location.href = '/staff-portal';
                return;
            }

            const data = await res.json();
            if (res.ok) {
                setStaff(data);
            }
        } catch (error) {
            console.error('Error fetching staff:', error);
        } finally {
            setLoading(false);
        }
    };

    // Delete Staff
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this staff member?')) {
            try {
                const user = JSON.parse(localStorage.getItem('user'));
                const res = await fetch(`/api/users/${id}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                });
                if (res.ok) {
                    setStaff(staff.filter((s) => s._id !== id));
                }
            } catch (error) {
                console.error('Error deleting staff:', error);
            }
        }
    };

    // Handle Form Submit (Add/Edit)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));

        const url = editingId ? `/api/users/${editingId}` : '/api/users';
        const method = editingId ? 'PUT' : 'POST';

        try {
            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (res.ok) {
                if (editingId) {
                    setStaff(staff.map((s) => (s._id === editingId ? data : s)));
                } else {
                    setStaff([...staff, data]);
                }
                closeModal();
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error saving staff:', error);
        }
    };

    const openModal = (staffMember = null) => {
        if (staffMember) {
            setFormData({
                name: staffMember.name,
                email: staffMember.email,
                department: staffMember.department,
                role: staffMember.role || 'staff',
                password: '', // Don't show password on edit
            });
            setEditingId(staffMember._id);
        } else {
            setFormData({
                name: '',
                email: '',
                password: '',
                department: departments[0]?.title || 'General',
                role: 'staff'
            });
            setEditingId(null);
        }
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingId(null);
    };

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Staff Management</h2>
                    <p className="text-gray-500 text-sm">Manage hospital staff and administrators</p>
                </div>
                <button
                    onClick={() => openModal()}
                    className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
                >
                    <Plus size={20} /> Add New Member
                </button>
            </div>

            {/* Staff List */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-500 text-sm">
                        <tr>
                            <th className="p-4">Name</th>
                            <th className="p-4">Email</th>
                            <th className="p-4">Role</th>
                            <th className="p-4">Department</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                        {loading ? (
                            <tr><td colSpan="5" className="p-4 text-center">Loading...</td></tr>
                        ) : staff.length === 0 ? (
                            <tr><td colSpan="5" className="p-4 text-center">No staff found</td></tr>
                        ) : (
                            staff.map((member) => (
                                <tr key={member._id} className="hover:bg-gray-50">
                                    <td className="p-4 font-medium text-gray-800">{member.name}</td>
                                    <td className="p-4 text-gray-500">{member.email}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded-full text-xs capitalize ${member.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'
                                            }`}>
                                            {member.role}
                                        </span>
                                    </td>
                                    <td className="p-4"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">{member.department}</span></td>
                                    <td className="p-4 flex gap-2">
                                        <button onClick={() => openModal(member)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg"><Edit size={18} /></button>
                                        <button onClick={() => handleDelete(member._id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={18} /></button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
                        <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>

                        <h3 className="text-xl font-bold mb-6">{editingId ? 'Edit Member' : 'Add New Member'}</h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                                <select
                                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    value={formData.role}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                >
                                    <option value="staff">Staff</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                                <select
                                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    value={formData.department}
                                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                                >
                                    {departments.map((dept) => (
                                        <option key={dept.id} value={dept.title}>
                                            {dept.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    {editingId ? 'New Password (leave blank to keep current)' : 'Password'}
                                </label>
                                <input
                                    type="password"
                                    {...(!editingId && { required: true })}
                                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>

                            <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-lg font-bold transition mt-4">
                                {editingId ? 'Save Changes' : 'Create Member'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

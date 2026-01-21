import { useState, useEffect } from 'react';
import { Upload, Download, Trash2, FileText, Calendar, User } from 'lucide-react';
import axios from 'axios';

export default function AdminPayslips() {
    const [payslips, setPayslips] = useState([]);
    const [staffList, setStaffList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [uploadForm, setUploadForm] = useState({
        staffId: '',
        month: '',
        year: new Date().getFullYear(),
        file: null
    });

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    useEffect(() => {
        fetchPayslips();
        fetchStaff();
    }, []);

    const fetchPayslips = async () => {
        try {
            const userData = JSON.parse(localStorage.getItem('user'));
            const token = userData?.token || userData?.data?.token;
            const response = await axios.get('http://localhost:5000/api/payslips/all', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setPayslips(response.data.data);
        } catch (error) {
            console.error('Error fetching payslips:', error);
            alert('Failed to fetch payslips');
        }
    };

    const fetchStaff = async () => {
        try {
            const userData = JSON.parse(localStorage.getItem('user'));
            const token = userData?.token || userData?.data?.token;
            const response = await axios.get('http://localhost:5000/api/users', {
                headers: { Authorization: `Bearer ${token}` }
            });
            // Filter only staff members
            const staff = response.data.filter(user => user.role === 'staff');
            setStaffList(staff);
        } catch (error) {
            console.error('Error fetching staff:', error);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type !== 'application/pdf') {
            alert('Please upload only PDF files');
            e.target.value = '';
            return;
        }
        setUploadForm({ ...uploadForm, file });
    };

    const handleUpload = async (e) => {
        e.preventDefault();

        if (!uploadForm.staffId || !uploadForm.month || !uploadForm.year || !uploadForm.file) {
            alert('Please fill all fields and select a file');
            return;
        }

        setLoading(true);
        const formData = new FormData();
        formData.append('staffId', uploadForm.staffId);
        formData.append('month', uploadForm.month);
        formData.append('year', uploadForm.year);
        formData.append('payslip', uploadForm.file);

        try {
            const userData = JSON.parse(localStorage.getItem('user'));
            const token = userData?.token || userData?.data?.token;
            await axios.post('http://localhost:5000/api/payslips/upload', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Payslip uploaded successfully!');
            setUploadForm({ staffId: '', month: '', year: new Date().getFullYear(), file: null });
            document.getElementById('fileInput').value = '';
            fetchPayslips();
        } catch (error) {
            console.error('Error uploading payslip:', error);
            alert(error.response?.data?.message || 'Failed to upload payslip');
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = async (id, fileName) => {
        try {
            const userData = JSON.parse(localStorage.getItem('user'));
            const token = userData?.token || userData?.data?.token;
            const response = await axios.get(`http://localhost:5000/api/payslips/download/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
                responseType: 'blob'
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Error downloading payslip:', error);
            alert('Failed to download payslip');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this payslip?')) {
            return;
        }

        try {
            const userData = JSON.parse(localStorage.getItem('user'));
            const token = userData?.token || userData?.data?.token;
            await axios.delete(`http://localhost:5000/api/payslips/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Payslip deleted successfully!');
            fetchPayslips();
        } catch (error) {
            console.error('Error deleting payslip:', error);
            alert('Failed to delete payslip');
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Payslip Management</h2>

            {/* Upload Form */}
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Upload size={24} className="text-primary" />
                    Upload Payslip
                </h3>
                <form onSubmit={handleUpload} className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Select Staff Member
                        </label>
                        <select
                            value={uploadForm.staffId}
                            onChange={(e) => setUploadForm({ ...uploadForm, staffId: e.target.value })}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            required
                        >
                            <option value="">-- Select Staff --</option>
                            {staffList.map(staff => (
                                <option key={staff._id} value={staff._id}>
                                    {staff.name} - {staff.department}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Month
                        </label>
                        <select
                            value={uploadForm.month}
                            onChange={(e) => setUploadForm({ ...uploadForm, month: e.target.value })}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            required
                        >
                            <option value="">-- Select Month --</option>
                            {months.map(month => (
                                <option key={month} value={month}>{month}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Year
                        </label>
                        <input
                            type="number"
                            value={uploadForm.year}
                            onChange={(e) => setUploadForm({ ...uploadForm, year: e.target.value })}
                            min="2020"
                            max="2030"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Upload PDF File
                        </label>
                        <input
                            id="fileInput"
                            type="file"
                            accept=".pdf"
                            onChange={handleFileChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            required
                        />
                    </div>

                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-lg transition disabled:opacity-50 flex items-center gap-2"
                        >
                            <Upload size={20} />
                            {loading ? 'Uploading...' : 'Upload Payslip'}
                        </button>
                    </div>
                </form>
            </div>

            {/* Payslips List */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                        <FileText size={24} className="text-primary" />
                        All Payslips ({payslips.length})
                    </h3>
                </div>

                {payslips.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                        <FileText size={48} className="mx-auto mb-4 text-gray-300" />
                        <p>No payslips uploaded yet</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Staff Member
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Period
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Uploaded
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        File Name
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {payslips.map((payslip) => (
                                    <tr key={payslip._id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <User size={16} className="text-gray-400" />
                                                <div>
                                                    <div className="font-medium text-gray-900">{payslip.staffName}</div>
                                                    <div className="text-sm text-gray-500">{payslip.staffId?.department}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} className="text-gray-400" />
                                                <span className="text-sm font-medium">{payslip.month} {payslip.year}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {new Date(payslip.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {payslip.fileName}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() => handleDownload(payslip._id, payslip.fileName)}
                                                className="text-primary hover:text-primary-dark mr-4 inline-flex items-center gap-1"
                                            >
                                                <Download size={16} /> Download
                                            </button>
                                            <button
                                                onClick={() => handleDelete(payslip._id)}
                                                className="text-red-600 hover:text-red-800 inline-flex items-center gap-1"
                                            >
                                                <Trash2 size={16} /> Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

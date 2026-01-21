import { useState, useEffect } from 'react';
import { Plus, Calendar, Edit2, Trash2, Clock, User as UserIcon, Upload, Download, FileSpreadsheet } from 'lucide-react';
import axios from 'axios';
import * as XLSX from 'xlsx';

export default function AdminSchedules() {
    const [schedules, setSchedules] = useState([]);
    const [staffList, setStaffList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(null);
    const [formData, setFormData] = useState({
        staffId: '',
        date: '',
        shift: 'Morning',
        time: '08:00 AM - 04:00 PM',
        department: '',
        type: 'regular'
    });

    const shiftTimes = {
        'Morning': '08:00 AM - 04:00 PM',
        'Afternoon': '02:00 PM - 10:00 PM',
        'Night': '10:00 PM - 06:00 AM'
    };

    useEffect(() => {
        fetchSchedules();
        fetchStaff();
    }, []);

    const fetchSchedules = async () => {
        try {
            const userData = JSON.parse(localStorage.getItem('user'));
            const token = userData?.token || userData?.data?.token;
            const response = await axios.get('http://localhost:5000/api/schedules/all', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setSchedules(response.data.data);
        } catch (error) {
            console.error('Error fetching schedules:', error);
        }
    };

    const fetchStaff = async () => {
        try {
            const userData = JSON.parse(localStorage.getItem('user'));
            const token = userData?.token || userData?.data?.token;
            const response = await axios.get('http://localhost:5000/api/users', {
                headers: { Authorization: `Bearer ${token}` }
            });
            const staff = response.data.filter(user => user.role === 'staff');
            setStaffList(staff);
        } catch (error) {
            console.error('Error fetching staff:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const userData = JSON.parse(localStorage.getItem('user'));
            const token = userData?.token || userData?.data?.token;
            await axios.post('http://localhost:5000/api/schedules', formData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Schedule created successfully!');
            setFormData({
                staffId: '',
                date: '',
                shift: 'Morning',
                time: '08:00 AM - 04:00 PM',
                department: '',
                type: 'regular'
            });
            setShowForm(false);
            fetchSchedules();
        } catch (error) {
            console.error('Error creating schedule:', error);
            alert(error.response?.data?.message || 'Failed to create schedule');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this schedule?')) {
            return;
        }

        try {
            const userData = JSON.parse(localStorage.getItem('user'));
            const token = userData?.token || userData?.data?.token;
            await axios.delete(`http://localhost:5000/api/schedules/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Schedule deleted successfully!');
            fetchSchedules();
        } catch (error) {
            console.error('Error deleting schedule:', error);
            alert('Failed to delete schedule');
        }
    };

    const handleShiftChange = (shift) => {
        setFormData({
            ...formData,
            shift,
            time: shiftTimes[shift]
        });
    };

    // Download Excel template
    const downloadTemplate = () => {
        const template = [
            ['Staff Email', 'Date (YYYY-MM-DD)', 'Shift (Morning/Afternoon/Night)', 'Time', 'Department', 'Type (regular/overtime)'],
            ['staff@example.com', '2026-01-20', 'Morning', '08:00 AM - 04:00 PM', 'Nursing Services', 'regular'],
            ['staff@example.com', '2026-01-21', 'Afternoon', '02:00 PM - 10:00 PM', 'Nursing Services', 'regular'],
        ];

        const ws = XLSX.utils.aoa_to_sheet(template);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Schedule Template');
        XLSX.writeFile(wb, 'schedule_template.xlsx');
    };

    // Handle bulk upload
    const handleBulkUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = async (event) => {
            try {
                const data = new Uint8Array(event.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);

                if (jsonData.length === 0) {
                    alert('The Excel file is empty!');
                    return;
                }

                // Validate and prepare schedules
                const schedulesToCreate = [];
                const errors = [];

                for (let i = 0; i < jsonData.length; i++) {
                    const row = jsonData[i];
                    const rowNum = i + 2; // +2 because Excel is 1-indexed and has header row

                    // Find staff by email
                    const staff = staffList.find(s => s.email.toLowerCase() === row['Staff Email']?.toLowerCase());
                    if (!staff) {
                        errors.push(`Row ${rowNum}: Staff with email "${row['Staff Email']}" not found`);
                        continue;
                    }

                    // Validate required fields
                    if (!row['Date (YYYY-MM-DD)']) {
                        errors.push(`Row ${rowNum}: Date is required`);
                        continue;
                    }

                    if (!row['Shift (Morning/Afternoon/Night)']) {
                        errors.push(`Row ${rowNum}: Shift is required`);
                        continue;
                    }

                    schedulesToCreate.push({
                        staffId: staff._id,
                        date: row['Date (YYYY-MM-DD)'],
                        shift: row['Shift (Morning/Afternoon/Night)'],
                        time: row['Time'] || shiftTimes[row['Shift (Morning/Afternoon/Night)']],
                        department: row['Department'] || staff.department,
                        type: row['Type (regular/overtime)'] || 'regular'
                    });
                }

                if (errors.length > 0) {
                    alert(`Found ${errors.length} errors:\n\n${errors.join('\n')}\n\nPlease fix these errors and try again.`);
                    return;
                }

                if (schedulesToCreate.length === 0) {
                    alert('No valid schedules found in the file!');
                    return;
                }

                // Confirm before creating
                if (!window.confirm(`Ready to create ${schedulesToCreate.length} schedules. Continue?`)) {
                    return;
                }

                // Create schedules one by one
                setUploadProgress({ current: 0, total: schedulesToCreate.length });
                const userData = JSON.parse(localStorage.getItem('user'));
                const token = userData?.token || userData?.data?.token;

                let successCount = 0;
                let failCount = 0;
                const failedSchedules = [];

                for (let i = 0; i < schedulesToCreate.length; i++) {
                    try {
                        await axios.post('http://localhost:5000/api/schedules', schedulesToCreate[i], {
                            headers: { Authorization: `Bearer ${token}` }
                        });
                        successCount++;
                    } catch (error) {
                        failCount++;
                        failedSchedules.push({
                            ...schedulesToCreate[i],
                            error: error.response?.data?.message || 'Unknown error'
                        });
                    }
                    setUploadProgress({ current: i + 1, total: schedulesToCreate.length });
                }

                setUploadProgress(null);

                let message = `Upload complete!\n\nSuccessfully created: ${successCount} schedules`;
                if (failCount > 0) {
                    message += `\nFailed: ${failCount} schedules\n\nFailed schedules:\n`;
                    failedSchedules.forEach(s => {
                        message += `\n- ${s.date} for staff ID ${s.staffId}: ${s.error}`;
                    });
                }

                alert(message);
                fetchSchedules();
                e.target.value = ''; // Reset file input
            } catch (error) {
                console.error('Error processing file:', error);
                alert('Error processing Excel file. Please check the format and try again.');
                setUploadProgress(null);
            }
        };

        reader.readAsArrayBuffer(file);
    };

    // Group schedules by staff
    const groupedSchedules = schedules.reduce((acc, schedule) => {
        const staffName = schedule.staffName;
        if (!acc[staffName]) {
            acc[staffName] = [];
        }
        acc[staffName].push(schedule);
        return acc;
    }, {});

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Schedule Management</h2>
                    <p className="text-gray-600">Create and manage staff schedules</p>
                </div>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-lg transition flex items-center gap-2"
                >
                    <Plus size={20} />
                    {showForm ? 'Cancel' : 'Create Schedule'}
                </button>
            </div>

            {/* Bulk Upload Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-500 text-white p-3 rounded-lg">
                            <FileSpreadsheet size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">Bulk Schedule Upload</h3>
                            <p className="text-sm text-gray-600">Upload monthly schedules for all staff using Excel</p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                            <Download size={18} className="text-green-600" />
                            Step 1: Download Template
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                            Download the Excel template with the correct format
                        </p>
                        <button
                            onClick={downloadTemplate}
                            className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg transition flex items-center gap-2 text-sm"
                        >
                            <Download size={16} />
                            Download Template
                        </button>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                            <Upload size={18} className="text-blue-600" />
                            Step 2: Upload Filled Template
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                            Fill the template and upload it here
                        </p>
                        <label className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg transition flex items-center gap-2 text-sm cursor-pointer inline-flex">
                            <Upload size={16} />
                            Upload Excel File
                            <input
                                type="file"
                                accept=".xlsx,.xls"
                                onChange={handleBulkUpload}
                                className="hidden"
                                disabled={uploadProgress !== null}
                            />
                        </label>
                    </div>
                </div>

                {uploadProgress && (
                    <div className="mt-4 bg-white p-4 rounded-lg border">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">
                                Uploading schedules... {uploadProgress.current} of {uploadProgress.total}
                            </span>
                            <span className="text-sm text-gray-600">
                                {Math.round((uploadProgress.current / uploadProgress.total) * 100)}%
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${(uploadProgress.current / uploadProgress.total) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                )}

                <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                    <p className="text-sm text-yellow-800">
                        <strong>Template Format:</strong> Staff Email | Date (YYYY-MM-DD) | Shift (Morning/Afternoon/Night) | Time | Department | Type (regular/overtime)
                    </p>
                </div>
            </div>

            {/* Create Schedule Form */}
            {showForm && (
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                    <h3 className="text-xl font-bold mb-4">Create New Schedule</h3>
                    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Select Staff Member
                            </label>
                            <select
                                value={formData.staffId}
                                onChange={(e) => {
                                    const selectedStaff = staffList.find(s => s._id === e.target.value);
                                    setFormData({
                                        ...formData,
                                        staffId: e.target.value,
                                        department: selectedStaff?.department || ''
                                    });
                                }}
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
                                Date
                            </label>
                            <input
                                type="date"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Shift Type
                            </label>
                            <select
                                value={formData.shift}
                                onChange={(e) => handleShiftChange(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                required
                            >
                                <option value="Morning">Morning</option>
                                <option value="Afternoon">Afternoon</option>
                                <option value="Night">Night</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Time
                            </label>
                            <input
                                type="text"
                                value={formData.time}
                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Department
                            </label>
                            <input
                                type="text"
                                value={formData.department}
                                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Type
                            </label>
                            <select
                                value={formData.type}
                                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            >
                                <option value="regular">Regular</option>
                                <option value="overtime">Overtime</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-lg transition disabled:opacity-50"
                            >
                                {loading ? 'Creating...' : 'Create Schedule'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Schedules List */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b">
                    <h3 className="text-xl font-bold">All Schedules ({schedules.length})</h3>
                </div>

                {Object.keys(groupedSchedules).length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                        <Calendar size={48} className="mx-auto mb-4 text-gray-300" />
                        <p>No schedules created yet</p>
                    </div>
                ) : (
                    <div className="p-6 space-y-6">
                        {Object.entries(groupedSchedules).map(([staffName, staffSchedules]) => (
                            <div key={staffName} className="border rounded-lg p-4">
                                <h4 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                                    <UserIcon size={20} className="text-primary" />
                                    {staffName}
                                </h4>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {staffSchedules.map((schedule) => (
                                        <div key={schedule._id} className="bg-gray-50 p-4 rounded-lg border">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="font-bold text-gray-800">
                                                    {new Date(schedule.date).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })}
                                                </span>
                                                {schedule.type === 'overtime' && (
                                                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">Overtime</span>
                                                )}
                                            </div>
                                            <div className="space-y-1 text-sm text-gray-600 mb-3">
                                                <div className="flex items-center gap-2">
                                                    <Calendar size={14} />
                                                    <span className="font-medium">{schedule.shift} Shift</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Clock size={14} />
                                                    <span>{schedule.time}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => handleDelete(schedule._id)}
                                                    className="text-red-600 hover:text-red-800 text-sm flex items-center gap-1"
                                                >
                                                    <Trash2 size={14} /> Delete
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

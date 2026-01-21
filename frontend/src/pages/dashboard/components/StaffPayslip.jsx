import { useState, useEffect } from 'react';
import { Download, FileText, Calendar } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';

export default function StaffPayslip() {
    const { user } = useOutletContext();
    const [payslips, setPayslips] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMyPayslips();
    }, []);

    const fetchMyPayslips = async () => {
        try {
            const userData = JSON.parse(localStorage.getItem('user'));
            const token = userData?.token || userData?.data?.token;
            const response = await axios.get('http://localhost:5000/api/payslips/my-payslips', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setPayslips(response.data.data);
        } catch (error) {
            console.error('Error fetching payslips:', error);
            alert('Failed to fetch payslips');
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

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <p className="text-gray-600">Loading payslips...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">My Payslips</h2>

            {payslips.length === 0 ? (
                <div className="bg-white p-12 rounded-xl shadow-sm text-center">
                    <FileText size={64} className="mx-auto mb-4 text-gray-300" />
                    <h3 className="text-xl font-bold text-gray-700 mb-2">No Payslips Available</h3>
                    <p className="text-gray-600">Your payslips will appear here once they are uploaded by the admin.</p>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {payslips.map((payslip) => (
                        <div key={payslip._id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <FileText size={24} className="text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">{payslip.month} {payslip.year}</h3>
                                    <p className="text-sm text-gray-500">Payslip</p>
                                </div>
                            </div>

                            <div className="space-y-2 mb-4">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Calendar size={16} />
                                    <span>Uploaded: {new Date(payslip.createdAt).toLocaleDateString()}</span>
                                </div>
                                <div className="text-sm text-gray-600">
                                    <span className="font-medium">File:</span> {payslip.fileName}
                                </div>
                            </div>

                            <button
                                onClick={() => handleDownload(payslip._id, payslip.fileName)}
                                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
                            >
                                <Download size={20} />
                                Download Payslip
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

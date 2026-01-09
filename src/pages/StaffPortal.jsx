import { useState } from 'react';
import { Lock, User, AlertCircle, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';
import hospitalImg from '../assets/hospital.png';
import { Link } from 'react-router-dom';

export default function StaffPortal() {
    const [formData, setFormData] = useState({ staffId: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login delay
        setTimeout(() => {
            setIsLoading(false);
            alert("This is a demo portal. Backend integration required for actual authentication.");
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
            {/* Left Side - Image/Branding */}
            <div className="md:w-1/2 bg-primary-dark relative hidden md:flex flex-col items-center justify-center text-white p-12 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={hospitalImg} alt="Hospital Building" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
                </div>
                <div className="relative z-10 text-center">
                    <img src={logo} alt="FNPH Logo" className="w-32 h-auto mx-auto mb-8 drop-shadow-lg" />
                    <h1 className="text-4xl font-bold mb-4">Staff Portal</h1>
                    <p className="text-lg text-gray-200 max-w-md mx-auto leading-relaxed">
                        Secure access for authorized personnel of the Federal Neuropsychiatric Hospital, Kware.
                    </p>
                    <div className="mt-12 space-y-4 text-left bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
                        <div className="flex items-start gap-3">
                            <div className="bg-secondary/20 p-2 rounded-full text-secondary-light"><Lock size={16} /></div>
                            <div>
                                <h4 className="font-bold text-sm">Secure Connection</h4>
                                <p className="text-xs text-gray-300">Your session is encrypted and secure.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="bg-secondary/20 p-2 rounded-full text-secondary-light"><AlertCircle size={16} /></div>
                            <div>
                                <h4 className="font-bold text-sm">Authorized Use Only</h4>
                                <p className="text-xs text-gray-300">Unauthorized access is prohibited and monitored.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="md:w-1/2 flex items-center justify-center p-8 lg:p-12">
                <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                    <div className="md:hidden text-center mb-8">
                        <img src={logo} alt="FNPH Logo" className="w-20 h-auto mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900">Staff Portal</h2>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 hidden md:block mb-2">Welcome Back</h2>
                        <p className="text-gray-600">Please enter your credentials to access the system.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Staff ID / Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <User size={18} />
                                </div>
                                <input
                                    type="text"
                                    required
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="FNPH/ST/..."
                                    value={formData.staffId}
                                    onChange={(e) => setFormData({ ...formData, staffId: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <a href="#" className="text-xs font-bold text-primary hover:text-primary-dark">Forgot Password?</a>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <Lock size={18} />
                                </div>
                                <input
                                    type="password"
                                    required
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input type="checkbox" id="remember" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-600">Remember me for 30 days</label>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dark transition-all flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? 'Authenticating...' : (
                                <>
                                    Sign In <ArrowRight size={18} />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                        <p className="text-xs text-gray-500">
                            Having trouble logging in? Contact <span className="text-primary font-bold">ICT Unit</span>
                        </p>
                        <div className="mt-4">
                            <Link to="/" className="text-sm font-medium text-gray-600 hover:text-primary flex items-center justify-center gap-2">
                                ← Back to Hospital Website
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

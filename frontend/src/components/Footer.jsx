import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-primary-dark text-white pt-12 pb-6">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* About */}
                <div>
                    <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">FNPH KWARE</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">
                        Committed to prompt and quality health care services with respect to patient right and values, delivered by compassionate and highly skilled staff dedicated to excellence.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li><Link to="/about" className="hover:text-secondary-light">About Us</Link></li>
                        <li><Link to="/services" className="hover:text-secondary-light">Clinical Services</Link></li>
                        <li><Link to="/news" className="hover:text-secondary-light">News & Events</Link></li>
                        <li><Link to="/contact" className="hover:text-secondary-light">Contact Us</Link></li>
                        <li><Link to="/staff-portal" className="hover:text-secondary-light">Staff Login</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Departments</h3>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li>Clinical Services</li>
                        <li>Nursing Services</li>
                        <li>Pharmacy</li>
                        <li>School of Nursing</li>
                        <li>Research</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Contact Us</h3>
                    <ul className="space-y-3 text-sm text-gray-200">
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="mt-1 shrink-0" />
                            <span>Federal Neuropsychiatric Hospital, Kware, Sokoto State, Nigeria</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={18} />
                            <span>07068334606</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} />
                            <span>info@fnphkware.gov.ng</span>
                        </li>
                    </ul>
                    <div className="flex gap-4 mt-6">
                        <a href="#" className="hover:text-secondary-light"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-secondary-light"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-secondary-light"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-secondary-light"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12 pt-6 border-t border-white/10 text-center text-sm text-gray-300">
                <p>&copy; {new Date().getFullYear()} Federal Neuropsychiatric Hospital Kware. All rights reserved.</p>
            </div>
        </footer>
    );
}

import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo.png';
import { departments } from '../data/departments';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        // Services is handled separately for dropdown
        { name: 'Our Team', href: '/team' },
        { name: 'News & Events', href: '/news' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    const groupedDepartments = {
        Clinical: departments.filter(d => d.category === 'Clinical'),
        Administration: departments.filter(d => d.category === 'Administration'),
        Support: departments.filter(d => d.category === 'Support'),
        Training: departments.filter(d => d.category === 'Training')
    };

    const handleDepartmentClick = (id) => {
        setIsDropdownOpen(false);
        setIsMenuOpen(false);
        navigate(`/department/${id}`);
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-primary text-white py-2 hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-6">
                        <span className="flex items-center gap-2"><Phone size={16} /> 08037339521</span>
                        <span className="flex items-center gap-2"><Mail size={16} /> INFO@FNPHKSOK.GOV.NG</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>Federal Neuropsychiatric Hospital, Kware, Sokoto</span>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <nav className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3">
                        <img src={logo} alt="FNPH Kware Logo" className="h-16 w-auto" />
                        <div className="hidden md:block">
                            <h1 className="text-xl font-bold text-primary-dark leading-tight">FEDERAL NEUROPSYCHIATRIC HOSPITAL</h1>
                            <p className="text-sm text-gray-600 font-medium">KWARE, SOKOTO</p>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors">Home</Link>
                        <Link to="/about" className="text-gray-700 hover:text-primary font-medium transition-colors">About Us</Link>

                        {/* Mega Menu Dropdown */}
                        <div className="relative group" ref={dropdownRef}>
                            <button
                                className="flex items-center gap-1 text-gray-700 hover:text-primary font-medium transition-colors py-2"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                onMouseEnter={() => setIsDropdownOpen(true)}
                            >
                                Departments <ChevronDown size={16} />
                            </button>

                            {isDropdownOpen && (
                                <div
                                    className="absolute left-1/2 -translate-x-1/2 mt-0 w-[800px] bg-white shadow-xl rounded-xl border border-gray-100 p-6 grid grid-cols-4 gap-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200 origin-top"
                                    onMouseLeave={() => setIsDropdownOpen(false)}
                                >
                                    {Object.entries(groupedDepartments).map(([category, items]) => (
                                        <div key={category}>
                                            <h4 className="font-bold text-primary mb-3 border-b-2 border-secondary/30 pb-1">{category}</h4>
                                            <ul className="space-y-2">
                                                {items.slice(0, 8).map(dept => ( // Limit to 8 items per col to prevent overflow
                                                    <li key={dept.id}>
                                                        <button
                                                            onClick={() => handleDepartmentClick(dept.id)}
                                                            className="text-sm text-gray-600 hover:text-secondary-dark text-left hover:translate-x-1 transition-all block w-full truncate"
                                                            title={dept.title}
                                                        >
                                                            {dept.title}
                                                        </button>
                                                    </li>
                                                ))}
                                                {items.length > 8 && (
                                                    <li><Link to="/services" className="text-xs text-primary font-bold hover:underline">View All...</Link></li>
                                                )}
                                            </ul>
                                        </div>
                                    ))}
                                    <div className="col-span-4 bg-gray-50 p-3 rounded-lg text-center mt-2">
                                        <Link to="/services" className="text-primary font-bold hover:text-primary-dark text-sm">View Full Services Directory →</Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link to="/team" className="text-gray-700 hover:text-primary font-medium transition-colors">Our Team</Link>
                        <Link to="/news" className="text-gray-700 hover:text-primary font-medium transition-colors">News</Link>
                        <Link to="/gallery" className="text-gray-700 hover:text-primary font-medium transition-colors">Gallery</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors">Contact</Link>

                        <Link to="/staff-portal" className="bg-secondary hover:bg-secondary-dark text-white px-4 py-2 rounded-md font-medium transition-colors">
                            Staff Portal
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-2 border-t pt-2 h-[80vh] overflow-y-auto">
                        <Link to="/" className="block py-2 font-medium text-gray-700" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/about" className="block py-2 font-medium text-gray-700" onClick={() => setIsMenuOpen(false)}>About Us</Link>

                        {/* Mobile Accordion for Departments */}
                        <div className="py-2">
                            <span className="font-bold text-gray-800 block mb-2">Departments</span>
                            <div className="pl-4 space-y-4 border-l-2 border-gray-100 ml-2">
                                {Object.entries(groupedDepartments).map(([category, items]) => (
                                    <div key={category}>
                                        <h5 className="font-semibold text-primary text-sm mb-1">{category}</h5>
                                        <ul className="space-y-1 mb-3">
                                            {items.map(dept => (
                                                <li key={dept.id}>
                                                    <button
                                                        onClick={() => handleDepartmentClick(dept.id)}
                                                        className="text-sm text-gray-600 block py-1 w-full text-left"
                                                    >
                                                        {dept.title}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Link to="/team" className="block py-2 font-medium text-gray-700" onClick={() => setIsMenuOpen(false)}>Our Team</Link>
                        <Link to="/news" className="block py-2 font-medium text-gray-700" onClick={() => setIsMenuOpen(false)}>News</Link>
                        <Link to="/gallery" className="block py-2 font-medium text-gray-700" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
                        <Link to="/contact" className="block py-2 font-medium text-gray-700" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        <Link to="/staff-portal" className="block py-2 font-medium text-secondary-dark" onClick={() => setIsMenuOpen(false)}>Staff Portal</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}

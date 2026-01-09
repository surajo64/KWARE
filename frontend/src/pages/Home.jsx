import { useState, useEffect } from 'react';
import { ArrowRight, Activity, Users, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images
import hospitalImg from '../assets/hospital.png';
import adminImg from '../assets/admin.png';
import wardImg from '../assets/ward.png';
import centreImg from '../assets/centre.png';
import aeImg from '../assets/a&e.png';

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: hospitalImg,
            title: "Federal Neuropsychiatric Hospital, Kware",
            subtitle: "Excellence in Mental Health Care",
            description: "Committed to prompt and quality health care services with respect to patient rights and values."
        },
        {
            image: adminImg,
            title: "Modern Administration",
            subtitle: "Efficient & Transparent",
            description: "Ensuring smooth hospital operations and resource management for better service delivery."
        },
        {
            image: centreImg,
            title: "Women & Children Center",
            subtitle: "Specialized Care",
            description: "Dedicated regional center for the treatment and rehabilitation of women and children."
        },
        {
            image: wardImg,
            title: "Comfortable Wards",
            subtitle: "Patient-Centered Recovery",
            description: "Providing a safe, clean, and therapeutic environment for all our inpatients."
        },
        {
            image: aeImg,
            title: "24/7 Emergency Services",
            subtitle: "Always Here For You",
            description: "Round-the-clock accident and emergency psychiatric and medical response."
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div>
            {/* Hero Slider Section */}
            <section className="relative h-[600px] overflow-hidden bg-gray-900 text-white">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 bg-black/50 z-10"></div>
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />

                        {/* Content */}
                        <div className="absolute inset-0 z-20 flex items-center justify-center">
                            <div className="container mx-auto px-4 text-center max-w-4xl">
                                <span className="inline-block bg-secondary text-primary-dark font-bold px-4 py-1 rounded-full text-sm mb-6 animate-fadeIn">
                                    {slide.subtitle}
                                </span>
                                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                                    {slide.title}
                                </h1>
                                <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                                    {slide.description}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link to="/services" className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3 rounded-lg transition shadow-lg flex items-center justify-center gap-2">
                                        Our Services <ArrowRight size={20} />
                                    </Link>
                                    <Link to="/contact" className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition flex items-center justify-center">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all text-white border border-white/30 hidden md:block"
                >
                    <ChevronLeft size={32} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all text-white border border-white/30 hidden md:block"
                >
                    <ChevronRight size={32} />
                </button>

                {/* Dots Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-secondary w-8' : 'bg-white/50 hover:bg-white'
                                }`}
                        />
                    ))}
                </div>
            </section>

            {/* Quick Stats / Info */}
            <section className="py-12 bg-gray-50 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-24 relative z-30">
                        <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-secondary transform hover:-translate-y-1 transition duration-300">
                            <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-6">
                                <Activity size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Specialized Care</h3>
                            <p className="text-gray-600 leading-relaxed">Expert psychiatric and medical condition management tailored to individual needs.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-secondary transform hover:-translate-y-1 transition duration-300">
                            <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-6">
                                <Users size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Professional Team</h3>
                            <p className="text-gray-600 leading-relaxed">Highly skilled staff dedicated to excellence, compassion, and patient respect.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-secondary transform hover:-translate-y-1 transition duration-300">
                            <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-6">
                                <Clock size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">24/7 Support</h3>
                            <p className="text-gray-600 leading-relaxed">Accident and emergency services available round the clock for immediate attention.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <div className="relative group">
                            <div className="bg-gray-200 rounded-2xl overflow-hidden h-[400px] w-full shadow-xl">
                                <img src={hospitalImg} alt="Hospital Building" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-secondary p-8 rounded-2xl shadow-lg hidden md:block border-2 border-white">
                                <p className="text-primary-dark font-black text-2xl">Since 1996</p>
                                <p className="text-sm font-medium text-gray-800 uppercase tracking-wide">Serving the community</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Welcome to FNPH Kware</h2>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">A Center of Excellence in Mental Health</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            The Federal Neuropsychiatric Hospital, Kware, was established to address the growing concern for mental health in Sokoto and its environs. Starting as a Mental Home, it has grown into a full-fledged Federal institution providing top-tier psychiatric and rehabilitative care.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Our mandate encompasses health services, training, and research, ensuring we contribute significantly to the medical field while caring for our community.
                        </p>
                        <Link to="/about" className="text-primary font-bold hover:text-primary-dark inline-flex items-center gap-2 group text-lg">
                            Read Our History <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

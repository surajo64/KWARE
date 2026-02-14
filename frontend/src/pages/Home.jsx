import { useState, useEffect } from 'react';
import { ArrowRight, Activity, Users, Clock, ChevronLeft, ChevronRight, Stethoscope, Brain, Heart, Award, Shield, Lightbulb, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { departments } from '../data/departments';

// Import images
import hospitalImg from '../assets/hospital.png';
import adminImg from '../assets/admin.png';
import wardImg from '../assets/ward.png';
import centreImg from '../assets/centre.png';
import aeImg from '../assets/a&e.png';
import cmdImg from '../assets/cmd.png';
import pharmImg from '../assets/pharm.png';
import avatarImg from '../assets/avatar.png';
import hadminImg from '../assets/hadmin.png';
import cmacImg from '../assets/cmac.png';
import researchImg from '../assets/research.png';

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

    // Featured services for home page
    const featuredServices = departments.filter(dept =>
        ['nursing-services', 'psychology', 'pharmacy', 'accident-and-emergency', 'medical-laboratory', 'occupational-therapy'].includes(dept.id)
    );

    // Leadership team preview
    const leadershipTeam = [
        {
            name: "Dr. Abubakar Baguda Sulaiman, FMCPsych",
            role: "Medical Director",
            image: cmdImg,
             qualifications: "",
            bio: "Dr. Abubakar Baguda Sulaiman is a Consultant Psychiatrist and health administrator with extensive experience in clinical psychiatry, postgraduate medical training, and health systems leadership."
        },
       {
                   name: "Dr. soon.. ",
                   role: "Ag. Head of Administration ",
                   image: avatarImg,
                   qualifications: "Waiting... ",
                   bio: `Wainting...`      
                },
               {
                   name: "Dr. Zubairu Umar, MBBS, FMCPsych",
                   role: "Ag. Head of Clinical Services (CMAC)",
                   image: cmacImg,
                   qualifications: "Consultant Psychiatrist & Hospital Administrator",
                   bio: "Dr. Zubairu Umar is a Consultant Psychiatrist and Hospital Administrator currently serving as the Acting Head of Clinical Services at the Federal Neuropsychiatric Hospital, Kware. A Fellow of the National Postgraduate Medical College of Nigeria, he is a senior clinical leader with extensive experience in psychiatric practice, hospital administration, and mental health research. He provides strategic leadership in clinical governance, service expansion, and EMR implementation. His research focuses on depression in children/adolescents with intellectual disabilities and mental health epidemiology. He is passionate about AI in healthcare and mental health advocacy."
               },
                
                {
                   name: "Dr. Abdulaziz Hadi Ibrahim, MBBS, FWACP ",
                   role: "Deputy Head of Clinical services",
                   image: researchImg,
                   qualifications: "Consultant Psychiatrist ",
                   bio: `Dr. Abdulaziz Hadi Ibrahim is a Consultant Psychiatrist and Fellow of the West African College of Physicians (Psychiatry). He obtained his MBBS from Ahmadu Bello University, Zaria, and completed postgraduate psychiatric training at the Federal Neuropsychiatric Hospital, Kware. He currently serves as Chairman of the Hospital’s Health Research Ethics Committee and is pursuing a Master of Public Health at Usmanu Danfodiyo University, Sokoto.`
               },
    ];

    // Latest news items
    const newsItems = [
        {
            id: 1,
            title: "Mental Health Awareness Week 2024",
            date: "October 10, 2024",
            summary: "Join us as we celebrate World Mental Health Day with free screenings and public lectures.",
            category: "Events"
        },
        {
            id: 2,
            title: "New CMD Appointed",
            date: "September 15, 2024",
            summary: "The Federal Government has appointed a new Chief Medical Director to lead the hospital.",
            category: "News"
        },
        {
            id: 3,
            title: "Free Medical Outreach in Kware Community",
            date: "August 20, 2024",
            summary: "Our team of doctors and nurses provided free medical checkups for over 500 residents.",
            category: "Community"
        }
    ];

    // Why choose us features
    const features = [
        {
            icon: <Stethoscope size={32} />,
            title: "Expert Medical Team",
            description: "Highly qualified psychiatrists, nurses, and healthcare professionals"
        },
        {
            icon: <Brain size={32} />,
            title: "Specialized Mental Health",
            description: "Comprehensive psychiatric care and rehabilitation services"
        },
        {
            icon: <Heart size={32} />,
            title: "Patient-Centered Care",
            description: "Compassionate treatment respecting patient rights and dignity"
        },
        {
            icon: <Award size={32} />,
            title: "Federal Standard",
            description: "Accredited tertiary healthcare institution with quality assurance"
        },
        {
            icon: <Shield size={32} />,
            title: "Safe Environment",
            description: "Secure, therapeutic facilities for optimal recovery"
        },
        {
            icon: <Lightbulb size={32} />,
            title: "Training & Research",
            description: "Contributing to mental health knowledge and professional development"
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

            {/* Services Preview Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Our Services</h2>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive Healthcare Solutions</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We offer a wide range of specialized medical and support services to ensure comprehensive care for our patients.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {featuredServices.map((service) => (
                            <Link
                                key={service.id}
                                to={`/department/${service.id}`}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary group"
                            >
                                <div className="h-48 mb-4 rounded-lg overflow-hidden bg-gray-100">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {service.description}
                                </p>
                                <span className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Learn More <ArrowRight size={16} />
                                </span>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3 rounded-lg transition shadow-lg"
                        >
                            View All Services <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Why Choose Us</h2>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Excellence in Mental Healthcare</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Committed to providing world-class psychiatric care with compassion, expertise, and respect for patient dignity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                            >
                                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team Preview */}
            <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Our Leadership</h2>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Experienced professionals dedicated to advancing mental health care and hospital excellence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                        {leadershipTeam.map((leader, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="h-64 bg-gray-200 overflow-hidden">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                                        {leader.name}
                                    </h4>
                                    <p className="text-primary font-semibold text-sm mb-3">
                                        {leader.role}
                                    </p>
                                    <p className="text-gray-600 text-sm line-clamp-3">
                                        {leader.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/team"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3 rounded-lg transition shadow-lg"
                        >
                            Meet Our Full Team <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Latest News Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Latest Updates</h2>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">News & Events</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Stay informed about our latest activities, events, and community outreach programs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        {newsItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary group"
                            >
                                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                    <Activity className="text-primary/40" size={48} />
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-xs font-bold text-white bg-primary px-3 py-1 rounded-full">
                                            {item.category}
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            {item.date}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {item.summary}
                                    </p>
                                    <span className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Read More <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/news"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3 rounded-lg transition shadow-lg"
                        >
                            View All News <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Contact/CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                                Need Help? We're Here for You
                            </h2>
                            <p className="text-gray-100 text-lg mb-8 leading-relaxed">
                                Our dedicated team is available 24/7 to provide emergency psychiatric and medical care. Don't hesitate to reach out for support.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Emergency Hotline</h4>
                                        <p className="text-gray-200">07068334606</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Email Us</h4>
                                        <p className="text-gray-200">info@fnphkware.gov.ng</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Visit Us</h4>
                                        <p className="text-gray-200">Kware, Sokoto State, Nigeria</p>
                                    </div>
                                </div>
                            </div>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition shadow-lg"
                            >
                                Get in Touch <ArrowRight size={20} />
                            </Link>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                            <h3 className="text-2xl font-bold mb-6">Quick Inquiry</h3>
                            <form className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        rows="4"
                                        placeholder="Your Message"
                                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                                    ></textarea>
                                </div>
                                <button
                                    type="button"
                                    className="w-full bg-secondary hover:bg-secondary/90 text-primary-dark font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
                                >
                                    Send Message <ArrowRight size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

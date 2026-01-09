import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
    return (
        <div className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Contact Us</h1>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <div className="bg-white p-8 rounded-xl shadow-md mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800">Our Location</h3>
                                        <p className="text-gray-600">Federal Neuropsychiatric Hospital,<br />Kware, Sokoto State, Nigeria</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800">Phone Number</h3>
                                        <p className="text-gray-600">08037339521</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800">Email Address</h3>
                                        <p className="text-gray-600">INFO@FNPHKSOK.GOV.NG</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Working Hours</h2>
                            <p className="flex justify-between border-b py-2 text-gray-600"><span>Mon - Fri (Admin)</span> <span>8:00 AM - 4:00 PM</span></p>
                            <p className="flex justify-between border-b py-2 text-gray-600"><span>Clinical Services</span> <span>24/7 Hours</span></p>
                            <p className="flex justify-between py-2 text-gray-600"><span>Emergency</span> <span>24/7 Hours</span></p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Inquiry" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea rows="5" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="button" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dark transition flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { departments } from '../data/departments';

export default function Services() {
    return (
        <div className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Our Services & Departments</h1>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                    We offer a wide range of specialized medical and support services to ensure comprehensive care for our patients.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {departments.map((dept) => (
                        <Link
                            key={dept.id}
                            to={`/department/${dept.id}`}
                            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition flex items-start gap-4 border border-gray-100 hover:border-primary group cursor-pointer"
                        >
                            <CheckCircle className="text-primary mt-1 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                            <span className="font-medium text-gray-800 group-hover:text-primary transition-colors">{dept.title}</span>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg border-t-4 border-secondary">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Clinical & Support Services</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-bold text-lg text-primary mb-3">Patient Care</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Outpatient Services (Psychiatric & Medical)</li>
                                <li>Inpatient Services</li>
                                <li>Accident and Emergency</li>
                                <li>Rehabilitational Services</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-primary mb-3">Diagnostic & Therapeutic</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Laboratory Services</li>
                                <li>Pharmaceutical Services</li>
                                <li>Radiological Services</li>
                                <li>Social & Occupational Therapy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

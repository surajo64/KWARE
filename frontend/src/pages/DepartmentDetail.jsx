import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { departments } from '../data/departments';

export default function DepartmentDetail() {
    const { id } = useParams();
    const department = departments.find(d => d.id === id);

    if (!department) {
        return <Navigate to="/services" replace />;
    }

    // Get similar departments (same category)
    const relatedDepartments = departments.filter(
        d => d.category === department.category && d.id !== department.id
    );

    return (
        <div className="py-12 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <Link to="/services" className="inline-flex items-center text-primary font-medium mb-6 hover:underline">
                    <ArrowLeft size={18} className="mr-2" /> Back to Services
                </Link>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 p-8">
                            <span className="bg-secondary text-primary-dark font-bold px-4 py-1 rounded-full text-sm mb-4 inline-block">
                                {department.category}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{department.title}</h1>

                            <div className="overflow-hidden rounded-xl h-96 w-full mb-8 shadow-md">
                                <img
                                    src={department.image}
                                    alt={department.title}
                                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                                />
                            </div>

                            <div className="prose prose-lg text-gray-700 max-w-none">
                                <p className="font-medium text-xl text-gray-800 mb-6 leading-relaxed">
                                    {department.description}
                                </p>
                                <div className="border-t border-gray-200 my-6"></div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Overview</h3>
                                <p>{department.content}</p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b">
                                Other {department.category} Services
                            </h3>
                            <ul className="space-y-3">
                                {relatedDepartments.map(dept => (
                                    <li key={dept.id}>
                                        <Link
                                            to={`/department/${dept.id}`}
                                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition group"
                                        >
                                            <CheckCircle size={18} className="mt-1 text-gray-400 group-hover:text-primary transition-colors" />
                                            <span className="text-gray-700 font-medium group-hover:text-primary transition-colors">{dept.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

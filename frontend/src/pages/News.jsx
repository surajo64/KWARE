import { Calendar, ArrowRight } from 'lucide-react';

export default function News() {
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

    return (
        <div className="py-12 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">News & Events</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map(item => (
                        <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                            <div className="h-48 bg-primary/10 flex items-center justify-center">
                                {/* Placeholder for News Image */}
                                <Calendar className="text-primary/40" size={48} />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs font-bold text-secondary-dark bg-secondary/10 px-2 py-1 rounded">{item.category}</span>
                                    <span className="text-xs text-gray-500">{item.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{item.summary}</p>
                                <button className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                    Read More <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

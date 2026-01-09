import cmacImg from '../assets/cmac.png';
import cmdImg from '../assets/cmd.png';
import hadminImg from '../assets/hadmin.png';
import { User, Award, BookOpen, Globe } from 'lucide-react';

export default function Team() {
    const leadership = [
        {
            name: "Medical Director",
            role: "Medical Director",
            image: cmdImg,
            bio: "Leading the hospital towards excellence in mental health care delivery, training, and research."
        },
        {
            name: "Dr. Zubairu Umar, MBBS, FMCPsych",
            role: "Ag. Head of Clinical Services (CMAC)",
            image: cmacImg,
            qualifications: "Consultant Psychiatrist & Hospital Administrator",
            bio: "Dr. Zubairu Umar is a Consultant Psychiatrist and Hospital Administrator currently serving as the Acting Head of Clinical Services at the Federal Neuropsychiatric Hospital, Kware. A Fellow of the National Postgraduate Medical College of Nigeria, he is a senior clinical leader with extensive experience in psychiatric practice, hospital administration, and mental health research. He provides strategic leadership in clinical governance, service expansion, and EMR implementation. His research focuses on depression in children/adolescents with intellectual disabilities and mental health epidemiology. He is passionate about AI in healthcare and mental health advocacy."
        },
        {
            name: "Head of Administration",
            role: "Head of Administration",
            image: hadminImg,
            bio: "Overseeing the day-to-day administrative operations and ensuring efficient resource management."
        }
    ];

    return (
        <div className="py-12 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Leadership & Management</h1>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
                    Meet the dedicated professionals leading the Federal Neuropsychiatric Hospital, Kware, towards excellence in healthcare service delivery.
                </p>

                <div className="grid gap-12 max-w-5xl mx-auto">
                    {leadership.map((leader, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-300">
                            {/* Image Section */}
                            <div className="md:w-1/3 bg-gray-200 relative min-h-[300px]">
                                {leader.image ? (
                                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover absolute inset-0" />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-400 flex-col">
                                        <User size={64} className="mb-2 opacity-50" />
                                        <span className="text-sm font-medium">Photo Coming Soon</span>
                                    </div>
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="md:w-2/3 p-8 flex flex-col justify-center">
                                <span className="text-secondary-dark font-bold tracking-wide text-sm uppercase mb-1">{leader.role}</span>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">{leader.name}</h2>
                                {leader.qualifications && (
                                    <p className="text-primary font-medium mb-4 flex items-center gap-2">
                                        <Award size={18} /> {leader.qualifications}
                                    </p>
                                )}

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {leader.bio}
                                </p>

                                {/* Additional details for CMAC specifically, or generic for others */}
                                {leader.name.includes("Zubairu") && (
                                    <div className="flex flex-wrap gap-4 mt-auto">
                                        <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">
                                            <BookOpen size={14} /> Clinical Governance
                                        </span>
                                        <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">
                                            <Globe size={14} /> Digital Health
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

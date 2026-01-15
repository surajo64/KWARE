import { useState } from 'react';
import cmacImg from '../assets/cmac.png';
import cmdImg from '../assets/cmd.png';
import hadminImg from '../assets/hadmin.png';
import pharmImg from '../assets/pharm.png';
import recordImg from '../assets/record.png';
import libraryImg from '../assets/library.png';
import medLabImg from '../assets/medlab.png';
import socialImg from '../assets/social.png';
import nurseImg from '../assets/nurse.png';
import avatarImg from '../assets/avatar.png';
import psychoImg from '../assets/psyco.png';
import researchImg from '../assets/research.png';
import { User, Award, BookOpen, Globe, X, ArrowRight } from 'lucide-react';

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
            name: "Dr. Aminu A. Usman",
            role: "Head of Administration",
            image: avatarImg,
            qualifications: "Consultant Psychiatrist & Hospital Administrator",
            bio: "Overseeing the day-to-day administrative operations and ensuring efficient resource management."
        },
        {
            name: "Mr Peter Moses Enojo (AHR)",
            role: "HOD, Health Records / Information Management",
            image: recordImg,
            qualifications: "ND & HND in Health Information Management",
            bio: `Mr Peter Moses Enojo is a Chief Health Records and Information Management Officer and the Head of the Health Records/Information Management Department. He hails from Kogi State, Nigeria, and has over five decades of life experience supported by strong professional training in health information management.
                He obtained his National Diploma and Higher National Diploma in Health Information Management from Usmanu Danfodiyo University Teaching Hospital, Sokoto. He also holds a Diploma in Computer Science, a Professional Diploma in Education (PDE) from Ahmadu Bello University, Zaria, and a Bachelor’s degree in Health Information Management. He is currently completing a Master’s degree in Health Information Management at Maryam Abacha American University of Niger, Maradi.
            Mr Enojo is trained in health data management, education, and information systems and is actively involved in the training of health records professionals. He is married with four children.
`
        },
        {
            name: "Pharm. Samuel Oluwasegun Olaoye, FPCPharm, FPSN",
            role: "Director of Pharmaceutical Services",
            image: pharmImg,
            qualifications: "Consultant Pharmacist",
            bio: "Pharm. Olaoye is a Consultant Pharmacist with over 30 years of experience in hospital pharmacy and health administration. A graduate of the University of Nigeria, Nsukka, he has led Pharmaceutical Services at FNPH Kware since 1996, overseeing its development into a comprehensive clinical and administrative department. He holds advanced qualifications in mental and behavioural health pharmacy, human resource management, and public administration, and is a Fellow of the Pharmaceutical Society of Nigeria and the West African Postgraduate College of Pharmacists.",
        },
        {
            name: "Mr. Sadiku Anuhue Saidu ",
            role: "HEAD OF DEPARTMENT (LIBRARY)",
            image: libraryImg,
            qualifications: "Diploma in Library Science and a Bachelor of Arts in Library Science/Economics",
            bio: ` Mr. Sadiku Anuhue Saidu is the Head of the Library Department and a professional academic librarian. He was born on 24 April 1974 in Okene, Kogi State. He completed his primary education at Local Government Primary School, Okunchi, Adavi Local Government Area, and his secondary education at Government Day Secondary School, Iruvucheba, Okene.
He holds a Diploma in Library Science and a Bachelor of Arts in Library Science/Economics from Bayero University, Kano, as well as a Master of Library Science from Ahmadu Bello University, Zaria. In addition, he obtained Advanced Certificate Courses in Procurement Management and Sustainable Environment from Ahmadu Bello University in 2024.
Mr. Saidu worked with EMI Systems Ltd/ASP between 2005 and 2007 as a Patrol and Control Room Manager before joining the Federal Neuro-Psychiatric Hospital, Kware, in 2007 as a Librarian. He has extensive experience in library and information services within healthcare institutions and currently provides leadership in academic and medical information management.`
        },
        {
            name: "MLS Binta Muhammad ",
            role: "Head, Medical Laboratory Services Department",
            image: medLabImg,
            qualifications: "MSc in Chemical Pathology, with PhD Inview",
            bio: ` MLS Binta Muhammad is the Head, Medical Laboratory Services Department. She is an experienced Medical Laboratory Scientist with over 25 years of professional practice. She holds degrees in Biochemistry and Medical Laboratory Science, an MSc in Chemical Pathology, and is an Associate of the Institute of Medical Laboratory Science, with a PhD in view. As Head of Department, she provides strategic leadership that has strengthened service delivery, achieved internship programme accreditation, and enhanced research and quality performance at FNPH Kware.`
        },
        {
            name: "Dr. Suleiman Abdullahi, MBBS ",
            role: "HOD Accident and Emergency",
            image: avatarImg,
            qualifications: "Senior Medical Officer ",
            bio: `Dr. Suleiman Abdullahi was born in the late 1980s in Isa Local Government Area of Sokoto State, Nigeria. He received his primary education at Sarkin Gobir Model Primary School, Isa, and LEA Primary School, Karu, Abuja. He proceeded to Government Secondary School (GSS), Karu, Abuja, where he completed his secondary education.
Dr. Abdullahi obtained his Bachelor of Medicine, Bachelor of Surgery (MBBS) degree from Usmanu Danfodiyo University, Sokoto (UDUS). He is currently a Senior Medical Officer and is also undergoing postgraduate training as a Senior Registrar in Family Medicine.
He is committed to the delivery of quality, patient-centered healthcare and has a strong interest in integrated medical services. Dr. Abdullahi is happily married and blessed with children.
`
        },
        {
            name: "Shehu Sani",
            role: "H.O.D Medical Social Welfare",
            image: socialImg,
            qualifications: "Medical Psychiatric",
            bio: `Shehu Sani was born on 10 April 1972 in Kwasai, Dange Shuni Local Government Area of Sokoto State. He received his primary education at Model Primary School, Secretariat Road, Sokoto (1980–1987), and his secondary education at Federal Government College, Sokoto (1988–1993). He later attended Sokoto State Polytechnic, where he obtained a Certificate in Social Development and a Diploma in Social Development in 1997 and 2006 respectively. He further advanced his professional training at Lagos State University Teaching Hospital (LUTH), earning a Certificate in Medical Psychiatric Social Work during the 2009/2010 academic session.`
        },
        {
            name: "Nurse Ahmad Balarabe Tanimu, BNSc, RN, RPN, PGDE",
            role: "H.O.D Medical Social Welfare",
            image: nurseImg,
            qualifications: "BNSc,PGDE",
            bio: `Nurse Ahmad Balarabe Tanimu is the Head of the Nursing Services Department at the Federal Neuro-Psychiatric Hospital, Kware, Sokoto. He is a seasoned mental health professional with extensive experience in nursing administration, clinical care, and training.
He began his early education in Kuje, Abuja, and trained as a Registered Nurse at the School of Nursing, Gwagwalada, Abuja. He subsequently specialized in mental health nursing at the School of Post-Basic Psychiatric Nursing, Uselu, Benin City, Edo State. Nurse Tanimu holds a Bachelor of Nursing Science (BNSc) degree from Maryam Abacha University, Niger Republic. He also possesses a Postgraduate Diploma in Education (PGDE) and is a registered member of the Teachers Registration Council of Nigeria (TRCN).
Nurse Tanimu has progressed through the nursing career ladder from Nursing Officer II to the rank of Deputy Director of Nursing. Over the years, he has led several clinical units and has served in various capacities on hospital committees, contributing significantly to service delivery, policy implementation, and professional development.
He is widely recognized for his leadership, professionalism, and unwavering commitment to quality mental health care. Nurse Tanimu is happily married and blessed with children.
`
        },
        {
            name: "Abubakar Adamu Goronyo, CNA",
            role: "H.O.D Procurement",
            image: avatarImg,
            qualifications: "CNA",
            bio: `Abubakar Adamu Goronyo, CNA, is a native of Goronyo Local Government Area of Sokoto State. He was born on 1st November, 1980. He commenced his formal education at the SRRBDA Staff School and proceeded to Government College, Keffi. He furthered his academic and professional training at Kaduna Polytechnic, the Nigeria College of Accountancy, Jos, Ahmadu Bello University, Zaria, Usmanu Danfodiyo University, Sokoto, and Nasarawa State University, Keffi.
He is married and blessed with children`
        },
        {
            name: "Dr. AbdulAzeez Hussaini, MSc ",
            role: "H.O.D psychology Department",
            image: psychoImg,
            qualifications: "Clinical Psychology",
            bio: `AbdulAzeez Hussaini, MSc (Clinical Psychology)
AbdulAzeez Hussaini is an experienced Clinical Psychologist and Head of the Clinical Psychology Department. He holds an MSc in Clinical Psychology from the University of Jos and a BSc in Psychology from Lead City University, Ibadan. His professional training and practice span Federal, State, Private, and Missionary health institutions.
He possesses extensive clinical experience across inpatient, outpatient, and community settings, including service delivery in Internally Displaced Persons (IDP) contexts. His professional interests and research focus include Post-Traumatic Stress Disorder (PTSD), clinical relapse, psychodynamic factors, and human sexuality. He is a strong advocate for multidisciplinary, evidence-based mental healthcare, ethical practice, and stigma reduction.
`
        },
        {
            name: "Dr. Abdulaziz Hadi Ibrahim, MBBS, FWACP ",
            role: "Head of Research Unit",
            image: researchImg,
            qualifications: "Consultant Psychiatrist ",
            bio: `Dr. Abdulaziz Hadi Ibrahim is a Consultant Psychiatrist and Fellow of the West African College of Physicians (Psychiatry). He obtained his MBBS from Ahmadu Bello University, Zaria, and completed postgraduate psychiatric training at the Federal Neuropsychiatric Hospital, Kware. He currently serves as Chairman of the Hospital’s Health Research Ethics Committee and is pursuing a Master of Public Health at Usmanu Danfodiyo University, Sokoto.`
        },
        {
            name: "DR SARKI JUNAIDU",
            role: "Chairman SERVICOM",
            image: avatarImg,
            qualifications: "MSc in Chemical Pathology, with PhD Inview",
            bio: `Dr. Sarki Junaidu hails from Dogondaji town in Tambawal Local Government Area of Sokoto State, Nigeria. He attended Government Secondary School Goronyo (GSSS Goronyo) and obtained his MBBS degree from Usmanu Danfodiyo University Sokoto (UDUS). He is currently a Consultant Psychiatrist, holding fellowships from both the West African College of Physicians (WACP) and the National Postgraduate Medical College of Nigeria (NPMCN). Dr. Junaidu is happily married with children.`
        },
    ];

    const cmd = leadership[0];
    const management = leadership.slice(1);
    const [selectedMember, setSelectedMember] = useState(null);

    return (
        <div className="py-12 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Leadership & Management</h1>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
                    Meet the dedicated professionals leading the Federal Neuropsychiatric Hospital, Kware, towards excellence in healthcare service delivery.
                </p>

                {/* CMD Section - Full Width */}
                <div className="max-w-5xl mx-auto mb-16 cursor-pointer" onClick={() => setSelectedMember(cmd)}>
                    <div className="bg-white rounded-2xl shadow-lg run overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-300">
                        <div className="md:w-1/3 bg-gray-200 relative min-h-[350px]">
                            <img src={cmd.image} alt={cmd.name} className="w-full h-full object-cover absolute inset-0" />
                        </div>
                        <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                            <span className="text-secondary-dark font-bold tracking-wide text-sm uppercase mb-2 bg-secondary/10 w-fit px-3 py-1 rounded-full">{cmd.role}</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{cmd.name}</h2>
                            <p className="text-primary font-medium mb-4 flex items-center gap-2">
                                <span className="underline">View Full Profile</span> <ArrowRight size={16} />
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed line-clamp-3">
                                {cmd.bio}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Management Team - Grid Layout */}
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-primary pl-4">Management Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {management.map((leader, index) => (
                            <div key={index} onClick={() => setSelectedMember(leader)} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full group cursor-pointer ring-1 ring-gray-100 hover:ring-primary/20">
                                <div className="h-64 bg-gray-200 relative overflow-hidden">
                                    {leader.image ? (
                                        <img
                                            src={leader.image}
                                            alt={leader.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-gray-400 flex-col bg-gray-100">
                                            <User size={48} className="mb-2 opacity-50" />
                                            <span className="text-xs font-medium">No Image</span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="mb-4">
                                        <span className="text-secondary-dark text-xs font-bold uppercase tracking-wider mb-1 block">{leader.role}</span>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem] group-hover:text-primary transition-colors">{leader.name}</h3>
                                        {leader.qualifications && (
                                            <p className="text-primary text-sm font-medium flex items-start gap-2 mb-3">
                                                <Award size={16} className="mt-0.5 flex-shrink-0" />
                                                <span className="line-clamp-2">{leader.qualifications}</span>
                                            </p>
                                        )}
                                    </div>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4 flex-grow">
                                        {leader.bio}
                                    </p>

                                    {/* Footer / Extras */}
                                    <div className="pt-4 border-t border-gray-100 mt-auto flex justify-between items-center text-primary text-sm font-bold">
                                        <span>Read Bio</span>
                                        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Detail Modal */}
            {selectedMember && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedMember(null)}>
                    <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative" onClick={e => e.stopPropagation()}>
                        <button
                            onClick={() => setSelectedMember(null)}
                            className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition z-10"
                        >
                            <X size={24} className="text-gray-600" />
                        </button>

                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-2/5 relative min-h-[300px] md:min-h-full">
                                {selectedMember.image ? (
                                    <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover absolute inset-0" />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                        <User size={64} className="text-gray-400" />
                                    </div>
                                )}
                            </div>

                            <div className="md:w-3/5 p-8 md:p-12">
                                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary-dark rounded-full text-xs font-bold uppercase tracking-wide mb-3">
                                    {selectedMember.role}
                                </span>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedMember.name}</h2>
                                {selectedMember.qualifications && (
                                    <p className="text-primary font-medium text-lg mb-6 flex items-center gap-2">
                                        <Award size={20} /> {selectedMember.qualifications}
                                    </p>
                                )}

                                <div className="prose prose-lg text-gray-600">
                                    <p className="leading-relaxed whitespace-pre-line">{selectedMember.bio}</p>
                                </div>

                                {selectedMember.name.includes("Zubairu") && (
                                    <div className="mt-8 pt-8 border-t border-gray-100">
                                        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Globe size={18} /> Areas of Focus</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {["Clinical Governance", "Digital Health", "Child Psychiatry", "Mental Health Advocacy"].map((tag, i) => (
                                                <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

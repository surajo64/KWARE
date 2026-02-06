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
import AE from '../assets/ha&e.png';
import researchImg from '../assets/research.png';
import { User, Award, BookOpen, Globe, X, ArrowRight } from 'lucide-react';

export default function Team() {
    const leadership = [
        {
            name: "Dr. Abubakar Baguda Sulaiman, FMCPsych",
            role: "Medical Director",
            image: cmdImg,
            qualifications: "Consultant Psychiatrist and health administrator ",
            bio: `Dr. Abubakar Baguda Sulaiman is a Consultant Psychiatrist and health administrator with extensive experience in clinical psychiatry, postgraduate medical training, and health systems leadership. He was appointed Medical Director of the Federal Neuro-Psychiatric Hospital, Kware, in June 2025.
He holds the Fellowship of the National Postgraduate Medical College of Nigeria (FMCPsych) and an MBBS degree from Bayero University, Kano. He has additional training in public and global mental health, leadership, and health management from recognized local and international institutions.
Dr. Sulaiman has served in key leadership roles across federal tertiary health institutions, including Head of Department of Mental Health at the Federal Medical Centre, Nguru, and Residency Coordinator in the Department of Psychiatry at Aminu Kano Teaching Hospital. He is an examiner for postgraduate medical training and a reviewer for peer-reviewed medical journals.
He is a member and fellow of several professional bodies, including the Nigerian Medical Association, Association of Psychiatrists in Nigeria, and Medical and Dental Consultants Association of Nigeria. His professional focus includes mental health service delivery, training, research, and community mental health development.
`
        },
        {
            name: "Dr. Zubairu Umar, MBBS, FMCPsych",
            role: "Ag. Head of Clinical Services (CMAC)",
            image: cmacImg,
            qualifications: "Consultant Psychiatrist & Hospital Administrator",
            bio: "Dr. Zubairu Umar is a Consultant Psychiatrist and Hospital Administrator currently serving as the Acting Head of Clinical Services at the Federal Neuropsychiatric Hospital, Kware. A Fellow of the National Postgraduate Medical College of Nigeria, he is a senior clinical leader with extensive experience in psychiatric practice, hospital administration, and mental health research. He provides strategic leadership in clinical governance, service expansion, and EMR implementation. His research focuses on depression in children/adolescents with intellectual disabilities and mental health epidemiology. He is passionate about AI in healthcare and mental health advocacy."
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
            image: AE,
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
        <div className="py-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Leadership</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Meet The Team</h1>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        The dedicated professionals leading the Federal Neuropsychiatric Hospital, Kware, serving with excellence and compassion.
                    </p>
                </div>

                {/* CMD Section - Full Width */}
                <div className="max-w-6xl mx-auto mb-20">
                    <div
                        onClick={() => setSelectedMember(cmd)}
                        className="group bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative"
                    >
                        <div className="md:w-2/5 relative min-h-[400px] overflow-hidden">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                            <img
                                src={cmd.image}
                                alt={cmd.name}
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="md:w-3/5 p-8 md:p-14 flex flex-col justify-center relative">
                            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                                <Award size={120} />
                            </div>

                            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary-dark rounded-full text-xs font-bold uppercase tracking-widest mb-4 w-fit">
                                {cmd.role}
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                                {cmd.name}
                            </h2>
                            {cmd.qualifications && (
                                <p className="text-amber-600 font-bold tracking-wide uppercase text-sm mb-6 flex items-center gap-2">
                                    <Award size={18} className="text-amber-500" />
                                    <span>{cmd.qualifications}</span>
                                </p>
                            )}
                            <p className="text-gray-600 text-lg leading-relaxed line-clamp-3 mb-8">
                                {cmd.bio}
                            </p>

                            <div className="flex items-center text-primary font-bold tracking-wide group/btn w-fit">
                                <span className="mr-2 border-b-2 border-transparent group-hover/btn:border-primary transition-all">Read Full Profile</span>
                                <ArrowRight size={20} className="transform group-hover/btn:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Management Team - Grid Layout */}
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-10 border-b border-gray-200 pb-4">
                        <h2 className="text-3xl font-bold text-gray-800">Management Team</h2>
                        {/* <div className="hidden md:flex gap-2">
                             <button className="p-2 rounded-full bg-white border hover:bg-gray-50"><ChevronLeft size={20} /></button>
                             <button className="p-2 rounded-full bg-white border hover:bg-gray-50"><ChevronRight size={20} /></button>
                        </div> */}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {management.map((leader, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedMember(leader)}
                                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col h-full border border-gray-100"
                            >
                                <div className="h-72 relative overflow-hidden bg-gray-100">
                                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-all duration-300 z-10" />
                                    {leader.image ? (
                                        <img
                                            src={leader.image}
                                            alt={leader.name}
                                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-gray-400 flex-col">
                                            <User size={64} className="mb-3 opacity-30" />
                                            <span className="text-sm font-medium opacity-60">Photo Coming Soon</span>
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 flex flex-col flex-grow relative">
                                    <div className="mb-4">
                                        <div className="mb-3 flex items-start">
                                            <span className="inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-widest border border-green-100 line-clamp-1">
                                                {leader.role}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-green-800 leading-tight mb-2 group-hover:text-green-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                                            {leader.name}
                                        </h3>

                                        {/* Qualification - Golden Color */}
                                        {leader.qualifications && (
                                            <p className="text-amber-600 text-xs font-bold uppercase tracking-wide mb-3 line-clamp-2 min-h-[2.5rem] flex items-start gap-1.5">
                                                <Award size={14} className="mt-0.5 flex-shrink-0 text-amber-500" />
                                                {leader.qualifications}
                                            </p>
                                        )}
                                    </div>

                                    {/* Divider */}
                                    <div className="w-12 h-1 bg-gray-100 mb-4 group-hover:bg-primary/30 transition-colors"></div>

                                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {leader.bio}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                                        <span className="text-xs font-semibold text-gray-400 group-hover:text-primary transition-colors">View Profile</span>
                                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                            <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Premium Detail Modal */}
            {selectedMember && (
                <div
                    className="fixed inset-0 bg-gray-900/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={() => setSelectedMember(null)}
                >
                    <div
                        className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col md:flex-row overflow-hidden animate-in zoom-in-95 duration-300"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedMember(null)}
                            className="absolute top-4 right-4 z-20 bg-black/10 hover:bg-black/20 text-white md:text-gray-800 md:bg-gray-100 md:hover:bg-gray-200 p-2 rounded-full transition-all"
                        >
                            <X size={24} />
                        </button>

                        <div className="md:w-2/5 relative h-[400px] md:h-auto shrink-0">
                            {selectedMember.image ? (
                                <>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden z-10" />
                                    <img
                                        src={selectedMember.image}
                                        alt={selectedMember.name}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </>
                            ) : (
                                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                    <User size={80} className="text-gray-300" />
                                </div>
                            )}

                            <div className="absolute bottom-0 left-0 p-6 z-20 md:hidden text-white">
                                <span className="opacity-90 font-medium text-sm tracking-widest uppercase block mb-1">{selectedMember.role}</span>
                                <h2 className="text-2xl font-bold">{selectedMember.name}</h2>
                            </div>
                        </div>

                        <div className="md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col bg-white">
                            <div className="hidden md:block mb-8">
                                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold uppercase tracking-wider mb-3">
                                    {selectedMember.role}
                                </span>
                                <h2 className="text-4xl font-bold text-gray-900 mb-2">{selectedMember.name}</h2>
                            </div>

                            <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
                                {selectedMember.qualifications && (
                                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                        <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                                            <Award size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-1">Qualifications</h4>
                                            <p className="text-gray-700 font-medium">{selectedMember.qualifications}</p>
                                        </div>
                                    </div>
                                )}

                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <BookOpen size={20} className="text-primary" />
                                        Professional Bio
                                    </h4>
                                    <div className="prose prose-blue text-gray-600 leading-relaxed text-justify">
                                        {selectedMember.bio.split('\n').map((paragraph, i) => (
                                            paragraph.trim() && <p key={i} className="mb-4 last:mb-0">{paragraph}</p>
                                        ))}
                                    </div>
                                </div>

                                {selectedMember.role.includes("Medical Director") && (
                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Globe size={18} className="text-primary" /> Leadership Focus</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["Strategic Vision", "Clinical Excellence", "Mental Health Reform", "Staff Welfare"].map((tag, i) => (
                                                <span key={i} className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors cursor-default">
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

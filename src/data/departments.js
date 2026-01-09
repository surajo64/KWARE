import adminImg from '../assets/admin.png';
import aeImg from '../assets/a&e.png';
import centreImg from '../assets/centre.png';
import icuImg from '../assets/icu.png';
import labImg from '../assets/lab.png';
import wardImg from '../assets/ward.png';
import hospitalImg from '../assets/hospital.png';

export const departments = [
    // Clinical Services
    {
        id: "clinical-services",
        title: "Clinical Services",
        category: "Clinical",
        image: hospitalImg,
        description: "Our comprehensive clinical services form the backbone of patient care, offering top-tier psychiatric evaluation and management.",
        content: "The Department of Clinical Services is responsible for the overall medical and psychiatric care of patients. It coordinates inpatient and outpatient services, ensuring that all patients receive evidence-based, compassionate care."
    },
    {
        id: "nursing-services",
        title: "Nursing Services",
        category: "Clinical",
        image: wardImg,
        description: "Dedicated nursing professionals providing 24/7 care with compassion and expertise.",
        content: "Our Nursing Services department is staffed by highly trained psychiatric nurses who provide round-the-clock care, ensuring patient safety, comfort, and recovery monitoring."
    },
    {
        id: "psychology",
        title: "Psychology",
        category: "Clinical",
        image: hospitalImg,
        description: "Psychological assessment, therapy, and counseling services.",
        content: "The Psychology Department provides psychological testing, psychotherapy, and counseling services to patients and their families, addressing a wide range of mental health challenges."
    },
    {
        id: "occupational-therapy",
        title: "Occupational Therapy",
        category: "Clinical",
        image: hospitalImg,
        description: "Helping patients regain independence and daily living skills.",
        content: "Our Occupational Therapy unit focuses on rehabilitating patients by helping them relearn skills necessary for daily living and working, promoting independence and reintegration into society."
    },
    {
        id: "pharmacy",
        title: "Pharmacy",
        category: "Clinical",
        image: hospitalImg,
        description: "Dispensing medications and providing pharmaceutical care.",
        content: "The Pharmacy Department ensures the safe and effective use of medications. Our pharmacists work closely with doctors to manage drug therapies and educate patients on their medications."
    },
    {
        id: "medical-laboratory",
        title: "Medical Laboratory",
        category: "Clinical",
        image: labImg,
        description: "Diagnostic services relative to hematology, chemistry, and more.",
        content: "Our state-of-the-art Medical Laboratory provides essential diagnostic services, assisting clinicians in the accurate diagnosis and monitoring of medical conditions."
    },
    {
        id: "medical-social-service",
        title: "Medical Social Service",
        category: "Clinical",
        image: hospitalImg,
        description: "Social support and counseling for patients and families.",
        content: "The Medical Social Services Department addresses the social, emotional, and economic factors affecting patients' health, providing counseling and connecting them with community resources."
    },
    {
        id: "accident-and-emergency",
        title: "Accident and Emergency",
        category: "Clinical",
        image: aeImg,
        description: "24/7 emergency psychiatric and medical response.",
        content: "The A&E Department operates 24 hours a day to handle acute psychiatric crises and medical emergencies, ensuring prompt stabilization and admission when necessary."
    },
    {
        id: "medical-records",
        title: "Medical Records",
        category: "Clinical",
        image: hospitalImg,
        description: "Management of patient health information.",
        content: "The Medical Records Department ensures the secure, accurate, and timely management of patient health information, supporting continuity of care and confidentiality."
    },
    {
        id: "regional-center-drug-abuse",
        title: "Regional Center for Women & Children Drug Dependent",
        category: "Clinical",
        image: centreImg,
        description: "Specialized treatment for drug dependency in women and children.",
        content: "A specialized unit dedicated to the treatment and rehabilitation of women and children struggling with drug dependency, providing a safe and supportive environment."
    },
    {
        id: "icu-isolation",
        title: "ICU and Isolation Wards",
        category: "Clinical",
        image: icuImg,
        description: "Intensive care and isolation facilities.",
        content: "Equipped to handle critical cases requiring intensive monitoring and patients needing isolation for infection control purposes."
    },
    {
        id: "children-adolescent-psych",
        title: "Children & Adolescent Psychiatric Wards",
        category: "Clinical",
        image: wardImg,
        description: "Specialized psychiatric care for younger patients.",
        content: "Dedicated wards tailored to the specific needs of children and adolescents, providing age-appropriate psychiatric care and therapy."
    },

    // Administration & Support
    {
        id: "administration",
        title: "Administration",
        category: "Administration",
        image: adminImg,
        description: "General management and hospital operations.",
        content: "The Administration Department oversees the day-to-day operations of the hospital, ensuring efficient management of resources and personnel."
    },
    {
        id: "finance-and-account",
        title: "Finance and Account",
        category: "Administration",
        image: adminImg,
        description: "Financial management and accounting services.",
        content: "Responsible for budgeting, financial planning, and accounting, ensuring fiscal responsibility and transparency in hospital operations."
    },
    {
        id: "internal-audit",
        title: "Internal Audit",
        category: "Administration",
        image: adminImg,
        description: "Ensuring compliance and financial integrity.",
        content: "The Internal Audit unit provides independent assurance on the effectiveness of the hospital's risk management, control, and governance processes."
    },
    {
        id: "procurement",
        title: "Procurement",
        category: "Administration",
        image: adminImg,
        description: "Acquisition of goods and services.",
        content: "The Procurement Department handles the sourcing and purchasing of equipment, medicines, and supplies, following due process and regulations."
    },
    {
        id: "legal",
        title: "Legal",
        category: "Administration",
        image: adminImg,
        description: "Legal advisory and compliance.",
        content: "Provides legal advice to the hospital management and ensures compliance with all relevant laws and regulations."
    },
    {
        id: "servicom",
        title: "SERVICOM",
        category: "Administration",
        image: adminImg,
        description: "Service Compact with All Nigerians - ensuring quality service.",
        content: "SERVICOM is dedicated to ensuring that the hospital delivers quality services to the public in a timely, fair, honest, effective, and transparent manner."
    },
    {
        id: "transport",
        title: "Transport",
        category: "Support",
        image: hospitalImg,
        description: "Logistics and fleet management.",
        content: "Manages the hospital's vehicle fleet to support clinical outreach, administrative movement, and emergency transport needs."
    },
    {
        id: "works-and-services",
        title: "Works and Services",
        category: "Support",
        image: hospitalImg,
        description: "Maintenance of hospital infrastructure.",
        content: "Responsible for the maintenance of hospital buildings, equipment, power supply, and general infrastructure to ensure a safe environment."
    },
    {
        id: "caterine",
        title: "Catering",
        category: "Support",
        image: hospitalImg,
        description: "Nutritious meals for patients and staff.",
        content: "The Catering Department ensures the provision of healthy, hygienic, and nutritious meals for inpatients and staff on duty."
    },
    {
        id: "laundry",
        title: "Laundry",
        category: "Support",
        image: hospitalImg,
        description: "Linen management and infection control.",
        content: "Ensures clean and sterile linens for wards and clinics, playing a vital role in infection prevention and control."
    },
    {
        id: "store",
        title: "Store",
        category: "Support",
        image: hospitalImg,
        description: "Inventory management and logistics.",
        content: "Manages the receipt, storage, and issuance of hospital supplies, ensuring efficient inventory control."
    },
    {
        id: "ict",
        title: "ICT",
        category: "Support",
        image: hospitalImg,
        description: "Information and Communication Technology services.",
        content: "Provides technical support, network infrastructure, and digital solutions to enhance hospital operations and service delivery."
    },

    // Training & Research
    {
        id: "college-of-nursing",
        title: "College of Nursing Sciences",
        category: "Training",
        image: hospitalImg,
        description: "Training the next generation of psychiatric nurses.",
        content: "The College offers specialized training programs in psychiatric nursing, producing competent professionals for the healthcare sector."
    },
    {
        id: "research",
        title: "Research",
        category: "Training",
        image: hospitalImg,
        description: "Advancing mental health knowledge.",
        content: "The Research Unit coordinates studies and clinical trials to advance understanding of mental health conditions and improve treatment outcomes."
    },
    {
        id: "library",
        title: "Library",
        category: "Training",
        image: hospitalImg,
        description: "Resource center for staff and students.",
        content: "A well-stocked library providing medical journals, textbooks, and digital resources to support training and research activities."
    },
    {
        id: "hostel",
        title: "Hostel",
        category: "Training",
        image: hospitalImg,
        description: "Accommodation for students and residents.",
        content: "Provides accommodation for students of the College of Nursing and visiting researchers/residents."
    }
];

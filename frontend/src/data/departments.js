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
        content: `The Nursing Services Department of the Federal Neuropsychiatric Hospital (FNPH), Kware, Sokoto, has been a central component of the institution since its establishment in 1988 as Kware Mental Home under the Sokoto State Ministry of Social Welfare. Following the hospital’s takeover by the Federal Ministry of Health in 1995, the department evolved in line with the mandate of a federal tertiary mental health institution. As part of the Clinical Services Directorate, it has expanded with the hospital’s growth and now oversees thirteen wards and units with an estimated bed capacity of about 300, all managed by professionally trained nursing staff delivering specialized psychiatric and integrated medical care. Core services include the Assessment Unit for patient intake, psychiatric evaluation, triage, and coordination of multidisciplinary care, and the Outpatient Department, which provides follow-up services such as medication monitoring, psychoeducation, crisis intervention, relapse prevention, and admission and discharge coordination. The department also manages specialized substance use treatment facilities, including Drug Wards A and B, the Drug Addiction, Treatment, Education and Research (DATER) Unit, and the Regional Centre for Women and Children Drug Rehabilitation, offering detoxification, rehabilitation, behavioral therapy, and structured aftercare. Inpatient male and female psychiatric wards provide comprehensive nursing care for severe mental illnesses, while also serving as training and research centers. Additional services include the Electroconvulsive Therapy (ECT) Unit and the Accident and Emergency (A&E) wards introduced in July 2023 to support integrated emergency medical and surgical care. Through these milestones and services, the department remains pivotal to the delivery of safe, patient-centered, and integrated healthcare in accordance with Federal Ministry of Health standards.`
    },
    {
        id: "psychology",
        title: "Psychology",
        category: "Clinical",
        image: hospitalImg,
        description: "Psychological assessment, therapy, and counseling services.",
        content: `The Clinical Psychology Department provides specialized psychological assessment and evidence-based therapeutic services for individuals with emotional, behavioural, and mental health conditions. The department operates within the scientist–practitioner model, integrating current psychological research with ethical, compassionate, and patient-centred clinical practice. Services are delivered in collaboration with the hospital’s multidisciplinary team to ensure holistic care.
Core Functions
The department’s functions are strategically focused on clinical service delivery, system support, and capacity development:
Psychological Assessment and Diagnosis:
Comprehensive evaluation of cognitive, emotional, personality, and behavioural functioning using standardized psychological tests and structured clinical interviews.
Evidence-Based Psychotherapy:
Provision of individual, group, and family psychotherapies based on scientifically validated psychological models.
Consultancy and Public Mental Health Support:
Technical advisory services to government institutions and NGOs on mental health policy, crisis intervention, community mental health programmes, and psychoeducational initiatives.
Training, Research, and Prevention:
Supervision of psychology trainees, conduct of clinical research to improve treatment outcomes, and development of preventive and promotive mental health programmes.`
    },
    {
        id: "occupational-therapy",
        title: "Occupational Therapy",
        category: "Clinical",
        image: hospitalImg,
        description: "The Department of Occupational Therapy is a medical rehabilitation unit.",
        content: `The Department of Occupational Therapy is a medical rehabilitation unit dedicated to promoting health, functional ability, and independence through the use of medically prescribed, purposeful activities. The department provides therapeutic interventions for patients with physical, cognitive, emotional, and psychosocial challenges.

Occupational Therapy supports patient participation in meaningful daily activities, including self-care, work, productivity, and leisure, which are essential for functional recovery, wellbeing, and relapse prevention. Services are structured to enhance independence and facilitate successful reintegration into the community.

Core Functions
The department delivers rehabilitative services focused on improving quality of life through:
- Motivation and enhancement of functional skills
- Assessment of Activities of Daily Living (ADLs) and vocational abilities
- Identification and reduction of barriers to independence
- Development and implementation of individualized treatment plans
- Provision of therapeutic activities, assistive devices, and adaptive equipment
- Vocational training, work habit development, and community reintegration`
    },
    {
        id: "pharmacy",
        title: "Pharmacy",
        category: "Clinical",
        image: hospitalImg,
        description: "Dispensing medications and providing pharmaceutical care.",
        content: `The Department of Pharmaceutical Services ensures the safe, effective, economical, and rational use of medicines at the Federal Neuropsychiatric Hospital, Kware. It is responsible for the procurement, storage, distribution, dispensing, and control of all pharmaceuticals in line with national health regulations and best practices.
In accordance with the National Drug Policy, the department ensures efficient drug management, equitable access to quality medicines, rational drug use, pharmacovigilance, pharmaceutical research, local drug production support, and reduction of antimicrobial resistance.
Core Functions
Medication management and dispensing; clinical pharmacy services; patient safety and pharmacovigilance; drug information and education; procurement and inventory management; Drug Revolving Fund administration; regulatory compliance; research, audit, and staff development.
Operational Units
Clinical Inpatient Pharmacy; Clinical Outpatient Pharmacy; Accident and Emergency Pharmacy; Main Medical Store; Active Store; Procurement; Drug Information; Research; Pharmacovigilance; Drug Revolving Fund Management; Audit Unit. All units operate under the coordination of the Head of Department.
`
    },
    {
        id: "medical-laboratory",
        title: "Medical Laboratory Services",
        category: "Clinical",
        image: labImg,
        description: "Diagnostic services relative to hematology, chemistry, and more.",
        content: `The Medical Laboratory Services Department provides accurate and timely laboratory investigations that support disease diagnosis, treatment monitoring, prevention, and public health surveillance at the Federal Neuropsychiatric Hospital, Kware. The Department conducts standardized tests on blood, urine, stool, tissues, and other body fluids using modern diagnostic technologies and strict quality control systems.
Services are delivered through specialized units including Sample Collection, Chemical Pathology, Haematology and Blood Bank, Histopathology, Immunology and Molecular Diagnostics, Microbiology, and Quality Assurance. The Department supports evidence-based clinical care, screening, research, training, and professional consultation, contributing significantly to improved patient outcomes and health system strengthening.`
    },
    {
        id: "medical-social-service",
        title: "Medical Social Service",
        category: "Clinical",
        image: hospitalImg,
        description: "Social support and counseling for patients and families.",
        content: `The Medical Social Welfare Department is responsible for promoting the overall welfare of patients by addressing their social and psychological needs, for both inpatients and outpatients. The department serves as a vital link between the medical team and patients’ relatives, and also liaises with individuals, institutions, and organizations willing to provide assistance to patients.
Key Functions of the Department include:
•	Participation in routine ward rounds
•	Conducting social assessments and diagnoses
•	Contact tracing, particularly for vagrant patients
•	Providing professional psychosocial counselling
•	Mobilizing financial assistance for indigent patients
•	Repatriation of discharged patients
•	Home visits and follow-up in special cases
•	Facilitating post-discharge rehabilitation services
`
    },
    {
        id: "accident-and-emergency",
        title: "Accident and Emergency",
        category: "Clinical",
        image: aeImg,
        description: "24/7 emergency psychiatric and medical response.",
        content: `The Accident and Emergency (A&E) Department of the Federal Neuropsychiatric Hospital, Kware, Sokoto, became fully functional in June 2023, marking a major milestone in the hospital’s evolution from a purely psychiatric facility to one offering integrated and comprehensive healthcare services. The department was established in response to growing service demands and the increasing need for on-site management of general medical and surgical conditions for psychiatric patients, hospital staff, and surrounding communities.
Before the creation of the A&E Department, the hospital focused exclusively on mental health care and lacked a dedicated unit for medical services. This limitation necessitated referrals to external facilities for medical conditions, creating gaps in timely care. The establishment of the A&E Department was therefore a strategic intervention aimed at bridging this gap and improving access to prompt, quality medical services within the hospital.
The department operates through several functional units that support efficient emergency care delivery. These include Medical Records for patient registration and documentation; Nursing for patient care and monitoring; Laboratory services for point-of-care diagnostics; Pharmacy for medication dispensing and monitoring; Maternity services providing antenatal care, delivery, family planning, and immunization; Radiology for ultrasound and X-ray services; a Medical and Surgical Unit for consultations and minor procedures; and an Intensive Care Unit for the management of critically ill patients.
Collectively, these units have significantly strengthened the hospital’s emergency response capacity, improved patient outcomes, and reinforced integrated service delivery in line with national healthcare standards.
`
    },
    {
        id: "medical-records",
        title: "Health Records / Information Management Department",
        category: "Clinical",
        image: hospitalImg,
        description: "Management of patient health information.",
        content: `The Health Records and Information Management Department serves as the primary point of contact for patients within the hospital and provides round-the-clock services through a team of trained professionals. The Department is responsible for the accurate documentation, management, and protection of patients’ medical information, ensuring continuity of care, effective service delivery, and informed decision-making across the hospital.
Key functions of the Department include patient reception and documentation, clinical coding and indexing, and the compilation of monthly, quarterly, and annual health statistics. It manages the printing, storage, and computerisation of medical records, maintains a comprehensive medical records library, and generates reliable data to support clinical research and hospital planning. The Department also processes medical reports, issues birth and death certificates, and safeguards sensitive hospital documents while ensuring strict confidentiality of patients’ records.
In addition, the Department is responsible for the training and education of Health Records Technicians, as well as quality assurance of records-related consumables such as forms, cards, and registers used within the hospital. Through its Hospital Activity Analysis (HAA) unit, the Department provides accurate information on service utilisation and performance, supporting monitoring and evaluation of hospital activities.
`
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
        content: `The Procurement Unit is a key administrative unit operating under the Office of the Medical Director. The Unit is directly answerable to the Medical Director, who also serves as the Chief Executive Officer of the Hospital. The Unit plays a critical role in ensuring transparency, accountability, and value for money in the acquisition of goods, works, and services in line with extant public procurement regulations.
Functions and Responsibilities
The responsibilities of the Procurement Unit are broadly categorized as follows:
Procurement Planning:
The Unit undertakes systematic needs assessment and procurement planning, ensuring alignment with approved budgets. This includes conducting market surveys and cost analyses to support informed procurement decisions.
Tendering and Bidding Processes:
The Unit manages procurement processes through transparent tendering and competitive bidding, in compliance with established public procurement guidelines and procedures.
Contract Management and Compliance:
The Unit coordinates the procurement approval process, facilitates contract awards, and monitors contract implementation to ensure compliance with contractual terms and relevant regulations.
Professional and Advisory Role:
The Unit provides professional procurement advice and analytical support to Management, contributing to effective decision-making and improved institutional performance.
`
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
        content: `The SERVICOM (Service Compact with All Nigerians) is a social contract and administrative mechanism established by the Federal Government of Nigeria in March 2004. Following its introduction, SERVICOM units were created in all government ministries, departments, and agencies to promote effective, efficient, and transparent service delivery. In line with this policy, a SERVICOM unit was also established in this institution and is headed by staff drawn from various departments, who have recorded significant achievements in support of management objectives.
The SERVICOM Unit develops and reviews service charters and standards, monitors service delivery performance, and identifies gaps for improvement. It manages patient relations and feedback, ensures timely resolution of complaints, and prepares regular reports. The unit conducts monitoring and evaluation to ensure compliance with SERVICOM principles, engages stakeholders through sensitization and capacity building, and collaborates with management to enhance service delivery. It also promotes accountability through reporting, holds regular meetings, and recommends corrective actions where necessary, subject to management approval.
`
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
        content: `The Laundry Department is an essential support unit in the hospital, responsible for maintaining hygiene, infection prevention, and patient comfort through the effective management of hospital linens and clothing. The department ensures that all fabrics used within the hospital are properly cleaned, treated, and maintained to support quality healthcare delivery.
The functions of the Laundry Department include the processing, washing, drying, and ironing of all hospital linens; the treatment and cleaning of patients’ uniforms, bed sheets, blankets, and hospital curtains; and the timely distribution and return of clean items to the respective wards and units. The department is also responsible for repairing torn or damaged patients’ clothing and hospital linens. These functions contribute significantly to a clean, safe, and efficient hospital environment
`  },
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
        content: `The Research Unit is responsible for coordinating, regulating, and promoting all research activities within the Federal Neuropsychiatric Hospital, Kware. The Unit ensures that research conducted in the hospital complies with national and international ethical standards and contributes to evidence-based mental health practice, policy formulation, and service improvement.
Mandate
To provide institutional leadership for ethical, high-quality mental health research that supports clinical excellence, health system strengthening, and improved mental health outcomes.
Key Functions
Coordinate and oversee all research activities within the hospital
Ensure compliance with ethical, regulatory, and scientific standards
Provide technical and administrative support for ethical review processes
Build research capacity through training, mentorship, and technical guidance
Monitor and evaluate ongoing research projects
Maintain institutional research records and archives
Facilitate dissemination of research findings
Promote collaboration with academic, governmental, and development partners
Support translation of research findings into evidence-based practice
Research Governance and Ethics
The Research Unit works closely with the Health Research Ethics Committee (HREC) to support proposal development, ethical review, protocol compliance, and responsible conduct of research in line with national guidelines.
`
    },
    {
        id: "library",
        title: "Library",
        category: "Training",
        image: hospitalImg,
        description: "Resource center for staff and students.",
        content: `The Library Department serves as the central information and knowledge management unit of the Federal Neuro-Psychiatric Hospital, Kware. The department is responsible for the systematic selection, organization, preservation, and dissemination of both print and non-print information resources to support patient care, training, teaching, and research activities.
The hospital library, officially known as the Almustapha Jokolo Medical Library, was established in 1999 to enhance access to credible medical and scientific information for healthcare professionals, students, and researchers. Through the provision of relevant and up-to-date resources, the Library Department supports evidence-based practice and contributes to the hospital’s mandate of delivering effective and efficient mental healthcare services.
`
    },
    {
        id: "hostel",
        title: "Hostel",
        category: "Training",
        image: hospitalImg,
        description: "Accommodation for students and residents.",
        content: `The Hostel Unit provides safe, orderly, and comfortable accommodation for students undergoing training and schooling within the hospital. The unit ensures that hostel facilities are well maintained, hygienic, and conducive to learning and healthy living, in line with institutional standards for safety and welfare.
Its functions include the allocation and documentation of student accommodation, supervision of hostel attendants and maintenance personnel, enforcement of hostel rules and regulations to promote discipline and order, coordination of repairs, cleaning, and general upkeep of hostel facilities, and regular inspection of hostel blocks to ensure proper sanitation and functionality of utilities. The unit also liaises with hospital management on students’ welfare and security matters.
`   }
];

export default function About() {
    return (
        <div className="py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Us</h1>

                {/* History */}
                <section className="mb-16 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-primary mb-4">Our History</h2>
                    <div className="prose prose-lg text-gray-600">
                        <p className="mb-4">
                            The Federal Neuropsychiatric Hospital, Kware, was initially known as Kware Mental Home. It was established during the military administration of Ahmed Mohammed Daku, in response to the growing concern about vagrant persons with mental illness roaming the streets of Sokoto State.
                        </p>
                        <p className="mb-4">
                            Kware was selected as the site for the facility because of the availability of existing residential buildings that could easily be converted into asylums. Initially placed under the Sokoto State Social Welfare Board, it was later transferred to the Sokoto State Hospital Management Board.
                        </p>
                        <p>
                            In 1996, the Federal Government upgraded the facility to a Federal Neuropsychiatric Hospital. The first substantive Medical Director, Air Commodore Dr. Bashir Adam Yakasai, was appointed in April 1996.
                        </p>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-primary/5 p-8 rounded-2xl border-l-4 border-primary">
                        <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
                        <p className="text-gray-700 text-lg italic">
                            "Committed to prompt and quality health care services with respect to patient right and values, delivered by compassionate and highly skilled staff dedicated to excellence."
                        </p>
                    </div>
                    <div className="bg-secondary/10 p-8 rounded-2xl border-l-4 border-secondary">
                        <h2 className="text-2xl font-bold text-secondary-dark mb-4">Our Vision</h2>
                        <p className="text-gray-700 text-lg italic">
                            "To provide excellent mental health care services that will be accessible and satisfactory to our patients through partnership with their family members, the public and private agencies."
                        </p>
                    </div>
                </section>

                {/* Mandates */}
                <section className="text-center mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Core Mandates</h2>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <span className="bg-gray-100 px-6 py-3 rounded-full font-bold text-gray-700">Health Services</span>
                        <span className="bg-gray-100 px-6 py-3 rounded-full font-bold text-gray-700">Training</span>
                        <span className="bg-gray-100 px-6 py-3 rounded-full font-bold text-gray-700">Research</span>
                    </div>
                </section>
            </div>
        </div>
    );
}

import adminImg from '../assets/admin.png';
import aeImg from '../assets/a&e.png';
import centreImg from '../assets/centre.png';
import icuImg from '../assets/icu.png';
import labImg from '../assets/lab.png';
import wardImg from '../assets/ward.png';
import gall1 from '../assets/1.png';
import gall2 from '../assets/2.png';
import gall3 from '../assets/3.png';
import gall4 from '../assets/4.png';
import gall5 from '../assets/5.png';
import gall6 from '../assets/6.png';
import gall7 from '../assets/7.png';
import gall8 from '../assets/8.png';
import gall10 from '../assets/10.png';
import gall17 from '../assets/17.png';
import hospitalImg from '../assets/hospital.png';

export default function Gallery() {
    const images = [
        { src: adminImg, caption: "Administration Block" },
        { src: aeImg, caption: "Accident & Emergency Department" },
        { src: centreImg, caption: "Regional Center for Women & Children" },
        { src: icuImg, caption: "ICU & Isolation Wards" },
        { src: labImg, caption: "Molecular Laboratory" },
        { src: wardImg, caption: "Psychiatric Wards" },
        { src: hospitalImg, caption: "Hospital Grounds" },
        { src: gall1, caption: "New Block Under Construction" },
        { src: gall2, caption: "New ICT Centre" },
        { src: gall3, caption: "ICT Room" },
        { src: gall4, caption: "School of Post Basic Nursing" },
        { src: gall5, caption: "Molecular Laboratory" },
        { src: gall5, caption: "Psychiatric Wards" },
        { src: gall6, caption: "Hospital Grounds" },
        { src: gall8, caption: "Regional Center for Women & Children" },
        { src: gall10, caption: "Accident & Emergency Department" },
        { src: gall17, caption: "ICU & Isolation Wards" },

    ];

    return (
        <div className="py-12 bg-white min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Hospital Gallery</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer">
                            <img
                                src={img.src}
                                alt={img.caption}
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <p className="text-white font-bold p-6 w-full">{img.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

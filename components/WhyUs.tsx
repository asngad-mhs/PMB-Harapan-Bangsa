
import React from 'react';
import { BuildingLibraryIcon } from './icons/BuildingLibraryIcon';
import { UserGroupIcon } from './icons/UserGroupIcon';
import { BookOpenIcon } from './icons/BookOpenIcon';
import { AcademicCapIcon } from './icons/AcademicCapIcon';

const features = [
  {
    icon: <BuildingLibraryIcon className="h-12 w-12 text-blue-600" />,
    title: "Fasilitas Modern",
    description: "Nikmati fasilitas belajar mengajar terkini yang mendukung penuh potensi akademik dan non-akademik Anda.",
  },
  {
    icon: <UserGroupIcon className="h-12 w-12 text-blue-600" />,
    title: "Dosen Profesional",
    description: "Dapatkan bimbingan dari para dosen ahli di bidangnya yang berdedikasi tinggi untuk pendidikan.",
  },
  {
    icon: <BookOpenIcon className="h-12 w-12 text-blue-600" />,
    title: "Kurikulum Relevan",
    description: "Kurikulum kami dirancang untuk menjawab tantangan industri dan mempersiapkan Anda untuk karir global.",
  },
  {
    icon: <AcademicCapIcon className="h-12 w-12 text-blue-600" />,
    title: "Lingkungan Inklusif",
    description: "Jadilah bagian dari komunitas kampus yang beragam, suportif, dan menginspirasi untuk terus bertumbuh.",
  },
];

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WhyUs: React.FC = () => {
  return (
    <section id="mengapa-kami" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Mengapa Memilih Kami?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Kami berkomitmen untuk memberikan pendidikan berkualitas yang membentuk pemimpin masa depan.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

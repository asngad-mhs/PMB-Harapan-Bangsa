
import React from 'react';
import type { Program } from '../types';

const programs: Program[] = [
  {
    faculty: "Fakultas Teknik",
    name: "Teknik Informatika",
    description: "Mempelajari pengembangan perangkat lunak, kecerdasan buatan, dan keamanan siber.",
  },
  {
    faculty: "Fakultas Ekonomi & Bisnis",
    name: "Manajemen",
    description: "Fokus pada strategi bisnis, pemasaran digital, dan manajemen sumber daya manusia.",
  },
  {
    faculty: "Fakultas Ilmu Komunikasi",
    name: "Ilmu Komunikasi",
    description: "Menggali dunia public relations, periklanan, dan komunikasi massa di era digital.",
  },
  {
    faculty: "Fakultas Desain",
    name: "Desain Komunikasi Visual",
    description: "Mengasah kreativitas dalam branding, ilustrasi, dan desain antarmuka pengguna (UI/UX).",
  },
  {
    faculty: "Fakultas Teknik",
    name: "Sistem Informasi",
    description: "Menjembatani antara kebutuhan bisnis dengan solusi teknologi informasi yang efektif.",
  },
  {
    faculty: "Fakultas Ekonomi & Bisnis",
    name: "Akuntansi",
    description: "Mendalami audit, perpajakan, dan sistem informasi akuntansi modern.",
  },
];

const ProgramCard: React.FC<{ program: Program }> = ({ program }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:border-blue-500 border-2 border-transparent">
    <div className="p-6">
      <p className="text-sm font-semibold text-blue-600 mb-1">{program.faculty}</p>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{program.name}</h3>
      <p className="text-gray-600 text-base">{program.description}</p>
    </div>
    <div className="bg-gray-100 p-4 mt-auto">
      <a href="#" className="font-semibold text-blue-600 group-hover:text-blue-800 transition-colors">
        Pelajari Lebih Lanjut &rarr;
      </a>
    </div>
  </div>
);

const Programs: React.FC = () => {
  return (
    <section id="program-studi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Program Studi Unggulan</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan passion Anda melalui beragam pilihan program studi yang kami tawarkan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;

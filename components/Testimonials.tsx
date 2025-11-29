
import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "Lingkungan belajarnya sangat mendukung. Dosen-dosennya tidak hanya mengajar, tapi juga menjadi mentor yang hebat. Saya bangga menjadi alumni UHB!",
    name: "Ahmad Maulana",
    major: "Teknik Informatika '19",
    avatarUrl: "https://picsum.photos/id/237/100/100",
  },
  {
    quote: "Fasilitas lab di sini sangat lengkap. Membantu saya dalam mengerjakan proyek-proyek praktikum dan tugas akhir. Pengalaman yang sangat berharga.",
    name: "Siti Nurhaliza",
    major: "Desain Komunikasi Visual '20",
    avatarUrl: "https://picsum.photos/id/238/100/100",
  },
  {
    quote: "Melalui program magang yang difasilitasi kampus, saya berhasil mendapatkan pekerjaan sebelum wisuda. Kurikulumnya sangat relevan dengan industri.",
    name: "Budi Santoso",
    major: "Manajemen '21",
    avatarUrl: "https://picsum.photos/id/239/100/100",
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
    <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-24 h-24 rounded-full mb-4 border-4 border-blue-200" />
    <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
    <div className="mt-auto">
        <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
        <p className="text-blue-600 font-medium">{testimonial.major}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Kata Mereka</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Dengarkan cerita dan pengalaman inspiratif dari mahasiswa dan alumni kami.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

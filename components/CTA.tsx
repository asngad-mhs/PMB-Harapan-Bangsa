
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="daftar" className="py-20 bg-blue-600">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Siap Memulai Perjalanan Anda?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Jangan tunda lagi kesempatan untuk meraih pendidikan terbaik dan masa depan yang cerah.
            Bergabunglah dengan Universitas Harapan Bangsa sekarang juga!
          </p>
          <a
            href="#"
            className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-100 transition-transform duration-300 ease-in-out hover:scale-105 transform inline-block"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;

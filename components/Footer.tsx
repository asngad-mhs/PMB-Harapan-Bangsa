
import React from 'react';
import { AcademicCapIcon } from './icons/AcademicCapIcon';

const Footer: React.FC = () => {
  return (
    <footer id="kontak" className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <AcademicCapIcon className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold">Universitas Harapan Bangsa</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Membentuk generasi unggul yang siap bersaing di tingkat global melalui pendidikan, penelitian, dan pengabdian masyarakat.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li><a href="#mengapa-kami" className="text-gray-400 hover:text-white transition-colors">Mengapa Kami</a></li>
              <li><a href="#program-studi" className="text-gray-400 hover:text-white transition-colors">Program Studi</a></li>
              <li><a href="#alur-pendaftaran" className="text-gray-400 hover:text-white transition-colors">Alur Pendaftaran</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Portal Mahasiswa</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Kontak Kami</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="mt-1 mr-2">&#x1F4CD;</span>
                <span>Jl. Pendidikan No. 123, Kota Harapan, Indonesia 12345</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">&#x2709;</span>
                <a href="mailto:info@uhb.ac.id" className="hover:text-white">info@uhb.ac.id</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">&#x1F4DE;</span>
                <a href="tel:+62211234567" className="hover:text-white">(021) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Universitas Harapan Bangsa. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Social media icons would go here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

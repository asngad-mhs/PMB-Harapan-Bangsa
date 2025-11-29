
import React, { useState } from 'react';
import { AcademicCapIcon } from './icons/AcademicCapIcon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#mengapa-kami', label: 'Mengapa Kami' },
    { href: '#program-studi', label: 'Program Studi' },
    { href: '#alur-pendaftaran', label: 'Alur Pendaftaran' },
    { href: '#kontak', label: 'Kontak' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <AcademicCapIcon className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">UHB</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#daftar"
          className="hidden md:inline-block bg-blue-600 text-white font-semibold px-5 py-2 rounded-full hover:bg-blue-700 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          Daftar Sekarang
        </a>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-blue-600 font-medium">
                {link.label}
              </a>
            ))}
            <a
              href="#daftar"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center mx-6 bg-blue-600 text-white font-semibold px-5 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Daftar Sekarang
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

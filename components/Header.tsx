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

        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          bg-white border-t border-gray-200
        `}
        style={{ maxHeight: isMenuOpen ? '400px' : '0' }}
      >
        <nav className="flex flex-col px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-blue-600 hover:bg-gray-100 font-medium py-2 px-3 rounded-md text-left transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#daftar"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-blue-600 text-white font-semibold px-5 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Daftar Sekarang
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

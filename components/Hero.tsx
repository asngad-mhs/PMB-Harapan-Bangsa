
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}></div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative container mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          <span className="block animate-text-reveal" style={{ animationDelay: '0.2s' }}>
            Wujudkan Mimpimu di
          </span>
          <span className="text-blue-400 block animate-text-reveal" style={{ animationDelay: '0.6s' }}>
            Universitas Harapan Bangsa
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          Bergabunglah dengan komunitas pembelajar inovatif dan raih masa depan gemilang bersama kami. Pendaftaran Mahasiswa Baru telah dibuka!
        </p>
        <a
          href="#daftar"
          className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-700 transition-transform duration-300 ease-in-out hover:scale-105 transform inline-block animate-bounce-slow"
        >
          Daftar Sekarang
        </a>
      </div>
      <style>{`
        @keyframes text-reveal {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
          50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
        }
        
        .animate-text-reveal {
          animation: text-reveal 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
          opacity: 0;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite 1.5s;
        }
      `}</style>
    </section>
  );
};

export default Hero;

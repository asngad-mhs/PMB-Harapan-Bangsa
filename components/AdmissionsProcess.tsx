
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Pendaftaran Online",
    description: "Isi formulir pendaftaran secara online melalui website resmi kami.",
  },
  {
    number: "02",
    title: "Lengkapi Dokumen",
    description: "Unggah semua dokumen persyaratan yang diperlukan seperti ijazah dan transkrip nilai.",
  },
  {
    number: "03",
    title: "Tes Seleksi",
    description: "Ikuti tes seleksi masuk sesuai jadwal yang telah ditentukan.",
  },
  {
    number: "04",
    title: "Pengumuman",
    description: "Cek hasil kelulusan Anda melalui portal mahasiswa baru.",
  },
  {
    number: "05",
    title: "Daftar Ulang",
    description: "Lakukan proses daftar ulang untuk resmi menjadi mahasiswa Universitas Harapan Bangsa.",
  },
];

const AdmissionsProcess: React.FC = () => {
  return (
    <section id="alur-pendaftaran" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Alur Pendaftaran</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Ikuti 5 langkah mudah untuk menjadi bagian dari keluarga besar kami.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-blue-100 rounded-full hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-1">
            {steps.map((step, index) => (
              <div key={index} className="relative md:p-4">
                <div className="flex md:block items-start md:items-stretch">
                  
                  {/* Circle and Number for Desktop */}
                  <div className={`hidden md:flex absolute top-1/2 -translate-y-1/2 ${index % 2 === 0 ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'} items-center justify-center w-24 h-24`}>
                     <div className="flex items-center justify-center w-16 h-16 bg-white border-4 border-blue-500 rounded-full z-10">
                        <span className="text-2xl font-bold text-blue-600">{step.number}</span>
                     </div>
                  </div>

                  {/* Circle and Number for Mobile */}
                   <div className="flex-shrink-0 md:hidden flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full mr-6">
                     <span className="text-xl font-bold">{step.number}</span>
                   </div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pr-12' : 'md:mr-auto md:pl-12'} `}>
                    <div className={`bg-gray-50 p-6 rounded-xl shadow-md border-l-4 md:border-l-0 ${index % 2 === 0 ? 'md:border-r-4' : 'md:border-l-4'} border-blue-500`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsProcess;

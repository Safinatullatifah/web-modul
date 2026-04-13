import { useState, useEffect, useRef } from 'react';

const BahanAjar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeIndex]);

  const slides = [
    { 
      id: 1,
      title: "Hierarki Data", 
      subtitle: "Dari elemen terkecil membentuk sebuah sistem.", 
      icon: "🏗️",
      theme: "from-blue-500 to-cyan-500",
      content: [
        { label: "Karakter (Byte)", text: "Bagian data terkecil berupa huruf atau angka." },
        { label: "Field (Kolom)", text: "Kumpulan karakter yang memiliki makna (contoh: Nama)." },
        { label: "Record (Baris)", text: "Satu set data utuh yang mendeskripsikan sebuah entitas." },
        { label: "Tabel / File", text: "Kumpulan baris data yang memiliki struktur sejenis." },
        { label: "Database", text: "Kumpulan tabel yang saling berelasi satu sama lain." }
      ]
    },
    { 
      id: 2,
      title: "Mengenal ERD", 
      subtitle: "Simbol dan aturan membaca cetak biru database.", 
      icon: "🗺️",
      theme: "from-purple-500 to-pink-500",
      content: [
        { 
          label: "Persegi Panjang", 
          text: "Entitas: Objek utama di dunia nyata.",
          shape: <div className="w-16 h-8 bg-blue-50 border-2 border-blue-500 shadow-sm"></div>
        },
        { 
          label: "Elips / Oval", 
          text: "Atribut: Karakteristik atau sifat dari entitas.",
          shape: <div className="w-16 h-8 bg-purple-50 border-2 border-purple-500 rounded-[50%] shadow-sm"></div>
        },
        { 
          label: "Belah Ketupat", 
          text: "Relasi: Penghubung antar entitas (kata kerja).",
          shape: <div className="w-8 h-8 bg-pink-50 border-2 border-pink-500 rotate-45 transform shadow-sm my-1"></div>
        },
        { 
          label: "Garis Penghubung", 
          text: "Menunjukkan alur kardinalitas (1:1, 1:N, N:M).",
          shape: <div className="w-16 h-1 bg-gray-500 rounded-full"></div>
        }
      ]
    },
    { 
      id: 3,
      title: "Bahaya Redundansi", 
      subtitle: "Mengapa menyimpan data berulang itu buruk?", 
      icon: "⚠️",
      theme: "from-red-500 to-orange-400",
      content: [
        { label: "Boros Memori", text: "Media penyimpanan cepat penuh karena data ganda." },
        { label: "Anomali Insert", text: "Sulit memasukkan data baru jika kunci belum lengkap." },
        { label: "Anomali Update", text: "Mengubah satu data memicu perubahan di banyak baris." },
        { label: "Anomali Delete", text: "Menghapus data bisa memicu hilangnya data penting lain." }
      ]
    },
    { 
      id: 4,
      title: "Tahapan Normalisasi", 
      subtitle: "Seni merapikan tabel agar efisien dan bebas error.", 
      icon: "✨",
      theme: "from-emerald-500 to-teal-400",
      content: [
        { label: "Unnormalized (UNF)", text: "Bentuk data mentah seperti struk belanja, berantakan." },
        { label: "1NF (Bentuk Pertama)", text: "Hilangkan array. Setiap sel wajib atomik!" },
        { label: "2NF (Bentuk Kedua)", text: "Pecah tabel & buat Primary Key. Hapus dependensi parsial." },
        { label: "3NF (Bentuk Ketiga)", text: "Hapus dependensi transitif antar kolom biasa." }
      ]
    },
  ];

  const handleNext = () => setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="p-4">
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800">Bahan Ajar (Visual)</h2>
        <p className="text-gray-600 mt-2">Pilih modul di bawah ini untuk membuka mode presentasi interaktif.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            onClick={() => setActiveIndex(index)}
            className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${slide.theme}`}></div>
            <div className="text-6xl mb-4 bg-gray-50 p-6 rounded-full group-hover:scale-110 transition-transform duration-300">
              {slide.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{slide.title}</h3>
            <p className="text-gray-500 text-sm mb-6">{slide.subtitle}</p>
            
            <button className={`mt-auto w-full text-white font-semibold py-2 px-4 rounded-lg bg-gradient-to-r ${slide.theme} opacity-90 hover:opacity-100 transition-opacity`}>
              Buka Modul
            </button>
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-slate-900/80 transition-all">
          
          {/* Ubah h-[85vh] menjadi h-auto dan max-h-[95vh] agar fit di layar */}
          <div className="bg-gray-50 w-full max-w-5xl h-auto max-h-[95vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up relative">
            
            <div className={`h-3 w-full bg-gradient-to-r ${slides[activeIndex].theme}`}></div>
            
            {/* Kurangi padding dari p-6 menjadi p-4 sm:p-5 */}
            <div className="flex justify-between items-center p-4 sm:p-5 bg-white border-b border-gray-100 shadow-sm z-10">
              <div className="flex items-center gap-4">
                <span className="text-3xl sm:text-4xl">{slides[activeIndex].icon}</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-800">{slides[activeIndex].title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm font-medium">Slide {activeIndex + 1} dari {slides.length}</p>
                </div>
              </div>
              <button 
                onClick={() => setActiveIndex(null)}
                className="bg-gray-100 hover:bg-red-100 hover:text-red-600 text-gray-500 p-2 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Kurangi padding isi konten */}
            <div ref={contentRef} className="flex-1 overflow-y-auto p-4 sm:p-6 scroll-smooth">
              <p className="text-center text-sm sm:text-base text-gray-600 mb-6 font-medium max-w-2xl mx-auto">
                {slides[activeIndex].subtitle}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
                {slides[activeIndex].content.map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
                    
                    {item.shape && (
                      <div className="mb-4 flex justify-center items-center h-12 w-full bg-gray-50 rounded-lg border border-gray-100">
                        {item.shape}
                      </div>
                    )}
                    
                    <div className="flex items-start gap-3 flex-1">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold bg-gradient-to-br ${slides[activeIndex].theme} shadow-sm`}>
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-800 mb-1">{item.label}</h4>
                        <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 border-t border-gray-200 flex justify-between items-center z-10">
              <button 
                onClick={handlePrev}
                className="flex items-center gap-1 text-sm sm:text-base text-gray-600 hover:text-blue-600 font-semibold px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <span>&larr;</span> <span className="hidden sm:inline">Sebelumnya</span>
              </button>
              
              <div className="flex gap-1.5">
                {slides.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? `w-6 bg-gradient-to-r ${slides[activeIndex].theme}` : 'w-2 bg-gray-300'}`}
                  ></div>
                ))}
              </div>

              <button 
                onClick={handleNext}
                className={`flex items-center gap-1 text-sm sm:text-base text-white font-semibold px-4 py-2 rounded-lg bg-gradient-to-r ${slides[activeIndex].theme} shadow-md hover:opacity-90 transition-opacity`}
              >
                <span className="hidden sm:inline">Selanjutnya</span> <span>&rarr;</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default BahanAjar;
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
      title: "Pengantar Basis Data",
      subtitle: "Mengenal konsep dasar dan tujuan perancangan data.",
      icon: "📂",
      theme: "from-blue-500 to-cyan-500",
      content: [
        { label: "Definisi Basis Data", text: "Sekumpulan data terstruktur yang diorganisasikan secara logis agar mesin dapat memprosesnya dengan efisien." },
        { label: "Tujuan Perancangan", text: "Memastikan data dapat dicari, dikelola, diperbarui, dan dilindungi dengan cepat tanpa tumpang tindih." },
        { label: "Redundansi Data", text: "Penggandaan data (duplikasi) yang sama berulang kali di berbagai tempat yang menyebabkan pemborosan memori." },
        { label: "Anomali Data", text: "Ketidakkonsistenan atau kesalahan fatal saat operasi insert, update, atau delete pada struktur tabel yang buruk." }
      ]
    },
    {
      id: 2,
      title: "Hierarki Data Digital",
      subtitle: "Struktur penyusun informasi dari elemen terkecil.",
      icon: "🏗️",
      theme: "from-indigo-500 to-purple-500",
      content: [
        { label: "Karakter (Byte)", text: "Bagian data terkecil yang bisa diproses komputer, seperti satu huruf alfabet (A) atau angka (1)." },
        { label: "Field (Atribut)", text: "Kumpulan karakter bermakna yang mewakili satu kolom dalam tabel. Contoh: kolom NISN atau Nama." },
        { label: "Record (Baris)", text: "Kumpulan field yang saling berkaitan untuk mendeskripsikan satu entitas spesifik secara utuh." },
        { label: "File (Tabel)", text: "Kumpulan record atau baris data sejenis yang memiliki struktur yang sama. Contoh: Tabel Siswa." },
        { label: "Database", text: "Kumpulan dari berbagai tabel yang saling berelasi satu sama lain secara logis membentuk sistem informasi." }
      ]
    },
    {
      id: 3,
      title: "Entity Relationship Diagram",
      subtitle: "Pemodelan visual dan cetak biru logika sistem basis data.",
      icon: "🗺️",
      theme: "from-emerald-500 to-teal-400",
      content: [
        {
          label: "Entitas (Persegi Panjang)",
          text: "Objek dunia nyata yang dapat dibedakan (misal: Siswa, Buku).",
          shape: <div className="w-16 h-8 bg-emerald-50 border-2 border-emerald-500 shadow-sm"></div>
        },
        {
          label: "Atribut (Elips / Oval)",
          text: "Karakteristik entitas. Terdapat Primary Key sebagai pengenal unik.",
          shape: <div className="w-16 h-8 bg-emerald-50 border-2 border-emerald-500 rounded-[50%] shadow-sm"></div>
        },
        {
          label: "Relasi (Belah Ketupat)",
          text: "Hubungan atau interaksi antar entitas, biasanya berupa kata kerja.",
          shape: <div className="w-8 h-8 bg-emerald-50 border-2 border-emerald-500 rotate-45 transform shadow-sm my-1"></div>
        },
        {
          label: "Kardinalitas (Garis Relasi)",
          text: "Derajat jumlah maksimum hubungan antar entitas (1:1, 1:N, N:M).",
          shape: <div className="w-16 h-1 bg-gray-500 rounded-full"></div>
        }
      ]
    },
    {
      id: 4,
      title: "Tahapan Normalisasi",
      subtitle: "Seni menyusun tabel terstruktur agar bebas redundansi.",
      icon: "✨",
      theme: "from-purple-500 to-fuchsia-500",
      content: [
        { label: "Unnormalized Form (UNF)", text: "Data mentah kompleks yang belum terstruktur dan seringkali memiliki atribut bernilai ganda (multivalue)." },
        { label: "First Normal Form (1NF)", text: "Syarat 1NF: Hilangkan multivalue. Setiap perpotongan baris dan kolom wajib berisi satu nilai tunggal (atomik)." },
        { label: "Second Normal Form (2NF)", text: "Syarat 2NF: Memenuhi 1NF dan hilangkan ketergantungan parsial. Atribut non-kunci harus bergantung penuh pada Primary Key." },
        { label: "Third Normal Form (3NF)", text: "Syarat 3NF: Memenuhi 2NF dan hilangkan ketergantungan transitif. Atribut biasa tidak boleh bergantung pada atribut biasa lainnya." }
      ]
    },
  ];

  const handleNext = () => setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="p-4 sm:p-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Bahan Ajar (Visual)</h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">Pilih modul di bawah ini untuk membuka mode presentasi interaktif.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              onClick={() => setActiveIndex(index)}
              className="group bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-2 bg-linear-to-r ${slide.theme}`}></div>
              <div className="text-5xl sm:text-6xl mb-4 bg-gray-50 p-5 rounded-full group-hover:scale-110 transition-transform duration-300">
                {slide.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">{slide.title}</h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-5">{slide.subtitle}</p>
              <button className={`mt-auto w-full text-white font-semibold py-2 px-4 rounded-lg bg-linear-to-r ${slide.theme} opacity-90 hover:opacity-100 transition-opacity text-sm`}>
                Buka Modul
              </button>
            </div>
          ))}
        </div>

        {activeIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 backdrop-blur-md bg-slate-900/80 transition-all">
            <div className="bg-gray-50 w-full max-w-5xl max-h-[95vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden relative">
              <div className={`h-3 w-full bg-linear-to-r ${slides[activeIndex].theme} shrink-0`}></div>

              <div className="flex justify-between items-center p-4 sm:p-5 bg-white border-b border-gray-100 shadow-sm z-10 shrink-0">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">{slides[activeIndex].icon}</span>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-extrabold text-gray-800">{slides[activeIndex].title}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm font-medium">Slide {activeIndex + 1} dari {slides.length}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveIndex(null)}
                  className="bg-gray-100 hover:bg-red-100 hover:text-red-600 text-gray-500 p-2 rounded-full transition-colors shrink-0"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <div ref={contentRef} className="flex-1 overflow-y-auto p-4 sm:p-6">
                <p className="text-center text-sm sm:text-base text-gray-600 mb-5 font-medium max-w-2xl mx-auto">
                  {slides[activeIndex].subtitle}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
                  {slides[activeIndex].content.map((item, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
                      {item.shape && (
                        <div className="mb-3 flex justify-center items-center h-12 w-full bg-gray-50 rounded-lg border border-gray-100">
                          {item.shape}
                        </div>
                      )}
                      <div className="flex items-start gap-3 flex-1">
                        <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold bg-linear-to-br ${slides[activeIndex].theme} shadow-sm`}>
                          {i + 1}
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-gray-800 mb-1">{item.label}</h4>
                          <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-4 border-t border-gray-200 flex justify-between items-center z-10 shrink-0">
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 font-semibold px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <span>&larr;</span> <span className="hidden sm:inline">Sebelumnya</span>
                </button>
                <div className="flex gap-1.5">
                  {slides.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? `w-6 bg-linear-to-r ${slides[activeIndex].theme}` : 'w-2 bg-gray-300'}`}
                    ></div>
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className={`flex items-center gap-1 text-sm text-white font-semibold px-4 py-2 rounded-lg bg-linear-to-r ${slides[activeIndex].theme} shadow-md hover:opacity-90 transition-opacity`}
                >
                  <span className="hidden sm:inline">Selanjutnya</span> <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BahanAjar;
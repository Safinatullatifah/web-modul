import { useState, useEffect, useRef } from 'react';
import imgShopee from '../assets/shopee.png';
import imgdiskusi from '../assets/diskusi.png';
import imgerd from '../assets/erd.png';
import imgerdjadi from '../assets/erdjadi.png';
import imghierarki from '../assets/hierarki.png';
import imgkardinalitas from '../assets/kardinalitas.png';
import imgktm from '../assets/ktm.png';
import imgsecurity from '../assets/security.png';

const BahanAjar = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRef = useRef(null);

  const slides = [
    // ==========================================
    // PERTEMUAN 1: ERD (Dengan Sintaks Discovery Learning)
    // ==========================================
    {
      id: 1,
      pertemuan: 1,
      syntax: "Stimulation",
      title: "Pengantar Basis Data",
      subtitle: "Kenapa kita butuh Basis Data? Mari bayangkan aplikasi e-commerce.",
      icon: "🛍️",
      theme: "from-blue-600 to-blue-400",
      image: imgShopee,
      content: [
        { label: "Masalah Data Manual", text: "Mencatat jutaan produk dan transaksi di buku atau Excel pasti akan lambat dan rawan hilang." },
        { label: "Solusi Basis Data", text: "Sistem khusus untuk menyimpan, mengelola, dan mencari data dengan super cepat." },
        { label: "Contoh Nyata", text: "Aplikasi e-commerce menyimpan jutaan data tanpa tumpang tindih berkat basis data terstruktur." }
      ]
    },
    {
      id: 2,
      pertemuan: 1,
      syntax: "Problem Statement",
      title: "Identifikasi Masalah",
      subtitle: "Apa yang terjadi jika kita tidak merancang data dengan benar?",
      icon: "❓",
      theme: "from-red-500 to-orange-500",
      image: null,
      content: [
        { label: "Kebingungan Data", text: "Bagaimana cara membedakan dua pelanggan yang memiliki nama yang sama persis?" },
        { label: "Duplikasi", text: "Bagaimana jika satu data buku ditulis berulang-ulang di setiap transaksi peminjaman?" },
        { label: "Hipotesis Utama", text: "Kita butuh sebuah 'Identitas Unik' dan 'Pemisahan Objek' agar data tidak berantakan." }
      ]
    },
    {
      id: 3,
      pertemuan: 1,
      syntax: "Data Collection",
      title: "Hierarki Data",
      subtitle: "Mari kumpulkan informasi dasar tentang susunan bangunan data.",
      icon: "🏗️",
      theme: "from-cyan-500 to-teal-400",
      image: imghierarki,
      content: [
        { label: "1. Karakter & Field", text: "Karakter adalah elemen terkecil. Field adalah kumpulan karakter bermakna (Nama, Alamat)." },
        { label: "2. Record & Tabel", text: "Record adalah satu baris informasi utuh. Tabel adalah kumpulan record sejenis." },
        { label: "3. Database", text: "Kumpulan berbagai tabel yang saling terhubung membentuk sistem." }
      ]
    },
    {
      id: 4,
      pertemuan: 1,
      syntax: "Data Collection",
      title: "Simbol-Simbol ERD",
      subtitle: "Mengumpulkan kosakata visual untuk merancang cetak biru data.",
      icon: "🗺️",
      theme: "from-purple-500 to-indigo-500",
      image: imgerd,
      content: [
        { label: "Entitas", text: "Objek utama yang akan disimpan datanya (Persegi Panjang)." },
        { label: "Atribut", text: "Karakteristik atau sifat dari objek (Elips/Oval)." },
        { label: "Relasi", text: "Hubungan atau peristiwa antar objek (Belah Ketupat)." }
      ]
    },
    {
      id: 5,
      pertemuan: 1,
      syntax: "Data Collection",
      title: "Mengenal Primary Key",
      subtitle: "Menemukan solusi untuk masalah identitas unik.",
      icon: "🔑",
      theme: "from-orange-500 to-red-500",
      image: imgktm,
      content: [
        { label: "Definisi PK", text: "Atribut unik yang membedakan satu baris data dengan baris lainnya secara mutlak." },
        { label: "Contoh Nyata", text: "Nomor Induk Mahasiswa (NIM) pada KTM, atau NIK pada KTP." }
      ]
    },
    {
      id: 6,
      pertemuan: 1,
      syntax: "Data Processing",
      title: "Kardinalitas Relasi",
      subtitle: "Mengolah hubungan antar data menjadi sebuah aturan bisnis.",
      icon: "📊",
      theme: "from-pink-500 to-rose-400",
      image: imgkardinalitas,
      content: [
        { label: "1:1 (One-to-One)", text: "Satu hanya berpasangan dengan Satu (1 Siswa : 1 No Bangku Ujian)." },
        { label: "1:N (One-to-Many)", text: "Satu berpasangan dengan Banyak (1 Wali Kelas : Banyak Murid)." },
        { label: "N:M (Many-to-Many)", text: "Banyak berpasangan dengan Banyak (Banyak Siswa : Banyak Buku)." }
      ]
    },
    {
      id: 7,
      pertemuan: 1,
      syntax: "Verification",
      title: "Studi Kasus: Sistem Kasir",
      subtitle: "Membuktikan kebenaran rancangan pada sistem nyata.",
      icon: "✅",
      theme: "from-emerald-600 to-teal-500",
      image: imgerdjadi,
      content: [
        { label: "Verifikasi Entitas", text: "Objek KASIR dan BARANG terhubung melalui relasi JUAL." },
        { label: "Verifikasi Atribut", text: "Perhatikan atribut transaksi NO_KWI yang muncul dari relasi JUAL, bukan dari entitas master." }
      ]
    },
    {
      id: 8,
      pertemuan: 1,
      syntax: "Generalization",
      title: "Kesimpulan & Aktivitas",
      subtitle: "Menarik kesimpulan besar sebelum praktik mandiri.",
      icon: "🚀",
      theme: "from-blue-700 to-indigo-600",
      image: imgdiskusi,
      content: [
        { label: "Kesimpulan", text: "ERD adalah alat komunikasi wajib antara perancang data dan programmer sebelum coding dimulai." },
        { label: "Tugas Kelompok", text: "Buka menu LKPD Pertemuan 1 dan rancanglah ERD Perpustakaan menggunakan Interactive Editor!" }
      ]
    },

    // ==========================================
    // PERTEMUAN 2: NORMALISASI
    // ==========================================
    { 
      id: 9,
      pertemuan: 2,
      title: "Bahaya Redundansi", 
      subtitle: "Mengapa menyimpan data berulang itu buruk?", 
      icon: "⚠️",
      theme: "from-red-500 to-orange-400",
      imagePlaceholder: "Gambar Ilustrasi Data Berantakan",
      content: [
        { label: "Boros Memori", text: "Penyimpanan server akan cepat penuh karena data ganda yang tidak efisien." },
        { label: "Anomali Update", text: "Mengubah satu nama kecil mengharuskan sistem mengubah ribuan baris lainnya." },
        { label: "Anomali Delete", text: "Menghapus satu data transaksi bisa memicu hilangnya data entitas lain." }
      ]
    },
    { 
       id: 10,
       pertemuan: 2,
       title: "Tahapan Normalisasi", 
       subtitle: "Seni merapikan tabel agar efisien dan bebas error.", 
       icon: "✨",
       theme: "from-emerald-500 to-teal-400",
       imagePlaceholder: "Gambar Proses Pemecahan Tabel",
       content: [
         { label: "Bentuk 1NF", text: "Setiap sel wajib atomik. Tidak boleh ada multivalue dalam satu kolom." },
         { label: "Bentuk 2NF", text: "Tentukan Primary Key. Hilangkan ketergantungan parsial." },
         { label: "Bentuk 3NF", text: "Tabel transaksi bebas dari atribut yang tidak bergantung langsung pada Primary Key." }
       ]
    }
  ];

  const filteredSlides = slides.filter(slide => slide.pertemuan === activeTab);
  const progress = activeIndex !== null ? ((activeIndex + 1) / filteredSlides.length) * 100 : 0;

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeIndex]);

  const handleNext = () => setActiveIndex((prev) => (prev === filteredSlides.length - 1 ? 0 : prev + 1));
  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? filteredSlides.length - 1 : prev - 1));

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* HEADER UTAMA */}
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Materi Presentasi Kelas</h2>
        <p className="text-gray-600 mt-2 text-base md:text-lg">Pilih modul pertemuan untuk memulai sesi mengajar.</p>

        {/* TABS BUTTONS */}
        <div className="flex gap-4 mt-6 bg-gray-100 p-1.5 rounded-2xl w-fit mx-auto md:mx-0 shadow-inner">
          <button
            onClick={() => { setActiveTab(1); setActiveIndex(null); }}
            className={`px-5 py-2.5 rounded-xl text-sm md:text-base font-bold transition-all ${activeTab === 1 ? 'bg-white text-blue-600 shadow-md' : 'text-gray-500 hover:text-blue-500'}`}
          >
            Pertemuan 1: ERD
          </button>
          <button
            onClick={() => { setActiveTab(2); setActiveIndex(null); }}
            className={`px-5 py-2.5 rounded-xl text-sm md:text-base font-bold transition-all ${activeTab === 2 ? 'bg-white text-teal-600 shadow-md' : 'text-gray-500 hover:text-teal-500'}`}
          >
            Pertemuan 2: Normalisasi
          </button>
        </div>
      </div>

      {/* CARD TUJUAN PEMBELAJARAN (RESPONSIF & DINAMIS) */}
      <div className={`mb-8 p-5 md:p-6 rounded-3xl text-white shadow-lg bg-gradient-to-r ${activeTab === 1 ? 'from-blue-600 to-indigo-600' : 'from-teal-600 to-emerald-600'} transition-all duration-500`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl md:text-3xl">🎯</span>
          <h3 className="text-lg md:text-xl font-extrabold tracking-wide">Tujuan Pembelajaran</h3>
        </div>
        {activeTab === 1 ? (
          <ol className="list-decimal pl-5 text-xs md:text-sm space-y-2 opacity-95 font-medium">
            <li>Peserta didik mampu menjelaskan konsep struktur hierarki basis data secara sistematis dari tingkat karakter hingga database.</li>
            <li>Peserta didik mampu menyusun Entity Relationship Diagram (ERD) menggunakan simbol standar berdasarkan studi kasus sistem informasi nyata.</li>
          </ol>
        ) : (
          <ol className="list-decimal pl-5 text-xs md:text-sm space-y-2 opacity-95 font-medium">
            <li>Peserta didik mampu menerapkan tahapan normalisasi basis data (1NF, 2NF, 3NF) pada struktur tabel yang belum normal untuk menghilangkan redundansi data.</li>
          </ol>
        )}
      </div>

      {/* GRID SLIDES LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSlides.map((slide, index) => (
          <div
            key={slide.id}
            onClick={() => setActiveIndex(index)}
            className="group bg-white border border-gray-200 rounded-3xl p-5 md:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col gap-4 relative overflow-hidden"
          >
            <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${slide.theme}`}></div>
            <div className="flex justify-between items-start">
              <div className={`text-3xl md:text-4xl p-3.5 rounded-2xl bg-gradient-to-br ${slide.theme} text-white shadow-md group-hover:scale-105 transition-transform`}>
                {slide.icon}
              </div>
              {slide.syntax && (
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 bg-gray-50 px-2 py-1 rounded-md border">
                  {slide.syntax}
                </span>
              )}
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">{slide.title}</h3>
              <p className="text-gray-500 text-xs md:text-sm line-clamp-2 leading-relaxed">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL SLIDE PRESENTASI INTERAKTIF */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 backdrop-blur-xl bg-slate-900/90 transition-all">
          <div className="bg-white w-full max-w-6xl h-[92vh] md:h-[95vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden relative">
            
            <div className={`h-1.5 w-full bg-gradient-to-r ${filteredSlides[activeIndex].theme}`}></div>
            
            {/* HEADER MODAL */}
            <div className="flex justify-between items-center py-3.5 px-5 md:px-8 border-b border-gray-100 bg-white">
              <div className="flex items-center gap-3">
                <div className={`hidden sm:flex w-9 h-9 rounded-full items-center justify-center text-white text-sm font-bold bg-gradient-to-br ${filteredSlides[activeIndex].theme}`}>
                  {activeIndex + 1}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <span className="text-[9px] md:text-[10px] font-black tracking-wider text-gray-400">
                      Slide {activeIndex + 1} / {filteredSlides.length}
                    </span>
                    {filteredSlides[activeIndex].syntax && (
                      <span className="text-[9px] md:text-[10px] font-black tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        Tahap: {filteredSlides[activeIndex].syntax}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-gray-800 line-clamp-1">{filteredSlides[activeIndex].title}</h3>
                </div>
              </div>
              <button onClick={() => setActiveIndex(null)} className="bg-gray-100 hover:bg-red-50 hover:text-red-600 text-gray-500 p-2 rounded-full transition-all">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* AREA UTAMA KONTEN MODAL (RESPONSIF SCROLL) */}
            <div ref={contentRef} className="flex-1 overflow-y-auto p-5 md:p-8 space-y-6 lg:space-y-0 bg-gray-50 flex flex-col lg:flex-row gap-6 lg:gap-10">
              
              {/* Kolom Kiri: Media Visual */}
              <div className="w-full lg:w-5/12 flex flex-col items-center justify-center bg-white rounded-2xl border border-gray-200 p-3 shadow-sm min-h-[220px] max-h-[300px] lg:max-h-none lg:h-auto overflow-hidden">
                {filteredSlides[activeIndex].image ? (
                  <img
                    src={filteredSlides[activeIndex].image}
                    alt={filteredSlides[activeIndex].title}
                    className="w-full h-full object-contain rounded-xl"
                  />
                ) : (
                  <div className="text-center space-y-3 p-4">
                    <span className="text-5xl md:text-6xl opacity-25">{filteredSlides[activeIndex].icon}</span>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                      {filteredSlides[activeIndex].imagePlaceholder || 'Pembahasan Teoretis'}
                    </p>
                  </div>
                )}
              </div>

              {/* Kolom Kanan: Poin Penjelasan Materi */}
              <div className="w-full lg:w-7/12 space-y-5">
                <div className="bg-white p-4 rounded-xl border-l-4 border-blue-500 shadow-sm">
                   <p className="text-sm md:text-base text-gray-700 font-semibold leading-relaxed italic">
                    "{filteredSlides[activeIndex].subtitle}"
                  </p>
                </div>
                
                <div className="space-y-3.5">
                  {filteredSlides[activeIndex].content.map((item, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3.5 transition-all hover:translate-x-1">
                      <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold bg-gradient-to-br ${filteredSlides[activeIndex].theme} mt-0.5`}>
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm md:text-base font-bold text-gray-800 mb-0.5">{item.label}</h4>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ACTION BAR NAVIGASI BAWAH */}
            <div className="bg-white py-4 px-6 md:px-8 border-t border-gray-200 flex justify-between items-center z-10">
              <button onClick={handlePrev} className="flex items-center gap-1.5 text-gray-500 hover:text-blue-600 text-xs md:text-sm font-bold transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
                <span>Prev</span>
              </button>
              
              <div className="flex gap-1.5">
                {filteredSlides.map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 md:w-8 bg-blue-600' : 'w-1.5 md:w-2 bg-gray-200'}`}></div>
                ))}
              </div>

              <button onClick={handleNext} className={`flex items-center gap-1.5 text-white text-xs md:text-sm font-black px-5 py-2 md:py-2.5 rounded-xl bg-gradient-to-r ${filteredSlides[activeIndex].theme} shadow-md transition-all active:scale-95`}>
                <span>Next</span>
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BahanAjar;
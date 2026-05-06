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
  
  // Materi Pertemuan 1 Diperpanjang menjadi 8 Slide untuk presentasi 45 menit
  const slides = [
    // --- PERTEMUAN 1 ---
    { 
      id: 1,
      pertemuan: 1,
      title: "Pengantar Basis Data", 
      subtitle: "Kenapa kita butuh Basis Data? Mari bayangkan aplikasi e-commerce.", 
      icon: "🚀",
      theme: "from-blue-600 to-blue-400",
      image: imgShopee,
      imagePlaceholder: "Taruh Gambar Ilustrasi Server / Aplikasi Shopee di sini",
      content: [
        { label: "Masalah Data Manual", text: "Mencatat jutaan produk dan transaksi di buku atau Excel pasti akan sangat lambat dan rawan hilang." },
        { label: "Solusi Basis Data", text: "Sistem khusus untuk menyimpan, mengelola, dan mencari data dengan super cepat." },
        { label: "Contoh Nyata", text: "Aplikasi e-commerce menyimpan jutaan riwayat belanja pengguna tanpa tumpang tindih berkat basis data yang terstruktur." }
      ]
    },
    { 
      id: 2,
      pertemuan: 1,
      title: "Mengapa Basis Data Penting?", 
      subtitle: "Apa untungnya kita capek-capek merancang basis data?", 
      icon: "⭐",
      theme: "from-yellow-500 to-amber-400",
      image: imgsecurity,
      imagePlaceholder: "Taruh Gambar Ilustrasi Kecepatan/Keamanan Data di Sini",
      content: [
        { label: "Kecepatan Akses", text: "Mencari 1 nama dari 100.000 data siswa hanya butuh waktu sekian milidetik." },
        { label: "Menghindari Redundansi", text: "Tidak ada data ganda. Nama siswa cukup diketik satu kali, tidak perlu berulang-ulang." },
        { label: "Keamanan (Security)", text: "Hanya orang yang punya akses (password) yang bisa melihat dan mengubah data." },
        { label: "Berbagi Data", text: "Satu database perpustakaan bisa diakses oleh petugas, kepala sekolah, dan siswa secara bersamaan." }
      ]
    },
    { 
      id: 3,
      pertemuan: 1,
      title: "Hierarki Data", 
      subtitle: "Data itu seperti bangunan, tersusun dari batu bata (elemen kecil) hingga menjadi rumah utuh.", 
      icon: "🏗️",
      theme: "from-cyan-500 to-teal-400",
      image: imghierarki,
      imagePlaceholder: "Taruh Gambar Piramida Hierarki Data (Karakter s/d Database) di Sini",
      content: [
        { label: "1. Karakter (Byte)", text: "Data paling dasar. Contoh: Huruf 'A' atau angka '1'." },
        { label: "2. Field (Kolom)", text: "Kumpulan karakter yang punya arti. Contoh: Kolom 'Nama' atau 'Alamat'." },
        { label: "3. Record (Baris)", text: "Satu set informasi utuh. Contoh: Data lengkap 1 orang siswa (NISN, Nama, Kelas)." },
        { label: "4. Tabel / File", text: "Kumpulan banyak baris data. Contoh: Tabel Siswa, Tabel Guru." },
        { label: "5. Database", text: "Kumpulan berbagai tabel yang saling terhubung membentuk sistem informasi." }
      ]
    },
    { 
      id: 4,
      pertemuan: 1,
      title: "Mengenal ERD", 
      subtitle: "Sebelum ngoding, arsitek data wajib menggambar cetak biru (Blueprint) sistemnya.", 
      icon: "🗺️",
      theme: "from-purple-500 to-indigo-500",
      image: imgerd,
      imagePlaceholder: "Taruh Gambar Penjelasan Simbol ERD di Sini",
      content: [
        { label: "Apa itu ERD?", text: "Entity Relationship Diagram: Model visual untuk melihat struktur dan hubungan antar data." },
        { label: "Entitas (Persegi Panjang)", text: "Kata benda/objek utamanya. Contoh: 'Siswa', 'Buku', 'Guru'." },
        { label: "Atribut (Elips/Oval)", text: "Keterangan/sifat dari entitas. Contoh atribut Siswa: 'Nama', 'Kelas', 'Alamat'." },
        { label: "Relasi (Belah Ketupat)", text: "Kata kerja yang menghubungkan antar entitas. Contoh: 'Meminjam', 'Membeli'." }
      ]
    },
    { 
      id: 5,
      pertemuan: 1,
      title: "Mengenal Primary Key", 
      subtitle: "Setiap entitas harus punya satu atribut 'Super' yang membedakannya dari yang lain.", 
      icon: "🔑",
      theme: "from-orange-500 to-red-500",
      image: imgktm,
      imagePlaceholder: "Taruh Gambar Ilustrasi KTP / NIM (Primary Key) di Sini",
      content: [
        { label: "Apa itu Primary Key?", text: "Kunci utama. Atribut unik yang tidak mungkin sama antara satu orang dengan orang lainnya." },
        { label: "Contoh di Kehidupan Nyata", text: "Di tabel Penduduk, namanya bisa sama-sama 'Budi', tapi NIK (Nomor KTP)-nya pasti berbeda." },
        { label: "Contoh di Sekolah", text: "Di tabel Siswa, Primary Key-nya adalah NISN. Di tabel Buku, kuncinya adalah ID_Buku atau ISBN." },
        { label: "Aturan Wajib", text: "Primary Key tidak boleh kosong (NULL) dan tidak boleh ada yang kembar." }
      ]
    },
    { 
      id: 6,
      pertemuan: 1,
      title: "Kardinalitas Relasi", 
      subtitle: "Seberapa banyak data dari Entitas A boleh terhubung ke Entitas B?", 
      icon: "🔀",
      theme: "from-pink-500 to-rose-400",
      image: imgkardinalitas,
      imagePlaceholder: "Taruh Gambar Ilustrasi 1:1, 1:N, N:M (Panah/Garis) di Sini",
      content: [
        { label: "One-to-One (1:1)", text: "Satu hanya boleh milih satu. Contoh: 1 Siswa hanya boleh memiliki 1 Nomor Bangku Ujian." },
        { label: "One-to-Many (1:N)", text: "Satu bisa milih banyak. Contoh: 1 Wali Kelas membimbing Banyak Siswa." },
        { label: "Many-to-Many (N:M)", text: "Banyak bisa milih banyak. Contoh: Banyak Siswa bisa meminjam Banyak Buku." }
      ]
    },
    { 
      id: 7,
      pertemuan: 1,
      title: "Studi Kasus: Sistem Kasir", 
      subtitle: "Mari kita analisis rancangan ERD transaksi penjualan di sebuah minimarket.", 
      icon: "🛒",
      theme: "from-emerald-600 to-teal-500",
      image: imgerdjadi, // <--- Ini akan memanggil gambar erdjadi.png milikmu
      imagePlaceholder: "Gambar ERD Kasir",
      content: [
        { label: "Identifikasi Entitas", text: "Terdapat dua objek utama (persegi panjang) yaitu 'KASIR' dan 'BARANG'." },
        { label: "Identifikasi Relasi", text: "Kata kerja yang menghubungkan keduanya adalah 'JUAL' (belah ketupat), mewakili kejadian transaksi." },
        { label: "Primary Key (Kunci Utama)", text: "Atribut unik untuk Kasir adalah 'NOPEG' (Nomor Pegawai). Sedangkan untuk Barang adalah 'KD_BRG' (Kode Barang)." },
        { label: "Atribut Transaksi", text: "Perhatikan relasi 'JUAL'. Relasi ini punya atributnya sendiri seperti 'NO_KWI' (Nomor Kuitansi) dan 'TTL_BYR' (Total Bayar) karena data ini baru muncul saat transaksi terjadi." }
      ]
    },
    { 
      id: 8,
      pertemuan: 1,
      title: "Aktivitas Kelompok (LKPD)", 
      subtitle: "Waktunya kalian yang menjadi Arsitek Data!", 
      icon: "🎯",
      theme: "from-blue-700 to-indigo-600",
      image: imgdiskusi,
      imagePlaceholder: "Taruh Gambar Ilustrasi Diskusi Kelompok di Sini",
      content: [
        { label: "Buka Tab LKPD", text: "Pilih menu Pertemuan 1 di aplikasi ModulKite." },
        { label: "Analisis Masalah", text: "Baca skenario peminjaman buku perpustakaan yang ada di sana." },
        { label: "Rancang ERD", text: "Gunakan kanvas interaktif untuk menambahkan Entitas, Atribut, dan Relasi. Tarik garisnya dan tentukan kardinalitasnya!" },
        { label: "Presentasikan", text: "Kelompok dengan desain ERD paling rapi dan logis akan mempresentasikan hasilnya." }
      ]
    },

    // --- PERTEMUAN 2 ---
    { 
      id: 9,
      pertemuan: 2,
      title: "Bahaya Redundansi", 
      subtitle: "Mengapa menyimpan data berulang itu buruk?", 
      icon: "⚠️",
      theme: "from-red-500 to-orange-400",
      imagePlaceholder: "Taruh Gambar Ilustrasi Struk Belanja Berantakan (UNF) di Sini",
      content: [
        { label: "Boros Memori", text: "Penyimpanan cepat penuh karena data ganda." },
        { label: "Anomali Update", text: "Ubah satu nama, tapi harus ngedit di ribuan baris." }
      ]
    },
    { 
      id: 10,
      pertemuan: 2,
      title: "Tahapan Normalisasi", 
      subtitle: "Seni merapikan tabel agar efisien dan bebas error.", 
      icon: "✨",
      theme: "from-emerald-500 to-teal-400",
      imagePlaceholder: "Taruh Gambar Proses Pemecahan Tabel di Sini",
      content: [
        { label: "Bentuk 1NF", text: "Setiap sel wajib atomik." },
        { label: "Bentuk 2NF", text: "Tentukan Primary Key." }
      ]
    }
  ];

  const filteredSlides = slides.filter(slide => slide.pertemuan === activeTab);

  const progress = activeIndex !== null
    ? ((activeIndex + 1) / filteredSlides.length) * 100
    : 0;

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeIndex]);

  const handleNext = () => setActiveIndex((prev) => (prev === filteredSlides.length - 1 ? 0 : prev + 1));
  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? filteredSlides.length - 1 : prev - 1));

  return (
    <div className="p-4 max-w-7xl mx-auto">
      
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-4xl font-black text-gray-900 tracking-tight">Materi Presentasi Kelas</h2>
        <p className="text-gray-600 mt-3 text-lg">Pilih modul pertemuan untuk memulai sesi mengajar.</p>
        
        <div className="flex gap-4 mt-8 bg-gray-100 p-2 rounded-2xl w-fit mx-auto md:mx-0 shadow-inner">
          <button 
            onClick={() => {setActiveTab(1); setActiveIndex(null);}}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 1 ? 'bg-white text-blue-600 shadow-md' : 'text-gray-500 hover:text-blue-500'}`}
          >
            Pertemuan 1: ERD
          </button>
          <button 
            onClick={() => {setActiveTab(2); setActiveIndex(null);}}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 2 ? 'bg-white text-teal-600 shadow-md' : 'text-gray-500 hover:text-teal-500'}`}
          >
            Pertemuan 2: Normalisasi
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredSlides.map((slide, index) => (
          <div 
            key={slide.id} 
            onClick={() => setActiveIndex(index)}
            className="group bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col md:flex-row items-center text-center md:text-left gap-6 relative overflow-hidden"
          >
            <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${slide.theme}`}></div>
            <div className={`text-5xl p-5 rounded-3xl bg-gradient-to-br ${slide.theme} bg-opacity-10 text-white shadow-inner group-hover:scale-110 transition-transform duration-300`}>
              {slide.icon}
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{slide.title}</h3>
              <p className="text-gray-500 mb-4 text-sm md:text-base">{slide.subtitle}</p>
              <button className={`text-sm text-white font-bold py-2 px-5 rounded-full bg-gradient-to-r ${slide.theme} opacity-90 hover:opacity-100 transition-opacity`}>
                Buka Slide
              </button>
            </div>
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 backdrop-blur-lg bg-slate-900/90 transition-all">
          
          {/* TINGGI MODAL MAKSIMAL (h-[95vh]) AGAR LEGA */}
          <div className="bg-white w-full max-w-6xl h-[95vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up relative border border-gray-200">
            
            <div className={`h-2 w-full bg-gradient-to-r ${filteredSlides[activeIndex].theme}`}></div>
            <div className="w-full bg-gray-200 h-1">
              <div className="bg-blue-600 h-1 transition-all duration-300" style={{ width: `${progress}%` }}></div>
            </div>
            
            {/* BEZEL ATAS DITIPISKAN: padding dikurangi dari p-6 jadi py-3 px-6, text diperkecil sedikit */}
            <div className="flex justify-between items-center py-3 px-6 border-b border-gray-100 bg-white">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{filteredSlides[activeIndex].icon}</span>
                <div>
                  <span className="text-[10px] font-black tracking-widest uppercase text-gray-400">Pertemuan {activeTab} • Slide {activeIndex + 1} / {filteredSlides.length}</span>
                  <h3 className="text-xl font-black text-gray-800">{filteredSlides[activeIndex].title}</h3>
                </div>
              </div>
              <button 
                onClick={() => setActiveIndex(null)}
                className="bg-gray-100 hover:bg-red-50 hover:text-red-600 text-gray-500 p-2 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* AREA KONTEN LEBIH LUAS: padding dikurangi */}
            <div ref={contentRef} className="flex-1 overflow-y-auto p-4 md:p-6 scroll-smooth bg-gray-50 flex flex-col lg:flex-row gap-6 items-start">
              
              {/* Kolom Kiri: Gambar */}
<div className="w-full lg:w-5/12 lg:sticky lg:top-0 flex flex-col items-center justify-center bg-gray-50 rounded-2xl border border-gray-200 p-2 min-h-[250px] lg:h-[350px] overflow-hidden shadow-sm">
  {filteredSlides[activeIndex].image ? (
    /* JIKA GAMBAR ADA, TAMPILKAN GAMBARNYA */
    <img 
      src={filteredSlides[activeIndex].image} 
      alt={filteredSlides[activeIndex].title} 
      className="w-full h-full object-contain rounded-xl hover:scale-105 transition-transform duration-500"
    />
  ) : (
    /* JIKA GAMBAR BELUM ADA, TAMPILKAN TEKS PLACEHOLDER SEPERTI SEBELUMNYA */
    <>
      <span className="text-5xl mb-3 text-gray-400">🖼️</span>
      <p className="text-gray-500 font-bold text-center text-sm px-4">{filteredSlides[activeIndex].imagePlaceholder}</p>
    </>
  )}
</div>

              {/* Kolom Kanan: Teks Materi */}
              <div className="w-full lg:w-7/12 flex flex-col justify-start">
                <p className="text-base text-gray-600 mb-6 font-medium leading-relaxed border-l-4 border-blue-500 pl-4">
                  {filteredSlides[activeIndex].subtitle}
                </p>
                
                <div className="space-y-4">
                  {filteredSlides[activeIndex].content.map((item, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3 hover:shadow-md transition-shadow">
                      <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold bg-gradient-to-br ${filteredSlides[activeIndex].theme}`}>
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-800 mb-1">{item.label}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* BEZEL BAWAH DITIPISKAN */}
            <div className="bg-white py-4 px-6 border-t border-gray-200 flex justify-between items-center z-10">
              <button 
                onClick={handlePrev}
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-bold px-3 py-2 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                <span>&larr;</span> Prev
              </button>
              
              <button 
                onClick={handleNext}
                className={`flex items-center gap-2 text-white font-bold px-6 py-2.5 rounded-xl bg-gradient-to-r ${filteredSlides[activeIndex].theme} shadow-md hover:opacity-90 transition-opacity transform hover:-translate-y-0.5 text-sm`}
              >
                Next Slide <span>&rarr;</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default BahanAjar;
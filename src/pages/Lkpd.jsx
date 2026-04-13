import { useState, useRef } from 'react';

const Lkpd = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [showRubrik, setShowRubrik] = useState(false);
  const [resultModal, setResultModal] = useState({ show: false, type: '', score: 0, message: '' });

  // --- STATE IDENTITAS ---
  const [identity, setIdentity] = useState({ kelompok: '', kelas: '', anggota1: '' });

  // --- STATE DATA JAWABAN ---
  const [erdRows, setErdRows] = useState([{ id: 1, entitas: '', pk: '' }]);
  const [nf1Rows, setNf1Rows] = useState([{ id: 1, no: '', tgl: '', pasien: '', dokter: '', obat: '' }]);
  const [kesimpulan, setKesimpulan] = useState('');

  // --- HELPER ---
  const addRow = (setter, state, template) => setter([...state, { id: Date.now(), ...template }]);
  const updateRow = (setter, state, id, field, value) => {
    setter(state.map(row => row.id === id ? { ...row, [field]: value } : row));
  };

  const validateAndSubmit = (type) => {
    if (!identity.kelompok || !identity.anggota1) {
      alert("⚠️ Mohon lengkapi identitas kelompok terlebih dahulu!");
      return;
    }
    const score = kesimpulan.length > 20 ? 100 : 80;
    setResultModal({ 
      show: true, 
      type, 
      score, 
      message: score === 100 ? "Luar biasa! Analisis kelompokmu sangat tajam dan sistematis." : "Bagus! Jawaban diterima, namun perkuat lagi di bagian kesimpulan."
    });
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 font-sans text-gray-800">
      {/* HEADER */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-black text-gray-900 tracking-tight uppercase">LKPD Interaktif</h2>
        <p className="text-blue-600 font-bold tracking-widest mt-2">MODEL: DISCOVERY LEARNING</p>
      </div>

      {/* SECTION 1: IDENTITAS & ALAT BAHAN */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        {/* Identitas Siswa */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border p-8 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="font-bold flex items-center gap-2 text-xl text-gray-800">
              <span className="bg-blue-100 p-2 rounded-xl text-2xl">👥</span> Identitas Siswa
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Nama Kelompok *" value={identity.kelompok} onChange={(e) => setIdentity({...identity, kelompok: e.target.value})} className="w-full border-b-2 p-3 outline-none focus:border-blue-500 transition-all bg-gray-50 focus:bg-white rounded-t-lg" />
                <input type="text" placeholder="Nama Ketua/Anggota 1 *" value={identity.anggota1} onChange={(e) => setIdentity({...identity, anggota1: e.target.value})} className="w-full border-b-2 p-3 outline-none focus:border-blue-500 transition-all bg-gray-50 focus:bg-white rounded-t-lg" />
            </div>
          </div>
        </div>

        {/* Alat & Bahan (Sarana Prasarana) */}
        <div className="bg-gray-900 rounded-3xl p-8 text-white shadow-xl flex flex-col">
          <h3 className="font-bold flex items-center gap-2 text-xl mb-4 text-blue-400">
            <span>🛠️</span> Alat & Bahan
          </h3>
          <ul className="text-sm space-y-3 opacity-90">
            <li className="flex gap-3 items-start font-medium">
              <span className="text-green-400">✓</span> Perangkat Laptop/PC
            </li>
            <li className="flex gap-3 items-start font-medium">
              <span className="text-green-400">✓</span> Koneksi Internet Stabil
            </li>
            <li className="flex gap-3 items-start font-medium">
              <span className="text-green-400">✓</span> Web Browser (Chrome/Edge)
            </li>
            <li className="flex gap-3 items-start font-medium">
              <span className="text-green-400">✓</span> Aplikasi Draw.io / Kertas & Alat Tulis (untuk ERD)
            </li>
          </ul>
        </div>
      </div>

      {/* NAV TAB & RUBRIK */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="bg-gray-100 p-1.5 rounded-2xl flex gap-2 shadow-inner">
            <button onClick={() => setActiveTab(1)} className={`px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 1 ? 'bg-white text-blue-600 shadow-md' : 'text-gray-500 hover:text-blue-500'}`}>Pertemuan 1: ERD</button>
            <button onClick={() => setActiveTab(2)} className={`px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 2 ? 'bg-white text-teal-600 shadow-md' : 'text-gray-500 hover:text-teal-500'}`}>Pertemuan 2: Normalisasi</button>
        </div>
        <button onClick={() => setShowRubrik(!showRubrik)} className="ml-auto px-6 py-3 rounded-xl font-bold bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 transition-colors">
            {showRubrik ? '× Tutup Rubrik' : '🔍 Lihat Rubrik Penilaian'}
          </button>
      </div>

      {/* RUBRIK SECTION */}
      {showRubrik && (
        <div className="bg-amber-50 border-2 border-amber-100 rounded-3xl p-8 mb-10 animate-fade-in">
          <h4 className="text-xl font-black text-amber-800 mb-4">📊 Kriteria Penilaian (Rubrik)</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-amber-200">
              <p className="font-bold text-amber-600 text-lg">Skor 90-100</p>
              <p className="text-sm text-gray-600 mt-2">Seluruh entitas, PK, dan tahapan normalisasi hingga 3NF dilakukan dengan benar dan logis.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-amber-200">
              <p className="font-bold text-amber-600 text-lg">Skor 75-89</p>
              <p className="text-sm text-gray-600 mt-2">Mampu melakukan normalisasi namun masih terdapat kesalahan minor pada penentuan Foreign Key.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-amber-200">
              <p className="font-bold text-amber-600 text-lg">Skor &lt; 75</p>
              <p className="text-sm text-gray-600 mt-2">Identifikasi entitas tidak lengkap atau proses normalisasi berhenti di tahap 1NF saja.</p>
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTENT PERTAB */}
      {activeTab === 1 ? (
        <div className="space-y-8 animate-fade-in">
          {/* TAHAP 1: STIMULATION */}
          <div className="bg-white border-l-8 border-blue-600 p-8 rounded-3xl shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 text-[10px] font-black rounded-full uppercase tracking-widest">Sintaks 1: Stimulation</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Identifikasi Masalah Basis Data</h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
                Amati skenario berikut: Di sebuah perpustakaan, petugas mencatat data buku yang dipinjam secara manual dalam satu baris. Jika seorang anggota meminjam 5 buku, petugas menuliskan kelima judul buku tersebut dalam satu kolom "Judul Buku" yang dipisahkan koma. 
                <br /><br />
                <strong className="text-gray-800 font-bold italic">Pertanyaan: Bagaimana cara sistem mencari satu judul buku tertentu jika datanya digabung seperti itu?</strong>
            </p>
          </div>

          {/* TAHAP 4: DATA PROCESSING */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-[10px] font-black rounded-full uppercase tracking-widest">Sintaks 4: Data Processing</span>
            <h4 className="text-xl font-bold text-gray-800 mt-4 mb-6">Kegiatan: Pemodelan Entitas & Atribut</h4>
            
            <div className="overflow-x-auto">
                <table className="w-full text-sm mb-4">
                <thead className="bg-blue-600 text-white">
                    <tr><th className="p-4 rounded-tl-xl text-left">Nama Entitas</th><th className="p-4 text-left">Atribut Kunci (Primary Key)</th><th className="p-4 rounded-tr-xl w-10">x</th></tr>
                </thead>
                <tbody className="bg-gray-50">
                    {erdRows.map(row => (
                    <tr key={row.id}>
                        <td className="p-2 border"><input type="text" placeholder="Contoh: Buku" className="w-full p-2 border-none bg-transparent outline-none focus:ring-1 focus:ring-blue-500 rounded" /></td>
                        <td className="p-2 border"><input type="text" placeholder="Contoh: ID_Buku" className="w-full p-2 border-none bg-transparent outline-none focus:ring-1 focus:ring-blue-500 rounded" /></td>
                        <td className="p-2 border text-center"><button onClick={() => removeRow(setErdRows, erdRows, row.id)} className="text-red-400 font-bold hover:text-red-600 transition-colors">✖</button></td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            <button onClick={() => addRow(setErdRows, erdRows, {entitas:'', pk:''})} className="bg-blue-600 text-white text-xs font-bold px-6 py-2 rounded-full hover:bg-blue-700 transition-all">+ Tambah Baris</button>
          </div>

          {/* TAHAP 6: GENERALIZATION */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-[10px] font-black rounded-full uppercase tracking-widest">Sintaks 6: Generalization</span>
            <h4 className="text-xl font-bold text-gray-800 mt-4 mb-4">Kesimpulan Akhir</h4>
            <textarea value={kesimpulan} onChange={(e) => setKesimpulan(e.target.value)} placeholder="Berdasarkan hasil diskusi, apa kegunaan utama dari Primary Key dalam sebuah tabel basis data?" className="w-full h-32 p-5 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all"></textarea>
          </div>

          <button onClick={() => validateAndSubmit('ERD')} className="w-full bg-blue-600 text-white font-black py-5 rounded-3xl shadow-xl hover:scale-[1.01] transition-all">Selesaikan & Lihat Nilai</button>
        </div>
      ) : (
        <div className="p-10 text-center bg-white rounded-3xl border border-dashed border-gray-300">
            <p className="text-gray-400 italic">Bagian Pertemuan 2 (Normalisasi) menyusul dengan alur Discovery Learning yang sama.</p>
        </div>
      )}

      {/* RESULT MODAL */}
      {resultModal.show && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-all">
          <div className="bg-white w-full max-w-sm rounded-[3rem] p-12 text-center animate-bounce-in shadow-2xl">
            <p className="text-gray-400 font-bold uppercase tracking-widest mb-2 text-sm italic">{identity.kelompok}</p>
            <h1 className={`text-8xl font-black mb-6 ${resultModal.score >= 90 ? 'text-green-500' : 'text-blue-600'}`}>{resultModal.score}</h1>
            <p className="text-gray-600 font-medium mb-10 leading-relaxed">{resultModal.message}</p>
            <button onClick={() => setResultModal({...resultModal, show: false})} className="w-full bg-gray-900 text-white font-bold py-4 rounded-2xl shadow-lg active:scale-95 transition-all">Tutup Evaluasi</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lkpd;
import { useState } from 'react';

const Lkpd = () => {
  const [activePertemuan, setActivePertemuan] = useState('1');
  const [showRubrik, setShowRubrik] = useState(false);
  const [identity, setIdentity] = useState({ kelompok: '', anggota: '' });
  const [erdRows, setErdRows] = useState([{ id: 1, entitas: '', pk: '' }]);
  const [kesimpulan, setKesimpulan] = useState('');
  const [jawaban1Nf, setJawaban1Nf] = useState('');
  const [jawaban2Nf, setJawaban2Nf] = useState('');
  const [jawaban3Nf, setJawaban3Nf] = useState('');
  const [resultModal, setResultModal] = useState({ show: false, score: 0, message: '' });

  const addRow = () => setErdRows([...erdRows, { id: Date.now(), entitas: '', pk: '' }]);
  
  const updateRow = (id, field, value) => {
    setErdRows(erdRows.map(row => row.id === id ? { ...row, [field]: value } : row));
  };
  
  const removeRow = (id) => {
    setErdRows(erdRows.filter(row => row.id !== id));
  };

  const submitTugas = () => {
    if (!identity.kelompok || !identity.anggota) {
      alert('Mohon lengkapi identitas kelompok dan nama anggota terlebih dahulu!');
      return;
    }

    let score = 0;
    let message = '';

    if (activePertemuan === '1') {
      if (erdRows.length > 1 && erdRows[0].entitas !== '') score += 50;
      if (kesimpulan.length > 20) score += 50;
    } else {
      if (jawaban1Nf.length > 10) score += 30;
      if (jawaban2Nf.length > 10) score += 30;
      if (jawaban3Nf.length > 10) score += 40;
    }

    if (score >= 90) {
      message = 'Luar biasa! Analisis sistem dan dekomposisi kelompokmu sangat tajam dan sistematis.';
    } else if (score >= 70) {
      message = 'Bagus! Jawaban diterima dengan baik, namun perkuat lagi analisis pada studi kasus.';
    } else {
      message = 'Tugas berhasil dikumpulkan. Mari pelajari kembali materi pada modul yang diberikan.';
    }
    
    setResultModal({ show: true, score, message });
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="w-full max-w-5xl mx-auto px-4">
        
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-1">Lembar Kerja Peserta Didik (LKPD)</h2>
              <p className="text-gray-500 text-sm">Silakan lengkapi identitas kelompok sebelum memulai pengerjaan tugas.</p>
            </div>
            <button
              onClick={() => setShowRubrik(!showRubrik)}
              className="px-5 py-2.5 rounded-xl font-bold bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 transition-colors shadow-sm text-sm whitespace-nowrap"
            >
              {showRubrik ? 'Tutup Rubrik' : 'Lihat Rubrik Penilaian'}
            </button>
          </div>

          {showRubrik && (
            <div className="bg-white border-2 border-amber-100 rounded-2xl p-5 mb-6 shadow-sm animate-in fade-in duration-300">
              <h4 className="text-base font-bold text-amber-800 mb-4">Kriteria Penilaian (Rubrik)</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                  <p className="font-black text-amber-700 text-lg mb-2">Skor 90-100</p>
                  <p className="text-sm text-gray-700 leading-relaxed">Seluruh entitas, PK, dan tahapan normalisasi hingga 3NF dikerjakan dengan benar dan logis.</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                  <p className="font-black text-amber-700 text-lg mb-2">Skor 70-89</p>
                  <p className="text-sm text-gray-700 leading-relaxed">Mampu melakukan normalisasi namun terdapat kesalahan minor pada relasi atau penentuan Foreign Key.</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                  <p className="font-black text-amber-700 text-lg mb-2">Skor &lt; 70</p>
                  <p className="text-sm text-gray-700 leading-relaxed">Identifikasi tidak lengkap atau proses normalisasi berhenti di tahap 1NF saja.</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Nama Kelompok *"
              value={identity.kelompok}
              onChange={(e) => setIdentity({ ...identity, kelompok: e.target.value })}
              className="w-full border-b-2 border-slate-200 p-3 outline-none focus:border-blue-500 transition-all bg-slate-50 rounded-t-lg text-gray-800 text-sm font-medium"
            />
            <input
              type="text"
              placeholder="Nama Anggota Kelompok *"
              value={identity.anggota}
              onChange={(e) => setIdentity({ ...identity, anggota: e.target.value })}
              className="w-full border-b-2 border-slate-200 p-3 outline-none focus:border-blue-500 transition-all bg-slate-50 rounded-t-lg text-gray-800 text-sm font-medium"
            />
          </div>
        </div>

        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActivePertemuan('1')}
            className={`flex-1 py-4 font-bold rounded-xl transition-all ${activePertemuan === '1' ? 'bg-emerald-600 text-white shadow-md' : 'bg-white text-gray-500 hover:bg-emerald-50 border border-gray-200'}`}
          >
            Pertemuan 1: ERD
          </button>
          <button
            onClick={() => setActivePertemuan('2')}
            className={`flex-1 py-4 font-bold rounded-xl transition-all ${activePertemuan === '2' ? 'bg-purple-600 text-white shadow-md' : 'bg-white text-gray-500 hover:bg-purple-50 border border-gray-200'}`}
          >
            Pertemuan 2: Normalisasi
          </button>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
          {activePertemuan === '1' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl">
                <h3 className="font-bold text-emerald-800 mb-3 text-lg">Aturan & Langkah Pengerjaan ERD</h3>
                <ul className="space-y-2 text-emerald-900 text-sm">
                  <li className="flex gap-2"><span className="font-black">•</span> Baca dengan teliti skenario sistem perpustakaan yang diberikan.</li>
                  <li className="flex gap-2"><span className="font-black">•</span> Ekstrak dan identifikasi entitas utama dari skenario tersebut ke dalam tabel.</li>
                  <li className="flex gap-2"><span className="font-black">•</span> Tentukan Primary Key (PK) yang paling unik dan mewakili masing-masing entitas.</li>
                  <li className="flex gap-2"><span className="font-black">•</span> Pada bagian akhir, tuliskan kesimpulan kardinalitas beserta alasan logisnya.</li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                <h4 className="font-black text-gray-800 mb-2">Skenario Perpustakaan "Cahaya Ilmu"</h4>
                <p className="text-gray-600 italic text-sm leading-relaxed">
                  Perpustakaan memiliki koleksi buku (Kode Buku unik, Judul, Pengarang). Perpustakaan melayani siswa (NISN, Nama, Kelas). Aturan menyatakan satu siswa diperbolehkan meminjam banyak buku, dan satu judul buku bisa dipinjam oleh banyak siswa secara bergantian.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-emerald-800 mb-3">Tabel Identifikasi Entitas & Atribut</h4>
                <div className="border border-emerald-100 rounded-xl overflow-hidden">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-emerald-600 text-white">
                      <tr>
                        <th className="p-4 font-semibold">Nama Entitas</th>
                        <th className="p-4 font-semibold">Primary Key</th>
                        <th className="p-4 w-16 text-center font-semibold">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                      {erdRows.map(row => (
                        <tr key={row.id}>
                          <td className="p-2">
                            <input
                              type="text"
                              value={row.entitas}
                              onChange={(e) => updateRow(row.id, 'entitas', e.target.value)}
                              placeholder="Contoh: Entitas Buku"
                              className="w-full p-2 outline-none focus:bg-emerald-50 rounded text-gray-700"
                            />
                          </td>
                          <td className="p-2">
                            <input
                              type="text"
                              value={row.pk}
                              onChange={(e) => updateRow(row.id, 'pk', e.target.value)}
                              placeholder="Contoh: ID_Buku"
                              className="w-full p-2 outline-none focus:bg-emerald-50 rounded text-gray-700"
                            />
                          </td>
                          <td className="p-2 text-center">
                            <button
                              onClick={() => removeRow(row.id)}
                              className="text-red-400 font-bold hover:text-red-600 transition-colors p-2"
                            >
                              ✖
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button
                  onClick={addRow}
                  className="mt-4 bg-emerald-100 text-emerald-700 font-bold px-5 py-2 rounded-lg hover:bg-emerald-200 transition-all text-sm"
                >
                  + Tambah Baris Entitas
                </button>
              </div>

              <div>
                <label className="block text-emerald-900 font-bold mb-3">Kesimpulan Relasi & Kardinalitas</label>
                <textarea
                  value={kesimpulan}
                  onChange={(e) => setKesimpulan(e.target.value)}
                  placeholder="Tuliskan kesimpulan mengenai kardinalitas relasi yang terbentuk berdasarkan skenario di atas..."
                  className="w-full h-32 p-4 border-2 border-emerald-100 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 text-gray-700 text-sm resize-none"
                ></textarea>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <button
                  onClick={submitTugas}
                  className="w-full bg-emerald-600 text-white font-black py-4 rounded-xl shadow-lg hover:bg-emerald-700 hover:shadow-xl transition-all"
                >
                  Kumpulkan Tugas Pertemuan 1
                </button>
              </div>
            </div>
          )}

          {activePertemuan === '2' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="bg-purple-50 border border-purple-200 p-5 rounded-2xl">
                <h3 className="font-bold text-purple-800 mb-3 text-lg">Aturan & Langkah Pengerjaan Normalisasi</h3>
                <ul className="space-y-2 text-purple-900 text-sm">
                  <li className="flex gap-2"><span className="font-black">•</span> Analisis bentuk tabel Unnormalized Form (UNF) di bawah yang masih memiliki data ganda.</li>
                  <li className="flex gap-2"><span className="font-black">•</span> <b>1NF:</b> Dekomposisi tabel agar setiap kolom bernilai atomik (tunggal).</li>
                  <li className="flex gap-2"><span className="font-black">•</span> <b>2NF:</b> Pastikan tabel sudah 1NF, lalu hilangkan kebergantungan parsial dengan memisahkan tabel jika diperlukan.</li>
                  <li className="flex gap-2"><span className="font-black">•</span> <b>3NF:</b> Pastikan tabel sudah 2NF, lalu hilangkan kebergantungan transitif dan tentukan Foreign Key.</li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl overflow-x-auto">
                <h4 className="font-black text-gray-800 mb-4">Tabel Kasus Klinik (Bentuk UNF)</h4>
                <table className="w-full text-sm text-left border-collapse min-w-150">
                  <thead>
                    <tr className="bg-purple-100 text-purple-900">
                      <th className="p-3 border border-purple-200">No_Rawat</th>
                      <th className="p-3 border border-purple-200">Tgl_Periksa</th>
                      <th className="p-3 border border-purple-200">ID_Pasien</th>
                      <th className="p-3 border border-purple-200">Nama_Pasien</th>
                      <th className="p-3 border border-purple-200">Resep_Obat (Multivalue)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white text-gray-600">
                    <tr>
                      <td className="p-3 border border-purple-100">RWT-001</td>
                      <td className="p-3 border border-purple-100">12/10/2023</td>
                      <td className="p-3 border border-purple-100">PSN-10</td>
                      <td className="p-3 border border-purple-100">Andi Saputra</td>
                      <td className="p-3 border border-purple-100">Paracetamol, Amoxicillin</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-purple-900 font-bold mb-2">Bentuk Normal Pertama (1NF)</label>
                  <textarea
                    value={jawaban1Nf}
                    onChange={(e) => setJawaban1Nf(e.target.value)}
                    placeholder="Deskripsikan struktur kolom setelah diubah menjadi 1NF..."
                    className="w-full h-28 p-4 border-2 border-purple-100 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-50 text-gray-700 text-sm resize-none"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-purple-900 font-bold mb-2">Bentuk Normal Kedua (2NF)</label>
                  <textarea
                    value={jawaban2Nf}
                    onChange={(e) => setJawaban2Nf(e.target.value)}
                    placeholder="Tuliskan nama tabel hasil pemecahan 2NF beserta isian kolomnya..."
                    className="w-full h-28 p-4 border-2 border-purple-100 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-50 text-gray-700 text-sm resize-none"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-purple-900 font-bold mb-2">Bentuk Normal Ketiga (3NF)</label>
                  <textarea
                    value={jawaban3Nf}
                    onChange={(e) => setJawaban3Nf(e.target.value)}
                    placeholder="Tuliskan hasil akhir struktur tabel 3NF beserta penentuan Foreign Key-nya..."
                    className="w-full h-32 p-4 border-2 border-purple-100 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-50 text-gray-700 text-sm resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <button
                  onClick={submitTugas}
                  className="w-full bg-purple-600 text-white font-black py-4 rounded-xl shadow-lg hover:bg-purple-700 hover:shadow-xl transition-all"
                >
                  Kumpulkan Tugas Pertemuan 2
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {resultModal.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-3xl p-8 text-center shadow-2xl">
            <p className="text-gray-400 font-bold uppercase tracking-widest mb-2 text-xs">Kelompok: {identity.kelompok}</p>
            <h1 className={`text-7xl font-black mb-4 ${resultModal.score >= 90 ? 'text-green-500' : 'text-blue-600'}`}>
              {resultModal.score}
            </h1>
            <p className="text-gray-700 font-medium mb-8 leading-relaxed">
              {resultModal.message}
            </p>
            <button
              onClick={() => setResultModal({ ...resultModal, show: false })}
              className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-slate-800 transition-all"
            >
              Tutup Evaluasi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lkpd;
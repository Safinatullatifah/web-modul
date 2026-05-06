import { useState, useRef } from 'react';

const Lkpd = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [showRubrik, setShowRubrik] = useState(false);
  const [badge, setBadge] = useState("");
  const [resultModal, setResultModal] = useState({ show: false, type: '', score: 0, message: '' });
  
  // --- STATE IDENTITAS ---
  const [identity, setIdentity] = useState({ kelompok: '', kelas: '', anggota1: '' });
  
  // --- STATE LKPD LAINNYA ---
  const [kesimpulan, setKesimpulan] = useState('');

  // ==========================================
  // STATE & FUNGSI UNTUK ERD BUILDER (KANVAS)
  // ==========================================
  const [erdNodes, setErdNodes] = useState([]);
  const [erdLines, setErdLines] = useState([]);
  
  // State untuk interaksi kanvas
  const [connectMode, setConnectMode] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const dragRef = useRef({ isDragging: false, id: null, startX: 0, startY: 0, nodeX: 0, nodeY: 0 });

  // Fungsi Tambah Node
  const addNode = (type) => {
    const newNode = {
      id: 'node_' + Date.now(),
      type: type,
      text: type === 'entity' ? 'Entitas Baru' : type === 'attribute' ? 'Atribut Baru' : 'Relasi',
      x: 50 + Math.random() * 50, // Muncul acak sedikit biar gak numpuk
      y: 50 + Math.random() * 50
    };
    setErdNodes([...erdNodes, newNode]);
  };

  // Fungsi Hapus Node
  const deleteNode = (id) => {
    setErdNodes(erdNodes.filter(n => n.id !== id));
    setErdLines(erdLines.filter(l => l.from !== id && l.to !== id));
  };

  // Fungsi Drag and Drop Node
  const handlePointerDown = (e, node) => {
    if (connectMode) {
      // Logika kalau lagi mode tarik garis
      if (!selectedNodeId) {
        setSelectedNodeId(node.id); // Pilih node pertama
      } else {
        if (selectedNodeId !== node.id) {
          // Pilih node kedua dan buat garis
          const cardinality = window.prompt("Masukkan Kardinalitas (contoh: 1:1, 1:N, M:N):", "1:N");
          if (cardinality !== null) {
            setErdLines([...erdLines, { id: 'line_' + Date.now(), from: selectedNodeId, to: node.id, label: cardinality }]);
          }
        }
        setSelectedNodeId(null);
        setConnectMode(false); // Matikan mode connect otomatis
      }
    } else {
      // Logika kalau lagi mode geser (Drag)
      dragRef.current = {
        isDragging: true,
        id: node.id,
        startX: e.clientX,
        startY: e.clientY,
        nodeX: node.x,
        nodeY: node.y
      };
    }
  };

  const handlePointerMove = (e) => {
    if (!dragRef.current.isDragging) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    
    setErdNodes(prev => prev.map(n => 
      n.id === dragRef.current.id 
        ? { ...n, x: dragRef.current.nodeX + dx, y: dragRef.current.nodeY + dy } 
        : n
    ));
  };

  const handlePointerUp = () => {
    dragRef.current.isDragging = false;
  };

  const updateNodeText = (id, newText) => {
    setErdNodes(prev => prev.map(n => n.id === id ? { ...n, text: newText } : n));
  };
  // ==========================================


  const validateAndSubmit = (type) => {
    if (!identity.kelompok || !identity.anggota1) {
      alert("⚠️ Mohon lengkapi identitas kelompok terlebih dahulu!");
      return;
    }
    const score = erdNodes.length >= 3 && kesimpulan.length > 20 ? 100 : 80;
    if (score === 100) setBadge("🏆 Master Database!"); else setBadge("👍 Good Job!");
    
    setResultModal({
      show: true, type, score,
      message: score === 100 ? "Luar biasa! Desain ERD dan kesimpulanmu sangat tajam dan sistematis." : "Bagus! Jawaban diterima, namun lengkapi lagi diagram dan kesimpulanmu."
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
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border p-8 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="font-bold flex items-center gap-2 text-xl text-gray-800">
              <span className="bg-blue-100 p-2 rounded-xl text-2xl">📝</span> Identitas Siswa
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Nama Kelompok *" value={identity.kelompok} onChange={(e) => setIdentity({...identity, kelompok: e.target.value})} className="w-full border-b-2 p-3 outline-none focus:border-blue-500 transition-all bg-gray-50 focus:bg-white rounded-t-lg" />
                <input type="text" placeholder="Nama Ketua/Anggota 1 *" value={identity.anggota1} onChange={(e) => setIdentity({...identity, anggota1: e.target.value})} className="w-full border-b-2 p-3 outline-none focus:border-blue-500 transition-all bg-gray-50 focus:bg-white rounded-t-lg" />
            </div>
          </div>
        </div>
        <div className="bg-gray-900 rounded-3xl p-8 text-white shadow-xl flex flex-col">
          <h3 className="font-bold flex items-center gap-2 text-xl mb-4 text-blue-400">
            <span>⚙️</span> Alat & Bahan
          </h3>
          <ul className="text-sm space-y-3 opacity-90">
            <li className="flex gap-3 items-start font-medium"><span className="text-green-400">✓</span> Perangkat Laptop/PC</li>
            <li className="flex gap-3 items-start font-medium"><span className="text-green-400">✓</span> Koneksi Internet Stabil</li>
            <li className="flex gap-3 items-start font-medium"><span className="text-green-400">✓</span> Web Browser (Chrome/Edge)</li>
          </ul>
        </div>
      </div>

      {/* NAV TAB & RUBRIK */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="bg-gray-100 p-1.5 rounded-2xl flex gap-2 shadow-inner">
            <button onClick={() => setActiveTab(1)} className={`px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 1 ? 'bg-white text-blue-600 shadow-md' : 'text-gray-500 hover:text-blue-500'}`}>Pertemuan 1: ERD</button>
            <button onClick={() => setActiveTab(2)} className={`px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 2 ? 'bg-white text-teal-600 shadow-md' : 'text-gray-500 hover:text-teal-500'}`}>Pertemuan 2: Normalisasi</button>
        </div>
      </div>

      {/* MAIN CONTENT PERTAB */}
      {activeTab === 1 ? (
        <div className="space-y-8 animate-fade-in">
          {/* TAHAP 1: STIMULATION */}
          <div className="bg-white border-l-8 border-blue-600 p-8 rounded-3xl shadow-sm">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-[10px] font-black rounded-full uppercase tracking-widest">Sintaks 1: Stimulation</span>
            <h3 className="text-2xl font-bold text-gray-800 mt-4">Identifikasi Masalah Basis Data</h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Amati skenario berikut: Di sebuah perpustakaan, petugas mencatat data buku yang dipinjam secara manual dalam satu baris. Jika seorang anggota meminjam 5 buku, petugas menuliskan kelima judul buku tersebut dalam satu kolom "Judul Buku" yang dipisahkan koma. 
              <br /><br />
              <strong className="text-gray-800 font-bold italic">Tugas: Rancanglah diagram ERD (Entity Relationship Diagram) yang memisahkan data Anggota dan Buku agar terstruktur rapi!</strong>
            </p>
          </div>

          {/* TAHAP 4: DATA PROCESSING - ERD BUILDER KANVAS */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-[10px] font-black rounded-full uppercase tracking-widest">Sintaks 4: Data Processing</span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 mb-6">
              <h4 className="text-xl font-bold text-gray-800">Kegiatan: Gambar ERD Interaktif</h4>
              
              {/* Toolbar Kanvas */}
              <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                <button onClick={() => addNode('entity')} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-200">+ Entitas</button>
                <button onClick={() => addNode('attribute')} className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-purple-200">+ Atribut</button>
                <button onClick={() => addNode('relation')} className="bg-pink-100 text-pink-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-pink-200">+ Relasi</button>
                
                <div className="w-px bg-gray-300 mx-2"></div>
                
                <button 
                  onClick={() => {
                    setConnectMode(!connectMode);
                    setSelectedNodeId(null);
                  }} 
                  className={`${connectMode ? 'bg-red-500 text-white animate-pulse' : 'bg-gray-800 text-white hover:bg-gray-700'} px-4 py-2 rounded-lg text-sm font-bold shadow-md transition-colors`}
                >
                  {connectMode ? 'Batalkan Garis' : '🔗 Tarik Garis'}
                </button>
              </div>
            </div>

            {/* AREA KANVAS DRAG & DROP */}
            <div 
              className={`relative w-full h-[500px] bg-slate-50 border-2 border-dashed ${connectMode ? 'border-red-400 cursor-crosshair' : 'border-gray-300 cursor-default'} rounded-2xl overflow-hidden shadow-inner`}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
            >
              {/* Notifikasi Mode Connect */}
              {connectMode && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-100 text-red-700 px-6 py-2 rounded-full text-sm font-bold z-50 shadow-md">
                  {selectedNodeId ? 'Klik Node kedua untuk menyambung!' : 'Klik Node pertama yang ingin disambung'}
                </div>
              )}

              {/* Layer Garis (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                {erdLines.map(line => {
                  const node1 = erdNodes.find(n => n.id === line.from);
                  const node2 = erdNodes.find(n => n.id === line.to);
                  if (!node1 || !node2) return null;
                  
                  // Hitung titik tengah node (approximate)
                  const x1 = node1.x + 60; const y1 = node1.y + 30;
                  const x2 = node2.x + 60; const y2 = node2.y + 30;
                  
                  return (
                    <g key={line.id}>
                      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#9ca3af" strokeWidth="3" />
                      {/* Label Kardinalitas di tengah garis */}
                      <rect x={(x1+x2)/2 - 15} y={(y1+y2)/2 - 10} width="30" height="20" fill="white" rx="4" />
                      <text x={(x1+x2)/2} y={(y1+y2)/2 + 4} fill="#1f2937" fontSize="12" fontWeight="bold" textAnchor="middle">{line.label}</text>
                    </g>
                  );
                })}
              </svg>

              {/* Layer Node / Bangun Datar */}
              {erdNodes.map(node => {
                let baseStyle = "absolute flex items-center justify-center p-2 shadow-sm transition-shadow hover:shadow-lg z-20 ";
                let shapeStyle = "";

                if (node.type === 'entity') {
                  shapeStyle = "w-[120px] h-[60px] bg-blue-50 border-2 border-blue-500 text-blue-900 font-bold";
                } else if (node.type === 'attribute') {
                  shapeStyle = "w-[120px] h-[50px] bg-purple-50 border-2 border-purple-500 rounded-[50%] text-purple-900 text-sm";
                } else if (node.type === 'relation') {
                  // Untuk belah ketupat, kita buat wrapper agar teks tetap lurus
                  baseStyle += "w-[100px] h-[100px] ";
                }

                // Efek visual jika sedang dipilih untuk ditarik garis
                const isSelected = selectedNodeId === node.id;
                
                return (
                  <div
                    key={node.id}
                    style={{ left: node.x, top: node.y }}
                    className={`${baseStyle} ${connectMode ? 'cursor-pointer' : 'cursor-move'} ${isSelected ? 'ring-4 ring-red-400 scale-105' : ''}`}
                    onPointerDown={(e) => handlePointerDown(e, node)}
                  >
                    {node.type === 'relation' && (
                      <div className="absolute inset-0 bg-pink-50 border-2 border-pink-500 transform rotate-45 m-2"></div>
                    )}
                    
                    {/* Tombol Hapus Silang Kecil */}
                    {!connectMode && (
                      <button 
                        onClick={(e) => { e.stopPropagation(); deleteNode(node.id); }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold z-30 opacity-0 hover:opacity-100 group-hover:opacity-100 transition-opacity"
                        title="Hapus"
                      >✕</button>
                    )}

                    <input 
                      type="text" 
                      value={node.text}
                      onChange={(e) => updateNodeText(node.id, e.target.value)}
                      onPointerDown={(e) => e.stopPropagation()} // Supaya bisa diklik untuk ngetik tanpa nge-drag
                      className={`relative z-20 bg-transparent text-center outline-none w-full font-semibold ${node.type === 'relation' ? 'text-pink-900 text-sm' : ''}`}
                      placeholder="Ketik..."
                    />
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">💡 Tips: Klik tombol alat di atas untuk menambah bentuk. Geser bentuk menggunakan mouse. Gunakan tombol "Tarik Garis" untuk menghubungkan antar bentuk.</p>
          </div>

          {/* TAHAP 6: GENERALIZATION */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-[10px] font-black rounded-full uppercase tracking-widest">Sintaks 6: Generalization</span>
            <h4 className="text-xl font-bold text-gray-800 mt-4 mb-4">Kesimpulan Akhir</h4>
            <textarea value={kesimpulan} onChange={(e) => setKesimpulan(e.target.value)} placeholder="Berdasarkan hasil desain ERD di atas, apa pentingnya menentukan kardinalitas (seperti 1:N) dalam merancang sistem database perpustakaan?" className="w-full h-32 p-5 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all"></textarea>
          </div>

          <button onClick={() => validateAndSubmit('ERD')} className="w-full bg-blue-600 text-white font-black py-5 rounded-3xl shadow-xl hover:scale-[1.01] transition-all">Selesaikan & Kumpulkan Jawaban</button>
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
            <p className="text-xl mt-2">{badge}</p>
            <button onClick={() => setResultModal({...resultModal, show: false})} className="w-full bg-gray-900 text-white font-bold py-4 rounded-2xl shadow-lg active:scale-95 transition-all">Tutup Evaluasi</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lkpd;
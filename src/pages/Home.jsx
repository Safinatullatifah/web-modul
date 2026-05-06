import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
          Selamat Datang di <span className="text-blue-600">ModulKite</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Platform pembelajaran interaktif untuk materi <strong>Basis Data</strong>. 
          Pelajari bagaimana data disusun mulai dari hierarki dasar, perancangan ERD, hingga proses Normalisasi untuk menciptakan sistem informasi yang handal.
        </p>
        
        <div className="flex justify-center gap-4 pt-4">
          <Link 
            to="/modul" 
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            Mulai Belajar
          </Link>
          <Link 
            to="/lkpd" 
            className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-50 transition-all duration-300"
          >
            Kerjakan LKPD
          </Link>
        </div>
      </div>

      {/* Grid Info Singkat */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
          <div className="text-4xl mb-4">🗂️</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Hierarki Data</h3>
          <p className="text-gray-500 text-sm">Pahami bagaimana data terstruktur dari bit hingga menjadi sebuah database.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Desain ERD</h3>
          <p className="text-gray-500 text-sm">Rancang cetak biru sistem informasi menggunakan Entity Relationship Diagram.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
          <div className="text-4xl mb-4">⚙️</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Normalisasi</h3>
          <p className="text-gray-500 text-sm">Hilangkan redundansi data untuk performa aplikasi yang lebih cepat dan efisien.</p>
        </div>
      </div>
      <div className="mt-12 bg-blue-50 p-6 rounded-2xl max-w-3xl text-center">
  <h3 className="font-bold text-lg mb-3">🤔 Coba Pikirkan!</h3>
  
  <p>
    Kalau satu pelanggan membeli 5 produk dan ditulis dalam satu kolom, 
    apa masalah yang akan terjadi?
  </p>

  <textarea
    placeholder="Tulis pendapatmu di sini..."
    className="w-full mt-4 p-3 rounded border"
  ></textarea>
</div>
    </div>
  );
};

export default Home;
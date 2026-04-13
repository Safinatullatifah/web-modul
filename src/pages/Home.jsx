import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="max-w-3xl w-full text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
          Selamat Datang di <span className="text-blue-600">ModulKite</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Platform pembelajaran interaktif untuk materi <strong>Basis Data</strong>.
          Pelajari bagaimana data disusun mulai dari hierarki dasar, perancangan ERD, hingga proses Normalisasi untuk menciptakan sistem informasi yang handal.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
          <Link
            to="/modul"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 text-center"
          >
            Mulai Belajar
          </Link>
          <Link
            to="/lkpd"
            className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-50 transition-all duration-300 text-center"
          >
            Kerjakan LKPD
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16 max-w-5xl w-full">
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
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow sm:col-span-2 md:col-span-1">
          <div className="text-4xl mb-4">⚙️</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Normalisasi</h3>
          <p className="text-gray-500 text-sm">Hilangkan redundansi data untuk performa aplikasi yang lebih cepat dan efisien.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
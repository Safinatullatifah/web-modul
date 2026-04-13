import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Modul from './pages/Modul';
import BahanAjar from './pages/BahanAjar';
import Lkpd from './pages/Lkpd';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Navbar Sederhana dengan Tailwind */}
        <nav className="bg-blue-700 text-white p-4 shadow-md sticky top-0 z-50">
          <div className="container mx-auto flex gap-6 font-semibold items-center">
            <div className="text-xl font-bold mr-8">ModulKite</div>
            <Link to="/" className="hover:text-blue-200 transition-colors">Beranda</Link>
            <Link to="/modul" className="hover:text-blue-200 transition-colors">Modul</Link>
            <Link to="/bahan-ajar" className="hover:text-blue-200 transition-colors">Bahan Ajar</Link>
            <Link to="/lkpd" className="hover:text-blue-200 transition-colors">LKPD</Link>
          </div>
        </nav>

        {/* Area Konten Utama */}
        <main className="flex-grow container mx-auto p-6 bg-white shadow-sm mt-6 rounded-lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modul" element={<Modul />} />
            <Route path="/bahan-ajar" element={<BahanAjar />} />
            <Route path="/lkpd" element={<Lkpd />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
const Modul = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar Navigasi Modul */}
      <div className="w-full md:w-1/4">
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 sticky top-24">
          <h3 className="font-bold text-lg text-gray-800 mb-4">Daftar Isi</h3>
          <ul className="space-y-3 text-sm font-medium text-gray-600">
            <li className="hover:text-blue-600 cursor-pointer transition-colors bg-blue-100 text-blue-700 p-2 rounded-lg">1. Pengantar Basis Data</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors p-2">2. Hierarki Data</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors p-2">3. Entity Relationship Diagram (ERD)</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors p-2">4. Normalisasi Basis Data</li>
          </ul>
        </div>
      </div>

      {/* Konten Utama */}
      <div className="w-full md:w-3/4 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 border-b pb-4 mb-6">1. Pengantar Basis Data</h2>
        <div className="prose max-w-none text-gray-700 space-y-6">
          <p>
            Basis data yang dirancang dengan baik melalui ERD dan Normalisasi merupakan fondasi utama dari aplikasi yang efisien dan cepat. Perancangan yang matang mencegah terjadinya penggandaan data (redundansi) yang dapat membuat sistem menjadi lambat dan rentan terhadap kesalahan informasi (anomali).
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
            <h4 className="font-bold text-blue-800">🤔 Pertanyaan Pemantik</h4>
            <p className="text-blue-700 mt-2">
              Bagaimana aplikasi e-commerce seperti Shopee menyimpan jutaan data produk dan riwayat belanja pengguna tanpa tumpang tindih? Jawabannya ada pada perancangan basis data yang terstruktur!
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Hierarki Data</h3>
          <p>Data tersusun dalam hierarki berikut dari yang terkecil hingga terbesar:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Karakter (Byte):</strong> Bagian data terkecil seperti huruf atau angka.</li>
            <li><strong>Field (Kolom):</strong> Kumpulan karakter yang memiliki makna, misal: Nama, Alamat.</li>
            <li><strong>Record (Baris):</strong> Kumpulan field yang mendeskripsikan satu entitas utuh.</li>
            <li><strong>File (Tabel):</strong> Kumpulan record yang sejenis.</li>
            <li><strong>Database:</strong> Kumpulan tabel yang saling berelasi.</li>
          </ul>
          
          {/* Tambahkan materi ERD dan Normalisasi lainnya di sini sesuai kebutuhan */}
        </div>
      </div>
    </div>
  );
};

export default Modul;   
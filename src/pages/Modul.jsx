import { useState } from 'react';

const Modul = () => {
  const [activeSection, setActiveSection] = useState('pengantar');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setSidebarOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'pengantar', label: '1. Pengantar Basis Data' },
    { id: 'hierarki', label: '2. Hierarki Data Digital' },
    { id: 'erd', label: '3. Entity Relationship Diagram' },
    { id: 'normalisasi', label: '4. Normalisasi Basis Data' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-4 py-6 md:py-8">

        <div className="md:hidden mb-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3 font-semibold text-gray-700 shadow-sm"
          >
            <span>📋 Daftar Isi Modul</span>
            <svg className={`w-5 h-5 transition-transform ${sidebarOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {sidebarOpen && (
            <div className="bg-white border border-gray-200 rounded-xl mt-2 shadow-md overflow-hidden">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className={`w-full text-left px-4 py-3 font-medium transition-colors border-b border-gray-100 last:border-0 ${
                    activeSection === s.id ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="hidden md:block w-64 shrink-0 sticky top-20">
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-extrabold text-lg text-gray-800 mb-4 border-b-2 border-slate-100 pb-3">Daftar Isi Modul</h3>
              <ul className="space-y-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => scrollToSection(s.id)}
                      className={`w-full text-left font-medium transition-all duration-200 p-3 rounded-xl text-sm ${
                        activeSection === s.id ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'
                      }`}
                    >
                      {s.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1 min-w-0 bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 space-y-16">

            <section id="pengantar" className="scroll-mt-24">
              <div className="mb-8">
                <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Bab 1</span>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4">Pengantar Basis Data</h2>
                <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
              </div>
              <div className="text-gray-700 space-y-5 text-base sm:text-lg leading-loose text-justify">
                <p>
                  Di era transformasi digital yang melaju begitu pesat, data telah berevolusi menjadi salah satu komoditas paling berharga di dunia, bahkan sering dijuluki sebagai "minyak baru" (the new oil) di abad ke-21. Setiap kali kita melakukan transaksi di mesin kasir, mengunggah foto ke media sosial, atau sekadar melakukan pencarian di mesin peramban, kita sedang memproduksi ribuan baris data baru. Namun, sekumpulan data yang masif ini tidak akan memiliki makna apa pun dan justru akan menjadi kekacauan digital apabila tidak dikelola, diorganisasikan, dan disimpan dalam sebuah sistem yang mumpuni. Sistem inilah yang kita kenal dengan istilah Basis Data atau <strong>Database</strong>.
                </p>
                <p>
                  Basis data bukan sekadar ruang penyimpanan layaknya sebuah folder di dalam laptop Anda. Lebih dari itu, basis data adalah sekumpulan informasi terstruktur yang diorganisasikan secara logis dan sistematis agar komputer dapat dengan cepat mencari, memperbarui, mengelola, dan melindungi informasi tersebut. Dalam pengembangan perangkat lunak berskala besar, kualitas dan arsitektur dari sebuah basis data akan secara langsung menentukan seberapa cepat dan aman aplikasi tersebut berjalan.
                </p>
                <p>
                  Tanpa adanya perancangan basis data yang matang, sebuah sistem informasi akan menghadapi dua musuh utamanya: <strong>Redundansi Data</strong> dan <strong>Anomali</strong>. Redundansi adalah pemborosan kapasitas penyimpanan yang terjadi karena data yang sama dicatat berulang kali di berbagai tempat. Sementara itu, Anomali adalah bentuk kecacatan fatal dalam sistem yang menyebabkan data menjadi tidak sinkron atau hilang ketika sistem melakukan proses penambahan (Insert), pembaruan (Update), atau penghapusan (Delete) data.
                </p>
                <div className="bg-linear-to-br from-slate-800 to-slate-900 text-white p-6 sm:p-8 rounded-2xl mt-8 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-20 rounded-full blur-3xl -mr-10 -mt-10"></div>
                  <h4 className="font-bold text-xl sm:text-2xl mb-4 flex items-center gap-3">
                    <span className="bg-blue-500 text-white p-2 rounded-lg shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                    </span>
                    Pertanyaan Pemantik
                  </h4>
                  <p className="text-slate-300 mb-4 text-base sm:text-lg leading-relaxed">
                    Mari kita menempatkan diri sebagai seorang arsitek perangkat lunak. Coba Anda bayangkan sebuah sistem e-commerce berskala nasional seperti Tokopedia atau Shopee. Pada acara "Flash Sale", ada jutaan pengguna yang menekan tombol beli secara bersamaan.
                  </p>
                  <ul className="space-y-3 text-slate-200 list-disc pl-5 text-base sm:text-lg">
                    <li>Bagaimana sistem tersebut mampu menyimpan jutaan transaksi keranjang belanja pengguna dalam waktu satu detik tanpa ada data yang tumpang tindih?</li>
                    <li>Mengapa kita sebagai pengembang perangkat lunak sangat diwajibkan untuk menggambar skema pemodelan data di atas kertas atau kanvas digital terlebih dahulu, sebelum mulai mengetikkan baris kode program di layar komputer?</li>
                    <li>Apa bencana yang akan terjadi pada memori server perusahaan apabila nama lengkap, nomor telepon, dan alamat rumah seorang pelanggan harus ditulis berulang-ulang dari awal pada setiap struk transaksi yang mereka lakukan?</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="w-full h-px bg-gray-200"></div>

            <section id="hierarki" className="scroll-mt-24">
              <div className="mb-8">
                <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Bab 2</span>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4">Konsep Struktur Hierarki Basis Data</h2>
                <div className="h-1 w-20 bg-indigo-600 rounded-full"></div>
              </div>
              <div className="text-gray-700 space-y-5 text-base sm:text-lg leading-loose text-justify">
                <p>
                  Sebelum kita membangun sebuah gedung bertingkat, kita harus memahami material dasarnya, mulai dari butiran pasir, semen, batu bata, hingga menjadi sebuah tembok yang kokoh. Prinsip yang sama berlaku dalam dunia rekayasa perangkat lunak. Sebelum kita merancang sebuah basis data yang kompleks, kita wajib memahami anatomi dan struktur penyusun data digital dari unit yang paling mikroskopis hingga menjadi sebuah ekosistem data yang makro.
                </p>
                <p>
                  Dalam ilmu komputer dasar, data diorganisasikan ke dalam sebuah tingkatan atau hierarki. Hierarki basis data ini menyusun dan mengelompokkan elemen-elemen informasi agar mesin (komputer) dapat memproses logika penyimpanan secara terstruktur. Berikut adalah lima tingkatan hierarki data dari yang paling kecil hingga yang paling besar:
                </p>
                <div className="space-y-5 mt-6">
                  {[
                    { num: 1, title: 'Karakter (Byte)', text: 'Ini adalah fondasi paling dasar dan bagian terkecil dari data yang dapat dikenali dan diproses oleh mesin komputer. Sebuah karakter sejatinya dibentuk dari sekumpulan bit (binary digit) angka 0 dan 1. Dalam bentuk visual yang kita baca, satu karakter dapat berupa satu huruf alfabet (A, B, c, d), satu angka numerik (0-9), sebuah ruang kosong (spasi), atau berbagai simbol khusus (@, #, &, *). Satu buah karakter ini belum memiliki makna informasi yang spesifik jika berdiri sendiri secara tunggal.' },
                    { num: 2, title: 'Field (Kolom / Atribut)', text: 'Ketika kita menggabungkan beberapa karakter yang saling berhubungan, kita akan membentuk sebuah Field. Field adalah representasi dari satu jenis atribut atau karakteristik spesifik dari suatu objek. Jika kita membayangkan sebuah tabel di Microsoft Excel, field adalah judul dari masing-masing kolom. Field merupakan unit data terkecil yang sudah memiliki makna konseptual. Contoh konkret dari sebuah field adalah kolom "Nomor Induk Siswa Nasional (NISN)", kolom "Nama Depan", atau kolom "Harga Satuan Barang".' },
                    { num: 3, title: 'Record (Baris / Tupel)', text: 'Sebuah field yang berdiri sendiri (misalnya hanya nama "Budi") belum bisa memberikan gambaran informasi yang utuh tentang siapa Budi tersebut. Untuk itulah kita membutuhkan Record. Record adalah kumpulan dari berbagai field yang saling bersinergi dan berkaitan untuk mendeskripsikan satu objek, satu individu, atau satu kejadian secara utuh dan spesifik. Dalam visualisasi tabel, record mewakili satu baris data horizontal.' },
                    { num: 4, title: 'File (Tabel / Entitas)', text: 'Ketika Anda mengumpulkan ratusan atau ribuan record yang memiliki struktur field yang persis sama, Anda baru saja membentuk sebuah File atau yang dalam basis data modern lebih sering disebut sebagai Tabel. Tabel mengelompokkan data berdasarkan tema atau kategori objek yang sejenis. Misalnya, sekumpulan ribuan record data siswa akan disimpan di dalam satu wadah khusus yang disebut "Tabel Siswa".' },
                    { num: 5, title: 'Database (Basis Data)', text: 'Ini adalah puncak tertinggi dari struktur hierarki. Sebuah Database adalah kumpulan dari berbagai tabel (file) yang saling berelasi, terhubung, dan berinteraksi satu sama lain secara logis berdasarkan aturan tertentu, untuk melayani kebutuhan informasi sebuah instansi atau aplikasi secara menyeluruh. Contohnya adalah "Database Sekolah", yang di dalamnya hidup berbagai tabel seperti Tabel Siswa, Tabel Guru, Tabel Mata Pelajaran, dan Tabel Nilai.' },
                  ].map((item) => (
                    <div key={item.num} className="bg-slate-50 border border-slate-200 p-5 sm:p-7 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 text-indigo-700 font-black text-xl sm:text-2xl flex items-center justify-center rounded-xl shrink-0">{item.num}</div>
                        <h4 className="font-bold text-lg sm:text-2xl text-gray-900">{item.title}</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-indigo-50 border-l-8 border-indigo-500 p-6 sm:p-8 rounded-r-2xl mt-10 shadow-sm">
                  <h4 className="font-black text-xl sm:text-2xl text-indigo-900 mb-4 uppercase tracking-wide">Aktivitas Eksplorasi Analitis</h4>
                  <p className="text-indigo-800 text-base sm:text-lg leading-relaxed mb-4">
                    Untuk memperkuat pemahaman abstrak di atas, mari kita implementasikan ke benda nyata. Ambil dan bukalah sebuah buku telepon lawas, atau daftar kontak yang ada di dalam telepon pintar (smartphone) Anda saat ini.
                  </p>
                  <div className="bg-white p-5 rounded-xl border border-indigo-100">
                    <p className="font-bold text-indigo-900 mb-2">Instruksi Diskusi Kelompok:</p>
                    <ol className="list-decimal pl-5 text-indigo-800 space-y-2 text-sm sm:text-base">
                      <li>Tunjukkan dengan telunjuk Anda, bagian mana di layar tersebut yang murni mewakili hierarki <strong>Karakter</strong>.</li>
                      <li>Sebutkan minimal tiga <strong>Field</strong> apa saja yang diminta oleh sistem saat Anda ingin menambahkan kontak baru.</li>
                      <li>Jika Anda mengirim kontak "Ibu" ke teman Anda, apakah Anda sedang mengirimkan sebuah Field, sebuah Record, atau sebuah Tabel? Berikan argumentasi logis kelompok Anda!</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            <div className="w-full h-px bg-gray-200"></div>

            <section id="erd" className="scroll-mt-24">
              <div className="mb-8">
                <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Bab 3</span>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4">Entity Relationship Diagram (ERD)</h2>
                <div className="h-1 w-20 bg-emerald-600 rounded-full"></div>
              </div>
              <div className="text-gray-700 space-y-5 text-base sm:text-lg leading-loose text-justify">
                <p>
                  Dalam dunia konstruksi fisik, sangat mustahil seorang tukang batu langsung menyusun bata tanpa melihat gambar cetak biru (blueprint) dari sang arsitek. Jika hal itu dipaksakan, bangunan tersebut pasti akan cacat secara struktural, jendela bisa jadi terbalik, dan pintu mungkin tidak simetris. Hal yang sama berlaku secara mutlak di dunia rekayasa perangkat lunak. Sebelum seorang programmer menyentuh keyboard untuk membuat tabel di dalam MySQL, PostgreSQL, atau database lainnya, mereka wajib menggambar cetak biru data tersebut. Cetak biru itulah yang disebut dengan <strong>Entity Relationship Diagram (ERD)</strong>.
                </p>
                <p>
                  ERD adalah sebuah model visual konseptual yang digunakan untuk menjabarkan, mendeskripsikan, dan merancang struktur logis dari sebuah basis data. ERD bekerja dengan cara memetakan objek-objek penting di dunia nyata (Entitas), mendaftar rincian sifat dari objek tersebut (Atribut), dan menggambarkan bagaimana skenario interaksi yang terjadi di antara objek-objek tersebut (Relasi).
                </p>
                <h3 className="font-black text-2xl sm:text-3xl text-gray-900 mt-10 mb-6">Notasi dan Komponen Utama ERD</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="bg-white p-6 rounded-2xl border-2 border-emerald-100 shadow-md flex flex-col items-center text-center group hover:border-emerald-500 transition-colors">
                    <div className="w-24 h-12 border-4 border-emerald-600 bg-emerald-50 group-hover:bg-emerald-100 transition-colors mb-5 flex items-center justify-center">
                      <span className="font-bold text-emerald-800 text-sm">ENTITAS</span>
                    </div>
                    <h4 className="font-black text-xl text-emerald-900 mb-2">Entitas</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Disimbolkan dengan <strong>Persegi Panjang</strong>. Mewakili benda atau objek di dunia nyata. Contoh: <em>Mahasiswa</em>, <em>Buku</em>, <em>Petugas</em>.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border-2 border-emerald-100 shadow-md flex flex-col items-center text-center group hover:border-emerald-500 transition-colors">
                    <div className="w-24 h-14 border-4 border-emerald-600 rounded-[50%] bg-emerald-50 group-hover:bg-emerald-100 transition-colors mb-5 flex items-center justify-center">
                      <span className="font-bold text-emerald-800 text-xs text-center leading-tight">ATRIBUT</span>
                    </div>
                    <h4 className="font-black text-xl text-emerald-900 mb-2">Atribut</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Disimbolkan dengan <strong>Elips atau Oval</strong>. Adalah properti atau karakteristik dari sebuah entitas. Contoh: <em>Nama</em>, <em>NIM</em>, <em>Alamat</em>.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border-2 border-emerald-100 shadow-md flex flex-col items-center text-center group hover:border-emerald-500 transition-colors">
                    <div className="w-14 h-14 border-4 border-emerald-600 rotate-45 bg-emerald-50 group-hover:bg-emerald-100 transition-colors mb-5 flex items-center justify-center">
                      <span className="font-bold text-emerald-800 text-[9px] -rotate-45 block">RELASI</span>
                    </div>
                    <h4 className="font-black text-xl text-emerald-900 mb-2">Relasi</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Disimbolkan dengan <strong>Belah Ketupat</strong>. Menunjukkan hubungan antara dua entitas menggunakan kata kerja. Contoh: <em>Meminjam</em>, <em>Memeriksa</em>.</p>
                  </div>
                </div>
                <h3 className="font-black text-2xl sm:text-3xl text-gray-900 mt-12 mb-5">Derajat Relasi (Kardinalitas)</h3>
                <p className="mb-5">Kardinalitas menentukan batasan aturan bisnis mengenai jumlah kejadian maksimum yang diizinkan untuk menghubungkan satu entitas dengan entitas yang lain. Terdapat tiga jenis kardinalitas utama:</p>
                <div className="space-y-5">
                  {[
                    { label: '1 : 1', title: 'One-to-One', text: 'Setiap satu baris data pada entitas pertama hanya diperbolehkan berpasangan dengan maksimal satu baris data di entitas kedua, dan berlaku sebaliknya.', example: 'Satu warga negara hanya berhak memiliki satu nomor paspor aktif.' },
                    { label: '1 : N', title: 'One-to-Many', text: 'Satu data pada entitas pertama dapat berelasi dengan banyak data di entitas kedua, namun sebaliknya banyak data di entitas kedua hanya boleh merujuk pada satu data di entitas pertama.', example: 'Satu Dosen_Wali membimbing banyak Mahasiswa.' },
                    { label: 'N : M', title: 'Many-to-Many', text: 'Banyak data dari entitas pertama bebas berhubungan dengan banyak data dari entitas kedua. Relasi ini harus dipecah menjadi entitas baru (Entitas Asosiatif).', example: 'Banyak Siswa mengikuti banyak Ekstrakurikuler yang berbeda.' },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col sm:flex-row gap-4 items-stretch bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                      <div className="sm:w-28 bg-emerald-600 text-white rounded-xl font-mono font-black text-2xl flex items-center justify-center py-3 px-2 shadow-inner shrink-0">
                        {item.label}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-black text-xl text-gray-800 mb-1">{item.title}</h5>
                        <p className="text-gray-600 text-sm sm:text-base">{item.text}</p>
                        <div className="mt-2 bg-gray-50 p-3 rounded-lg text-sm border border-gray-100">
                          <strong className="text-emerald-700">Contoh:</strong> {item.example}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-emerald-50 border-l-8 border-emerald-600 p-6 sm:p-8 rounded-r-2xl mt-10 shadow-sm">
                  <h4 className="font-black text-xl sm:text-2xl text-emerald-900 mb-4">Pengolahan Data (Problem Solving)</h4>
                  <p className="text-emerald-800 text-base sm:text-lg leading-relaxed mb-4">
                    Mari kita susun rancangan untuk <strong>Sistem Manajemen Perpustakaan Sekolah</strong>. Di dalam sekolah tersebut terdapat aturan operasional perpustakaan sebagai berikut:
                  </p>
                  <ul className="list-disc pl-5 text-emerald-800 text-base space-y-2 mb-5">
                    <li>Satu siswa yang terdaftar diizinkan untuk meminjam lebih dari satu judul buku dalam sekali waktu.</li>
                    <li>Satu judul buku memiliki stok yang banyak sehingga bisa dipinjam oleh banyak siswa yang berbeda secara bersamaan.</li>
                  </ul>
                  <div className="bg-white p-5 rounded-xl border border-emerald-200">
                    <p className="font-bold text-emerald-900">Tugas Anda:</p>
                    <ol className="list-decimal pl-5 text-emerald-800 space-y-2 mt-2 text-sm sm:text-base">
                      <li>Identifikasikan minimal dua entitas utama dari narasi sistem di atas!</li>
                      <li>Tentukan atribut apa saja yang melekat pada masing-masing entitas tersebut, dan berilah garis bawah pada atribut yang layak dijadikan <em>Primary Key</em>.</li>
                      <li>Gambarkan diagram ERD-nya di kertas Anda, dan tentukan jenis kardinalitas relasi yang terbentuk!</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            <div className="w-full h-px bg-gray-200"></div>

            <section id="normalisasi" className="scroll-mt-24">
              <div className="mb-8">
                <span className="text-purple-600 font-bold tracking-wider uppercase text-sm">Bab 4</span>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4">Menerapkan Normalisasi Basis Data</h2>
                <div className="h-1 w-20 bg-purple-600 rounded-full"></div>
              </div>
              <div className="text-gray-700 space-y-5 text-base sm:text-lg leading-loose text-justify">
                <p>
                  Meskipun kita sudah merancang ERD dengan baik, seringkali pada praktiknya (terutama saat sistem dibuat dari dokumen fisik peninggalan sistem lama), kita akan mendapati struktur data tabel yang masih berantakan, membengkak, dan dipenuhi oleh pengulangan data yang sama. Untuk "menyembuhkan" struktur data yang sakit inilah, kita menerapkan sebuah prosedur medis bagi database yang disebut <strong>Normalisasi</strong>.
                </p>
                <p>
                  Normalisasi adalah sebuah proses analisis teknik tingkat lanjut di mana kita secara sistematis mengurai dan memecah struktur tabel yang kompleks dan besar, menjadi tabel-tabel kecil yang saling terhubung dengan rapi. Tujuan utama normalisasi ada dua: pertama, membunuh tuntas <strong>redundansi</strong> (duplikasi data yang tidak perlu). Kedua, memastikan semua tabel terbebas dari <strong>Anomali</strong> (kesalahan fatal saat sistem menambah, menghapus, atau mengubah data).
                </p>
                <h3 className="font-black text-2xl sm:text-3xl text-gray-900 mt-10 mb-6">Tahapan Proses Normalisasi (Hingga 3NF)</h3>
                <div className="space-y-10">
                  {[
                    { num: '0', color: 'gray', title: 'Unnormalized Form (UNF)', text: 'Ini adalah fase mentah, fase di mana data ditangkap "apa adanya" dari dokumen dunia nyata. Anda bisa membayangkan sebuah struk belanja dari minimarket, atau sebuah faktur tagihan dari rumah sakit. Di dalam tahap UNF, semua data ditumpuk paksa ke dalam satu tabel spreadsheet raksasa.', note: { color: 'red', label: 'Masalah di UNF:', text: 'Data sangat kacau. Terdapat atribut yang berisi banyak nilai sekaligus dalam satu sel kolom (repeating groups), sehingga database akan menolak untuk memprosesnya secara logika relasional.' } },
                    { num: '1', color: 'purple', title: 'First Normal Form (1NF)', text: 'Syarat mutlak untuk lolos ujian 1NF sangat sederhana namun tegas: Tidak boleh ada nilai ganda (multivalue) dalam satu baris kolom! Setiap perpotongan antara baris dan kolom (sel) harus dan wajib bernilai tunggal, utuh (atomik).', note: { color: 'purple', label: 'Indikator Keberhasilan 1NF:', text: 'Tabel sudah berbentuk kotak sempurna, tidak ada sel yang di-merge (digabung), dan tidak ada data tipe array dalam satu kolom.' } },
                    { num: '2', color: 'purple', title: 'Second Normal Form (2NF)', text: 'Tabel yang sudah berstatus 1NF belum tentu aman. Langkah selanjutnya adalah mencapai 2NF dengan syarat: Tabel harus memenuhi 1NF, dan tidak boleh ada ketergantungan parsial (sebagian). Semua atribut biasa harus sepenuhnya bergantung pada seluruh kunci, bukan hanya bergantung pada sebelah bagian kunci saja.', note: { color: 'purple', label: 'Efek Lolos 2NF:', text: 'Tabel besar Anda mulai terpecah menjadi beberapa tabel utama, misalnya terbelah menjadi Tabel Transaksi dan Tabel Rincian Pesanan.' } },
                    { num: '3', color: 'purple', title: 'Third Normal Form (3NF)', text: 'Ini adalah garis finis standar untuk sebuah basis data yang efisien. Syarat 3NF adalah: Tabel wajib memenuhi 2NF, dan tidak boleh ada ketergantungan transitif. Ketergantungan transitif berarti ada atribut biasa yang bukannya bergantung pada Primary Key, melainkan bergantung pada atribut biasa lainnya secara berantai.', note: { color: 'purple', label: 'Contoh Transitif:', text: 'Kolom KODE_POS menentukan kolom KOTA, di mana keduanya bukan Primary Key. Solusinya, buat Tabel baru khusus Kodepos-Kota yang berdiri mandiri.' } },
                  ].map((item) => (
                    <div key={item.num} className={`relative pl-10 border-l-4 ${item.color === 'gray' ? 'border-gray-300' : 'border-purple-300'}`}>
                      <div className={`absolute -left-6 top-0 w-12 h-12 ${item.color === 'gray' ? 'bg-gray-500' : 'bg-purple-600'} rounded-full flex items-center justify-center text-white text-xl font-black shadow-lg ring-4 ring-white shrink-0`}>{item.num}</div>
                      <h4 className={`font-black text-xl sm:text-2xl ${item.color === 'gray' ? 'text-gray-800' : 'text-purple-900'} mb-3`}>{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed mb-3 text-sm sm:text-base">{item.text}</p>
                      <div className={`bg-${item.note.color}-50 text-${item.note.color}-800 p-4 rounded-xl text-sm border border-${item.note.color}-200`}>
                        <strong className="font-bold">{item.note.label}</strong> {item.note.text}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-linear-to-br from-purple-800 to-fuchsia-900 text-white p-6 sm:p-8 rounded-2xl mt-12 shadow-xl relative overflow-hidden">
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-fuchsia-500 opacity-30 rounded-full blur-3xl"></div>
                  <h4 className="font-black text-xl sm:text-2xl mb-4">Pembuktian Logika (Verification & Validation)</h4>
                  <p className="text-purple-100 text-base sm:text-lg leading-relaxed mb-4">
                    Ambillah sebuah dokumen fisik berupa formulir "Rekam Medis Pasien" atau "Struk Pembelian Minimarket" yang kompleks. Data tersebut merupakan perwujudan nyata dari bentuk <strong>UNF</strong>.
                  </p>
                  <p className="text-purple-100 text-base sm:text-lg leading-relaxed mb-3">Sebagai tantangan puncak penguasaan materi:</p>
                  <ul className="list-disc pl-5 text-purple-50 text-base space-y-2 font-medium">
                    <li>Lakukan proses "operasi bedah" dengan mendekomposisi struk tersebut secara bertahap mulai dari 1NF, 2NF, hingga mencapai arsitektur murni di 3NF.</li>
                    <li>Setelah berhasil memecahnya, periksa kembali semua tabel hasil akhir Anda. Apakah Anda masih menemukan teks panjang nama pasien/pelanggan yang ditulis berulang-ulang di berbagai baris?</li>
                    <li>Jika nama tersebut hanya tertulis satu kali di satu tabel master, dan tabel lain hanya memanggil ID-nya saja, maka selamat, Anda telah berhasil menciptakan basis data yang ternormalisasi!</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Modul;
export interface SearchItem {
  title: string
  desc: string
  href: string
  category: string
  keywords: string[]
}

export const searchIndex: SearchItem[] = [
  // Site
  { title: 'Beranda Portal RW 44', desc: 'Halaman utama portal komunitas RW 44 Coatesville', href: '/', category: 'Umum', keywords: ['home', 'beranda', 'rw44', 'coatesville'] },
  { title: 'Portal Warga', desc: 'Dashboard layanan, pengumuman, dan agenda warga', href: '/portal', category: 'Umum', keywords: ['portal', 'dashboard', 'warga'] },
  { title: 'FAQ', desc: 'Pertanyaan yang sering diajukan warga RW 44', href: '/faq', category: 'Umum', keywords: ['faq', 'pertanyaan', 'jawaban'] },
  { title: 'Kontak', desc: 'Kontak pengurus RW 44, darurat, dan penting lainnya', href: '/kontak', category: 'Umum', keywords: ['kontak', 'telepon', 'darurat', 'sekuriti', 'whatsapp'] },
  { title: 'Feedback & Pengaduan', desc: 'Sampaikan masukan dan laporkan masalah kawasan', href: '/feedback', category: 'Umum', keywords: ['feedback', 'pengaduan', 'laporan', 'masukan', 'saran'] },
  { title: 'Galeri', desc: 'Dokumentasi foto kegiatan dan kehidupan komunitas RW 44', href: '/galeri', category: 'Umum', keywords: ['galeri', 'foto', 'dokumentasi', 'gambar'] },

  // Pengantar
  { title: 'Sambutan Ketua RW', desc: 'Kata sambutan dari Ketua RW 44 Coatesville', href: '/pengantar/sambutan', category: 'Pengantar', keywords: ['sambutan', 'ketua', 'rw'] },
  { title: 'Video Sambutan', desc: 'Video sambutan dan pengenalan RW 44', href: '/pengantar/video', category: 'Pengantar', keywords: ['video', 'sambutan'] },

  // Tentang Kami
  { title: 'Tentang Kami', desc: 'Profil dan informasi umum RW 44 Coatesville', href: '/tentang-kami', category: 'Tentang Kami', keywords: ['tentang', 'profil', 'sejarah'] },
  { title: 'Pengurus RW 44', desc: 'Struktur organisasi dan profil pengurus RW 44', href: '/tentang-kami/pengurus', category: 'Tentang Kami', keywords: ['pengurus', 'struktur', 'organisasi', 'ketua', 'sekretaris'] },
  { title: 'Surat Keputusan Pengurus', desc: 'Dokumen SK pengangkatan pengurus RW 44', href: '/tentang-kami/sk-pengurus', category: 'Tentang Kami', keywords: ['sk', 'surat keputusan', 'pengangkatan'] },

  // Berita
  { title: 'News & Updates', desc: 'Berita dan informasi terbaru seputar komunitas', href: '/berita', category: 'Berita', keywords: ['berita', 'news', 'informasi', 'update'] },
  { title: 'Peraturan Cluster', desc: 'Peraturan dan tata tertib cluster Coatesville', href: '/berita/peraturan', category: 'Berita', keywords: ['peraturan', 'tata tertib', 'aturan', 'cluster'] },
  { title: 'Info Cibubur', desc: 'Informasi dan berita terkini wilayah Cibubur', href: '/berita/info-cibubur', category: 'Berita', keywords: ['cibubur', 'info', 'wilayah'] },
  { title: 'Bogor Update', desc: 'Berita dan update terbaru Kabupaten Bogor', href: '/berita/bogor-update', category: 'Berita', keywords: ['bogor', 'kabupaten', 'update'] },
  { title: 'Berita Terkait', desc: 'Berita terkait komunitas dan perumahan', href: '/berita/berita-terkait', category: 'Berita', keywords: ['berita', 'terkait', 'komunitas'] },

  // Infrastruktur
  { title: 'Infrastruktur', desc: 'Kondisi dan status infrastruktur kawasan RW 44', href: '/infrastruktur', category: 'Infrastruktur', keywords: ['infrastruktur', 'fasilitas', 'kondisi'] },
  { title: 'Pos Sekuriti', desc: 'Informasi keamanan dan pos sekuriti cluster', href: '/infrastruktur/pos-sekuriti', category: 'Infrastruktur', keywords: ['sekuriti', 'keamanan', 'pos', 'satpam'] },
  { title: 'Jalan Kompleks', desc: 'Kondisi dan pemeliharaan jalan dalam cluster', href: '/infrastruktur/jalan', category: 'Infrastruktur', keywords: ['jalan', 'aspal', 'kompleks', 'akses'] },
  { title: 'Taman & Gazebo', desc: 'Area taman dan gazebo sebagai ruang hijau warga', href: '/infrastruktur/taman', category: 'Infrastruktur', keywords: ['taman', 'gazebo', 'hijau', 'rekreasi'] },
  { title: 'Lapangan Olahraga', desc: 'Fasilitas lapangan olahraga multifungsi', href: '/infrastruktur/lapangan', category: 'Infrastruktur', keywords: ['lapangan', 'olahraga', 'futsal', 'basket'] },
  { title: 'Lampu Penerangan Jalan', desc: 'Status dan pemeliharaan lampu penerangan jalan', href: '/infrastruktur/lampu', category: 'Infrastruktur', keywords: ['lampu', 'penerangan', 'jalan', 'listrik'] },
  { title: 'CCTV', desc: 'Sistem CCTV dan pemantauan kawasan real-time', href: '/infrastruktur/cctv', category: 'Infrastruktur', keywords: ['cctv', 'kamera', 'pemantauan', 'keamanan'] },

  // Kegiatan
  { title: 'Kegiatan Komunitas', desc: 'Semua program dan kegiatan aktif di RW 44', href: '/kegiatan', category: 'Kegiatan', keywords: ['kegiatan', 'program', 'komunitas', 'agenda'] },
  { title: 'Posyandu Sehat Ceria', desc: 'Layanan kesehatan terpadu untuk seluruh warga', href: '/kegiatan/posyandu', category: 'Kegiatan', keywords: ['posyandu', 'kesehatan', 'sehat', 'kader', 'balita', 'lansia'] },
  { title: 'Tentang Posyandu', desc: 'Sejarah, latar belakang dan model 4P Posyandu Sehat Ceria', href: '/kegiatan/posyandu/tentang-kami', category: 'Posyandu', keywords: ['posyandu', 'sejarah', 'latar belakang', '4p'] },
  { title: 'Pembekalan Kader Posyandu', desc: 'Program pelatihan dan kompetensi kader kesehatan', href: '/kegiatan/posyandu/pembekalan-kader', category: 'Posyandu', keywords: ['kader', 'pelatihan', 'pembekalan', 'kompetensi'] },
  { title: 'Layanan Unggulan Posyandu', desc: '7 layanan aktif posyandu dan jadwal pelayanan', href: '/kegiatan/posyandu/layanan-unggulan', category: 'Posyandu', keywords: ['layanan', 'posyandu', 'jadwal', 'imunisasi', 'pmt'] },
  { title: 'Laporan & Evaluasi Posyandu', desc: 'KPI, statistik kunjungan dan arsip laporan posyandu', href: '/kegiatan/posyandu/laporan-evaluasi', category: 'Posyandu', keywords: ['laporan', 'evaluasi', 'statistik', 'kpi', 'posyandu'] },
  { title: 'Olahraga Bersama', desc: 'Program olahraga mingguan dan komunitas aktif', href: '/kegiatan/olahraga', category: 'Kegiatan', keywords: ['olahraga', 'senam', 'basket', 'voli', 'jalan sehat'] },
  { title: 'CTB – Touring & Edukasi', desc: 'Komunitas touring motorbike dan safety riding', href: '/kegiatan/ctb', category: 'Kegiatan', keywords: ['ctb', 'motor', 'touring', 'safety riding'] },
  { title: 'CFA – Alam & Lingkungan', desc: 'Hiking, peduli lingkungan, dan rekreasi alam', href: '/kegiatan/cfa', category: 'Kegiatan', keywords: ['cfa', 'hiking', 'alam', 'lingkungan', 'tracking'] },
  { title: 'Kegiatan Kreatif', desc: 'Seni vokal, musik, line dance, dan cooking class', href: '/kegiatan/kreatif', category: 'Kegiatan', keywords: ['kreatif', 'seni', 'musik', 'line dance', 'memasak'] },
  { title: 'Pembinaan Rohani', desc: 'Kegiatan keagamaan dan pembinaan spiritual warga', href: '/kegiatan/rohani', category: 'Kegiatan', keywords: ['rohani', 'agama', 'pengajian', 'ibadah', 'spiritual'] },
  { title: 'Hari Besar Nasional & Keagamaan', desc: 'Perayaan HUT RI, Lebaran, Idul Adha, Natal', href: '/kegiatan/hari-besar', category: 'Kegiatan', keywords: ['hari besar', 'lebaran', 'hut ri', 'natal', 'perayaan'] },

  // Pelayanan
  { title: 'Pelayanan Warga', desc: 'Layanan administrasi dan dokumen untuk warga', href: '/pelayanan', category: 'Pelayanan', keywords: ['pelayanan', 'layanan', 'warga', 'administrasi'] },
  { title: 'Administrasi & Dokumen', desc: 'Pembuatan surat keterangan dan pengantar', href: '/pelayanan/admin-duk', category: 'Pelayanan', keywords: ['surat', 'keterangan', 'domisili', 'pengantar', 'administrasi'] },

  // Laporan
  { title: 'Laporan', desc: 'Laporan kegiatan dan keuangan RW 44', href: '/laporan', category: 'Laporan', keywords: ['laporan', 'transparansi', 'keuangan'] },
  { title: 'Laporan Keuangan', desc: 'Laporan keuangan bulanan dan tahunan RW 44', href: '/laporan/keuangan', category: 'Laporan', keywords: ['keuangan', 'ipl', 'laporan', 'iuran', 'anggaran'] },
  { title: 'Laporan Umum', desc: 'Laporan kegiatan dan program RW 44', href: '/laporan/umum', category: 'Laporan', keywords: ['laporan', 'umum', 'kegiatan', 'program'] },

  // Auth
  { title: 'Login', desc: 'Masuk ke portal warga RW 44', href: '/auth/login', category: 'Akun', keywords: ['login', 'masuk', 'akun'] },
  { title: 'Daftar Akun', desc: 'Registrasi akun warga baru', href: '/auth/register', category: 'Akun', keywords: ['daftar', 'register', 'akun', 'baru'] },
]

export function searchItems(query: string): SearchItem[] {
  if (!query.trim()) return []
  const q = query.toLowerCase().trim()
  return searchIndex
    .filter((item) => {
      return (
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.keywords.some((k) => k.includes(q))
      )
    })
    .slice(0, 10)
}

export function groupByCategory(items: SearchItem[]) {
  return items.reduce<Record<string, SearchItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item)
    return acc
  }, {})
}

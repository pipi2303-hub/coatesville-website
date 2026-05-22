export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Pengantar',
    href: '/pengantar',
    children: [
      { label: 'Sambutan Ketua RW', href: '/pengantar/sambutan' },
      { label: 'Video Sambutan', href: '/pengantar/video' },
    ],
  },
  {
    label: 'Tentang Kami',
    href: '/tentang-kami',
    children: [
      { label: 'Pengurus RW', href: '/tentang-kami/pengurus' },
      { label: 'Surat Keputusan', href: '/tentang-kami/sk-pengurus' },
    ],
  },
  {
    label: 'News & Updates',
    href: '/berita',
    children: [
      { label: 'Peraturan Cluster', href: '/berita/peraturan' },
      { label: 'Info Cibubur', href: '/berita/info-cibubur' },
      { label: 'Bogor Update', href: '/berita/bogor-update' },
      { label: 'Berita Terkait', href: '/berita/berita-terkait' },
    ],
  },
  {
    label: 'Infrastruktur',
    href: '/infrastruktur',
    children: [
      { label: 'Pos Sekuriti', href: '/infrastruktur/pos-sekuriti' },
      { label: 'Jalan Kompleks', href: '/infrastruktur/jalan' },
      { label: 'Taman & Gazebo', href: '/infrastruktur/taman' },
      { label: 'Lapangan Olahraga', href: '/infrastruktur/lapangan' },
      { label: 'Lampu Penerangan', href: '/infrastruktur/lampu' },
      { label: 'CCTV', href: '/infrastruktur/cctv' },
    ],
  },
  {
    label: 'Kegiatan',
    href: '/kegiatan',
    children: [
      { label: 'Posyandu Sehat Ceria', href: '/kegiatan/posyandu' },
      { label: 'Olahraga Bersama', href: '/kegiatan/olahraga' },
      { label: 'CTB – Touring & Edukasi', href: '/kegiatan/ctb' },
      { label: 'CFA – Alam & Lingkungan', href: '/kegiatan/cfa' },
      { label: 'Kreatif', href: '/kegiatan/kreatif' },
      { label: 'Pembinaan Rohani', href: '/kegiatan/rohani' },
      { label: 'Hari Besar Nasional & Keagamaan', href: '/kegiatan/hari-besar' },
    ],
  },
  {
    label: 'Pelayanan',
    href: '/pelayanan',
    children: [
      { label: 'Administrasi & Dokumen', href: '/pelayanan/admin-duk' },
    ],
  },
  {
    label: 'Laporan',
    href: '/laporan',
    children: [
      { label: 'Laporan Umum', href: '/laporan/umum' },
      { label: 'Laporan Keuangan', href: '/laporan/keuangan' },
    ],
  },
  { label: 'FAQ', href: '/faq' },
]

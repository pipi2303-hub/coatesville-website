import type { Metadata } from 'next'
import Link from 'next/link'
import AdminTopbar from '@/components/admin/AdminTopbar'

export const metadata: Metadata = { title: 'Dashboard Admin – Portal RW 44' }

const stats = [
  { label: 'Total Warga', val: '312', sub: '+4 bln ini', icon: '👥', color: 'text-blue-600', bg: 'bg-blue-50', trend: 'up' },
  { label: 'Iuran Masuk', val: 'Rp 42.5M', sub: '92% target', icon: '💰', color: 'text-green-600', bg: 'bg-green-50', trend: 'up' },
  { label: 'Pengaduan', val: '7', sub: '2 pending', icon: '📣', color: 'text-orange-600', bg: 'bg-orange-50', trend: 'down' },
  { label: 'Kegiatan', val: '11', sub: '3 mendatang', icon: '📅', color: 'text-purple-600', bg: 'bg-purple-50', trend: 'neutral' },
]

const recentComplaints = [
  { id: 'TKT-041', warga: 'Blok A-07', isu: 'Lampu jalan padam di gang 3', status: 'Proses', tgl: '22 Mei 2026' },
  { id: 'TKT-040', warga: 'Blok C-15', isu: 'Saluran air tersumbat', status: 'Baru', tgl: '21 Mei 2026' },
  { id: 'TKT-039', warga: 'Blok B-03', isu: 'Permintaan CCTV blok B', status: 'Baru', tgl: '20 Mei 2026' },
]

const recentNews = [
  { title: 'Jadwal Posyandu Juni 2026', status: 'Published', tgl: '22 Mei', views: 142 },
  { title: 'Pengumuman Rapat Warga', status: 'Published', tgl: '20 Mei', views: 219 },
  { title: 'Laporan Keuangan Q1', status: 'Draft', tgl: '18 Mei', views: 0 },
]

const statusColor: Record<string, string> = {
  Baru: 'bg-red-100 text-red-600',
  Proses: 'bg-yellow-100 text-yellow-700',
  Selesai: 'bg-green-100 text-green-700',
  Published: 'bg-green-100 text-green-700',
  Draft: 'bg-gray-100 text-gray-600',
}

const quickLinks = [
  { label: 'Terbitkan Berita', href: '/admin/berita', icon: '✏️', color: 'bg-blue-500' },
  { label: 'Agenda Kegiatan', href: '/admin/kegiatan', icon: '📅', color: 'bg-purple-500' },
  { label: 'Data Warga', href: '/admin/pengguna', icon: '👤', color: 'bg-green-600' },
  { label: 'Laporan Kas', href: '/admin/laporan', icon: '📊', color: 'bg-orange-500' },
  { label: 'Kelola Galeri', href: '/admin/galeri', icon: '🖼️', color: 'bg-pink-500' },
  { label: 'Pengaturan', href: '/admin/pengaturan', icon: '⚙️', color: 'bg-slate-600' },
]

export default function AdminDashboard() {
  return (
    <>
      <AdminTopbar title="Overview Dashboard" />
      <div className="p-6 space-y-8 max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-serif font-bold text-ink mb-1">Selamat Datang, Admin 👋</h2>
            <p className="text-sm text-muted">Berikut ringkasan statistik dan aktivitas portal RW 44 hari ini.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="px-4 py-2 bg-white border border-border text-ink text-xs font-bold rounded-xl hover:bg-bg transition-colors shadow-sm">
              Lihat Situs Utama
            </Link>
            <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg">
              Generate Laporan
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 shadow-card border border-border/40 hover:border-primary/20 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${s.bg} ${s.color} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                  {s.icon}
                </div>
                <div className={`text-[0.65rem] font-bold px-2 py-0.5 rounded-lg ${s.trend === 'up' ? 'bg-green-100 text-green-600' : s.trend === 'down' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-500'}`}>
                  {s.trend === 'up' ? '↑' : s.trend === 'down' ? '↓' : '•'} {s.sub}
                </div>
              </div>
              <p className="text-2xl font-bold text-ink mb-0.5">{s.val}</p>
              <p className="text-xs text-muted font-medium uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            {/* Chart Simulation (CSS-based) */}
            <div className="bg-white rounded-3xl p-8 shadow-card border border-border/40">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-base font-bold text-ink">Statistik Pengunjung & Interaksi</h3>
                  <p className="text-[0.65rem] text-muted">Data performa portal dalam 7 hari terakhir</p>
                </div>
                <select className="bg-bg border border-border rounded-lg text-[0.65rem] font-bold px-3 py-1.5 outline-none">
                  <option>7 Hari Terakhir</option>
                  <option>30 Hari Terakhir</option>
                </select>
              </div>
              
              <div className="flex items-end justify-between h-40 gap-2 px-2">
                {[45, 62, 85, 30, 92, 75, 100].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
                    <div className="w-full bg-primary/5 rounded-t-xl relative overflow-hidden h-full flex items-end">
                      <div 
                        style={{ height: `${h}%` }} 
                        className="w-full bg-primary/20 group-hover:bg-primary transition-all duration-500 rounded-t-xl relative"
                      >
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-ink text-white text-[10px] px-1.5 py-0.5 rounded pointer-events-none">
                          {h * 10}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] text-muted font-bold uppercase">{['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'][i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Management */}
            <div>
              <h3 className="text-base font-bold text-ink mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-accent rounded-full" /> Manajemen Cepat
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {quickLinks.map((q, i) => (
                  <Link key={i} href={q.href} className="group bg-white rounded-2xl p-5 shadow-card border border-border/40 hover:border-primary/20 hover:shadow-card-lg transition-all duration-300">
                    <div className={`w-10 h-10 ${q.color} rounded-xl flex items-center justify-center text-xl mb-3 shadow-md group-hover:rotate-12 transition-transform`}>
                      <span className="group-hover:scale-110 transition-transform invert">{q.icon}</span>
                    </div>
                    <p className="text-[0.75rem] font-bold text-ink group-hover:text-primary transition-colors">{q.label}</p>
                    <p className="text-[0.55rem] text-muted mt-1 leading-tight">Kelola data {q.label.toLowerCase()}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Tables */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl shadow-card border border-border/40 overflow-hidden">
                <div className="px-6 py-5 border-b border-border/50 flex items-center justify-between bg-bg/50">
                  <h3 className="text-[0.8rem] font-bold text-ink">Pengaduan Baru</h3>
                  <Link href="/admin/pengaduan" className="text-[0.65rem] text-primary font-bold hover:underline">Lihat Semua</Link>
                </div>
                <div className="divide-y divide-border/50">
                  {recentComplaints.map((c, i) => (
                    <div key={i} className="px-6 py-4 hover:bg-bg/30 transition-colors flex items-center justify-between group">
                      <div className="min-w-0 pr-4">
                        <p className="text-[0.75rem] font-bold text-ink truncate mb-0.5">{c.isu}</p>
                        <p className="text-[0.6rem] text-muted">{c.warga} • {c.tgl}</p>
                      </div>
                      <span className={`text-[0.55rem] font-bold px-2 py-0.5 rounded-md flex-shrink-0 ${statusColor[c.status]}`}>{c.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-card border border-border/40 overflow-hidden">
                <div className="px-6 py-5 border-b border-border/50 flex items-center justify-between bg-bg/50">
                  <h3 className="text-[0.8rem] font-bold text-ink">Berita & Update</h3>
                  <Link href="/admin/berita" className="text-[0.65rem] text-primary font-bold hover:underline">Kelola Berita</Link>
                </div>
                <div className="divide-y divide-border/50">
                  {recentNews.map((n, i) => (
                    <div key={i} className="px-6 py-4 hover:bg-bg/30 transition-colors flex items-center justify-between group">
                      <div className="min-w-0 pr-4">
                        <p className="text-[0.75rem] font-bold text-ink truncate mb-0.5">{n.title}</p>
                        <p className="text-[0.6rem] text-muted">{n.tgl} • {n.views} tayangan</p>
                      </div>
                      <span className={`text-[0.55rem] font-bold px-2 py-0.5 rounded-md flex-shrink-0 ${statusColor[n.status]}`}>{n.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-6">
            
            {/* Task Checklist */}
            <div className="bg-white rounded-3xl p-6 shadow-card border border-border/40">
              <h4 className="text-sm font-bold text-ink mb-4 flex items-center justify-between">
                Tugas Admin
                <span className="text-[0.6rem] bg-accent-pale text-accent px-2 py-0.5 rounded-md">2 Pending</span>
              </h4>
              <div className="space-y-3">
                {[
                  { task: 'Verifikasi iuran warga Mei', done: false },
                  { task: 'Update jadwal Posyandu', done: true },
                  { task: 'Review 2 pengaduan baru', done: false },
                  { task: 'Upload foto kerja bakti', done: true },
                  { task: 'Arsip laporan keuangan Q1', done: false },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-colors ${t.done ? 'bg-green-500 border-green-500 text-white' : 'border-border bg-white'}`}>
                      {t.done && <span className="text-[10px]">✓</span>}
                    </div>
                    <span className={`text-[0.7rem] font-medium ${t.done ? 'text-muted line-through' : 'text-ink'}`}>{t.task}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Notification Center */}
            <div className="bg-white rounded-3xl p-6 shadow-card border border-border/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h4 className="text-sm font-bold text-ink mb-4">Aktivitas Sistem</h4>
              <div className="space-y-4">
                {[
                  { log: 'Berita baru terbit', time: '14:32', type: 'info' },
                  { log: 'Login baru terdeteksi', time: '12:15', type: 'security' },
                  { log: 'Database backup selesai', time: '02:00', type: 'system' },
                ].map((l, i) => (
                  <div key={i} className="flex gap-3 items-start border-l-2 border-border pl-4 relative">
                    <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-border" />
                    <div>
                      <p className="text-[0.7rem] font-bold text-ink leading-none">{l.log}</p>
                      <p className="text-[0.55rem] text-muted mt-1">{l.time} WIB</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full text-center text-[0.65rem] font-bold text-primary mt-6 hover:underline">Lihat Log Lengkap</button>
            </div>

            {/* Admin Support */}
            <div className="bg-hero-gradient rounded-3xl p-6 text-white shadow-lg">
              <h4 className="text-sm font-bold mb-2">Pusat Bantuan Admin</h4>
              <p className="text-[0.65rem] text-white/70 mb-5 leading-relaxed">Mengalami kendala teknis pada portal? Hubungi tim support IT pengembang.</p>
              <button className="w-full bg-accent text-white text-xs font-bold py-3 rounded-xl hover:bg-white hover:text-primary transition-all">
                Hubungi Support 🛠️
              </button>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

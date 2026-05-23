import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Portal Warga RW 44',
  description: 'Dashboard portal warga RW 44 Coatesville — layanan, pengaduan, dan informasi komunitas.',
}

const layananCepat = [
  { icon: '👤', label: 'Lapor Tamu', href: '/portal/tamu', desc: 'Registrasi tamu & kendaraan' },
  { icon: '📄', label: 'Surat Keterangan', href: '/pelayanan/admin-duk', desc: 'Buat surat pengantar & keterangan' },
  { icon: '📣', label: 'Laporkan Masalah', href: '/feedback', desc: 'Sampaikan pengaduan & aspirasi' },
  { icon: '📅', label: 'Kegiatan', href: '/kegiatan', desc: 'Jadwal & daftar kegiatan RW' },
  { icon: '📊', label: 'Laporan', href: '/laporan', desc: 'Laporan keuangan & kegiatan' },
  { icon: '❓', label: 'FAQ', href: '/faq', desc: 'Pertanyaan yang sering diajukan' },
]

const pengumuman = [
  { tipe: 'Penting', text: 'Jadwal Posyandu Juni 2026 — Selasa, 3 Juni 2026 pukul 08.00 WIB', tgl: '22 Mei 2026' },
  { tipe: 'Info', text: 'Rapat Warga RW 44 — Sabtu, 31 Mei 2026 pukul 09.00 WIB di Pos Sekuriti', tgl: '20 Mei 2026' },
  { tipe: 'Info', text: 'Iuran warga Mei 2026 telah jatuh tempo. Harap segera melakukan pembayaran.', tgl: '18 Mei 2026' },
  { tipe: 'Pemeliharaan', text: 'Lapangan olahraga tutup untuk pemeliharaan: 25–28 Mei 2026', tgl: '15 Mei 2026' },
]

const tipeColor: Record<string, string> = {
  Penting: 'bg-red-100 text-red-600',
  Info: 'bg-blue-100 text-blue-700',
  Pemeliharaan: 'bg-yellow-100 text-yellow-700',
}

const upcoming = [
  { tgl: '27 Mei', hari: 'Selasa', nama: 'Imunisasi Posyandu', lokasi: 'Pos Posyandu', jam: '08.00' },
  { tgl: '31 Mei', hari: 'Sabtu', nama: 'Rapat Warga RW 44', lokasi: 'Pos Sekuriti', jam: '09.00' },
  { tgl: '3 Jun', hari: 'Selasa', nama: 'Posyandu Rutin Juni', lokasi: 'Pos Posyandu', jam: '08.00' },
  { tgl: '8 Jun', hari: 'Minggu', nama: 'CTB Touring Puncak', lokasi: 'Gerbang RW 44', jam: '06.00' },
]

const recentActivity = [
  { icon: '📢', title: 'Laporan Lampu Jalan Mati', status: 'Diproses', tgl: '21 Mei 2026', id: 'TKT-042' },
  { icon: '👤', title: 'Lapor Tamu: Budi Santoso', status: 'Selesai', tgl: '20 Mei 2026', id: 'VST-112' },
  { icon: '📄', title: 'Permohonan Surat Domisili', status: 'Selesai', tgl: '18 Mei 2026', id: 'DOC-089' },
]

export default function PortalPage() {
  return (
    <>
      <PageHero
        tag="Portal Warga"
        title="Portal Warga RW 44"
        subtitle="Akses semua layanan, informasi, dan fasilitas komunitas RW 44 Coatesville dalam satu halaman."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Portal Warga' }]}
      />

      <section className="section bg-bg">
        <div className="container">

          {/* Welcome & Stats Row */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <AnimateOnScroll className="lg:col-span-2">
              <div className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-white/60 text-xs font-bold uppercase tracking-[2px] mb-2">Selamat Datang Kembali</p>
                  <h2 className="text-white text-2xl mb-2">Warga Blok A-07</h2>
                  <p className="text-white/70 text-sm max-w-md mb-6">Portal digital RW 44 Coatesville — Kelola kebutuhan warga dengan cepat, transparan, dan terintegrasi.</p>
                  <div className="flex gap-3">
                    <Link href="/auth/login" className="bg-white text-primary text-xs font-bold px-6 py-3 rounded-xl hover:bg-accent hover:text-white transition-all">Ganti Akun</Link>
                    <Link href="/auth/register" className="bg-white/10 border border-white/30 text-white text-xs font-bold px-6 py-3 rounded-xl hover:bg-white/20 transition-all">Pengaturan Profile</Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="bg-white rounded-3xl p-8 shadow-card border border-border/50 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-bold text-muted uppercase tracking-wider">Status Iuran Mei 2026</h4>
                    <span className="text-[0.65rem] bg-red-100 text-red-600 font-bold px-2 py-0.5 rounded-full">Belum Bayar</span>
                  </div>
                  <div className="text-2xl font-serif font-bold text-ink mb-1">Rp 150.000</div>
                  <p className="text-[0.65rem] text-muted">Batas waktu: 25 Mei 2026</p>
                </div>
                <div className="mt-6 space-y-3">
                  <button className="w-full bg-accent text-white text-xs font-bold py-3 rounded-xl hover:bg-primary transition-all shadow-md">Bayar Sekarang →</button>
                  <Link href="/laporan/keuangan" className="block text-center text-[0.65rem] text-muted hover:text-primary transition-colors">Lihat Riwayat Transaksi</Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">

              {/* Emergency Row */}
              <AnimateOnScroll delay={150}>
                <div className="bg-white rounded-3xl p-6 shadow-card border border-red-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  <div className="flex items-center gap-2 mb-4 relative z-10">
                    <span className="text-xl">🚨</span>
                    <h3 className="text-sm font-bold text-red-600 uppercase tracking-wider">Akses Darurat Satu-Ketuk</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
                    {[
                      { label: 'Sekuriti', icon: '📞', color: 'bg-green-600' },
                      { label: 'Ambulans', icon: '🚑', color: 'bg-red-600' },
                      { label: 'Pemadam', icon: '🚒', color: 'bg-red-600' },
                      { label: 'PLN', icon: '⚡', color: 'bg-yellow-600' },
                    ].map((e, i) => (
                      <button key={i} className="flex flex-col items-center gap-2 p-3 bg-bg hover:bg-white rounded-2xl border border-border hover:border-red-200 transition-all group">
                        <div className={`w-10 h-10 ${e.color} rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>{e.icon}</div>
                        <span className="text-[0.65rem] font-bold text-ink">{e.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Layanan cepat */}
              <AnimateOnScroll delay={200}>
                <h3 className="text-base font-bold text-ink mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-accent rounded-full" /> Layanan Digital
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {layananCepat.map((l, i) => (
                    <Link key={i} href={l.href} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 group border border-border/40">
                      <div className="w-12 h-12 bg-bg rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-primary transition-colors duration-300">
                        <span className="group-hover:scale-110 group-hover:invert transition-all duration-300">{l.icon}</span>
                      </div>
                      <p className="text-[0.9rem] font-bold text-ink mb-1 group-hover:text-primary transition-colors">{l.label}</p>
                      <p className="text-[0.65rem] text-muted leading-tight">{l.desc}</p>
                    </Link>
                  ))}
                </div>
              </AnimateOnScroll>

              {/* Pengumuman & Activity */}
              <div className="grid md:grid-cols-2 gap-8">
                <AnimateOnScroll delay={250}>
                  <h3 className="text-base font-bold text-ink mb-4">Pengumuman Terbaru</h3>
                  <div className="space-y-3">
                    {pengumuman.map((p, i) => (
                      <div key={i} className="bg-white rounded-2xl p-4 shadow-card flex gap-4 items-start border border-border/40">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${p.tipe === 'Penting' ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]' : 'bg-blue-400'}`} />
                        <div className="flex-1">
                          <p className="text-[0.75rem] text-ink font-semibold leading-snug">{p.text}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className={`text-[0.55rem] font-bold px-2 py-0.5 rounded-md ${tipeColor[p.tipe]}`}>{p.tipe}</span>
                            <span className="text-[0.55rem] text-muted">{p.tgl}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll delay={300}>
                  <h3 className="text-base font-bold text-ink mb-4">Aktivitas Terakhir</h3>
                  <div className="space-y-3">
                    {recentActivity.map((a, i) => (
                      <div key={i} className="bg-white rounded-2xl p-4 shadow-card flex items-center gap-4 border border-border/40 group cursor-pointer hover:border-primary/30 transition-all">
                        <div className="w-10 h-10 bg-bg rounded-xl flex items-center justify-center text-lg group-hover:bg-accent-pale transition-colors">{a.icon}</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[0.75rem] font-bold text-ink truncate">{a.title}</p>
                          <p className="text-[0.55rem] text-muted mt-0.5">{a.id} • {a.tgl}</p>
                        </div>
                        <div className={`text-[0.55rem] font-bold px-2 py-0.5 rounded-md ${a.status === 'Selesai' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {a.status}
                        </div>
                      </div>
                    ))}
                    <button className="w-full py-3 text-[0.7rem] font-bold text-muted hover:text-primary transition-colors bg-white rounded-xl border border-dashed border-border mt-2">Lihat Semua Aktivitas</button>
                  </div>
                </AnimateOnScroll>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">

              {/* Kegiatan mendatang */}
              <AnimateOnScroll delay={350}>
                <div className="bg-white rounded-3xl p-6 shadow-card border border-border/40">
                  <div className="flex items-center justify-between mb-5">
                    <h4 className="text-sm font-bold text-ink">Agenda Komunitas</h4>
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  <div className="space-y-4">
                    {upcoming.map((e, i) => (
                      <div key={i} className="flex gap-4 items-start group">
                        <div className="w-11 h-11 bg-bg rounded-xl flex flex-col items-center justify-center border border-border group-hover:bg-primary transition-colors">
                          <p className="text-[0.6rem] font-bold text-muted group-hover:text-white/70 leading-none mb-1 uppercase">{e.hari.substring(0,3)}</p>
                          <p className="text-xs font-bold text-primary group-hover:text-white leading-none">{e.tgl.split(' ')[0]}</p>
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-[0.75rem] font-bold text-ink group-hover:text-primary transition-colors">{e.nama}</p>
                          <p className="text-[0.6rem] text-muted mt-1 flex items-center gap-1">
                            <span>📍 {e.lokasi}</span> • <span>🕒 {e.jam}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href="/kegiatan" className="block text-center text-[0.7rem] font-bold text-primary mt-6 hover:underline py-2 bg-accent-pale rounded-xl">Lihat Semua Agenda →</Link>
                </div>
              </AnimateOnScroll>

              {/* RW Info Card */}
              <AnimateOnScroll delay={400}>
                <div className="bg-white rounded-3xl p-6 shadow-card border border-border/40 relative overflow-hidden">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent-pale flex items-center justify-center text-lg">🏠</div>
                    <div>
                      <h4 className="text-[0.75rem] font-bold text-ink">Informasi Cluster</h4>
                      <p className="text-[0.55rem] text-muted">RW 44 Coatesville</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: 'Ketua RW', val: 'Bpk. Segera Tersedia' },
                      { label: 'Ketua RT A-07', val: 'Bpk. Segera Tersedia' },
                      { label: 'Total Warga', val: '±450 Kepala Keluarga' },
                      { label: 'Sekretariat', val: 'Buka 09.00 - 16.00' },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-[0.65rem] border-b border-border/50 pb-2 last:border-0 last:pb-0">
                        <span className="text-muted">{item.label}</span>
                        <span className="font-semibold text-ink">{item.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Quick report */}
              <AnimateOnScroll delay={450}>
                <div className="bg-hero-gradient rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent/20 rounded-full" />
                  <h4 className="text-sm font-bold text-white mb-2 relative z-10">Lapor Masalah Kawasan</h4>
                  <p className="text-[0.65rem] text-white/70 mb-5 relative z-10 leading-relaxed">Menemukan lampu jalan mati, sampah menumpuk, atau masalah keamanan? Laporkan segera.</p>
                  <Link href="/feedback" className="block text-center bg-accent text-white text-xs font-bold py-3 rounded-xl hover:bg-white hover:text-primary transition-all shadow-md relative z-10">
                    📣 Buat Laporan Baru
                  </Link>
                </div>
              </AnimateOnScroll>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}

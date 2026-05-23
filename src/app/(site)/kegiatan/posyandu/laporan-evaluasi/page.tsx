import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import PosyanduSubnav from '../PosyanduSubnav'

export const metadata: Metadata = {
  title: 'Laporan & Evaluasi – Posyandu Sehat Ceria',
  description: 'Laporan kinerja dan evaluasi program Posyandu Sehat Ceria RW 44 Coatesville tahun 2026.',
}

const kpiData = [
  { label: 'Kunjungan Posyandu YTD', value: 247, target: 500, unit: 'kunjungan', icon: '👥', color: 'text-blue-700', bar: 'bg-blue-500' },
  { label: 'Balita Terpantau', value: 38, target: 45, unit: 'anak', icon: '👶', color: 'text-pink-700', bar: 'bg-pink-500' },
  { label: 'Lansia Aktif', value: 62, target: 80, unit: 'orang', icon: '👴', color: 'text-purple-700', bar: 'bg-purple-500' },
  { label: 'Ibu Hamil Terpantau', value: 11, target: 15, unit: 'orang', icon: '🤰', color: 'text-rose-700', bar: 'bg-rose-500' },
  { label: 'Kunjungan Rumah', value: 34, target: 60, unit: 'kunjungan', icon: '🏠', color: 'text-green-700', bar: 'bg-green-500' },
  { label: 'Peserta Olahraga Aktif', value: 78, target: 100, unit: 'orang', icon: '🏃', color: 'text-lime-700', bar: 'bg-lime-500' },
]

const monthlyData = [
  { bulan: 'Jan', kunjungan: 44, balita: 36, lansia: 55 },
  { bulan: 'Feb', kunjungan: 51, balita: 38, lansia: 58 },
  { bulan: 'Mar', kunjungan: 47, balita: 37, lansia: 60 },
  { bulan: 'Apr', kunjungan: 55, balita: 39, lansia: 61 },
  { bulan: 'Mei', kunjungan: 50, balita: 38, lansia: 62 },
]

const maxKunjungan = Math.max(...monthlyData.map((d) => d.kunjungan))

const laporan = [
  { judul: 'Laporan Posyandu Mei 2026', tgl: '31 Mei 2026', status: 'Tersedia', size: '248 KB', type: 'PDF' },
  { judul: 'Laporan Posyandu Apr 2026', tgl: '30 Apr 2026', status: 'Tersedia', size: '235 KB', type: 'PDF' },
  { judul: 'Laporan Posyandu Mar 2026', tgl: '31 Mar 2026', status: 'Tersedia', size: '212 KB', type: 'PDF' },
  { judul: 'Laporan Posyandu Feb 2026', tgl: '28 Feb 2026', status: 'Tersedia', size: '198 KB', type: 'PDF' },
  { judul: 'Laporan Posyandu Jan 2026', tgl: '31 Jan 2026', status: 'Tersedia', size: '220 KB', type: 'PDF' },
  { judul: 'Laporan Tahunan 2025', tgl: '15 Jan 2026', status: 'Tersedia', size: '1.2 MB', type: 'PDF' },
]

const pencapaian = [
  { icon: '🏅', title: 'Posyandu Aktif Kabupaten', desc: 'Ditetapkan sebagai Posyandu Aktif kategori Madya oleh Dinas Kesehatan Kabupaten Bogor tahun 2025.', tgl: 'Des 2025' },
  { icon: '🎖️', title: 'Zero Stunting Award', desc: 'Tidak ditemukan kasus stunting baru di wilayah RW 44 Coatesville selama 3 tahun berturut-turut.', tgl: 'Nov 2025' },
  { icon: '🏆', title: 'Cakupan Imunisasi 95%', desc: 'Cakupan imunisasi dasar lengkap balita mencapai 95% — melampaui target nasional 90%.', tgl: 'Okt 2025' },
  { icon: '⭐', title: 'Kader Teladan Provinsi', desc: 'Satu kader Posyandu Sehat Ceria terpilih sebagai Kader Posyandu Teladan Tingkat Provinsi Jawa Barat.', tgl: 'Sep 2025' },
]

export default function LaporanEvaluasiPage() {
  return (
    <>
      <PageHero
        tag="Laporan & Evaluasi"
        title="Transparansi Kinerja Posyandu 2026"
        subtitle="Kami berkomitmen pada transparansi dan akuntabilitas layanan. Seluruh data kinerja dipublikasikan secara terbuka kepada warga RW 44."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Kegiatan', href: '/kegiatan' },
          { label: 'Posyandu', href: '/kegiatan/posyandu' },
          { label: 'Laporan & Evaluasi' },
        ]}
      />

      <PosyanduSubnav />

      {/* KPI Dashboard */}
      <section className="section bg-bg">
        <div className="container">
          <SectionHeader
            tag="Dashboard KPI 2026"
            title="Capaian Kinerja Posyandu Sehat Ceria"
            subtitle="Data kumulatif Januari–Mei 2026. Target dihitung untuk satu tahun penuh."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {kpiData.map((k, i) => {
              const pct = Math.round((k.value / k.target) * 100)
              return (
                <AnimateOnScroll key={i} delay={i * 60}>
                  <div className="bg-white rounded-2xl p-6 shadow-card border border-border/40">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-xs text-muted font-semibold">{k.label}</p>
                        <div className={`text-3xl font-serif font-bold ${k.color} mt-1`}>
                          {k.value.toLocaleString()}
                        </div>
                        <p className="text-xs text-muted mt-0.5">dari target {k.target} {k.unit}</p>
                      </div>
                      <div className="text-3xl">{k.icon}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted">Progress</span>
                        <span className={`font-bold ${pct >= 80 ? 'text-green-600' : pct >= 50 ? 'text-amber-600' : 'text-red-600'}`}>{pct}%</span>
                      </div>
                      <div className="h-2 bg-border rounded-full overflow-hidden">
                        <div
                          className={`h-full ${k.bar} rounded-full transition-all duration-700`}
                          style={{ width: `${Math.min(pct, 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* Grafik Tren */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader tag="Tren Bulanan" title="Grafik Kunjungan Jan–Mei 2026" />
          <AnimateOnScroll>
            <div className="bg-bg rounded-3xl p-8 border border-border shadow-card">
              <div className="flex items-end gap-4 h-48 mb-4">
                {monthlyData.map((d, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <span className="text-xs font-bold text-primary">{d.kunjungan}</span>
                    <div className="w-full flex flex-col justify-end" style={{ height: '160px' }}>
                      <div
                        className="w-full bg-primary rounded-t-lg transition-all duration-700 hover:bg-primary-mid cursor-pointer"
                        style={{ height: `${(d.kunjungan / maxKunjungan) * 100}%` }}
                        title={`${d.bulan}: ${d.kunjungan} kunjungan`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 justify-center">
                {monthlyData.map((d, i) => (
                  <div key={i} className="flex-1 text-center text-xs font-bold text-muted">{d.bulan}</div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 pt-5 border-t border-border">
                {[
                  { label: 'Total Kunjungan (YTD)', val: monthlyData.reduce((s, d) => s + d.kunjungan, 0) },
                  { label: 'Rata-rata per Bulan', val: Math.round(monthlyData.reduce((s, d) => s + d.kunjungan, 0) / monthlyData.length) },
                  { label: 'Kunjungan Tertinggi', val: maxKunjungan },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-serif font-bold text-primary">{s.val}</div>
                    <p className="text-xs text-muted mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Pencapaian */}
      <section className="section bg-bg">
        <div className="container">
          <SectionHeader tag="Penghargaan & Pencapaian" title="Pengakuan atas Kinerja Posyandu" />
          <div className="grid md:grid-cols-2 gap-5">
            {pencapaian.map((p, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 shadow-card border border-border/40 flex gap-4">
                  <div className="w-14 h-14 bg-accent-pale rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                    {p.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-bold text-sm text-ink">{p.title}</h4>
                      <span className="text-[0.65rem] text-muted flex-shrink-0 ml-2">{p.tgl}</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Arsip Laporan */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            tag="Arsip Laporan"
            title="Dokumen Laporan Posyandu"
            subtitle="Seluruh laporan bulanan dan tahunan tersedia untuk diunduh oleh warga."
          />
          <AnimateOnScroll>
            <div className="bg-bg rounded-3xl border border-border overflow-hidden shadow-card">
              {laporan.map((l, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 px-6 py-5 border-b border-border/50 last:border-0 hover:bg-white transition-colors group ${i % 2 === 0 ? '' : 'bg-white/50'}`}
                >
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-lg flex-shrink-0">📄</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-ink truncate">{l.judul}</p>
                    <p className="text-xs text-muted mt-0.5">{l.tgl} • {l.size} • {l.type}</p>
                  </div>
                  <span className="text-[0.65rem] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-md flex-shrink-0">{l.status}</span>
                  <button className="hidden group-hover:flex items-center gap-1 text-xs font-bold text-primary bg-accent-pale px-3 py-1.5 rounded-lg transition-all flex-shrink-0">
                    ↓ Unduh
                  </button>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="mt-5 bg-accent-pale rounded-2xl p-5 border border-accent/20 flex items-center gap-4">
              <span className="text-2xl">📌</span>
              <div>
                <p className="text-sm font-semibold text-ink">Permintaan Laporan Khusus</p>
                <p className="text-xs text-muted mt-0.5">Untuk laporan periode atau format tertentu, silakan hubungi pengurus posyandu melalui halaman Kontak.</p>
              </div>
              <Link href="/kontak" className="ml-auto text-xs font-bold text-primary hover:text-accent transition-colors flex-shrink-0">
                Hubungi →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cta-gradient py-20 text-center">
        <div className="container">
          <h2 className="text-white mb-4">Dukung Posyandu Sehat Ceria</h2>
          <p className="text-white/65 max-w-lg mx-auto mb-8">
            Partisipasi aktif warga adalah kunci keberhasilan program posyandu. Mari bersama membangun komunitas Coatesville yang sehat.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/kegiatan/posyandu" className="btn-primary">Kembali ke Beranda Posyandu</Link>
            <Link href="/kontak" className="btn-outline">Hubungi Kami</Link>
          </div>
        </div>
      </section>
    </>
  )
}

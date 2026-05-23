import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import PosyanduSubnav from '../PosyanduSubnav'

export const metadata: Metadata = {
  title: 'Pembekalan Kader – Posyandu Sehat Ceria',
  description: 'Program pembekalan dan pelatihan kader kesehatan Posyandu Sehat Ceria RW 44 Coatesville.',
}

const kurikulum = [
  {
    modul: '01',
    judul: 'Dasar Kesehatan Masyarakat',
    durasi: '8 Jam',
    topik: ['Epidemiologi dasar', 'Pencegahan penyakit menular', 'Sanitasi & higiene lingkungan', 'Pemantauan kesehatan keluarga'],
    color: 'border-blue-200 bg-blue-50',
    titleColor: 'text-blue-800',
  },
  {
    modul: '02',
    judul: 'Pelayanan Ibu & Anak',
    durasi: '12 Jam',
    topik: ['Antenatal care (ANC) dasar', 'Pemantauan tumbuh kembang', 'Imunisasi & vaksinasi', 'Deteksi dini gizi buruk'],
    color: 'border-pink-200 bg-pink-50',
    titleColor: 'text-pink-800',
  },
  {
    modul: '03',
    judul: 'Pelayanan Lansia & PTM',
    durasi: '10 Jam',
    topik: ['Skrining hipertensi & diabetes', 'Pemantauan kesehatan lansia', 'Olahraga terapeutik lansia', 'Manajemen obat sederhana'],
    color: 'border-purple-200 bg-purple-50',
    titleColor: 'text-purple-800',
  },
  {
    modul: '04',
    judul: 'Komunikasi Kesehatan',
    durasi: '6 Jam',
    topik: ['Teknik edukasi warga', 'Penyuluhan kelompok', 'Konseling sederhana', 'Komunikasi lintas budaya'],
    color: 'border-green-200 bg-green-50',
    titleColor: 'text-green-800',
  },
  {
    modul: '05',
    judul: 'Sistem Pencatatan & Pelaporan',
    durasi: '4 Jam',
    topik: ['Penggunaan buku register', 'Input data digital', 'Pelaporan bulanan ke puskesmas', 'Analisis data sederhana'],
    color: 'border-amber-200 bg-amber-50',
    titleColor: 'text-amber-800',
  },
  {
    modul: '06',
    judul: 'Praktik & Simulasi Lapangan',
    durasi: '8 Jam',
    topik: ['Simulasi pelayanan posyandu', 'Role play kunjungan rumah', 'Praktik pengukuran & pemeriksaan', 'Evaluasi kompetensi akhir'],
    color: 'border-orange-200 bg-orange-50',
    titleColor: 'text-orange-800',
  },
]

const jadwal2026 = [
  { bulan: 'Feb 2026', modul: 'Modul 01 & 02', lokasi: 'GSG Coatesville', status: 'Selesai', peserta: 8 },
  { bulan: 'Apr 2026', modul: 'Modul 03 & 04', lokasi: 'GSG Coatesville', status: 'Selesai', peserta: 8 },
  { bulan: 'Jun 2026', modul: 'Modul 05', lokasi: 'Puskesmas Klapanunggal', status: 'Mendatang', peserta: 8 },
  { bulan: 'Agu 2026', modul: 'Modul 06 – Praktik', lokasi: 'Lapangan & GSG', status: 'Mendatang', peserta: 8 },
  { bulan: 'Okt 2026', modul: 'Evaluasi & Sertifikasi', lokasi: 'Puskesmas Klapanunggal', status: 'Mendatang', peserta: 8 },
]

const kompetensi = [
  { icon: '🩺', title: 'Pemeriksaan Fisik Dasar', level: 85 },
  { icon: '📊', title: 'Pencatatan & Pelaporan', level: 90 },
  { icon: '💊', title: 'Manajemen Obat & Vitamin', level: 78 },
  { icon: '💬', title: 'Komunikasi & Penyuluhan', level: 92 },
  { icon: '🤰', title: 'Layanan Ibu & Anak', level: 88 },
  { icon: '👴', title: 'Pelayanan Lansia & PTM', level: 80 },
]

const statusColor: Record<string, string> = {
  Selesai: 'bg-green-100 text-green-700',
  Mendatang: 'bg-blue-100 text-blue-700',
}

export default function PembekalanKaderPage() {
  return (
    <>
      <PageHero
        tag="Pembekalan Kader"
        title="Investasi Terbaik untuk Komunitas"
        subtitle="Program pembekalan kader adalah fondasi kualitas layanan Posyandu Sehat Ceria — kader terlatih berarti warga terlayani dengan lebih baik."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Kegiatan', href: '/kegiatan' },
          { label: 'Posyandu', href: '/kegiatan/posyandu' },
          { label: 'Pembekalan Kader' },
        ]}
      />

      <PosyanduSubnav />

      {/* Intro */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll delay={150} className="order-last lg:order-first relative">
              <div className="rounded-2xl overflow-hidden shadow-card-lg aspect-[4/3]">
                <Image
                  src="https://picsum.photos/seed/kader-training/800/600"
                  alt="Pembekalan Kader"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-card-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">🎓</div>
                <div>
                  <div className="font-serif font-bold text-primary text-sm">48 Jam</div>
                  <div className="text-muted text-xs">Total Kurikulum Pelatihan</div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="section-tag">Program Pembekalan</div>
              <h2 className="mt-1 mb-3">Kader Kompeten, Komunitas Sehat</h2>
              <div className="divider divider-left" />
              <p className="mt-5 leading-relaxed">
                Kader kesehatan adalah tulang punggung pelayanan Posyandu Sehat Ceria. Mereka adalah warga biasa yang dengan sukarela meluangkan waktu untuk belajar dan melayani sesama.
              </p>
              <p className="mt-4 leading-relaxed">
                Program pembekalan kami dirancang bersama <strong className="text-primary">Puskesmas Klapanunggal</strong> dan mengacu pada standar kompetensi kader Kementerian Kesehatan RI. Total{' '}
                <strong className="text-primary">48 jam pelatihan</strong> dalam 6 modul sepanjang tahun memastikan setiap kader siap memberikan layanan berkualitas.
              </p>
              <div className="mt-7 grid grid-cols-3 gap-4">
                {[
                  { num: '6', label: 'Modul Pelatihan', icon: '📚' },
                  { num: '48h', label: 'Total Jam Latihan', icon: '⏱️' },
                  { num: '8', label: 'Kader Aktif', icon: '👥' },
                ].map((s, i) => (
                  <div key={i} className="bg-bg rounded-2xl p-4 text-center border border-border">
                    <div className="text-2xl mb-1">{s.icon}</div>
                    <div className="font-serif font-bold text-2xl text-primary">{s.num}</div>
                    <div className="text-xs text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Kurikulum */}
      <section className="section bg-bg">
        <div className="container">
          <SectionHeader
            tag="Kurikulum 2026"
            title="6 Modul Pembekalan Kader"
            subtitle="Setiap modul dirancang untuk membangun kompetensi kader secara bertahap dan komprehensif."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {kurikulum.map((k, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className={`rounded-2xl border p-6 ${k.color} hover:-translate-y-1 transition-all duration-300`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`text-xs font-bold uppercase tracking-wider ${k.titleColor}`}>Modul {k.modul}</div>
                    <span className="text-xs bg-white/60 px-2 py-0.5 rounded-full font-semibold text-muted">{k.durasi}</span>
                  </div>
                  <h3 className={`text-base font-bold mb-3 ${k.titleColor}`}>{k.judul}</h3>
                  <ul className="space-y-1.5">
                    {k.topik.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-xs text-muted">
                        <span className="mt-0.5 flex-shrink-0">→</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Kompetensi */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            tag="Tingkat Kompetensi"
            title="Pencapaian Kompetensi Kader 2026"
            subtitle="Penilaian rata-rata kompetensi seluruh kader aktif berdasarkan evaluasi terakhir."
          />
          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {kompetensi.map((k, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className="bg-bg rounded-2xl p-5 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{k.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-semibold text-ink">{k.title}</p>
                        <span className="text-sm font-bold text-primary">{k.level}%</span>
                      </div>
                      <div className="h-2 bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${k.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Jadwal Pelatihan */}
      <section className="section bg-bg">
        <div className="container">
          <SectionHeader tag="Jadwal 2026" title="Kalender Pelatihan Kader 2026" />
          <AnimateOnScroll>
            <div className="bg-white rounded-3xl shadow-card overflow-hidden border border-border">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Periode</th>
                      <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Modul</th>
                      <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Lokasi</th>
                      <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Peserta</th>
                      <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jadwal2026.map((j, i) => (
                      <tr key={i} className={`border-b border-border/50 transition-colors hover:bg-bg ${i % 2 === 0 ? '' : 'bg-bg/50'}`}>
                        <td className="px-6 py-4 font-semibold text-ink">{j.bulan}</td>
                        <td className="px-6 py-4 text-muted">{j.modul}</td>
                        <td className="px-6 py-4 text-muted">{j.lokasi}</td>
                        <td className="px-6 py-4 text-muted">{j.peserta} kader</td>
                        <td className="px-6 py-4">
                          <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusColor[j.status]}`}>{j.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Bergabung */}
      <section className="bg-cta-gradient py-20 text-center">
        <div className="container">
          <div className="section-tag-light mx-auto">Ingin Menjadi Kader?</div>
          <h2 className="text-white mt-2 mb-4">Bergabunglah Bersama Tim Kader Kami</h2>
          <p className="text-white/65 max-w-lg mx-auto mb-8">
            Daftarkan diri Anda sebagai calon kader Posyandu Sehat Ceria. Kami menyediakan pelatihan lengkap — tidak diperlukan latar belakang medis.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/kontak" className="btn-primary">Daftar Jadi Kader</Link>
            <Link href="/kegiatan/posyandu/layanan-unggulan" className="btn-outline">Lihat Layanan Kami</Link>
          </div>
        </div>
      </section>
    </>
  )
}

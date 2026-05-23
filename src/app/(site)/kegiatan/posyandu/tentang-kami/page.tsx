import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import PosyanduSubnav from '../PosyanduSubnav'

export const metadata: Metadata = {
  title: 'Tentang Kami – Posyandu Sehat Ceria',
  description: 'Latar belakang pendirian, visi misi, dan Integrasi Layanan Primer Posyandu Sehat Ceria RW 44 Coatesville.',
}

const timeline = [
  {
    tahun: '2018',
    judul: 'Inisiasi Posyandu',
    desc: 'Gagasan pendirian posyandu pertama kali dicetuskan oleh pengurus RW 44 sebagai respons atas kebutuhan layanan kesehatan dasar warga perumahan Coatesville.',
  },
  {
    tahun: '2019',
    judul: 'Pembentukan Tim Kader',
    desc: 'Rekrutmen dan pelatihan perdana 8 kader kesehatan dari warga Coatesville yang berdedikasi, bekerja sama dengan Puskesmas Klapanunggal.',
  },
  {
    tahun: '2020',
    judul: 'Operasional Pertama',
    desc: 'Posyandu Sehat Ceria resmi beroperasi dengan layanan imunisasi, penimbangan balita, dan konsultasi kesehatan ibu hamil.',
  },
  {
    tahun: '2022',
    judul: 'Ekspansi Layanan',
    desc: 'Layanan diperluas mencakup skrining lansia, pemeriksaan PTM (hipertensi & diabetes), dan program PMT untuk balita.',
  },
  {
    tahun: '2024',
    judul: 'Integrasi Layanan Primer',
    desc: 'Posyandu bertransformasi mengadopsi konsep Integrasi Layanan Primer — melayani seluruh siklus kehidupan warga secara terpadu.',
  },
  {
    tahun: '2026',
    judul: 'Pengembangan Digital',
    desc: 'Implementasi sistem informasi posyandu digital dan portal warga untuk transparansi dan kemudahan akses layanan.',
  },
]

const pengurus = [
  { jabatan: 'Ketua Posyandu', nama: 'Segera Tersedia', icon: '👑', color: 'bg-accent-pale border-accent/30' },
  { jabatan: 'Sekretaris', nama: 'Segera Tersedia', icon: '📋', color: 'bg-blue-50 border-blue-200' },
  { jabatan: 'Bendahara', nama: 'Segera Tersedia', icon: '💰', color: 'bg-green-50 border-green-200' },
  { jabatan: 'Koordinator Kader', nama: 'Segera Tersedia', icon: '👥', color: 'bg-purple-50 border-purple-200' },
  { jabatan: 'Kader Kesehatan I', nama: 'Segera Tersedia', icon: '🩺', color: 'bg-bg border-border' },
  { jabatan: 'Kader Kesehatan II', nama: 'Segera Tersedia', icon: '🩺', color: 'bg-bg border-border' },
  { jabatan: 'Kader Kesehatan III', nama: 'Segera Tersedia', icon: '🩺', color: 'bg-bg border-border' },
  { jabatan: 'Kader Kesehatan IV', nama: 'Segera Tersedia', icon: '🩺', color: 'bg-bg border-border' },
]

const integrasiPillars = [
  {
    icon: '👥',
    color: 'bg-blue-600',
    title: 'People – Pengembangan Kader',
    desc: 'Investasi berkelanjutan pada kualitas dan kompetensi kader kesehatan sebagai ujung tombak pelayanan.',
    items: [
      'Pelatihan berbasis kompetensi nasional',
      'Supervisi dan mentoring reguler',
      'Sistem penghargaan kader berprestasi',
      'Pengembangan komunikasi efektif',
      'Sertifikasi kader Kemkes RI',
    ],
  },
  {
    icon: '⚙️',
    color: 'bg-green-600',
    title: 'Process – Tata Kelola Layanan',
    desc: 'Sistem dan prosedur yang terstandar untuk memastikan kualitas dan konsistensi pelayanan kesehatan.',
    items: [
      'SOP layanan setiap segmen usia',
      'Pencatatan & pelaporan berbasis digital',
      'Jadwal pelayanan terstruktur',
      'Sistem rujukan ke Puskesmas',
      'Evaluasi mutu pelayanan berkala',
    ],
  },
  {
    icon: '🖥️',
    color: 'bg-purple-600',
    title: 'Platform – Infrastruktur & Sistem',
    desc: 'Fasilitas fisik dan teknologi yang memadai untuk mendukung kelancaran operasional posyandu.',
    items: [
      'Ruang pelayanan berstandar',
      'Alat ukur & pemeriksaan kalibrasi',
      'Sistem informasi posyandu digital',
      'Logistik obat dan vitamin',
      'Sumber dana berkelanjutan',
    ],
  },
  {
    icon: '🏆',
    color: 'bg-amber-600',
    title: 'Leadership – Kepemimpinan',
    desc: 'Penguatan tata kelola kepemimpinan yang berorientasi pada pelayanan prima dan akuntabilitas.',
    items: [
      'Pengambilan keputusan berbasis data',
      'Komunikasi transparan dengan warga',
      'Kolaborasi lintas sektor',
      'Pemecahan masalah inovatif',
      'Pemberdayaan pengurus & kader',
    ],
  },
]

const mitra = [
  { nama: 'Puskesmas Klapanunggal', peran: 'Mitra layanan kesehatan primer & rujukan', icon: '🏥' },
  { nama: 'Dinas Kesehatan Kab. Bogor', peran: 'Pembinaan teknis & kepatuhan standar', icon: '🏛️' },
  { nama: 'Posyandu RW Sekitar', peran: 'Berbagi praktik terbaik & kader', icon: '🤝' },
  { nama: 'PKK RW 44', peran: 'Koordinasi kegiatan pemberdayaan ibu', icon: '👩‍👧' },
]

export default function TentangKamiPage() {
  return (
    <>
      <PageHero
        tag="Tentang Kami"
        title="Sejarah & Fondasi Posyandu Sehat Ceria"
        subtitle="Mengenal lebih dalam latar belakang pendirian, tata kelola, dan filosofi Integrasi Layanan Primer yang menjadi landasan kerja kami."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Kegiatan', href: '/kegiatan' },
          { label: 'Posyandu', href: '/kegiatan/posyandu' },
          { label: 'Tentang Kami' },
        ]}
      />

      <PosyanduSubnav />

      {/* Latar Belakang */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <div className="section-tag">Latar Belakang</div>
              <h2 className="mt-1 mb-3">Mengapa Posyandu Sehat Ceria Hadir?</h2>
              <div className="divider divider-left" />
              <p className="mt-5 leading-relaxed">
                Perumahan modern seperti Coatesville seringkali terfokus pada fasilitas fisik dan keamanan, namun akses terhadap layanan kesehatan dasar bagi warga justru terabaikan.{' '}
                <strong className="text-primary">Posyandu Sehat Ceria</strong> lahir dari kesadaran bahwa sebuah komunitas yang sehat adalah fondasi dari kehidupan yang produktif dan harmonis.
              </p>
              <p className="mt-4 leading-relaxed">
                Dengan prinsip <em>dari warga, oleh warga, untuk warga</em>, Posyandu Sehat Ceria menjembatani kebutuhan layanan kesehatan dasar yang terjangkau dan mudah diakses — langsung di lingkungan perumahan Coatesville, tanpa perlu antre jauh di fasilitas kesehatan umum.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-4">
                {[
                  { num: '8+', label: 'Kader Aktif', icon: '👥' },
                  { num: '450+', label: 'Warga Terlayani', icon: '🏘️' },
                  { num: '7', label: 'Layanan Aktif', icon: '🩺' },
                  { num: '2019', label: 'Tahun Berdiri', icon: '📅' },
                ].map((s, i) => (
                  <div key={i} className="bg-bg rounded-2xl p-4 text-center border border-border">
                    <div className="text-2xl mb-1">{s.icon}</div>
                    <div className="font-serif font-bold text-2xl text-primary">{s.num}</div>
                    <div className="text-xs text-muted mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-lg aspect-[4/3]">
                <Image
                  src="https://picsum.photos/seed/posyandu-history/800/600"
                  alt="Latar Belakang Posyandu"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-bg">
        <div className="container">
          <SectionHeader tag="Perjalanan Kami" title="Timeline Posyandu Sehat Ceria" />
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div className={`flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 md:px-10">
                      <div className={`bg-white rounded-2xl p-6 shadow-card border border-border/50 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                        <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">{t.tahun}</div>
                        <h4 className="font-semibold text-primary mb-2">{t.judul}</h4>
                        <p className="text-xs leading-relaxed text-muted">{t.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-10 flex-shrink-0 flex-col items-center relative z-10">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold shadow-card">
                        {t.tahun.slice(2)}
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrasi Layanan Primer */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            tag="Integrasi Layanan Primer"
            title="Model 4P: Fondasi Operasional Kami"
            subtitle="Posyandu Sehat Ceria mengadopsi kerangka Integrasi Layanan Primer dengan model 4P sebagai landasan tata kelola dan pelayanan."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {integrasiPillars.map((p, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl border border-border shadow-card p-6 hover:-translate-y-1 hover:shadow-card-lg transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 ${p.color} rounded-xl flex items-center justify-center text-xl text-white flex-shrink-0`}>
                      {p.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-ink">{p.title}</h3>
                      <p className="text-xs text-muted mt-1 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-primary-mid mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pengurus */}
      <section className="section bg-bg">
        <div className="container">
          <SectionHeader tag="Struktur Organisasi" title="Pengurus & Kader Posyandu Sehat Ceria" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {pengurus.map((p, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className={`rounded-2xl border p-6 text-center ${p.color}`}>
                  <div className="w-14 h-14 rounded-full bg-white shadow-card flex items-center justify-center text-2xl mx-auto mb-3">
                    {p.icon}
                  </div>
                  <div className="text-xs font-bold text-accent uppercase tracking-wide mb-1">{p.jabatan}</div>
                  <div className="text-sm font-semibold text-ink">{p.nama}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Kemitraan */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader tag="Kemitraan" title="Mitra Strategis Posyandu Sehat Ceria" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {mitra.map((m, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="bg-bg rounded-2xl p-6 border border-border text-center hover:-translate-y-1 transition-all duration-300">
                  <div className="text-3xl mb-3">{m.icon}</div>
                  <h4 className="text-sm font-bold text-primary mb-2">{m.nama}</h4>
                  <p className="text-xs text-muted leading-relaxed">{m.peran}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cta-gradient py-20 text-center">
        <div className="container">
          <h2 className="text-white mb-4">Pelajari Layanan Kami</h2>
          <p className="text-white/65 max-w-lg mx-auto mb-8">
            Temukan 7 layanan unggulan dan jadwal pelayanan Posyandu Sehat Ceria.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/kegiatan/posyandu/layanan-unggulan" className="btn-primary">Lihat Layanan Unggulan</Link>
            <Link href="/kegiatan/posyandu/pembekalan-kader" className="btn-outline">Pembekalan Kader</Link>
          </div>
        </div>
      </section>
    </>
  )
}

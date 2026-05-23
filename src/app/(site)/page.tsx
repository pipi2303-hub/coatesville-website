import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Home – Portal RW 44 Coatesville',
  description:
    'Portal komunitas digital RW 44 Coatesville Kota Wisata. Informasi warga, kegiatan, Posyandu Sehat Ceria, pelayanan, dan transparansi komunitas.',
}

const stats = [
  { value: '11', suffix: ' Program', label: 'Bidang Layanan Aktif' },
  { value: '5', suffix: ' Segmen', label: 'Sasaran Pelayanan Warga' },
  { value: '7+', suffix: '', label: 'Layanan Posyandu' },
  { value: 'RW 44', suffix: '', label: 'Coatesville Kota Wisata' },
]

const services = [
  { icon: '🩺', title: 'Pemeriksaan Dasar', desc: 'Skrining kesehatan rutin untuk mendeteksi dini kondisi kesehatan warga di semua usia.' },
  { icon: '🏠', title: 'Kunjungan Rumah', desc: 'Kader kesehatan mengunjungi langsung warga yang memerlukan pemantauan di rumah.' },
  { icon: '🍱', title: 'Pemberian PMT', desc: 'Pemberian Makanan Tambahan untuk mencegah masalah gizi pada balita dan lansia.' },
  { icon: '💬', title: 'Konsultasi & Edukasi', desc: 'Konsultasi dan edukasi kesehatan oleh kader dan tenaga kesehatan terlatih.' },
  { icon: '🏥', title: 'Akses Layanan Kesehatan', desc: 'Membantu warga mendapatkan akses layanan lanjutan di puskesmas setempat.' },
  { icon: '🏃', title: 'Olahraga Bersama', desc: 'Program olahraga terstruktur untuk mendukung kebugaran dan gaya hidup aktif.' },
]

const targets = [
  { icon: '🤰', title: 'Ibu Hamil', desc: 'Pemantauan kehamilan, konsultasi gizi, dan deteksi dini komplikasi.' },
  { icon: '👶', title: 'Bayi & Balita', desc: 'Tumbuh kembang, PMT, imunisasi, dan deteksi gangguan perkembangan.' },
  { icon: '🧒', title: 'Anak & Remaja', desc: 'Skrining kesehatan, edukasi perilaku sehat, dan vitamin pertumbuhan.' },
  { icon: '💪', title: 'Usia Produktif', desc: 'Pemeriksaan rutin, deteksi PTM, dan program hidup sehat aktif.' },
  { icon: '👴', title: 'Lansia', desc: 'Pemantauan kesehatan, olahraga ringan, dan akses layanan mudah.' },
  { icon: '👨‍👩‍👧‍👦', title: 'Keluarga', desc: 'Edukasi keluarga, konseling gizi, dan pemberdayaan hidup sehat bersama.' },
]

const articles = [
  { seed: 'posyandu-a1', cat: 'Lansia', date: '10 Mei 2026', title: 'Menjaga Kesehatan Lansia di Usia Senja', desc: 'Tips menjaga kesehatan fisik dan mental lansia agar tetap aktif dan bahagia.' },
  { seed: 'posyandu-a2', cat: 'Anak & Keluarga', date: '3 Mei 2026', title: 'Pentingnya Imunisasi Lengkap untuk Anak', desc: 'Jadwal imunisasi lengkap dan manfaatnya untuk melindungi anak sejak dini.' },
  { seed: 'posyandu-a3', cat: 'Gizi', date: '25 Apr 2026', title: 'Pola Makan Sehat untuk Seluruh Keluarga', desc: 'Panduan gizi seimbang yang mudah diterapkan dalam kehidupan sehari-hari.' },
]

const activities = [
  { icon: '🏥', title: 'Posyandu Sehat Ceria', desc: 'Layanan kesehatan terpadu untuk seluruh siklus hidup warga RW 44.', href: '/kegiatan/posyandu' },
  { icon: '⚽', title: 'Olahraga Bersama', desc: 'Senam, basket, voli, tenis meja, dan berbagai olahraga komunitas.', href: '/kegiatan/olahraga' },
  { icon: '🏍️', title: 'CTB – Touring & Edukasi', desc: 'Komunitas touring motorbike, edukasi safety riding, dan donasi sosial.', href: '/kegiatan/ctb' },
  { icon: '🌿', title: 'CFA – Alam & Lingkungan', desc: 'Hiking, tracking, peduli lingkungan, dan rekreasi bersama keluarga.', href: '/kegiatan/cfa' },
  { icon: '🎨', title: 'Kegiatan Kreatif', desc: 'Seni vokal & musik, line dance, dan cooking class komunitas.', href: '/kegiatan/kreatif' },
  { icon: '🕌', title: 'Pembinaan Rohani', desc: 'Kegiatan keagamaan untuk warga Muslim dan Non-Muslim.', href: '/kegiatan/rohani' },
]

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative h-screen min-h-[640px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <Image
          src="https://picsum.photos/seed/coatesville-rw44/1920/1080"
          alt="Komunitas RW 44 Coatesville"
          fill
          className="object-cover opacity-30 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/60" />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="inline-block bg-accent/20 border border-accent/30 text-accent-light text-xs font-bold tracking-[2.5px] uppercase px-4 py-1.5 rounded-full mb-5">
              Portal Komunitas RW 44 &bull; Coatesville Kota Wisata
            </div>
            <h1 className="text-white text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.15] mb-5">
              Komunitas Sehat,<br />
              <span className="text-gold">Aktif & Berdaya</span>
            </h1>
            <p className="text-white/75 text-base leading-relaxed mb-8 max-w-lg">
              Portal digital resmi RW 44 Coatesville — pusat informasi, kegiatan, pelayanan, dan transparansi untuk warga perumahan yang modern dan terhubung.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/kegiatan/posyandu" className="btn-primary">
                Posyandu Sehat Ceria
              </Link>
              <Link href="/kontak" className="btn-outline">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs uppercase tracking-widest">
          <span>Gulir ke bawah</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-white border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 80} className="py-8 px-6 text-center">
                <div className="text-[2rem] font-serif font-bold text-primary leading-none">
                  {s.value}<span className="text-accent text-lg">{s.suffix}</span>
                </div>
                <div className="text-xs text-muted uppercase tracking-wider mt-1.5">{s.label}</div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PORTAL SHORTCUTS ===== */}
      <section className="bg-bg py-12 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Portal Warga', desc: 'Akses dashboard personal', href: '/portal', icon: '👤', color: 'bg-primary' },
              { label: 'Kirim Pengaduan', desc: 'Laporkan masalah kawasan', href: '/feedback', icon: '🚨', color: 'bg-red-600' },
              { label: 'Layanan Admin', desc: 'Urus dokumen & surat', href: '/pelayanan/admin-duk', icon: '📄', color: 'bg-accent' },
              { label: 'Kas & Laporan', desc: 'Transparansi keuangan RW', href: '/laporan/keuangan', icon: '💰', color: 'bg-green-600' },
            ].map((p, i) => (
              <AnimateOnScroll key={i} delay={i * 50}>
                <Link href={p.href} className="group block bg-white rounded-2xl p-5 shadow-card hover:-translate-y-1 transition-all duration-300 border border-border/50">
                  <div className={`w-12 h-12 ${p.color} rounded-xl flex items-center justify-center text-xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <span className="text-white">{p.icon}</span>
                  </div>
                  <h4 className="text-[0.95rem] font-bold text-ink mb-1 group-hover:text-primary transition-colors">{p.label}</h4>
                  <p className="text-[0.65rem] text-muted leading-tight">{p.desc}</p>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SNIPPET ===== */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-lg aspect-[4/3]">
                <Image
                  src="https://picsum.photos/seed/coatesville-about/800/600"
                  alt="Komunitas RW 44 Coatesville"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-card-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-pale rounded-full flex items-center justify-center text-lg">❤️</div>
                <div>
                  <div className="font-serif font-bold text-primary text-sm">Warga Sehat</div>
                  <div className="text-muted text-xs">Bahagia & Mandiri</div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <div className="section-tag">Tentang Portal</div>
              <h2 className="mt-1 mb-3">
                Satu Portal untuk Seluruh Kebutuhan Komunitas RW 44
              </h2>
              <div className="divider divider-left" />
              <p className="mt-5">
                Portal RW 44 Coatesville adalah platform digital yang menghubungkan seluruh warga perumahan — dari informasi terkini, kegiatan komunitas, pelayanan administrasi, hingga program Posyandu Sehat Ceria yang melayani semua tahapan hidup.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { icon: '🏘️', title: 'Informasi Komunitas', desc: 'Berita, pengumuman, dan peraturan cluster terkini.' },
                  { icon: '🏥', title: 'Posyandu Sehat Ceria', desc: 'Layanan kesehatan terpadu untuk semua segmen usia warga.' },
                  { icon: '📋', title: 'Pelayanan Warga', desc: 'Administrasi dan dokumen kependudukan secara digital.' },
                ].map((f) => (
                  <div key={f.title} className="flex items-start gap-3.5">
                    <div className="w-10 h-10 bg-accent-pale rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary">{f.title}</h4>
                      <p className="text-xs mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/tentang-kami" className="btn-outline-green mt-7 inline-flex">
                Selengkapnya →
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== KEGIATAN COMMUNITY ===== */}
      <section className="section bg-bg">
        <div className="container">
          <SectionHeader
            tag="Kegiatan & Program"
            title="Beragam Kegiatan untuk Seluruh Warga"
            subtitle="Dari layanan kesehatan, olahraga, hingga kegiatan sosial dan keagamaan — semua hadir di RW 44."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((a, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <Link
                  href={a.href}
                  className="group flex gap-4 items-start bg-white rounded-2xl p-6 shadow-card hover:-translate-y-1 hover:shadow-card-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent-pale rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <span className="group-hover:scale-110 transition-transform duration-300 inline-block">
                      {a.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-primary mb-1 group-hover:text-primary-mid transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-xs leading-relaxed">{a.desc}</p>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/kegiatan" className="btn-outline-green">
              Lihat Semua Kegiatan →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== POSYANDU LAYANAN ===== */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            tag="Posyandu Sehat Ceria"
            title="Tujuh Layanan Unggulan Posyandu"
            subtitle="Layanan kesehatan komprehensif untuk mendukung kualitas hidup seluruh warga RW 44."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="facility-card">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="mb-2">{s.title}</h3>
                  <p className="text-sm">{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/kegiatan/posyandu" className="btn-outline-green">
              Selengkapnya tentang Posyandu →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SASARAN PELAYANAN ===== */}
      <section className="section bg-bg">
        <div className="container">
          <SectionHeader
            tag="Sasaran Pelayanan"
            title="Melayani Seluruh Siklus Hidup Warga"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {targets.map((t, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="value-card">
                  <div className="text-4xl mb-4">{t.icon}</div>
                  <h3 className="mb-2">{t.title}</h3>
                  <p className="text-xs">{t.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY TEASER ===== */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader tag="Galeri" title="Momen Kegiatan Komunitas" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[220px]">
            <Link
              href="/galeri"
              className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group"
            >
              <Image
                src="https://picsum.photos/seed/coatesville-g1/800/900"
                alt="Kegiatan Komunitas RW 44"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300" />
            </Link>
            {['g2', 'g3', 'g4'].map((seed) => (
              <Link
                key={seed}
                href="/galeri"
                className="relative rounded-2xl overflow-hidden group"
              >
                <Image
                  src={`https://picsum.photos/seed/coatesville-${seed}/600/400`}
                  alt="Galeri Kegiatan"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
              </Link>
            ))}
            <Link
              href="/galeri"
              className="relative rounded-2xl overflow-hidden bg-primary flex items-center justify-center group"
            >
              <div className="text-center text-white group-hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-serif font-bold text-accent">+20</div>
                <p className="text-sm text-white/70 mt-1">Foto Lainnya</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ARTIKEL ===== */}
      <section className="section bg-bg">
        <div className="container">
          <SectionHeader
            tag="Informasi & Publikasi"
            title="Artikel & Informasi Kesehatan Terkini"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <article className="card-article">
                  <div className="aspect-[3/2] relative overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/${a.seed}/600/400`}
                      alt={a.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[0.7rem] bg-accent-pale text-accent font-semibold px-3 py-1 rounded-full">
                        {a.cat}
                      </span>
                      <span className="text-muted text-xs">{a.date}</span>
                    </div>
                    <h3 className="text-[1rem] mb-2 leading-snug">{a.title}</h3>
                    <p className="text-xs leading-relaxed mb-4">{a.desc}</p>
                    <Link
                      href="/berita"
                      className="text-accent font-semibold text-sm hover:text-primary transition-colors"
                    >
                      Baca Selengkapnya →
                    </Link>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/berita" className="btn-outline-green">
              Lihat Semua Informasi →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-cta-gradient py-[88px] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-white" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-2 border-white" />
        </div>
        <div className="container relative z-10">
          <div className="section-tag-light mx-auto">Butuh Informasi atau Layanan?</div>
          <h2 className="text-white mt-2 mb-4">Portal RW 44 Siap Melayani Anda</h2>
          <p className="text-white/65 max-w-lg mx-auto mb-8">
            Hubungi kami untuk informasi jadwal kegiatan, layanan kesehatan, pengaduan, atau layanan administrasi warga.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/kontak" className="btn-primary">
              Hubungi Kami Sekarang
            </Link>
            <Link href="/kegiatan" className="btn-outline">
              Lihat Kegiatan
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Posyandu Sehat Ceria',
  description:
    'Posyandu Sehat Ceria RW 44 Coatesville melayani warga dari ibu hamil, bayi & balita, anak & remaja, usia produktif, hingga lansia.',
}

const misi = [
  { num: '01', icon: '👥', text: 'Meningkatkan kemampuan dan ketrampilan kader kesehatan.' },
  { num: '02', icon: '💚', text: 'Membangkitkan kesadaran masyarakat berperilaku sehat.' },
  { num: '03', icon: '🩺', text: 'Memenuhi layanan pemeriksaan dan skrining kesehatan dasar yang terjangkau bagi warga pada seluruh siklus hidup.' },
  { num: '04', icon: '🏗️', text: 'Menyediakan sarana dan prasarana pelayanan posyandu yang cukup dan berstandar.' },
  { num: '05', icon: '⚙️', text: 'Menjalankan dan mengembangkan tata kelola pelayanan posyandu yang efektif dan berkelanjutan.' },
]

const strategi = [
  { num: '1', icon: '🎓', title: 'Penguasaan Keterampilan Kader', desc: 'Penguasaan keterampilan dan kecakapan kader kesehatan secara berkelanjutan.' },
  { num: '2', icon: '📊', title: 'Perbaikan Tata Kelola', desc: 'Pengembangan dan perbaikan tata kelola posyandu yang efektif dan terukur.' },
  { num: '3', icon: '🖥️', title: 'Infrastruktur Berkelanjutan', desc: 'Penyediaan infrastruktur dan platform posyandu yang berkelanjutan.' },
  { num: '4', icon: '🏆', title: 'Penguatan Kepemimpinan', desc: 'Penguatan kepemimpinan dalam pengelolaan dan pelayanan posyandu.' },
]

const layanan = [
  { icon: '🩺', title: 'Pemeriksaan Dasar', desc: 'Skrining kesehatan dasar rutin untuk mendeteksi dini kondisi kesehatan warga di semua usia.' },
  { icon: '🏠', title: 'Kunjungan Rumah', desc: 'Kader kesehatan mengunjungi langsung warga yang memerlukan pemantauan di rumah.' },
  { icon: '🍱', title: 'Pemberian PMT', desc: 'Pemberian Makanan Tambahan untuk mencegah masalah gizi pada balita dan lansia.' },
  { icon: '💬', title: 'Konsultasi & Edukasi', desc: 'Konsultasi dan edukasi kesehatan oleh kader dan tenaga kesehatan terlatih.' },
  { icon: '🏥', title: 'Akses Layanan Kesehatan', desc: 'Membantu warga mendapatkan akses layanan lanjutan di puskesmas setempat.' },
  { icon: '💊', title: 'Vitamin & Vaksinasi', desc: 'Pemberian vitamin, vaksinasi, dan imunisasi sesuai jadwal kesehatan nasional.' },
  { icon: '🏃', title: 'Olahraga Bersama', desc: 'Program olahraga terstruktur untuk mendukung kebugaran dan gaya hidup aktif warga.' },
]

const sasaran = [
  { icon: '🤰', title: 'Ibu Hamil', desc: 'Pemantauan kehamilan rutin, konsultasi gizi, persiapan persalinan, dan deteksi dini komplikasi.' },
  { icon: '👶', title: 'Bayi & Balita', desc: 'Pemantauan tumbuh kembang, PMT, imunisasi, dan deteksi dini gangguan perkembangan.' },
  { icon: '🧒', title: 'Anak & Remaja', desc: 'Screening kesehatan, edukasi perilaku sehat, vitamin, dan pendampingan tumbuh kembang.' },
  { icon: '💪', title: 'Usia Produktif & Dewasa', desc: 'Pemeriksaan rutin, deteksi PTM (hipertensi, diabetes), dan program gaya hidup sehat.' },
  { icon: '👴', title: 'Lansia', desc: 'Pemantauan kesehatan berkala, olahraga ringan, konsultasi obat, dan akses layanan mudah.' },
  { icon: '🏘️', title: 'Integrasi Komunitas', desc: 'Layanan terintegrasi dengan puskesmas untuk kontinuitas dan kualitas pelayanan warga.' },
]

const pillars = [
  {
    color: 'bg-blue-50 border-blue-200',
    titleColor: 'text-blue-800',
    title: 'PEOPLE — Pengembangan Kader',
    desc: 'Meningkatkan keterampilan, pengetahuan, dan perilaku kader kesehatan.',
    items: ['Pelatihan berbasis kompetensi', 'Metode pembelajaran praktis', 'Penguatan sistem pendukung', 'Komunikasi efektif', 'Pengakuan kompetensi'],
  },
  {
    color: 'bg-green-50 border-green-200',
    titleColor: 'text-green-800',
    title: 'PROCESS — Pelayanan Medis',
    desc: 'Mengorganisir penyediaan layanan medis preventif dan promotif.',
    items: ['Deteksi dini & screening', 'Pemantauan kesehatan', 'Edukasi kesehatan', 'Bina perilaku sehat'],
  },
  {
    color: 'bg-purple-50 border-purple-200',
    titleColor: 'text-purple-800',
    title: 'PLATFORM — Infrastruktur',
    desc: 'Membangun teknologi dan platform digital yang mendukung layanan.',
    items: ['Pendanaan kokoh & berkelanjutan', 'Sistem tata kerja posyandu', 'Sistem informasi posyandu', 'Penyediaan logistik'],
  },
  {
    color: 'bg-amber-50 border-amber-200',
    titleColor: 'text-amber-800',
    title: 'LEADERSHIP — Kepemimpinan',
    desc: 'Penguatan kepemimpinan dalam pengelolaan dan pelayanan posyandu.',
    items: ['Kepercayaan & Komunikasi', 'Pengambilan keputusan', 'Pemecahan masalah', 'Pemberdayaan'],
  },
]

export default function PosyanduPage() {
  return (
    <>
      <PageHero
        tag="Posyandu Sehat Ceria"
        title="Hadir untuk Semua Tahapan Hidup"
        subtitle="Pos Pelayanan Terpadu RW 44 Coatesville yang melayani warga dari segala usia dengan pendekatan Integrasi Layanan Primer."
        breadcrumb={[{ label: 'Home' }, { label: 'Kegiatan' }, { label: 'Posyandu Sehat Ceria' }]}
      />

      {/* Profil */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <div className="section-tag">Profil Posyandu</div>
              <h2 className="mt-1 mb-3">Posyandu Sehat Ceria, Berdiri untuk Komunitas</h2>
              <div className="divider divider-left" />
              <p className="mt-5">
                Posyandu Sehat Ceria adalah pos pelayanan terpadu yang berlokasi di Gedung Serba Guna, Cluster Coatesville, Kota Wisata. Kami melayani warga RW 44 dengan menerapkan prinsip{' '}
                <strong className="text-primary">Integrasi Layanan Primer</strong> — mendekatkan layanan kesehatan dasar kepada masyarakat pada setiap tahapan kehidupan.
              </p>
              <p className="mt-3">
                Dengan dukungan kader kesehatan terlatih dan kolaborasi bersama puskesmas setempat, Posyandu Sehat Ceria hadir sebagai mitra kesehatan terpercaya bagi seluruh warga perumahan Coatesville.
              </p>
              <div className="mt-7 space-y-4">
                {[
                  { icon: '👥', title: 'Kader Kesehatan Terlatih', desc: 'Kader kami mendapatkan pelatihan berbasis kompetensi secara berkala.' },
                  { icon: '🤝', title: 'Kolaborasi dengan Puskesmas', desc: 'Bermitra dengan puskesmas untuk akses layanan kesehatan lanjutan.' },
                  { icon: '🏘️', title: 'Berbasis Komunitas', desc: 'Dikelola oleh dan untuk warga, mendorong kemandirian komunitas.' },
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
            </AnimateOnScroll>

            <AnimateOnScroll delay={150} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-lg aspect-[4/3]">
                <Image
                  src="https://picsum.photos/seed/posyandu-profil/800/600"
                  alt="Posyandu Sehat Ceria"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-card-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-pale rounded-full flex items-center justify-center text-lg">🏅</div>
                <div>
                  <div className="font-serif font-bold text-primary text-sm">RW 44</div>
                  <div className="text-muted text-xs">Coatesville Kota Wisata</div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Sambutan */}
      <section className="section bg-bg">
        <div className="container">
          <SectionHeader tag="Kata Sambutan" title="Sambutan Ketua Posyandu Sehat Ceria" />
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-card-lg relative">
              <div className="absolute top-8 left-8 text-[5rem] text-accent/20 font-serif leading-none">"</div>
              <blockquote className="relative z-10 text-base leading-loose text-muted pt-6">
                Assalamu&apos;alaikum Warahmatullahi Wabarakatuh.
                <br /><br />
                Puji syukur kami panjatkan kepada Tuhan Yang Maha Esa atas terselenggaranya Posyandu Sehat Ceria di lingkungan RW 44 Coatesville Kota Wisata. Posyandu ini hadir sebagai wujud nyata kepedulian kita bersama terhadap kesehatan seluruh warga — dari yang paling muda hingga yang paling tua.
                <br /><br />
                Kami percaya bahwa kesehatan adalah hak setiap warga dan fondasi utama kehidupan yang produktif dan bahagia. Melalui Posyandu Sehat Ceria, kami berkomitmen untuk terus meningkatkan kualitas layanan, memperkuat kemitraan dengan fasilitas kesehatan, dan memberdayakan warga untuk hidup mandiri dalam menjaga kesehatannya.
                <br /><br />
                Mari bersama-sama kita wujudkan komunitas Coatesville yang sehat, bahagia, aktif, produktif, dan mandiri.
              </blockquote>
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-2xl">👤</div>
                <div>
                  <h4 className="text-sm font-semibold text-primary">Ketua Posyandu Sehat Ceria</h4>
                  <p className="text-xs text-muted">RW 44 – Coatesville Kota Wisata</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Visi Misi Strategi */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader tag="Visi, Misi & Strategi" title="Landasan Gerak Posyandu Sehat Ceria" />

          {/* Visi */}
          <AnimateOnScroll>
            <div className="relative bg-primary rounded-3xl p-10 md:p-14 text-center overflow-hidden mb-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-mid/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent-light text-xs font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-6">
                  👁️ Visi Posyandu
                </div>
                <p className="text-white text-xl md:text-2xl font-serif leading-relaxed max-w-3xl mx-auto">
                  Mewujudkan Posyandu untuk Warga Perumahan yang{' '}
                  <em className="text-accent not-italic font-bold">sehat</em>,{' '}
                  <em className="text-accent not-italic font-bold">bahagia</em>,{' '}
                  <em className="text-accent not-italic font-bold">aktif</em>,{' '}
                  <em className="text-accent not-italic font-bold">produktif</em>, dan{' '}
                  <em className="text-accent not-italic font-bold">mandiri</em>.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Misi */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-border" />
              <span className="text-muted text-sm font-semibold uppercase tracking-wider">5 Butir Misi</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {misi.map((m, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div className="bg-bg rounded-2xl p-6 shadow-card">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold text-accent bg-accent/10 w-8 h-8 rounded-full flex items-center justify-center">
                        {m.num}
                      </span>
                      <span className="text-2xl">{m.icon}</span>
                    </div>
                    <p className="text-sm leading-relaxed">{m.text}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Strategi */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-border" />
              <span className="text-muted text-sm font-semibold uppercase tracking-wider">4 Strategi Utama</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {strategi.map((s, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="bg-white border border-border rounded-2xl p-6 shadow-card text-center hover:-translate-y-1 hover:shadow-card-lg transition-all duration-300">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-3">
                      {s.num}
                    </div>
                    <div className="text-3xl mb-3">{s.icon}</div>
                    <h4 className="text-sm font-semibold mb-2">{s.title}</h4>
                    <p className="text-xs">{s.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section className="section bg-bg">
        <div className="container">
          <SectionHeader
            tag="Layanan Posyandu"
            title="7 Layanan Unggulan Posyandu Sehat Ceria"
            subtitle="Layanan kesehatan komprehensif untuk mendukung kualitas hidup seluruh warga RW 44."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            {layanan.slice(0, 6).map((l, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="facility-card">
                  <div className="text-4xl mb-4">{l.icon}</div>
                  <h3 className="mb-2">{l.title}</h3>
                  <p className="text-sm">{l.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          {/* 7th card centered */}
          <div className="flex justify-center">
            <AnimateOnScroll className="w-full md:w-1/3">
              <div className="facility-card">
                <div className="text-4xl mb-4">{layanan[6].icon}</div>
                <h3 className="mb-2">{layanan[6].title}</h3>
                <p className="text-sm">{layanan[6].desc}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Sasaran Pelayanan */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            tag="Fokus Layanan"
            title="Melayani Seluruh Segmen Usia"
            subtitle="Posyandu Sehat Ceria dirancang untuk melayani kebutuhan kesehatan warga dari semua kelompok usia."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {sasaran.map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="value-card">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="mb-2">{s.title}</h3>
                  <p className="text-xs">{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 17 Program – Pemodelan Strategi */}
      <section className="section bg-bg">
        <div className="container">
          <SectionHeader tag="Pemodelan Strategi" title="17 Program Unggulan Posyandu Sehat Ceria" />

          <AnimateOnScroll className="mb-8">
            <div className="rounded-2xl overflow-hidden shadow-card-lg">
              <Image
                src="/images/strategi-posyandu.jpeg"
                alt="Pemodelan Strategi & Program Posyandu Sehat Ceria"
                width={1200}
                height={600}
                className="object-contain w-full"
              />
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className={`rounded-2xl p-6 border ${p.color}`}>
                  <h4 className={`text-sm font-bold mb-2 ${p.titleColor}`}>{p.title}</h4>
                  <p className="text-xs text-muted mb-4">{p.desc}</p>
                  <ul className="space-y-1.5">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-ink">
                        <span className="text-primary-mid mt-0.5">✓</span>
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

      {/* CTA */}
      <section className="bg-cta-gradient py-[88px] text-center">
        <div className="container">
          <div className="section-tag-light mx-auto">Ingin Bergabung?</div>
          <h2 className="text-white mt-2 mb-4">Jadilah Bagian dari Posyandu Sehat Ceria</h2>
          <p className="text-white/65 max-w-lg mx-auto mb-8">
            Daftarkan diri atau keluarga Anda untuk mendapatkan layanan kesehatan dari Posyandu Sehat Ceria RW 44.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/kontak" className="btn-primary">Hubungi Kami</Link>
            <Link href="/galeri" className="btn-outline">Lihat Galeri Kegiatan</Link>
          </div>
        </div>
      </section>
    </>
  )
}

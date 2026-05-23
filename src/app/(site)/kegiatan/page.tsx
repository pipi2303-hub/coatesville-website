import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Kegiatan Komunitas',
  description: 'Semua program dan kegiatan komunitas RW 44 Coatesville — Posyandu, olahraga, CTB, CFA, kreatif, rohani, dan hari besar.',
}

const programs = [
  {
    icon: '🏥',
    title: 'Posyandu Sehat Ceria',
    cat: 'Kesehatan',
    desc: 'Layanan kesehatan terpadu untuk seluruh siklus hidup warga — ibu hamil, bayi, anak, dewasa, dan lansia.',
    href: '/kegiatan/posyandu',
    img: 'kegiatan-posyandu',
    highlight: true,
  },
  {
    icon: '⚽',
    title: 'Olahraga Bersama',
    cat: 'Olahraga',
    desc: 'Senam, mini basket, voli, tenis meja, golf, menembak, bela diri, dan edukasi olahraga untuk semua usia.',
    href: '/kegiatan/olahraga',
    img: 'kegiatan-olahraga',
  },
  {
    icon: '🏍️',
    title: 'CTB – Touring & Edukasi',
    cat: 'Komunitas',
    desc: 'Komunitas touring motorbike, edukasi safety riding, dan kegiatan donasi sosial bagi warga yang membutuhkan.',
    href: '/kegiatan/ctb',
    img: 'kegiatan-ctb',
  },
  {
    icon: '🌿',
    title: 'CFA – Alam & Lingkungan',
    cat: 'Alam',
    desc: 'Hiking & tracking, peduli lingkungan, dan rekreasi bersama keluarga untuk mempererat tali persaudaraan.',
    href: '/kegiatan/cfa',
    img: 'kegiatan-cfa',
  },
  {
    icon: '🎨',
    title: 'Kegiatan Kreatif',
    cat: 'Seni & Budaya',
    desc: 'Seni vokal & musik, line dance, cooking class — mengekspresikan kreativitas bersama komunitas.',
    href: '/kegiatan/kreatif',
    img: 'kegiatan-kreatif',
  },
  {
    icon: '🕌',
    title: 'Pembinaan Rohani',
    cat: 'Keagamaan',
    desc: 'Kegiatan pembinaan rohani untuk warga Muslim dan Non-Muslim — mempererat kerukunan antar umat beragama.',
    href: '/kegiatan/rohani',
    img: 'kegiatan-rohani',
  },
  {
    icon: '🎉',
    title: 'Hari Besar Nasional & Keagamaan',
    cat: 'Perayaan',
    desc: 'Perayaan HUT RI, Lebaran, Idul Adha, Natal, dan hari besar lainnya yang memupuk rasa kebersamaan.',
    href: '/kegiatan/hari-besar',
    img: 'kegiatan-harbes',
  },
]

const upcomingEvents = [
  { date: '1 Jun 2026', title: 'Posyandu Bulan Juni', cat: 'Kesehatan', loc: 'GSG Coatesville' },
  { date: '8 Jun 2026', title: 'Senam Pagi Bersama', cat: 'Olahraga', loc: 'Lapangan RW 44' },
  { date: '15 Jun 2026', title: 'Workshop Memasak', cat: 'Kreatif', loc: 'GSG Coatesville' },
  { date: '22 Jun 2026', title: 'CTB Sunday Ride', cat: 'CTB', loc: 'Meeting Point Pos 1' },
]

export default function KegiatanPage() {
  return (
    <>
      <PageHero
        tag="Program & Kegiatan"
        title="Beragam Kegiatan untuk Seluruh Warga"
        subtitle="Dari layanan kesehatan, olahraga, seni, hingga kegiatan sosial dan keagamaan — semua ada di RW 44 Coatesville."
        breadcrumb={[{ label: 'Home' }, { label: 'Kegiatan' }]}
      />

      {/* Upcoming Events */}
      <section className="bg-white border-b border-border py-6">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <div className="section-tag">Agenda Terdekat</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {upcomingEvents.map((e, i) => (
              <div key={i} className="bg-bg rounded-xl p-4 border border-border">
                <div className="text-[0.65rem] font-bold text-accent uppercase tracking-wider mb-1">{e.date}</div>
                <h4 className="text-sm font-semibold text-primary mb-1">{e.title}</h4>
                <div className="flex items-center gap-1 text-xs text-muted">
                  <span>📍</span> {e.loc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section bg-bg">
        <div className="container">
          <SectionHeader
            tag="Program Komunitas"
            title="7 Program Andalan RW 44 Coatesville"
            subtitle="Setiap warga memiliki ruang untuk berpartisipasi dan berkontribusi melalui berbagai program yang tersedia."
          />

          {/* Featured: Posyandu */}
          <AnimateOnScroll className="mb-6">
            <Link
              href="/kegiatan/posyandu"
              className="group grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-card-lg hover:-translate-y-1 hover:shadow-card-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] md:aspect-auto relative overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/kegiatan-posyandu/800/600"
                  alt="Posyandu Sehat Ceria"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <span className="section-tag mb-3">Program Unggulan</span>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">🏥</span>
                  <div>
                    <div className="text-xs font-bold text-accent uppercase tracking-wider">Kesehatan</div>
                    <h2 className="text-2xl">Posyandu Sehat Ceria</h2>
                  </div>
                </div>
                <p className="mb-6">
                  Layanan kesehatan terpadu untuk seluruh siklus hidup warga — ibu hamil, bayi, anak, dewasa, dan lansia. Program unggulan RW 44 dengan 7 layanan aktif.
                </p>
                <span className="text-accent font-semibold group-hover:text-primary transition-colors">
                  Selengkapnya →
                </span>
              </div>
            </Link>
          </AnimateOnScroll>

          {/* Others */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.slice(1).map((p, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <Link
                  href={p.href}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-card hover:-translate-y-1 hover:shadow-card-lg transition-all duration-300"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/${p.img}/600/340`}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[0.65rem] bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold px-2.5 py-0.5 rounded-full">
                      {p.cat}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{p.icon}</span>
                      <h3 className="text-base group-hover:text-primary-mid transition-colors">{p.title}</h3>
                    </div>
                    <p className="text-xs leading-relaxed mb-3">{p.desc}</p>
                    <span className="text-accent font-semibold text-xs group-hover:text-primary transition-colors">
                      Selengkapnya →
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

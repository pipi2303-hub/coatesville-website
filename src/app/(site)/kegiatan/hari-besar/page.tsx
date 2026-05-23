import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Hari Besar Nasional & Keagamaan',
  description: 'Perayaan hari besar nasional dan keagamaan RW 44 Coatesville — HUT RI, Lebaran, Natal, dan lainnya.',
}

const events = [
  { icon: '🇮🇩', cat: 'Nasional', title: 'HUT Kemerdekaan RI', desc: 'Rangkaian kegiatan 17 Agustus yang meriah — upacara, perlombaan, pentas seni, dan makan bersama seluruh warga RW 44.', bulan: 'Agustus', highlight: true },
  { icon: '🌙', cat: 'Islam', title: 'Ramadhan & Idul Fitri', desc: 'Program Ramadhan penuh berkah — tadarus, buka puasa bersama, sahur, dan perayaan Lebaran dengan salam-salaman komunitas.', bulan: 'Maret–April', highlight: true },
  { icon: '🐑', cat: 'Islam', title: 'Idul Adha', desc: 'Pelaksanaan qurban komunitas RW 44 dengan pembagian daging qurban kepada seluruh warga dan masyarakat sekitar.', bulan: 'Juni–Juli', highlight: false },
  { icon: '⭐', cat: 'Islam', title: 'Maulid Nabi', desc: 'Peringatan kelahiran Nabi Muhammad SAW dengan pengajian akbar, pembacaan sholawat, dan ceramah agama.', bulan: 'September', highlight: false },
  { icon: '🎄', cat: 'Kristen/Katolik', title: 'Natal & Tahun Baru', desc: 'Perayaan Natal dan Tahun Baru warga RW 44 dengan acara kebersamaan, pertukaran hadiah, dan malam pergantian tahun.', bulan: 'Desember', highlight: false },
  { icon: '🕯️', cat: 'Lintas Agama', title: 'Hari Raya Lainnya', desc: 'Peringatan hari raya agama lainnya — Waisak, Nyepi, Imlek — dirayakan bersama dalam semangat kebhinekaan.', bulan: 'Menyesuaikan', highlight: false },
]

const highlights2025 = [
  { img: 'harbes-hut1', caption: 'Upacara HUT RI ke-80' },
  { img: 'harbes-hut2', caption: 'Lomba 17 Agustus' },
  { img: 'harbes-lebaran1', caption: 'Halal Bihalal Idul Fitri' },
  { img: 'harbes-natal1', caption: 'Natal Bersama 2025' },
  { img: 'harbes-qurban1', caption: 'Qurban Idul Adha' },
  { img: 'harbes-maulid1', caption: 'Maulid Nabi 1446H' },
]

export default function HariBesarPage() {
  return (
    <>
      <PageHero
        tag="Kegiatan"
        title="Hari Besar Nasional & Keagamaan"
        subtitle="Merayakan hari besar bersama dalam semangat kebersamaan, kebhinekaan, dan kecintaan terhadap bangsa dan agama."
        breadcrumb={[{ label: 'Home' }, { label: 'Kegiatan' }, { label: 'Hari Besar' }]}
      />

      {/* Featured events */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader tag="Agenda Tahunan" title="Perayaan Hari Besar RW 44 Coatesville" subtitle="Setiap momen perayaan menjadi kesempatan mempererat tali persaudaraan seluruh warga." />
          <div className="space-y-5">
            {events.filter(e => e.highlight).map((e, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="grid md:grid-cols-2 bg-bg rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg transition-all duration-300">
                  <div className="aspect-video md:aspect-auto relative overflow-hidden">
                    <Image src={`https://picsum.photos/seed/harbes-${i + 1}/800/400`} alt={e.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold px-3 py-1 rounded-full">{e.cat}</span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="text-4xl mb-3">{e.icon}</div>
                    <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">📅 {e.bulan}</div>
                    <h3 className="text-xl mb-3">{e.title}</h3>
                    <p className="text-sm">{e.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {events.filter(e => !e.highlight).map((e, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="bg-bg rounded-2xl p-6 shadow-card text-center hover:-translate-y-1 hover:shadow-card-lg transition-all duration-300">
                  <div className="text-4xl mb-3">{e.icon}</div>
                  <div className="text-[0.65rem] font-bold text-accent uppercase tracking-wider mb-1">{e.bulan} — {e.cat}</div>
                  <h3 className="text-base mb-2">{e.title}</h3>
                  <p className="text-xs">{e.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 2025 Highlights */}
      <section className="section bg-bg">
        <div className="container">
          <SectionHeader tag="Momen 2025" title="Kenangan Hari Besar 2025" subtitle="Dokumentasi momen perayaan hari besar yang berkesan bersama warga RW 44 Coatesville." />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {highlights2025.map((h, i) => (
              <AnimateOnScroll key={i} delay={i * 60} className="group relative aspect-video rounded-xl overflow-hidden">
                <Image src={`https://picsum.photos/seed/${h.img}/600/340`} alt={h.caption} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-xs font-medium">{h.caption}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cta-gradient py-16 text-center">
        <div className="container">
          <h2 className="text-white mb-4">Bersama Merayakan Kebersamaan</h2>
          <p className="text-white/65 mb-7 text-sm max-w-md mx-auto">Partisipasi aktif warga menjadikan setiap perayaan lebih bermakna dan berkesan.</p>
          <Link href="/kegiatan" className="btn-primary">Lihat Semua Kegiatan</Link>
        </div>
      </section>
    </>
  )
}

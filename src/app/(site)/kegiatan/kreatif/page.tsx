import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Kegiatan Kreatif',
  description: 'Kegiatan seni dan kreatif RW 44 Coatesville — vokal, musik, line dance, dan cooking class.',
}

const programs = [
  { icon: '🎤', title: 'Seni Vokal & Paduan Suara', desc: 'Kelompok vokal komunitas yang berlatih rutin dan tampil di berbagai acara komunitas maupun wilayah. Terbuka untuk semua kalangan usia.', jadwal: 'Sabtu, 15.00 WIB' },
  { icon: '🎸', title: 'Musik Komunitas', desc: 'Band komunitas dan grup musik akustik warga RW 44 yang aktif tampil di acara-acara komunitas dan perayaan hari besar.', jadwal: 'Minggu, 14.00 WIB' },
  { icon: '💃', title: 'Line Dance', desc: 'Kelas line dance populer yang sangat diminati warga, terutama ibu-ibu. Dipandu instruktur profesional dengan musik yang menyenangkan.', jadwal: 'Senin & Rabu, 16.00 WIB' },
  { icon: '👨‍🍳', title: 'Cooking Class', desc: 'Workshop memasak bersama chef tamu dan warga berbakat — dari masakan rumahan, kue, hingga makanan internasional.', jadwal: 'Sabtu, 2× Sebulan' },
  { icon: '🎨', title: 'Kelas Seni Rupa', desc: 'Melukis, menggambar, dan kerajinan tangan untuk anak-anak dan dewasa yang ingin mengekspresikan kreativitas.', jadwal: 'Minggu, 10.00 WIB' },
  { icon: '📸', title: 'Photography Club', desc: 'Komunitas fotografi warga RW 44 yang aktif photo walk, workshop, dan pameran foto komunitas.', jadwal: 'Fleksibel' },
]

export default function KreatifPage() {
  return (
    <>
      <PageHero
        tag="Kegiatan"
        title="Kegiatan Kreatif RW 44"
        subtitle="Ekspresikan kreativitas dan bakat Anda bersama komunitas seni yang aktif di RW 44 Coatesville."
        breadcrumb={[{ label: 'Home' }, { label: 'Kegiatan' }, { label: 'Kreatif' }]}
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimateOnScroll>
              <div className="section-tag mb-3">Tentang Program</div>
              <h2 className="mb-3">Seni & Kreativitas untuk Semua</h2>
              <div className="divider divider-left mb-5" />
              <p>Program kegiatan kreatif RW 44 Coatesville dirancang untuk memfasilitasi warga yang ingin mengekspresikan bakat dan kreativitasnya. Dari seni vokal, musik, tari, memasak, hingga fotografi — semua tersedia dalam suasana komunitas yang menyenangkan dan suportif.</p>
              <p className="mt-3">Kegiatan kreatif bukan hanya hiburan — ini adalah jembatan untuk mempererat hubungan sosial, membangun rasa percaya diri, dan mengangkat kualitas hidup warga Coatesville.</p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={150} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-lg aspect-[4/3]">
                <Image src="https://picsum.photos/seed/kreatif-hero/800/600" alt="Kegiatan Kreatif" fill className="object-cover" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="section bg-bg">
        <div className="container">
          <SectionHeader tag="Program" title="6 Kegiatan Kreatif Unggulan" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((p, i) => (
              <AnimateOnScroll key={i} delay={i * 70}>
                <div className="bg-white rounded-2xl p-6 shadow-card hover:-translate-y-1 hover:shadow-card-lg transition-all duration-300">
                  <div className="text-4xl mb-4">{p.icon}</div>
                  <h3 className="text-base mb-2">{p.title}</h3>
                  <p className="text-xs leading-relaxed mb-3">{p.desc}</p>
                  <div className="text-xs text-accent font-semibold">📅 {p.jadwal}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeader tag="Galeri" title="Karya & Momen Kreatif" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['kr-g1','kr-g2','kr-g3','kr-g4','kr-g5','kr-g6','kr-g7','kr-g8'].map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 50} className="aspect-square relative rounded-xl overflow-hidden">
                <Image src={`https://picsum.photos/seed/${s}/400/400`} alt="Kreatif" fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cta-gradient py-16 text-center">
        <div className="container">
          <h2 className="text-white mb-4">Tunjukkan Bakatmu Bersama Kami</h2>
          <Link href="/kontak" className="btn-primary">Daftar & Bergabung</Link>
        </div>
      </section>
    </>
  )
}

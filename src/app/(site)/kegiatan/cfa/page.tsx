import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'CFA – Alam & Lingkungan',
  description: 'CFA Coatesville — komunitas hiking, tracking, peduli lingkungan, dan rekreasi keluarga RW 44.',
}

const programs = [
  { icon: '🥾', title: 'Hiking & Tracking', desc: 'Pendakian dan trekking ke destinasi alam sekitar Jabodetabek — dari yang pemula hingga menengah — untuk menikmati alam bersama keluarga.', freq: 'Bulanan' },
  { icon: '🌱', title: 'Peduli Lingkungan', desc: 'Kegiatan penanaman pohon, bersih-bersih sungai, dan edukasi lingkungan untuk menjaga kelestarian alam sekitar kawasan Coatesville.', freq: 'Triwulan' },
  { icon: '🎒', title: 'Rekreasi Keluarga', desc: 'Wisata keluarga ke destinasi alam terbuka — kebun binatang, taman nasional, dan tempat wisata edukatif untuk anak-anak.', freq: '2× Setahun' },
  { icon: '📸', title: 'Nature Photography', desc: 'Workshop fotografi alam dan kompetisi foto bertema lingkungan untuk mendokumentasikan keindahan alam sekitar.', freq: 'Bulanan' },
  { icon: '🏕️', title: 'Family Camping', desc: 'Berkemah bersama keluarga di area camping terdekat — malam bintang, api unggun, dan kebersamaan di alam terbuka.', freq: '2× Setahun' },
  { icon: '🌿', title: 'Edukasi Lingkungan', desc: 'Seminar dan workshop tentang hidup hijau, pengelolaan sampah, dan pelestarian lingkungan untuk warga dan anak-anak.', freq: 'Bulanan' },
]

export default function CFAPage() {
  return (
    <>
      <PageHero
        tag="Kegiatan"
        title="CFA – Coatesville Family Adventure"
        subtitle="Komunitas alam dan lingkungan RW 44 — hiking, peduli lingkungan, dan rekreasi bersama keluarga."
        breadcrumb={[{ label: 'Home' }, { label: 'Kegiatan' }, { label: 'CFA' }]}
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimateOnScroll delay={150} className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-card-lg aspect-[4/3]">
                <Image src="https://picsum.photos/seed/cfa-hero/800/600" alt="CFA Hiking" fill className="object-cover" />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="order-1 lg:order-2">
              <div className="section-tag mb-3">Tentang CFA</div>
              <h2 className="mb-3">Coatesville Family Adventure</h2>
              <div className="divider divider-left mb-5" />
              <p>Coatesville Family Adventure (CFA) adalah komunitas pecinta alam dan lingkungan warga RW 44 yang aktif mengajak keluarga untuk lebih dekat dengan alam. Kegiatan kami dirancang ramah keluarga — anak-anak pun dapat ikut serta dalam petualangan yang menyenangkan dan edukatif.</p>
              <p className="mt-3">Selain rekreasi, CFA memiliki misi mulia untuk menjaga kelestarian lingkungan melalui program penanaman pohon dan gerakan peduli sampah di kawasan Coatesville dan sekitarnya.</p>
              <div className="mt-7 grid grid-cols-3 gap-4">
                {[{ val: '60+', label: 'Anggota Keluarga' }, { val: '24', label: 'Trip 2025' }, { val: '500+', label: 'Pohon Ditanam' }].map((s) => (
                  <div key={s.label} className="text-center bg-bg rounded-xl p-4">
                    <div className="text-2xl font-serif font-bold text-primary">{s.val}</div>
                    <div className="text-[0.65rem] text-muted mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="section bg-bg">
        <div className="container">
          <SectionHeader tag="Program CFA" title="6 Program Unggulan CFA" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((p, i) => (
              <AnimateOnScroll key={i} delay={i * 70}>
                <div className="bg-white rounded-2xl p-6 shadow-card hover:-translate-y-1 hover:shadow-card-lg transition-all duration-300">
                  <div className="text-4xl mb-4">{p.icon}</div>
                  <h3 className="text-base mb-2">{p.title}</h3>
                  <p className="text-xs leading-relaxed mb-3">{p.desc}</p>
                  <div className="text-xs text-accent font-semibold">📅 {p.freq}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeader tag="Galeri" title="Momen CFA" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['cfa-g1','cfa-g2','cfa-g3','cfa-g4','cfa-g5','cfa-g6'].map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 60} className="aspect-video relative rounded-xl overflow-hidden">
                <Image src={`https://picsum.photos/seed/${s}/600/340`} alt="CFA" fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cta-gradient py-16 text-center">
        <div className="container">
          <h2 className="text-white mb-4">Bergabung dengan CFA RW 44</h2>
          <p className="text-white/65 mb-7 text-sm max-w-md mx-auto">Ajak keluarga Anda berpetualang dan menjaga alam bersama komunitas CFA Coatesville.</p>
          <Link href="/kontak" className="btn-primary">Hubungi Kami</Link>
        </div>
      </section>
    </>
  )
}

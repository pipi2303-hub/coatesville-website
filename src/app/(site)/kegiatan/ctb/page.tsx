import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'CTB – Touring & Edukasi',
  description: 'Komunitas touring motorbike CTB RW 44 Coatesville — touring, edukasi safety riding, dan donasi sosial.',
}

const programs = [
  { icon: '🏍️', title: 'Sunday Touring', desc: 'Touring santai setiap Minggu pagi menjelajahi destinasi menarik di sekitar Jabodetabek bersama komunitas.', freq: 'Setiap Minggu' },
  { icon: '🛡️', title: 'Safety Riding Education', desc: 'Kelas edukasi keselamatan berkendara untuk anggota komunitas dan warga umum — teknik, regulasi, dan etika jalan.', freq: 'Bulanan' },
  { icon: '🎗️', title: 'Donasi & Sosial', desc: 'Kegiatan donasi ke panti asuhan, pesantren, dan komunitas kurang mampu di sekitar kawasan Kota Wisata.', freq: 'Triwulan' },
  { icon: '🔧', title: 'Bengkel Komunitas', desc: 'Sesi perawatan motor bersama dan berbagi ilmu tentang pemeliharaan kendaraan yang tepat.', freq: '2× Sebulan' },
  { icon: '📸', title: 'Foto Touring', desc: 'Dokumentasi perjalanan dan kompetisi foto touring komunitas dengan hadiah menarik setiap kuartal.', freq: 'Setiap Touring' },
  { icon: '🎓', title: 'Orientasi Anggota Baru', desc: 'Program orientasi untuk anggota baru — mengenal komunitas, peraturan, dan budaya CTB RW 44.', freq: 'Insidental' },
]

export default function CTBPage() {
  return (
    <>
      <PageHero
        tag="Kegiatan"
        title="CTB – Coatesville Touring Bikers"
        subtitle="Komunitas touring motorbike warga RW 44 yang aktif, peduli sesama, dan menjunjung keselamatan berkendara."
        breadcrumb={[{ label: 'Home' }, { label: 'Kegiatan' }, { label: 'CTB' }]}
      />

      {/* About */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimateOnScroll>
              <div className="section-tag mb-3">Tentang CTB</div>
              <h2 className="mb-3">Coatesville Touring Bikers</h2>
              <div className="divider divider-left mb-5" />
              <p>Coatesville Touring Bikers (CTB) adalah komunitas pengendara motor warga RW 44 Coatesville yang berdiri atas dasar kecintaan terhadap touring, persaudaraan, dan kepedulian sosial. Komunitas ini terbuka untuk semua warga RW 44 yang memiliki kendaraan bermotor dan ingin bergabung.</p>
              <p className="mt-3">Selain kegiatan touring, CTB aktif menggelar edukasi safety riding untuk meningkatkan kesadaran keselamatan berkendara dan rutin melakukan kegiatan donasi sosial ke masyarakat sekitar.</p>
              <div className="mt-7 grid grid-cols-3 gap-4">
                {[{ val: '45+', label: 'Anggota Aktif' }, { val: '52', label: 'Touring 2025' }, { val: '12', label: 'Donasi Terlaksana' }].map((s) => (
                  <div key={s.label} className="text-center bg-bg rounded-xl p-4">
                    <div className="text-2xl font-serif font-bold text-primary">{s.val}</div>
                    <div className="text-[0.65rem] text-muted mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={150} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-lg aspect-[4/3]">
                <Image src="https://picsum.photos/seed/ctb-hero/800/600" alt="CTB Touring" fill className="object-cover" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section bg-bg">
        <div className="container">
          <SectionHeader tag="Program CTB" title="6 Program Unggulan CTB" />
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

      {/* Gallery */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader tag="Galeri" title="Momen Touring CTB" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['ctb-g1','ctb-g2','ctb-g3','ctb-g4','ctb-g5','ctb-g6'].map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 60} className="aspect-video relative rounded-xl overflow-hidden">
                <Image src={`https://picsum.photos/seed/${s}/600/340`} alt="CTB" fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cta-gradient py-16 text-center">
        <div className="container">
          <h2 className="text-white mb-4">Bergabung dengan CTB RW 44</h2>
          <p className="text-white/65 mb-7 text-sm max-w-md mx-auto">Terbuka untuk semua warga RW 44 yang memiliki kendaraan bermotor dan ingin menjadi bagian dari komunitas CTB.</p>
          <Link href="/kontak" className="btn-primary">Daftar Jadi Anggota</Link>
        </div>
      </section>
    </>
  )
}

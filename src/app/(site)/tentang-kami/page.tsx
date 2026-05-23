import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Mengenal Portal RW 44 Coatesville — visi, misi, pengurus, dan komitmen komunitas Coatesville Kota Wisata.',
}

const misi = [
  { num: '01', icon: '🏘️', text: 'Mewujudkan komunitas RW 44 Coatesville yang aman, nyaman, sehat, dan berdaya.' },
  { num: '02', icon: '📡', text: 'Mengelola informasi dan komunikasi komunitas secara transparan dan profesional.' },
  { num: '03', icon: '🤝', text: 'Memfasilitasi pelayanan warga yang mudah diakses dan responsif.' },
  { num: '04', icon: '🌿', text: 'Menjaga dan meningkatkan kualitas infrastruktur dan fasilitas lingkungan.' },
  { num: '05', icon: '🎯', text: 'Mendorong partisipasi aktif seluruh warga dalam membangun komunitas yang harmonis.' },
]

const pengurus = [
  { jabatan: 'Ketua RW 44', nama: 'Pengurus RW 44', foto: 'rw-ketua' },
  { jabatan: 'Wakil Ketua', nama: 'Segera Tersedia', foto: 'rw-wakil' },
  { jabatan: 'Sekretaris', nama: 'Segera Tersedia', foto: 'rw-sekretaris' },
  { jabatan: 'Bendahara', nama: 'Segera Tersedia', foto: 'rw-bendahara' },
  { jabatan: 'Ketua Bidang Keamanan', nama: 'Segera Tersedia', foto: 'rw-keamanan' },
  { jabatan: 'Ketua Bidang Kebersihan', nama: 'Segera Tersedia', foto: 'rw-kebersihan' },
]

export default function TentangKamiPage() {
  return (
    <>
      <PageHero
        tag="Tentang Kami"
        title="Mengenal RW 44 Coatesville"
        subtitle="Komunitas perumahan modern yang terhubung, berdaya, dan saling peduli di kawasan Kota Wisata."
        breadcrumb={[{ label: 'Home' }, { label: 'Tentang Kami' }]}
      />

      {/* Profil RW */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <div className="section-tag">Profil Komunitas</div>
              <h2 className="mt-1 mb-3">RW 44 Coatesville, Komunitas Modern Kota Wisata</h2>
              <div className="divider divider-left" />
              <p className="mt-5">
                RW 44 Coatesville adalah salah satu klaster perumahan premium di kawasan Kota Wisata, Cibubur. Menghimpun ratusan keluarga yang aktif dan peduli terhadap kualitas kehidupan bersama, RW 44 terus berbenah untuk menjadi komunitas yang modern, aman, dan nyaman.
              </p>
              <p className="mt-3">
                Dengan hadirnya portal digital ini, kami berkomitmen untuk meningkatkan transparansi, mempercepat pelayanan, dan mempererat hubungan antarwarga melalui teknologi informasi.
              </p>
              <div className="mt-7 space-y-4">
                {[
                  { icon: '🏡', title: 'Klaster Premium', desc: 'Salah satu klaster terbaik di kawasan Kota Wisata Cibubur.' },
                  { icon: '👨‍👩‍👧‍👦', title: 'Komunitas Aktif', desc: 'Warga yang aktif berpartisipasi dalam berbagai program komunitas.' },
                  { icon: '💡', title: 'Inovasi Digital', desc: 'Portal komunitas pertama berbasis web di kawasan Kota Wisata.' },
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
                  src="https://picsum.photos/seed/coatesville-profil/800/600"
                  alt="RW 44 Coatesville"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-card-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-lg">🏆</div>
                <div>
                  <div className="font-serif font-bold text-primary text-sm">RW 44</div>
                  <div className="text-muted text-xs">Coatesville Kota Wisata</div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Visi */}
      <section className="section bg-bg">
        <div className="container">
          <SectionHeader tag="Visi & Misi" title="Landasan Gerak RW 44 Coatesville" />

          <AnimateOnScroll>
            <div className="relative bg-primary rounded-3xl p-10 md:p-14 text-center overflow-hidden mb-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-mid/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent-light text-xs font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-6">
                  👁️ Visi Komunitas
                </div>
                <p className="text-white text-xl md:text-2xl font-serif leading-relaxed max-w-3xl mx-auto">
                  Mewujudkan komunitas RW 44 Coatesville yang{' '}
                  <em className="text-accent not-italic font-bold">aman</em>,{' '}
                  <em className="text-accent not-italic font-bold">nyaman</em>,{' '}
                  <em className="text-accent not-italic font-bold">sehat</em>,{' '}
                  <em className="text-accent not-italic font-bold">aktif</em>, dan{' '}
                  <em className="text-accent not-italic font-bold">berdaya</em>.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {misi.map((m, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-accent-light bg-accent/10 w-8 h-8 rounded-full flex items-center justify-center">
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
      </section>

      {/* Pengurus */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            tag="Pengurus RW"
            title="Struktur Pengurus RW 44"
            subtitle="Pengurus RW 44 Coatesville yang berkomitmen melayani dan membangun komunitas."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {pengurus.map((p, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="text-center bg-bg rounded-2xl p-6 shadow-card hover:-translate-y-1 hover:shadow-card-lg transition-all duration-300">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-accent-pale">
                    <Image
                      src={`https://picsum.photos/seed/${p.foto}/200/200`}
                      alt={p.nama}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-[0.7rem] font-bold text-accent uppercase tracking-wider mb-1">
                    {p.jabatan}
                  </div>
                  <h4 className="text-sm">{p.nama}</h4>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/tentang-kami/pengurus" className="btn-outline-green">
              Lihat Struktur Lengkap →
            </Link>
          </div>
        </div>
      </section>

      {/* Posyandu Link */}
      <section className="bg-accent-pale py-16">
        <div className="container">
          <div className="bg-white rounded-3xl p-10 shadow-card flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 ring-4 ring-accent/20">
              <Image
                src="/images/logo-posyandu.jpeg"
                alt="Posyandu Sehat Ceria"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="section-tag mb-2">Program Unggulan</div>
              <h3 className="text-xl mb-2">Posyandu Sehat Ceria RW 44</h3>
              <p className="text-sm">
                Layanan kesehatan terpadu Posyandu Sehat Ceria melayani seluruh siklus hidup warga — dari ibu hamil, bayi, anak, hingga lansia.
              </p>
            </div>
            <Link href="/kegiatan/posyandu" className="btn-primary flex-shrink-0">
              Lihat Posyandu →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cta-gradient py-[88px] text-center">
        <div className="container">
          <div className="section-tag-light mx-auto">Bergabung Bersama Kami</div>
          <h2 className="text-white mt-2 mb-4">Jadilah Bagian Aktif Komunitas RW 44</h2>
          <p className="text-white/65 max-w-lg mx-auto mb-8">
            Bersama kita bangun komunitas Coatesville yang lebih baik, harmonis, dan berdaya.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/kontak" className="btn-primary">Hubungi Kami</Link>
            <Link href="/kegiatan" className="btn-outline">Lihat Kegiatan</Link>
          </div>
        </div>
      </section>
    </>
  )
}

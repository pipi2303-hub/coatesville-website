import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Pengantar',
  description: 'Kata sambutan dan pengantar dari Ketua RW 44 Coatesville Kota Wisata.',
}

export default function PengantarPage() {
  return (
    <>
      <PageHero
        tag="Pengantar"
        title="Sambutan Ketua RW 44"
        subtitle="Pesan dan arahan dari Ketua RW 44 Coatesville untuk seluruh warga perumahan."
        breadcrumb={[{ label: 'Home' }, { label: 'Pengantar' }]}
      />

      {/* Sambutan */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-14 items-start">
            <AnimateOnScroll className="lg:col-span-2">
              <div className="sticky top-28 text-center bg-bg rounded-3xl p-8 shadow-card">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-5 ring-4 ring-accent/20 shadow-card-lg">
                  <Image
                    src="https://picsum.photos/seed/ketua-rw44/300/300"
                    alt="Ketua RW 44 Coatesville"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="section-tag mx-auto mb-2">Sambutan</div>
                <h3 className="text-xl mb-1">Ketua RW 44</h3>
                <p className="text-xs text-muted">Coatesville Kota Wisata</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="text-xs text-muted">Periode Kepengurusan</p>
                  <p className="text-sm font-semibold text-primary mt-1">2024 – 2026</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150} className="lg:col-span-3">
              <div className="section-tag mb-3">Kata Sambutan</div>
              <h2 className="mb-4">Bersama Kita Wujudkan Komunitas yang Lebih Baik</h2>
              <div className="divider divider-left mb-6" />

              <div className="prose prose-sm max-w-none text-muted space-y-4 leading-loose">
                <p>Assalamu&apos;alaikum Warahmatullahi Wabarakatuh,</p>
                <p>
                  Segala puji bagi Tuhan Yang Maha Esa atas berkat dan rahmat-Nya sehingga kita dapat terus bersama-sama dalam membangun komunitas RW 44 Coatesville yang lebih baik, harmonis, dan berdaya.
                </p>
                <p>
                  Sebagai Ketua RW 44, saya menyambut dengan penuh kebanggaan hadirnya Portal Digital Komunitas RW 44 Coatesville ini. Portal ini merupakan wujud nyata komitmen kami untuk meningkatkan transparansi, mempercepat komunikasi, dan memberikan pelayanan yang lebih baik kepada seluruh warga.
                </p>
                <p>
                  Melalui portal ini, seluruh warga dapat mengakses informasi terkini mengenai kegiatan komunitas, program Posyandu Sehat Ceria, laporan keuangan, pengaduan, dan berbagai layanan administrasi secara mudah dan transparan.
                </p>
                <p>
                  Kami mengajak seluruh warga RW 44 untuk aktif berpartisipasi, memberikan masukan, dan bersama-sama menjaga serta mengembangkan portal ini sebagai media komunikasi komunitas yang bermanfaat.
                </p>
                <p>
                  Semoga dengan kehadiran portal ini, hubungan antarwarga semakin erat, pelayanan semakin baik, dan komunitas Coatesville semakin maju dan harmonis.
                </p>
                <p>
                  Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex items-center gap-4">
                <div>
                  <h4 className="font-semibold text-primary">Ketua RW 44 Coatesville</h4>
                  <p className="text-xs text-muted mt-0.5">Coatesville Kota Wisata, 2026</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Video Sambutan */}
      <section className="section bg-bg">
        <div className="container">
          <div className="text-center mb-10">
            <div className="section-tag mx-auto mb-2">Video Sambutan</div>
            <h2>Sambutan dalam Video</h2>
            <div className="divider" />
          </div>
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto">
              <div className="aspect-video bg-primary rounded-3xl overflow-hidden shadow-card-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">▶️</div>
                  <p className="text-white/70 text-sm">Video sambutan akan segera tersedia</p>
                  <div className="mt-4 inline-block bg-accent/20 border border-accent/30 text-accent-light text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-cta-gradient py-16 text-center">
        <div className="container">
          <h2 className="text-white mb-4">Bergabung dalam Komunitas RW 44</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tentang-kami" className="btn-primary">Tentang RW 44</Link>
            <Link href="/kegiatan" className="btn-outline">Lihat Kegiatan</Link>
          </div>
        </div>
      </section>
    </>
  )
}

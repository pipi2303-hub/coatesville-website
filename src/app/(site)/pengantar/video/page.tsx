import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Video Pengantar RW 44',
  description: 'Video sambutan dan pengenalan RW 44 Coatesville dari Ketua RW dan pengurus.',
}

const videos = [
  { title: 'Sambutan Ketua RW 44 Coatesville', duration: '5:32', cat: 'Sambutan', thumb: 'vid-thumb-1', desc: 'Video sambutan resmi Ketua RW 44 Coatesville periode 2024–2026 kepada seluruh warga komunitas.' },
  { title: 'Profil & Sejarah RW 44 Coatesville', duration: '8:15', cat: 'Profil', thumb: 'vid-thumb-2', desc: 'Pengenalan lengkap profil komunitas RW 44 Coatesville — sejarah, wilayah, dan pencapaian.' },
  { title: 'Program Unggulan Kepengurusan 2024–2026', duration: '12:40', cat: 'Program', thumb: 'vid-thumb-3', desc: 'Pemaparan program-program unggulan kepengurusan RW 44 untuk periode 2024–2026.' },
  { title: 'Posyandu Sehat Ceria RW 44', duration: '6:20', cat: 'Posyandu', thumb: 'vid-thumb-4', desc: 'Pengenalan Posyandu Sehat Ceria RW 44 — layanan, jadwal, dan cara bergabung.' },
]

export default function VideoPage() {
  return (
    <>
      <PageHero
        tag="Pengantar"
        title="Video Pengantar RW 44"
        subtitle="Saksikan video sambutan dan pengenalan komunitas RW 44 Coatesville dari para pengurus."
        breadcrumb={[{ label: 'Home' }, { label: 'Pengantar' }, { label: 'Video' }]}
      />

      {/* Featured video */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <AnimateOnScroll>
            <div className="section-tag mb-3 text-center mx-auto w-fit">Video Utama</div>
            <h2 className="text-center mb-8">Sambutan Ketua RW 44 Coatesville</h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="relative aspect-video bg-ink rounded-2xl overflow-hidden shadow-card-lg flex items-center justify-center mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/80" />
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border-2 border-white/40 hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-white text-3xl ml-1">▶</span>
                </div>
                <p className="text-white font-semibold text-lg">Video Sambutan Ketua RW 44</p>
                <p className="text-white/70 text-sm mt-1">Durasi: 5 menit 32 detik</p>
                <p className="text-white/50 text-xs mt-3">Video akan tersedia setelah peluncuran resmi portal</p>
              </div>
            </div>
            <p className="text-center text-sm text-muted">Video sambutan resmi Ketua RW 44 Coatesville Periode 2024–2026</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Video grid */}
      <section className="section bg-bg">
        <div className="container">
          <SectionHeader tag="Semua Video" title="Koleksi Video RW 44 Coatesville" subtitle="Dokumentasi video resmi komunitas RW 44 — sambutan, profil, dan program unggulan." />
          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((v, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg transition-all duration-300 group">
                  <div className="relative aspect-video bg-ink/80 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/30" />
                    <div className="relative z-10 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40 group-hover:bg-white/30 transition-colors cursor-pointer">
                      <span className="text-white text-xl ml-1">▶</span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-0.5 rounded">{v.duration}</div>
                    <div className="absolute top-3 left-3">
                      <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full font-semibold">{v.cat}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-sm font-semibold text-ink mb-2">{v.title}</h4>
                    <p className="text-xs text-muted leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={200}>
            <div className="mt-10 bg-white rounded-2xl p-8 shadow-card text-center border border-border/50">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-base mb-2">Video Sedang Diproduksi</h3>
              <p className="text-sm text-muted max-w-md mx-auto mb-4">Tim media RW 44 Coatesville sedang memproduksi video-video berkualitas untuk menampilkan profil dan kegiatan komunitas secara lebih lengkap.</p>
              <Link href="/kontak" className="btn-outline-green text-sm">Hubungi Kami untuk Info Lebih Lanjut</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-cta-gradient py-16 text-center">
        <div className="container">
          <h2 className="text-white mb-4">Ingin Berkontribusi?</h2>
          <p className="text-white/65 mb-7 text-sm max-w-md mx-auto">Bantu kami mendokumentasikan kegiatan RW 44 Coatesville dengan bergabung di tim media komunitas.</p>
          <Link href="/kontak" className="btn-primary">Bergabung dengan Tim Media</Link>
        </div>
      </section>
    </>
  )
}

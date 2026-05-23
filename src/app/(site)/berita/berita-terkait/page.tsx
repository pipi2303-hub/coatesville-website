import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Berita Terkait RW 44',
  description: 'Berita dan informasi terkait yang relevan untuk warga RW 44 Coatesville dari berbagai sumber.',
}

const topik = [
  { label: 'Semua', active: true },
  { label: 'Posyandu', active: false },
  { label: 'Keamanan', active: false },
  { label: 'Lingkungan', active: false },
  { label: 'Sosial', active: false },
]

const berita = [
  { seed: 'rel-1', cat: 'Posyandu', tgl: '19 Mei 2026', title: 'Kemenkes Tingkatkan Dana Operasional Posyandu Seluruh Indonesia', excerpt: 'Kementerian Kesehatan mengumumkan peningkatan dana operasional Posyandu sebesar 40% untuk mendukung program pencegahan stunting nasional.' },
  { seed: 'rel-2', cat: 'Keamanan', tgl: '17 Mei 2026', title: 'Sistem CCTV Terintegrasi Kelurahan Mulai Diuji Coba', excerpt: 'Kelurahan Cibubur mulai menguji coba sistem CCTV terintegrasi yang terhubung langsung ke Polsek Ciracas untuk meningkatkan keamanan wilayah.' },
  { seed: 'rel-3', cat: 'Lingkungan', tgl: '15 Mei 2026', title: 'Program Bank Sampah Nasional Diperluas ke Tingkat RW', excerpt: 'KLHK memperluas program bank sampah hingga tingkat RW dengan insentif untuk warga yang aktif memilah dan menyetorkan sampah daur ulang.' },
  { seed: 'rel-4', cat: 'Sosial', tgl: '13 Mei 2026', title: 'BPBD DKI Latih Kader Tanggap Bencana Tingkat RW', excerpt: 'BPBD DKI Jakarta menggelar pelatihan kader tanggap bencana tingkat RW untuk meningkatkan kesiapsiagaan komunitas dalam menghadapi bencana.' },
  { seed: 'rel-5', cat: 'Posyandu', tgl: '11 Mei 2026', title: 'Vaksinasi Booster untuk Lansia Diperluas ke Posyandu', excerpt: 'Program vaksinasi booster untuk lansia kini bisa dilakukan di Posyandu terdekat tanpa perlu ke Puskesmas, mempermudah akses lansia.' },
  { seed: 'rel-6', cat: 'Lingkungan', tgl: '9 Mei 2026', title: 'Jakarta Targetkan Zero Waste 2030 melalui Program RT/RW', excerpt: 'Pemprov DKI Jakarta menetapkan target zero waste pada 2030 dengan melibatkan pengurus RT/RW sebagai ujung tombak pengelolaan sampah.' },
  { seed: 'rel-7', cat: 'Sosial', tgl: '7 Mei 2026', title: 'Bantuan PKH Tahap II 2026 Mulai Dicairkan', excerpt: 'Kemensos mulai mencairkan bantuan Program Keluarga Harapan (PKH) tahap II 2026. Warga yang berhak dapat mengambil di bank/agen terdekat.' },
  { seed: 'rel-8', cat: 'Keamanan', tgl: '5 Mei 2026', title: 'Siskamling Digital: Aplikasi Keamanan Warga Resmi Diluncurkan', excerpt: 'Polda Metro Jaya meluncurkan aplikasi Siskamling Digital yang memungkinkan warga melaporkan kejadian keamanan secara real-time.' },
  { seed: 'rel-9', cat: 'Posyandu', tgl: '3 Mei 2026', title: 'Stunting Turun 14% Berkat Program Posyandu Aktif', excerpt: 'Data Kemenkes menunjukkan prevalensi stunting turun 14% di wilayah dengan Posyandu aktif, mengonfirmasi efektivitas program posyandu komunitas.' },
]

const catColor: Record<string, string> = {
  Posyandu: 'bg-green-100 text-green-700',
  Keamanan: 'bg-red-100 text-red-700',
  Lingkungan: 'bg-emerald-100 text-emerald-700',
  Sosial: 'bg-blue-100 text-blue-700',
}

export default function BeritaTerkaitPage() {
  return (
    <>
      <PageHero
        tag="Berita & Info"
        title="Berita Terkait"
        subtitle="Berita dan informasi dari berbagai sumber yang relevan dan bermanfaat bagi warga RW 44 Coatesville."
        breadcrumb={[{ label: 'Home' }, { label: 'Berita' }, { label: 'Berita Terkait' }]}
      />

      <section className="section bg-white">
        <div className="container">
          {/* Filter topik */}
          <AnimateOnScroll>
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {topik.map((t, i) => (
                <button key={i} className={`text-xs px-4 py-1.5 rounded-full font-semibold transition-all ${t.active ? 'bg-primary text-white' : 'bg-bg text-muted hover:bg-primary/10'}`}>{t.label}</button>
              ))}
            </div>
          </AnimateOnScroll>

          <SectionHeader tag="Berita Relevan" title="Informasi Penting untuk Warga RW 44" subtitle="Berita pilihan dari berbagai sumber yang berdampak langsung pada kehidupan warga RW 44 Coatesville." />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {berita.map((b, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <article className="bg-bg rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={`https://picsum.photos/seed/${b.seed}/600/340`} alt={b.title} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3">
                      <span className={`text-[0.6rem] font-bold px-2.5 py-1 rounded-full ${catColor[b.cat]}`}>{b.cat}</span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-[0.65rem] text-muted mb-2">📅 {b.tgl}</p>
                    <h3 className="text-sm font-semibold text-ink mb-2 leading-snug">{b.title}</h3>
                    <p className="text-xs text-muted leading-relaxed flex-1">{b.excerpt}</p>
                    <button className="mt-4 text-xs text-primary font-semibold hover:underline text-left">Baca Selengkapnya →</button>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/berita" className="btn-outline-green">← Kembali ke Berita</Link>
          </div>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'News & Updates',
  description: 'Berita terkini, peraturan cluster, dan informasi komunitas RW 44 Coatesville Kota Wisata.',
}

const categories = ['Semua', 'Pengumuman', 'Kesehatan', 'Kegiatan', 'Peraturan', 'Infrastruktur', 'Keuangan']

const articles = [
  { seed: 'news1', cat: 'Pengumuman', date: '20 Mei 2026', title: 'Jadwal Posyandu Bulan Juni 2026', desc: 'Pengurus Posyandu Sehat Ceria mengumumkan jadwal pelayanan bulan Juni 2026. Harap semua warga memperhatikan jadwal yang telah ditetapkan.', featured: true },
  { seed: 'news2', cat: 'Kegiatan', date: '15 Mei 2026', title: 'Olahraga Bersama Setiap Minggu Pagi', desc: 'Kegiatan olahraga bersama warga RW 44 rutin dilaksanakan setiap Minggu pagi di area lapangan Coatesville.', featured: true },
  { seed: 'news3', cat: 'Infrastruktur', date: '10 Mei 2026', title: 'Perbaikan Jalan Kompleks Tahap II Selesai', desc: 'Pengerjaan perbaikan jalan kompleks Coatesville tahap II telah selesai dilaksanakan. Terima kasih atas kesabaran warga.', featured: false },
  { seed: 'news4', cat: 'Kesehatan', date: '5 Mei 2026', title: 'Tips Menjaga Kesehatan di Musim Pancaroba', desc: 'Di musim pancaroba ini, warga RW 44 diimbau untuk meningkatkan asupan vitamin dan menjaga pola hidup sehat.', featured: false },
  { seed: 'news5', cat: 'Peraturan', date: '1 Mei 2026', title: 'Peraturan Cluster Terbaru: Tata Cara Renovasi', desc: 'Pengurus RW 44 menerbitkan peraturan terbaru mengenai tata cara dan prosedur renovasi rumah di kawasan Coatesville.', featured: false },
  { seed: 'news6', cat: 'Keuangan', date: '28 Apr 2026', title: 'Laporan Keuangan RW 44 Triwulan I 2026', desc: 'Laporan keuangan triwulan pertama tahun 2026 telah diterbitkan. Warga dapat mengunduh laporan lengkap di halaman Laporan.', featured: false },
]

export default function BeritaPage() {
  return (
    <>
      <PageHero
        tag="News & Updates"
        title="Berita & Informasi Terkini"
        subtitle="Kabar terbaru dari komunitas RW 44 Coatesville — pengumuman, kegiatan, peraturan, dan informasi penting."
        breadcrumb={[{ label: 'Home' }, { label: 'News & Updates' }]}
      />

      {/* Filter + Search */}
      <section className="bg-white border-b border-border py-5 sticky top-[64px] z-50">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 ${
                  c === 'Semua'
                    ? 'bg-primary text-white'
                    : 'bg-bg text-muted hover:bg-accent-pale hover:text-accent'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <input
              type="search"
              placeholder="Cari berita..."
              className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-border focus:outline-none focus:border-primary-mid"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="section bg-bg">
        <div className="container">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border" />
            <span className="text-muted text-xs font-bold uppercase tracking-wider">Featured</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {articles.filter((a) => a.featured).map((a, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <article className="card-article group">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/${a.seed}/800/450`}
                      alt={a.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    <span className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                      {a.cat}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="text-muted text-xs mb-2">{a.date}</div>
                    <h3 className="text-lg mb-2 group-hover:text-primary-mid transition-colors">{a.title}</h3>
                    <p className="text-xs leading-relaxed mb-4">{a.desc}</p>
                    <Link href="#" className="text-accent font-semibold text-sm hover:text-primary transition-colors">
                      Baca Selengkapnya →
                    </Link>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>

          {/* All Articles */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border" />
            <span className="text-muted text-xs font-bold uppercase tracking-wider">Semua Berita</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.filter((a) => !a.featured).map((a, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <article className="card-article group">
                  <div className="aspect-[3/2] relative overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/${a.seed}/600/400`}
                      alt={a.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[0.65rem] bg-accent-pale text-accent font-bold px-2.5 py-0.5 rounded-full">{a.cat}</span>
                      <span className="text-muted text-xs">{a.date}</span>
                    </div>
                    <h3 className="text-[0.95rem] mb-2">{a.title}</h3>
                    <p className="text-xs leading-relaxed mb-3">{a.desc}</p>
                    <Link href="#" className="text-accent font-semibold text-xs hover:text-primary transition-colors">
                      Baca →
                    </Link>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            {[1, 2, 3, '...', 8].map((p, i) => (
              <button
                key={i}
                className={`w-9 h-9 rounded-full text-sm font-semibold transition-colors ${
                  p === 1
                    ? 'bg-primary text-white'
                    : 'bg-white text-muted border border-border hover:border-primary hover:text-primary'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/ui/PageHero'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Galeri',
  description: 'Dokumentasi kegiatan komunitas RW 44 Coatesville Kota Wisata — Posyandu, olahraga, kegiatan sosial, dan momen kebersamaan warga.',
}

const categories = ['Semua', 'Posyandu', 'Olahraga', 'CTB', 'CFA', 'Kreatif', 'Hari Besar', 'Infrastruktur']

const photos = [
  { seed: 'g-posyandu-1', cat: 'Posyandu', caption: 'Pelayanan Posyandu Bulan Mei 2026', size: 'large' },
  { seed: 'g-posyandu-2', cat: 'Posyandu', caption: 'Imunisasi Bayi & Balita' },
  { seed: 'g-olahraga-1', cat: 'Olahraga', caption: 'Senam Pagi Bersama' },
  { seed: 'g-ctb-1', cat: 'CTB', caption: 'Touring Motorbike Komunitas', size: 'large' },
  { seed: 'g-cfa-1', cat: 'CFA', caption: 'Hiking Bersama Keluarga' },
  { seed: 'g-kreatif-1', cat: 'Kreatif', caption: 'Workshop Seni & Musik' },
  { seed: 'g-harbes-1', cat: 'Hari Besar', caption: 'HUT Kemerdekaan RI ke-80' },
  { seed: 'g-posyandu-3', cat: 'Posyandu', caption: 'Penyuluhan Kesehatan Warga' },
  { seed: 'g-olahraga-2', cat: 'Olahraga', caption: 'Mini Basket RW 44' },
  { seed: 'g-infra-1', cat: 'Infrastruktur', caption: 'Taman Gazebo Coatesville', size: 'large' },
  { seed: 'g-cfa-2', cat: 'CFA', caption: 'Peduli Lingkungan' },
  { seed: 'g-posyandu-4', cat: 'Posyandu', caption: 'Pemeriksaan Lansia' },
]

export default function GaleriPage() {
  return (
    <>
      <PageHero
        tag="Galeri"
        title="Momen Kegiatan Komunitas"
        subtitle="Dokumentasi kegiatan dan momen kebersamaan warga RW 44 Coatesville Kota Wisata."
        breadcrumb={[{ label: 'Home' }, { label: 'Galeri' }]}
      />

      {/* Filter */}
      <section className="bg-white border-b border-border py-5 sticky top-[64px] z-50">
        <div className="container flex flex-wrap justify-center gap-2">
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
      </section>

      {/* Gallery Grid */}
      <section className="section bg-bg">
        <div className="container">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {photos.map((p, i) => (
              <AnimateOnScroll key={i} delay={(i % 4) * 80} className="break-inside-avoid">
                <div className="group relative rounded-2xl overflow-hidden shadow-card cursor-pointer">
                  <Image
                    src={`https://picsum.photos/seed/${p.seed}/${p.size === 'large' ? '800/600' : '600/400'}`}
                    alt={p.caption}
                    width={p.size === 'large' ? 800 : 600}
                    height={p.size === 'large' ? 600 : 400}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-colors duration-300 flex items-end">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full p-4">
                      <span className="text-[0.65rem] bg-accent text-white font-bold px-2.5 py-0.5 rounded-full">
                        {p.cat}
                      </span>
                      <p className="text-white text-xs font-medium mt-2">{p.caption}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-outline-green">
              Muat Lebih Banyak
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

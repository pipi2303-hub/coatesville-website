'use client'

import { useState } from 'react'
import Image from 'next/image'
import PageHero from '@/components/ui/PageHero'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const categories = ['Semua', 'Posyandu', 'Olahraga', 'CTB', 'CFA', 'Kreatif', 'Hari Besar', 'Infrastruktur']

const photos = [
  { seed: 'g-posyandu-1',  cat: 'Posyandu',      caption: 'Pelayanan Posyandu Bulan Mei 2026',         size: 'large' },
  { seed: 'g-posyandu-2',  cat: 'Posyandu',      caption: 'Imunisasi Bayi & Balita',                   size: 'normal' },
  { seed: 'g-posyandu-3',  cat: 'Posyandu',      caption: 'Penyuluhan Gizi Keluarga',                  size: 'normal' },
  { seed: 'g-posyandu-4',  cat: 'Posyandu',      caption: 'Pemeriksaan Kesehatan Lansia',               size: 'normal' },
  { seed: 'g-posyandu-5',  cat: 'Posyandu',      caption: 'Kader Posyandu Sehat Ceria',                size: 'normal' },
  { seed: 'g-olahraga-1',  cat: 'Olahraga',      caption: 'Senam Pagi Bersama Warga',                  size: 'large' },
  { seed: 'g-olahraga-2',  cat: 'Olahraga',      caption: 'Mini Basket RW 44',                         size: 'normal' },
  { seed: 'g-olahraga-3',  cat: 'Olahraga',      caption: 'Voli Sore Hari',                            size: 'normal' },
  { seed: 'g-olahraga-4',  cat: 'Olahraga',      caption: 'Tenis Meja Komunitas',                      size: 'normal' },
  { seed: 'g-ctb-1',       cat: 'CTB',           caption: 'Sunday Touring Komunitas CTB',              size: 'large' },
  { seed: 'g-ctb-2',       cat: 'CTB',           caption: 'Safety Riding Education',                   size: 'normal' },
  { seed: 'g-ctb-3',       cat: 'CTB',           caption: 'Donasi Sosial CTB RW 44',                   size: 'normal' },
  { seed: 'g-cfa-1',       cat: 'CFA',           caption: 'Hiking Bersama Keluarga',                   size: 'large' },
  { seed: 'g-cfa-2',       cat: 'CFA',           caption: 'Peduli Lingkungan CFA',                     size: 'normal' },
  { seed: 'g-cfa-3',       cat: 'CFA',           caption: 'Rekreasi Alam Keluarga',                    size: 'normal' },
  { seed: 'g-kreatif-1',   cat: 'Kreatif',       caption: 'Workshop Seni Vokal & Musik',               size: 'normal' },
  { seed: 'g-kreatif-2',   cat: 'Kreatif',       caption: 'Line Dance Bersama Warga',                  size: 'large' },
  { seed: 'g-kreatif-3',   cat: 'Kreatif',       caption: 'Cooking Class Komunitas',                   size: 'normal' },
  { seed: 'g-harbes-1',    cat: 'Hari Besar',    caption: 'Upacara HUT RI ke-80',                      size: 'large' },
  { seed: 'g-harbes-2',    cat: 'Hari Besar',    caption: 'Lomba 17 Agustus Bersama',                  size: 'normal' },
  { seed: 'g-harbes-3',    cat: 'Hari Besar',    caption: 'Halal Bihalal Idul Fitri',                  size: 'normal' },
  { seed: 'g-infra-1',     cat: 'Infrastruktur', caption: 'Taman Gazebo Coatesville',                  size: 'large' },
  { seed: 'g-infra-2',     cat: 'Infrastruktur', caption: 'Lapangan Olahraga RW 44',                   size: 'normal' },
  { seed: 'g-infra-3',     cat: 'Infrastruktur', caption: 'Pos Sekuriti Gate 1',                       size: 'normal' },
]

export default function GaleriClient() {
  const [active, setActive] = useState('Semua')
  const [lightbox, setLightbox] = useState<(typeof photos)[number] | null>(null)

  const filtered = active === 'Semua' ? photos : photos.filter((p) => p.cat === active)

  return (
    <>
      <PageHero
        tag="Galeri"
        title="Momen Kegiatan Komunitas"
        subtitle="Dokumentasi kegiatan dan momen kebersamaan warga RW 44 Coatesville Kota Wisata."
        breadcrumb={[{ label: 'Home' }, { label: 'Galeri' }]}
      />

      {/* Filter Tabs */}
      <section className="bg-white border-b border-border py-5 sticky top-[64px] z-50">
        <div className="container flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                active === c
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-bg text-muted hover:bg-accent-pale hover:text-accent'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-bg border-b border-border py-4">
        <div className="container text-center">
          <p className="text-xs text-muted font-medium">
            Menampilkan <span className="text-primary font-bold">{filtered.length}</span> foto
            {active !== 'Semua' && <> dalam kategori <span className="text-accent font-bold">{active}</span></>}
          </p>
        </div>
      </section>

      {/* Gallery Masonry Grid */}
      <section className="section bg-bg">
        <div className="container">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filtered.map((p, i) => (
              <AnimateOnScroll key={`${active}-${p.seed}`} delay={(i % 4) * 60} className="break-inside-avoid">
                <button
                  onClick={() => setLightbox(p)}
                  className="group relative w-full rounded-2xl overflow-hidden shadow-card cursor-zoom-in block"
                >
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
                </button>
              </AnimateOnScroll>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">📷</div>
              <p className="text-muted text-sm">Belum ada foto untuk kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-[2000] flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={`https://picsum.photos/seed/${lightbox.seed}/${lightbox.size === 'large' ? '1200/900' : '800/533'}`}
              alt={lightbox.caption}
              width={lightbox.size === 'large' ? 1200 : 800}
              height={lightbox.size === 'large' ? 900 : 533}
              className="w-full rounded-2xl object-cover shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-2xl">
              <span className="text-xs bg-accent text-white font-bold px-3 py-1 rounded-full">{lightbox.cat}</span>
              <p className="text-white font-medium mt-2">{lightbox.caption}</p>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 w-9 h-9 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Tutup"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}

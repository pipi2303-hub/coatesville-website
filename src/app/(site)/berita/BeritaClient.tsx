'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const categories = ['Semua', 'Pengumuman', 'Kesehatan', 'Kegiatan', 'Peraturan', 'Infrastruktur', 'Keuangan']

const articles = [
  { seed: 'news1',  cat: 'Pengumuman',   date: '20 Mei 2026',  title: 'Jadwal Posyandu Bulan Juni 2026',                 desc: 'Pengurus Posyandu Sehat Ceria mengumumkan jadwal pelayanan bulan Juni 2026. Harap semua warga memperhatikan jadwal yang telah ditetapkan.',          featured: true },
  { seed: 'news2',  cat: 'Kegiatan',     date: '15 Mei 2026',  title: 'Olahraga Bersama Setiap Minggu Pagi',             desc: 'Kegiatan olahraga bersama warga RW 44 rutin dilaksanakan setiap Minggu pagi di area lapangan Coatesville.',                                         featured: true },
  { seed: 'news3',  cat: 'Infrastruktur',date: '10 Mei 2026',  title: 'Perbaikan Jalan Kompleks Tahap II Selesai',       desc: 'Pengerjaan perbaikan jalan kompleks Coatesville tahap II telah selesai dilaksanakan. Terima kasih atas kesabaran warga.',                           featured: false },
  { seed: 'news4',  cat: 'Kesehatan',    date: '5 Mei 2026',   title: 'Tips Menjaga Kesehatan di Musim Pancaroba',       desc: 'Di musim pancaroba ini, warga RW 44 diimbau untuk meningkatkan asupan vitamin dan menjaga pola hidup sehat.',                                       featured: false },
  { seed: 'news5',  cat: 'Peraturan',    date: '1 Mei 2026',   title: 'Peraturan Cluster Terbaru: Tata Cara Renovasi',   desc: 'Pengurus RW 44 menerbitkan peraturan terbaru mengenai tata cara dan prosedur renovasi rumah di kawasan Coatesville.',                              featured: false },
  { seed: 'news6',  cat: 'Keuangan',     date: '28 Apr 2026',  title: 'Laporan Keuangan RW 44 Triwulan I 2026',         desc: 'Laporan keuangan triwulan pertama tahun 2026 telah diterbitkan. Warga dapat mengunduh laporan lengkap di halaman Laporan.',                          featured: false },
  { seed: 'news7',  cat: 'Kesehatan',    date: '20 Apr 2026',  title: 'Imunisasi Anak Gratis Bulan Mei 2026',           desc: 'Program imunisasi gratis untuk balita usia 0–5 tahun akan diselenggarakan di Pos Posyandu Sehat Ceria pada bulan Mei.',                             featured: false },
  { seed: 'news8',  cat: 'Pengumuman',   date: '15 Apr 2026',  title: 'Rapat Warga RW 44 — Agenda dan Undangan',        desc: 'Seluruh warga RW 44 diundang untuk hadir dalam rapat warga yang akan membahas program kerja dan evaluasi kepengurusan.',                             featured: false },
  { seed: 'news9',  cat: 'Kegiatan',     date: '8 Apr 2026',   title: 'CTB Touring ke Puncak — Dokimentasi Maret 2026', desc: 'Komunitas CTB RW 44 melaksanakan touring ke Puncak, Bogor, pada akhir Maret 2026 dengan diikuti 38 anggota aktif.',                               featured: false },
  { seed: 'news10', cat: 'Infrastruktur',date: '1 Apr 2026',   title: 'Pemasangan CCTV Tambahan di Blok B',              desc: '4 unit CCTV baru berhasil dipasang di area blok B sebagai bagian dari peningkatan sistem keamanan kawasan RW 44.',                                   featured: false },
  { seed: 'news11', cat: 'Kegiatan',     date: '25 Mar 2026',  title: 'Ramadhan 2026 — Program Tarawih Bersama',        desc: 'Selama bulan Ramadhan 2026, warga RW 44 menggelar shalat tarawih bersama setiap malam di mushola komplek.',                                          featured: false },
  { seed: 'news12', cat: 'Keuangan',     date: '15 Mar 2026',  title: 'Transparansi Kas: Laporan Maret 2026',           desc: 'Bendahara RW 44 merilis laporan kas bulanan Maret 2026 sebagai wujud transparansi pengelolaan keuangan komunitas.',                                featured: false },
]

const ITEMS_PER_PAGE = 6

export default function BeritaClient() {
  const [activeCat, setActiveCat] = useState('Semua')
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    let result = articles
    if (activeCat !== 'Semua') result = result.filter((a) => a.cat === activeCat)
    if (query.trim()) {
      const q = query.toLowerCase()
      result = result.filter((a) => a.title.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q))
    }
    return result
  }, [activeCat, query])

  const featured = activeCat === 'Semua' && !query ? articles.filter((a) => a.featured) : []
  const rest = filtered.filter((a) => !a.featured || activeCat !== 'Semua' || query)
  const paginated = rest.slice(0, page * ITEMS_PER_PAGE)
  const hasMore = paginated.length < rest.length

  const handleCatChange = (cat: string) => {
    setActiveCat(cat)
    setPage(1)
  }

  const handleSearch = (val: string) => {
    setQuery(val)
    setPage(1)
  }

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
                onClick={() => handleCatChange(c)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeCat === c
                    ? 'bg-primary text-white shadow-md'
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
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Cari berita..."
              className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-border focus:outline-none focus:border-primary-mid"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {query && (
              <button onClick={() => handleSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink transition-colors text-xs">✕</button>
            )}
          </div>
        </div>
      </section>

      <section className="section bg-bg">
        <div className="container">

          {/* Featured — only shown when no filter/search active */}
          {featured.length > 0 && (
            <>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-border" />
                <span className="text-muted text-xs font-bold uppercase tracking-wider">Featured</span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {featured.map((a, i) => (
                  <AnimateOnScroll key={i} delay={i * 100}>
                    <article className="card-article group">
                      <div className="aspect-[16/9] relative overflow-hidden">
                        <Image src={`https://picsum.photos/seed/${a.seed}/800/450`} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                        <span className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">{a.cat}</span>
                      </div>
                      <div className="p-6">
                        <div className="text-muted text-xs mb-2">{a.date}</div>
                        <h3 className="text-lg mb-2 group-hover:text-primary-mid transition-colors">{a.title}</h3>
                        <p className="text-xs leading-relaxed mb-4">{a.desc}</p>
                        <Link href="/berita" className="text-accent font-semibold text-sm hover:text-primary transition-colors">Baca Selengkapnya →</Link>
                      </div>
                    </article>
                  </AnimateOnScroll>
                ))}
              </div>
            </>
          )}

          {/* Result info when filtered */}
          {(activeCat !== 'Semua' || query) && (
            <div className="mb-6 flex items-center gap-3">
              <p className="text-sm text-muted">
                {filtered.length > 0
                  ? <><span className="font-bold text-ink">{filtered.length}</span> artikel ditemukan</>
                  : 'Tidak ada artikel yang cocok'}
                {query && <> untuk &ldquo;<span className="text-accent font-semibold">{query}</span>&rdquo;</>}
                {activeCat !== 'Semua' && <> dalam kategori <span className="text-accent font-semibold">{activeCat}</span></>}
              </p>
              <button onClick={() => { handleCatChange('Semua'); handleSearch('') }} className="text-xs text-muted hover:text-primary transition-colors underline">
                Reset filter
              </button>
            </div>
          )}

          {/* Articles grid */}
          {filtered.length > 0 ? (
            <>
              {featured.length === 0 && (
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-muted text-xs font-bold uppercase tracking-wider">Semua Berita</span>
                  <div className="h-px flex-1 bg-border" />
                </div>
              )}
              {featured.length > 0 && rest.length > 0 && (
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-muted text-xs font-bold uppercase tracking-wider">Semua Berita</span>
                  <div className="h-px flex-1 bg-border" />
                </div>
              )}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {paginated.map((a, i) => (
                  <AnimateOnScroll key={`${activeCat}-${query}-${i}`} delay={(i % 3) * 80}>
                    <article className="card-article group">
                      <div className="aspect-[3/2] relative overflow-hidden">
                        <Image src={`https://picsum.photos/seed/${a.seed}/600/400`} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[0.65rem] bg-accent-pale text-accent font-bold px-2.5 py-0.5 rounded-full">{a.cat}</span>
                          <span className="text-muted text-xs">{a.date}</span>
                        </div>
                        <h3 className="text-[0.95rem] mb-2">{a.title}</h3>
                        <p className="text-xs leading-relaxed mb-3">{a.desc}</p>
                        <Link href="/berita" className="text-accent font-semibold text-xs hover:text-primary transition-colors">Baca →</Link>
                      </div>
                    </article>
                  </AnimateOnScroll>
                ))}
              </div>

              {/* Load More */}
              {hasMore && (
                <div className="text-center mt-10">
                  <button
                    onClick={() => setPage((p) => p + 1)}
                    className="btn-outline-green"
                  >
                    Muat Lebih Banyak ({rest.length - paginated.length} tersisa)
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-muted text-sm mb-4">Tidak ada berita yang cocok dengan pencarian Anda.</p>
              <button onClick={() => { handleCatChange('Semua'); handleSearch('') }} className="btn-outline-green text-sm">
                Lihat Semua Berita
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

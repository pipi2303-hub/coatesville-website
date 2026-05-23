import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Olahraga Bersama',
  description: 'Program olahraga komunitas RW 44 Coatesville — senam, basket, voli, tenis meja, golf, dan lainnya.',
}

const sports = [
  { icon: '🏃', title: 'Jalan Sehat Pagi', desc: 'Aktivitas jalan santai setiap Minggu pagi mengelilingi kawasan Coatesville bersama seluruh warga dan keluarga.', jadwal: 'Minggu, 06.00 WIB', lokasi: 'Gerbang Utama Coatesville', peserta: 'Semua Usia' },
  { icon: '🏀', title: 'Mini Basket', desc: 'Pertandingan dan latihan basket mingguan untuk warga yang gemar olahraga bola basket di lapangan multifungsi.', jadwal: 'Sabtu, 16.00 WIB', lokasi: 'Lapangan Olahraga RW 44', peserta: 'Remaja & Dewasa' },
  { icon: '🏐', title: 'Voli', desc: 'Tim voli komunitas RW 44 yang aktif berlatih dan kerap mengikuti turnamen antar cluster kawasan Kota Wisata.', jadwal: 'Selasa & Kamis, 16.00 WIB', lokasi: 'Lapangan Olahraga RW 44', peserta: 'Dewasa' },
  { icon: '🏓', title: 'Tenis Meja', desc: 'Fasilitas meja ping-pong tersedia di area Gedung Serba Guna untuk latihan dan pertandingan persahabatan warga.', jadwal: 'Senin–Sabtu, 08.00–20.00 WIB', lokasi: 'Gedung Serba Guna', peserta: 'Semua Usia' },
  { icon: '🤸', title: 'Senam', desc: 'Senam aerobik dan senam kesehatan bersama instruktur terlatih — program favorit warga terutama ibu-ibu dan lansia.', jadwal: 'Rabu & Jumat, 06.30 WIB', lokasi: 'Area Taman Komunitas', peserta: 'Semua Usia' },
  { icon: '⛳', title: 'Golf', desc: 'Kelompok golf warga RW 44 yang aktif bermain di golf course terdekat dengan sesi gathering bulanan.', jadwal: 'Sabtu, 06.00 WIB (Gathering)', lokasi: 'Golf Course Kota Wisata', peserta: 'Dewasa' },
  { icon: '🎯', title: 'Menembak', desc: 'Komunitas menembak olahraga yang berlatih di shooting range resmi dengan panduan instruktur bersertifikat.', jadwal: 'Minggu, 08.00 WIB (1x/bulan)', lokasi: 'Shooting Range Terdekat', peserta: 'Dewasa (17+)' },
  { icon: '🥋', title: 'Bela Diri', desc: 'Program bela diri (Taekwondo & Karate) untuk anak-anak dan remaja warga RW 44 dengan instruktur profesional.', jadwal: 'Selasa & Kamis, 16.00 WIB', lokasi: 'Gedung Serba Guna', peserta: 'Anak & Remaja' },
  { icon: '📚', title: 'Edukasi Olahraga', desc: 'Seminar dan workshop tentang kesehatan olahraga, nutrisi atlet, dan pencegahan cedera untuk warga.', jadwal: 'Bulanan (Jadwal Menyesuaikan)', lokasi: 'Gedung Serba Guna', peserta: 'Semua Usia' },
]

const achievements = [
  { icon: '🥇', title: 'Juara 1 Voli', desc: 'Turnamen Antar Cluster Kota Wisata 2025', year: '2025' },
  { icon: '🥈', title: 'Runner-up Basket', desc: 'Kompetisi Mini Basket Wilayah Cibubur', year: '2025' },
  { icon: '🏆', title: 'Tim Senam Terbaik', desc: 'Festival Olahraga Warga Kec. Gunung Putri', year: '2024' },
]

export default function OlahragaPage() {
  return (
    <>
      <PageHero
        tag="Kegiatan"
        title="Olahraga Bersama RW 44"
        subtitle="9 cabang olahraga aktif untuk mendukung gaya hidup sehat dan mempererat kebersamaan warga Coatesville."
        breadcrumb={[{ label: 'Home' }, { label: 'Kegiatan' }, { label: 'Olahraga Bersama' }]}
      />

      {/* Stats */}
      <section className="bg-white border-b border-border py-6">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border text-center">
            {[
              { val: '9', suf: ' Cabang', label: 'Olahraga Aktif' },
              { val: '200+', suf: '', label: 'Peserta Aktif' },
              { val: '3', suf: '×/Minggu', label: 'Sesi Rata-rata' },
              { val: '3', suf: ' Prestasi', label: 'Diraih 2024–2025' },
            ].map((s, i) => (
              <div key={i} className="py-6 px-4">
                <div className="text-2xl font-serif font-bold text-primary">{s.val}<span className="text-accent text-base">{s.suf}</span></div>
                <div className="text-xs text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="section bg-bg">
        <div className="container">
          <SectionHeader tag="Program Olahraga" title="9 Cabang Olahraga Aktif" subtitle="Dari yang ringan hingga kompetitif — ada untuk semua usia dan tingkat kebugaran." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sports.map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className="bg-white rounded-2xl p-6 shadow-card hover:-translate-y-1 hover:shadow-card-lg transition-all duration-300">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-base mb-2">{s.title}</h3>
                  <p className="text-xs leading-relaxed mb-4">{s.desc}</p>
                  <div className="space-y-1.5 border-t border-border pt-4">
                    <div className="flex items-start gap-2 text-xs"><span className="text-accent font-semibold w-16 flex-shrink-0">Jadwal</span><span className="text-muted">{s.jadwal}</span></div>
                    <div className="flex items-start gap-2 text-xs"><span className="text-accent font-semibold w-16 flex-shrink-0">Lokasi</span><span className="text-muted">{s.lokasi}</span></div>
                    <div className="flex items-start gap-2 text-xs"><span className="text-accent font-semibold w-16 flex-shrink-0">Peserta</span><span className="text-muted">{s.peserta}</span></div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Prestasi */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader tag="Prestasi" title="Pencapaian Tim Olahraga RW 44" />
          <div className="grid md:grid-cols-3 gap-5">
            {achievements.map((a, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="bg-bg rounded-2xl p-7 shadow-card text-center">
                  <div className="text-5xl mb-4">{a.icon}</div>
                  <div className="text-xs font-bold text-accent uppercase tracking-wider mb-1">{a.year}</div>
                  <h3 className="text-lg mb-2">{a.title}</h3>
                  <p className="text-xs">{a.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-bg">
        <div className="container">
          <SectionHeader tag="Galeri" title="Momen Olahraga Bersama" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['olo-g1','olo-g2','olo-g3','olo-g4','olo-g5','olo-g6','olo-g7','olo-g8'].map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 50} className={`aspect-square relative rounded-xl overflow-hidden ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
                <Image src={`https://picsum.photos/seed/${s}/600/600`} alt="Olahraga RW 44" fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cta-gradient py-16 text-center">
        <div className="container">
          <h2 className="text-white mb-4">Bergabung dengan Tim Olahraga RW 44</h2>
          <p className="text-white/65 mb-7 max-w-md mx-auto text-sm">Daftarkan diri Anda dan mulai perjalanan hidup sehat bersama komunitas Coatesville.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/kontak" className="btn-primary">Daftar Sekarang</Link>
            <Link href="/kegiatan" className="btn-outline">Kegiatan Lainnya</Link>
          </div>
        </div>
      </section>
    </>
  )
}

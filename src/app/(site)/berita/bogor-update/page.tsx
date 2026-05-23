import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Bogor Update',
  description: 'Update dan informasi terkini dari wilayah Bogor sekitar — berita yang relevan bagi warga RW 44 Coatesville.',
}

const berita = [
  { seed: 'bgr-1', cat: 'Transportasi', tgl: '20 Mei 2026', title: 'KRL Bogor–Jakarta Frekuensi Ditambah Mulai Juni 2026', excerpt: 'PT KAI Commuter menambah frekuensi perjalanan KRL Bogor–Jakarta dari 120 menjadi 150 kereta per hari, mengurangi kepadatan di jam sibuk.' },
  { seed: 'bgr-2', cat: 'Tol', tgl: '16 Mei 2026', title: 'Tol Jagorawi Seksi Ciawi–Sukabumi Rampung Akhir 2026', excerpt: 'Pembangunan tol Jagorawi seksi Ciawi–Sukabumi dipercepat dan diperkirakan rampung pada Desember 2026, memangkas waktu tempuh Bogor ke Sukabumi.' },
  { seed: 'bgr-3', cat: 'Wisata', tgl: '12 Mei 2026', title: 'Kebun Raya Bogor Buka Zona Edukasi Baru', excerpt: 'Kebun Raya Bogor resmi membuka zona edukasi sains tumbuhan seluas 2 hektar yang dilengkapi augmented reality untuk pengunjung keluarga.' },
  { seed: 'bgr-4', cat: 'Ekonomi', tgl: '9 Mei 2026', title: 'Pasar Digital Bogor Resmi Beroperasi', excerpt: 'Pemkot Bogor meluncurkan pasar digital Bogor yang memungkinkan pedagang tradisional berjualan secara online dan menerima pembayaran digital.' },
  { seed: 'bgr-5', cat: 'Lingkungan', tgl: '6 Mei 2026', title: 'Normalisasi Sungai Ciliwung Selesai di Segmen Bogor', excerpt: 'Pekerjaan normalisasi Sungai Ciliwung di segmen Kota Bogor sepanjang 12 km telah selesai, mengurangi risiko banjir kiriman ke Jakarta.' },
  { seed: 'bgr-6', cat: 'Pendidikan', tgl: '2 Mei 2026', title: 'IPB University Buka Program Vokasi Pertanian Presisi', excerpt: 'IPB University membuka program vokasi baru pertanian presisi berbasis teknologi IoT dan drone, menerima 200 mahasiswa angkatan pertama.' },
]

const catColor: Record<string, string> = {
  Transportasi: 'bg-blue-100 text-blue-700',
  Tol: 'bg-slate-100 text-slate-700',
  Wisata: 'bg-teal-100 text-teal-700',
  Ekonomi: 'bg-yellow-100 text-yellow-700',
  Lingkungan: 'bg-green-100 text-green-700',
  Pendidikan: 'bg-purple-100 text-purple-700',
}

export default function BogorUpdatePage() {
  return (
    <>
      <PageHero
        tag="Berita & Info"
        title="Bogor Update"
        subtitle="Berita dan pembaruan terkini dari wilayah Bogor dan sekitarnya yang berdampak bagi warga RW 44 Coatesville."
        breadcrumb={[{ label: 'Home' }, { label: 'Berita' }, { label: 'Bogor Update' }]}
      />

      <section className="section bg-white">
        <div className="container">
          <SectionHeader tag="Update Terkini" title="Berita Terbaru dari Bogor" subtitle="Perkembangan wilayah Bogor dan sekitar yang relevan bagi mobilitas dan keseharian warga RW 44." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {berita.map((b, i) => (
              <AnimateOnScroll key={i} delay={i * 70}>
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

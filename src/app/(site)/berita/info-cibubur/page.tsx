import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Info Cibubur',
  description: 'Informasi terkini seputar wilayah Cibubur — pembangunan, infrastruktur, dan berita lingkungan sekitar RW 44.',
}

const berita = [
  { seed: 'cib-1', cat: 'Infrastruktur', tgl: '18 Mei 2026', title: 'Pengembangan Jalan Lingkar Cibubur Tahap II Dimulai', excerpt: 'Dinas PUPR Jakarta Timur resmi memulai pekerjaan pengembangan jalan lingkar Cibubur tahap kedua yang akan memperlancar akses dari dan ke kawasan perumahan.' },
  { seed: 'cib-2', cat: 'Kesehatan', tgl: '14 Mei 2026', title: 'Puskesmas Cibubur Tambah Layanan Spesialis', excerpt: 'Puskesmas Cibubur kini dilengkapi layanan dokter spesialis anak dan gigi setiap Selasa dan Kamis, meningkatkan akses kesehatan warga Cibubur.' },
  { seed: 'cib-3', cat: 'Pendidikan', tgl: '10 Mei 2026', title: 'PPDB 2026 Dimulai — Kuota SD dan SMP Cibubur', excerpt: 'Pendaftaran Penerimaan Peserta Didik Baru (PPDB) tahun ajaran 2026/2027 resmi dibuka untuk tingkat SD dan SMP di wilayah Cibubur.' },
  { seed: 'cib-4', cat: 'Lingkungan', tgl: '8 Mei 2026', title: 'Program Penghijauan Kali Cibubur Dimulai', excerpt: 'Kelurahan Cibubur bersama komunitas warga memulai program penghijauan bantaran Kali Cibubur dengan penanaman 500 pohon bakau dan trembesi.' },
  { seed: 'cib-5', cat: 'Keamanan', tgl: '5 Mei 2026', title: 'Polsek Ciracas Intensifkan Patroli Malam Cibubur', excerpt: 'Menyikapi beberapa insiden keamanan di kawasan Cibubur, Polsek Ciracas meningkatkan intensitas patroli malam mulai pukul 22.00 hingga 05.00 WIB.' },
  { seed: 'cib-6', cat: 'Pemerintahan', tgl: '1 Mei 2026', title: 'Musrenbang Kelurahan Cibubur Prioritaskan Drainase', excerpt: 'Musyawarah Rencana Pembangunan (Musrenbang) Kelurahan Cibubur 2026 menetapkan perbaikan sistem drainase sebagai prioritas utama tahun anggaran 2027.' },
]

const catColor: Record<string, string> = {
  Infrastruktur: 'bg-blue-100 text-blue-700',
  Kesehatan: 'bg-green-100 text-green-700',
  Pendidikan: 'bg-yellow-100 text-yellow-700',
  Lingkungan: 'bg-emerald-100 text-emerald-700',
  Keamanan: 'bg-red-100 text-red-700',
  Pemerintahan: 'bg-purple-100 text-purple-700',
}

export default function InfoCibuburPage() {
  return (
    <>
      <PageHero
        tag="Berita & Info"
        title="Info Cibubur"
        subtitle="Informasi dan berita terkini seputar wilayah Cibubur yang relevan bagi warga RW 44 Coatesville."
        breadcrumb={[{ label: 'Home' }, { label: 'Berita' }, { label: 'Info Cibubur' }]}
      />

      <section className="section bg-white">
        <div className="container">
          <SectionHeader tag="Berita Terbaru" title="Kabar Terkini dari Cibubur" subtitle="Informasi aktual seputar wilayah Cibubur yang berdampak pada kehidupan warga RW 44 Coatesville." />
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

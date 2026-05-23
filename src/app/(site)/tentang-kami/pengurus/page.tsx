import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = { title: 'Pengurus RW 44' }

const pengurus = [
  { jabatan: 'Ketua RW 44', nama: 'Segera Tersedia', bidang: 'Pimpinan', seed: 'pengurus-1', level: 'pimpinan' },
  { jabatan: 'Wakil Ketua', nama: 'Segera Tersedia', bidang: 'Pimpinan', seed: 'pengurus-2', level: 'pimpinan' },
  { jabatan: 'Sekretaris I', nama: 'Segera Tersedia', bidang: 'Sekretariat', seed: 'pengurus-3', level: 'inti' },
  { jabatan: 'Sekretaris II', nama: 'Segera Tersedia', bidang: 'Sekretariat', seed: 'pengurus-4', level: 'inti' },
  { jabatan: 'Bendahara I', nama: 'Segera Tersedia', bidang: 'Keuangan', seed: 'pengurus-5', level: 'inti' },
  { jabatan: 'Bendahara II', nama: 'Segera Tersedia', bidang: 'Keuangan', seed: 'pengurus-6', level: 'inti' },
  { jabatan: 'Ketua Bidang Keamanan', nama: 'Segera Tersedia', bidang: 'Keamanan', seed: 'pengurus-7', level: 'bidang' },
  { jabatan: 'Ketua Bidang Kebersihan', nama: 'Segera Tersedia', bidang: 'Lingkungan', seed: 'pengurus-8', level: 'bidang' },
  { jabatan: 'Ketua Bidang Kesehatan', nama: 'Segera Tersedia', bidang: 'Kesehatan', seed: 'pengurus-9', level: 'bidang' },
  { jabatan: 'Ketua Bidang Olahraga', nama: 'Segera Tersedia', bidang: 'Olahraga', seed: 'pengurus-10', level: 'bidang' },
  { jabatan: 'Ketua Bidang Sosial', nama: 'Segera Tersedia', bidang: 'Sosial', seed: 'pengurus-11', level: 'bidang' },
  { jabatan: 'Ketua Bidang Humas', nama: 'Segera Tersedia', bidang: 'Humas', seed: 'pengurus-12', level: 'bidang' },
]

const levelColor: Record<string, string> = {
  pimpinan: 'bg-primary text-white',
  inti: 'bg-accent text-white',
  bidang: 'bg-accent-pale text-accent',
}

export default function PengurusPage() {
  return (
    <>
      <PageHero
        tag="Tentang Kami"
        title="Pengurus RW 44 Coatesville"
        subtitle="Struktur kepengurusan RW 44 Coatesville periode 2024–2026 yang berkomitmen melayani seluruh warga."
        breadcrumb={[{ label: 'Home' }, { label: 'Tentang Kami' }, { label: 'Pengurus RW' }]}
      />

      <section className="section bg-bg">
        <div className="container">
          {/* Pimpinan */}
          <SectionHeader tag="Pimpinan" title="Ketua & Wakil Ketua RW 44" />
          <div className="flex flex-wrap justify-center gap-6 mb-14">
            {pengurus.filter(p => p.level === 'pimpinan').map((p, i) => (
              <AnimateOnScroll key={i} delay={i * 100} className="w-56">
                <div className="bg-white rounded-2xl p-7 shadow-card-lg text-center hover:-translate-y-1 transition-all duration-300">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-primary/20">
                    <Image src={`https://picsum.photos/seed/${p.seed}/200/200`} alt={p.nama} width={96} height={96} className="object-cover" />
                  </div>
                  <span className={`text-[0.6rem] font-bold px-3 py-1 rounded-full ${levelColor[p.level]}`}>{p.jabatan}</span>
                  <h4 className="text-base mt-3">{p.nama}</h4>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Inti */}
          <SectionHeader tag="Sekretariat & Keuangan" title="Pengurus Inti" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
            {pengurus.filter(p => p.level === 'inti').map((p, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl p-5 shadow-card text-center hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 ring-2 ring-accent/30">
                    <Image src={`https://picsum.photos/seed/${p.seed}/150/150`} alt={p.nama} width={64} height={64} className="object-cover" />
                  </div>
                  <span className={`text-[0.58rem] font-bold px-2.5 py-0.5 rounded-full ${levelColor[p.level]}`}>{p.jabatan}</span>
                  <h4 className="text-sm mt-2">{p.nama}</h4>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Bidang */}
          <SectionHeader tag="Koordinator Bidang" title="Ketua Bidang" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {pengurus.filter(p => p.level === 'bidang').map((p, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className="bg-white rounded-xl p-4 shadow-card text-center hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full overflow-hidden mx-auto mb-2 ring-2 ring-border">
                    <Image src={`https://picsum.photos/seed/${p.seed}/120/120`} alt={p.nama} width={48} height={48} className="object-cover" />
                  </div>
                  <div className="text-[0.58rem] font-bold text-accent uppercase tracking-wide mb-1">{p.bidang}</div>
                  <div className="text-[0.7rem] font-semibold text-primary leading-tight">{p.jabatan.replace('Ketua Bidang ', '')}</div>
                  <div className="text-[0.65rem] text-muted mt-1">{p.nama}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/tentang-kami/sk-pengurus" className="btn-outline-green">↓ Unduh SK Pengurus</Link>
          </div>
        </div>
      </section>
    </>
  )
}

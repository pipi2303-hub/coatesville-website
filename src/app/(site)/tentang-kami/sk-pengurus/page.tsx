import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = { title: 'Surat Keputusan Pengurus RW 44' }

const docs = [
  { title: 'SK Pengangkatan Pengurus RW 44 Periode 2024–2026', date: '1 Jan 2024', no: 'SK/RW44/001/2024', size: '0.8 MB' },
  { title: 'SK Pembentukan Posyandu Sehat Ceria RW 44', date: '15 Jan 2024', no: 'SK/RW44/002/2024', size: '0.6 MB' },
  { title: 'SK Pengangkatan Kader Posyandu Sehat Ceria', date: '20 Jan 2024', no: 'SK/RW44/003/2024', size: '0.5 MB' },
]

export default function SKPengurusPage() {
  return (
    <>
      <PageHero
        tag="Tentang Kami"
        title="Surat Keputusan Pengurus"
        subtitle="Dokumen resmi pengangkatan pengurus RW 44 Coatesville sebagai dasar hukum kepengurusan komunitas."
        breadcrumb={[{ label: 'Home' }, { label: 'Tentang Kami' }, { label: 'Surat Keputusan' }]}
      />
      <section className="section bg-bg">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {docs.map((d, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="flex items-center gap-5 bg-white rounded-2xl p-6 shadow-card">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">📜</div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-primary">{d.title}</h4>
                    <p className="text-xs text-muted mt-1">No. {d.no} &bull; {d.date} &bull; {d.size}</p>
                  </div>
                  <button className="btn-outline-green text-xs px-4 py-2 rounded-full flex-shrink-0">↓ Unduh</button>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/tentang-kami" className="btn-outline-green">← Kembali ke Tentang Kami</Link>
          </div>
        </div>
      </section>
    </>
  )
}

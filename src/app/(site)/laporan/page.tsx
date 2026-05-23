import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Laporan',
  description: 'Laporan umum dan keuangan RW 44 Coatesville — transparansi komunitas untuk warga.',
}

const reports = [
  { period: 'Triwulan I 2026', type: 'Laporan Keuangan', date: '28 Apr 2026', size: '1.2 MB' },
  { period: 'Triwulan IV 2025', type: 'Laporan Keuangan', date: '30 Jan 2026', size: '1.1 MB' },
  { period: 'Triwulan III 2025', type: 'Laporan Keuangan', date: '28 Okt 2025', size: '0.9 MB' },
  { period: 'Tahunan 2025', type: 'Laporan Umum', date: '15 Feb 2026', size: '3.4 MB' },
]

export default function LaporanPage() {
  return (
    <>
      <PageHero
        tag="Laporan & Transparansi"
        title="Laporan Kegiatan & Keuangan"
        subtitle="Keterbukaan informasi keuangan dan kegiatan RW 44 Coatesville untuk seluruh warga."
        breadcrumb={[{ label: 'Home' }, { label: 'Laporan' }]}
      />

      <section className="section bg-bg">
        <div className="container">
          <div className="grid grid-cols-3 gap-5 mb-12">
            {[
              { val: '100%', label: 'Transparansi', icon: '✅' },
              { val: '4', label: 'Laporan Tersedia', icon: '📋' },
              { val: 'Rutin', label: 'Pembaruan Berkala', icon: '🔄' },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-6 shadow-card text-center">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-2xl font-serif font-bold text-primary">{s.val}</div>
                <div className="text-xs text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <SectionHeader tag="Laporan" title="Daftar Laporan yang Tersedia" />

          <div className="space-y-3">
            {reports.map((r, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className="flex items-center justify-between bg-white rounded-xl p-5 shadow-card gap-4 flex-wrap">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white text-lg">
                      📄
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary">{r.period} — {r.type}</h4>
                      <p className="text-xs text-muted">{r.date} &bull; {r.size}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs bg-green-50 text-green-700 font-bold px-3 py-1 rounded-full">Tersedia</span>
                    <button className="btn-outline-green text-xs px-4 py-2 rounded-full">↓ Unduh PDF</button>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-sm text-muted mb-4">Tidak menemukan laporan yang dicari?</p>
            <Link href="/kontak" className="btn-outline-green">Hubungi Pengurus RW</Link>
          </div>
        </div>
      </section>
    </>
  )
}

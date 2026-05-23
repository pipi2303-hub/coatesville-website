import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Laporan Umum RW 44',
  description: 'Laporan kegiatan dan program umum RW 44 Coatesville — transparansi dan akuntabilitas pengurus.',
}

const laporan = [
  {
    periode: 'Q1 2026',
    title: 'Laporan Kegiatan Triwulan I 2026',
    tgl: '5 Apr 2026',
    status: 'Final',
    highlight: ['Pelaksanaan 14 kegiatan rutin', 'Renovasi pos keamanan selesai', 'Perekrutan 3 kader posyandu baru', 'Peningkatan cakupan layanan posyandu 12%'],
    size: '1.2 MB',
  },
  {
    periode: 'Q4 2025',
    title: 'Laporan Kegiatan Triwulan IV 2025',
    tgl: '8 Jan 2026',
    status: 'Final',
    highlight: ['Perayaan HUT RI ke-80 diikuti 320 warga', '12 kegiatan rohani terselenggara', 'Perbaikan 6 titik lampu jalan', 'Distribusi bantuan sosial 45 KK'],
    size: '1.4 MB',
  },
  {
    periode: 'Q3 2025',
    title: 'Laporan Kegiatan Triwulan III 2025',
    tgl: '4 Okt 2025',
    status: 'Final',
    highlight: ['Pelatihan tanggap darurat 38 peserta', 'Program bank sampah berjalan aktif', 'Penambahan 4 unit CCTV komunal', 'Posyandu melayani 156 kunjungan'],
    size: '1.1 MB',
  },
  {
    periode: 'Q2 2025',
    title: 'Laporan Kegiatan Triwulan II 2025',
    tgl: '3 Jul 2025',
    status: 'Final',
    highlight: ['Gotong royong besar diikuti 180 warga', 'Perbaikan drainase blok C-D selesai', 'Launching portal website komunitas', 'Musyawarah warga RW 44 dihadiri 95 KK'],
    size: '0.9 MB',
  },
  {
    periode: 'Tahunan 2024',
    title: 'Laporan Tahunan Kepengurusan 2024',
    tgl: '15 Jan 2025',
    status: 'Final',
    highlight: ['Total 52 kegiatan terselenggara', '94% warga puas dengan layanan pengurus', 'Infrastruktur: 8 item diperbaiki/diperbarui', 'Posyandu aktif 12 bulan berturut-turut'],
    size: '3.5 MB',
  },
]

const statusColor: Record<string, string> = {
  Final: 'bg-green-100 text-green-700',
  Draft: 'bg-yellow-100 text-yellow-700',
  Review: 'bg-blue-100 text-blue-700',
}

export default function LaporanUmumPage() {
  return (
    <>
      <PageHero
        tag="Laporan"
        title="Laporan Kegiatan Umum"
        subtitle="Laporan kegiatan dan program RW 44 Coatesville sebagai wujud transparansi dan akuntabilitas pengurus kepada warga."
        breadcrumb={[{ label: 'Home' }, { label: 'Laporan' }, { label: 'Laporan Umum' }]}
      />

      {/* Ringkasan */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <AnimateOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { val: '52', label: 'Kegiatan 2024' },
                { val: '5', label: 'Laporan Tersedia' },
                { val: '94%', label: 'Kepuasan Warga' },
                { val: '100%', label: 'On Schedule' },
              ].map((s, i) => (
                <div key={i} className="bg-bg rounded-xl p-4 text-center">
                  <p className="text-2xl font-serif font-bold text-primary mb-1">{s.val}</p>
                  <p className="text-[0.6rem] text-muted uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Daftar laporan */}
      <section className="section bg-bg">
        <div className="container max-w-4xl">
          <SectionHeader tag="Arsip Laporan" title="Daftar Laporan Kegiatan" />
          <div className="space-y-5">
            {laporan.map((l, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-lg transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-accent bg-accent/10 px-2.5 py-0.5 rounded-full">{l.periode}</span>
                        <span className={`text-[0.6rem] font-bold px-2.5 py-0.5 rounded-full ${statusColor[l.status]}`}>{l.status}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-ink">{l.title}</h4>
                      <p className="text-xs text-muted mt-0.5">Diterbitkan: {l.tgl} &bull; {l.size}</p>
                    </div>
                    <button className="btn-outline-green text-xs px-4 py-2 rounded-full flex-shrink-0">↓ Unduh PDF</button>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-[0.6rem] font-bold text-muted uppercase tracking-wide mb-2">Highlights:</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {l.highlight.map((h, j) => (
                        <div key={j} className="flex gap-2 text-xs text-muted"><span className="text-primary mt-0.5 flex-shrink-0">✓</span>{h}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/laporan" className="btn-outline-green">← Kembali ke Laporan</Link>
          </div>
        </div>
      </section>
    </>
  )
}

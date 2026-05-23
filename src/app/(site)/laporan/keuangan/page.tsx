import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Laporan Keuangan RW 44',
  description: 'Laporan keuangan transparan RW 44 Coatesville — pemasukan, pengeluaran, dan saldo kas.',
}

const summary2025 = [
  { label: 'Total Pemasukan', val: 'Rp 84.600.000', icon: '↑', color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Total Pengeluaran', val: 'Rp 71.200.000', icon: '↓', color: 'text-red-500', bg: 'bg-red-50' },
  { label: 'Saldo Akhir 2025', val: 'Rp 13.400.000', icon: '💰', color: 'text-primary', bg: 'bg-primary/10' },
]

const pemasukan = [
  { sumber: 'Iuran Warga Bulanan', jumlah: 'Rp 48.000.000', persen: 57, cat: 'Iuran' },
  { sumber: 'Dana RT/RW dari Kelurahan', jumlah: 'Rp 18.000.000', persen: 21, cat: 'Pemerintah' },
  { sumber: 'Donasi & Sponsorship', jumlah: 'Rp 12.600.000', persen: 15, cat: 'Donasi' },
  { sumber: 'Pendapatan Fasilitas', jumlah: 'Rp 6.000.000', persen: 7, cat: 'Fasilitas' },
]

const pengeluaran = [
  { pos: 'Keamanan & Ronda', jumlah: 'Rp 18.000.000', persen: 25, cat: 'Operasional' },
  { pos: 'Pemeliharaan Infrastruktur', jumlah: 'Rp 15.200.000', persen: 21, cat: 'Infrastruktur' },
  { pos: 'Posyandu & Kesehatan', jumlah: 'Rp 12.000.000', persen: 17, cat: 'Kesehatan' },
  { pos: 'Kegiatan & Program Sosial', jumlah: 'Rp 10.800.000', persen: 15, cat: 'Program' },
  { pos: 'Kebersihan & Lingkungan', jumlah: 'Rp 8.400.000', persen: 12, cat: 'Lingkungan' },
  { pos: 'Administrasi & Operasional', jumlah: 'Rp 6.800.000', persen: 10, cat: 'Admin' },
]

const laporan = [
  { periode: 'Triwulan I 2026', tgl: '5 Apr 2026', pemasukan: 'Rp 22.400.000', pengeluaran: 'Rp 18.700.000', saldo: 'Rp 17.100.000', status: 'Audited' },
  { periode: 'Triwulan IV 2025', tgl: '8 Jan 2026', pemasukan: 'Rp 23.100.000', pengeluaran: 'Rp 19.500.000', saldo: 'Rp 13.400.000', status: 'Audited' },
  { periode: 'Triwulan III 2025', tgl: '4 Okt 2025', pemasukan: 'Rp 20.500.000', pengeluaran: 'Rp 17.200.000', saldo: 'Rp 9.800.000', status: 'Audited' },
  { periode: 'Triwulan II 2025', tgl: '3 Jul 2025', pemasukan: 'Rp 21.000.000', pengeluaran: 'Rp 16.300.000', saldo: 'Rp 6.500.000', status: 'Audited' },
  { periode: 'Tahunan 2024', tgl: '15 Jan 2025', pemasukan: 'Rp 79.200.000', pengeluaran: 'Rp 67.800.000', saldo: 'Rp 11.400.000', status: 'Audited' },
]

export default function LaporanKeuanganPage() {
  return (
    <>
      <PageHero
        tag="Laporan"
        title="Laporan Keuangan RW 44"
        subtitle="Laporan keuangan transparan RW 44 Coatesville — pemasukan, pengeluaran, dan pengelolaan kas komunitas."
        breadcrumb={[{ label: 'Home' }, { label: 'Laporan' }, { label: 'Keuangan' }]}
      />

      {/* Summary */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <AnimateOnScroll>
            <div className="section-tag mb-3 text-center mx-auto w-fit">Ringkasan 2025</div>
            <h2 className="text-center mb-8">Rekapitulasi Keuangan Tahun 2025</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-3 gap-4 mb-10">
            {summary2025.map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className={`rounded-2xl p-6 text-center ${s.bg}`}>
                  <div className={`text-2xl font-serif font-bold ${s.color} mb-1`}>{s.val}</div>
                  <p className="text-xs text-muted">{s.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Pemasukan & Pengeluaran */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <AnimateOnScroll>
              <h3 className="text-base mb-4 text-primary">Sumber Pemasukan</h3>
              <div className="space-y-3">
                {pemasukan.map((p, i) => (
                  <div key={i} className="bg-bg rounded-xl p-4">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="font-medium text-ink">{p.sumber}</span>
                      <span className="font-bold text-green-600">{p.jumlah}</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-1.5">
                      <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${p.persen}%` }} />
                    </div>
                    <p className="text-[0.6rem] text-muted mt-1">{p.persen}% dari total pemasukan</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h3 className="text-base mb-4 text-primary">Pos Pengeluaran</h3>
              <div className="space-y-3">
                {pengeluaran.map((p, i) => (
                  <div key={i} className="bg-bg rounded-xl p-4">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="font-medium text-ink">{p.pos}</span>
                      <span className="font-bold text-red-500">{p.jumlah}</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-1.5">
                      <div className="bg-red-400 h-1.5 rounded-full" style={{ width: `${p.persen}%` }} />
                    </div>
                    <p className="text-[0.6rem] text-muted mt-1">{p.persen}% dari total pengeluaran</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Arsip laporan */}
      <section className="section bg-bg">
        <div className="container max-w-4xl">
          <SectionHeader tag="Arsip" title="Laporan Keuangan Per Periode" />
          <div className="overflow-hidden rounded-2xl shadow-card">
            <table className="w-full text-xs bg-white">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-semibold">Periode</th>
                  <th className="px-4 py-3 text-left font-semibold hidden md:table-cell">Tanggal</th>
                  <th className="px-4 py-3 text-right font-semibold hidden sm:table-cell">Pemasukan</th>
                  <th className="px-4 py-3 text-right font-semibold hidden sm:table-cell">Pengeluaran</th>
                  <th className="px-4 py-3 text-right font-semibold">Saldo Akhir</th>
                  <th className="px-4 py-3 text-center font-semibold">Unduh</th>
                </tr>
              </thead>
              <tbody>
                {laporan.map((l, i) => (
                  <tr key={i} className={`border-t border-border hover:bg-bg transition-colors ${i % 2 === 0 ? '' : 'bg-bg/50'}`}>
                    <td className="px-4 py-3">
                      <div className="font-semibold text-ink">{l.periode}</div>
                      <div className="text-[0.58rem] text-green-600 font-bold">{l.status}</div>
                    </td>
                    <td className="px-4 py-3 text-muted hidden md:table-cell">{l.tgl}</td>
                    <td className="px-4 py-3 text-right text-green-600 font-medium hidden sm:table-cell">{l.pemasukan}</td>
                    <td className="px-4 py-3 text-right text-red-500 font-medium hidden sm:table-cell">{l.pengeluaran}</td>
                    <td className="px-4 py-3 text-right text-primary font-bold">{l.saldo}</td>
                    <td className="px-4 py-3 text-center">
                      <button className="text-primary hover:underline font-semibold">↓ PDF</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <AnimateOnScroll delay={200}>
            <div className="mt-8 bg-white rounded-2xl p-5 shadow-card flex gap-3 items-start border border-border/50">
              <span className="text-xl flex-shrink-0">🔍</span>
              <p className="text-xs text-muted leading-relaxed">Laporan keuangan RW 44 Coatesville telah diverifikasi oleh tim audit internal. Untuk pertanyaan atau klarifikasi mengenai laporan keuangan, silakan hubungi Bendahara RW 44 melalui kontak resmi.</p>
            </div>
          </AnimateOnScroll>

          <div className="text-center mt-8">
            <Link href="/laporan" className="btn-outline-green">← Kembali ke Laporan</Link>
          </div>
        </div>
      </section>
    </>
  )
}

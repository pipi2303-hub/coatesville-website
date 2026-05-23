import type { Metadata } from 'next'
import AdminTopbar from '@/components/admin/AdminTopbar'

export const metadata: Metadata = { title: 'Kelola Laporan' }

const reports = [
  { id: 1, title: 'Laporan Keuangan Q1 2026', tipe: 'Keuangan', periode: 'Jan–Mar 2026', status: 'Published', tgl: '5 Apr 2026', size: '1.2 MB' },
  { id: 2, title: 'Laporan Kegiatan Q1 2026', tipe: 'Kegiatan', periode: 'Jan–Mar 2026', status: 'Published', tgl: '5 Apr 2026', size: '0.9 MB' },
  { id: 3, title: 'Laporan Keuangan Q4 2025', tipe: 'Keuangan', periode: 'Okt–Des 2025', status: 'Published', tgl: '8 Jan 2026', size: '1.4 MB' },
  { id: 4, title: 'Laporan Kegiatan Q4 2025', tipe: 'Kegiatan', periode: 'Okt–Des 2025', status: 'Published', tgl: '8 Jan 2026', size: '1.1 MB' },
  { id: 5, title: 'Laporan Tahunan 2025', tipe: 'Tahunan', periode: '2025', status: 'Draft', tgl: '22 Mei 2026', size: '—' },
]

const statusColor: Record<string, string> = {
  Published: 'bg-green-100 text-green-700',
  Draft: 'bg-gray-100 text-gray-600',
}

export default function AdminLaporanPage() {
  return (
    <>
      <AdminTopbar title="Kelola Laporan" />
      <div className="p-6 space-y-5">

        <div className="flex justify-end">
          <button className="bg-primary text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">📊 Upload Laporan</button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[{ label: 'Total Laporan', val: '12' }, { label: 'Published', val: '10' }, { label: 'Draft', val: '2' }].map((s, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-sm text-center">
              <p className="text-2xl font-bold text-ink">{s.val}</p>
              <p className="text-[0.65rem] text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#F0F2F5]">
                  <th className="px-4 py-3 text-left text-muted font-semibold">Judul</th>
                  <th className="px-4 py-3 text-left text-muted font-semibold hidden md:table-cell">Tipe</th>
                  <th className="px-4 py-3 text-left text-muted font-semibold hidden lg:table-cell">Periode</th>
                  <th className="px-4 py-3 text-left text-muted font-semibold">Status</th>
                  <th className="px-4 py-3 text-left text-muted font-semibold hidden lg:table-cell">Ukuran</th>
                  <th className="px-4 py-3 text-center text-muted font-semibold">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((r) => (
                  <tr key={r.id} className="border-t border-border/50 hover:bg-[#F8F5EE]/50">
                    <td className="px-4 py-3">
                      <p className="font-medium text-ink">{r.title}</p>
                      <p className="text-muted">{r.tgl}</p>
                    </td>
                    <td className="px-4 py-3 text-muted hidden md:table-cell">{r.tipe}</td>
                    <td className="px-4 py-3 text-muted hidden lg:table-cell">{r.periode}</td>
                    <td className="px-4 py-3">
                      <span className={`text-[0.6rem] font-bold px-2 py-0.5 rounded-full ${statusColor[r.status]}`}>{r.status}</span>
                    </td>
                    <td className="px-4 py-3 text-muted hidden lg:table-cell">{r.size}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-2">
                        <button className="text-primary hover:underline font-semibold">Edit</button>
                        <span className="text-border">|</span>
                        <button className="text-red-500 hover:underline font-semibold">Hapus</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upload form */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h3 className="text-sm font-semibold text-ink mb-4">Upload Laporan Baru</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Judul Laporan *</label>
              <input className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary" placeholder="Judul laporan..." />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Tipe *</label>
              <select className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary">
                <option>Keuangan</option>
                <option>Kegiatan</option>
                <option>Tahunan</option>
                <option>Lainnya</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Periode *</label>
              <input className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary" placeholder="Mis: Q1 2026" />
            </div>
          </div>
          <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer mb-4">
            <p className="text-3xl mb-2">📄</p>
            <p className="text-sm font-medium text-ink mb-1">Klik untuk memilih file PDF</p>
            <p className="text-xs text-muted">PDF maks 20MB</p>
          </div>
          <div className="flex gap-3 justify-end">
            <button className="border border-border text-muted text-xs font-semibold px-4 py-2 rounded-lg hover:bg-bg">Simpan Draft</button>
            <button className="bg-primary text-white text-xs font-semibold px-5 py-2 rounded-lg hover:bg-primary/90">Terbitkan</button>
          </div>
        </div>

      </div>
    </>
  )
}

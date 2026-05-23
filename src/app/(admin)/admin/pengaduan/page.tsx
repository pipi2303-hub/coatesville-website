import type { Metadata } from 'next'
import AdminTopbar from '@/components/admin/AdminTopbar'

export const metadata: Metadata = { title: 'Kelola Pengaduan' }

const tickets = [
  { id: 'TKT-041', warga: 'Blok A-07', isu: 'Lampu jalan padam di gang 3', kat: 'Infrastruktur', prioritas: 'Tinggi', status: 'Proses', tgl: '22 Mei 2026' },
  { id: 'TKT-040', warga: 'Blok C-15', isu: 'Saluran air tersumbat di depan rumah', kat: 'Lingkungan', prioritas: 'Sedang', status: 'Baru', tgl: '21 Mei 2026' },
  { id: 'TKT-039', warga: 'Blok B-03', isu: 'Permintaan penambahan CCTV di blok B', kat: 'Keamanan', prioritas: 'Sedang', status: 'Baru', tgl: '20 Mei 2026' },
  { id: 'TKT-038', warga: 'Blok D-22', isu: 'Jalan berlubang di akses masuk blok D', kat: 'Infrastruktur', prioritas: 'Tinggi', status: 'Selesai', tgl: '18 Mei 2026' },
  { id: 'TKT-037', warga: 'Blok A-14', isu: 'Taman bermain perlu perbaikan ayunan', kat: 'Fasilitas', prioritas: 'Rendah', status: 'Selesai', tgl: '15 Mei 2026' },
  { id: 'TKT-036', warga: 'Blok B-09', isu: 'Parkir liar menghalangi akses garasi', kat: 'Keamanan', prioritas: 'Sedang', status: 'Proses', tgl: '12 Mei 2026' },
]

const statusColor: Record<string, string> = {
  Baru: 'bg-red-100 text-red-600',
  Proses: 'bg-yellow-100 text-yellow-700',
  Selesai: 'bg-green-100 text-green-700',
}
const prioritasColor: Record<string, string> = {
  Tinggi: 'bg-red-100 text-red-600',
  Sedang: 'bg-orange-100 text-orange-600',
  Rendah: 'bg-blue-100 text-blue-600',
}

export default function AdminPengaduanPage() {
  return (
    <>
      <AdminTopbar title="Kelola Pengaduan & Feedback" />
      <div className="p-6 space-y-5">

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Total Pengaduan', val: '41', color: 'text-ink' },
            { label: 'Baru', val: '2', color: 'text-red-600' },
            { label: 'Dalam Proses', val: '5', color: 'text-yellow-600' },
            { label: 'Selesai', val: '34', color: 'text-green-600' },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-sm text-center">
              <p className={`text-2xl font-bold ${s.color}`}>{s.val}</p>
              <p className="text-[0.65rem] text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-border w-52">
            <span className="text-muted text-xs">🔍</span>
            <input placeholder="Cari pengaduan..." className="bg-transparent text-xs outline-none w-full text-ink placeholder:text-muted" />
          </div>
          <select className="bg-white rounded-lg px-3 py-2 text-xs shadow-sm border border-border text-ink outline-none">
            <option>Semua Status</option>
            <option>Baru</option>
            <option>Proses</option>
            <option>Selesai</option>
          </select>
          <select className="bg-white rounded-lg px-3 py-2 text-xs shadow-sm border border-border text-ink outline-none">
            <option>Semua Kategori</option>
            <option>Infrastruktur</option>
            <option>Keamanan</option>
            <option>Lingkungan</option>
            <option>Fasilitas</option>
          </select>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#F0F2F5]">
                  <th className="px-4 py-3 text-left text-muted font-semibold">Tiket</th>
                  <th className="px-4 py-3 text-left text-muted font-semibold">Isu</th>
                  <th className="px-4 py-3 text-left text-muted font-semibold hidden md:table-cell">Kategori</th>
                  <th className="px-4 py-3 text-left text-muted font-semibold hidden lg:table-cell">Prioritas</th>
                  <th className="px-4 py-3 text-left text-muted font-semibold">Status</th>
                  <th className="px-4 py-3 text-center text-muted font-semibold">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((t) => (
                  <tr key={t.id} className="border-t border-border/50 hover:bg-[#F8F5EE]/50">
                    <td className="px-4 py-3">
                      <p className="font-mono font-bold text-primary">{t.id}</p>
                      <p className="text-muted">{t.warga} · {t.tgl}</p>
                    </td>
                    <td className="px-4 py-3 text-ink font-medium max-w-[200px]">{t.isu}</td>
                    <td className="px-4 py-3 text-muted hidden md:table-cell">{t.kat}</td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span className={`text-[0.6rem] font-bold px-2 py-0.5 rounded-full ${prioritasColor[t.prioritas]}`}>{t.prioritas}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-[0.6rem] font-bold px-2 py-0.5 rounded-full ${statusColor[t.status]}`}>{t.status}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-2">
                        <button className="text-primary hover:underline font-semibold">Respons</button>
                        <span className="text-border">|</span>
                        <button className="text-green-600 hover:underline font-semibold">Tutup</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Response form */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h3 className="text-sm font-semibold text-ink mb-4">Balas Pengaduan — TKT-040</h3>
          <div className="bg-[#F0F2F5] rounded-xl p-4 mb-4 text-xs">
            <p className="font-semibold text-ink mb-1">Blok C-15 · 21 Mei 2026</p>
            <p className="text-muted">Saluran air tersumbat di depan rumah, sudah terjadi 3 hari dan mengganggu aktivitas keluar masuk.</p>
          </div>
          <textarea rows={3} className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary transition-colors resize-none mb-3" placeholder="Tulis respons resmi untuk warga..." />
          <div className="flex gap-3 justify-end">
            <select className="border border-border rounded-lg px-3 py-2 text-xs text-ink outline-none">
              <option>Ubah Status → Proses</option>
              <option>Ubah Status → Selesai</option>
            </select>
            <button className="bg-primary text-white text-xs font-semibold px-5 py-2 rounded-lg hover:bg-primary/90 transition-colors">Kirim Respons</button>
          </div>
        </div>

      </div>
    </>
  )
}

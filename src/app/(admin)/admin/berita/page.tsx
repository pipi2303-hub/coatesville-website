import type { Metadata } from 'next'
import Link from 'next/link'
import AdminTopbar from '@/components/admin/AdminTopbar'

export const metadata: Metadata = { title: 'Kelola Berita' }

const articles = [
  { id: 1, title: 'Jadwal Posyandu Juni 2026', cat: 'Posyandu', status: 'Published', author: 'Admin RW', tgl: '22 Mei 2026', views: 142 },
  { id: 2, title: 'Pengumuman Rapat Warga RW 44', cat: 'Pengumuman', status: 'Published', author: 'Admin RW', tgl: '20 Mei 2026', views: 219 },
  { id: 3, title: 'Laporan Keuangan Q1 2026', cat: 'Laporan', status: 'Draft', author: 'Admin RW', tgl: '18 Mei 2026', views: 0 },
  { id: 4, title: 'Peraturan Baru Tata Tertib RW 44', cat: 'Peraturan', status: 'Published', author: 'Admin RW', tgl: '15 Mei 2026', views: 88 },
  { id: 5, title: 'Info Perbaikan Jalan Kompleks Blok C', cat: 'Infrastruktur', status: 'Published', author: 'Admin RW', tgl: '10 Mei 2026', views: 175 },
  { id: 6, title: 'Undangan HUT RI ke-81 RW 44', cat: 'Kegiatan', status: 'Draft', author: 'Admin RW', tgl: '5 Mei 2026', views: 0 },
]

const statusColor: Record<string, string> = {
  Published: 'bg-green-100 text-green-700',
  Draft: 'bg-gray-100 text-gray-600',
  Archived: 'bg-red-100 text-red-600',
}

export default function AdminBeritaPage() {
  return (
    <>
      <AdminTopbar title="Kelola Berita & Info" />
      <div className="p-6 space-y-5">

        {/* Header actions */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-border w-56">
              <span className="text-muted text-xs">🔍</span>
              <input placeholder="Cari berita..." className="bg-transparent text-xs outline-none w-full text-ink placeholder:text-muted" />
            </div>
            <select className="bg-white rounded-lg px-3 py-2 text-xs shadow-sm border border-border text-ink outline-none">
              <option>Semua Status</option>
              <option>Published</option>
              <option>Draft</option>
            </select>
          </div>
          <button className="bg-primary text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
            ✏️ Tulis Berita Baru
          </button>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Total Artikel', val: '24' },
            { label: 'Published', val: '20' },
            { label: 'Draft', val: '4' },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-sm text-center">
              <p className="text-xl font-bold text-ink">{s.val}</p>
              <p className="text-[0.65rem] text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-border">
            <h3 className="text-sm font-semibold text-ink">Daftar Berita</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#F0F2F5]">
                  <th className="px-4 py-3 text-left text-muted font-semibold">Judul</th>
                  <th className="px-4 py-3 text-left text-muted font-semibold hidden md:table-cell">Kategori</th>
                  <th className="px-4 py-3 text-left text-muted font-semibold">Status</th>
                  <th className="px-4 py-3 text-left text-muted font-semibold hidden lg:table-cell">Tanggal</th>
                  <th className="px-4 py-3 text-right text-muted font-semibold hidden lg:table-cell">Views</th>
                  <th className="px-4 py-3 text-center text-muted font-semibold">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((a) => (
                  <tr key={a.id} className="border-t border-border/50 hover:bg-[#F8F5EE]/50 transition-colors">
                    <td className="px-4 py-3">
                      <p className="font-medium text-ink">{a.title}</p>
                      <p className="text-muted text-[0.6rem]">oleh {a.author}</p>
                    </td>
                    <td className="px-4 py-3 text-muted hidden md:table-cell">{a.cat}</td>
                    <td className="px-4 py-3">
                      <span className={`text-[0.6rem] font-bold px-2 py-0.5 rounded-full ${statusColor[a.status]}`}>{a.status}</span>
                    </td>
                    <td className="px-4 py-3 text-muted hidden lg:table-cell">{a.tgl}</td>
                    <td className="px-4 py-3 text-right font-medium text-ink hidden lg:table-cell">{a.views > 0 ? a.views : '—'}</td>
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
          <div className="px-5 py-3 border-t border-border flex items-center justify-between">
            <p className="text-xs text-muted">Menampilkan 6 dari 24 artikel</p>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map(p => (
                <button key={p} className={`w-7 h-7 text-xs rounded-lg ${p === 1 ? 'bg-primary text-white' : 'bg-bg text-muted hover:bg-border'}`}>{p}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Write form */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-border">
            <h3 className="text-sm font-semibold text-ink">Tulis Berita Baru</h3>
          </div>
          <div className="p-5 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-muted block mb-1.5">Judul Berita *</label>
                <input className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary transition-colors" placeholder="Masukkan judul berita..." />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted block mb-1.5">Kategori *</label>
                <select className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary transition-colors">
                  <option>Pilih kategori...</option>
                  <option>Pengumuman</option>
                  <option>Posyandu</option>
                  <option>Kegiatan</option>
                  <option>Infrastruktur</option>
                  <option>Peraturan</option>
                  <option>Laporan</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Ringkasan</label>
              <textarea rows={2} className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary transition-colors resize-none" placeholder="Ringkasan singkat berita..." />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Konten Berita *</label>
              <textarea rows={6} className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary transition-colors resize-none" placeholder="Tulis konten berita di sini..." />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Gambar Cover</label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                <p className="text-2xl mb-2">🖼️</p>
                <p className="text-xs text-muted">Klik atau seret gambar ke sini</p>
                <p className="text-[0.6rem] text-muted mt-1">PNG, JPG, WebP max 5MB</p>
              </div>
            </div>
            <div className="flex gap-3 justify-end pt-2">
              <button className="border border-border text-muted text-xs font-semibold px-4 py-2 rounded-lg hover:bg-bg transition-colors">Simpan Draft</button>
              <button className="bg-primary text-white text-xs font-semibold px-5 py-2 rounded-lg hover:bg-primary/90 transition-colors">Terbitkan</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

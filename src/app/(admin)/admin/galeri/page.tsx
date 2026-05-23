import type { Metadata } from 'next'
import Image from 'next/image'
import AdminTopbar from '@/components/admin/AdminTopbar'

export const metadata: Metadata = { title: 'Kelola Galeri' }

const photos = [
  { seed: 'g-adm-1', title: 'Kegiatan Posyandu Mei 2026', cat: 'Posyandu', tgl: '20 Mei 2026' },
  { seed: 'g-adm-2', title: 'Gotong Royong Blok B', cat: 'Lingkungan', tgl: '18 Mei 2026' },
  { seed: 'g-adm-3', title: 'Senam Pagi RW 44', cat: 'Olahraga', tgl: '15 Mei 2026' },
  { seed: 'g-adm-4', title: 'Rapat Pengurus RW 44', cat: 'Rapat', tgl: '12 Mei 2026' },
  { seed: 'g-adm-5', title: 'Kegiatan Line Dance', cat: 'Kreatif', tgl: '10 Mei 2026' },
  { seed: 'g-adm-6', title: 'Pengajian Rutin Minggu', cat: 'Rohani', tgl: '5 Mei 2026' },
  { seed: 'g-adm-7', title: 'Perbaikan Lapangan Basket', cat: 'Infrastruktur', tgl: '3 Mei 2026' },
  { seed: 'g-adm-8', title: 'CTB Touring April 2026', cat: 'CTB', tgl: '28 Apr 2026' },
]

export default function AdminGaleriPage() {
  return (
    <>
      <AdminTopbar title="Kelola Galeri" />
      <div className="p-6 space-y-5">

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-3">
            <select className="bg-white rounded-lg px-3 py-2 text-xs shadow-sm border border-border text-ink outline-none">
              <option>Semua Kategori</option>
              <option>Posyandu</option>
              <option>Olahraga</option>
              <option>Lingkungan</option>
              <option>Kreatif</option>
              <option>Rohani</option>
            </select>
          </div>
          <button className="bg-primary text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
            🖼️ Upload Foto
          </button>
        </div>

        {/* Upload zone */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h3 className="text-sm font-semibold text-ink mb-4">Upload Foto Baru</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Judul Foto *</label>
              <input className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary" placeholder="Judul foto..." />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Kategori *</label>
              <select className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary">
                <option>Pilih kategori...</option>
                <option>Posyandu</option>
                <option>Olahraga</option>
                <option>Kegiatan</option>
                <option>Infrastruktur</option>
              </select>
            </div>
          </div>
          <div className="border-2 border-dashed border-border rounded-xl p-10 text-center hover:border-primary transition-colors cursor-pointer">
            <p className="text-4xl mb-3">📁</p>
            <p className="text-sm font-medium text-ink mb-1">Klik atau seret file ke sini</p>
            <p className="text-xs text-muted">PNG, JPG, WebP, GIF — Maks 10MB per file</p>
            <p className="text-xs text-muted mt-0.5">Bisa upload beberapa file sekaligus</p>
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-primary text-white text-xs font-semibold px-5 py-2 rounded-lg hover:bg-primary/90 transition-colors">Upload</button>
          </div>
        </div>

        {/* Grid */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-border flex items-center justify-between">
            <h3 className="text-sm font-semibold text-ink">Foto Tersimpan ({photos.length})</h3>
            <button className="text-xs text-red-500 hover:underline font-semibold">Hapus Pilihan</button>
          </div>
          <div className="p-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((p, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden shadow-sm border border-border/50">
                <div className="relative aspect-video">
                  <Image src={`https://picsum.photos/seed/${p.seed}/400/225`} alt={p.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                    <button className="w-8 h-8 bg-white/90 rounded-lg text-primary text-xs hover:bg-white">✏️</button>
                    <button className="w-8 h-8 bg-white/90 rounded-lg text-red-500 text-xs hover:bg-white">🗑️</button>
                  </div>
                </div>
                <div className="p-2.5">
                  <p className="text-[0.65rem] font-semibold text-ink truncate">{p.title}</p>
                  <p className="text-[0.6rem] text-muted">{p.cat} · {p.tgl}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}

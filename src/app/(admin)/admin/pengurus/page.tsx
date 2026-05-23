import type { Metadata } from 'next'
import Image from 'next/image'
import AdminTopbar from '@/components/admin/AdminTopbar'

export const metadata: Metadata = { title: 'Kelola Pengurus' }

const pengurus = [
  { id: 1, nama: 'Segera Tersedia', jabatan: 'Ketua RW 44', bidang: 'Pimpinan', no_hp: '+62 812-xxxx-xxxx', status: 'Aktif', seed: 'pengurus-1' },
  { id: 2, nama: 'Segera Tersedia', jabatan: 'Wakil Ketua', bidang: 'Pimpinan', no_hp: '+62 813-xxxx-xxxx', status: 'Aktif', seed: 'pengurus-2' },
  { id: 3, nama: 'Segera Tersedia', jabatan: 'Sekretaris I', bidang: 'Sekretariat', no_hp: '+62 814-xxxx-xxxx', status: 'Aktif', seed: 'pengurus-3' },
  { id: 4, nama: 'Segera Tersedia', jabatan: 'Sekretaris II', bidang: 'Sekretariat', no_hp: '+62 815-xxxx-xxxx', status: 'Aktif', seed: 'pengurus-4' },
  { id: 5, nama: 'Segera Tersedia', jabatan: 'Bendahara I', bidang: 'Keuangan', no_hp: '+62 816-xxxx-xxxx', status: 'Aktif', seed: 'pengurus-5' },
  { id: 6, nama: 'Segera Tersedia', jabatan: 'Bendahara II', bidang: 'Keuangan', no_hp: '+62 817-xxxx-xxxx', status: 'Aktif', seed: 'pengurus-6' },
]

export default function AdminPengurusPage() {
  return (
    <>
      <AdminTopbar title="Kelola Data Pengurus" />
      <div className="p-6 space-y-5">

        <div className="flex justify-end">
          <button className="bg-primary text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">👥 Tambah Pengurus</button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pengurus.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl p-5 shadow-sm flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary/20">
                <Image src={`https://picsum.photos/seed/${p.seed}/120/120`} alt={p.nama} width={56} height={56} className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-ink text-sm truncate">{p.nama}</p>
                <p className="text-xs text-primary font-medium">{p.jabatan}</p>
                <p className="text-[0.65rem] text-muted">{p.no_hp}</p>
              </div>
              <div className="flex flex-col gap-1">
                <button className="text-[0.6rem] text-primary hover:underline font-semibold">Edit</button>
                <button className="text-[0.6rem] text-red-500 hover:underline font-semibold">Hapus</button>
              </div>
            </div>
          ))}
        </div>

        {/* Add/Edit form */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h3 className="text-sm font-semibold text-ink mb-4">Tambah / Edit Data Pengurus</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Nama Lengkap *</label>
              <input className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary" placeholder="Nama lengkap pengurus..." />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Jabatan *</label>
              <select className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary">
                <option>Ketua RW 44</option>
                <option>Wakil Ketua</option>
                <option>Sekretaris I</option>
                <option>Sekretaris II</option>
                <option>Bendahara I</option>
                <option>Bendahara II</option>
                <option>Ketua Bidang Keamanan</option>
                <option>Ketua Bidang Kebersihan</option>
                <option>Ketua Bidang Kesehatan</option>
                <option>Ketua Bidang Olahraga</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">No. HP / WhatsApp</label>
              <input className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary" placeholder="+62 8xx-xxxx-xxxx" />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Periode</label>
              <input className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary" placeholder="2024–2026" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-xs font-semibold text-muted block mb-1.5">Foto Pengurus</label>
            <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary transition-colors cursor-pointer">
              <p className="text-2xl mb-1">📸</p>
              <p className="text-xs text-muted">Upload foto (JPG/PNG, min 200×200px)</p>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-primary text-white text-xs font-semibold px-5 py-2 rounded-lg hover:bg-primary/90">Simpan</button>
          </div>
        </div>

      </div>
    </>
  )
}

import type { Metadata } from 'next'
import AdminTopbar from '@/components/admin/AdminTopbar'

export const metadata: Metadata = { title: 'Kelola Kegiatan' }

const events = [
  { id: 1, title: 'Posyandu Rutin Juni 2026', kat: 'Posyandu', tgl: '3 Jun 2026', jam: '08.00–11.00', lokasi: 'Pos Posyandu', peserta: 45, status: 'Upcoming' },
  { id: 2, title: 'Senam Pagi Bersama', kat: 'Olahraga', tgl: '25 Mei 2026', jam: '06.00–07.30', lokasi: 'Lapangan RW 44', peserta: 32, status: 'Upcoming' },
  { id: 3, title: 'Rapat Warga RW 44', kat: 'Rapat', tgl: '31 Mei 2026', jam: '09.00–11.00', lokasi: 'Pos Sekuriti', peserta: 95, status: 'Upcoming' },
  { id: 4, title: 'CTB Touring Puncak', kat: 'CTB', tgl: '8 Jun 2026', jam: '06.00–18.00', lokasi: 'Start Gerbang RW', peserta: 18, status: 'Upcoming' },
  { id: 5, title: 'Kegiatan Posyandu Mei 2026', kat: 'Posyandu', tgl: '6 Mei 2026', jam: '08.00–11.00', lokasi: 'Pos Posyandu', peserta: 52, status: 'Selesai' },
  { id: 6, title: 'Gotong Royong Blok B', kat: 'Lingkungan', tgl: '18 Mei 2026', jam: '07.00–10.00', lokasi: 'Blok B RW 44', peserta: 38, status: 'Selesai' },
]

const statusColor: Record<string, string> = {
  Upcoming: 'bg-blue-100 text-blue-700',
  Selesai: 'bg-green-100 text-green-700',
  Dibatalkan: 'bg-red-100 text-red-600',
}

export default function AdminKegiatanPage() {
  return (
    <>
      <AdminTopbar title="Kelola Kegiatan & Event" />
      <div className="p-6 space-y-5">

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-3">
            <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-border w-48">
              <input placeholder="Cari kegiatan..." className="bg-transparent text-xs outline-none w-full text-ink placeholder:text-muted" />
            </div>
            <select className="bg-white rounded-lg px-3 py-2 text-xs shadow-sm border border-border text-ink outline-none">
              <option>Semua Status</option>
              <option>Upcoming</option>
              <option>Selesai</option>
            </select>
          </div>
          <button className="bg-primary text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">📅 Tambah Kegiatan</button>
        </div>

        {/* Calendar strip */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h3 className="text-sm font-semibold text-ink mb-4">Kegiatan Akan Datang — Juni 2026</h3>
          <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
            {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map(d => (
              <div key={d} className="text-muted font-semibold py-1">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-xs">
            {[...Array(6)].map((_, i) => <div key={i} />)}
            {[...Array(30)].map((_, i) => {
              const day = i + 1
              const hasEvent = [3, 8, 15, 22, 29].includes(day)
              return (
                <div key={day} className={`aspect-square flex flex-col items-center justify-center rounded-lg text-xs cursor-pointer transition-colors ${hasEvent ? 'bg-primary/10 text-primary font-bold' : 'hover:bg-bg text-ink'}`}>
                  {day}
                  {hasEvent && <div className="w-1 h-1 bg-primary rounded-full mt-0.5" />}
                </div>
              )
            })}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-border">
            <h3 className="text-sm font-semibold text-ink">Daftar Kegiatan</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#F0F2F5]">
                  <th className="px-4 py-3 text-left text-muted font-semibold">Kegiatan</th>
                  <th className="px-4 py-3 text-left text-muted font-semibold hidden md:table-cell">Tanggal & Jam</th>
                  <th className="px-4 py-3 text-left text-muted font-semibold hidden lg:table-cell">Lokasi</th>
                  <th className="px-4 py-3 text-right text-muted font-semibold hidden lg:table-cell">Peserta</th>
                  <th className="px-4 py-3 text-left text-muted font-semibold">Status</th>
                  <th className="px-4 py-3 text-center text-muted font-semibold">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {events.map((e) => (
                  <tr key={e.id} className="border-t border-border/50 hover:bg-[#F8F5EE]/50">
                    <td className="px-4 py-3">
                      <p className="font-medium text-ink">{e.title}</p>
                      <p className="text-muted text-[0.6rem]">{e.kat}</p>
                    </td>
                    <td className="px-4 py-3 text-muted hidden md:table-cell">
                      <p>{e.tgl}</p>
                      <p className="text-[0.6rem]">{e.jam}</p>
                    </td>
                    <td className="px-4 py-3 text-muted hidden lg:table-cell">{e.lokasi}</td>
                    <td className="px-4 py-3 text-right font-bold text-ink hidden lg:table-cell">{e.peserta}</td>
                    <td className="px-4 py-3">
                      <span className={`text-[0.6rem] font-bold px-2 py-0.5 rounded-full ${statusColor[e.status]}`}>{e.status}</span>
                    </td>
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

        {/* Add form */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h3 className="text-sm font-semibold text-ink mb-4">Tambah Kegiatan Baru</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Nama Kegiatan *</label>
              <input className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary" placeholder="Nama kegiatan..." />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Kategori</label>
              <select className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary">
                <option>Posyandu</option>
                <option>Olahraga</option>
                <option>Rohani</option>
                <option>Lingkungan</option>
                <option>CTB</option>
                <option>CFA</option>
                <option>Rapat</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Tanggal *</label>
              <input type="date" className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary" />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Jam</label>
              <input type="text" className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary" placeholder="08.00–11.00 WIB" />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Lokasi</label>
              <input className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary" placeholder="Lokasi kegiatan..." />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Estimasi Peserta</label>
              <input type="number" className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary" placeholder="0" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-xs font-semibold text-muted block mb-1.5">Deskripsi</label>
            <textarea rows={3} className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary resize-none" placeholder="Deskripsi kegiatan..." />
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-primary text-white text-xs font-semibold px-5 py-2 rounded-lg hover:bg-primary/90 transition-colors">Simpan Kegiatan</button>
          </div>
        </div>

      </div>
    </>
  )
}

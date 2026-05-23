import type { Metadata } from 'next'
import AdminTopbar from '@/components/admin/AdminTopbar'

export const metadata: Metadata = { title: 'Kelola Pengguna' }

const users = [
  { id: 1, nama: 'Admin RW 44', email: 'admin@rw44coatesville.id', role: 'Super Admin', blok: '—', status: 'Aktif', lastLogin: '22 Mei 2026, 14:32' },
  { id: 2, nama: 'Admin Posyandu', email: 'posyandu@rw44coatesville.id', role: 'Posyandu Admin', blok: '—', status: 'Aktif', lastLogin: '22 Mei 2026, 09:15' },
  { id: 3, nama: 'Koordinator CTB', email: 'ctb@rw44coatesville.id', role: 'Event Coordinator', blok: 'Blok A', status: 'Aktif', lastLogin: '20 Mei 2026, 16:40' },
  { id: 4, nama: 'Warga Blok B-07', email: 'blokb07@warga.id', role: 'Resident', blok: 'Blok B-07', status: 'Aktif', lastLogin: '21 Mei 2026, 20:10' },
  { id: 5, nama: 'Warga Blok C-12', email: 'blokc12@warga.id', role: 'Resident', blok: 'Blok C-12', status: 'Aktif', lastLogin: '18 Mei 2026, 11:22' },
  { id: 6, nama: 'Warga Blok A-05', email: 'bloka05@warga.id', role: 'Resident', blok: 'Blok A-05', status: 'Nonaktif', lastLogin: '2 Apr 2026, 08:55' },
]

const roleColor: Record<string, string> = {
  'Super Admin': 'bg-red-100 text-red-700',
  'Posyandu Admin': 'bg-green-100 text-green-700',
  'Event Coordinator': 'bg-blue-100 text-blue-700',
  Resident: 'bg-gray-100 text-gray-600',
}
const statusColor: Record<string, string> = {
  Aktif: 'bg-green-100 text-green-700',
  Nonaktif: 'bg-red-100 text-red-600',
}

export default function AdminPenggunaPage() {
  return (
    <>
      <AdminTopbar title="Kelola Pengguna & Role" />
      <div className="p-6 space-y-5">

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-3">
            <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-border w-52">
              <input placeholder="Cari pengguna..." className="bg-transparent text-xs outline-none w-full text-ink placeholder:text-muted" />
            </div>
            <select className="bg-white rounded-lg px-3 py-2 text-xs shadow-sm border border-border text-ink outline-none">
              <option>Semua Role</option>
              <option>Super Admin</option>
              <option>Posyandu Admin</option>
              <option>Event Coordinator</option>
              <option>Resident</option>
            </select>
          </div>
          <button className="bg-primary text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">🔑 Tambah Pengguna</button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Total Pengguna', val: '312' },
            { label: 'Admin', val: '3' },
            { label: 'Warga Aktif', val: '298' },
            { label: 'Nonaktif', val: '11' },
          ].map((s, i) => (
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
                  <th className="px-4 py-3 text-left text-muted font-semibold">Pengguna</th>
                  <th className="px-4 py-3 text-left text-muted font-semibold">Role</th>
                  <th className="px-4 py-3 text-left text-muted font-semibold hidden md:table-cell">Blok</th>
                  <th className="px-4 py-3 text-left text-muted font-semibold">Status</th>
                  <th className="px-4 py-3 text-left text-muted font-semibold hidden lg:table-cell">Login Terakhir</th>
                  <th className="px-4 py-3 text-center text-muted font-semibold">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-t border-border/50 hover:bg-[#F8F5EE]/50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-[0.6rem] flex-shrink-0">
                          {u.nama[0]}
                        </div>
                        <div>
                          <p className="font-medium text-ink">{u.nama}</p>
                          <p className="text-muted text-[0.6rem]">{u.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-[0.6rem] font-bold px-2 py-0.5 rounded-full ${roleColor[u.role]}`}>{u.role}</span>
                    </td>
                    <td className="px-4 py-3 text-muted hidden md:table-cell">{u.blok}</td>
                    <td className="px-4 py-3">
                      <span className={`text-[0.6rem] font-bold px-2 py-0.5 rounded-full ${statusColor[u.status]}`}>{u.status}</span>
                    </td>
                    <td className="px-4 py-3 text-muted hidden lg:table-cell">{u.lastLogin}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-2">
                        <button className="text-primary hover:underline font-semibold">Edit</button>
                        <span className="text-border">|</span>
                        <button className="text-red-500 hover:underline font-semibold">Suspend</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Role matrix */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h3 className="text-sm font-semibold text-ink mb-4">Matriks Izin Role</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr>
                  <th className="px-3 py-2 text-left text-muted font-semibold">Fitur</th>
                  <th className="px-3 py-2 text-center text-muted font-semibold">Super Admin</th>
                  <th className="px-3 py-2 text-center text-muted font-semibold">Posyandu</th>
                  <th className="px-3 py-2 text-center text-muted font-semibold">Event</th>
                  <th className="px-3 py-2 text-center text-muted font-semibold">Resident</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Kelola Berita', '✓', '✓', '—', '—'],
                  ['Kelola Galeri', '✓', '✓', '✓', '—'],
                  ['Kelola Kegiatan', '✓', '✓', '✓', '—'],
                  ['Respons Pengaduan', '✓', '—', '—', '—'],
                  ['Kelola Pengguna', '✓', '—', '—', '—'],
                  ['Lihat Laporan', '✓', '✓', '✓', '✓'],
                  ['Submit Pengaduan', '—', '—', '—', '✓'],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-border/50">
                    <td className="px-3 py-2 text-ink font-medium">{row[0]}</td>
                    {row.slice(1).map((val, j) => (
                      <td key={j} className="px-3 py-2 text-center">
                        <span className={val === '✓' ? 'text-green-600 font-bold' : 'text-muted'}>{val}</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  )
}

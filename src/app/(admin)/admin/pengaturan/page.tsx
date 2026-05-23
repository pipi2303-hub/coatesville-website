import type { Metadata } from 'next'
import AdminTopbar from '@/components/admin/AdminTopbar'

export const metadata: Metadata = { title: 'Pengaturan' }

export default function AdminPengaturanPage() {
  return (
    <>
      <AdminTopbar title="Pengaturan Portal" />
      <div className="p-6 space-y-5">

        {/* Site identity */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h3 className="text-sm font-semibold text-ink mb-4">Identitas Situs</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Nama Portal</label>
              <input className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary" defaultValue="Portal RW 44 Coatesville" />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Tagline</label>
              <input className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary" defaultValue="Bersama Membangun Komunitas yang Aman, Bersih, Sehat & Harmonis" />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Email Kontak Utama</label>
              <input className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary" defaultValue="admin@rw44coatesville.id" />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">No. WhatsApp</label>
              <input className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary" defaultValue="+62 812-xxxx-xxxx" />
            </div>
            <div className="md:col-span-2">
              <label className="text-xs font-semibold text-muted block mb-1.5">Alamat</label>
              <input className="w-full border border-border rounded-lg px-3 py-2 text-sm text-ink outline-none focus:border-primary" defaultValue="RW 44 Coatesville, Kota Wisata, Gunung Putri, Bogor" />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-primary text-white text-xs font-semibold px-5 py-2 rounded-lg hover:bg-primary/90">Simpan Perubahan</button>
          </div>
        </div>

        {/* Announcement banner */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h3 className="text-sm font-semibold text-ink mb-4">Pengaturan Banner Pengumuman</h3>
          <div className="flex items-center gap-3 mb-4">
            <label className="text-xs font-semibold text-muted">Status Banner</label>
            <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm" />
            </div>
            <span className="text-xs text-green-600 font-semibold">Aktif</span>
          </div>
          <div className="space-y-2">
            {[
              'Posyandu Sehat Ceria: Jadwal imunisasi bayi & balita — Selasa, 27 Mei 2026',
              'Iuran warga bulan Mei 2026 dapat dibayarkan ke Bendahara RW atau transfer',
              'Rapat warga RW 44 — Sabtu, 31 Mei 2026 pukul 09.00 WIB',
            ].map((a, i) => (
              <div key={i} className="flex items-center gap-2 bg-bg rounded-lg px-3 py-2">
                <span className="text-muted">☰</span>
                <input defaultValue={a} className="flex-1 bg-transparent text-xs text-ink outline-none" />
                <button className="text-red-400 hover:text-red-600 text-xs">✕</button>
              </div>
            ))}
          </div>
          <button className="mt-3 text-xs text-primary font-semibold hover:underline">+ Tambah Pengumuman</button>
        </div>

        {/* Kontak darurat */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h3 className="text-sm font-semibold text-ink mb-4">Kontak Darurat & Layanan</h3>
          <div className="space-y-3">
            {[
              { label: 'Sekuriti 24 Jam', val: '' },
              { label: 'PMK / Pemadam Kebakaran', val: '113' },
              { label: 'Ambulans / Gawat Darurat', val: '119' },
              { label: 'PLN Gangguan', val: '123' },
              { label: 'PDAM Gangguan', val: '' },
              { label: 'Puskesmas Terdekat', val: '' },
            ].map((k, i) => (
              <div key={i} className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-muted block mb-1">{k.label}</label>
                </div>
                <input defaultValue={k.val} className="border border-border rounded-lg px-3 py-1.5 text-sm text-ink outline-none focus:border-primary" placeholder="Nomor telepon..." />
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-primary text-white text-xs font-semibold px-5 py-2 rounded-lg hover:bg-primary/90">Simpan</button>
          </div>
        </div>

        {/* Social media */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h3 className="text-sm font-semibold text-ink mb-4">Media Sosial</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: 'WhatsApp Group', icon: '💬' },
              { label: 'Instagram', icon: '📸' },
              { label: 'Facebook', icon: '📘' },
              { label: 'YouTube', icon: '▶️' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xl">{s.icon}</span>
                <div className="flex-1">
                  <label className="text-xs font-semibold text-muted block mb-1">{s.label}</label>
                  <input className="w-full border border-border rounded-lg px-3 py-1.5 text-sm text-ink outline-none focus:border-primary" placeholder="URL atau nomor..." />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-primary text-white text-xs font-semibold px-5 py-2 rounded-lg hover:bg-primary/90">Simpan</button>
          </div>
        </div>

      </div>
    </>
  )
}

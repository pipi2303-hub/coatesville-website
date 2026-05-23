import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Pencatatan Tamu – Portal RW 44',
  description: 'Sistem pelaporan tamu dan kendaraan untuk warga RW 44 Coatesville.',
}

export default function TamuPage() {
  return (
    <>
      <PageHero
        tag="Portal Warga"
        title="Lapor Tamu & Kendaraan"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Portal', href: '/portal' },
          { label: 'Lapor Tamu' },
        ]}
      />

      <section className="section bg-bg min-h-[600px]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Form Section */}
              <div className="md:col-span-2">
                <AnimateOnScroll className="bg-white rounded-3xl p-8 shadow-card border border-border/50">
                  <h2 className="text-xl mb-6">Formulir Kedatangan Tamu</h2>
                  <form className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-muted uppercase tracking-wider block mb-2">Nama Tamu *</label>
                        <input className="w-full border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Nama lengkap tamu..." />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-muted uppercase tracking-wider block mb-2">Hubungan</label>
                        <select className="w-full border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary">
                          <option>Keluarga</option>
                          <option>Teman/Kerabat</option>
                          <option>Kurir/Ekspedisi</option>
                          <option>Tamu Bisnis</option>
                          <option>Lainnya</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-muted uppercase tracking-wider block mb-2">No. Kendaraan</label>
                        <input className="w-full border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary" placeholder="B 1234 XYZ" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-muted uppercase tracking-wider block mb-2">Jenis Kendaraan</label>
                        <select className="w-full border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary">
                          <option>Mobil</option>
                          <option>Motor</option>
                          <option>Taksi/Grab/Gojek</option>
                          <option>Truk/Box</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-muted uppercase tracking-wider block mb-2">Perkiraan Durasi Menginap</label>
                      <div className="flex gap-4">
                        {['Hanya Berkunjung', '1 Malam', '2-3 Malam', 'Lebih dari 3 Malam'].map((opt) => (
                          <label key={opt} className="flex-1 border border-border rounded-xl px-3 py-3 text-center cursor-pointer hover:border-primary transition-colors has-[:checked]:bg-primary/5 has-[:checked]:border-primary">
                            <input type="radio" name="duration" className="hidden" />
                            <span className="text-[0.7rem] font-semibold">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-muted uppercase tracking-wider block mb-2">Keperluan / Catatan Tambahan</label>
                      <textarea rows={3} className="w-full border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Tujuan kedatangan tamu..." />
                    </div>

                    <div className="bg-accent/10 rounded-2xl p-4 flex gap-3">
                      <div className="text-xl">ℹ️</div>
                      <p className="text-[0.7rem] leading-relaxed text-muted">
                        Data ini akan diteruskan ke tim keamanan di <strong>Pos Sekuriti Utama</strong> untuk mempermudah verifikasi saat tamu tiba di gerbang cluster.
                      </p>
                    </div>

                    <button type="button" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg active:scale-95">
                      Kirim Laporan Tamu
                    </button>
                  </form>
                </AnimateOnScroll>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                <AnimateOnScroll delay={100} className="bg-white rounded-3xl p-6 shadow-card border border-border/50">
                  <h3 className="text-base font-bold mb-4 flex items-center gap-2">
                    <span className="text-xl">🕒</span> Riwayat Terkini
                  </h3>
                  <div className="space-y-4">
                    {[
                      { nama: 'Budi Santoso', tgl: '20 Mei, 18:30', status: 'Selesai', icon: '🚗' },
                      { nama: 'Kurir J&T', tgl: '19 Mei, 14:20', status: 'Selesai', icon: '🛵' },
                    ].map((h, i) => (
                      <div key={i} className="flex items-center gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
                        <div className="w-10 h-10 bg-bg rounded-lg flex items-center justify-center text-lg">{h.icon}</div>
                        <div className="flex-1">
                          <div className="text-[0.8rem] font-bold">{h.nama}</div>
                          <div className="text-[0.65rem] text-muted">{h.tgl}</div>
                        </div>
                        <div className="text-[0.6rem] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">
                          {h.status}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href="/portal" className="block text-center mt-6 text-[0.7rem] font-bold text-primary hover:underline">
                    Lihat Semua Riwayat →
                  </Link>
                </AnimateOnScroll>

                <AnimateOnScroll delay={200} className="bg-primary rounded-3xl p-6 shadow-card text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <h3 className="text-base font-bold mb-2 relative z-10">Butuh Bantuan?</h3>
                  <p className="text-[0.7rem] text-white/70 mb-4 relative z-10 leading-relaxed">
                    Hubungi petugas keamanan atau pengurus jika Anda menemui kendala dalam pelaporan tamu.
                  </p>
                  <Link href="/kontak" className="inline-block bg-accent text-white text-[0.7rem] font-bold px-4 py-2 rounded-lg hover:bg-accent-light transition-colors relative z-10">
                    Hubungi Sekuriti
                  </Link>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

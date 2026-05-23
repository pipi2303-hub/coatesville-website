import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Daftar – Portal RW 44 Coatesville' }

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-hero-gradient flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
            <span className="text-white font-serif font-bold text-xl">RW</span>
          </div>
          <h1 className="text-white text-2xl mb-1">Daftar Akun Warga</h1>
          <p className="text-white/60 text-sm">Portal RW 44 Coatesville</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-card-lg">
          <h2 className="text-lg mb-1 text-center">Buat Akun Baru</h2>
          <p className="text-xs text-muted text-center mb-6">Khusus untuk warga RW 44 Coatesville</p>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-muted block mb-1.5">Nama Depan *</label>
                <input className="w-full border border-border rounded-xl px-3 py-2.5 text-sm text-ink outline-none focus:border-primary" placeholder="Nama depan" />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted block mb-1.5">Nama Belakang</label>
                <input className="w-full border border-border rounded-xl px-3 py-2.5 text-sm text-ink outline-none focus:border-primary" placeholder="Nama belakang" />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Email *</label>
              <input type="email" className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-ink outline-none focus:border-primary" placeholder="email@contoh.com" />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">No. HP / WhatsApp *</label>
              <input type="tel" className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-ink outline-none focus:border-primary" placeholder="+62 8xx-xxxx-xxxx" />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Blok & Nomor Rumah *</label>
              <select className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-ink outline-none focus:border-primary">
                <option value="">Pilih blok...</option>
                {['A', 'B', 'C', 'D', 'E'].map(b => (
                  [...Array(20)].map((_, i) => (
                    <option key={`${b}-${i+1}`} value={`Blok ${b}-${String(i+1).padStart(2,'0')}`}>Blok {b}-{String(i+1).padStart(2,'0')}</option>
                  ))
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Password *</label>
              <input type="password" className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-ink outline-none focus:border-primary" placeholder="Min. 8 karakter" />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Konfirmasi Password *</label>
              <input type="password" className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-ink outline-none focus:border-primary" placeholder="Ulangi password" />
            </div>

            <div className="bg-accent/10 rounded-xl p-3 text-xs text-muted">
              <p className="font-semibold text-ink mb-1">ℹ️ Catatan Pendaftaran</p>
              Akun Anda akan diverifikasi oleh Admin RW 44 sebelum dapat digunakan. Proses verifikasi membutuhkan 1–2 hari kerja.
            </div>

            <label className="flex items-start gap-2 text-xs text-muted cursor-pointer">
              <input type="checkbox" className="rounded border-border accent-primary mt-0.5 flex-shrink-0" />
              Saya menyetujui <span className="text-primary font-semibold">syarat & ketentuan</span> penggunaan portal RW 44 Coatesville
            </label>

            <button className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm">
              Daftar Sekarang
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-muted">
              Sudah punya akun?{' '}
              <Link href="/auth/login" className="text-primary font-semibold hover:underline">Masuk di sini</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

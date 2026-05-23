import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Login – Portal RW 44 Coatesville' }

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-hero-gradient flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
            <span className="text-white font-serif font-bold text-xl">RW</span>
          </div>
          <h1 className="text-white text-2xl mb-1">Portal RW 44</h1>
          <p className="text-white/60 text-sm">Coatesville Kota Wisata</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl p-8 shadow-card-lg">
          <h2 className="text-lg mb-1 text-center">Masuk ke Akun</h2>
          <p className="text-xs text-muted text-center mb-6">Masukkan email dan password Anda</p>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Email</label>
              <input
                type="email"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-primary transition-colors"
                placeholder="email@contoh.com"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted block mb-1.5">Password</label>
              <input
                type="password"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-primary transition-colors"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs text-muted cursor-pointer">
                <input type="checkbox" className="rounded border-border accent-primary" />
                Ingat saya
              </label>
              <Link href="#" className="text-xs text-primary font-semibold hover:underline">Lupa password?</Link>
            </div>
            <button className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm">
              Masuk
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-muted">
              Belum punya akun?{' '}
              <Link href="/auth/register" className="text-primary font-semibold hover:underline">Daftar di sini</Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-[0.65rem] text-muted mb-3">Login sebagai:</p>
            <div className="flex gap-2">
              <Link href="/admin" className="flex-1 border border-primary/30 text-primary text-xs font-semibold py-2 rounded-lg hover:bg-primary/5 transition-colors text-center">
                Admin Panel
              </Link>
              <Link href="/" className="flex-1 border border-border text-muted text-xs font-semibold py-2 rounded-lg hover:bg-bg transition-colors text-center">
                Kembali ke Situs
              </Link>
            </div>
          </div>
        </div>

        <p className="text-center text-white/40 text-[0.65rem] mt-6">
          © 2026 Portal RW 44 Coatesville. Hak cipta dilindungi.
        </p>
      </div>
    </div>
  )
}

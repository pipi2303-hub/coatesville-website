import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-hero-gradient flex items-center justify-center text-center px-6">
      <div>
        <div className="text-8xl font-serif font-bold text-white/20 mb-2">404</div>
        <div className="section-tag-light mx-auto mb-4">Halaman Tidak Ditemukan</div>
        <h1 className="text-white text-3xl mb-4">Oops! Halaman ini tidak ada</h1>
        <p className="text-white/65 max-w-sm mx-auto mb-8">
          Halaman yang Anda cari mungkin telah dipindahkan atau tidak tersedia.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">Kembali ke Home</Link>
          <Link href="/kontak" className="btn-outline">Hubungi Kami</Link>
        </div>
      </div>
    </div>
  )
}

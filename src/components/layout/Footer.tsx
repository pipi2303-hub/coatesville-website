import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="font-serif font-bold text-xl text-white">Portal RW 44</div>
              <div className="text-[0.65rem] tracking-[2.5px] uppercase text-white/50 mt-0.5">
                Coatesville Kota Wisata
              </div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-6">
              Portal komunitas digital RW 44 Coatesville — menghubungkan warga, menyebarkan informasi, dan memfasilitasi pelayanan komunitas yang modern.
            </p>
            <div className="flex gap-2.5">
              {['FB', 'IG', 'YT', 'WA'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent transition-colors duration-300 flex items-center justify-center text-[0.65rem] font-bold text-white/70 hover:text-white"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Navigasi</h4>
            <ul className="space-y-2.5">
              {[
                ['Home', '/'],
                ['Pengantar', '/pengantar'],
                ['Tentang Kami', '/tentang-kami'],
                ['News & Updates', '/berita'],
                ['Infrastruktur', '/infrastruktur'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/60 text-sm hover:text-accent transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Program</h4>
            <ul className="space-y-2.5">
              {[
                ['Posyandu Sehat Ceria', '/kegiatan/posyandu'],
                ['Olahraga Bersama', '/kegiatan/olahraga'],
                ['Kegiatan CTB', '/kegiatan/ctb'],
                ['Pelayanan Warga', '/pelayanan'],
                ['Laporan & Transparansi', '/laporan'],
                ['FAQ', '/faq'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/60 text-sm hover:text-accent transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Kontak</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>Gedung Serba Guna</li>
              <li>Jalan Taman Phase 2 Coatesville</li>
              <li>Kel. Ciangsana, Kec. Gunung Putri</li>
              <li>Kab. Bogor 16968</li>
              <li className="pt-1">
                <a href="tel:" className="text-accent hover:text-accent-light transition-colors">
                  Hotline: Segera Tersedia
                </a>
              </li>
              <li>
                <a href="mailto:" className="text-accent hover:text-accent-light transition-colors">
                  Email: Segera Tersedia
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <Link
                href="/kontak"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-light transition-colors"
              >
                Lihat Semua Kontak →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>&copy; 2026 Portal RW 44 – Coatesville Kota Wisata. Hak cipta dilindungi.</span>
          <span>Melayani warga dengan sepenuh hati</span>
        </div>
      </div>
    </footer>
  )
}

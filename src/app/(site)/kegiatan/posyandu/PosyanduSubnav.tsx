'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/kegiatan/posyandu', label: 'Beranda Posyandu', exact: true },
  { href: '/kegiatan/posyandu/tentang-kami', label: 'Tentang Kami' },
  { href: '/kegiatan/posyandu/pembekalan-kader', label: 'Pembekalan Kader' },
  { href: '/kegiatan/posyandu/layanan-unggulan', label: 'Layanan Unggulan' },
  { href: '/kegiatan/posyandu/laporan-evaluasi', label: 'Laporan & Evaluasi' },
]

export default function PosyanduSubnav() {
  const pathname = usePathname()
  return (
    <div className="bg-white border-b border-border shadow-sm">
      <div className="container">
        <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
          <span className="text-[0.65rem] font-bold text-accent uppercase tracking-widest mr-2 flex-shrink-0">
            🏥 Posyandu
          </span>
          <div className="w-px h-5 bg-border mx-1 flex-shrink-0" />
          {links.map((l) => {
            const active = l.exact
              ? pathname === l.href
              : pathname === l.href || pathname.startsWith(l.href + '/')
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-[0.82rem] font-semibold transition-all duration-200 ${
                  active
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-muted hover:text-primary hover:bg-accent-pale'
                }`}
              >
                {l.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

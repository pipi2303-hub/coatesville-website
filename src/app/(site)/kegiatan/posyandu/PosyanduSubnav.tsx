'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/kegiatan/posyandu', label: 'Beranda', icon: '🏠', exact: true },
  { href: '/kegiatan/posyandu/tentang-kami', label: 'Tentang Kami', icon: '📖' },
  { href: '/kegiatan/posyandu/pembekalan-kader', label: 'Kader', icon: '🎓' },
  { href: '/kegiatan/posyandu/layanan-unggulan', label: 'Layanan', icon: '🩺' },
  { href: '/kegiatan/posyandu/laporan-evaluasi', label: 'Laporan', icon: '📊' },
]

export default function PosyanduSubnav() {
  const pathname = usePathname()
  return (
    <div className="bg-white dark:bg-[rgb(var(--surface))] border-b border-border shadow-sm sticky top-[56px] z-40">
      <div className="container">
        <div className="flex items-center">
          {/* Brand pill */}
          <div className="flex items-center gap-1.5 pr-4 mr-2 border-r border-border flex-shrink-0">
            <span className="text-base">🏥</span>
            <span className="text-[0.65rem] font-bold text-accent uppercase tracking-widest hidden sm:block">
              Posyandu
            </span>
          </div>

          {/* Tab links */}
          <div className="flex items-center overflow-x-auto scrollbar-hide flex-1">
            {links.map((l) => {
              const active = l.exact
                ? pathname === l.href
                : pathname === l.href || pathname.startsWith(l.href + '/')
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative flex items-center gap-1.5 px-3 py-3.5 text-xs font-semibold flex-shrink-0 transition-colors duration-200 whitespace-nowrap ${
                    active
                      ? 'text-primary dark:text-primary-light'
                      : 'text-muted hover:text-ink dark:hover:text-ink'
                  }`}
                >
                  <span className="text-sm">{l.icon}</span>
                  <span>{l.label}</span>
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary dark:bg-primary-light rounded-t-full" />
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const menu = [
  { label: 'Dashboard', href: '/admin', icon: '▦' },
  { label: 'Berita & Info', href: '/admin/berita', icon: '📰' },
  { label: 'Galeri', href: '/admin/galeri', icon: '🖼️' },
  { label: 'Kegiatan', href: '/admin/kegiatan', icon: '📅' },
  { label: 'Pengaduan', href: '/admin/pengaduan', icon: '📣' },
  { label: 'Laporan', href: '/admin/laporan', icon: '📊' },
  { label: 'Pengurus', href: '/admin/pengurus', icon: '👥' },
  { label: 'Pengguna', href: '/admin/pengguna', icon: '🔑' },
  { label: 'Pengaturan', href: '/admin/pengaturan', icon: '⚙️' },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside className={`${collapsed ? 'w-16' : 'w-60'} transition-all duration-300 bg-primary min-h-screen flex flex-col flex-shrink-0`}>
      {/* Logo */}
      <div className="p-4 flex items-center gap-3 border-b border-white/10">
        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-white text-xs">RW</div>
        {!collapsed && <span className="text-white font-serif font-bold text-sm leading-tight">Portal<br/>RW 44</span>}
        <button onClick={() => setCollapsed(!collapsed)} className="ml-auto text-white/50 hover:text-white text-lg leading-none flex-shrink-0">
          {collapsed ? '›' : '‹'}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {menu.map(item => {
          const active = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`sidebar-link ${active ? 'active' : 'text-white/70'}`}
              title={collapsed ? item.label : undefined}
            >
              <span className="text-base flex-shrink-0">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-white/10">
        <Link href="/" className={`sidebar-link text-white/60 ${collapsed ? 'justify-center' : ''}`}>
          <span className="text-base flex-shrink-0">←</span>
          {!collapsed && <span>Kembali ke Situs</span>}
        </Link>
      </div>
    </aside>
  )
}

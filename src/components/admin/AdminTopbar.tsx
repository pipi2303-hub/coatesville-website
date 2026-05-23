'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function AdminTopbar({ title }: { title?: string }) {
  const [notifOpen, setNotifOpen] = useState(false)

  const notifs = [
    { text: 'Pengaduan baru dari Warga Blok B-12', time: '5 mnt lalu', unread: true },
    { text: 'Laporan Q1 2026 siap untuk diterbitkan', time: '1 jam lalu', unread: true },
    { text: 'Jadwal posyandu bulan Juni telah diupdate', time: '3 jam lalu', unread: false },
  ]

  return (
    <header className="h-14 bg-white border-b border-border flex items-center px-6 gap-4 flex-shrink-0 sticky top-0 z-30">
      <h1 className="font-semibold text-ink text-sm flex-1">{title || 'Admin Panel'}</h1>

      {/* Search */}
      <div className="hidden md:flex items-center gap-2 bg-bg rounded-lg px-3 py-1.5 w-52">
        <span className="text-muted text-xs">🔍</span>
        <input placeholder="Cari..." className="bg-transparent text-xs outline-none w-full text-ink placeholder:text-muted" />
      </div>

      {/* Notifications */}
      <div className="relative">
        <button onClick={() => setNotifOpen(!notifOpen)} className="relative w-8 h-8 flex items-center justify-center rounded-lg hover:bg-bg transition-colors">
          <span className="text-base">🔔</span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white" />
        </button>
        {notifOpen && (
          <div className="absolute right-0 top-10 w-72 bg-white rounded-xl shadow-card-lg border border-border overflow-hidden z-50">
            <div className="px-4 py-3 border-b border-border flex items-center justify-between">
              <span className="text-xs font-bold text-ink">Notifikasi</span>
              <span className="text-[0.6rem] text-accent font-semibold">2 belum dibaca</span>
            </div>
            {notifs.map((n, i) => (
              <div key={i} className={`px-4 py-3 border-b border-border/50 hover:bg-bg transition-colors cursor-pointer flex gap-3 ${n.unread ? 'bg-primary/5' : ''}`}>
                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${n.unread ? 'bg-primary' : 'bg-border'}`} />
                <div>
                  <p className="text-xs text-ink leading-snug">{n.text}</p>
                  <p className="text-[0.6rem] text-muted mt-0.5">{n.time}</p>
                </div>
              </div>
            ))}
            <Link href="/admin/pengaduan" className="block text-center text-xs text-primary font-semibold py-3 hover:bg-bg transition-colors">
              Lihat Semua
            </Link>
          </div>
        )}
      </div>

      {/* Avatar */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">A</div>
        <span className="text-xs text-ink hidden sm:block font-medium">Admin RW</span>
      </div>
    </header>
  )
}

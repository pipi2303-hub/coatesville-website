'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const announcements = [
  'Posyandu Sehat Ceria: Jadwal imunisasi bayi & balita — Selasa, 27 Mei 2026 pukul 08.00 WIB',
  'Iuran warga bulan Mei 2026 dapat dibayarkan ke Bendahara RW atau transfer ke rekening RW 44',
  'Rapat warga RW 44 — Sabtu, 31 Mei 2026 pukul 09.00 WIB di Pos Sekuriti',
  'Pemeliharaan Lapangan Olahraga: tutup sementara 25–28 Mei 2026',
]

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    document.documentElement.style.setProperty('--banner-h', '32px')
    return () => document.documentElement.style.setProperty('--banner-h', '0px')
  }, [])

  if (!visible) return null

  const dismiss = () => {
    document.documentElement.style.setProperty('--banner-h', '0px')
    setVisible(false)
  }

  return (
    <div className="h-8 bg-primary text-white text-xs px-4 flex items-center gap-3 overflow-hidden">
      <span className="bg-accent text-primary font-bold px-2 py-0.5 rounded text-[0.6rem] flex-shrink-0 hidden sm:inline">📢 INFO</span>
      <div className="flex-1 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee inline-block">
          {announcements.map((a, i) => (
            <span key={i} className="mr-16 text-white/90">{a}</span>
          ))}
          {announcements.map((a, i) => (
            <span key={`r-${i}`} className="mr-16 text-white/90">{a}</span>
          ))}
        </div>
      </div>
      <Link href="/berita" className="text-white/70 hover:text-white flex-shrink-0 hidden sm:inline text-[0.65rem] underline">Selengkapnya</Link>
      <button onClick={dismiss} className="text-white/60 hover:text-white flex-shrink-0 ml-1" aria-label="Tutup">✕</button>
    </div>
  )
}

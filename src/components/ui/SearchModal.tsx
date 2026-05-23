'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { searchItems, groupByCategory, type SearchItem } from '@/lib/searchIndex'

const catIcon: Record<string, string> = {
  'Umum': '🏠',
  'Pengantar': '📖',
  'Tentang Kami': '👥',
  'Berita': '📰',
  'Infrastruktur': '🏗️',
  'Kegiatan': '🎯',
  'Posyandu': '🏥',
  'Pelayanan': '📄',
  'Laporan': '📊',
  'Akun': '👤',
}

const quickLinks: SearchItem[] = [
  { title: 'Posyandu Sehat Ceria', desc: 'Layanan kesehatan terpadu', href: '/kegiatan/posyandu', category: 'Kegiatan', keywords: [] },
  { title: 'Feedback & Pengaduan', desc: 'Laporkan masalah', href: '/feedback', category: 'Umum', keywords: [] },
  { title: 'Portal Warga', desc: 'Dashboard layanan warga', href: '/portal', category: 'Umum', keywords: [] },
  { title: 'Laporan Keuangan', desc: 'Transparansi keuangan RW', href: '/laporan/keuangan', category: 'Laporan', keywords: [] },
]

interface Props {
  open: boolean
  onClose: () => void
}

export default function SearchModal({ open, onClose }: Props) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchItem[]>([])
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
      setQuery('')
      setResults([])
      setActive(0)
    }
  }, [open])

  useEffect(() => {
    setResults(searchItems(query))
    setActive(0)
  }, [query])

  const flatResults = query ? results : quickLinks

  const navigate = useCallback((href: string) => {
    router.push(href)
    onClose()
  }, [router, onClose])

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => Math.min(i + 1, flatResults.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && flatResults[active]) {
      navigate(flatResults[active].href)
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  if (!open) return null

  const grouped = query ? groupByCategory(results) : null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/50 backdrop-blur-sm z-[9998] animate-fade-up"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-[8vh] left-1/2 -translate-x-1/2 z-[9999] w-full max-w-2xl px-4">
        <div className="bg-white dark:bg-[rgb(var(--surface))] rounded-3xl shadow-card-lg border border-border overflow-hidden animate-fade-up">
          {/* Search Input */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
            <svg className="w-5 h-5 text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Cari halaman, layanan, atau informasi..."
              className="flex-1 bg-transparent text-ink placeholder-muted text-sm outline-none"
            />
            {query && (
              <button onClick={() => setQuery('')} className="text-muted hover:text-ink transition-colors text-xs">
                ✕
              </button>
            )}
            <kbd className="hidden sm:flex items-center gap-1 text-[0.6rem] text-muted border border-border rounded px-1.5 py-0.5 font-mono">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {!query && (
              <div className="px-5 pt-4 pb-1">
                <p className="text-[0.65rem] font-bold text-muted uppercase tracking-widest mb-3">Akses Cepat</p>
              </div>
            )}

            {query && results.length === 0 && (
              <div className="flex flex-col items-center py-12 text-center">
                <span className="text-3xl mb-3">🔍</span>
                <p className="text-sm font-semibold text-ink">Tidak ditemukan</p>
                <p className="text-xs text-muted mt-1">Coba kata kunci lain</p>
              </div>
            )}

            {query && grouped ? (
              Object.entries(grouped).map(([cat, items]) => (
                <div key={cat}>
                  <div className="px-5 pt-3 pb-1">
                    <p className="text-[0.6rem] font-bold text-muted uppercase tracking-widest flex items-center gap-1.5">
                      <span>{catIcon[cat] ?? '📄'}</span> {cat}
                    </p>
                  </div>
                  {items.map((item) => {
                    const idx = flatResults.indexOf(item)
                    return (
                      <button
                        key={item.href}
                        onClick={() => navigate(item.href)}
                        onMouseEnter={() => setActive(idx)}
                        className={`w-full flex items-start gap-3 px-5 py-3 text-left transition-colors ${
                          idx === active ? 'bg-accent-pale' : 'hover:bg-bg'
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-bg flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                          {catIcon[item.category] ?? '📄'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-ink truncate">{item.title}</p>
                          <p className="text-xs text-muted truncate mt-0.5">{item.desc}</p>
                        </div>
                        {idx === active && (
                          <kbd className="text-[0.6rem] text-muted border border-border rounded px-1.5 py-0.5 font-mono flex-shrink-0 mt-1">↵</kbd>
                        )}
                      </button>
                    )
                  })}
                </div>
              ))
            ) : (
              <div className="pb-3">
                {quickLinks.map((item, idx) => (
                  <button
                    key={item.href}
                    onClick={() => navigate(item.href)}
                    onMouseEnter={() => setActive(idx)}
                    className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors ${
                      idx === active ? 'bg-accent-pale' : 'hover:bg-bg'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-bg flex items-center justify-center text-sm flex-shrink-0">
                      {catIcon[item.category] ?? '📄'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-ink truncate">{item.title}</p>
                      <p className="text-xs text-muted truncate">{item.desc}</p>
                    </div>
                    <svg className="w-4 h-4 text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-border px-5 py-3 flex items-center gap-4 text-[0.65rem] text-muted">
            <span className="flex items-center gap-1"><kbd className="border border-border rounded px-1 py-0.5 font-mono">↑↓</kbd> navigasi</span>
            <span className="flex items-center gap-1"><kbd className="border border-border rounded px-1 py-0.5 font-mono">↵</kbd> buka</span>
            <span className="flex items-center gap-1"><kbd className="border border-border rounded px-1 py-0.5 font-mono">ESC</kbd> tutup</span>
            <span className="ml-auto">{query ? `${results.length} hasil` : `${quickLinks.length} akses cepat`}</span>
          </div>
        </div>
      </div>
    </>
  )
}

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { navItems, type NavItem } from '@/lib/navigation'


export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])


  const handleMouseEnter = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current)
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const megaMenuItems = ['Infrastruktur', 'Kegiatan']

  return (
    <>
      <nav
        className={`w-full transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 dark:bg-[rgb(18,32,24,0.97)] backdrop-blur-md shadow-nav py-3'
            : 'bg-hero-gradient py-6'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-center gap-1 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-accent/30 group-hover:ring-accent transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo-posyandu.jpeg"
                  alt="Logo Portal RW 44"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <span
                className={`text-[0.55rem] tracking-[2.5px] uppercase font-bold transition-colors duration-300 ${
                  scrolled ? 'text-muted' : 'text-white/60'
                }`}
              >
                Coatesville
              </span>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className={megaMenuItems.includes(item.label) ? 'static' : 'relative'}
                  onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 text-[0.875rem] font-semibold transition-all duration-300 pb-1 relative group ${
                      scrolled
                        ? isActive(item.href)
                          ? 'text-primary dark:text-primary-light'
                          : 'text-ink dark:text-ink hover:text-primary-mid dark:hover:text-primary-light'
                        : isActive(item.href)
                        ? 'text-accent'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <svg
                        className={`w-3 h-3 transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2px] bg-accent rounded-full transition-all duration-300 ${
                        isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>

                  {item.children && openDropdown === item.label && (
                    <>
                      {megaMenuItems.includes(item.label) ? (
                        <div
                          className="absolute top-full left-0 right-0 mt-3 bg-white dark:bg-[rgb(var(--surface))] rounded-3xl shadow-card-lg border border-border p-8 z-50 animate-fade-up"
                          onMouseEnter={() => handleMouseEnter(item.label)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="grid grid-cols-4 gap-8">
                            <div className="col-span-1 border-r border-border pr-8">
                              <div className="section-tag mb-3">{item.label}</div>
                              <h3 className="text-xl mb-3">Jelajahi {item.label}</h3>
                              <p className="text-xs leading-relaxed text-muted">
                                Temukan informasi lengkap mengenai {item.label.toLowerCase()} di lingkungan RW 44 Coatesville Kota Wisata.
                              </p>
                              <Link href={item.href} className="inline-block mt-4 text-xs font-bold text-primary dark:text-primary-light hover:text-accent transition-colors">
                                Lihat Semua →
                              </Link>
                            </div>
                            <div className="col-span-3 grid grid-cols-2 gap-x-10 gap-y-4">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="group/item flex items-start gap-3.5 p-3 rounded-2xl hover:bg-accent-pale transition-all duration-300"
                                >
                                  <div className="w-10 h-10 bg-bg rounded-xl flex items-center justify-center text-lg flex-shrink-0 group-hover/item:bg-white dark:group-hover/item:bg-surface group-hover/item:scale-110 transition-all duration-300">
                                    {getIconForLabel(child.label)}
                                  </div>
                                  <div>
                                    <div className="text-[0.85rem] font-bold text-ink group-hover/item:text-primary dark:group-hover/item:text-primary-light transition-colors">
                                      {child.label}
                                    </div>
                                    <p className="text-[0.7rem] text-muted mt-0.5 line-clamp-1">
                                      {getDescForLabel(child.label)}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white dark:bg-[rgb(var(--surface))] rounded-2xl shadow-card-lg border border-border py-2.5 min-w-[240px] z-50 animate-fade-up"
                          onMouseEnter={() => handleMouseEnter(item.label)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-[rgb(var(--surface))] border-t border-l border-border rotate-45" />
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-5 py-3 text-[0.85rem] font-semibold transition-all duration-200 hover:bg-accent-pale hover:text-primary dark:hover:text-primary-light ${
                                isActive(child.href) ? 'text-primary dark:text-primary-light bg-accent-pale' : 'text-ink'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                {child.label}
                                {isActive(child.href) && <span className="text-[0.6rem]">●</span>}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA + Search + Theme + Hamburger */}
            <div className="flex items-center gap-2">
              {/* Kontak Kami + Masuk */}
              <div className="hidden lg:flex items-center gap-2 ml-1">
                <Link
                  href="/kontak"
                  className={`px-4 py-1.5 rounded-full text-[0.78rem] font-bold transition-all duration-300 ${
                    scrolled
                      ? 'text-primary hover:text-primary-mid'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  Kontak Kami
                </Link>
                <Link
                  href="/auth/login"
                  className={`px-4 py-1.5 rounded-full text-[0.78rem] font-bold transition-all duration-300 ${
                    scrolled
                      ? 'bg-primary text-white shadow-sm hover:bg-primary-mid'
                      : 'bg-primary text-white shadow-sm hover:bg-primary-mid'
                  }`}
                >
                  Masuk
                </Link>
              </div>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex flex-col gap-[6px] p-2 cursor-pointer bg-transparent border-0"
                aria-label="Toggle Menu"
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`block w-6 h-0.5 rounded-full transition-all duration-300 origin-center ${
                      i === 0
                        ? mobileOpen ? 'rotate-45 translate-y-[8px] bg-white' : scrolled ? 'bg-primary dark:bg-primary-light' : 'bg-white'
                        : i === 1
                        ? mobileOpen ? 'opacity-0 bg-white' : scrolled ? 'bg-primary dark:bg-primary-light' : 'bg-white'
                        : mobileOpen ? '-rotate-45 -translate-y-[8px] bg-white' : scrolled ? 'bg-primary dark:bg-primary-light' : 'bg-white'
                    }`}
                  />
                ))}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-primary/40 backdrop-blur-sm z-[1002] lg:hidden transition-opacity duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer */}
      <nav
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[340px] bg-primary dark:bg-[#0D1F15] z-[1003] lg:hidden transition-transform duration-500 flex flex-col shadow-2xl ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-white/10">
          <div className="flex flex-col">
            <span className="font-serif font-bold text-white text-xl">Menu Utama</span>
            <span className="text-[0.6rem] text-white/50 tracking-[2px] uppercase mt-1">Portal RW 44</span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            aria-label="Tutup Menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto px-8 py-6 space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                    className={`flex w-full items-center justify-between py-3.5 text-base font-semibold transition-colors ${
                      mobileExpanded === item.label ? 'text-accent' : 'text-white/90 hover:text-accent'
                    }`}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        mobileExpanded === item.label ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileExpanded === item.label ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <ul className="pb-4 pl-4 border-l border-white/10 ml-1 space-y-3 mt-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`block py-1 text-sm transition-colors ${
                              isActive(child.href) ? 'text-accent font-bold' : 'text-white/60 hover:text-accent'
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`block py-3.5 text-base font-semibold transition-colors ${
                    isActive(item.href) ? 'text-accent' : 'text-white/90 hover:text-accent'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="px-8 pb-10 pt-6 border-t border-white/10 space-y-3">
          <div className="flex gap-3">
            <Link href="/kontak" className="flex-1 text-center border border-white/40 text-white text-[0.8rem] font-bold py-3 rounded-2xl hover:bg-white/10 transition-colors active:scale-95">
              Kontak Kami
            </Link>
            <Link href="/auth/login" className="flex-1 text-center bg-white text-primary text-[0.8rem] font-bold py-3 rounded-2xl shadow-lg active:scale-95 transition-all">
              Masuk
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

function getIconForLabel(label: string): string {
  const icons: Record<string, string> = {
    'Pos Sekuriti': '🔒',
    'Jalan Kompleks': '🛣️',
    'Taman & Gazebo': '🌳',
    'Lapangan Olahraga': '⚽',
    'Lampu Penerangan': '💡',
    'CCTV': '📹',
    'Posyandu Sehat Ceria': '🏥',
    'Olahraga Bersama': '🏃',
    'CTB – Touring & Edukasi': '🏍️',
    'CFA – Alam & Lingkungan': '🎒',
    'Kreatif': '🎨',
    'Pembinaan Rohani': '🕌',
    'Hari Besar Nasional & Keagamaan': '🇮🇩',
  }
  return icons[label] || '📄'
}

function getDescForLabel(label: string): string {
  const descs: Record<string, string> = {
    'Pos Sekuriti': 'Keamanan 24 jam terintegrasi.',
    'Jalan Kompleks': 'Akses jalan aspal berkualitas.',
    'Taman & Gazebo': 'Area hijau rekreasi warga.',
    'Lapangan Olahraga': 'Fasilitas olahraga multifungsi.',
    'Lampu Penerangan': 'Penerangan jalan otomatis.',
    'CCTV': 'Pemantauan kawasan real-time.',
    'Posyandu Sehat Ceria': 'Layanan kesehatan keluarga.',
    'Olahraga Bersama': 'Senam & olahraga rutin.',
    'CTB – Touring & Edukasi': 'Komunitas pecinta otomotif.',
    'CFA – Alam & Lingkungan': 'Petualangan & peduli alam.',
    'Kreatif': 'Seni, musik & cooking class.',
    'Pembinaan Rohani': 'Kegiatan spiritual warga.',
    'Hari Besar Nasional & Keagamaan': 'Perayaan bersama warga.',
  }
  return descs[label] || 'Informasi lengkap layanan.'
}

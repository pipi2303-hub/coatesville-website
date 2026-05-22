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
    dropdownTimer.current = setTimeout(() => setOpenDropdown(null), 120)
  }

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-nav py-3.5'
            : 'bg-transparent py-[22px]'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-accent/30">
                <Image
                  src="/images/logo-posyandu.jpeg"
                  alt="Logo Portal RW 44"
                  width={36}
                  height={36}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className={`font-serif font-bold text-[1.15rem] transition-colors duration-300 ${
                    scrolled ? 'text-primary' : 'text-white'
                  }`}
                >
                  Portal RW 44
                </span>
                <span
                  className={`text-[0.58rem] tracking-[2px] uppercase transition-colors duration-300 ${
                    scrolled ? 'text-muted' : 'text-white/60'
                  }`}
                >
                  Coatesville Kota Wisata
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 text-[0.875rem] font-medium transition-colors duration-300 pb-0.5 relative group ${
                      scrolled
                        ? isActive(item.href)
                          ? 'text-primary'
                          : 'text-ink hover:text-primary-mid'
                        : isActive(item.href)
                        ? 'text-accent'
                        : 'text-white/88 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-accent rounded-full transition-all duration-300 ${
                        isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>

                  {/* Dropdown */}
                  {item.children && openDropdown === item.label && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-card-lg border border-border py-2 min-w-[220px] z-50"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-border rotate-45" />
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-5 py-2.5 text-[0.855rem] font-medium transition-colors duration-200 hover:bg-accent-pale hover:text-primary ${
                            isActive(child.href) ? 'text-primary bg-accent-pale' : 'text-ink'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/kontak"
                className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 bg-accent text-white rounded-full text-[0.875rem] font-semibold transition-all duration-300 hover:bg-primary hover:-translate-y-0.5 hover:shadow-card"
              >
                Kontak Kami
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex flex-col gap-[5px] p-1 cursor-pointer bg-transparent border-0"
                aria-label="Toggle Menu"
              >
                <span
                  className={`block w-6 h-0.5 rounded-full transition-all duration-300 origin-center ${
                    mobileOpen
                      ? 'rotate-45 translate-y-[7px] bg-white'
                      : scrolled
                      ? 'bg-ink'
                      : 'bg-white'
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
                    mobileOpen
                      ? 'opacity-0 bg-white'
                      : scrolled
                      ? 'bg-ink'
                      : 'bg-white'
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 rounded-full transition-all duration-300 origin-center ${
                    mobileOpen
                      ? '-rotate-45 -translate-y-[7px] bg-white'
                      : scrolled
                      ? 'bg-ink'
                      : 'bg-white'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[998] lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer */}
      <nav
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-primary z-[999] lg:hidden transition-transform duration-[350ms] cubic-bezier(0.4,0,0.2,1) flex flex-col ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-8 pt-6 pb-4 border-b border-white/10">
          <span className="font-serif font-bold text-white text-lg">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white/70 hover:text-white"
            aria-label="Tutup Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto px-8 py-4">
          {navItems.map((item) => (
            <li key={item.label} className="border-b border-white/10">
              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                    className="flex w-full items-center justify-between py-4 text-white/88 text-base font-medium hover:text-accent transition-colors"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileExpanded === item.label ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileExpanded === item.label && (
                    <ul className="pb-3 pl-4 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-2 text-white/70 text-sm hover:text-accent transition-colors"
                          >
                            → {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`block py-4 text-base font-medium transition-colors ${
                    isActive(item.href) ? 'text-accent' : 'text-white/88 hover:text-accent'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="px-8 pb-8 pt-4">
          <Link
            href="/kontak"
            className="btn-primary w-full text-center justify-center"
          >
            Kontak Kami
          </Link>
        </div>
      </nav>
    </>
  )
}

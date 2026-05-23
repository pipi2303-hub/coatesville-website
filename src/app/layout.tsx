import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ui/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Portal RW 44 – Coatesville Kota Wisata',
    template: '%s | Portal RW 44 Coatesville',
  },
  description:
    'Portal komunitas digital RW 44 Coatesville Kota Wisata – informasi warga, kegiatan, pelayanan, dan transparansi untuk komunitas perumahan yang modern.',
  keywords: ['RW 44', 'Coatesville', 'Kota Wisata', 'Posyandu Sehat Ceria', 'portal komunitas', 'Gunung Putri', 'Bogor'],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'Portal RW 44 Coatesville',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

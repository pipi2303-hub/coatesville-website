import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import AnnouncementBanner from '@/components/ui/AnnouncementBanner'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-[1000]">
        <AnnouncementBanner />
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

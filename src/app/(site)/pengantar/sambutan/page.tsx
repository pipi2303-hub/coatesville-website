import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Sambutan Ketua RW 44',
  description: 'Sambutan resmi Ketua RW 44 Coatesville — visi kepemimpinan dan komitmen untuk warga.',
}

export default function SambutanPage() {
  return (
    <>
      <PageHero
        tag="Pengantar"
        title="Sambutan Ketua RW 44"
        subtitle="Pesan dan harapan dari Ketua RW 44 Coatesville untuk seluruh warga komunitas."
        breadcrumb={[{ label: 'Home' }, { label: 'Pengantar' }, { label: 'Sambutan' }]}
      />

      <section className="section bg-white">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Foto & identitas */}
            <AnimateOnScroll className="lg:sticky lg:top-28">
              <div className="bg-bg rounded-2xl p-6 shadow-card text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-primary/20">
                  <Image src="https://picsum.photos/seed/ketua-rw/300/300" alt="Ketua RW 44" width={128} height={128} className="object-cover" />
                </div>
                <h3 className="text-lg mb-1">Segera Tersedia</h3>
                <p className="text-sm text-accent font-semibold mb-1">Ketua RW 44 Coatesville</p>
                <p className="text-xs text-muted">Periode 2024–2026</p>
                <div className="mt-5 border-t border-border pt-4 space-y-2 text-left">
                  <div className="flex gap-3 text-xs"><span className="text-muted w-20">Wilayah</span><span className="font-medium text-ink">RW 44 Coatesville</span></div>
                  <div className="flex gap-3 text-xs"><span className="text-muted w-20">Kelurahan</span><span className="font-medium text-ink">Cibubur</span></div>
                  <div className="flex gap-3 text-xs"><span className="text-muted w-20">Kecamatan</span><span className="font-medium text-ink">Ciracas</span></div>
                  <div className="flex gap-3 text-xs"><span className="text-muted w-20">Kota</span><span className="font-medium text-ink">Jakarta Timur</span></div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Isi sambutan */}
            <AnimateOnScroll delay={120} className="lg:col-span-2">
              <div className="section-tag mb-3">Sambutan Resmi</div>
              <h2 className="mb-3">Assalamu&apos;alaikum Warahmatullahi Wabarakatuh</h2>
              <div className="divider divider-left mb-6" />

              <div className="prose prose-sm max-w-none space-y-4 text-ink/80 leading-relaxed">
                <p>Dengan mengucap syukur kepada Allah SWT, Tuhan Yang Maha Esa, kami selaku Pengurus RW 44 Coatesville merasa bangga dapat mempersembahkan portal informasi digital bagi seluruh warga komunitas yang kami cintai.</p>
                <p>Portal ini hadir sebagai wujud komitmen kami untuk meningkatkan transparansi, akuntabilitas, dan keterbukaan informasi kepada seluruh warga RW 44 Coatesville. Kami percaya bahwa komunikasi yang baik adalah fondasi dari komunitas yang kuat dan harmonis.</p>
                <p>Dalam kepemimpinan periode 2024–2026 ini, kami berkomitmen untuk mewujudkan visi RW 44 Coatesville sebagai komunitas yang aman, bersih, sehat, dan harmonis. Program-program unggulan telah kami siapkan untuk memenuhi kebutuhan warga di berbagai bidang — mulai dari keamanan, kebersihan, kesehatan melalui Posyandu Sehat Ceria, hingga kegiatan sosial dan olahraga yang mempererat tali persaudaraan.</p>
                <p>Keberhasilan komunitas RW 44 bukanlah prestasi pengurus semata, melainkan hasil kolaborasi dan partisipasi aktif seluruh warga. Kami mengundang setiap warga untuk turut serta dalam setiap program dan kegiatan, menyampaikan aspirasi, serta bersama-sama membangun komunitas yang kita banggakan.</p>
                <p>Akhir kata, kami mengucapkan terima kasih atas kepercayaan dan dukungan seluruh warga RW 44 Coatesville. Semoga Allah SWT senantiasa memberkahi langkah-langkah kita dalam membangun komunitas yang lebih baik.</p>

                <blockquote className="border-l-4 border-primary/30 pl-5 py-2 bg-bg rounded-r-xl not-italic">
                  <p className="text-primary font-serif italic text-base">&ldquo;Bersama Membangun Komunitas RW 44 yang Aman, Bersih, Sehat, dan Harmonis.&rdquo;</p>
                </blockquote>

                <p>Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh.</p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs text-muted mb-1">Jakarta Timur, Januari 2024</p>
                <p className="text-xs text-muted mb-4">Ketua RW 44 Coatesville</p>
                <div className="w-32 h-12 bg-border/50 rounded flex items-center justify-center mb-3">
                  <span className="text-[0.6rem] text-muted">[ Tanda Tangan ]</span>
                </div>
                <p className="font-semibold text-ink">Segera Tersedia</p>
              </div>

              <div className="mt-8 flex gap-3">
                <Link href="/pengantar" className="btn-outline-green">← Kembali ke Pengantar</Link>
                <Link href="/pengantar/video" className="btn-primary">Video Sambutan →</Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}

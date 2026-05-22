import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Feedback & Pengaduan',
  description: 'Sampaikan masukan dan pengaduan Anda kepada pengurus RW 44 Coatesville.',
}

export default function FeedbackPage() {
  return (
    <>
      <PageHero
        tag="Feedback & Pengaduan"
        title="Suara Warga RW 44"
        subtitle="Sampaikan masukan, saran, atau pengaduan Anda. Setiap suara warga adalah prioritas kami."
        breadcrumb={[{ label: 'Home' }, { label: 'Feedback & Pengaduan' }]}
      />

      <section className="section bg-bg">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Feedback */}
            <AnimateOnScroll>
              <div className="bg-white rounded-3xl p-8 shadow-card-lg flex flex-col h-full">
                <div className="text-4xl mb-4">💬</div>
                <div className="section-tag mb-2">Feedback Umum</div>
                <h3 className="text-xl mb-3">Berikan Masukan & Saran</h3>
                <p className="text-sm mb-6 flex-1">
                  Bantu kami meningkatkan layanan dan program komunitas RW 44 dengan masukan yang konstruktif.
                </p>
                <form className="space-y-3">
                  <input type="text" placeholder="Nama Anda" className="w-full px-4 py-3 text-sm rounded-xl border border-border focus:outline-none focus:border-primary-mid" />
                  <select className="w-full px-4 py-3 text-sm rounded-xl border border-border focus:outline-none focus:border-primary-mid bg-white">
                    <option value="">Pilih kategori feedback...</option>
                    <option>Program Posyandu</option>
                    <option>Infrastruktur</option>
                    <option>Keamanan</option>
                    <option>Kegiatan Komunitas</option>
                    <option>Lainnya</option>
                  </select>
                  <textarea rows={4} placeholder="Tuliskan masukan atau saran Anda..." className="w-full px-4 py-3 text-sm rounded-xl border border-border focus:outline-none focus:border-primary-mid resize-none" />
                  <button type="submit" className="btn-primary w-full justify-center">Kirim Feedback</button>
                </form>
              </div>
            </AnimateOnScroll>

            {/* Pengaduan */}
            <AnimateOnScroll delay={150}>
              <div className="bg-white rounded-3xl p-8 shadow-card-lg flex flex-col h-full">
                <div className="text-4xl mb-4">🚨</div>
                <div className="section-tag mb-2">Pengaduan</div>
                <h3 className="text-xl mb-3">Laporkan Masalah</h3>
                <p className="text-sm mb-6 flex-1">
                  Laporkan masalah infrastruktur, keamanan, atau permasalahan komunitas lainnya. Pengaduan Anda akan ditindaklanjuti.
                </p>
                <form className="space-y-3">
                  <input type="text" placeholder="Nama Anda" className="w-full px-4 py-3 text-sm rounded-xl border border-border focus:outline-none focus:border-primary-mid" />
                  <input type="tel" placeholder="No. HP / WhatsApp" className="w-full px-4 py-3 text-sm rounded-xl border border-border focus:outline-none focus:border-primary-mid" />
                  <select className="w-full px-4 py-3 text-sm rounded-xl border border-border focus:outline-none focus:border-primary-mid bg-white">
                    <option value="">Pilih jenis pengaduan...</option>
                    <option>Infrastruktur Rusak</option>
                    <option>Keamanan & Ketertiban</option>
                    <option>Kebersihan Lingkungan</option>
                    <option>Gangguan Kebisingan</option>
                    <option>Lainnya</option>
                  </select>
                  <textarea rows={4} placeholder="Deskripsikan masalah secara detail..." className="w-full px-4 py-3 text-sm rounded-xl border border-border focus:outline-none focus:border-primary-mid resize-none" />
                  <button type="submit" className="btn-primary w-full justify-center">Kirim Pengaduan</button>
                </form>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll>
            <div className="bg-primary rounded-2xl p-6 text-white flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
              <div className="text-4xl">📞</div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1">Butuh Respon Cepat?</h4>
                <p className="text-white/65 text-sm">Untuk keadaan darurat, hubungi langsung pengurus RW 44 atau pos sekuriti Coatesville.</p>
              </div>
              <Link href="/kontak" className="btn-primary flex-shrink-0">Lihat Kontak Darurat</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}

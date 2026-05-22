import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Pelayanan Warga',
  description: 'Layanan administrasi dan dokumen kependudukan untuk warga RW 44 Coatesville.',
}

const services = [
  { icon: '📄', title: 'Surat Keterangan', desc: 'Permohonan surat keterangan domisili, keterangan usaha, dan surat keterangan lainnya.', status: 'coming' },
  { icon: '✉️', title: 'Surat Pengantar', desc: 'Pengurusan surat pengantar untuk berbagai keperluan administrasi kependudukan.', status: 'coming' },
  { icon: '📊', title: 'Pendataan & Survey', desc: 'Pendataan warga, survey kebutuhan komunitas, dan sensus penduduk RW 44.', status: 'coming' },
  { icon: '🗄️', title: 'Arsip & Dokumentasi', desc: 'Pengelolaan dokumen dan arsip administrasi RW 44 secara digital.', status: 'coming' },
]

export default function PelayananPage() {
  return (
    <>
      <PageHero
        tag="Pelayanan Warga"
        title="Layanan Administrasi & Dokumen"
        subtitle="Akses layanan administrasi kependudukan RW 44 Coatesville secara mudah dan efisien."
        breadcrumb={[{ label: 'Home' }, { label: 'Pelayanan' }]}
      />

      <section className="section bg-bg">
        <div className="container">
          <SectionHeader
            tag="Admin Duk"
            title="Layanan Administrasi Kependudukan"
            subtitle="Pengurus RW 44 siap membantu kebutuhan administrasi dokumen kependudukan warga."
          />

          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {services.map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl p-7 shadow-card flex gap-5 items-start">
                  <div className="w-12 h-12 bg-accent-pale rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base">{s.title}</h3>
                      <span className="text-[0.6rem] bg-yellow-50 text-yellow-600 border border-yellow-200 font-bold px-2 py-0.5 rounded-full uppercase">
                        Segera Hadir
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* CTA */}
          <AnimateOnScroll>
            <div className="bg-primary rounded-3xl p-10 text-center text-white">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-white text-xl mb-3">Butuh Bantuan Administrasi?</h3>
              <p className="text-white/65 text-sm mb-6 max-w-md mx-auto">
                Sementara layanan online dalam pengembangan, Anda dapat langsung menghubungi pengurus RW 44.
              </p>
              <Link href="/kontak" className="btn-primary">
                Hubungi Pengurus RW →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Infrastruktur',
  description: 'Kondisi dan status infrastruktur RW 44 Coatesville — pos sekuriti, jalan, taman, lapangan, lampu, dan CCTV.',
}

const infra = [
  { icon: '🔒', title: 'Pos Sekuriti', status: 'Baik', color: 'bg-green-100 text-green-700', desc: 'Sistem keamanan 24 jam dengan petugas terlatih yang berjaga di setiap pos masuk.', href: '/infrastruktur/pos-sekuriti', img: 'infra-sekuriti' },
  { icon: '🛣️', title: 'Jalan Kompleks', status: 'Baik', color: 'bg-green-100 text-green-700', desc: 'Kondisi jalan kompleks dalam kondisi baik setelah perbaikan tahap II selesai dilakukan.', href: '/infrastruktur/jalan', img: 'infra-jalan' },
  { icon: '🌳', title: 'Taman & Gazebo', status: 'Baik', color: 'bg-green-100 text-green-700', desc: 'Taman dan gazebo terawat sebagai area rekreasi dan interaksi sosial warga.', href: '/infrastruktur/taman', img: 'infra-taman' },
  { icon: '⚽', title: 'Lapangan Olahraga', status: 'Maintenance', color: 'bg-yellow-100 text-yellow-700', desc: 'Lapangan multifungsi untuk berbagai kegiatan olahraga warga. Sedang dalam perawatan rutin.', href: '/infrastruktur/lapangan', img: 'infra-lapangan' },
  { icon: '💡', title: 'Lampu Penerangan', status: 'Baik', color: 'bg-green-100 text-green-700', desc: 'Penerangan jalan kompleks berfungsi optimal untuk keamanan dan kenyamanan warga.', href: '/infrastruktur/lampu', img: 'infra-lampu' },
  { icon: '📹', title: 'CCTV', status: 'Baik', color: 'bg-green-100 text-green-700', desc: 'Sistem CCTV terpasang di titik-titik strategis untuk pengawasan keamanan kawasan.', href: '/infrastruktur/cctv', img: 'infra-cctv' },
]

export default function InfrastrukturPage() {
  return (
    <>
      <PageHero
        tag="Infrastruktur"
        title="Kondisi Infrastruktur RW 44"
        subtitle="Pantau kondisi dan status infrastruktur komunitas Coatesville secara transparan dan real-time."
        breadcrumb={[{ label: 'Home' }, { label: 'Infrastruktur' }]}
      />

      {/* Status Overview */}
      <section className="bg-white border-b border-border py-6">
        <div className="container">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
            {[
              { label: 'Total Infrastruktur', val: '6', color: 'text-primary' },
              { label: 'Kondisi Baik', val: '5', color: 'text-green-600' },
              { label: 'Maintenance', val: '1', color: 'text-yellow-600' },
              { label: 'Perlu Perbaikan', val: '0', color: 'text-red-600' },
              { label: 'Laporan Masuk', val: '3', color: 'text-blue-600' },
              { label: 'Selesai Ditangani', val: '12', color: 'text-primary-mid' },
            ].map((s) => (
              <div key={s.label} className="py-3">
                <div className={`text-2xl font-serif font-bold ${s.color}`}>{s.val}</div>
                <div className="text-[0.65rem] text-muted mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-bg">
        <div className="container">
          <SectionHeader
            tag="Status Infrastruktur"
            title="Pantau Kondisi Fasilitas Komunitas"
            subtitle="Klik pada setiap fasilitas untuk melihat detail kondisi, riwayat pemeliharaan, dan galeri foto."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infra.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-card hover:-translate-y-1 hover:shadow-card-lg transition-all duration-300">
                  <Link href={item.href} className="block">
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <Image
                        src={`https://picsum.photos/seed/${item.img}/600/340`}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.color}`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 pb-3">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">{item.icon}</span>
                        <h3 className="text-base">{item.title}</h3>
                      </div>
                      <p className="text-xs leading-relaxed mb-3">{item.desc}</p>
                      <span className="text-accent font-semibold text-xs group-hover:text-primary transition-colors">
                        Detail & Galeri →
                      </span>
                    </div>
                  </Link>
                  <div className="px-6 pb-5 pt-2 border-t border-border">
                    <Link
                      href="/feedback"
                      className="text-xs bg-red-50 text-red-600 font-semibold px-3 py-1.5 rounded-full hover:bg-red-100 transition-colors inline-block"
                    >
                      Laporkan Masalah
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

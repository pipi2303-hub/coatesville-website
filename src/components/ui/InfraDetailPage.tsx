import Image from 'next/image'
import Link from 'next/link'
import PageHero from './PageHero'
import SectionHeader from './SectionHeader'
import AnimateOnScroll from './AnimateOnScroll'

interface MaintenanceRecord {
  date: string
  desc: string
  status: 'selesai' | 'proses' | 'terjadwal'
}

interface Props {
  icon: string
  title: string
  status: 'Baik' | 'Maintenance' | 'Perlu Perbaikan'
  desc: string
  longDesc: string
  location: string
  specs: { label: string; value: string }[]
  maintenance: MaintenanceRecord[]
  imgSeed: string
  gallerySeeds: string[]
}

const statusColor = {
  Baik: 'bg-green-100 text-green-700 border-green-200',
  Maintenance: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  'Perlu Perbaikan': 'bg-red-100 text-red-700 border-red-200',
}

const maintenanceColor = {
  selesai: 'bg-green-100 text-green-700',
  proses: 'bg-yellow-100 text-yellow-700',
  terjadwal: 'bg-blue-100 text-blue-700',
}

export default function InfraDetailPage({
  icon, title, status, desc, longDesc, location, specs, maintenance, imgSeed, gallerySeeds,
}: Props) {
  return (
    <>
      <PageHero
        tag="Infrastruktur"
        title={title}
        subtitle={desc}
        breadcrumb={[{ label: 'Home' }, { label: 'Infrastruktur' }, { label: title }]}
      />

      {/* Status bar */}
      <section className="bg-white border-b border-border py-5">
        <div className="container flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{icon}</span>
            <div>
              <div className="font-semibold text-primary text-base">{title}</div>
              <div className="text-muted text-xs">📍 {location}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className={`text-sm font-bold px-4 py-1.5 rounded-full border ${statusColor[status]}`}>
              Status: {status}
            </span>
            <Link href="/feedback" className="text-xs bg-red-50 text-red-600 font-semibold px-4 py-1.5 rounded-full border border-red-200 hover:bg-red-100 transition-colors">
              Laporkan Masalah
            </Link>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section bg-bg">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left: description + maintenance */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hero image */}
              <AnimateOnScroll>
                <div className="rounded-2xl overflow-hidden shadow-card-lg aspect-[16/9] relative">
                  <Image
                    src={`https://picsum.photos/seed/${imgSeed}-main/1200/675`}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </AnimateOnScroll>

              {/* Description */}
              <AnimateOnScroll>
                <div className="bg-white rounded-2xl p-7 shadow-card">
                  <div className="section-tag mb-3">Deskripsi</div>
                  <h3 className="text-xl mb-3">{title}</h3>
                  <div className="divider divider-left mb-4" />
                  <p className="text-sm leading-relaxed">{longDesc}</p>
                </div>
              </AnimateOnScroll>

              {/* Maintenance history */}
              <AnimateOnScroll>
                <div className="bg-white rounded-2xl p-7 shadow-card">
                  <div className="section-tag mb-4">Riwayat Pemeliharaan</div>
                  <div className="space-y-3">
                    {maintenance.map((m, i) => (
                      <div key={i} className="flex gap-4 items-start py-3 border-b border-border last:border-0">
                        <div className="w-28 flex-shrink-0 text-xs text-muted font-mono">{m.date}</div>
                        <div className="flex-1 text-sm">{m.desc}</div>
                        <span className={`text-[0.65rem] font-bold px-2.5 py-0.5 rounded-full flex-shrink-0 ${maintenanceColor[m.status]}`}>
                          {m.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Gallery */}
              <AnimateOnScroll>
                <div className="bg-white rounded-2xl p-7 shadow-card">
                  <div className="section-tag mb-4">Galeri Foto</div>
                  <div className="grid grid-cols-3 gap-3">
                    {gallerySeeds.map((seed, i) => (
                      <div key={i} className="aspect-square relative rounded-xl overflow-hidden">
                        <Image
                          src={`https://picsum.photos/seed/${seed}/400/400`}
                          alt={`${title} ${i + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right: specs */}
            <div className="space-y-5">
              <AnimateOnScroll>
                <div className="bg-white rounded-2xl p-6 shadow-card sticky top-28">
                  <div className="section-tag mb-4">Spesifikasi</div>
                  <dl className="space-y-3">
                    {specs.map((s) => (
                      <div key={s.label} className="flex flex-col gap-0.5 pb-3 border-b border-border last:border-0">
                        <dt className="text-[0.7rem] font-bold text-muted uppercase tracking-wider">{s.label}</dt>
                        <dd className="text-sm font-semibold text-primary">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-6 pt-4 border-t border-border">
                    <Link href="/infrastruktur" className="btn-outline-green w-full justify-center">
                      ← Semua Infrastruktur
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

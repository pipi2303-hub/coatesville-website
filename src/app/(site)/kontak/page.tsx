import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Kontak Kami',
  description:
    'Hubungi Portal RW 44 Coatesville. Gedung Serba Guna, Jalan Taman Phase 2 Coatesville, Kel. Ciangsana, Kec. Gunung Putri, Kab. Bogor.',
}

const infoKontak = [
  {
    icon: '📍',
    title: 'Alamat',
    content: (
      <>
        Gedung Serba Guna<br />
        Kota Wisata, Cluster Coatesville<br />
        Jalan Taman Phase 2 Coatesville<br />
        Kel. Ciangsana, Kec. Gunung Putri<br />
        Kab. Bogor, Jawa Barat 16968
      </>
    ),
  },
  {
    icon: '📞',
    title: 'Hotline Service',
    content: (
      <>
        <span className="inline-block bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
          Segera Tersedia
        </span>
        <span className="block text-xs mt-2 text-muted">Nomor hotline sedang dalam proses pengadaan</span>
      </>
    ),
  },
  {
    icon: '🕐',
    title: 'Jadwal Pelayanan',
    content: (
      <>
        Hari Posyandu: Sesuai jadwal bulanan<br />
        Konsultasi: Hari kerja & akhir pekan<br />
        <span className="text-xs mt-1 block">Cek informasi terbaru di grup warga RW 44</span>
      </>
    ),
  },
  {
    icon: '👥',
    title: 'Pengurus RW',
    content: 'Hubungi pengurus RW 44 atau kader posyandu untuk informasi lebih lanjut mengenai jadwal dan layanan yang tersedia.',
  },
]

const socialMedia = [
  { label: 'Facebook', handle: 'Portal RW 44 Coatesville', bg: 'from-blue-500 to-blue-700', icon: 'f' },
  { label: 'Instagram', handle: '@portalrw44.coatesville', bg: 'from-pink-500 to-purple-600', icon: 'ig' },
  { label: 'WhatsApp', handle: 'Segera Tersedia', bg: 'from-green-500 to-green-700', icon: 'wa' },
  { label: 'YouTube', handle: 'Portal RW 44 Coatesville', bg: 'from-red-500 to-red-700', icon: 'yt' },
]

const kontakPenting = [
  { label: 'Pos Sekuriti', value: 'Segera Tersedia', icon: '🔒' },
  { label: 'Ketua RW 44', value: 'Segera Tersedia', icon: '🏘️' },
  { label: 'Posyandu Sehat Ceria', value: 'Segera Tersedia', icon: '🏥' },
  { label: 'Pemadam Kebakaran', value: '113', icon: '🚒' },
  { label: 'Polisi', value: '110', icon: '🚔' },
  { label: 'Ambulans', value: '118', icon: '🚑' },
]

export default function KontakPage() {
  return (
    <>
      <PageHero
        tag="Hubungi Kami"
        title="Kontak & Informasi"
        subtitle="Portal RW 44 siap melayani Anda. Kunjungi kami atau kirim pesan — kami dengan senang hati akan membantu."
        breadcrumb={[{ label: 'Home' }, { label: 'Kontak Kami' }]}
      />

      {/* Kontak Penting */}
      <section className="section bg-bg">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info Cards */}
            <AnimateOnScroll>
              <div className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-card mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-accent/20">
                  <Image
                    src="/images/logo-posyandu.jpeg"
                    alt="Logo Portal RW 44"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="font-serif font-bold text-primary text-lg">Portal RW 44</div>
                  <div className="text-muted text-sm">Coatesville Kota Wisata</div>
                </div>
              </div>

              <div className="section-tag mb-5">Informasi Kontak</div>

              <div className="space-y-4">
                {infoKontak.map((k) => (
                  <div
                    key={k.title}
                    className="flex gap-4 bg-white rounded-2xl p-5 shadow-card"
                  >
                    <div className="w-11 h-11 bg-accent-pale rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                      {k.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">{k.title}</h4>
                      <p className="text-xs leading-relaxed">{k.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Form */}
            <AnimateOnScroll delay={150}>
              <div className="bg-white rounded-3xl p-8 shadow-card-lg">
                <div className="section-tag mb-2">Kirim Pesan & Feedback</div>
                <h3 className="text-lg mb-1">Ada Pertanyaan atau Masukan?</h3>
                <p className="text-xs mb-6">
                  Sampaikan pertanyaan, masukan, atau saran Anda. Kami akan merespons secepatnya.
                </p>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-ink mb-1.5">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        placeholder="Masukkan nama Anda"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-border focus:outline-none focus:border-primary-mid transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ink mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="email@anda.com"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-border focus:outline-none focus:border-primary-mid transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-ink mb-1.5">
                        No. HP / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        placeholder="08xx-xxxx-xxxx"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-border focus:outline-none focus:border-primary-mid transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ink mb-1.5">
                        Perihal *
                      </label>
                      <select className="w-full px-4 py-3 text-sm rounded-xl border border-border focus:outline-none focus:border-primary-mid transition-colors bg-white">
                        <option value="">Pilih perihal...</option>
                        <option>Informasi Layanan</option>
                        <option>Jadwal Kegiatan</option>
                        <option>Pengaduan</option>
                        <option>Bergabung Kader</option>
                        <option>Masukan & Saran</option>
                        <option>Lainnya</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-ink mb-1.5">
                      Pesan / Feedback *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tuliskan pesan, pertanyaan, atau masukan Anda di sini..."
                      className="w-full px-4 py-3 text-sm rounded-xl border border-border focus:outline-none focus:border-primary-mid transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Kontak Darurat */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            tag="Kontak Penting"
            title="Nomor & Kontak yang Perlu Diketahui"
            subtitle="Simpan nomor-nomor penting ini untuk keperluan darurat dan layanan komunitas."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {kontakPenting.map((k, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="bg-bg rounded-2xl p-5 shadow-card text-center hover:-translate-y-1 hover:shadow-card-lg transition-all duration-300">
                  <div className="text-3xl mb-3">{k.icon}</div>
                  <h4 className="text-sm font-semibold text-primary mb-1">{k.label}</h4>
                  <p className="text-xs font-mono text-accent font-bold">{k.value}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Peta */}
      <section className="section bg-bg">
        <div className="container">
          <SectionHeader
            tag="Lokasi Kami"
            title="Temukan Kami di Coatesville Kota Wisata"
            subtitle="Gedung Serba Guna, Jalan Taman Phase 2 Coatesville, Kel. Ciangsana, Kec. Gunung Putri, Kab. Bogor, Jawa Barat 16968"
          />
          <AnimateOnScroll>
            <div className="rounded-2xl overflow-hidden shadow-card-lg aspect-[16/6] bg-bg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5!2d106.9950!3d-6.3720!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69917ef8c3ef79%3A0xf1a1e43a0f8e2dfa!2sKota%20Wisata%2C%20Cileungsi!5e0!3m2!1sid!2sid!4v1715000000000!5m2!1sid!2sid"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Portal RW 44 Coatesville"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Media Sosial */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            tag="Media Sosial"
            title="Ikuti Kami di Media Sosial"
            subtitle="Dapatkan informasi terbaru, jadwal kegiatan, dan update komunitas RW 44 langsung di media sosial kami."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {socialMedia.map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <a
                  href="#"
                  className="group bg-bg rounded-2xl p-6 shadow-card text-center hover:-translate-y-1 hover:shadow-card-lg transition-all duration-300 block"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.bg} flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {s.icon}
                  </div>
                  <h3 className="text-base mb-1">{s.label}</h3>
                  <p className="text-xs">{s.handle}</p>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp floating hint */}
      <section className="bg-primary py-10">
        <div className="container text-center">
          <p className="text-white/70 text-sm mb-3">Butuh bantuan cepat?</p>
          <a
            href="https://wa.me/"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
          >
            <span className="text-lg">💬</span> Chat via WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}

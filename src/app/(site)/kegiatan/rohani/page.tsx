import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Pembinaan Rohani',
  description: 'Kegiatan pembinaan rohani warga RW 44 Coatesville — pengajian, ibadah bersama, dan kerukunan umat beragama.',
}

const programs = [
  { icon: '🕌', title: 'Pengajian Rutin', desc: 'Pengajian mingguan dengan ustaz/ustazah terpilih untuk meningkatkan pemahaman dan pengamalan ajaran Islam di lingkungan RW 44.', peserta: 'Warga Muslim', jadwal: 'Minggu, 08.00 WIB' },
  { icon: '📖', title: 'Tadarus & Tahsin Al-Quran', desc: 'Program membaca dan memperbaiki bacaan Al-Quran bersama — terbuka untuk anak-anak, remaja, dan dewasa.', peserta: 'Semua Usia (Muslim)', jadwal: 'Senin & Kamis, 19.00 WIB' },
  { icon: '⛪', title: 'Ibadah Bersama (Non-Muslim)', desc: 'Kegiatan ibadah dan persekutuan bersama bagi warga RW 44 yang beragama Kristen, Katolik, Hindu, dan Buddha.', peserta: 'Warga Non-Muslim', jadwal: 'Menyesuaikan' },
  { icon: '🤝', title: 'Dialog Kerukunan', desc: 'Forum dialog antarumat beragama untuk mempererat tali persaudaraan dan menjaga keharmonisan komunitas RW 44.', peserta: 'Semua Warga', jadwal: 'Triwulan' },
  { icon: '🎓', title: 'Kajian Remaja', desc: 'Kajian keagamaan khusus remaja untuk membentuk karakter, akhlak mulia, dan fondasi spiritual yang kuat.', peserta: 'Remaja (12–25 thn)', jadwal: 'Sabtu, 16.00 WIB' },
  { icon: '🍽️', title: 'Buka Puasa & Sahur Bersama', desc: 'Kegiatan buka puasa bersama dan sahur berjamaah di bulan Ramadhan untuk mempererat ukhuwah komunitas.', peserta: 'Semua Warga', jadwal: 'Bulan Ramadhan' },
]

export default function RohaniPage() {
  return (
    <>
      <PageHero
        tag="Kegiatan"
        title="Pembinaan Rohani RW 44"
        subtitle="Memperkuat iman, mempererat ukhuwah, dan menjaga kerukunan antarumat beragama di komunitas Coatesville."
        breadcrumb={[{ label: 'Home' }, { label: 'Kegiatan' }, { label: 'Pembinaan Rohani' }]}
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimateOnScroll>
              <div className="section-tag mb-3">Komitmen Kami</div>
              <h2 className="mb-3">Komunitas yang Harmonis & Bertakwa</h2>
              <div className="divider divider-left mb-5" />
              <p>Program pembinaan rohani RW 44 Coatesville mencerminkan komitmen komunitas untuk menjaga nilai-nilai spiritual dan kerukunan antarumat beragama. Kami percaya bahwa komunitas yang kuat dibangun di atas fondasi spiritual yang kokoh dan rasa saling menghormati.</p>
              <p className="mt-3">Kegiatan rohani dirancang inklusif — memfasilitasi warga Muslim maupun Non-Muslim agar dapat menjalankan ibadah dan pembinaan spiritual sesuai keyakinan masing-masing dalam suasana yang harmonis.</p>
              <div className="mt-6 flex gap-4">
                <div className="text-center bg-bg rounded-xl p-4 flex-1">
                  <div className="text-2xl font-serif font-bold text-primary">6</div>
                  <div className="text-[0.65rem] text-muted">Program Aktif</div>
                </div>
                <div className="text-center bg-bg rounded-xl p-4 flex-1">
                  <div className="text-2xl font-serif font-bold text-primary">2</div>
                  <div className="text-[0.65rem] text-muted">Kelompok Agama</div>
                </div>
                <div className="text-center bg-bg rounded-xl p-4 flex-1">
                  <div className="text-2xl font-serif font-bold text-primary">Harmonis</div>
                  <div className="text-[0.65rem] text-muted">Kerukunan</div>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={150} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-lg aspect-[4/3]">
                <Image src="https://picsum.photos/seed/rohani-hero/800/600" alt="Pembinaan Rohani" fill className="object-cover" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="section bg-bg">
        <div className="container">
          <SectionHeader tag="Program Rohani" title="6 Program Pembinaan Rohani" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((p, i) => (
              <AnimateOnScroll key={i} delay={i * 70}>
                <div className="bg-white rounded-2xl p-6 shadow-card hover:-translate-y-1 hover:shadow-card-lg transition-all duration-300">
                  <div className="text-4xl mb-4">{p.icon}</div>
                  <h3 className="text-base mb-2">{p.title}</h3>
                  <p className="text-xs leading-relaxed mb-4">{p.desc}</p>
                  <div className="space-y-1 border-t border-border pt-3">
                    <div className="flex gap-2 text-xs"><span className="text-accent font-semibold w-16">Peserta</span><span className="text-muted">{p.peserta}</span></div>
                    <div className="flex gap-2 text-xs"><span className="text-accent font-semibold w-16">Jadwal</span><span className="text-muted">{p.jadwal}</span></div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cta-gradient py-16 text-center">
        <div className="container">
          <h2 className="text-white mb-4">Bergabung dalam Kegiatan Rohani</h2>
          <p className="text-white/65 mb-7 text-sm max-w-md mx-auto">Terbuka untuk semua warga RW 44 Coatesville yang ingin memperkuat spiritualitas dan kebersamaan.</p>
          <Link href="/kontak" className="btn-primary">Informasi Lebih Lanjut</Link>
        </div>
      </section>
    </>
  )
}

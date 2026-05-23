import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import FaqAccordion from '@/components/ui/FaqAccordion'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Pertanyaan yang sering diajukan mengenai RW 44 Coatesville dan Posyandu Sehat Ceria.',
}

const faqData = [
  {
    cat: 'Umum',
    items: [
      { q: 'Apa itu Portal RW 44 Coatesville?', a: 'Portal RW 44 Coatesville adalah platform digital resmi komunitas perumahan Coatesville, Kota Wisata. Portal ini menjadi pusat informasi, kegiatan, pelayanan, dan transparansi untuk seluruh warga RW 44.' },
      { q: 'Siapa yang bisa mengakses portal ini?', a: 'Portal ini dapat diakses oleh seluruh warga perumahan Coatesville RW 44 dan masyarakat umum yang ingin mengetahui informasi tentang komunitas kami.' },
      { q: 'Bagaimana cara mendapatkan informasi terbaru?', a: 'Anda dapat mengakses halaman News & Updates di portal ini, atau mengikuti media sosial resmi RW 44 Coatesville untuk mendapatkan informasi dan pengumuman terkini.' },
    ],
  },
  {
    cat: 'Posyandu',
    items: [
      { q: 'Kapan jadwal Posyandu Sehat Ceria?', a: 'Jadwal Posyandu Sehat Ceria dilaksanakan setiap bulan sesuai jadwal yang ditetapkan. Informasi jadwal terbaru dapat ditemukan di halaman News & Updates atau grup warga RW 44.' },
      { q: 'Siapa saja yang dapat menggunakan layanan Posyandu?', a: 'Posyandu Sehat Ceria melayani seluruh warga RW 44 dari semua kelompok usia — ibu hamil, bayi & balita, anak & remaja, usia produktif & dewasa, serta lansia.' },
      { q: 'Apakah layanan Posyandu gratis?', a: 'Ya, sebagian besar layanan dasar Posyandu Sehat Ceria diberikan secara gratis atau dengan biaya yang sangat terjangkau untuk warga RW 44 Coatesville.' },
    ],
  },
  {
    cat: 'Pelayanan & Administrasi',
    items: [
      { q: 'Bagaimana cara mengurus surat keterangan?', a: 'Untuk mengurus surat keterangan, hubungi pengurus RW 44 secara langsung atau melalui halaman Kontak kami. Layanan online administrasi sedang dalam pengembangan.' },
      { q: 'Bagaimana cara menyampaikan pengaduan?', a: 'Pengaduan dapat disampaikan melalui halaman Feedback & Pengaduan di portal ini, atau menghubungi langsung pengurus RW 44 melalui halaman Kontak.' },
    ],
  },
  {
    cat: 'Kegiatan',
    items: [
      { q: 'Bagaimana cara bergabung dengan kegiatan komunitas?', a: 'Seluruh warga RW 44 dapat mengikuti kegiatan komunitas. Informasi jadwal dan pendaftaran tersedia di halaman Kegiatan atau dapat ditanyakan kepada koordinator masing-masing program.' },
      { q: 'Apakah ada biaya untuk mengikuti kegiatan?', a: 'Sebagian besar kegiatan komunitas RW 44 bersifat sukarela dan tidak dipungut biaya. Beberapa kegiatan khusus mungkin memerlukan kontribusi kecil untuk biaya operasional.' },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      <PageHero
        tag="FAQ"
        title="Pertanyaan yang Sering Diajukan"
        subtitle="Temukan jawaban atas pertanyaan umum tentang Portal RW 44 Coatesville dan layanan komunitas kami."
        breadcrumb={[{ label: 'Home' }, { label: 'FAQ' }]}
      />

      <section className="section bg-bg">
        <div className="container max-w-3xl">
          {faqData.map((section, si) => (
            <AnimateOnScroll key={si} delay={si * 80} className="mb-8">
              <div className="section-tag mb-4">{section.cat}</div>
              <FaqAccordion items={section.items} />
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </>
  )
}

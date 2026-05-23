import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Peraturan & Kebijakan RW 44',
  description: 'Peraturan dan kebijakan resmi RW 44 Coatesville yang berlaku bagi seluruh warga.',
}

const peraturan = [
  {
    no: 'Perat/RW44/001/2024',
    title: 'Tata Tertib Keamanan Lingkungan RW 44',
    tgl: '5 Jan 2024',
    status: 'Berlaku',
    kat: 'Keamanan',
    ringkasan: 'Mengatur kewajiban pemasangan CCTV, tamu wajib lapor, jam malam anak, dan prosedur kedaruratan keamanan di lingkungan RW 44 Coatesville.',
  },
  {
    no: 'Perat/RW44/002/2024',
    title: 'Peraturan Kebersihan & Pengelolaan Sampah',
    tgl: '5 Jan 2024',
    status: 'Berlaku',
    kat: 'Lingkungan',
    ringkasan: 'Mengatur jadwal buang sampah, pemilahan sampah organik/anorganik, larangan membakar sampah, dan sanksi bagi pelanggar.',
  },
  {
    no: 'Perat/RW44/003/2024',
    title: 'Iuran Warga & Tata Cara Pembayaran',
    tgl: '10 Jan 2024',
    status: 'Berlaku',
    kat: 'Keuangan',
    ringkasan: 'Besaran iuran bulanan warga, jadwal pembayaran, mekanisme keringanan bagi warga tidak mampu, dan alokasi penggunaan iuran.',
  },
  {
    no: 'Perat/RW44/004/2024',
    title: 'Penggunaan Fasilitas Umum RW 44',
    tgl: '15 Jan 2024',
    status: 'Berlaku',
    kat: 'Fasilitas',
    ringkasan: 'Tata cara peminjaman lapangan, pos serbaguna, dan area komunal. Jam operasional, prosedur reservasi, dan tanggung jawab pengguna.',
  },
  {
    no: 'Perat/RW44/005/2024',
    title: 'Kegiatan Usaha & Renovasi Bangunan',
    tgl: '20 Jan 2024',
    status: 'Berlaku',
    kat: 'Perizinan',
    ringkasan: 'Persyaratan izin mendirikan usaha di lingkungan RW 44, batasan jam renovasi, kewajiban menjaga kebersihan saat konstruksi.',
  },
  {
    no: 'Perat/RW44/006/2024',
    title: 'Tata Tertib Berkendara dalam Lingkungan',
    tgl: '25 Jan 2024',
    status: 'Berlaku',
    kat: 'Lalu Lintas',
    ringkasan: 'Batas kecepatan kendaraan, larangan parkir sembarangan, jalur pejalan kaki, dan aturan kendaraan besar masuk lingkungan.',
  },
]

const katColor: Record<string, string> = {
  Keamanan: 'bg-blue-100 text-blue-700',
  Lingkungan: 'bg-green-100 text-green-700',
  Keuangan: 'bg-yellow-100 text-yellow-700',
  Fasilitas: 'bg-purple-100 text-purple-700',
  Perizinan: 'bg-orange-100 text-orange-700',
  'Lalu Lintas': 'bg-red-100 text-red-700',
}

export default function PeraturanPage() {
  return (
    <>
      <PageHero
        tag="Berita & Info"
        title="Peraturan & Kebijakan RW 44"
        subtitle="Peraturan resmi yang berlaku di lingkungan RW 44 Coatesville demi terciptanya komunitas yang aman, tertib, dan nyaman."
        breadcrumb={[{ label: 'Home' }, { label: 'Berita' }, { label: 'Peraturan' }]}
      />

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <AnimateOnScroll>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-5 mb-10 flex gap-4 items-start">
              <span className="text-2xl flex-shrink-0">📋</span>
              <div>
                <h4 className="text-sm font-semibold text-accent mb-1">Pemberitahuan Penting</h4>
                <p className="text-xs text-muted leading-relaxed">Seluruh peraturan di bawah ini berlaku untuk semua warga dan penghuni RW 44 Coatesville. Ketidaktahuan terhadap peraturan tidak dapat dijadikan alasan pembenar atas pelanggaran yang dilakukan. Untuk pertanyaan lebih lanjut, silakan hubungi Sekretariat RW 44.</p>
              </div>
            </div>
          </AnimateOnScroll>

          <SectionHeader tag="Daftar Peraturan" title="Peraturan RW 44 yang Berlaku" />

          <div className="space-y-4">
            {peraturan.map((p, i) => (
              <AnimateOnScroll key={i} delay={i * 70}>
                <div className="bg-bg rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-card-lg transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[0.6rem] font-bold px-2.5 py-0.5 rounded-full ${katColor[p.kat]}`}>{p.kat}</span>
                      <span className="text-[0.6rem] bg-green-100 text-green-700 font-bold px-2.5 py-0.5 rounded-full">✓ {p.status}</span>
                    </div>
                    <span className="text-xs text-muted">{p.tgl}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-ink mb-1">{p.title}</h4>
                  <p className="text-[0.65rem] font-mono text-muted mb-3">No. {p.no}</p>
                  <p className="text-xs text-muted leading-relaxed mb-4">{p.ringkasan}</p>
                  <button className="text-xs text-primary font-semibold hover:underline">↓ Unduh Dokumen Lengkap</button>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/berita" className="btn-outline-green">← Kembali ke Berita</Link>
          </div>
        </div>
      </section>
    </>
  )
}

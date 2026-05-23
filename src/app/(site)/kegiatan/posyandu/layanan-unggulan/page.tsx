import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import PosyanduSubnav from '../PosyanduSubnav'

export const metadata: Metadata = {
  title: 'Layanan Unggulan – Posyandu Sehat Ceria',
  description: '7 layanan unggulan Posyandu Sehat Ceria RW 44 Coatesville beserta jadwal, sasaran, dan cara mengaksesnya.',
}

const layanan = [
  {
    no: '01',
    icon: '🩺',
    title: 'Pemeriksaan Dasar',
    desc: 'Skrining kesehatan dasar rutin mencakup pengukuran tekanan darah, berat badan, tinggi badan, dan pemeriksaan kadar gula darah sederhana. Deteksi dini untuk mencegah penyakit berkembang.',
    jadwal: 'Setiap bulan, minggu pertama',
    sasaran: 'Semua usia',
    persyaratan: 'Tanpa persyaratan, langsung datang',
    color: 'border-blue-200',
    headerColor: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    items: ['Tekanan darah', 'Berat & tinggi badan', 'Kadar gula darah', 'Saturasi oksigen', 'Suhu tubuh'],
  },
  {
    no: '02',
    icon: '🏠',
    title: 'Kunjungan Rumah',
    desc: 'Kader kesehatan mengunjungi langsung rumah warga yang tidak dapat hadir ke posyandu karena kondisi tertentu — lansia, ibu nifas, atau pasien pasca sakit yang memerlukan pemantauan.',
    jadwal: 'Sesuai jadwal & permintaan',
    sasaran: 'Lansia, ibu nifas, pasien khusus',
    persyaratan: 'Daftar via WhatsApp pengurus',
    color: 'border-green-200',
    headerColor: 'bg-green-50',
    iconBg: 'bg-green-100',
    items: ['Pemantauan kondisi', 'Edukasi kesehatan', 'Pencatatan perkembangan', 'Rujukan bila diperlukan', 'Dukungan psikososial'],
  },
  {
    no: '03',
    icon: '🍱',
    title: 'Pemberian Makanan Tambahan (PMT)',
    desc: 'Pemberian Makanan Tambahan untuk mencegah dan mengatasi masalah gizi pada balita dan lansia. PMT diberikan berdasarkan hasil skrining gizi yang dilakukan secara berkala.',
    jadwal: 'Bulanan, pasca posyandu rutin',
    sasaran: 'Balita gizi kurang & lansia risti',
    persyaratan: 'Hasil skrining dari kader',
    color: 'border-orange-200',
    headerColor: 'bg-orange-50',
    iconBg: 'bg-orange-100',
    items: ['PMT bayi 6–23 bulan', 'PMT balita gizi kurang', 'PMT ibu hamil KEK', 'Paket nutrisi lansia', 'Edukasi gizi keluarga'],
  },
  {
    no: '04',
    icon: '💬',
    title: 'Konsultasi & Edukasi Kesehatan',
    desc: 'Sesi konsultasi dan edukasi kesehatan yang dipandu oleh kader terlatih dan sesekali didampingi oleh tenaga kesehatan dari puskesmas. Mencakup berbagai topik kesehatan sesuai kebutuhan.',
    jadwal: 'Setiap posyandu rutin',
    sasaran: 'Semua warga',
    persyaratan: 'Tanpa daftar, hadir langsung',
    color: 'border-purple-200',
    headerColor: 'bg-purple-50',
    iconBg: 'bg-purple-100',
    items: ['Konsultasi gizi', 'Edukasi penyakit kronik', 'Kesehatan ibu & anak', 'Pencegahan penyakit', 'Gaya hidup sehat'],
  },
  {
    no: '05',
    icon: '🏥',
    title: 'Bantuan Akses Layanan Kesehatan',
    desc: 'Membantu warga mendapatkan akses ke fasilitas kesehatan lanjutan seperti puskesmas, BPJS, atau rumah sakit. Kader membantu proses rujukan dan pendampingan administrasi.',
    jadwal: 'Sesuai kebutuhan warga',
    sasaran: 'Warga yang memerlukan rujukan',
    persyaratan: 'Konsultasi dengan kader dulu',
    color: 'border-red-200',
    headerColor: 'bg-red-50',
    iconBg: 'bg-red-100',
    items: ['Surat rujukan ke puskesmas', 'Bantuan administrasi BPJS', 'Pendampingan ke faskes', 'Informasi program Dinkes', 'Koordinasi layanan sosial'],
  },
  {
    no: '06',
    icon: '💊',
    title: 'Vitamin, Vaksinasi & Imunisasi',
    desc: 'Pemberian vitamin rutin (Vitamin A, tablet tambah darah) dan pelaksanaan program vaksinasi serta imunisasi bekerja sama dengan Puskesmas Klapanunggal sesuai jadwal nasional.',
    jadwal: 'Sesuai kalender vaksinasi',
    sasaran: 'Bayi, balita, ibu hamil, lansia',
    persyaratan: 'Buku KIA / KMS untuk bayi-balita',
    color: 'border-cyan-200',
    headerColor: 'bg-cyan-50',
    iconBg: 'bg-cyan-100',
    items: ['Vaksinasi dasar bayi', 'Imunisasi booster', 'Vitamin A balita', 'Tablet tambah darah', 'Vaksin influenza lansia'],
  },
  {
    no: '07',
    icon: '🏃',
    title: 'Olahraga Bersama',
    desc: 'Program olahraga terstruktur yang melibatkan seluruh warga, mulai dari senam aerobik untuk semua usia hingga senam khusus lansia. Dipandu instruktur terlatih setiap minggu.',
    jadwal: 'Setiap Minggu, 06.00–07.30 WIB',
    sasaran: 'Semua warga RW 44',
    persyaratan: 'Pakaian olahraga nyaman',
    color: 'border-lime-200',
    headerColor: 'bg-lime-50',
    iconBg: 'bg-lime-100',
    items: ['Senam aerobik pagi', 'Senam lansia khusus', 'Peregangan & yoga ringan', 'Jalan sehat bersama', 'Pengukuran BMI peserta'],
  },
]

const segmen = [
  {
    icon: '🤰',
    title: 'Ibu Hamil',
    color: 'bg-pink-50 border-pink-200',
    iconBg: 'bg-pink-100',
    layanan: ['Pemeriksaan kehamilan rutin', 'Konsultasi gizi ibu hamil', 'Tablet tambah darah & suplemen', 'Edukasi persiapan persalinan', 'Deteksi dini komplikasi', 'Rujukan ke puskesmas'],
    jadwal: 'Setiap posyandu rutin',
  },
  {
    icon: '👶',
    title: 'Bayi & Balita',
    color: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-100',
    layanan: ['Penimbangan & pengukuran', 'Imunisasi & vaksinasi dasar', 'Pemantauan tumbuh kembang', 'PMT untuk gizi kurang', 'Vitamin A 2x/tahun', 'Deteksi keterlambatan perkembangan'],
    jadwal: 'Bulan ke-1, 2, 3, setiap posyandu',
  },
  {
    icon: '🧒',
    title: 'Anak & Remaja',
    color: 'bg-green-50 border-green-200',
    iconBg: 'bg-green-100',
    layanan: ['Skrining kesehatan anak sekolah', 'Edukasi gizi & PHBS', 'Suplementasi vitamin', 'Deteksi masalah gizi anak', 'Edukasi kesehatan reproduksi', 'Pemantauan status gizi'],
    jadwal: 'Setiap 3 bulan',
  },
  {
    icon: '💪',
    title: 'Usia Produktif',
    color: 'bg-amber-50 border-amber-200',
    iconBg: 'bg-amber-100',
    layanan: ['Skrining faktor risiko PTM', 'Pemeriksaan tekanan darah', 'Tes kadar gula darah', 'Konsultasi gizi dewasa', 'Program gaya hidup sehat', 'Edukasi pencegahan penyakit'],
    jadwal: 'Setiap posyandu rutin',
  },
  {
    icon: '👴',
    title: 'Lansia',
    color: 'bg-purple-50 border-purple-200',
    iconBg: 'bg-purple-100',
    layanan: ['Pemantauan kesehatan berkala', 'Senam lansia & fisioterapi ringan', 'Konsultasi manajemen obat', 'Skrining kognitif sederhana', 'PMT lansia risiko tinggi', 'Akses mudah ke faskes'],
    jadwal: 'Setiap posyandu, prioritas utama',
  },
]

export default function LayananUnggulanPage() {
  return (
    <>
      <PageHero
        tag="Layanan Unggulan"
        title="7 Layanan Terpadu untuk Semua Usia"
        subtitle="Dari pemeriksaan dasar hingga program olahraga bersama — Posyandu Sehat Ceria hadir dengan layanan komprehensif untuk setiap tahapan kehidupan warga."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Kegiatan', href: '/kegiatan' },
          { label: 'Posyandu', href: '/kegiatan/posyandu' },
          { label: 'Layanan Unggulan' },
        ]}
      />

      <PosyanduSubnav />

      {/* Jadwal Rutin Banner */}
      <section className="bg-primary py-5">
        <div className="container">
          <div className="flex flex-wrap items-center gap-4 text-white">
            <span className="text-2xl">📅</span>
            <div>
              <p className="text-xs text-white/60 font-semibold uppercase tracking-wider">Jadwal Posyandu Rutin</p>
              <p className="font-semibold">Selasa pertama setiap bulan • 08.00 – 12.00 WIB • Gedung Serba Guna Coatesville</p>
            </div>
            <Link href="/kontak" className="ml-auto bg-accent text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-white hover:text-primary transition-all flex-shrink-0">
              Tanya Jadwal →
            </Link>
          </div>
        </div>
      </section>

      {/* 7 Layanan */}
      <section className="section bg-bg">
        <div className="container">
          <SectionHeader
            tag="7 Layanan Aktif"
            title="Detail Layanan Unggulan"
            subtitle="Setiap layanan dirancang untuk memberikan dampak maksimal bagi kesehatan warga RW 44 Coatesville."
          />
          <div className="space-y-5">
            {layanan.map((l, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className={`bg-white rounded-3xl border ${l.color} shadow-card overflow-hidden`}>
                  <div className={`${l.headerColor} px-8 py-5 flex items-center gap-4`}>
                    <div className={`w-14 h-14 ${l.iconBg} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0`}>
                      {l.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-accent uppercase tracking-wider">Layanan {l.no}</span>
                      </div>
                      <h3 className="text-lg font-bold text-ink">{l.title}</h3>
                    </div>
                    <div className="hidden md:grid grid-cols-3 gap-3 text-center">
                      {[
                        { label: 'Jadwal', val: l.jadwal },
                        { label: 'Sasaran', val: l.sasaran },
                        { label: 'Syarat', val: l.persyaratan },
                      ].map((info, j) => (
                        <div key={j} className="bg-white/60 rounded-xl px-3 py-2">
                          <p className="text-[0.6rem] font-bold text-muted uppercase tracking-wide">{info.label}</p>
                          <p className="text-[0.7rem] font-semibold text-ink mt-0.5 leading-tight">{info.val}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="px-8 py-6 grid md:grid-cols-5 gap-6">
                    <p className="md:col-span-3 text-sm leading-relaxed text-muted">{l.desc}</p>
                    <div className="md:col-span-2">
                      <p className="text-xs font-bold text-muted uppercase tracking-wider mb-3">Cakupan Layanan</p>
                      <ul className="space-y-1.5">
                        {l.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-ink">
                            <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs flex-shrink-0">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Segmen Sasaran */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            tag="Fokus Layanan"
            title="Layanan Per Segmen Usia"
            subtitle="Setiap segmen usia mendapatkan paket layanan yang disesuaikan dengan kebutuhan spesifik kesehatannya."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {segmen.map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className={`rounded-2xl border p-6 ${s.color} hover:-translate-y-1 transition-all duration-300`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 ${s.iconBg} rounded-xl flex items-center justify-center text-2xl`}>
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-ink">{s.title}</h3>
                      <p className="text-xs text-muted">{s.jadwal}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {s.layanan.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-muted">
                        <span className="text-primary-mid mt-0.5 flex-shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Cara Akses */}
      <section className="section bg-bg">
        <div className="container">
          <SectionHeader tag="Cara Mengakses" title="3 Langkah Mudah Menggunakan Layanan" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '01', icon: '📅', title: 'Cek Jadwal', desc: 'Posyandu rutin diadakan setiap Selasa pertama bulan berjalan, pukul 08.00–12.00 WIB. Layanan khusus dapat diminta via WhatsApp.' },
              { step: '02', icon: '🚶', title: 'Datang Langsung', desc: 'Hadir ke Gedung Serba Guna Coatesville. Daftar nama di meja registrasi. Tidak perlu reservasi untuk pelayanan umum.' },
              { step: '03', icon: '🤝', title: 'Dilayani Kader', desc: 'Tim kader terlatih siap melayani sesuai kebutuhan. Konsultasikan masalah kesehatan Anda secara langsung dan rahasia.' },
            ].map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="bg-white rounded-3xl p-8 shadow-card text-center border border-border/40 hover:-translate-y-1 hover:shadow-card-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-card">
                    {s.icon}
                  </div>
                  <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">Langkah {s.step}</div>
                  <h3 className="text-lg mb-3">{s.title}</h3>
                  <p className="text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cta-gradient py-20 text-center">
        <div className="container">
          <h2 className="text-white mb-4">Butuh Informasi Layanan Lebih Lanjut?</h2>
          <p className="text-white/65 max-w-lg mx-auto mb-8">
            Hubungi kader atau pengurus Posyandu Sehat Ceria untuk informasi jadwal, persyaratan, dan layanan khusus.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/kontak" className="btn-primary">Hubungi Kami</Link>
            <Link href="/kegiatan/posyandu/laporan-evaluasi" className="btn-outline">Lihat Laporan & Evaluasi</Link>
          </div>
        </div>
      </section>
    </>
  )
}

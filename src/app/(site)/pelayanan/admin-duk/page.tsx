import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Administrasi Kependudukan',
  description: 'Layanan administrasi kependudukan RW 44 Coatesville — surat pengantar, domisili, dan dokumen kependudukan.',
}

const layanan = [
  {
    icon: '📄',
    title: 'Surat Pengantar KTP',
    syarat: ['Fotokopi KK', 'Foto 3×4 (2 lembar)', 'Surat pindah (jika pindah domisili)'],
    waktu: '1 hari kerja',
    biaya: 'Gratis',
  },
  {
    icon: '🏠',
    title: 'Surat Keterangan Domisili',
    syarat: ['Fotokopi KK', 'Fotokopi KTP', 'Surat pernyataan dari tuan rumah (jika menumpang)'],
    waktu: '1 hari kerja',
    biaya: 'Gratis',
  },
  {
    icon: '👶',
    title: 'Surat Pengantar Akta Kelahiran',
    syarat: ['Surat keterangan lahir dari RS/Bidan', 'Fotokopi KK orang tua', 'Fotokopi KTP orang tua', 'Fotokopi buku nikah orang tua'],
    waktu: '1 hari kerja',
    biaya: 'Gratis',
  },
  {
    icon: '💒',
    title: 'Surat Pengantar Nikah (N1)',
    syarat: ['Fotokopi KTP calon pengantin', 'Fotokopi KK', 'Pas foto calon pengantin 3×4', 'Surat persetujuan orang tua (jika di bawah 21 tahun)'],
    waktu: '1–2 hari kerja',
    biaya: 'Gratis',
  },
  {
    icon: '📋',
    title: 'Surat Keterangan Usaha',
    syarat: ['Fotokopi KTP', 'Fotokopi KK', 'Foto tempat usaha', 'Surat izin tetangga'],
    waktu: '2 hari kerja',
    biaya: 'Gratis',
  },
  {
    icon: '✈️',
    title: 'Surat Pengantar Paspor',
    syarat: ['Fotokopi KTP', 'Fotokopi KK', 'Akta kelahiran (fotokopi)', 'Ijazah terakhir (fotokopi)'],
    waktu: '1 hari kerja',
    biaya: 'Gratis',
  },
  {
    icon: '⚰️',
    title: 'Surat Keterangan Kematian',
    syarat: ['Surat kematian dari RS/Puskesmas', 'Fotokopi KK almarhum', 'Fotokopi KTP pelapor'],
    waktu: '1 hari kerja',
    biaya: 'Gratis',
  },
  {
    icon: '📝',
    title: 'Surat Keterangan Tidak Mampu',
    syarat: ['Fotokopi KTP', 'Fotokopi KK', 'Surat permohonan bermaterai', 'Foto kondisi rumah'],
    waktu: '2 hari kerja',
    biaya: 'Gratis',
  },
]

export default function AdminDukPage() {
  return (
    <>
      <PageHero
        tag="Pelayanan"
        title="Administrasi Kependudukan"
        subtitle="Layanan administrasi kependudukan RW 44 Coatesville yang cepat, mudah, dan tanpa biaya untuk seluruh warga."
        breadcrumb={[{ label: 'Home' }, { label: 'Pelayanan' }, { label: 'Admin Duk' }]}
      />

      {/* Info layanan */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <AnimateOnScroll>
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { icon: '⏰', label: 'Jam Layanan', value: 'Sen–Jum 08.00–16.00' },
                { icon: '📍', label: 'Lokasi', value: 'Sekretariat RW 44' },
                { icon: '📞', label: 'Hubungi', value: 'Sekretaris RW 44' },
              ].map((info, i) => (
                <div key={i} className="bg-bg rounded-xl p-4 text-center">
                  <div className="text-2xl mb-1">{info.icon}</div>
                  <p className="text-[0.6rem] text-muted uppercase tracking-wide mb-0.5">{info.label}</p>
                  <p className="text-xs font-semibold text-ink">{info.value}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 mb-10 flex gap-4 items-start">
              <span className="text-2xl flex-shrink-0">ℹ️</span>
              <div>
                <h4 className="text-sm font-semibold text-primary mb-1">Petunjuk Pengajuan Surat</h4>
                <ol className="text-xs text-muted space-y-1 list-decimal list-inside leading-relaxed">
                  <li>Datang ke Sekretariat RW 44 pada jam layanan</li>
                  <li>Ambil nomor antrian di loket administrasi</li>
                  <li>Serahkan berkas persyaratan yang lengkap kepada petugas</li>
                  <li>Tunggu proses verifikasi dan penandatanganan oleh Ketua RW</li>
                  <li>Ambil surat sesuai jadwal yang diberikan petugas</li>
                </ol>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Daftar layanan */}
      <section className="section bg-bg">
        <div className="container">
          <SectionHeader tag="Daftar Layanan" title="Jenis Surat yang Dapat Diurus" subtitle="Semua layanan administrasi kependudukan di RW 44 Coatesville tersedia secara gratis untuk warga." />
          <div className="grid md:grid-cols-2 gap-5">
            {layanan.map((l, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className="bg-white rounded-2xl p-6 shadow-card hover:-translate-y-1 hover:shadow-card-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">{l.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-ink mb-3">{l.title}</h4>
                      <div className="mb-3">
                        <p className="text-[0.6rem] font-bold text-muted uppercase tracking-wide mb-1.5">Persyaratan:</p>
                        <ul className="space-y-0.5">
                          {l.syarat.map((s, j) => (
                            <li key={j} className="text-xs text-muted flex gap-2"><span className="text-accent mt-0.5">•</span>{s}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex gap-4 pt-3 border-t border-border">
                        <div>
                          <p className="text-[0.6rem] text-muted">Waktu Proses</p>
                          <p className="text-xs font-semibold text-primary">{l.waktu}</p>
                        </div>
                        <div>
                          <p className="text-[0.6rem] text-muted">Biaya</p>
                          <p className="text-xs font-semibold text-green-600">{l.biaya}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/kontak" className="btn-primary mr-3">Hubungi Sekretariat RW</Link>
            <Link href="/pelayanan" className="btn-outline-green">← Kembali ke Pelayanan</Link>
          </div>
        </div>
      </section>
    </>
  )
}

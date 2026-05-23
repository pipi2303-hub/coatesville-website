import type { Metadata } from 'next'
import InfraDetailPage from '@/components/ui/InfraDetailPage'

export const metadata: Metadata = { title: 'Pos Sekuriti' }

export default function PosSekuritiPage() {
  return (
    <InfraDetailPage
      icon="🔒"
      title="Pos Sekuriti"
      status="Baik"
      desc="Sistem keamanan 24 jam dengan petugas terlatih di setiap akses masuk kawasan."
      longDesc="Pos Sekuriti RW 44 Coatesville beroperasi 24 jam sehari, 7 hari seminggu dengan petugas keamanan terlatih. Terdapat 2 pos utama — pos masuk Gate 1 dan Gate 2 — yang dilengkapi sistem pencatatan tamu digital, CCTV terintegrasi, dan komunikasi radio. Setiap kendaraan dan tamu yang masuk diwajibkan melaporkan diri, sehingga keamanan kawasan dapat terjaga dengan optimal. Petugas keamanan secara rutin melakukan patroli keliling kawasan pada interval yang telah dijadwalkan."
      location="Gate 1 & Gate 2 Cluster Coatesville"
      specs={[
        { label: 'Jumlah Pos', value: '2 Pos Aktif' },
        { label: 'Operasional', value: '24 Jam / 7 Hari' },
        { label: 'Jumlah Petugas', value: '6 Orang (3 Shift)' },
        { label: 'Sistem CCTV', value: 'Terintegrasi' },
        { label: 'Patroli', value: 'Setiap 2 Jam' },
        { label: 'Terakhir Diperbarui', value: 'Mei 2026' },
      ]}
      maintenance={[
        { date: 'Mei 2026', desc: 'Penggantian monitor CCTV pos Gate 1', status: 'selesai' },
        { date: 'Mar 2026', desc: 'Pelatihan ulang petugas keamanan (refreshment)', status: 'selesai' },
        { date: 'Jan 2026', desc: 'Upgrade sistem pencatatan tamu digital', status: 'selesai' },
        { date: 'Nov 2025', desc: 'Pemasangan palang otomatis Gate 2', status: 'selesai' },
        { date: 'Jun 2026', desc: 'Evaluasi dan peningkatan SOP keamanan', status: 'terjadwal' },
      ]}
      imgSeed="infra-sekuriti"
      gallerySeeds={['sekuriti-g1', 'sekuriti-g2', 'sekuriti-g3', 'sekuriti-g4', 'sekuriti-g5', 'sekuriti-g6']}
    />
  )
}

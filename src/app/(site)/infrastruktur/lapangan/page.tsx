import type { Metadata } from 'next'
import InfraDetailPage from '@/components/ui/InfraDetailPage'

export const metadata: Metadata = { title: 'Lapangan Olahraga' }

export default function LapanganPage() {
  return (
    <InfraDetailPage
      icon="⚽"
      title="Lapangan Olahraga"
      status="Maintenance"
      desc="Lapangan multifungsi untuk berbagai kegiatan olahraga warga. Sedang dalam perawatan rutin."
      longDesc="Lapangan olahraga multifungsi RW 44 Coatesville berukuran 20x30 meter yang dapat digunakan untuk berbagai kegiatan olahraga seperti mini basket, voli, senam, dan badminton. Saat ini lapangan sedang dalam masa perawatan rutin — pengecatan ulang garis lapangan dan perbaikan net voli — yang diperkirakan selesai pertengahan Juni 2026. Selama masa perawatan, kegiatan olahraga sementara dipindahkan ke area parkir belakang. Lapangan juga dilengkapi lampu penerangan untuk kegiatan malam hari."
      location="Area Belakang Cluster Coatesville"
      specs={[
        { label: 'Ukuran', value: '20 × 30 meter' },
        { label: 'Fungsi', value: 'Basket, Voli, Senam, Badminton' },
        { label: 'Lampu Malam', value: '4 Tiang (Aktif)' },
        { label: 'Tribun', value: 'Kapasitas 50 Orang' },
        { label: 'Status', value: 'Maintenance (Est. Selesai Jun 2026)' },
        { label: 'Terakhir Direnovasi', value: 'Des 2024' },
      ]}
      maintenance={[
        { date: 'Jun 2026', desc: 'Pengecatan ulang garis lapangan & perbaikan net voli', status: 'proses' },
        { date: 'Jan 2026', desc: 'Penggantian lampu lapangan ke LED hemat energi', status: 'selesai' },
        { date: 'Sep 2025', desc: 'Perbaikan ring basket dan papan skor', status: 'selesai' },
        { date: 'Des 2024', desc: 'Renovasi total lapangan — permukaan baru + tribun', status: 'selesai' },
        { date: 'Sep 2026', desc: 'Penambahan area warm-up dan stretching', status: 'terjadwal' },
      ]}
      imgSeed="infra-lapangan"
      gallerySeeds={['lapangan-g1', 'lapangan-g2', 'lapangan-g3', 'lapangan-g4', 'lapangan-g5', 'lapangan-g6']}
    />
  )
}

import type { Metadata } from 'next'
import InfraDetailPage from '@/components/ui/InfraDetailPage'

export const metadata: Metadata = { title: 'Jalan Kompleks' }

export default function JalanPage() {
  return (
    <InfraDetailPage
      icon="🛣️"
      title="Jalan Kompleks"
      status="Baik"
      desc="Jaringan jalan internal kawasan Coatesville dalam kondisi baik pasca perbaikan Tahap II."
      longDesc="Jaringan jalan kompleks RW 44 Coatesville mencakup jalan utama (Jalan Taman Phase 2) dan jalan lingkungan dengan total panjang sekitar 2,4 km. Program perbaikan jalan Tahap II yang diselesaikan pada Mei 2026 mencakup pengaspalan ulang, perbaikan drainase tepi jalan, dan penambahan marka jalan. Kondisi seluruh jaringan jalan saat ini dalam keadaan baik dan layak digunakan. Pemeriksaan rutin dilakukan setiap 3 bulan untuk memastikan tidak ada kerusakan yang perlu segera ditangani."
      location="Seluruh Kawasan RW 44 Coatesville"
      specs={[
        { label: 'Total Panjang', value: '±2,4 km' },
        { label: 'Lebar Jalan Utama', value: '6 meter' },
        { label: 'Lebar Jalan Lingkungan', value: '4 meter' },
        { label: 'Material', value: 'Aspal Hot Mix' },
        { label: 'Terakhir Diperbaiki', value: 'Mei 2026' },
        { label: 'Kondisi', value: 'Baik (95%)' },
      ]}
      maintenance={[
        { date: 'Mei 2026', desc: 'Perbaikan jalan Tahap II — pengaspalan ulang jalan utama', status: 'selesai' },
        { date: 'Feb 2026', desc: 'Perbaikan drainase tepi jalan lingkungan Blok B', status: 'selesai' },
        { date: 'Okt 2025', desc: 'Tambal sulam lubang jalan pasca musim hujan', status: 'selesai' },
        { date: 'Agu 2025', desc: 'Perbaikan jalan Tahap I — jalan lingkungan Blok A', status: 'selesai' },
        { date: 'Agu 2026', desc: 'Pemeriksaan rutin kondisi jalan Q3 2026', status: 'terjadwal' },
      ]}
      imgSeed="infra-jalan"
      gallerySeeds={['jalan-g1', 'jalan-g2', 'jalan-g3', 'jalan-g4', 'jalan-g5', 'jalan-g6']}
    />
  )
}

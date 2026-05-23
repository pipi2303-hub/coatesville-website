import type { Metadata } from 'next'
import InfraDetailPage from '@/components/ui/InfraDetailPage'

export const metadata: Metadata = { title: 'Lampu Penerangan Jalan' }

export default function LampuPage() {
  return (
    <InfraDetailPage
      icon="💡"
      title="Lampu Penerangan Jalan"
      status="Baik"
      desc="Sistem penerangan jalan kompleks yang berfungsi optimal untuk keamanan dan kenyamanan warga malam hari."
      longDesc="Sistem lampu penerangan jalan RW 44 Coatesville mencakup 48 titik lampu yang tersebar di seluruh kawasan — jalan utama, jalan lingkungan, area taman, pos keamanan, dan lapangan olahraga. Seluruh lampu telah diupgrade ke teknologi LED (Light Emitting Diode) sejak 2024 sehingga lebih hemat energi dan memiliki umur pakai lebih panjang. Sistem pengatur otomatis (timer & sensor cahaya) memastikan lampu menyala saat diperlukan. Pemeriksaan kondisi lampu dilakukan setiap bulan oleh petugas teknis."
      location="Seluruh Kawasan RW 44 Coatesville"
      specs={[
        { label: 'Jumlah Titik Lampu', value: '48 Titik' },
        { label: 'Jenis Lampu', value: 'LED 30W & 50W' },
        { label: 'Sistem Kontrol', value: 'Timer + Sensor Cahaya' },
        { label: 'Konsumsi Daya', value: '±2,4 kWh/malam' },
        { label: 'Lampu Aktif', value: '47/48 (98%)' },
        { label: 'Terakhir Dicek', value: 'Mei 2026' },
      ]}
      maintenance={[
        { date: 'Mei 2026', desc: 'Penggantian 1 lampu mati di Jalan Taman Blok C', status: 'selesai' },
        { date: 'Feb 2026', desc: 'Kalibrasi ulang timer otomatis seluruh zona', status: 'selesai' },
        { date: 'Okt 2025', desc: 'Penambahan 4 titik lampu baru di area taman', status: 'selesai' },
        { date: 'Jun 2025', desc: 'Upgrade seluruh lampu ke LED — penghematan 40%', status: 'selesai' },
        { date: 'Agu 2026', desc: 'Pemeriksaan rutin kondisi instalasi listrik', status: 'terjadwal' },
      ]}
      imgSeed="infra-lampu"
      gallerySeeds={['lampu-g1', 'lampu-g2', 'lampu-g3', 'lampu-g4', 'lampu-g5', 'lampu-g6']}
    />
  )
}

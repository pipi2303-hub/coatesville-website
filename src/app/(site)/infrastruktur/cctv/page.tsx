import type { Metadata } from 'next'
import InfraDetailPage from '@/components/ui/InfraDetailPage'

export const metadata: Metadata = { title: 'CCTV' }

export default function CCTVPage() {
  return (
    <InfraDetailPage
      icon="📹"
      title="CCTV"
      status="Baik"
      desc="Sistem CCTV terintegrasi di titik-titik strategis untuk pengawasan keamanan kawasan 24 jam."
      longDesc="Sistem CCTV RW 44 Coatesville mencakup 24 kamera yang dipasang di titik-titik strategis — gate masuk/keluar, jalan utama, area taman, lapangan, dan koridor antar blok. Rekaman disimpan di DVR (Digital Video Recorder) dengan kapasitas penyimpanan 30 hari. Monitor utama ditempatkan di pos keamanan Gate 1 dan dapat dipantau secara real-time oleh petugas keamanan. Kamera beresolusi Full HD (1080p) dilengkapi fitur night vision untuk pengawasan malam hari. Sistem terintegrasi dengan sistem keamanan pos sekuriti."
      location="24 Titik Strategis Kawasan RW 44"
      specs={[
        { label: 'Jumlah Kamera', value: '24 Unit Aktif' },
        { label: 'Resolusi', value: 'Full HD 1080p' },
        { label: 'Night Vision', value: 'Ya (IR 30 meter)' },
        { label: 'Penyimpanan', value: '30 Hari (DVR 8TB)' },
        { label: 'Monitor Utama', value: 'Pos Gate 1' },
        { label: 'Terakhir Dicek', value: 'Mei 2026' },
      ]}
      maintenance={[
        { date: 'Mei 2026', desc: 'Pembersihan lensa kamera + pemeriksaan koneksi', status: 'selesai' },
        { date: 'Mar 2026', desc: 'Upgrade DVR — penambahan kapasitas penyimpanan ke 8TB', status: 'selesai' },
        { date: 'Des 2025', desc: 'Pemasangan 4 kamera baru di area blok baru', status: 'selesai' },
        { date: 'Agu 2025', desc: 'Penggantian 2 kamera rusak akibat petir', status: 'selesai' },
        { date: 'Sep 2026', desc: 'Evaluasi dan upgrade sistem ke IP Camera', status: 'terjadwal' },
      ]}
      imgSeed="infra-cctv"
      gallerySeeds={['cctv-g1', 'cctv-g2', 'cctv-g3', 'cctv-g4', 'cctv-g5', 'cctv-g6']}
    />
  )
}

import type { Metadata } from 'next'
import InfraDetailPage from '@/components/ui/InfraDetailPage'

export const metadata: Metadata = { title: 'Taman & Gazebo' }

export default function TamanPage() {
  return (
    <InfraDetailPage
      icon="🌳"
      title="Taman & Gazebo"
      status="Baik"
      desc="Area hijau dan gazebo komunitas sebagai ruang rekreasi dan interaksi sosial warga."
      longDesc="Taman komunitas RW 44 Coatesville merupakan ruang terbuka hijau yang berfungsi sebagai area rekreasi, olahraga ringan, dan interaksi sosial antarwarga. Dilengkapi dengan 2 unit gazebo yang dapat digunakan untuk kegiatan komunitas, area bermain anak, kursi taman, dan pepohonan rindang. Taman dirawat rutin oleh tim kebersihan dengan jadwal penyiraman, pemangkasan, dan pembersihan harian. Area ini juga sering digunakan untuk kegiatan senam pagi, posyandu di alam terbuka, dan gathering komunitas."
      location="Area Tengah Cluster Coatesville"
      specs={[
        { label: 'Luas Area', value: '±800 m²' },
        { label: 'Jumlah Gazebo', value: '2 Unit' },
        { label: 'Area Bermain', value: '1 Unit (Anak-anak)' },
        { label: 'Petugas Kebersihan', value: 'Harian' },
        { label: 'Pohon Rindang', value: '±30 Pohon' },
        { label: 'Terakhir Diperbarui', value: 'Apr 2026' },
      ]}
      maintenance={[
        { date: 'Apr 2026', desc: 'Pengecatan ulang gazebo dan kursi taman', status: 'selesai' },
        { date: 'Mar 2026', desc: 'Penggantian paving block area jalan setapak taman', status: 'selesai' },
        { date: 'Jan 2026', desc: 'Penanaman pohon baru — 10 pohon trembesi', status: 'selesai' },
        { date: 'Okt 2025', desc: 'Perbaikan sarana bermain anak', status: 'selesai' },
        { date: 'Jul 2026', desc: 'Renovasi dan perluasan area taman Tahap III', status: 'terjadwal' },
      ]}
      imgSeed="infra-taman"
      gallerySeeds={['taman-g1', 'taman-g2', 'taman-g3', 'taman-g4', 'taman-g5', 'taman-g6']}
    />
  )
}

import type { Metadata } from 'next'
import ComingSoon from '@/components/ui/ComingSoon'

export const metadata: Metadata = { title: 'Hari Besar Nasional & Keagamaan' }

export default function HariBesarPage() {
  return (
    <ComingSoon
      tag="Kegiatan"
      title="Hari Besar Nasional & Keagamaan"
      desc="Perayaan HUT RI, Lebaran, Idul Adha, Natal, dan hari besar lainnya yang memupuk semangat kebersamaan warga RW 44 Coatesville."
      breadcrumb={[{ label: 'Home' }, { label: 'Kegiatan' }, { label: 'Hari Besar' }]}
    />
  )
}

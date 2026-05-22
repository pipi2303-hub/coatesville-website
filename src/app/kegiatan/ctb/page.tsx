import type { Metadata } from 'next'
import ComingSoon from '@/components/ui/ComingSoon'

export const metadata: Metadata = { title: 'CTB – Touring & Edukasi' }

export default function CTBPage() {
  return (
    <ComingSoon
      tag="Kegiatan"
      title="CTB – Touring & Edukasi"
      desc="Komunitas touring motorbike, edukasi safety riding, dan kegiatan donasi sosial bagi warga RW 44 Coatesville yang membutuhkan."
      breadcrumb={[{ label: 'Home' }, { label: 'Kegiatan' }, { label: 'CTB' }]}
    />
  )
}

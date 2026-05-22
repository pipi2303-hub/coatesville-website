import type { Metadata } from 'next'
import ComingSoon from '@/components/ui/ComingSoon'

export const metadata: Metadata = { title: 'Kegiatan Kreatif' }

export default function KreatifPage() {
  return (
    <ComingSoon
      tag="Kegiatan"
      title="Kegiatan Kreatif RW 44"
      desc="Seni vokal & musik, line dance, cooking class — mengekspresikan kreativitas dan bakat bersama komunitas RW 44 Coatesville."
      breadcrumb={[{ label: 'Home' }, { label: 'Kegiatan' }, { label: 'Kreatif' }]}
    />
  )
}

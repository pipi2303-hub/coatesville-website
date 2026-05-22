import type { Metadata } from 'next'
import ComingSoon from '@/components/ui/ComingSoon'

export const metadata: Metadata = { title: 'Pembinaan Rohani' }

export default function RohaniPage() {
  return (
    <ComingSoon
      tag="Kegiatan"
      title="Pembinaan Rohani"
      desc="Kegiatan pembinaan rohani untuk warga Muslim dan Non-Muslim di RW 44 Coatesville — mempererat kerukunan antarumat beragama."
      breadcrumb={[{ label: 'Home' }, { label: 'Kegiatan' }, { label: 'Rohani' }]}
    />
  )
}

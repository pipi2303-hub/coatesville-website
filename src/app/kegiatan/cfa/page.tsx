import type { Metadata } from 'next'
import ComingSoon from '@/components/ui/ComingSoon'

export const metadata: Metadata = { title: 'CFA – Alam & Lingkungan' }

export default function CFAPage() {
  return (
    <ComingSoon
      tag="Kegiatan"
      title="CFA – Alam & Lingkungan"
      desc="Hiking & tracking, peduli lingkungan, dan rekreasi bersama keluarga untuk mempererat tali persaudaraan warga RW 44 Coatesville."
      breadcrumb={[{ label: 'Home' }, { label: 'Kegiatan' }, { label: 'CFA' }]}
    />
  )
}

import type { Metadata } from 'next'
import ComingSoon from '@/components/ui/ComingSoon'

export const metadata: Metadata = { title: 'Olahraga Bersama' }

export default function OlahragaPage() {
  return (
    <ComingSoon
      tag="Kegiatan"
      title="Olahraga Bersama RW 44"
      desc="Senam, mini basket, voli, tenis meja, golf, menembak, bela diri, dan edukasi olahraga untuk seluruh warga RW 44 Coatesville."
      breadcrumb={[{ label: 'Home' }, { label: 'Kegiatan' }, { label: 'Olahraga' }]}
    />
  )
}

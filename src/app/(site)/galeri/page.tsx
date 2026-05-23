import type { Metadata } from 'next'
import GaleriClient from './GaleriClient'

export const metadata: Metadata = {
  title: 'Galeri',
  description: 'Dokumentasi kegiatan komunitas RW 44 Coatesville Kota Wisata — Posyandu, olahraga, kegiatan sosial, dan momen kebersamaan warga.',
}

export default function GaleriPage() {
  return <GaleriClient />
}

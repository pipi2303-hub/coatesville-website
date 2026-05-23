import type { Metadata } from 'next'
import BeritaClient from './BeritaClient'

export const metadata: Metadata = {
  title: 'News & Updates',
  description: 'Berita terkini, peraturan cluster, dan informasi komunitas RW 44 Coatesville Kota Wisata.',
}

export default function BeritaPage() {
  return <BeritaClient />
}

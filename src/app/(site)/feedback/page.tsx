import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import FeedbackClient from './FeedbackClient'

export const metadata: Metadata = {
  title: 'Feedback & Pengaduan',
  description: 'Sampaikan masukan dan pengaduan Anda kepada pengurus RW 44 Coatesville.',
}

export default function FeedbackPage() {
  return (
    <>
      <PageHero
        tag="Feedback & Pengaduan"
        title="Suara Warga RW 44"
        subtitle="Sampaikan masukan, saran, atau pengaduan Anda. Setiap suara warga adalah prioritas kami."
        breadcrumb={[{ label: 'Home' }, { label: 'Feedback & Pengaduan' }]}
      />
      <FeedbackClient />
    </>
  )
}

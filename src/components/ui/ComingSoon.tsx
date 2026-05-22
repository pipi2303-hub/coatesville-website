import Link from 'next/link'
import PageHero from './PageHero'

interface Props {
  tag: string
  title: string
  desc: string
  breadcrumb: { label: string; href?: string }[]
}

export default function ComingSoon({ tag, title, desc, breadcrumb }: Props) {
  return (
    <>
      <PageHero tag={tag} title={title} breadcrumb={breadcrumb} />
      <section className="section bg-bg">
        <div className="container text-center">
          <div className="max-w-lg mx-auto bg-white rounded-3xl p-14 shadow-card-lg">
            <div className="text-6xl mb-6">🚧</div>
            <div className="section-tag mx-auto mb-4">Dalam Pengembangan</div>
            <h3 className="text-2xl mb-3">Segera Hadir</h3>
            <p className="mb-8 text-sm leading-relaxed">
              {desc} Kami sedang menyiapkan konten terbaik untuk halaman ini. Pantau terus perkembangannya.
            </p>
            <Link href="/" className="btn-outline-green">
              ← Kembali ke Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

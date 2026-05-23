'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
  tag?: string
  title: string
  subtitle?: string
  breadcrumb?: { label: string; href?: string }[]
}

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function PageHero({ tag, title, subtitle, breadcrumb }: Props) {
  return (
    <section className="bg-hero-gradient pt-16 pb-20 text-center text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-mid/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container relative z-10">
        {breadcrumb && (
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={variants}
            className="flex items-center justify-center gap-2 text-xs text-white/50 mb-4 uppercase tracking-widest"
          >
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {b.href ? (
                  <Link href={b.href} className="hover:text-accent transition-colors">
                    {b.label}
                  </Link>
                ) : (
                  <span className={i === breadcrumb.length - 1 ? 'text-accent' : ''}>{b.label}</span>
                )}
              </span>
            ))}
          </motion.div>
        )}

        {tag && (
          <motion.div custom={1} initial="hidden" animate="visible" variants={variants}>
            <div className="section-tag-light mx-auto">{tag}</div>
          </motion.div>
        )}

        <motion.h1
          custom={2}
          initial="hidden"
          animate="visible"
          variants={variants}
          className="text-white mt-2 mb-4"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={variants}
            className="text-white/70 max-w-xl mx-auto text-base leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}

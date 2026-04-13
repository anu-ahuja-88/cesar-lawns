'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const photos = [
  {
    src: '/hedge-trimming-porirua-wellington-view.jpeg',
    alt: 'Hedge trimming with Wellington harbour view Cesar\'s Lawns Services Porirua',
    className: 'col-span-1 row-span-2',
  },
  {
    src: '/long-reach-hedge-trimmer-porirua.jpeg',
    alt: 'Long reach hedge trimming service Porirua Cesar\'s Lawns Services',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/garden-maintenance-porirua.jpeg',
    alt: 'Garden maintenance property Porirua Cesar\'s Lawns Services',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/garden-cleanup-landscaping-porirua.jpeg',
    alt: 'Garden cleanup and landscaping Porirua Cesar\'s Lawns Services',
    className: 'col-span-2 row-span-1',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6" style={{ backgroundColor: '#141C14' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ color: '#141C14', backgroundColor: 'var(--color-cta)' }}
          >
            Our Work
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black uppercase leading-tight text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Porirua Lawns<br />Done Right
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.src}
              variants={itemVariants}
              className={`relative rounded-2xl overflow-hidden ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

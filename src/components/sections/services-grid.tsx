'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    id: 'platsbyggda',
    title: 'Platsbyggda möbler',
    description: 'Bokhyllor, garderober och förvaring platsbyggda efter rummet.'
  },
  {
    id: 'specialsnickerier',
    title: 'Specialsnickerier',
    description: 'Unika lösningar som receptionsdiskar, tidsenliga lister, paneler eller unika specialdetaljer.'
  },
  {
    id: 'renovering',
    title: 'Renovering av trädetaljer',
    description: 'Vi återställer dörrar, fönster och lister och bevarar originalkänslan.'
  },
  {
    id: 'kok-badrum',
    title: 'Kök & badrum',
    description: 'Skräddarsydda fronter, luckor och bänkskivor – samordning vid behov.'
  },
  {
    id: 'samarbete',
    title: 'Samarbete med arkitekter & designers',
    description: 'Ritningsunderlag, materialprover och tekniska lösningar i dialog.'
  },
  {
    id: 'maskinpark',
    title: 'Bred maskinpark och lackverkstad',
    description: 'Modern maskinpark med egen lackverkstad och lackrobot.'
  }
]

const ServicesGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100
      }
    }
  }

  return (
    <section id="tjanster" className="py-24 bg-[#fefbfa] overflow-hidden">
      <div className="max-w-7xl mx-auto" style={{paddingLeft: '60px', paddingRight: '60px'}}>
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[2rem] md:text-[2.5rem] font-serif font-normal leading-[1.2] tracking-[0.01em] text-black mb-4">
            Våra tjänster
          </h2>
          <p className="text-lg text-neutral-600">
            Från idé till montering – alltid måttanpassat.
          </p>
        </motion.div>

        {/* Services layout - Image left, list right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image on the left */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", damping: 20 }}
            className="relative flex justify-start"
          >
            <div className="w-full max-h-[70vh]">
              <Image
                src="/services-image.png"
                alt="Norm Snickeri arbete"
                width={800}
                height={1200}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Services list on the right */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="border-b border-neutral-200 pb-6 last:border-b-0"
              >
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
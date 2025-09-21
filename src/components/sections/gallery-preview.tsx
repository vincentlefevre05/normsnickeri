'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const galleryProjects = [
  { 
    id: 1, 
    src: '/gallery-image-1.png', 
    alt: 'Kök i ekfanér',
    title: 'Minimalistiskt kök',
    description: 'Helrenoverat kök med fronter i ekfanér, specialtillverkade handtag i samma material.'
  },
  { 
    id: 2, 
    src: '/gallery-image-2.png', 
    alt: 'Platsbyggd hallmöbel',
    title: 'Platsbyggd hallmöbel i lackad kulör',
    description: 'Skräddarsydd hallmöbel anpassad efter rummets dimensioner. '
  },
  { 
    id: 3, 
    src: '/gallery-image-3.jpg', 
    alt: 'Vägghängd förvaring',
    title: 'Vägghängd förvaring',
    description: 'Måttbeställd förvaringslösning med skjutdörrar och öppna hyllplan.'
  },
]

const GalleryPreview = () => {

  return (
    <section id="galleri" className="py-24 bg-[#fefbfa]">
      <div className="max-w-7xl mx-auto" style={{paddingLeft: '60px', paddingRight: '60px'}}>
        {/* Alternating layout with images and text */}
        <div className="space-y-24">
          {galleryProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring", damping: 20 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image */}
                <div className={`relative aspect-[4/3] overflow-hidden group ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Text content */}
                <div className={`space-y-4 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <h3 className="text-[1.5rem] font-serif font-normal text-neutral-900">
                    {project.title}
                  </h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default GalleryPreview
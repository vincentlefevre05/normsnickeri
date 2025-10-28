'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const companies = [
  { id: 1, name: 'Norm Bygg', logo: '/norm-bygg-logo.png' },
  { id: 2, name: 'Norm Maskin', logo: '/norm-maskin-logo.png' },
  { id: 3, name: 'Norm PickITUp', logo: '/norm-pickitup-logo.png' },
  { id: 4, name: 'Norm Fordon', logo: '/norm-fordon-logo.png' },
]

const AboutNorm = () => {
  return (
    <section id="about-norm" className="pt-24 pb-40 bg-[#fefbfa]">
      <div className="max-w-4xl mx-auto px-8 lg:px-[60px]">
        {/* Centered text content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <h2 className="text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] font-serif font-normal leading-[1.2] tracking-[0.01em] text-black">
            Vilka är Norm?
          </h2>
          
          <div className="space-y-4">
            <p className="text-base lg:text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              Norm är en koncern som samlar specialistbolag inom bygg, snickeri, logistik och maskinuthyrning. Genom att kombinera hantverkskompetens med strukturerad projektledning och effektiv materialhantering erbjuder vi helhetslösningar som skapar värde, både för våra kunder och för branschen.  Våra bolag verkar självständigt men samverkar tätt - det är så vi bygger vidare.
            </p>
          </div>
        </motion.div>

        {/* Horizontal animated logo carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative overflow-hidden"
        >
          <div className="flex animate-scroll space-x-6 lg:space-x-12 group">
            {/* First set of logos */}
            {companies.map((company) => (
              <div
                key={`first-${company.id}`}
                className="flex-shrink-0 flex items-center justify-center h-20 w-32 lg:w-48 group-hover:pause-animation"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={200}
                  height={50}
                  className={`${company.name === 'Norm Bygg' ? 'h-7 lg:h-10' : 'h-11'} w-auto opacity-80 hover:opacity-100 transition-opacity duration-300`}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company) => (
              <div
                key={`second-${company.id}`}
                className="flex-shrink-0 flex items-center justify-center h-20 w-32 lg:w-48 group-hover:pause-animation"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={200}
                  height={50}
                  className={`${company.name === 'Norm Bygg' ? 'h-7 lg:h-10' : 'h-11'} w-auto opacity-80 hover:opacity-100 transition-opacity duration-300`}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 8s linear infinite;
        }
        
        @media (max-width: 1024px) {
          .animate-scroll {
            animation: scroll-mobile 15s ease-in-out infinite;
          }
          
          @keyframes scroll-mobile {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-225%);
            }
          }
        }
        
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default AboutNorm
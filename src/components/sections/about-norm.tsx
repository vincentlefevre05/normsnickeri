'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const companies = [
  { id: 1, name: 'Norm Snickeri', logo: '/logo-dark.png' },
  { id: 2, name: 'Norm Bygg', logo: '/logo-dark.png' },
  { id: 3, name: 'Norm Logistik', logo: '/logo-dark.png' },
  { id: 4, name: 'Norm Maskin', logo: '/logo-dark.png' },
]

const AboutNorm = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length)
    }, 3000) // Change logo every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about-norm" className="pt-24 pb-32 bg-[#fefbfa]">
      <div className="max-w-7xl mx-auto" style={{paddingLeft: '60px', paddingRight: '60px'}}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-[2rem] md:text-[2.5rem] font-serif font-normal leading-[1.2] tracking-[0.01em] text-black">
              Vilka är Norm?
            </h2>
            
            <div className="space-y-4">
              <p className="text-lg text-neutral-600 leading-relaxed">
                Norm är en koncern som samlar specialistbolag inom bygg, snickeri, logistik och maskinuthyrning. Genom att kombinera hantverkskompetens med strukturerad projektledning och effektiv materialhantering erbjuder vi helhetslösningar som skapar värde, både för våra kunder och för branschen.  Våra bolag verkar självständigt men samverkar tätt - det är så vi bygger vidare.
              </p>
            </div>
          </motion.div>

          {/* Logo carousel */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Desktop view - Show all logos in a grid */}
            <div className="hidden lg:grid grid-cols-2 gap-8">
              {companies.map((company, index) => (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 flex items-center justify-center h-32 group hover:shadow-lg transition-shadow duration-300"
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={140}
                    height={60}
                    className="h-12 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              ))}
            </div>

            {/* Mobile view - Animated carousel */}
            <div className="lg:hidden relative h-40 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <Image
                    src={companies[currentIndex].logo}
                    alt={companies[currentIndex].name}
                    width={180}
                    height={80}
                    className="h-16 w-auto"
                  />
                  <p className="mt-4 text-sm text-neutral-600">
                    {companies[currentIndex].name}
                  </p>
                </motion.div>
              </AnimatePresence>
              
              {/* Progress dots */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
                {companies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? 'bg-neutral-800' : 'bg-neutral-300'
                    }`}
                    aria-label={`Go to company ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutNorm
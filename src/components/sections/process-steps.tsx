'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const steps = [
  {
    id: 1,
    title: 'Förfrågan & första kontakt',
    description: 'Berätta kort om projektet och önskad tidplan.'
  },
  {
    id: 2,
    title: 'Möte & platsbesök',
    description: 'Vi måttar, går igenom förutsättningar och materialval.'
  },
  {
    id: 3,
    title: 'Samarbete med arkitekter & inredningsdesigners',
    description: 'Vi synkar ritningar och teknik för rätt passform och uttryck.'
  },
  {
    id: 4,
    title: 'Offert & planering',
    description: 'Tydlig offert, tidplan och leveransupplägg innan start.'
  },
  {
    id: 5,
    title: 'Genomförande',
    description: 'Tillverkning i verkstad, montering på plats och löpande avstämningar.'
  },
  {
    id: 6,
    title: 'Avslut & uppföljning',
    description: 'Genomgång, skötselråd och garanti – vi finns kvar efter leverans.'
  }
]

const ProcessSteps = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      x: -50 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-white to-neutral-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-[60px]">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-[2rem] md:text-[2.5rem] font-serif font-normal leading-[1.2] tracking-[0.01em] text-black mb-4">
            Så arbetar vi
          </h2>
        </motion.div>

        {/* Vertical timeline for desktop, cards for mobile */}
        <motion.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Animated timeline line */}
          <div className="absolute left-[24px] lg:left-[50%] transform lg:-translate-x-1/2 w-[2px] h-full bg-neutral-200">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#2a2a2a] to-neutral-600"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Process steps */}
          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={step.id}
                  variants={stepVariants}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <motion.div 
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                    className="w-full lg:w-[calc(50%-3rem)] bg-white p-6 lg:p-8 shadow-lg ml-12 lg:ml-0"
                  >
                    <div className="flex items-start gap-4 lg:gap-6">
                      {/* Number circle */}
                      <div className="relative">
                        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#2a2a2a] to-neutral-700 flex items-center justify-center shadow-xl">
                          <span className="text-xl lg:text-2xl font-bold text-white">{step.id}</span>
                        </div>
                      </div>

                      {/* Text content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-base text-neutral-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Center dot for timeline */}
                  <motion.div 
                    className="absolute left-[24px] lg:left-[50%] transform lg:-translate-x-1/2 w-6 h-6 bg-white border-4 border-[#2a2a2a] z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.1, type: "spring" }}
                  />

                  {/* Spacer for desktop layout */}
                  <div className="hidden lg:block w-[calc(50%-3rem)]" />
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessSteps
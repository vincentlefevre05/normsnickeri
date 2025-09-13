'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock, DollarSign } from 'lucide-react'
import { Hammer, Building, Plus, Factory } from 'lucide-react'
import AnimatedText from '@/components/ui/animated-text'
import SectionContainer from '@/components/ui/section-container'
import { fadeUp, staggerContainer, staggerItem, scaleOnHover } from '@/lib/animations'
import { services } from '@/data/content'

// Icon mapping for services
const iconMap = {
  Hammer,
  Building,
  Plus,
  Factory,
}

const Services = () => {
  return (
    <SectionContainer background="white" stagger>
      {/* Section header */}
      <div className="col-span-14 text-center mb-16">
        <motion.div
          variants={fadeUp}
          className="space-y-4"
        >
          <span className="inline-block px-4 py-2 bg-construction-orange/10 text-construction-orange text-sm font-semibold rounded-full">
            Våre tjenester
          </span>
          
          <AnimatedText
            text="Vi leverer komplett byggetjenester"
            as="h2"
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900"
            type="words"
            staggerDelay={0.08}
          />
          
          <motion.p
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            className="text-lg text-neutral-600 max-w-3xl mx-auto"
          >
            Fra idé til ferdig resultat – vi har ekspertisen og erfaringen som 
            skal til for å realisere ditt drømmeprosjekt med høy kvalitet og presisjon.
          </motion.p>
        </motion.div>
      </div>

      {/* Services grid */}
      <div className="col-span-14">
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            
            return (
              <motion.div
                key={service.id}
                variants={staggerItem}
                whileHover="hover"
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                >
                  {/* Service icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-construction-orange to-construction-orange/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {IconComponent && (
                        <IconComponent className="w-8 h-8 text-white" />
                      )}
                    </div>
                  </div>

                  {/* Service title */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-construction-blue transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Service description */}
                  <p className="text-neutral-600 mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Service features */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-neutral-700">
                          <div className="w-1.5 h-1.5 bg-construction-orange rounded-full flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-construction-blue font-medium">
                          +{service.features.length - 3} flere fordeler
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Service meta */}
                  <div className="space-y-3 mb-6 pt-4 border-t border-neutral-100">
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <Clock className="w-4 h-4 text-construction-orange" />
                      <span>Estimert tid: {service.estimatedTime}</span>
                    </div>
                    {service.priceRange && (
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <DollarSign className="w-4 h-4 text-construction-orange" />
                        <span>{service.priceRange}</span>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/tjenester#${service.id}`}
                    className="group/link inline-flex items-center gap-2 text-construction-blue hover:text-construction-orange font-semibold transition-colors duration-200"
                  >
                    Les mer
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <div className="col-span-14 text-center mt-16">
        <motion.div
          variants={fadeUp}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900">
              Ikke sikker på hvilken tjeneste du trenger?
            </h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Våre eksperter gir deg gratis rådgivning og hjelper deg å finne 
              den beste løsningen for ditt prosjekt.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-construction-orange hover:bg-construction-orange/90 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Få gratis konsultasjon
              </motion.button>
            </Link>
            
            <Link href="/prosjekter">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-neutral-50 text-neutral-900 px-8 py-4 rounded-lg font-semibold border-2 border-neutral-200 hover:border-neutral-300 transition-all duration-300"
              >
                Se case-studier
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}

export default Services
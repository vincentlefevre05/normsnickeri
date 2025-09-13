'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeUp, staggerContainer } from '@/lib/animations'

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
  stagger?: boolean
  id?: string
  background?: 'cream' | 'white' | 'gray' | 'dark'
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className = '',
  animate = true,
  stagger = false,
  id,
  background = 'white',
}) => {
  const backgroundClasses = {
    cream: 'bg-cream-50',
    white: 'bg-white',
    gray: 'bg-neutral-50',
    dark: 'bg-neutral-900 text-white',
  }

  const Container = animate ? motion.section : 'section'
  const animationProps = animate ? {
    variants: stagger ? staggerContainer : fadeUp,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-100px" },
  } : {}

  return (
    <Container
      id={id}
      className={cn(
        'py-16 lg:py-24',
        backgroundClasses[background],
        className
      )}
      {...animationProps}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-14 gap-4">
          {children}
        </div>
      </div>
    </Container>
  )
}

export default SectionContainer
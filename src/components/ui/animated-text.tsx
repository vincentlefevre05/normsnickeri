'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { textReveal, characterReveal } from '@/lib/animations'
import { splitText } from '@/lib/utils'

interface AnimatedTextProps {
  text: string
  type?: 'words' | 'characters'
  className?: string
  staggerDelay?: number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  type = 'words',
  className = '',
  staggerDelay = 0.02,
  as: Component = 'div',
}) => {
  const textParts = splitText(text, type)
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: type === 'words' ? 20 : 10,
    },
    visible: { 
      opacity: 1,
      y: 0,
    },
  }

  if (Component === 'div') {
    return (
      <div className={className}>
        <motion.span
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="inline-block"
        >
          {textParts.map((part, index) => (
            <motion.span
              key={index}
              variants={itemVariants}
              className="inline-block"
              style={{ 
                marginRight: type === 'words' ? '0.25em' : '0',
              }}
            >
              {part}
            </motion.span>
          ))}
        </motion.span>
      </div>
    )
  } else if (Component === 'h1') {
    return (
      <h1 className={className}>
        <motion.span
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="inline-block"
        >
          {textParts.map((part, index) => (
            <motion.span
              key={index}
              variants={itemVariants}
              className="inline-block"
              style={{ 
                marginRight: type === 'words' ? '0.25em' : '0',
              }}
            >
              {part}
            </motion.span>
          ))}
        </motion.span>
      </h1>
    )
  } else if (Component === 'span') {
    return (
      <span className={className}>
        <motion.span
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="inline-block"
        >
          {textParts.map((part, index) => (
            <motion.span
              key={index}
              variants={itemVariants}
              className="inline-block"
              style={{ 
                marginRight: type === 'words' ? '0.25em' : '0',
              }}
            >
              {part}
            </motion.span>
          ))}
        </motion.span>
      </span>
    )
  }

  // Default fallback
  return (
    <div className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="inline-block"
      >
        {textParts.map((part, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            className="inline-block"
            style={{ 
              marginRight: type === 'words' ? '0.25em' : '0',
            }}
          >
            {part}
          </motion.span>
        ))}
      </motion.span>
    </div>
  )
}

export default AnimatedText
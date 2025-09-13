'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { companyInfo } from '@/data/content'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkBackground, setIsDarkBackground] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const scrollThreshold = 5 // Minimum scroll distance to trigger hide/show

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDifference = currentScrollY - lastScrollY.current
      
      // Check if we're scrolled past the hero section (approximate)
      setIsDarkBackground(false) // Always use dark logo on light backgrounds for now
      
      // Only update visibility if scroll difference exceeds threshold
      if (Math.abs(scrollDifference) > scrollThreshold) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          // Scrolling down and past initial area
          setIsVisible(false)
        } else {
          // Scrolling up
          setIsVisible(true)
        }
        lastScrollY.current = currentScrollY
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Hem', href: '#top' },
    { name: 'Tjänster', href: '#tjanster' },
    { name: 'Galleri', href: '#galleri' },
    { name: 'Om oss', href: '#about-norm' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto" style={{paddingLeft: '40px', paddingRight: '40px'}}>
        <div className="flex items-center justify-between py-6" style={{minHeight: '90px'}}>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={isDarkBackground ? '/logo-light.png' : '/logo-dark.png'}
              alt="Norm Snickeri"
              width={200}
              height={40}
              className="h-10 w-auto transition-opacity duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center backdrop-blur-md bg-white/70 px-6 py-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-600 hover:text-black transition-colors duration-200 font-medium text-lg px-4"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Link href="#kontakt">
              <button className={`px-10 py-3 font-medium transition-all duration-300 ${
                isDarkBackground 
                  ? 'bg-white hover:bg-gray-100 text-black' 
                  : 'bg-[#333232] hover:bg-black text-[#fefbfa]'
              }`}>
                Kontakta oss
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-neutral-600 hover:text-black transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#fefbfa] border-t border-neutral-200">
          <nav className="max-w-7xl mx-auto py-6" style={{paddingLeft: '40px', paddingRight: '40px'}}>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg text-neutral-600 hover:text-black transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-neutral-200">
                <Link href="#kontakt" onClick={() => setIsMenuOpen(false)}>
                  <button className={`w-full px-10 py-3 font-medium transition-all duration-300 ${
                    isDarkBackground 
                      ? 'bg-white hover:bg-gray-100 text-black' 
                      : 'bg-[#333232] hover:bg-black text-[#fefbfa]'
                  }`}>
                    Kontakta oss
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
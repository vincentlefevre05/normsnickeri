import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const menuItems = [
    { name: 'Om oss', href: '#om-oss' },
    { name: 'Våra tjänster', href: '#tjanster' },
    { name: 'Så arbetar vi', href: '#process' },
    { name: 'Galleri', href: '#galleri' },
    { name: 'Kontakt', href: '#kontakt' },
  ]

  return (
    <footer className="bg-neutral-800 text-neutral-300">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto" style={{paddingLeft: '60px', paddingRight: '60px', paddingTop: '80px', paddingBottom: '40px'}}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Left side - Company tagline */}
          <div className="space-y-6">
            <p className="text-[1.5rem] font-serif font-normal text-white leading-relaxed max-w-md">
              Vi är specialister på måttanpassade snickerier med precision i form, funktion och material.
            </p>
            <Link href="#kontakt">
              <button className="bg-white hover:bg-neutral-200 text-[#2a2a2a] px-8 py-4 font-medium transition-colors duration-200 text-base">
                Kontakta oss
              </button>
            </Link>
          </div>

          {/* Right side - Navigation columns */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Products/Services column */}
            <div>
              <h4 className="text-base font-semibold text-white mb-6">
                Tjänster
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#tjanster" className="text-neutral-400 hover:text-white transition-colors text-sm">
                    Platsbyggda möbler
                  </Link>
                </li>
                <li>
                  <Link href="#tjanster" className="text-neutral-400 hover:text-white transition-colors text-sm">
                    Specialsnickerier
                  </Link>
                </li>
                <li>
                  <Link href="#tjanster" className="text-neutral-400 hover:text-white transition-colors text-sm">
                    Kök & badrum
                  </Link>
                </li>
                <li>
                  <Link href="#tjanster" className="text-neutral-400 hover:text-white transition-colors text-sm">
                    Renovering
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources column */}
            <div>
              <h4 className="text-base font-semibold text-white mb-6">
                Information
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#om-oss" className="text-neutral-400 hover:text-white transition-colors text-sm">
                    Om oss
                  </Link>
                </li>
                <li>
                  <Link href="#process" className="text-neutral-400 hover:text-white transition-colors text-sm">
                    Vår process
                  </Link>
                </li>
                <li>
                  <Link href="#galleri" className="text-neutral-400 hover:text-white transition-colors text-sm">
                    Galleri
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
                    Referenser
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <h4 className="text-base font-semibold text-white mb-6">
                Kontakt
              </h4>
              <ul className="space-y-3">
                <li className="text-neutral-400 text-sm">
                  <p className="font-medium text-white">Ring oss</p>
                  <a href="tel:+46705123456" className="hover:text-white transition-colors">
                    070-512 34 56
                  </a>
                </li>
                <li className="text-neutral-400 text-sm">
                  <p className="font-medium text-white mt-4">Mejla oss</p>
                  <a href="mailto:info@normsnickeri.se" className="hover:text-white transition-colors">
                    info@normsnickeri.se
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Logo and tagline */}
        <div className="border-t border-neutral-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex items-center gap-4">
              <Image
                src="/logo-light.png"
                alt="Norm Snickeri"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            
            <p className="text-sm text-neutral-500">
              © {currentYear} Norm Snickeri. Alla rättigheter förbehållna.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
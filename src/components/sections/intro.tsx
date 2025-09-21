import React from 'react'
import Link from 'next/link'

const Intro = () => {
  return (
    <section id="intro" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto" style={{paddingLeft: '60px', paddingRight: '60px'}}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Title */}
          <div className="py-4">
            <h2 className="text-[2rem] md:text-[2.5rem] font-serif font-normal leading-[1.2] tracking-[0.01em] text-black">
              Vi skapar lösningar för hem, kontor och offentliga miljöer.
            </h2>
          </div>
          
          {/* Right Column - Text and CTA */}
          <div className="py-4">
            <p className="text-lg md:text-xl font-sans font-normal leading-[1.5] text-neutral-600 mb-8">
              Vi förvandlar idéer till form, alltid med känsla för detaljer och material. I tätt samarbete med kund, fastighetsförvaltare, arkitekter och inredningsdesigners förverkligar vi komplexa idéer med hög finish.
            </p>
            
            <Link href="#tjanster">
              <button className="bg-[#2a2a2a] hover:bg-[#333] text-[#fefbfa] px-8 py-4 font-medium transition-colors duration-200 text-base">
                Se våra tjänster
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
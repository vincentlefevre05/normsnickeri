import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="top" className="min-h-screen flex items-center bg-[#fefbfa]">
      <div className="max-w-7xl mx-auto w-full" style={{paddingLeft: '60px', paddingRight: '60px', paddingTop: '120px', paddingBottom: '60px'}}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Main Heading */}
            <h1 className="text-[2rem] md:text-[2.5rem] font-serif font-normal leading-[1.2] tracking-[0.01em] text-black">
              Vi gör detaljerna. Detaljerna gör helheten.
            </h1>
            
            {/* Subheading */}
            <p className="text-lg md:text-xl font-sans font-normal leading-[1.5] text-neutral-600">
              Måttanpassade snickerier med precision i form, funktion och material.
            </p>
            
            {/* CTA Button */}
            <div className="pt-4">
              <Link href="#process">
                <button className="bg-[#2a2a2a] hover:bg-[#333] text-[#fefbfa] px-8 py-4 font-medium transition-colors duration-200 text-base">
                  Så arbetar vi
                </button>
              </Link>
            </div>
          </div>
          
          {/* Right Column - Video */}
          <div className="relative flex justify-end">
            <div className="w-full max-h-[70vh]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              >
                <source src="/hero-interior-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
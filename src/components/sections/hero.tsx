import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section id="top" className="min-h-screen flex items-start lg:items-center bg-[#fefbfa]">
      <div className="max-w-7xl mx-auto w-full pt-32 pb-12 px-8 sm:pt-36 lg:pt-[120px] lg:pb-[60px] lg:px-[60px]">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Text Content */}
          <div className="space-y-6 lg:order-1">
            {/* Main Heading */}
            <h1 className="text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] font-serif font-normal leading-[1.2] tracking-[0.01em] text-black">
              Vi gör detaljerna. Detaljerna gör helheten.
            </h1>
            
            {/* Subheading */}
            <p className="text-lg md:text-xl lg:text-xl font-sans font-normal leading-[1.5] text-neutral-600">
              Måttanpassade snickerier med precision i form, funktion och material.
            </p>
            
            {/* CTA Button */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <Link href="#process">
                <button className="w-full bg-[#2a2a2a] hover:bg-[#333] text-[#fefbfa] px-34 py-3 font-medium transition-colors duration-200 text-base lg:w-auto lg:px-20 lg:py-3">
                  Så arbetar vi
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden">
            <img
              src="/hero-mobile.jpg"
              alt="Norm Snickeri interiör"
              className="w-full h-auto"
            />
          </div>

          {/* Desktop Video */}
          <div className="hidden lg:flex lg:justify-end lg:order-2">
            <div className="w-full max-h-[70vh]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              >
                <source src="https://wbla6tjpp6zcbpyx.public.blob.vercel-storage.com/Gen-4%2520Turbo%2520Video%252C%2520I%2520want%2520you%2520to%2520make%2520a%2520video%2520in%2520which%2520the%2520camera%2520moves%2520steadily%2520and%2520very%2520slowly%2520forward%2520through%2520the%2520interior%2520%25203418647912%25204K.mp4" type="video/mp4" />
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

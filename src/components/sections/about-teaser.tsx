import React from 'react'
import Link from 'next/link'

const AboutTeaser = () => {
  return (
    <section id="om-oss" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto" style={{paddingLeft: '60px', paddingRight: '60px'}}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Title */}
          <div>
            <h2 className="text-[2.5rem] md:text-[3rem] font-serif font-normal leading-[1.1] tracking-[0.01em] text-black">
              Om oss
            </h2>
          </div>
          
          {/* Right Column - Text and CTA */}
          <div>
            <p className="text-2xl font-sans font-normal leading-[1.4] text-neutral-600 mb-8">
              Vi kombinerar hantverk, materialkunskap och noggrann projektledning. Med lång erfarenhet från både privata och offentliga miljöer levererar vi snickerier med hög finish – i tid.
            </p>
            
            <Link href="#kontakt">
              <button className="bg-[#2a2a2a] hover:bg-[#333] text-[#fefbfa] px-10 py-5 font-medium transition-colors duration-200 text-lg">
                Kontakta oss
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutTeaser
'use client'

import React from 'react'

const CTAContact = () => {
  return (
    <section id="kontakt" className="py-24 bg-[#2a2a2a]">
      <div className="max-w-7xl mx-auto text-center" style={{paddingLeft: '60px', paddingRight: '60px'}}>
        <h2 className="text-[2rem] md:text-[2.5rem] font-serif font-normal leading-[1.2] tracking-[0.01em] text-white mb-4">
          Har du ett projekt?
        </h2>
        <p className="text-lg text-neutral-300 mb-8">
          Skicka en förfrågan så återkommer vi snabbt.
        </p>
        
        {/* Scroll to contact form below */}
        <button 
          onClick={() => {
            const contactForm = document.getElementById('contact-form-section');
            contactForm?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-white hover:bg-neutral-100 text-[#2a2a2a] px-8 py-4 font-medium transition-colors duration-200 text-base"
        >
          Kontakta oss
        </button>
      </div>
    </section>
  )
}

export default CTAContact
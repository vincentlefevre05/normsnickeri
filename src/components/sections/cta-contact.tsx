'use client'

import React from 'react'

const CTAContact = () => {
  return (
    <section id="kontakt" className="py-24 bg-[#2a2a2a]">
      <div className="max-w-7xl mx-auto text-center px-8 lg:px-[60px]">
        <h2 className="text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] font-serif font-normal leading-[1.2] tracking-[0.01em] text-white mb-4">
          Har du ett projekt?
        </h2>
        <p className="text-base lg:text-lg text-neutral-300 mb-8">
          Skicka en förfrågan så återkommer vi snabbt.
        </p>
        
        {/* Scroll to contact form below */}
        <button 
          onClick={() => {
            const contactForm = document.getElementById('contact-form-section');
            contactForm?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-white hover:bg-neutral-100 text-[#2a2a2a] px-6 py-3 lg:px-8 lg:py-4 font-medium transition-colors duration-200 text-base"
        >
          Kontakta oss
        </button>
      </div>
    </section>
  )
}

export default CTAContact
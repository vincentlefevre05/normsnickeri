'use client'

import React, { useState } from 'react'
import { Send, Upload } from 'lucide-react'

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDescription: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectDescription: ''
      })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  if (submitStatus === 'success') {
    return (
      <section id="contact-form-section" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-[#fefbfa] p-12">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">
              Tack! Vi hör av oss inom kort.
            </h3>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="bg-[#2a2a2a] hover:bg-[#333] text-[#fefbfa] px-6 py-3 font-medium transition-colors duration-200 text-sm"
            >
              Skicka ny förfrågan
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact-form-section" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
              Namn *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-200 focus:ring-2 focus:ring-[#2a2a2a] focus:border-transparent transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
              E-post *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-200 focus:ring-2 focus:ring-[#2a2a2a] focus:border-transparent transition-colors"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-200 focus:ring-2 focus:ring-[#2a2a2a] focus:border-transparent transition-colors"
            />
          </div>

          {/* Project Description */}
          <div>
            <label htmlFor="projectDescription" className="block text-sm font-medium text-neutral-700 mb-2">
              Projektbeskrivning *
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              required
              rows={4}
              value={formData.projectDescription}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-200 focus:ring-2 focus:ring-[#2a2a2a] focus:border-transparent transition-colors resize-vertical"
              placeholder="Beskriv ditt projekt..."
            />
          </div>


          {/* File upload */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Filuppladdning
            </label>
            <div className="w-full px-4 py-8 border-2 border-dashed border-neutral-300 text-center hover:border-neutral-400 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
              <p className="text-sm text-neutral-600">Dra och släpp filer här eller klicka för att välja</p>
              <input
                type="file"
                className="hidden"
                accept="image/*,.pdf,.doc,.docx"
                multiple
              />
            </div>
          </div>


          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#2a2a2a] hover:bg-[#333] disabled:bg-neutral-400 text-white px-8 py-4 font-semibold text-base transition-all duration-300 flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white animate-spin" />
                Skickar...
              </>
            ) : (
              <>
                Skicka förfrågan
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactFormSection
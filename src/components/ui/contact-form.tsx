'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react'
import { fadeUp, staggerItem } from '@/lib/animations'
import { validatePhoneNumber, formatPhoneNumber } from '@/lib/utils'
import { ContactFormData } from '@/types'

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Navn må være minst 2 tegn'),
  email: z.string().email('Ugyldig e-postadresse'),
  phone: z.string().refine(validatePhoneNumber, 'Ugyldig norsk telefonnummer'),
  projectType: z.string().min(1, 'Velg prosjekttype'),
  budget: z.string().min(1, 'Velg budsjettramme'),
  timeline: z.string().min(1, 'Velg tidsramme'),
  description: z.string().min(10, 'Beskrivelse må være minst 10 tegn'),
  location: z.string().min(2, 'Sted er påkrevd'),
  consent: z.boolean().refine(val => val === true, 'Du må samtykke til behandling av personopplysninger'),
})

type ContactFormSchema = z.infer<typeof contactFormSchema>

interface ContactFormProps {
  variant?: 'full' | 'simple'
  className?: string
}

const ContactForm: React.FC<ContactFormProps> = ({
  variant = 'full',
  className = '',
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  })

  const phoneValue = watch('phone')

  // Handle phone number formatting
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setValue('phone', formatted)
  }

  const onSubmit = async (data: ContactFormSchema) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Here you would typically send the data to your API
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Form submitted:', data)
      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const projectTypes = [
    { value: 'renovation', label: 'Renovering' },
    { value: 'newbuild', label: 'Nybygg' },
    { value: 'extension', label: 'Påbygg/Tilbygg' },
    { value: 'commercial', label: 'Næringsbygg' },
    { value: 'other', label: 'Annet' },
  ]

  const budgetRanges = [
    { value: '0-500k', label: 'Under 500.000 kr' },
    { value: '500k-1m', label: '500.000 - 1.000.000 kr' },
    { value: '1m-2m', label: '1.000.000 - 2.000.000 kr' },
    { value: '2m-5m', label: '2.000.000 - 5.000.000 kr' },
    { value: '5m+', label: 'Over 5.000.000 kr' },
  ]

  const timelines = [
    { value: 'asap', label: 'Så snart som mulig' },
    { value: '1-3months', label: '1-3 måneder' },
    { value: '3-6months', label: '3-6 måneder' },
    { value: '6-12months', label: '6-12 måneder' },
    { value: 'flexible', label: 'Fleksibel' },
  ]

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-white rounded-2xl p-8 shadow-lg text-center ${className}`}
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-neutral-900 mb-4">
          Takk for din henvendelse!
        </h3>
        <p className="text-neutral-600 mb-6">
          Vi har mottatt din forespørsel og vil kontakte deg innen 24 timer. 
          I mellomtiden kan du ringe oss direkte på <strong>+47 123 45 678</strong>.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="bg-construction-orange hover:bg-construction-orange/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
        >
          Send ny forespørsel
        </button>
      </motion.div>
    )
  }

  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onSubmit={handleSubmit(onSubmit)}
      className={`bg-white rounded-2xl p-8 shadow-lg space-y-6 ${className}`}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-neutral-900 mb-2">
          Få gratis tilbud
        </h3>
        <p className="text-neutral-600">
          Fortell oss om ditt prosjekt, så kontakter vi deg innen 24 timer
        </p>
      </div>

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <p className="text-red-700">
            Det oppstod en feil ved innsending. Vennligst prøv igjen eller kontakt oss direkte.
          </p>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <motion.div variants={staggerItem} className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
            Fullt navn *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-colors"
            placeholder="Ditt fulle navn"
          />
          {errors.name && (
            <p className="text-red-600 text-sm">{errors.name.message}</p>
          )}
        </motion.div>

        {/* Email */}
        <motion.div variants={staggerItem} className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
            E-postadresse *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-colors"
            placeholder="din@epost.no"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </motion.div>

        {/* Phone */}
        <motion.div variants={staggerItem} className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">
            Telefonnummer *
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            value={phoneValue || ''}
            onChange={handlePhoneChange}
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-colors"
            placeholder="123 45 678"
          />
          {errors.phone && (
            <p className="text-red-600 text-sm">{errors.phone.message}</p>
          )}
        </motion.div>

        {/* Location */}
        <motion.div variants={staggerItem} className="space-y-2">
          <label htmlFor="location" className="block text-sm font-medium text-neutral-700">
            Sted *
          </label>
          <input
            {...register('location')}
            type="text"
            id="location"
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-colors"
            placeholder="Oslo, Bergen, etc."
          />
          {errors.location && (
            <p className="text-red-600 text-sm">{errors.location.message}</p>
          )}
        </motion.div>

        {/* Project type */}
        <motion.div variants={staggerItem} className="space-y-2">
          <label htmlFor="projectType" className="block text-sm font-medium text-neutral-700">
            Prosjekttype *
          </label>
          <select
            {...register('projectType')}
            id="projectType"
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-colors"
          >
            <option value="">Velg prosjekttype</option>
            {projectTypes.map(type => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
          {errors.projectType && (
            <p className="text-red-600 text-sm">{errors.projectType.message}</p>
          )}
        </motion.div>

        {/* Budget */}
        <motion.div variants={staggerItem} className="space-y-2">
          <label htmlFor="budget" className="block text-sm font-medium text-neutral-700">
            Budsjettramme *
          </label>
          <select
            {...register('budget')}
            id="budget"
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-colors"
          >
            <option value="">Velg budsjettramme</option>
            {budgetRanges.map(range => (
              <option key={range.value} value={range.value}>{range.label}</option>
            ))}
          </select>
          {errors.budget && (
            <p className="text-red-600 text-sm">{errors.budget.message}</p>
          )}
        </motion.div>

        {/* Timeline */}
        <motion.div variants={staggerItem} className="md:col-span-2 space-y-2">
          <label htmlFor="timeline" className="block text-sm font-medium text-neutral-700">
            Ønsket tidsramme *
          </label>
          <select
            {...register('timeline')}
            id="timeline"
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-colors"
          >
            <option value="">Velg tidsramme</option>
            {timelines.map(timeline => (
              <option key={timeline.value} value={timeline.value}>{timeline.label}</option>
            ))}
          </select>
          {errors.timeline && (
            <p className="text-red-600 text-sm">{errors.timeline.message}</p>
          )}
        </motion.div>
      </div>

      {/* Description */}
      <motion.div variants={staggerItem} className="space-y-2">
        <label htmlFor="description" className="block text-sm font-medium text-neutral-700">
          Beskrivelse av prosjekt *
        </label>
        <textarea
          {...register('description')}
          id="description"
          rows={4}
          className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-colors resize-vertical"
          placeholder="Beskriv ditt prosjekt i detalj. Inkluder ønsker, krav og andre relevante opplysninger..."
        />
        {errors.description && (
          <p className="text-red-600 text-sm">{errors.description.message}</p>
        )}
      </motion.div>

      {/* Consent */}
      <motion.div variants={staggerItem} className="space-y-4">
        <div className="flex items-start gap-3">
          <input
            {...register('consent')}
            type="checkbox"
            id="consent"
            className="mt-1 w-4 h-4 text-construction-orange bg-white border-neutral-300 rounded focus:ring-construction-orange focus:ring-2"
          />
          <label htmlFor="consent" className="text-sm text-neutral-700 leading-relaxed">
            Jeg samtykker til at Normbygg behandler mine personopplysninger for å kunne 
            kontakte meg angående min forespørsel. Les mer om hvordan vi behandler 
            personopplysninger i vår{' '}
            <a href="/personvern" className="text-construction-blue hover:underline">
              personvernpolicy
            </a>.
          </label>
        </div>
        {errors.consent && (
          <p className="text-red-600 text-sm">{errors.consent.message}</p>
        )}
      </motion.div>

      {/* Submit button */}
      <motion.div variants={staggerItem} className="pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-construction-orange hover:bg-construction-orange/90 disabled:bg-neutral-400 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sender...
            </>
          ) : (
            <>
              Send forespørsel
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </motion.div>

      {/* Alternative contact methods */}
      <motion.div variants={staggerItem} className="pt-6 border-t border-neutral-200">
        <p className="text-center text-sm text-neutral-600 mb-4">
          Eller kontakt oss direkte:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+4712345678"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors duration-200"
          >
            <Phone className="w-4 h-4 text-construction-orange" />
            <span className="text-neutral-700 font-medium">+47 123 45 678</span>
          </a>
          <a
            href="mailto:post@normbygg.no"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors duration-200"
          >
            <Mail className="w-4 h-4 text-construction-orange" />
            <span className="text-neutral-700 font-medium">post@normbygg.no</span>
          </a>
        </div>
      </motion.div>
    </motion.form>
  )
}

export default ContactForm
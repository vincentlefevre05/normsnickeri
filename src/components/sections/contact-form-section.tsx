'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send, Upload, X, AlertCircle, CheckCircle } from 'lucide-react'
import { contactFormSchema, ContactFormData, validateFile, fileValidation } from '@/lib/validations/contact-form'

const ContactFormSection = () => {
  const [files, setFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const [dragActive, setDragActive] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return

    const newFiles = Array.from(selectedFiles)
    
    // Validate total number of files
    if (files.length + newFiles.length > fileValidation.maxFiles) {
      setSubmitMessage(`Du kan bara ladda upp max ${fileValidation.maxFiles} filer.`)
      setSubmitStatus('error')
      return
    }

    // Validate each file
    const validFiles: File[] = []
    for (const file of newFiles) {
      const validationError = validateFile(file)
      if (validationError) {
        setSubmitMessage(validationError)
        setSubmitStatus('error')
        return
      }
      validFiles.push(file)
    }

    setFiles(prev => [...prev, ...validFiles])
    setSubmitStatus('idle')
  }

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelect(e.dataTransfer.files)
    }
  }

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('phone', data.phone || '')
      formData.append('projectDescription', data.projectDescription)
      
      // Add files
      files.forEach((file) => {
        formData.append('files', file)
      })
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })
      
      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.error || 'Ett fel uppstod')
      }
      
      setSubmitStatus('success')
      setSubmitMessage('Tack! Vi har tagit emot din förfrågan och kommer att höra av oss inom kort.')
      
      // Reset form and files
      reset()
      setFiles([])
      
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage(error instanceof Error ? error.message : 'Ett oväntat fel uppstod. Försök igen senare.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <section id="contact-form-section" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-[#fefbfa] p-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">
              {submitMessage}
            </h3>
            <button
              onClick={() => {
                setSubmitStatus('idle')
                setSubmitMessage('')
              }}
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
        {/* Error/Success Message */}
        {submitStatus === 'error' && submitMessage && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <p className="text-red-700 text-sm">{submitMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
              Namn *
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className={`w-full px-4 py-3 border ${errors.name ? 'border-red-300' : 'border-neutral-200'} focus:ring-2 focus:ring-[#2a2a2a] focus:border-transparent transition-colors`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
              E-post *
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className={`w-full px-4 py-3 border ${errors.email ? 'border-red-300' : 'border-neutral-200'} focus:ring-2 focus:ring-[#2a2a2a] focus:border-transparent transition-colors`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone')}
              className="w-full px-4 py-3 border border-neutral-200 focus:ring-2 focus:ring-[#2a2a2a] focus:border-transparent transition-colors"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          {/* Project Description */}
          <div>
            <label htmlFor="projectDescription" className="block text-sm font-medium text-neutral-700 mb-2">
              Projektbeskrivning *
            </label>
            <textarea
              id="projectDescription"
              {...register('projectDescription')}
              rows={4}
              className={`w-full px-4 py-3 border ${errors.projectDescription ? 'border-red-300' : 'border-neutral-200'} focus:ring-2 focus:ring-[#2a2a2a] focus:border-transparent transition-colors resize-vertical`}
              placeholder="Beskriv ditt projekt..."
            />
            {errors.projectDescription && (
              <p className="mt-1 text-sm text-red-600">{errors.projectDescription.message}</p>
            )}
          </div>

          {/* File upload */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Filuppladdning
            </label>
            <div 
              className={`w-full px-4 py-8 border-2 border-dashed ${
                dragActive ? 'border-[#2a2a2a] bg-neutral-50' : 'border-neutral-300'
              } text-center hover:border-neutral-400 transition-colors cursor-pointer`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => document.getElementById('file-input')?.click()}
            >
              <Upload className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
              <p className="text-sm text-neutral-600 mb-1">
                Dra och släpp filer här eller klicka för att välja
              </p>
              <p className="text-xs text-neutral-500">
                Max {fileValidation.maxFiles} filer, 10MB vardera. Tillåtna format: bilder, PDF, Word-dokument
              </p>
              <input
                id="file-input"
                type="file"
                className="hidden"
                accept="image/*,.pdf,.doc,.docx"
                multiple
                onChange={(e) => handleFileSelect(e.target.files)}
              />
            </div>

            {/* File list */}
            {files.length > 0 && (
              <div className="mt-4 space-y-2">
                <p className="text-sm font-medium text-neutral-700">Valda filer:</p>
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-neutral-700">{file.name}</span>
                      <span className="text-xs text-neutral-500">({(file.size / 1024 / 1024).toFixed(1)} MB)</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-neutral-400 hover:text-red-500 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
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
import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Namn är obligatoriskt').max(100, 'Namnet får inte vara längre än 100 tecken'),
  email: z.string().min(1, 'E-post är obligatorisk').email('Ogiltig e-postadress'),
  phone: z.string().optional(),
  projectDescription: z.string().min(1, 'Projektbeskrivning är obligatorisk').max(2000, 'Projektbeskrivningen får inte vara längre än 2000 tecken'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const fileValidation = {
  maxSize: 10 * 1024 * 1024, // 10MB
  allowedTypes: [
    'image/jpeg',
    'image/png', 
    'image/gif',
    'image/webp',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ],
  maxFiles: 5
}

export function validateFile(file: File): string | null {
  if (file.size > fileValidation.maxSize) {
    return `Filen ${file.name} är för stor. Maximal storlek är 10MB.`
  }
  
  if (!fileValidation.allowedTypes.includes(file.type)) {
    return `Filtypen för ${file.name} är inte tillåten. Tillåtna filtyper: bilder, PDF, Word-dokument.`
  }
  
  return null
}
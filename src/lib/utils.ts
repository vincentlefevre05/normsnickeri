import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Animation utilities based on TypeFive analysis
export const animationConfig = {
  duration: 2,
  delay: 0.4,
  staggerDelay: 0.03,
  bounce: 0.1,
}

// Text splitting utility for animations
export function splitText(text: string, type: 'words' | 'characters' = 'words') {
  if (type === 'words') {
    return text.split(' ')
  }
  return text.split('')
}

// Construction industry form validation helpers
export function validatePhoneNumber(phone: string): boolean {
  // Norwegian phone number validation
  const norwegianPhoneRegex = /^(\+47|0047|47)?[2-9]\d{7}$/
  return norwegianPhoneRegex.test(phone.replace(/\s/g, ''))
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 8) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 5)} ${cleaned.slice(5)}`
  }
  return phone
}
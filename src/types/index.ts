// Construction industry specific types
export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  estimatedTime: string
  priceRange?: string
}

export interface Project {
  id: string
  title: string
  description: string
  category: 'renovation' | 'newbuild' | 'commercial' | 'extension'
  location: string
  completionDate: string
  images: {
    before?: string
    during?: string[]
    after: string
  }
  testimonial?: {
    quote: string
    client: string
    rating: number
  }
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  projectType: string
  budget: string
  timeline: string
  description: string
  location: string
  consent: boolean
}

export interface Testimonial {
  id: string
  name: string
  company?: string
  project: string
  rating: number
  quote: string
  image?: string
  date: string
}

// Animation types
export interface AnimationVariants {
  [key: string]: {
    opacity?: number
    y?: number
    x?: number
    scale?: number
    transition?: {
      duration?: number
      delay?: number
      staggerChildren?: number
      delayChildren?: number
      ease?: number[] | string
    }
  }
}
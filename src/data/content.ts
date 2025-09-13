import { Service, Project, Testimonial } from '@/types'

// Construction services for Normbygg
export const services: Service[] = [
  {
    id: 'renovation',
    title: 'Renovering',
    description: 'Fullservice renovering av kjøkken, bad og hele hjem med fokus på kvalitet og moderne design.',
    icon: 'Hammer',
    features: [
      'Kjøkkenrenovering',
      'Badrenovering', 
      'Helrenovering',
      'Moderne design',
      'Kvalitetsmaterialer'
    ],
    estimatedTime: '4-12 uker',
    priceRange: 'Fra 150.000 kr'
  },
  {
    id: 'newbuild',
    title: 'Nybygg',
    description: 'Komplett nybygg av moderne hjem tilpasset dine behov og ønsker.',
    icon: 'Building',
    features: [
      'Arkitektonisk design',
      'Moderne byggemetoder',
      'Energieffektive løsninger',
      'Tilpasset design',
      'Fullservice byggeprosess'
    ],
    estimatedTime: '8-18 måneder',
    priceRange: 'Fra 3.500.000 kr'
  },
  {
    id: 'extension',
    title: 'Påbygg & Tilbygg',
    description: 'Utvid ditt hjem med påbygg og tilbygg som matcher eksisterende arkitektur.',
    icon: 'Plus',
    features: [
      'Arkitektbistand',
      'Byggetillatelse',
      'Sømløs integrasjon',
      'Økt boligareal',
      'Verdiøkning'
    ],
    estimatedTime: '6-14 uker',
    priceRange: 'Fra 400.000 kr'
  },
  {
    id: 'commercial',
    title: 'Næringsbygg',
    description: 'Profesjonelle byggeløsninger for næringsliv med fokus på funksjonalitet.',
    icon: 'Factory',
    features: [
      'Kontorbygg',
      'Lager og industri',
      'Forretningslokaler',
      'Tilpassede løsninger',
      'Prosjektledelse'
    ],
    estimatedTime: '3-12 måneder',
    priceRange: 'Tilbud på forespørsel'
  }
]

// Sample projects for portfolio
export const projects: Project[] = [
  {
    id: 'villa-oslo',
    title: 'Moderne Villa - Oslo',
    description: 'Fullrenovering av 1970-talls villa med moderne tilnærming og bærekraftige materialer.',
    category: 'renovation',
    location: 'Oslo',
    completionDate: '2024-05-15',
    images: {
      after: '/projects/villa-oslo-after.jpg',
      before: '/projects/villa-oslo-before.jpg',
      during: [
        '/projects/villa-oslo-progress1.jpg',
        '/projects/villa-oslo-progress2.jpg'
      ]
    },
    testimonial: {
      quote: 'Normbygg leverte utover forventningene våre. Profesjonelt arbeid og fantastisk resultat.',
      client: 'Familie Hansen',
      rating: 5
    }
  },
  {
    id: 'office-bergen',
    title: 'Moderne Kontorbygg - Bergen',
    description: 'Nybygg av energieffektivt kontorbygg med moderne arbeidsplasser.',
    category: 'newbuild',
    location: 'Bergen',
    completionDate: '2024-03-20',
    images: {
      after: '/projects/office-bergen.jpg'
    }
  }
]

// Customer testimonials
export const testimonials: Testimonial[] = [
  {
    id: 'hansen-family',
    name: 'Erik Hansen',
    project: 'Kjøkkenrenovering',
    rating: 5,
    quote: 'Utrolig profesjonell service fra start til slutt. Vårt nye kjøkken er helt fantastisk!',
    date: '2024-06-10'
  },
  {
    id: 'andersen-company',
    name: 'Marta Andersen',
    company: 'Andersen AS',
    project: 'Kontorbygg',
    rating: 5,
    quote: 'Normbygg leverte vårt nye kontorbygg i tide og innenfor budsjett. Anbefaler på det sterkeste.',
    date: '2024-04-15'
  },
  {
    id: 'olsen-renovation',
    name: 'Thomas Olsen',
    project: 'Helrenovering',
    rating: 5,
    quote: 'Fantastisk håndverk og god kommunikasjon gjennom hele prosjektet. Meget fornøyd!',
    date: '2024-07-02'
  }
]

// Company information
export const companyInfo = {
  name: 'Normbygg',
  tagline: 'Kvalitet i hver detalj',
  description: 'Normbygg er et ledende byggefirma som leverer høykvalitets byggeprosjekter i hele Norge.',
  phone: '+47 123 45 678',
  email: 'post@normbygg.no',
  address: 'Byggeveien 123, 0123 Oslo',
  orgNumber: '123 456 789',
  serviceAreas: ['Oslo', 'Bergen', 'Trondheim', 'Stavanger', 'Kristiansand'],
  established: '2010',
  employees: '25+'
}
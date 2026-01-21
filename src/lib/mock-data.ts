import type { Testimonial, Partner, Category, Project } from '@/types/schema';

export const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Bride',
    company: 'Johnson Wedding',
    rating: 5,
    quote: 'MurimDeco transformed our wedding venue into an absolute dream! The gold and white theme was executed perfectly, and every detail was stunning. Highly recommended!',
    image: 'https://images.pexels.com/photos/30004322/pexels-photo-30004322.jpeg',
    event_type: 'Wedding'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Event Manager',
    company: 'TechCorp Inc.',
    rating: 5,
    quote: 'The corporate event decoration exceeded all our expectations. Professional, elegant, and perfectly aligned with our brand. The team was incredible to work with!',
    image: 'https://images.unsplash.com/photo-1752118465028-4a135f89e474?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxOHx8cHJvZmVzc2lvbmFsJTIwYnVzaW5lc3MlMjBtYW4lMjBoZWFkc2hvdCUyMHBvcnRyYWl0JTIwc21pbGluZyUyMGNvbmZpZGVudCUyMGNvcnBvcmF0ZSUyMHByb2Zlc3Npb25hbCUyMGJ1c2luZXNzfGVufDB8MXx8fDE3NjkwMDQ0OTl8MA&ixlib=rb-4.1.0&q=85',
    event_type: 'Corporate Event'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Mother',
    company: undefined,
    rating: 5,
    quote: "My daughter's birthday party was magical thanks to MurimDeco! The balloon decorations in gold and blue were absolutely beautiful. Worth every penny!",
    image: 'https://images.pexels.com/photos/29995646/pexels-photo-29995646.jpeg',
    event_type: 'Birthday Party'
  }
];

export const mockPartners: Partner[] = [
  {
    id: 1,
    name: 'Pepperfry',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2NjY2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBlcHBlcmZyeTwvdGV4dD4KPC9zdmc+',
    website: 'https://www.pepperfry.com'
  },
  {
    id: 2,
    name: 'Article',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2NjY2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFSVElDTEUuPC90ZXh0Pgo8L3N2Zz4=',
    website: 'https://www.article.com'
  },
  {
    id: 3,
    name: 'Instagram',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2NjY2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmluc3RhZ3JhbTwvdGV4dD4KPC9zdmc+',
    website: 'https://www.instagram.com'
  },
  {
    id: 4,
    name: 'Forbes',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjUiIGZvbnQtZmFtaWx5PSJHZW9yZ2lhLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2NjY2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkZvcmJlczwvdGV4dD4KPC9zdmc+',
    website: 'https://www.forbes.com'
  }
];

export const mockCategories: Category[] = [
  {
    id: 1,
    name: 'Weddings',
    icon: 'Heart',
    count: 24,
    slug: 'weddings'
  },
  {
    id: 2,
    name: 'Corporate Events',
    icon: 'Briefcase',
    count: 18,
    slug: 'corporate'
  },
  {
    id: 3,
    name: 'Birthday Parties',
    icon: 'Cake',
    count: 32,
    slug: 'birthdays'
  },
  {
    id: 4,
    name: 'Anniversaries',
    icon: 'Gift',
    count: 15,
    slug: 'anniversaries'
  },
  {
    id: 5,
    name: 'Baby Showers',
    icon: 'Baby',
    count: 12,
    slug: 'baby-showers'
  },
  {
    id: 6,
    name: 'Special Events',
    icon: 'Sparkles',
    count: 20,
    slug: 'special-events'
  }
];

export const mockProjects: Project[] = [
  {
    id: 1,
    title: 'Elegant Garden Wedding',
    client_name: 'Sarah & James',
    client_email: 'sarah@example.com',
    client_phone: '+1234567890',
    event_date: '2024-06-15',
    location: 'Botanical Gardens',
    budget: 25000,
    status: 'completed',
    created_at: '2024-03-01T00:00:00Z',
    updated_at: '2024-06-16T00:00:00Z',
    media: [
      {
        id: 1,
        type: 'image',
        path: 'https://images.pexels.com/photos/29040917/pexels-photo-29040917.jpeg',
        description: 'Beautiful wedding table centerpiece',
        is_public: true,
        upload_date: '2024-06-16',
        created_at: '2024-06-16T00:00:00Z',
        updated_at: '2024-06-16T00:00:00Z'
      }
    ]
  },
  {
    id: 2,
    title: 'Corporate Annual Gala',
    client_name: 'TechCorp Inc.',
    client_email: 'events@techcorp.com',
    client_phone: '+1234567891',
    event_date: '2024-09-20',
    location: 'Grand Hotel Ballroom',
    budget: 45000,
    status: 'completed',
    created_at: '2024-07-01T00:00:00Z',
    updated_at: '2024-09-21T00:00:00Z',
    media: [
      {
        id: 2,
        type: 'image',
        path: 'https://images.pexels.com/photos/4940642/pexels-photo-4940642.jpeg',
        description: 'Corporate event hall setup',
        is_public: true,
        upload_date: '2024-09-21',
        created_at: '2024-09-21T00:00:00Z',
        updated_at: '2024-09-21T00:00:00Z'
      }
    ]
  },
  {
    id: 3,
    title: 'Golden Birthday Celebration',
    client_name: 'Emily Rodriguez',
    client_email: 'emily@example.com',
    client_phone: '+1234567892',
    event_date: '2024-11-10',
    location: 'Private Residence',
    budget: 8000,
    status: 'completed',
    created_at: '2024-10-01T00:00:00Z',
    updated_at: '2024-11-11T00:00:00Z',
    media: [
      {
        id: 3,
        type: 'image',
        path: 'https://images.pexels.com/photos/7826299/pexels-photo-7826299.jpeg',
        description: '50th birthday party setup',
        is_public: true,
        upload_date: '2024-11-11',
        created_at: '2024-11-11T00:00:00Z',
        updated_at: '2024-11-11T00:00:00Z'
      }
    ]
  }
];

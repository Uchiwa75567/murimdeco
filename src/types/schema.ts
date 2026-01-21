export interface Media {
  id: number;
  type: 'image' | 'video';
  path: string;
  description?: string;
  author?: string;
  project_id?: number;
  is_public: boolean;
  upload_date: string;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: number;
  title: string;
  client_name: string;
  client_email: string;
  client_phone: string;
  event_date: string;
  location: string;
  budget: number;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  user_id?: number;
  reservation_id?: number;
  created_at: string;
  updated_at: string;
  media?: Media[];
}

export interface Reservation {
  client_name: string;
  client_email: string;
  client_phone: string;
  event_type: string;
  event_date: string;
  location: string;
  estimated_budget: number;
  message?: string;
  status?: 'pending' | 'contacted' | 'confirmed' | 'rejected';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  rating: number;
  quote: string;
  image?: string;
  event_type?: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
  website?: string;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  count: number;
  slug: string;
}

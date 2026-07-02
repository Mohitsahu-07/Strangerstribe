export interface Tour {
  id: string;
  title: string;
  description: string;
  destination: string;
  duration: number;
  price: number;
  maxParticipants: number;
  currentParticipants: number;
  image: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  inclusions: string[];
  difficulty: 'easy' | 'moderate' | 'hard';
  rating: number;
  reviews: number;
  spotsLeft?: number;
}

export interface Booking {
  id: string;
  tourId: string;
  userId: string;
  participants: number;
  totalPrice: number;
  bookingDate: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  bookings: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  origin: string;
  review: string;
  rating: number;
  tourName: string;
}

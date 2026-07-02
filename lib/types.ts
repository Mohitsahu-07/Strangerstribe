export interface Tour {
  id: string;
  title: string;
  description: string;
  destination: string;
  duration: number; // days
  price: number; // per person
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
  bookings: string[]; // booking IDs
}

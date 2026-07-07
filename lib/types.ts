export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface PricingPackage {
  name: string;
  price: number;
  originalPrice?: number;
}

export interface Tour {
  id: string;
  title: string;
  description: string;
  destination: string;
  duration: number;
  price: number;
  originalPrice?: number;
  maxParticipants: number;
  currentParticipants: number;
  image: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  inclusions: string[];
  itinerary: ItineraryDay[];
  difficulty: 'easy' | 'moderate' | 'hard';
  tripType: 'Group' | 'Solo' | 'Corporate';
  rating: number;
  reviews: number;
  spotsLeft?: number;
  staticPdf?: string;
  exclusions?: string[];
  thingsToCarry?: string[];
  safetyGuidelines?: string[];
  rulesAndPolicies?: string[];
  pricingPackages?: PricingPackage[];
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
  selectedPackage?: string;
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

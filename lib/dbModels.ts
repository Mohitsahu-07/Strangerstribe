import mongoose, { Schema } from 'mongoose';

const ItineraryDaySchema = new Schema({
  day: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  activities: [{ type: String }]
});

const PricingPackageSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number }
});

const TourSchema = new Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  destination: { type: String, required: true },
  duration: { type: Number, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  maxParticipants: { type: Number, required: true },
  currentParticipants: { type: Number, required: true, default: 0 },
  image: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  highlights: [{ type: String }],
  inclusions: [{ type: String }],
  itinerary: [ItineraryDaySchema],
  difficulty: { type: String, enum: ['easy', 'moderate', 'hard'], default: 'moderate' },
  tripType: { type: String, enum: ['Group', 'Solo', 'Corporate'], default: 'Group' },
  rating: { type: Number, default: 5 },
  reviews: { type: Number, default: 0 },
  spotsLeft: { type: Number },
  staticPdf: { type: String },
  exclusions: [{ type: String }],
  thingsToCarry: [{ type: String }],
  safetyGuidelines: [{ type: String }],
  rulesAndPolicies: [{ type: String }],
  pricingPackages: [PricingPackageSchema]
}, { timestamps: true });

const BookingSchema = new Schema({
  tourId: { type: String, required: true },
  userId: { type: String, required: true },
  participants: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  bookingDate: { type: String, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'confirmed' },
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customerPhone: { type: String, required: true },
  selectedPackage: { type: String }
}, { timestamps: true });

// Check if models exist, otherwise compile them
export const DbTour = mongoose.models.DbTour || mongoose.model('DbTour', TourSchema);
export const DbBooking = mongoose.models.DbBooking || mongoose.model('DbBooking', BookingSchema);

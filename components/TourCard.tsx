import { Tour } from '@/lib/types';
import Link from 'next/link';
import { Star, Users, Calendar, MapPin } from 'lucide-react';

export default function TourCard({ tour }: { tour: Tour }) {
  const availableSpots = tour.maxParticipants - tour.currentParticipants;

  return (
    <Link href={`/tours/${tour.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer">
        <div className="relative h-48 overflow-hidden bg-gray-200">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            ${tour.price}/person
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{tour.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tour.description}</p>

          <div className="space-y-2 mb-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{tour.destination}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{tour.duration} days</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span>{availableSpots} spots available</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-1">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <span className="font-semibold text-gray-800">{tour.rating}</span>
              <span className="text-gray-500 text-sm">({tour.reviews})</span>
            </div>
            <span className="text-xs font-semibold text-blue-600 uppercase">View Details →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

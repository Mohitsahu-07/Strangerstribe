import { Tour } from '@/lib/types';
import Link from 'next/link';
import { Star, Users, Calendar, Flame } from 'lucide-react';

export default function TourCard({ tour }: { tour: Tour }) {
  const availableSpots = tour.maxParticipants - tour.currentParticipants;
  const isUrgent = availableSpots <= 3;

  return (
    <Link href={`/tours/${tour.id}`}>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden cursor-pointer border border-gray-100 group card-hover">
        <div className="relative h-56 overflow-hidden bg-gray-200 image-hover">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 right-0 bg-slate-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-bl-lg text-sm font-bold">
            ₹{tour.price.toLocaleString('en-IN')}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <p className="text-white font-bold text-lg">{tour.destination}</p>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">{tour.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tour.description}</p>

          <div className="space-y-3 mb-4 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar size={16} className="text-blue-600" />
              <span className="font-semibold">{tour.duration} Days</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Users size={16} className="text-blue-600" />
              <span className="font-semibold">
                {availableSpots > 0 ? `${availableSpots} spots left` : 'Fully Booked'}
              </span>
            </div>
          </div>

          {isUrgent && availableSpots > 0 && (
            <div className="mb-4 p-2 bg-orange-50 border border-orange-200 rounded-lg flex items-center gap-2 text-orange-700 text-xs font-semibold">
              <Flame size={14} />
              Only {availableSpots} spot{availableSpots !== 1 ? 's' : ''} remaining!
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-1">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <span className="font-bold text-gray-900">{tour.rating}</span>
              <span className="text-gray-500 text-xs">({tour.reviews})</span>
            </div>
            <span className="text-xs font-bold text-blue-600 uppercase">View Details →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

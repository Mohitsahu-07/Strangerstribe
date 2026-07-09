import { Tour } from '@/lib/types';
import Link from 'next/link';
import { Star, Calendar, Users } from 'lucide-react';

export default function TourCard({ tour }: { tour: Tour }) {
  const nights = tour.duration - 1;

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 group card-hover">
      <div className="relative h-56 overflow-hidden bg-gray-200 image-hover">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 bg-[#FF4B38] text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg">
          ₹{tour.price.toLocaleString('en-IN')}
          {tour.originalPrice && (
            <span className="ml-1.5 text-white/70 line-through text-xs font-normal">
              ₹{tour.originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-end justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-md">
              <Calendar size={12} />
              {tour.duration} Days, {nights} Night{nights !== 1 ? 's' : ''}
            </span>
            <span className="flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-md">
              <Users size={12} />
              {tour.tripType}
            </span>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-blue-600 transition line-clamp-1">
          {tour.title}
        </h3>
        <div className="flex items-center gap-1 mb-3">
          {Array(5).fill(0).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.round(tour.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({tour.reviews})</span>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <Link
            href={`/destinations/${tour.id}`}
            className="text-sm font-bold text-[#FF4B38] hover:text-[#e0432f] transition-colors"
          >
            Read More
          </Link>
          <Link
            href={`/destinations/${tour.id}`}
            className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

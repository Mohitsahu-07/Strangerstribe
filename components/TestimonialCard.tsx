import { Testimonial } from '@/lib/types';
import { Star } from 'lucide-react';

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="font-bold text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-gray-600">{testimonial.origin}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {Array(testimonial.rating)
          .fill(0)
          .map((_, i) => (
            <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
          ))}
      </div>

      <p className="text-gray-700 mb-4 flex-1 italic">"{testimonial.review}"</p>

      <p className="text-sm font-semibold text-blue-600">✦ {testimonial.tourName}</p>
    </div>
  );
}

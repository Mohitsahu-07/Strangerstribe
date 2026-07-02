'use client';

import { useEffect, useState } from 'react';
import { Tour } from '@/lib/types';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';
import BookingForm from '@/components/BookingForm';

export default function TourDetailPage({ params }: { params: { id: string } }) {
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await fetch(`/api/tours/${params.id}`);
        if (!response.ok) throw new Error('Tour not found');
        const data = await response.json();
        setTour(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load tour');
      } finally {
        setLoading(false);
      }
    };
    fetchTour();
  }, [params.id]);

  if (loading)
    return (
      <div className="flex justify-center items-center py-12">
        <Loader className="animate-spin text-blue-600" size={32} />
      </div>
    );

  if (error)
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3 text-red-700">
        <AlertCircle size={20} />
        <span>{error}</span>
      </div>
    );

  if (!tour) return <div>Tour not found</div>;

  const availableSpots = tour.maxParticipants - tour.currentParticipants;

  return (
    <div className="space-y-8">
      <div>
        <a href="/tours" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Tours
        </a>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-lg overflow-hidden h-96 bg-gray-200">
            <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{tour.title}</h1>
            <p className="text-gray-700 text-lg">{tour.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 bg-blue-50 p-6 rounded-lg">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Highlights</h3>
              <ul className="space-y-1">
                {tour.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle size={16} className="mt-0.5 text-blue-600 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">What's Included</h3>
              <ul className="space-y-1">
                {tour.inclusions.map((inclusion, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle size={16} className="mt-0.5 text-blue-600 flex-shrink-0" />
                    {inclusion}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-2xl font-bold mb-4">Tour Details</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 text-sm font-medium">Duration</p>
                <p className="text-2xl font-bold text-gray-900">{tour.duration} Days</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">Difficulty Level</p>
                <p className="text-2xl font-bold text-gray-900 capitalize">{tour.difficulty}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">Dates</p>
                <p className="text-lg font-semibold text-gray-900">
                  {new Date(tour.startDate).toLocaleDateString()} - {new Date(tour.endDate).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">Destination</p>
                <p className="text-lg font-semibold text-gray-900">{tour.destination}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          {availableSpots <= 3 && availableSpots > 0 && (
            <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg text-orange-700 text-sm">
              Only {availableSpots} spot{availableSpots !== 1 ? 's' : ''} remaining!
            </div>
          )}
          {availableSpots === 0 && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              This tour is fully booked
            </div>
          )}
          {availableSpots > 0 && <BookingForm tour={tour} />}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState, use } from 'react';
import { Tour } from '@/lib/types';
import { CheckCircle, AlertCircle, Loader, TrendingUp } from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import Link from 'next/link';

export default function TourDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await fetch(`/api/destinations/${id}`);
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
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center py-20">
        <Loader className="animate-spin text-blue-600" size={40} />
      </div>
    );

  if (error)
    return (
      <div className="p-6 bg-red-50 border-2 border-red-200 rounded-lg flex gap-3 text-red-700">
        <AlertCircle size={24} />
        <span className="font-semibold">{error}</span>
      </div>
    );

  if (!tour) return <div className="text-center py-12 text-gray-600">Tour not found</div>;

  const availableSpots = tour.maxParticipants - tour.currentParticipants;

  return (
    <div className="space-y-12">
      <div className="animate-fade-in-down">
        <Link href="/destinations" className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-2 mb-6 btn-smooth">
          ← Back to Trips
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden h-96 bg-gray-200 shadow-md relative image-hover animate-fade-in-left">
            <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
            <div className="absolute top-6 left-6 bg-slate-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold">
              {tour.destination}
            </div>
          </div>

          {/* Title & Description */}
          <div className="animate-fade-in-up stagger-1">
            <h1 className="text-5xl font-black text-gray-900 mb-3">{tour.title}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">{tour.description}</p>
          </div>

          {/* Trip Dashboard */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-100 animate-fade-in-up stagger-2">
            <h3 className="text-2xl font-black mb-6 text-gray-900">Trip Details</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <p className="text-gray-600 text-xs font-bold uppercase tracking-wide">Duration</p>
                <p className="text-3xl font-black text-gray-900">{tour.duration} <span className="text-lg">Days</span></p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-xs font-bold uppercase tracking-wide">Difficulty</p>
                <p className="text-2xl font-black text-blue-600 capitalize">{tour.difficulty}</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-xs font-bold uppercase tracking-wide">Group Size</p>
                <p className="text-2xl font-black text-gray-900">Max 25</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-xs font-bold uppercase tracking-wide">Start Date</p>
                <p className="text-lg font-bold text-gray-900">{new Date(tour.startDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-xs font-bold uppercase tracking-wide">Solo Friendly</p>
                <p className="text-2xl font-black text-green-600">✓ 70%+</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-xs font-bold uppercase tracking-wide">Rating</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-yellow-500">★ {tour.rating}</span>
                  <span className="text-sm text-gray-600">({tour.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights & Inclusions */}
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up stagger-3">
            <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-100">
              <h3 className="font-black text-xl text-blue-900 mb-6 flex items-center gap-2">
                <TrendingUp className="text-blue-600" />
                Highlights
              </h3>
              <ul className="space-y-3">
                {tour.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-emerald-50 p-8 rounded-2xl border-2 border-emerald-100">
              <h3 className="font-black text-xl text-emerald-900 mb-6 flex items-center gap-2">
                <CheckCircle className="text-emerald-600" />
                What&apos;s Included
              </h3>
              <ul className="space-y-3">
                {tour.inclusions.map((inclusion, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">{inclusion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why This Trip */}
          <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-100 animate-fade-in-up stagger-4">
            <h3 className="font-black text-2xl text-gray-900 mb-4">Why You&apos;ll Love This Trip</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-2xl">🤝</span>
                <div>
                  <p className="font-bold">Meet Your Tribe</p>
                  <p className="text-sm text-gray-600">Join solo travelers just like you. 70%+ of our travelers start as strangers and leave as lifelong friends.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="font-bold">Expert Trip Captain</p>
                  <p className="text-sm text-gray-600">Experienced guide who ensures everyone feels included, safe, and has an amazing time.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">📸</span>
                <div>
                  <p className="font-bold">Unforgettable Memories</p>
                  <p className="text-sm text-gray-600">Off-the-beaten-path experiences, hidden gems, and genuine moments with new friends.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Booking Section */}
        <div>
          {availableSpots <= 3 && availableSpots > 0 && (
            <div className="mb-6 p-4 bg-orange-50 border-2 border-orange-200 rounded-lg text-orange-700 font-bold">
              ⚡ Only {availableSpots} spot{availableSpots !== 1 ? 's' : ''} left!
            </div>
          )}
          {availableSpots === 0 && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 font-bold">
              🚫 This batch is full
            </div>
          )}
          {availableSpots > 0 && <BookingForm tour={tour} />}
        </div>
      </div>
    </div>
  );
}

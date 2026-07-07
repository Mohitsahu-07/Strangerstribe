'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Booking, Tour } from '@/lib/types';
import { Loader, Calendar, Users } from 'lucide-react';
import { useUser } from '@clerk/nextjs';

export default function BookingsPage() {
  const { user, isLoaded } = useUser();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoaded) return;

    const fetchData = async () => {
      try {
        let url = '/api/bookings';
        let localUser: { name: string; email: string; phone: string } | null = null;

        if (typeof window !== 'undefined') {
          const localData = localStorage.getItem('strangerstribe_user');
          if (localData) {
            try {
              localUser = JSON.parse(localData);
            } catch (e) {
              console.error('Error parsing local user data', e);
            }
          }
        }

        const params = new URLSearchParams();
        if (localUser) {
          if (localUser.email) params.append('email', localUser.email);
          if (localUser.phone) params.append('phone', localUser.phone);
        }

        const queryString = params.toString();
        if (queryString) {
          url += `?${queryString}`;
        }

        const [bookingsRes, toursRes] = await Promise.all([
          fetch(url),
          fetch('/api/destinations'),
        ]);
        setBookings(await bookingsRes.json());
        setTours(await toursRes.json());
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [isLoaded, user]);

  const getTourTitle = (tourId: string) => {
    return tours.find((t) => t.id === tourId)?.title || 'Unknown Tour';
  };

  if (loading)
    return (
      <div className="flex justify-center items-center py-12">
        <Loader className="animate-spin text-blue-600" size={32} />
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 pt-40 pb-16 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">My Bookings</h1>
        <p className="text-gray-600">View and manage your tour bookings</p>
      </div>

      {bookings.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border-2 border-dashed border-gray-300">
          <p className="text-gray-600 text-lg">No bookings yet</p>
          <Link href="/destinations" className="text-blue-600 hover:underline mt-2 inline-block">
            Browse destinations to make your first booking
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {getTourTitle(booking.tourId)}
                    {booking.selectedPackage && (
                      <span className="ml-3 text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md align-middle">
                        {booking.selectedPackage}
                      </span>
                    )}
                  </h3>
                </div>
                <span
                  className={`px-4 py-1 rounded-full font-semibold text-white ${
                    booking.status === 'confirmed'
                      ? 'bg-green-600'
                      : booking.status === 'pending'
                        ? 'bg-yellow-600'
                        : 'bg-red-600'
                  }`}
                >
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-start gap-3">
                  <Calendar className="text-blue-600 mt-1" size={20} />
                  <div>
                    <p className="text-gray-600 text-sm">Booking Date</p>
                    <p className="font-semibold text-gray-900">
                      {new Date(booking.bookingDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="text-blue-600 mt-1" size={20} />
                  <div>
                    <p className="text-gray-600 text-sm">Participants</p>
                    <p className="font-semibold text-gray-900">{booking.participants} person(s)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl leading-none mt-0.5">₹</span>
                  <div>
                    <p className="text-gray-600 text-sm">Total Price</p>
                    <p className="font-semibold text-gray-900">₹{booking.totalPrice.toLocaleString('en-IN')}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-gray-600 text-sm font-medium mb-1">Customer Information</p>
                <div className="space-y-1">
                  <p className="text-gray-900">
                    <span className="font-semibold">Name:</span> {booking.customerName}
                  </p>
                  <p className="text-gray-900">
                    <span className="font-semibold">Email:</span> {booking.customerEmail}
                  </p>
                  <p className="text-gray-900">
                    <span className="font-semibold">Phone:</span> {booking.customerPhone}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

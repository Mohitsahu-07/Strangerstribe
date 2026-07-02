'use client';

import { useEffect, useState } from 'react';
import { Booking, Tour } from '@/lib/types';
import { Loader } from 'lucide-react';

export default function AdminPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'bookings' | 'tours'>('overview');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bookingsRes, toursRes] = await Promise.all([
          fetch('/api/bookings'),
          fetch('/api/tours'),
        ]);
        setBookings(await bookingsRes.json());
        setTours(await toursRes.json());
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const totalRevenue = bookings.reduce((sum, b) => sum + b.totalPrice, 0);
  const confirmedBookings = bookings.filter((b) => b.status === 'confirmed').length;
  const totalParticipants = bookings.reduce((sum, b) => sum + b.participants, 0);

  if (loading)
    return (
      <div className="flex justify-center items-center py-12">
        <Loader className="animate-spin text-blue-600" size={32} />
      </div>
    );

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
        <div className="text-sm text-gray-600">Welcome, Admin</div>
      </div>

      <div className="flex gap-4 border-b">
        {(['overview', 'bookings', 'tours'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-semibold transition-colors capitalize ${
              activeTab === tab
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium mb-2">Total Revenue</p>
            <p className="text-3xl font-bold text-gray-900">${totalRevenue.toFixed(2)}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium mb-2">Confirmed Bookings</p>
            <p className="text-3xl font-bold text-gray-900">{confirmedBookings}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium mb-2">Total Participants</p>
            <p className="text-3xl font-bold text-gray-900">{totalParticipants}</p>
          </div>
        </div>
      )}

      {activeTab === 'bookings' && (
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Customer</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Tour</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Participants</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Total Price</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">{booking.customerName}</td>
                  <td className="px-6 py-4 text-gray-900">
                    {tours.find((t) => t.id === booking.tourId)?.title || 'Unknown'}
                  </td>
                  <td className="px-6 py-4 text-gray-900">{booking.participants}</td>
                  <td className="px-6 py-4 text-gray-900">${booking.totalPrice.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                        booking.status === 'confirmed'
                          ? 'bg-green-600'
                          : booking.status === 'pending'
                            ? 'bg-yellow-600'
                            : 'bg-red-600'
                      }`}
                    >
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'tours' && (
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Tour Name</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Destination</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Price</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Capacity</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Rating</th>
              </tr>
            </thead>
            <tbody>
              {tours.map((tour) => (
                <tr key={tour.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-semibold">{tour.title}</td>
                  <td className="px-6 py-4 text-gray-900">{tour.destination}</td>
                  <td className="px-6 py-4 text-gray-900">${tour.price.toFixed(2)}</td>
                  <td className="px-6 py-4 text-gray-900">
                    {tour.currentParticipants}/{tour.maxParticipants}
                  </td>
                  <td className="px-6 py-4 text-gray-900">
                    <span className="font-semibold text-yellow-500">★</span> {tour.rating}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

'use client';

import { Tour } from '@/lib/types';
import { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface BookingFormProps {
  tour: Tour;
}

export default function BookingForm({ tour }: BookingFormProps) {
  const [participants, setParticipants] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
  });

  const maxAvailable = tour.maxParticipants - tour.currentParticipants;
  const totalPrice = tour.price * participants;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tourId: tour.id,
          participants,
          totalPrice,
          ...formData,
        }),
      });

      if (!response.ok) throw new Error('Booking failed');
      setSuccess(true);
      setFormData({ customerName: '', customerEmail: '', customerPhone: '' });
      setParticipants(1);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Book This Tour</h3>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3 text-red-700">
          <AlertCircle size={20} />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3 text-green-700">
          <CheckCircle size={20} />
          <span>Booking confirmed! Check your email for details.</span>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            required
            value={formData.customerName}
            onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            required
            value={formData.customerEmail}
            onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            required
            value={formData.customerPhone}
            onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Number of Participants</label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setParticipants(Math.max(1, participants - 1))}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold"
            >
              −
            </button>
            <span className="text-2xl font-bold w-8 text-center">{participants}</span>
            <button
              type="button"
              onClick={() => setParticipants(Math.min(maxAvailable, participants + 1))}
              disabled={participants >= maxAvailable}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold disabled:opacity-50"
            >
              +
            </button>
            <span className="text-gray-600 text-sm ml-2">({maxAvailable} available)</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
          <div className="flex justify-between mb-2">
            <span className="text-gray-700">Price per person:</span>
            <span className="font-semibold">${tour.price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-blue-600 pt-2 border-t">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || participants > maxAvailable}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded-lg transition-colors"
        >
          {loading ? 'Processing...' : 'Complete Booking'}
        </button>
      </div>
    </form>
  );
}

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
  const advanceAmount = 2000;

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
    <form onSubmit={handleSubmit} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-100 sticky top-24">
      <h3 className="text-3xl font-black mb-2 text-gray-900">Secure Your Spot</h3>
      <p className="text-gray-600 mb-6 text-sm">Limited spots in every batch. Book now to join the tribe.</p>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3 text-red-700">
          <AlertCircle size={20} className="flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3 text-green-700">
          <CheckCircle size={20} className="flex-shrink-0" />
          <div>
            <p className="font-bold">Booking Confirmed!</p>
            <p className="text-sm">Check your email for trip details and group info.</p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">Full Name</label>
          <input
            type="text"
            required
            value={formData.customerName}
            onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 font-medium"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">Email</label>
          <input
            type="email"
            required
            value={formData.customerEmail}
            onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 font-medium"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">WhatsApp Number</label>
          <input
            type="tel"
            required
            value={formData.customerPhone}
            onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 font-medium"
            placeholder="+91 98765 43210"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-900 mb-3">Travelers (Including You)</label>
          <div className="flex items-center gap-4 bg-white p-3 rounded-lg border-2 border-gray-300">
            <button
              type="button"
              onClick={() => setParticipants(Math.max(1, participants - 1))}
              className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold text-lg transition"
            >
              −
            </button>
            <span className="text-3xl font-black text-blue-600 w-8 text-center">{participants}</span>
            <button
              type="button"
              onClick={() => setParticipants(Math.min(maxAvailable, participants + 1))}
              disabled={participants >= maxAvailable}
              className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold text-lg transition disabled:opacity-50"
            >
              +
            </button>
            <span className="text-xs font-bold text-gray-600 ml-2">
              ({maxAvailable} available)
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border-2 border-blue-200 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-700 font-medium">Advance Payment:</span>
            <span className="font-bold text-gray-900">₹{advanceAmount.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between pt-2 border-t">
            <span className="text-gray-600 text-sm">Remaining at destination:</span>
            <span className="font-bold text-gray-900">₹{(totalPrice - advanceAmount).toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-lg font-black text-blue-600 pt-2 border-t-2">
            <span>Total Trip Cost:</span>
            <span>₹{totalPrice.toLocaleString('en-IN')}</span>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || participants > maxAvailable}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-4 px-4 rounded-lg transition-colors text-lg shadow-md hover:shadow-lg active:scale-95 disabled:cursor-not-allowed"
        >
          {loading ? 'Processing...' : 'Pay ₹2,000 & Secure Spot'}
        </button>

        <p className="text-xs text-gray-600 text-center mt-2">
          💳 Secure payment via Razorpay | 🛡️ Money-back guarantee
        </p>
      </div>
    </form>
  );
}

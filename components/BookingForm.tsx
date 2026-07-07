'use client';

import { Tour } from '@/lib/types';
import { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

import { useUser } from '@clerk/nextjs';

interface BookingFormProps {
  tour: Tour;
  isModal?: boolean;
}

export default function BookingForm({ tour, isModal = false }: BookingFormProps) {
  const { user } = useUser();
  const [participants, setParticipants] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
  });
  const [selectedPackage, setSelectedPackage] = useState<any>(
    tour.pricingPackages && tour.pricingPackages.length > 0
      ? tour.pricingPackages[0]
      : null
  );

  useEffect(() => {
    if (user) {
      setFormData({
        customerName: user.fullName || '',
        customerEmail: user.primaryEmailAddress?.emailAddress || '',
        customerPhone: user.primaryPhoneNumber?.phoneNumber || '',
      });
    }
  }, [user]);

  const maxAvailable = tour.maxParticipants - tour.currentParticipants;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const currentPricePerPerson = selectedPackage ? selectedPackage.price : tour.price;
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tourId: tour.id,
          participants,
          totalPrice: currentPricePerPerson * participants,
          selectedPackage: selectedPackage ? selectedPackage.name : undefined,
          ...formData,
        }),
      });

      if (!response.ok) throw new Error('Failed to submit enquiry');
      
      const userData = {
        name: formData.customerName.trim(),
        email: formData.customerEmail.trim(),
        phone: formData.customerPhone.trim(),
        signedUpAt: new Date().toISOString(),
      };
      localStorage.setItem('strangerstribe_user', JSON.stringify(userData));

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className={isModal ? "text-center space-y-6 animate-scale-in" : "bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-100 sticky top-24 shadow-lg text-center space-y-6 animate-scale-in"}>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-black text-gray-900">Enquiry Submitted!</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Your enquiry for <span className="font-bold text-slate-900">{tour.title}</span> has been received.
        </p>
        <p className="text-gray-700 text-sm font-semibold">
          To complete your booking and secure your seat, please click below to connect with us on WhatsApp:
        </p>
        <a
          href={`https://wa.me/918953680695?text=${encodeURIComponent(
            `Hi Strangers Tribe, I just submitted an enquiry for the ${tour.title} trip${selectedPackage ? ` (${selectedPackage.name})` : ''} for ${participants} traveler(s). I would like to book my seat!`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-4 rounded-xl text-lg shadow-md hover:shadow-lg transition-all active:scale-95 text-center btn-smooth"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Chat on WhatsApp to Book
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={isModal ? "animate-scale-in space-y-6" : "bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-100 sticky top-24 animate-slide-in-right shadow-lg"}>
      <h3 className="text-3xl font-black mb-2 text-gray-900">Book Your Seat</h3>
      <p className="text-gray-600 mb-6 text-sm">Submit your details to check seat availability and secure your booking via WhatsApp.</p>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3 text-red-700">
          <AlertCircle size={20} className="flex-shrink-0" />
          <span>{error}</span>
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
            pattern="\d{10}"
            minLength={10}
            maxLength={10}
            title="Please enter a valid 10-digit phone number"
            value={formData.customerPhone}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, '').slice(0, 10);
              setFormData({ ...formData, customerPhone: val });
            }}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 font-medium"
            placeholder="9876543210"
          />
          {formData.customerPhone && formData.customerPhone.length !== 10 && (
            <p className="text-red-500 text-xs mt-1 font-semibold">Phone number must be exactly 10 digits</p>
          )}
        </div>

        {tour.pricingPackages && tour.pricingPackages.length > 0 && (
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Select Package / Departure</label>
            <select
              value={selectedPackage ? selectedPackage.name : ''}
              onChange={(e) => {
                const pkg = tour.pricingPackages?.find((p) => p.name === e.target.value);
                if (pkg) setSelectedPackage(pkg);
              }}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 font-semibold bg-white text-gray-900"
            >
              {tour.pricingPackages.map((pkg) => (
                <option key={pkg.name} value={pkg.name}>
                  {pkg.name} (₹{pkg.price.toLocaleString('en-IN')})
                </option>
              ))}
            </select>
          </div>
        )}

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

        {/* Dynamic Cost breakdown */}
        <div className="bg-white/80 p-4 rounded-xl border-2 border-gray-150 space-y-1 mt-4">
          <div className="flex justify-between text-xs text-gray-600 font-bold uppercase tracking-wide">
            <span>Price per person</span>
            <span>₹{(selectedPackage ? selectedPackage.price : tour.price).toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-xs text-gray-600 font-bold uppercase tracking-wide">
            <span>Travelers</span>
            <span>x {participants}</span>
          </div>
          <div className="h-px bg-gray-200 my-2" />
          <div className="flex justify-between text-base font-black text-gray-900">
            <span>Total Cost</span>
            <span className="text-blue-600">₹{((selectedPackage ? selectedPackage.price : tour.price) * participants).toLocaleString('en-IN')}</span>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || participants > maxAvailable}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-4 px-4 rounded-lg text-lg shadow-md hover:shadow-lg active:scale-95 disabled:cursor-not-allowed btn-smooth"
        >
          {loading ? 'Submitting...' : 'Submit Details to Book'}
        </button>

        <p className="text-xs text-gray-600 text-center mt-2">
          🛡️ No advance payment required online | Confirm via WhatsApp
        </p>
      </div>
    </form>
  );
}

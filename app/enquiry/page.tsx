'use client';

import { useState } from 'react';
import { Send, CheckCircle, User, Mail, Phone, MapPin, Calendar, Users, MessageSquare, IndianRupee } from 'lucide-react';
import { mockTours } from '@/lib/mockData';
import Link from 'next/link';

interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  travelDate: string;
  groupSize: string;
  budget: string;
  message: string;
}

const BUDGET_RANGES = [
  '₹3,000 - ₹5,000',
  '₹5,000 - ₹8,000',
  '₹8,000 - ₹12,000',
  '₹12,000 - ₹20,000',
  '₹20,000+',
];

export default function EnquiryPage() {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    groupSize: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<EnquiryFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: Partial<EnquiryFormData> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/[\s\-+]/g, '').slice(-10))) newErrors.phone = 'Enter a valid 10-digit phone number';
    if (!formData.destination) newErrors.destination = 'Please select a destination';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit enquiry');
      }

      // Save enquiry to localStorage
      const enquiries = JSON.parse(localStorage.getItem('strangerstribe_enquiries') || '[]');
      enquiries.push({ ...formData, submittedAt: new Date().toISOString(), id: Date.now().toString() });
      localStorage.setItem('strangerstribe_enquiries', JSON.stringify(enquiries));

      setIsSubmitted(true);
    } catch (err: any) {
      console.error(err);
      alert(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-40 pb-20 px-6">
        <div className="max-w-lg mx-auto text-center animate-fade-in-up">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
            <CheckCircle size={48} className="text-green-600" />
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-4">Enquiry Submitted!</h1>
          <p className="text-lg text-gray-600 mb-2">
            Thank you, <span className="font-bold text-blue-600">{formData.fullName}</span>!
          </p>
          <p className="text-gray-500 mb-8">
            Our travel experts will get back to you within 24 hours with a personalized trip plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/destinations"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all"
            >
              Browse Trips
            </Link>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ fullName: '', email: '', phone: '', destination: '', travelDate: '', groupSize: '', budget: '', message: '' });
              }}
              className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-8 rounded-xl transition-all"
            >
              Submit Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about a trip? Want a customized itinerary? Fill out the form below and our travel experts will craft the perfect adventure for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2 animate-fade-in-left">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-6">
              <h2 className="text-xl font-black text-gray-900 flex items-center gap-2">
                <MessageSquare size={22} className="text-blue-600" />
                Trip Enquiry Form
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Full Name *</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 text-sm font-medium transition-all focus:outline-none ${
                        errors.fullName ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white'
                      }`}
                    />
                  </div>
                  {errors.fullName && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 text-sm font-medium transition-all focus:outline-none ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Phone Number *</label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 text-sm font-medium transition-all focus:outline-none ${
                        errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.phone}</p>}
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Destination *</label>
                  <div className="relative">
                    <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 text-sm font-medium transition-all focus:outline-none appearance-none bg-no-repeat bg-[right_12px_center] bg-[length:16px] ${
                        errors.destination ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white'
                      }`}
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")` }}
                    >
                      <option value="">Select a destination</option>
                      {mockTours.map((tour) => (
                        <option key={tour.id} value={tour.destination}>
                          {tour.destination}
                        </option>
                      ))}
                      <option value="Other">Other / Custom Trip</option>
                    </select>
                  </div>
                  {errors.destination && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.destination}</p>}
                </div>

                {/* Travel Date */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Preferred Travel Date</label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-sm font-medium transition-all focus:outline-none focus:border-blue-500 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Group Size */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Group Size</label>
                  <div className="relative">
                    <Users size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-sm font-medium transition-all focus:outline-none focus:border-blue-500 focus:bg-white appearance-none bg-no-repeat bg-[right_12px_center] bg-[length:16px]"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")` }}
                    >
                      <option value="">Select size</option>
                      <option value="1">Solo Traveler</option>
                      <option value="2">2 People</option>
                      <option value="3-5">3-5 People</option>
                      <option value="6-10">6-10 People</option>
                      <option value="10+">10+ People</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  <span className="flex items-center gap-1"><IndianRupee size={12} /> Budget Range (per person)</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {BUDGET_RANGES.map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, budget: range }))}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all border-2 ${
                        formData.budget === range
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Special Requirements / Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your ideal trip — dietary needs, accessibility requirements, specific interests, or any questions you have..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-sm font-medium transition-all focus:outline-none focus:border-blue-500 focus:bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-blue-500/25"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Submit Enquiry
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 animate-fade-in-right">
            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-black mb-6">Talk to Us Directly</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Phone / WhatsApp</p>
                    <p className="text-blue-100 text-sm">+91 8953680695</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Email</p>
                    <p className="text-blue-100 text-sm">strangerstribe@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Office</p>
                    <p className="text-blue-100 text-sm">Jhansi, Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
              <h3 className="text-lg font-black text-gray-900 mb-4">Why Strangers Tribe?</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span>2,500+ happy travelers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span>98% satisfaction rate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span>Expert trip captains</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span>Solo-traveler friendly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span>24/7 trip support</span>
                </li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 text-center">
              <p className="text-3xl mb-2">⚡</p>
              <p className="font-black text-gray-900">Quick Response</p>
              <p className="text-sm text-gray-600 mt-1">We typically respond within 2-4 hours during business hours.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

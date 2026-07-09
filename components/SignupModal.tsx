'use client';

import { useState, useEffect } from 'react';
import { X, User, Mail, Phone, Download, CheckCircle } from 'lucide-react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  tourTitle: string;
}

export function isUserSignedUp(): boolean {
  if (typeof window === 'undefined') return false;
  const userData = localStorage.getItem('strangerstribe_user');
  return !!userData;
}

export function getUserData(): { name: string; email: string; phone: string } | null {
  if (typeof window === 'undefined') return null;
  const userData = localStorage.getItem('strangerstribe_user');
  return userData ? JSON.parse(userData) : null;
}

export default function SignupModal({ isOpen, onClose, onSuccess, tourTitle }: SignupModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Enter a valid email';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[+]?\d{10,13}$/.test(phone.replace(/[\s-]/g, ''))) newErrors.phone = 'Enter a valid phone number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    const userData = { name: name.trim(), email: email.trim(), phone: phone.trim(), signedUpAt: new Date().toISOString() };
    localStorage.setItem('strangerstribe_user', JSON.stringify(userData));

    setIsSubmitting(false);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      onClose();
      onSuccess();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm modal-backdrop-enter" />
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl modal-content-enter overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 px-8 py-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <X size={22} />
          </button>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-4">
              <Download size={26} className="text-white" />
            </div>
            <h2 className="text-2xl font-black">Get Itinerary PDF</h2>
            <p className="text-blue-100 text-sm mt-1">
              Sign up to download the detailed itinerary for <span className="font-bold text-white">{tourTitle}</span>
            </p>
          </div>
        </div>

        {showSuccess ? (
          <div className="px-8 py-16 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-in">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <h3 className="text-xl font-black text-gray-900">You&apos;re In!</h3>
            <p className="text-gray-600 mt-2">Downloading your itinerary...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-8 py-6 space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className={`w-full pl-11 pr-4 py-3 rounded-xl border-2 text-sm font-medium transition-all focus:outline-none focus:ring-0 ${errors.name
                      ? 'border-red-300 bg-red-50 focus:border-red-500'
                      : 'border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white'
                    }`}
                />
              </div>
              {errors.name && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className={`w-full pl-11 pr-4 py-3 rounded-xl border-2 text-sm font-medium transition-all focus:outline-none focus:ring-0 ${errors.email
                      ? 'border-red-300 bg-red-50 focus:border-red-500'
                      : 'border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white'
                    }`}
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className={`w-full pl-11 pr-4 py-3 rounded-xl border-2 text-sm font-medium transition-all focus:outline-none focus:ring-0 ${errors.phone
                      ? 'border-red-300 bg-red-50 focus:border-red-500'
                      : 'border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white'
                    }`}
                />
              </div>
              {errors.phone && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.phone}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-blue-500/25"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing up...
                </>
              ) : (
                <>
                  <Download size={18} />
                  Sign Up & Download
                </>
              )}
            </button>

            <p className="text-center text-xs text-gray-400 leading-relaxed">
              By signing up, you agree to receive trip updates from Strangers Tribe. We respect your privacy.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

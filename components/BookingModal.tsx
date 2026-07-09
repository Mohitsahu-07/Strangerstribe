'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import { Tour } from '@/lib/types';
import BookingForm from './BookingForm';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour: Tour;
}

export default function BookingModal({ isOpen, onClose, tour }: BookingModalProps) {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 overflow-y-auto bg-black/60 backdrop-blur-sm" onClick={onClose}>

      <div
        className="relative w-full max-w-lg bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-2xl overflow-hidden border border-blue-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors z-50 p-1.5 bg-white/80 hover:bg-white rounded-full shadow-sm"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        <div className="overflow-y-auto p-6 md:p-8">
          <BookingForm tour={tour} isModal={true} />
        </div>
      </div>
    </div>
  );
}

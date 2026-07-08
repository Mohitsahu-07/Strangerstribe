'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Tour } from '@/lib/types';
import BookingModal from './BookingModal';

interface TourCarouselProps {
  tours: Tour[];
  title: string;
}

export default function TourCarousel({ tours, title }: TourCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedTourForBooking, setSelectedTourForBooking] = useState<Tour | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBooking = (tour: Tour) => {
    setSelectedTourForBooking(tour);
    setIsBookingModalOpen(true);
  };

  useEffect(() => {
    if (!isAutoPlay) {
      // Resume autoplay after 12 seconds of user inactivity
      const resumeTimer = setTimeout(() => {
        setIsAutoPlay(true);
      }, 12000);
      return () => clearTimeout(resumeTimer);
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tours.length);
    }, 2300);

    return () => clearInterval(interval);
  }, [isAutoPlay, tours.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + tours.length) % tours.length);
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tours.length);
    setIsAutoPlay(false);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-4xl md:text-5xl font-black text-gray-900 px-4 md:px-0 animate-fade-in-left">
        {title}
      </h2>

      {/* Main Carousel */}
      <div
        className="relative w-full h-72 md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden group"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        {/* Slides Track */}
        <div
          className="flex w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {tours.map((tour, idx) => (
            <div
              key={tour.id}
              className="w-full h-full flex-shrink-0 relative"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Carousel Content */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-4 md:p-12 text-white transition-all duration-700 ${
                  idx === currentIndex
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-8 pointer-events-none'
                }`}
              >
                <h3 className="text-2xl md:text-5xl font-black mb-2 md:mb-3 leading-tight">
                  {tour.title}
                </h3>
                <p className="text-sm md:text-xl mb-4 md:mb-6 text-gray-200 max-w-2xl line-clamp-2">
                  {tour.description}
                </p>
                <div className="flex gap-4 flex-wrap">
                  <button
                    onClick={() => handleOpenBooking(tour)}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-5 md:py-3 md:px-8 rounded-lg transition-all btn-smooth cursor-pointer text-left text-sm md:text-base"
                  >
                    ₹{tour.price.toLocaleString('en-IN')}
                  </button>
                  <Link
                    href={`/destinations/${tour.id}`}
                    className="inline-block bg-white/20 hover:bg-white/30 text-white font-bold py-2.5 px-5 md:py-3 md:px-8 rounded-lg backdrop-blur transition-all btn-smooth text-sm md:text-base"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur text-white p-2 md:p-3 rounded-full transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 btn-smooth"
          style={{ position: 'absolute' }}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur text-white p-2 md:p-3 rounded-full transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 btn-smooth"
          style={{ position: 'absolute' }}
        >
          <ChevronRight size={20} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {tours.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setIsAutoPlay(false);
              }}
              className={`h-1 rounded-full transition-all duration-500 ${
                idx === currentIndex
                  ? 'w-12 bg-white'
                  : 'w-3 bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 px-2 md:px-0">
        {tours.map((tour, idx) => (
          <button
            key={tour.id}
            onClick={() => {
              setCurrentIndex(idx);
              setIsAutoPlay(false);
            }}
            className={`netflix-card relative group rounded-xl md:rounded-2xl overflow-hidden h-24 md:h-40 cursor-pointer animate-scale-in ${`stagger-${(idx % 5) + 1}`}`}
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <p className="text-white font-bold text-sm line-clamp-2">
                {tour.title}
              </p>
              <p className="text-yellow-400 font-semibold text-xs">★ {tour.rating}</p>
            </div>
            {currentIndex === idx && (
              <div className="absolute inset-0 border-4 border-blue-500 rounded-2xl" />
            )}
          </button>
        ))}
      </div>

      {selectedTourForBooking && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          tour={selectedTourForBooking}
        />
      )}
    </div>
  );
}

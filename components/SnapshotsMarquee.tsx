'use client';

import React from 'react';

interface Photo {
  id: string;
  url: string;
  alt: string;
}

const UPPER_PHOTOS: Photo[] = [
  {
    id: 'u1',
    url: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&auto=format&fit=crop&q=80',
    alt: 'Majestic mountain valley range view'
  },
  {
    id: 'u2',
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&auto=format&fit=crop&q=80',
    alt: 'Sun rays filtering through forest trees'
  },
  {
    id: 'u3',
    url: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&auto=format&fit=crop&q=80',
    alt: 'Family of backpackers hiking mountain trail'
  },
  {
    id: 'u4',
    url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&auto=format&fit=crop&q=80',
    alt: 'Family gathering dinner table toast celebration'
  },
  {
    id: 'u5',
    url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&auto=format&fit=crop&q=80',
    alt: 'Family camp bonfire in forest'
  },
  {
    id: 'u6',
    url: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=600&auto=format&fit=crop&q=80',
    alt: 'Tribe travel group posing on hill'
  },
  {
    id: 'u7',
    url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop&q=80',
    alt: 'Multi-generational family sharing road trip conversation'
  }
];

const LOWER_PHOTOS: Photo[] = [
  {
    id: 'l1',
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=80',
    alt: 'Festival celebration confetti party scene'
  },
  {
    id: 'l2',
    url: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=600&auto=format&fit=crop&q=80',
    alt: 'Happy children jumping and playing in misty forest'
  },
  {
    id: 'l3',
    url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80',
    alt: 'Group of travel friends sitting on a scenic ledge'
  },
  {
    id: 'l4',
    url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&auto=format&fit=crop&q=80',
    alt: 'Family walking hand-in-hand on the beach at sunset'
  },
  {
    id: 'l5',
    url: 'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=600&auto=format&fit=crop&q=80',
    alt: 'Backpackers walking along forest trail'
  },
  {
    id: 'l6',
    url: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=600&auto=format&fit=crop&q=80',
    alt: 'Travel friends taking landscape selfie group photo'
  },
  {
    id: 'l7',
    url: 'https://images.unsplash.com/photo-1471967183320-ee018f6e114a?w=600&auto=format&fit=crop&q=80',
    alt: 'Cozy family picnic in park meadow'
  }
];

export default function SnapshotsMarquee() {
  // Double the list to support seamless infinite scrolling marquee
  const upperRow = [...UPPER_PHOTOS, ...UPPER_PHOTOS];
  const lowerRow = [...LOWER_PHOTOS, ...LOWER_PHOTOS];

  return (
    <section className="py-10 md:py-16 bg-white overflow-hidden w-full space-y-8 md:space-y-12">
      {/* Header Info Block */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
        <div className="text-left space-y-2">
          <span className="text-xs md:text-sm font-extrabold text-[#FF4B38] tracking-[0.2em] uppercase block">
            Our Moments
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 font-display">
            Snapshots of <span className="text-[#FF4B38]">StrangersTribe</span>
          </h2>
        </div>
        <div className="md:max-w-xs text-left md:text-right">
          <p className="text-sm md:text-base text-gray-500 font-medium">
            Real moments from our travelers — unfiltered, unforgettable.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Gallery Rows */}
      <div className="space-y-4 md:space-y-6 select-none">
        
        {/* Row 1: Sliding from Left to Right (Moves Right) */}
        <div className="relative w-full flex overflow-x-hidden">
          <div className="flex gap-6 w-max animate-marquee-right py-2">
            {upperRow.map((photo, index) => (
              <div
                key={`upper-${photo.id}-${index}`}
                className="w-[200px] h-[130px] md:w-[340px] md:h-[220px] rounded-[16px] md:rounded-[24px] overflow-hidden shadow-md flex-shrink-0 cursor-pointer transition-transform duration-500 hover:scale-[1.03] hover:shadow-xl border border-gray-100"
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Sliding from Right to Left (Moves Left) */}
        <div className="relative w-full flex overflow-x-hidden">
          <div className="flex gap-6 w-max animate-marquee-left py-2">
            {lowerRow.map((photo, index) => (
              <div
                key={`lower-${photo.id}-${index}`}
                className="w-[200px] h-[130px] md:w-[340px] md:h-[220px] rounded-[16px] md:rounded-[24px] overflow-hidden shadow-md flex-shrink-0 cursor-pointer transition-transform duration-500 hover:scale-[1.03] hover:shadow-xl border border-gray-100"
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

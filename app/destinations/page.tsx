'use client';

import { useState, useEffect } from 'react';
import TourCard from '@/components/TourCard';
import { Tour } from '@/lib/types';
import { Loader, Filter } from 'lucide-react';

export default function DestinationsPage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('/api/destinations');
        const data = await response.json();
        setTours(data);
      } finally {
        setLoading(false);
      }
    };
    fetchTours();
  }, []);

  const filteredTours = tours.filter((tour) => {
    if (filter === 'all') return true;
    if (filter === 'easy') return tour.difficulty === 'easy';
    if (filter === 'moderate') return tour.difficulty === 'moderate';
    if (filter === 'hard') return tour.difficulty === 'hard';
    return true;
  });

  return (
    <div className="space-y-12">
      <div className="text-center animate-fade-in-down">
        <h1 className="text-5xl font-black text-gray-900 mb-4">All Trip Batches</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose your next adventure. Each batch is a new tribe, a new story.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center animate-fade-in-up">
        {['all', 'easy', 'moderate', 'hard'].map((difficulty, idx) => (
          <button
            key={difficulty}
            onClick={() => setFilter(difficulty)}
            className={`px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2 btn-smooth stagger-${idx + 1} animate-fade-in-up ${
              filter === difficulty
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600'
            }`}
          >
            {difficulty === 'all' && <Filter size={18} />}
            {difficulty === 'all' ? 'All Trips' : `${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Level`}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader className="animate-spin text-blue-600 animate-pulse-glow" size={40} />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour, idx) => (
            <div key={tour.id} className={`animate-fade-in-up stagger-${(idx % 5) + 1}`}>
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

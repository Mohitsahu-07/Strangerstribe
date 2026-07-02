'use client';

import { useState, useEffect } from 'react';
import TourCard from '@/components/TourCard';
import { Tour } from '@/lib/types';
import { Loader } from 'lucide-react';

export default function ToursPage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('/api/tours');
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
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">All Tours</h1>
        <p className="text-gray-600">Explore our curated collection of amazing destinations</p>
      </div>

      <div className="flex gap-4">
        {['all', 'easy', 'moderate', 'hard'].map((difficulty) => (
          <button
            key={difficulty}
            onClick={() => setFilter(difficulty)}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors capitalize ${
              filter === difficulty
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {difficulty === 'all' ? 'All Tours' : `${difficulty} Level`}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <Loader className="animate-spin text-blue-600" size={32} />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      )}
    </div>
  );
}

'use client';

import Link from 'next/link';
import { Star, ChevronRight } from 'lucide-react';
import { mockTours } from '@/lib/mockData';
import TourCarousel from '@/components/TourCarousel';
import ScrollReveal from '@/components/ScrollReveal';
import TribeHero from '@/components/TribeHero';
import SnapshotsMarquee from '@/components/SnapshotsMarquee';


const TESTIMONIALS = [
  {
    initials: 'PS',
    name: 'Priya Sharma',
    trip: 'Mumbai → Chopta',
    quote: 'Amazing Experience! Every moment was enjoyable and well-managed. The captains were professional, friendly and supportive. ✨🌄',
    rating: 5
  },
  {
    initials: 'AM',
    name: 'Arjun Mehta',
    trip: 'Bangalore → Kasol & Tosh',
    quote: 'I was hesitant about solo traveling, but Strangers Tribe made me feel at home. Left with 20 new friends!',
    rating: 5
  },
  {
    initials: 'KN',
    name: 'Kavya Nair',
    trip: 'Chennai → Jibhi',
    quote: 'Mini Thailand pool, forest walks, and stargazing was magical. Perfect travel tribe!',
    rating: 5
  },
  {
    initials: 'RK',
    name: 'Rohan Kumar',
    trip: 'Delhi → Manali',
    quote: 'Best decision ever! The group vibes, the treks, the bonfire nights—everything was perfect. Highly recommended!',
    rating: 5
  },
  {
    initials: 'SJ',
    name: 'Sana Joshi',
    trip: 'Pune → Chopta',
    quote: 'First solo trip ever. Felt safe, felt at home, made lifelong friends. Strangers Tribe forever!',
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="w-full">
      <TribeHero />
      <div className="py-12 md:py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <TourCarousel tours={mockTours} title="Featured Adventures" />
        </div>
      </div>
      <div id="why-choose-us" className="py-12 md:py-24 px-4 md:px-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-16">
          <div className="text-center animate-fade-in-down">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-3 md:mb-4">
              Why Choose Strangers Tribe?
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re not just a travel company. We&apos;re a community building lifelong friendships.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {[
              {
                icon: '👥',
                title: 'Curated Groups',
                description: 'Groups capped at 25 travelers. Matched with similar vibes for authentic community experiences.'
              },
              {
                icon: '🗺️',
                title: 'Handpicked Routes',
                description: 'Off-the-beaten-path destinations, hidden waterfalls, and authentic local cafes.'
              },
              {
                icon: '⚡',
                title: 'Expert Captains',
                description: 'Experienced guides who ensure safety, lead fun group games, bonfire nights, and capture lifetime memories.'
              },
              {
                icon: '🛡️',
                title: 'Solo-Traveler Safety',
                description: 'First-aid support, vetted stays, and trip captains trained to ensure safety for solo female travelers.'
              },
              {
                icon: '💳',
                title: 'Flexi-Booking (₹2000)',
                description: 'Secure your seat by paying only ₹2,000 upfront. Pay the remaining amount directly on the trip.'
              },
              {
                icon: '✨',
                title: 'Solo-Friendly Vibes',
                description: 'Over 70% of our travelers join solo. We create active group chats before the trip so you connect early.'
              }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 150}>
                <div className="netflix-card p-6 md:p-8 rounded-2xl bg-white space-y-3 md:space-y-4 group">
                  <div className="text-4xl md:text-5xl group-hover:animate-float">{item.icon}</div>
                  <h3 className="text-xl md:text-2xl font-black text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
      <SnapshotsMarquee />

      <div id="testimonials" className="py-12 md:py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-16">
          <div className="text-center animate-fade-in-down">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-3 md:mb-4">
              What Travelers Say
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from real adventurers who started as strangers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {TESTIMONIALS.map((testimonial, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="netflix-card p-5 md:p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-100 space-y-3 md:space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-black">
                      {testimonial.initials}
                    </div>
                    <div className="flex gap-1">
                      {Array(testimonial.rating).fill(0).map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.trip}</p>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
      <div className="py-12 md:py-24 px-4 md:px-12 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-6xl font-black leading-tight animate-hero-glow">
            Ready to Find Your Tribe?
          </h2>
          <p className="text-base md:text-2xl text-blue-100 opacity-90">
            Your next adventure and lifelong friends are just one click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/destinations"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-bold py-3 px-6 md:py-4 md:px-10 rounded-lg btn-smooth hover:scale-105 text-sm md:text-base"
            >
              Browse All Trips <ChevronRight size={20} />
            </Link>
            <Link
              href="/enquiry"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-lg btn-smooth hover:bg-white/20 text-sm md:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

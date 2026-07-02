'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star, MapPin, Users, ArrowRight, ChevronRight } from 'lucide-react';
import { mockTours } from '@/lib/mockData';
import TourCarousel from '@/components/TourCarousel';
import ScrollReveal from '@/components/ScrollReveal';

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    tagline: "Don't find holidays to travel",
    title: 'Where Solo Travelers\nBecome Tribe',
    description: 'Scenic Himalayan treks, offbeat weekend escapes, and backpacking group adventures.'
  },
  {
    image: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?w=1920&q=80',
    tagline: 'Come solo, leave with a family',
    title: 'Adventures Told by\nthe Mountains',
    description: 'Explore Chopta, Kasol, Tosh, Manali, and Jibhi with the coolest community.'
  },
  {
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1920&q=80',
    tagline: 'Secure your seat with ₹2000',
    title: 'Explore Untouched\nHimalayan Villages',
    description: 'Carefully curated routes optimized for scenic treks, campfires, and local cafes.'
  }
];

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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Netflix-style Hero Carousel */}
      <div className="relative w-full h-screen md:h-[600px] overflow-hidden pt-20">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              idx === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {idx === currentSlide && (
              <div className="absolute inset-0 flex items-end justify-start p-8 md:p-16 text-white animate-fade-in-up">
                <div className="max-w-3xl space-y-4">
                  <p className="text-lg md:text-xl font-semibold text-gray-300 animate-fade-in-up stagger-1">
                    {slide.tagline}
                  </p>
                  <h1 className="text-4xl md:text-7xl font-black leading-tight animate-hero-fade stagger-2">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 max-w-xl animate-fade-in-up stagger-3">
                    {slide.description}
                  </p>
                  <div className="flex gap-4 pt-6 animate-fade-in-up stagger-4">
                    <Link
                      href="/destinations"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg btn-smooth"
                    >
                      Explore Trips <ArrowRight size={20} />
                    </Link>
                    <button className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur text-white font-bold py-4 px-8 rounded-lg btn-smooth">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Hero Navigation Indicators */}
        <div className="absolute bottom-8 left-8 md:left-16 z-20 flex gap-3">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentSlide
                  ? 'w-16 bg-white'
                  : 'w-3 bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats Section with Netflix Animation */}
      <div className="bg-gradient-to-b from-black/30 to-white py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { value: '2,500+', label: 'Happy Travelers' },
            { value: '120+', label: 'Trips Completed' },
            { value: '98%', label: 'Satisfaction Rate' }
          ].map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="text-center netflix-card p-8 rounded-2xl bg-white/50 backdrop-blur">
                <p className="text-5xl md:text-6xl font-black text-blue-600 mb-2 animate-scale-in">
                  {stat.value}
                </p>
                <p className="text-gray-600 font-semibold text-lg">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Featured Tours Carousel */}
      <div className="py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <TourCarousel tours={mockTours} title="Featured Adventures" />
        </div>
      </div>

      {/* Why Join Section */}
      <div className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center animate-fade-in-down">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why Choose Strangers Tribe?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just a travel company. We're a community building lifelong friendships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '👥',
                title: 'Curated Groups',
                description: 'Groups capped at 25 travelers. Matched with similar vibes for authentic experiences.'
              },
              {
                icon: '🗺️',
                title: 'Handpicked Routes',
                description: 'Off-the-beaten-path destinations, hidden waterfalls, and authentic local experiences.'
              },
              {
                icon: '⚡',
                title: 'Expert Captains',
                description: 'Experienced guides who ensure safety, fun games, bonfire nights, and unforgettable moments.'
              }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 150}>
                <div className="netflix-card p-8 rounded-2xl bg-white space-y-4 group">
                  <div className="text-5xl group-hover:animate-float">{item.icon}</div>
                  <h3 className="text-2xl font-black text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center animate-fade-in-down">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              What Travelers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from real adventurers who started as strangers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="netflix-card p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-100 space-y-4">
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
                  <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-black leading-tight animate-hero-glow">
            Ready to Find Your Tribe?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 opacity-90">
            Your next adventure and lifelong friends are just one click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/destinations"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-bold py-4 px-10 rounded-lg btn-smooth hover:scale-105"
            >
              Browse All Trips <ChevronRight size={20} />
            </Link>
            <button className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white font-bold py-4 px-10 rounded-lg btn-smooth hover:bg-white/20">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star, MapPin, Users, ArrowRight } from 'lucide-react';
import { mockTours } from '@/lib/mockData';
import ScrollReveal from '@/components/ScrollReveal';

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    tagline: 'Don’t find holidays to travel',
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
    quote: 'Amazing Experience with Strangers Tribe! Every moment was enjoyable and well-managed. The captains were very professional, friendly and supportive—they took care of everything, including safety and time management, which made the journey completely stress-free. ✨🌄',
    rating: 5
  },
  {
    initials: 'AM',
    name: 'Arjun Mehta',
    trip: 'Bangalore → Kasol & Tosh',
    quote: 'I was hesitant about solo traveling, but Strangers Tribe made me feel at home. From riverside music sessions in Kasol to trekking Tosh village, it was unforgettable. Left with 20 new friends!',
    rating: 5
  },
  {
    initials: 'KN',
    name: 'Kavya Nair',
    trip: 'Chennai → Jibhi',
    quote: 'Mini Thailand pool, forest walks, and stargazing in Jibhi was magical. Cozily organized wood cabins and excellent guide captain. Perfect travel tribe!',
    rating: 5
  },
  {
    initials: 'RG',
    name: 'Rohan Gupta',
    trip: 'Delhi → Manali',
    quote: 'White water rafting in Kullu was an adrenaline rush. Crossing the Atal Tunnel to see Sissu snow views with the group was spectacular. Extremely well executed.',
    rating: 5
  },
  {
    initials: 'AV',
    name: 'Amit Verma',
    trip: 'Lucknow → Rishikesh',
    quote: 'The Ganga Aarti was peaceful, and the trek to Tungnath Shiva temple on Day 3 was breathtaking. Highly recommend these guys for solo backpackers!',
    rating: 5
  }
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-run Hero Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-0 -mt-8 -mx-4 md:-mx-12 grain">
      {/* 1. Hero Ken Burns Slider Section */}
      <section className="relative h-screen min-h-[700px] overflow-hidden bg-[#1A1410] flex items-center">
        {/* Slideshow background */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              activeSlide === idx ? 'opacity-100 scale-105' : 'opacity-0 scale-100 pointer-events-none'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              transition: 'opacity 1.5s ease-in-out, transform 6.5s ease-out'
            }}
          />
        ))}

        {/* Shadow overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1410]/85 via-[#1A1410]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410]/60 via-transparent to-transparent pointer-events-none" />

        {/* Slide Content */}
        <div className="relative z-10 w-full px-6 md:px-16 max-w-4xl text-left text-white select-none">
          <div className="inline-flex items-center gap-3 mb-6 transition-all duration-700">
            <div className="w-8 h-[2px] bg-[#FF4B38]" />
            <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#FF6C5C]">
              {HERO_SLIDES[activeSlide].tagline}
            </span>
          </div>

          <h1 
            className="font-display text-5xl md:text-7xl font-extrabold leading-[1.08] mb-6 tracking-tight whitespace-pre-line"
            style={{ textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
          >
            {HERO_SLIDES[activeSlide].title}
          </h1>

          <p className="font-sans text-base md:text-lg text-white/80 max-w-xl mb-10 leading-relaxed font-light">
            {HERO_SLIDES[activeSlide].description}
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link href="/destinations">
              <button className="px-10 py-4 bg-[#FF4B38] text-white rounded-[2px] text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#FF6C5C] active:scale-95 transition-all shadow-lg shadow-[#FF4B38]/20">
                Explore Trips
              </button>
            </Link>
            <Link href="/bookings">
              <button className="px-10 py-4 bg-transparent text-white border border-white/30 rounded-[2px] text-xs font-semibold uppercase tracking-[0.18em] hover:bg-white/10 active:scale-95 transition-all">
                My Bookings
              </button>
            </Link>
          </div>
        </div>

        {/* Left indicators (Pagination) */}
        <div className="absolute bottom-10 left-6 md:left-16 flex gap-2 z-20">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-[3px] rounded-sm transition-all duration-500 ${
                activeSlide === idx ? 'w-8 bg-[#FF4B38]' : 'w-2 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Right slide number tracker */}
        <div className="absolute bottom-10 right-6 md:right-16 font-sans text-xs text-white/50 tracking-wider z-20">
          0{activeSlide + 1} <span className="text-[#FF4B38]">/</span> 0{HERO_SLIDES.length}
        </div>

        {/* Floating scroll tag */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 select-none animate-float opacity-75 z-20">
          <span className="text-[9px] text-white/40 tracking-[0.25em] uppercase font-sans">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#FF4B38] to-transparent" />
        </div>
      </section>

      {/* 2. Infinite Loop Text Marquee */}
      <div className="overflow-hidden bg-[#FF4B38] py-4 border-y border-white/10 select-none">
        <div className="flex whitespace-nowrap animate-[marquee_28s_linear_infinite] w-max font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-white">
          <span className="px-9">✦ Group Adventures</span>
          <span className="px-9">✦ Himalayan Trails</span>
          <span className="px-9">✦ Cultural Immersion</span>
          <span className="px-9">✦ Beach Escapes</span>
          <span className="px-9">✦ Strangers Tribe</span>
          <span className="px-9">✦ Solo-Friendly</span>
          <span className="px-9">✦ Budget Travel</span>
          {/* Loop repeat */}
          <span className="px-9">✦ Group Adventures</span>
          <span className="px-9">✦ Himalayan Trails</span>
          <span className="px-9">✦ Cultural Immersion</span>
          <span className="px-9">✦ Beach Escapes</span>
          <span className="px-9">✦ Strangers Tribe</span>
          <span className="px-9">✦ Solo-Friendly</span>
          <span className="px-9">✦ Budget Travel</span>
        </div>
      </div>

      {/* 3. Curated Destinations Section */}
      <section className="py-24 px-6 md:px-16 bg-white" id="destinations">
        <div className="max-w-[1500px] mx-auto mb-12">
          <ScrollReveal animation="slide-left" duration={800}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#FF4B38]" />
              <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#FF4B38]">
                Where To Go
              </span>
            </div>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <ScrollReveal animation="slide-left" delay={100} duration={900} className="flex-1">
              <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05] text-[#1A1410]">
                Curated<br />
                <em className="text-[#FF4B38] font-serif font-light italic">Destinations</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="slide-right" delay={200} duration={900} className="flex-1 max-w-sm">
              <p className="font-sans text-sm md:text-base text-[#706862] font-light leading-relaxed">
                Handpicked adventures designed for solo travelers ready to meet their tribe. Every trip is a new chapter in your travel diary.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Horizontal Swiper list */}
        <div className="max-w-[1500px] mx-auto overflow-hidden">
          <div className="flex overflow-x-auto no-scrollbar gap-6 py-6 scroll-smooth snap-x snap-mandatory">
            {mockTours.map((tour, index) => {
              const spots = tour.maxParticipants - tour.currentParticipants;
              return (
                <ScrollReveal
                  key={tour.id}
                  animation="fade-up"
                  delay={100 + index * 80}
                  duration={800}
                  className="flex-shrink-0 w-[290px] md:w-[360px] snap-start"
                >
                  <div 
                    className="bg-[#FAF6F2] rounded-lg overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group h-full"
                  >
                    <Link href={`/destinations/${tour.id}`}>
                      <div className="relative h-60 overflow-hidden bg-slate-200">
                        <img 
                          src={tour.image} 
                          alt={tour.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                          {tour.duration} Days
                        </div>
                        <div className="absolute top-4 right-4 bg-[#FF4B38] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                          ₹{tour.price.toLocaleString('en-IN')}
                        </div>
                      </div>

                      <div className="p-6 space-y-4">
                        <h3 className="font-display font-bold text-lg md:text-xl text-[#1A1410] line-clamp-1 group-hover:text-[#FF4B38] transition-colors">
                          {tour.title}
                        </h3>
                        
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#706862] font-semibold border-b border-slate-200/50 pb-4">
                          <div className="flex items-center gap-1">
                            <MapPin size={13} className="text-[#FF4B38]" />
                            <span>{tour.destination}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users size={13} className="text-[#FF4B38]" />
                            <span>{spots} spots left</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-xs font-semibold">
                          <div className="flex items-center gap-1">
                            <Star size={13} className="text-yellow-400 fill-yellow-400" />
                            <span className="text-[#1A1410]">{tour.rating}</span>
                            <span className="text-slate-400">({tour.reviews})</span>
                          </div>
                          <span className="text-[#FF4B38] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Details <ArrowRight size={13} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/destinations">
            <button className="px-12 py-4 bg-transparent text-[#1A1410] border border-[#1A1410] rounded-[2px] text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#1A1410] hover:text-white transition-all">
              View All Destinations
            </button>
          </Link>
        </div>
      </section>

      {/* 4. Stats counter section */}
      <section className="bg-[#1A1410] py-20 px-6 md:px-16 text-center select-none border-t border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          <ScrollReveal animation="fade-up" delay={50} className="space-y-1">
            <p className="font-display text-4xl md:text-6xl font-light text-[#FF6C5C]">1200+</p>
            <p className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/50">Happy Travelers</p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={150} className="space-y-1">
            <p className="font-display text-4xl md:text-6xl font-light text-[#FF6C5C]">80+</p>
            <p className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/50">Trips Completed</p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={250} className="space-y-1">
            <p className="font-display text-4xl md:text-6xl font-light text-[#FF6C5C]">12+</p>
            <p className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/50">Destinations</p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={350} className="space-y-1">
            <p className="font-display text-4xl md:text-6xl font-light text-[#FF6C5C]">99%</p>
            <p className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/50">Satisfaction Rate</p>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Traveler Stories (Testimonials) Section */}
      <section className="py-24 px-6 md:px-16 bg-[#FAF6F2] relative overflow-hidden" id="testimonials">
        <div className="absolute top-[-80px] right-[-80px] w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(255,75,56,0.06)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-14">
            <ScrollReveal animation="slide-left" duration={800}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-[#FF4B38]" />
                <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#FF4B38]">
                  Traveler Stories
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="slide-left" delay={100} duration={900}>
              <h2 className="font-display text-4xl md:text-6xl font-extrabold text-[#1A1410]">
                Told By Those<br />
                <em className="text-[#FF4B38] font-serif font-light italic">Who Lived It</em>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Active Testimonial quote left side */}
            <ScrollReveal animation="slide-left" delay={200} duration={1000} className="space-y-6">
              <div className="font-display text-7xl leading-[0.8] text-[#FF4B38] opacity-30 select-none">“</div>
              <blockquote className="font-display text-xl md:text-2xl font-light leading-relaxed text-[#1A1410] italic">
                {TESTIMONIALS[activeTestimonial].quote}
              </blockquote>
              
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                <div className="w-12 h-12 rounded-full bg-[#FF4B38] flex items-center justify-center font-display font-bold text-white shadow-sm text-sm">
                  {TESTIMONIALS[activeTestimonial].initials}
                </div>
                <div>
                  <p className="font-sans font-bold text-[#1A1410]">{TESTIMONIALS[activeTestimonial].name}</p>
                  <p className="font-sans text-xs tracking-wide text-[#FF4B38]">{TESTIMONIALS[activeTestimonial].trip}</p>
                </div>
              </div>

              <div className="flex gap-0.5 pt-2">
                {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-[#FF4B38] text-sm">★</span>
                ))}
              </div>
            </ScrollReveal>

            {/* Testimonials list right side */}
            <ScrollReveal animation="slide-right" delay={300} duration={1000} className="flex flex-col gap-3">
              {TESTIMONIALS.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`p-5 rounded-lg cursor-pointer transition-all border ${
                    activeTestimonial === idx
                      ? 'bg-[#1A1410] border-[#1A1410] shadow-md translate-x-2'
                      : 'bg-white border-[#FF4B38]/10 hover:border-[#FF4B38]/30 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-display font-semibold text-xs transition-colors ${
                        activeTestimonial === idx 
                          ? 'bg-[#FF4B38] text-white' 
                          : 'bg-[#FFEBE9] text-[#FF4B38]'
                      }`}
                    >
                      {item.initials}
                    </div>
                    <div>
                      <p 
                        className={`font-sans text-sm font-semibold transition-colors ${
                          activeTestimonial === idx ? 'text-white' : 'text-[#1A1410]'
                        }`}
                      >
                        {item.name}
                      </p>
                      <p 
                        className={`font-sans text-[10px] tracking-wider uppercase transition-colors ${
                          activeTestimonial === idx ? 'text-[#FF6C5C]' : 'text-slate-400'
                        }`}
                      >
                        {item.trip}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. High-converting CTA Section */}
      <ScrollReveal animation="scale-up" duration={1000} className="w-full">
        <section className="relative py-28 px-6 md:px-16 bg-[#1A1410] text-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1600&q=80)' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B38]/10 to-transparent pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-white/5 rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-white/10 rounded-full pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-3 justify-center select-none opacity-85">
              <div className="w-8 h-[1px] bg-[#FF4B38]" />
              <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#FF4B38]">Limited Spots</span>
              <div className="w-8 h-[1px] bg-[#FF4B38]" />
            </div>

            <h2 className="font-display text-4xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
              Ready To Meet<br />
              <em className="text-[#FF6C5C] font-serif font-light italic">Your People?</em>
            </h2>

            <p className="font-sans text-sm md:text-base text-white/60 max-w-md mx-auto font-light leading-relaxed">
              Join a group of solo travelers. Leave with a family. Next departures are filling fast. Secure your seat today!
            </p>

            <div className="flex gap-4 justify-center flex-wrap pt-4">
              <Link href="/destinations">
                <button className="px-12 py-4.5 bg-[#FF4B38] text-white border border-[#FF4B38] rounded-[2px] text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#FF6C5C] hover:border-[#FF6C5C] active:scale-95 transition-all shadow-lg shadow-[#FF4B38]/20">
                  Browse Upcoming Trips
                </button>
              </Link>
              <a href="https://wa.me/918953680695" target="_blank" rel="noopener noreferrer">
                <button className="px-12 py-4.5 bg-transparent text-white border border-white/30 rounded-[2px] text-xs font-semibold uppercase tracking-[0.18em] hover:bg-white/10 active:scale-95 transition-all">
                  Talk To Us
                </button>
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}

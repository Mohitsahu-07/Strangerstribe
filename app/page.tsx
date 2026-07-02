import Link from 'next/link';
import { Users, MapPin, Zap } from 'lucide-react';
import TestimonialCard from '@/components/TestimonialCard';
import { mockTestimonials } from '@/lib/testimonials';

export default function Home() {
  const stats = [
    { label: 'Happy Travelers', value: '2,500+' },
    { label: 'Trips Completed', value: '120+' },
    { label: 'Satisfaction Rate', value: '98%' },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white rounded-3xl px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent)] pointer-events-none" />
        <div className="relative">
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight leading-tight">
            Come Solo.<br />Leave with a<br />
            <span className="text-blue-400">Tribe.</span>
          </h1>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto opacity-95 leading-relaxed">
            Join 2,500+ travelers on epic adventures across the world. Get matched with solo travelers just like you, build friendships that last a lifetime, and explore the planet as part of the Strangers Tribe community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-blue-500/20 active:scale-95"
            >
              Explore Trip Batches
            </Link>
            <a
              href="#testimonials"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-xl backdrop-blur transition-all"
            >
              Read Travel Stories
            </a>
          </div>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition">
            <p className="text-5xl font-black text-blue-600 mb-2">{stat.value}</p>
            <p className="text-gray-600 font-semibold">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Why Join Section */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Why Join Strangers Tribe?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're not just a travel company. We're a community of adventurers building genuine friendships.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Curated Groups</h3>
            <p className="text-gray-600 leading-relaxed">
              Groups capped at 25 travelers. We match solo adventurers with similar vibes to ensure authentic, close-knit experiences.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Handpicked Routes</h3>
            <p className="text-gray-600 leading-relaxed">
              Off-the-beaten-path destinations, hidden waterfalls, local experiences. No boring tourist trails here.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Trip Captains</h3>
            <p className="text-gray-600 leading-relaxed">
              Experienced, friendly guides who host icebreaker games, bonfire nights, and ensure everyone feels safe & included.
            </p>
          </div>
        </div>
      </section>

      {/* Limited Spots Banner */}
      <section className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-lg">
        <div className="flex items-start gap-4">
          <div className="text-4xl">⚡</div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Limited Spots Available</h3>
            <p className="text-gray-700">
              Our trips fill up fast! Secure your spot with just ₹2,000 advance payment. Batches start as soon as we hit 15 travelers.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-4">What Our Travelers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real adventurers who started as strangers and became lifelong friends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-16 rounded-3xl text-center shadow-lg">
        <h2 className="text-5xl font-black mb-6">Ready to Find Your Tribe?</h2>
        <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Your next adventure and lifelong friends are just one click away. Don't travel alone anymore.
        </p>
        <Link
          href="/tours"
          className="inline-block bg-white text-blue-700 font-bold py-4 px-12 rounded-xl hover:bg-gray-50 transition-colors shadow-lg text-lg"
        >
          Browse All Trips
        </Link>
      </section>
    </div>
  );
}

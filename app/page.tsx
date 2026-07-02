import Link from 'next/link';
import { Compass, MapPin, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Discover Your Next Adventure</h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Explore the world's most beautiful destinations with expertly curated tours and unforgettable experiences.
        </p>
        <Link
          href="/tours"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          Browse All Tours
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Compass className="w-16 h-16 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Expert Guides</h3>
          <p className="text-gray-600">
            Our experienced guides provide insightful commentary and ensure your safety throughout your journey.
          </p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <MapPin className="w-16 h-16 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Curated Destinations</h3>
          <p className="text-gray-600">
            Visit hidden gems and iconic landmarks carefully selected for an authentic travel experience.
          </p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Users className="w-16 h-16 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Group Travel</h3>
          <p className="text-gray-600">
            Meet like-minded travelers and make new friends while exploring the world together.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Wander?</h2>
        <p className="text-lg mb-6 opacity-90">
          Check out our featured tours and start planning your next unforgettable journey today.
        </p>
        <Link
          href="/tours"
          className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
        >
          View All Tours
        </Link>
      </section>
    </div>
  );
}

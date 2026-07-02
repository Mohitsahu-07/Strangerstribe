import Link from 'next/link';
import { Instagram, Youtube, MessageCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-black text-2xl text-gray-900">
            Strangers<span className="text-blue-600">Tribe</span>
          </Link>

          {/* Main Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/tours" className="text-gray-700 font-semibold hover:text-blue-600 transition">
              Destinations
            </Link>
            <a href="/#testimonials" className="text-gray-700 font-semibold hover:text-blue-600 transition">
              Stories
            </a>
            <a href="#contact" className="text-gray-700 font-semibold hover:text-blue-600 transition">
              Contact
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex gap-3">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition">
                <MessageCircle size={20} />
              </a>
            </div>
            <Link
              href="/tours"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

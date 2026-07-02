import Link from 'next/link';
import { Globe } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
            <Globe size={32} />
            <span>WanderlustTours</span>
          </Link>
          <nav className="flex gap-8">
            <Link href="/" className="hover:text-blue-100 transition-colors">
              Home
            </Link>
            <Link href="/tours" className="hover:text-blue-100 transition-colors">
              All Tours
            </Link>
            <Link href="/bookings" className="hover:text-blue-100 transition-colors">
              My Bookings
            </Link>
            <Link href="/admin" className="hover:text-blue-100 transition-colors">
              Admin
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

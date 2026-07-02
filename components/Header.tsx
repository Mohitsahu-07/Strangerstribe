'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Compass } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-500 py-5 px-6 md:px-12 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-900 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1500px] mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display font-semibold text-2xl text-white tracking-tight">
          <Compass size={28} className="text-[#FF4B38]" />
          <span>Strangers Tribe</span>
        </Link>
        <nav className="flex gap-8 text-xs font-semibold uppercase tracking-widest">
          <Link href="/" className="text-white/95 hover:text-[#FF4B38] transition-colors py-1">
            Home
          </Link>
          <Link href="/destinations" className="text-white/95 hover:text-[#FF4B38] transition-colors py-1">
            Destinations
          </Link>
          <Link href="/bookings" className="text-white/95 hover:text-[#FF4B38] transition-colors py-1">
            My Bookings
          </Link>
          <Link href="/admin" className="text-white/95 hover:text-[#FF4B38] transition-colors py-1">
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}

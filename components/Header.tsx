'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { Show, UserButton } from "@clerk/nextjs";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="fixed top-0 left-0 right-0 z-[120] bg-[#1A1410] text-white/90 text-xs py-2 px-4 md:px-12">
        <div className="max-w-[1500px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-6 overflow-hidden">
            <a href="tel:+918953680695" className="flex items-center gap-1 md:gap-1.5 hover:text-[#FF4B38] transition-colors flex-shrink-0">
              <Phone size={12} />
              <span className="hidden sm:inline">+91 8953680695</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a href="mailto:strangerstribe@gmail.com" className="hidden sm:flex items-center gap-1.5 hover:text-[#FF4B38] transition-colors">
              <Mail size={12} />
              <span className="hidden md:inline">strangerstribe@gmail.com</span>
              <span className="md:hidden">Email</span>
            </a>
            <span className="hidden lg:flex items-center gap-1.5">
              <MapPin size={12} />
              <span>Jhansi, Uttar Pradesh, India</span>
            </span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <a
              href="https://www.instagram.com/strangers_tribe?igsh=azQ2cnAxajUxaTZ5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 bg-white/10 hover:bg-[#FF4B38]/80 rounded-full flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a
              href="https://wa.me/918953680695"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 bg-white/10 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="fixed top-[36px] left-0 right-0 z-[110] py-3 md:py-5 px-4 md:px-12 bg-slate-950/90 backdrop-blur-md border-b border-slate-900 shadow-lg">
        <div className="max-w-[1500px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 md:gap-3 font-display font-semibold text-lg md:text-2xl text-white tracking-tight" onClick={() => setMobileMenuOpen(false)}>
            <img src="/logo.jpg" alt="Strangers Tribe Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border border-white/20" />
            <span>Strangers Tribe</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-white/95">
            <Link href="/destinations" className="hover:text-[#FF4B38] transition-colors py-1">
              Destinations
            </Link>
            <Link href="/enquiry" className="hover:text-[#FF4B38] transition-colors py-1">
              Contact
            </Link>

            <Show when="signed-out">
              <Link href="/sign-in" className="hover:text-[#FF4B38] transition-colors py-1">
                Sign In
              </Link>
            </Show>

            <Show when="signed-in">
              <Link href="/bookings" className="hover:text-[#FF4B38] transition-colors py-1">
                My Bookings
              </Link>
              <div className="flex items-center">
                <UserButton />
              </div>
            </Show>

            <Link href="/destinations" className="bg-[#FF4B38] hover:bg-[#e0432f] text-white font-bold py-2.5 px-6 rounded transition-colors">
              Book Now
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 -mr-2 relative z-[130]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[105] md:hidden" onClick={() => setMobileMenuOpen(false)}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Menu Panel */}
          <div
            className="absolute top-[96px] left-0 right-0 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col px-6 py-6 space-y-1">
              <Link
                href="/destinations"
                className="text-white/90 hover:text-[#FF4B38] text-sm font-semibold uppercase tracking-widest py-3 border-b border-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Destinations
              </Link>
              <Link
                href="/enquiry"
                className="text-white/90 hover:text-[#FF4B38] text-sm font-semibold uppercase tracking-widest py-3 border-b border-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <Show when="signed-out">
                <Link
                  href="/sign-in"
                  className="text-white/90 hover:text-[#FF4B38] text-sm font-semibold uppercase tracking-widest py-3 border-b border-white/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
              </Show>

              <Show when="signed-in">
                <Link
                  href="/bookings"
                  className="text-white/90 hover:text-[#FF4B38] text-sm font-semibold uppercase tracking-widest py-3 border-b border-white/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Bookings
                </Link>
                <div className="flex items-center py-3 border-b border-white/10">
                  <UserButton />
                  <span className="text-white/70 text-xs ml-3 uppercase tracking-widest font-semibold">Account</span>
                </div>
              </Show>

              <Link
                href="/destinations"
                className="mt-4 bg-[#FF4B38] hover:bg-[#e0432f] text-white text-center font-bold py-3.5 px-6 rounded-lg transition-colors text-sm uppercase tracking-widest"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

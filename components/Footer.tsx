import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1A1410] text-[#FAF6F2]/75 border-t border-[#FF4B38]/15 py-10 md:py-16 px-4 md:px-12 mt-12 md:mt-20">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          <div className="space-y-4 col-span-2 md:col-span-1">
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="Strangers Tribe Logo" className="w-10 h-10 rounded-full object-cover border border-white/10" />
              <h3 className="font-display font-semibold text-2xl text-white tracking-tight">
                Strangers Tribe
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-[#FAF6F2]/65 font-light">
              Don&apos;t find holidays to travel. Join curated group adventures across India&apos;s most breathtaking landscapes. Come Solo, Leave with a Tribe.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://wa.me/918953680695"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#FF4B38]/10 hover:bg-[#FF4B38]/20 border border-[#FF4B38]/20 text-[#FF6C5C] text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/strangers_tribe?igsh=azQ2cnAxajUxaTZ5"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#FF4B38]/10 hover:bg-[#FF4B38]/20 border border-[#FF4B38]/20 text-[#FF6C5C] text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#FF4B38] mb-6">
              Explore
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <Link href="/destinations" className="hover:text-white transition-colors">
                  All Destinations
                </Link>
              </li>
              <li>
                <Link href="/bookings" className="hover:text-white transition-colors">
                  My Bookings
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-white transition-colors">
                  Traveler Stories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#FF4B38] mb-6">
              Popular Trips
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <Link href="/destinations/1" className="hover:text-white transition-colors">
                  Chopta & Tungnath Trek
                </Link>
              </li>
              <li>
                <Link href="/destinations/2" className="hover:text-white transition-colors">
                  Kasol & Tosh Expedition
                </Link>
              </li>
              <li>
                <Link href="/destinations/4" className="hover:text-white transition-colors">
                  Manali
                </Link>
              </li>
              <li>
                <Link href="/destinations/3" className="hover:text-white transition-colors">
                  Jibhi
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#FF4B38] mb-6">
              Support
            </h4>
            <ul className="space-y-3 text-sm font-light text-[#FAF6F2]/65">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[#FF4B38] mt-0.5 flex-shrink-0" />
                <span>Office: Jhansi, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-[#FF4B38] mt-0.5 flex-shrink-0" />
                <span>Call: +91 8953680695</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-[#FF4B38] mt-0.5 flex-shrink-0" />
                <span>Email: strangerstribe@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#FAF6F2]/10 pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4 text-xs font-light text-[#FAF6F2]/45">
          <p>&copy; 2026 Strangers Tribe community. All rights reserved.</p>
          <p className="tracking-wider uppercase">Come Solo. Leave with a Tribe.</p>
        </div>
      </div>
    </footer>
  );
}

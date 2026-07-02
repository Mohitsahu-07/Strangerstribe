import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1A1410] text-[#FAF6F2]/75 border-t border-[#FF4B38]/15 py-16 px-6 md:px-12 mt-20">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          {/* Brand block */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-2xl text-white tracking-tight">
              Strangers Tribe
            </h3>
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
                href="https://instagram.com/strangers_tribe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#FF4B38]/10 hover:bg-[#FF4B38]/20 border border-[#FF4B38]/20 text-[#FF6C5C] text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Quick links */}
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

          {/* Popular routes */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#FF4B38] mb-6">
              Popular Trips
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <Link href="/destinations/chopta-tungnath" className="hover:text-white transition-colors">
                  Chopta & Tungnath Trek
                </Link>
              </li>
              <li>
                <Link href="/destinations/kasol-tosh" className="hover:text-white transition-colors">
                  Kasol & Tosh Expedition
                </Link>
              </li>
              <li>
                <Link href="/destinations/manali-kasol" className="hover:text-white transition-colors">
                  Manali & Kasol Escape
                </Link>
              </li>
              <li>
                <Link href="/destinations/hidden-himachal" className="hover:text-white transition-colors">
                  Hidden Himachal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact block */}
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
                <span>Email: contact@strangerstribe.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copy bar */}
        <div className="border-t border-[#FAF6F2]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#FAF6F2]/45">
          <p>&copy; 2026 Strangers Tribe community. All rights reserved.</p>
          <p className="tracking-wider uppercase">Come Solo. Leave with a Tribe.</p>
        </div>
      </div>
    </footer>
  );
}

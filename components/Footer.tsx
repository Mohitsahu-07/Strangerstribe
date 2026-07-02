import { Mail, MapPin, Phone, Share2, Video, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Strangers Tribe</h3>
            <p className="text-sm leading-relaxed">
              Where solo travelers become family. Join our community for unforgettable adventures and lifelong connections.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li><a href="/tours" className="hover:text-blue-400 transition">All Trips</a></li>
              <li><a href="/bookings" className="hover:text-blue-400 transition">My Bookings</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Travel Stories</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Popular Routes</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition">Bali</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Switzerland</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Peru</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Iceland</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <Mail size={16} className="mt-0.5" />
                <span>hello@strangers-tribe.com</span>
              </div>
              <div className="flex gap-2">
                <Phone size={16} className="mt-0.5" />
                <span>+91 (555) 123-4567</span>
              </div>
              <div className="flex gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex items-center justify-between">
            <p className="text-sm">&copy; 2024 Strangers Tribe. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Share2 size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Video size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold mb-4">About Us</h4>
            <p className="text-sm leading-relaxed">
              WanderlustTours specializes in curated travel experiences to the world's most beautiful destinations.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Popular Tours</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white">Bali Adventure</a></li>
              <li><a href="#" className="hover:text-white">Swiss Alps</a></li>
              <li><a href="#" className="hover:text-white">Machu Picchu</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <p className="text-sm">Email: info@wanderlust.com</p>
            <p className="text-sm">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm">&copy; 2024 WanderlustTours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

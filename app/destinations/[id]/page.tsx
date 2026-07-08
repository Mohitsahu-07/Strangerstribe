'use client';

import { useEffect, useState, use } from 'react';
import { Tour } from '@/lib/types';
import { CheckCircle, AlertCircle, Loader, TrendingUp, Download, ArrowRight, Star, ChevronLeft, ChevronRight, XCircle, Briefcase, ShieldAlert, Scale } from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import SignupModal, { isUserSignedUp } from '@/components/SignupModal';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';

export default function TourDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { isSignedIn } = useUser();
  const [tour, setTour] = useState<Tour | null>(null);
  const [relatedTours, setRelatedTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showSignupModal, setShowSignupModal] = useState(false);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await fetch(`/api/destinations/${id}`);
        if (!response.ok) throw new Error('Tour not found');
        const data = await response.json();
        setTour(data);

        // Fetch all tours for "Related Trips"
        const allResponse = await fetch('/api/destinations');
        const allTours = await allResponse.json();
        setRelatedTours(allTours.filter((t: Tour) => t.id !== id));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load tour');
      } finally {
        setLoading(false);
      }
    };
    fetchTour();
  }, [id]);

  const triggerPdfDownload = async () => {
    if (!tour) return;
    if (tour.staticPdf) {
      const link = document.createElement('a');
      link.href = encodeURI(tour.staticPdf);
      link.download = `${tour.title.replace(/[^a-zA-Z0-9]/g, '_')}_Itinerary.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      const { generateItineraryPDF } = await import('@/lib/generateItineraryPDF');
      generateItineraryPDF(tour);
    }
  };

  const handleGetItinerary = async () => {
    if (isSignedIn || isUserSignedUp()) {
      triggerPdfDownload();
    } else {
      setShowSignupModal(true);
    }
  };

  const handleSignupSuccess = async () => {
    triggerPdfDownload();
  };

  if (loading)
    return (
      <div className="flex justify-center items-center py-40">
        <Loader className="animate-spin text-blue-600" size={40} />
      </div>
    );

  if (error)
    return (
      <div className="p-6 bg-red-50 border-2 border-red-200 rounded-lg flex gap-3 text-red-700 mt-32">
        <AlertCircle size={24} />
        <span className="font-semibold">{error}</span>
      </div>
    );

  if (!tour) return <div className="text-center py-12 text-gray-600">Tour not found</div>;

  const availableSpots = tour.maxParticipants - tour.currentParticipants;
  const nights = tour.duration - 1;

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="relative w-full h-[350px] md:h-[550px]">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 md:px-6">
          <h1 className="text-2xl md:text-5xl font-black leading-tight mb-3 md:mb-4 animate-hero-fade max-w-4xl">
            {tour.title}
          </h1>

          {/* Action Buttons */}
          <div className="flex gap-3 md:gap-4 mb-4 md:mb-6 animate-fade-in-up stagger-2">
            <button
              onClick={handleGetItinerary}
              className="inline-flex items-center gap-1.5 md:gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-bold py-2.5 px-4 md:py-3 md:px-6 rounded-lg transition-all text-sm md:text-base"
            >
              <Download size={18} />
              Get Itinerary
            </button>
            <a
              href="#booking-section"
              className="inline-flex items-center gap-1.5 md:gap-2 bg-[#FF4B38] hover:bg-[#e0432f] text-white font-bold py-2.5 px-4 md:py-3 md:px-6 rounded-lg transition-all text-sm md:text-base"
            >
              <ArrowRight size={18} />
              Book Now
            </a>
          </div>

          {/* Trip Info Bar */}
          <div className="bg-white/15 backdrop-blur-md rounded-xl px-4 py-2 md:px-8 md:py-3 flex flex-wrap items-center justify-center gap-3 md:gap-6 text-xs md:text-sm font-bold animate-fade-in-up stagger-3">
            <span>{tour.duration} Days, {nights} Night{nights !== 1 ? 's' : ''}</span>
            <span className="hidden md:inline-block w-px h-5 bg-white/30" />
            <span>₹{tour.price.toLocaleString('en-IN')}{tour.originalPrice ? <span className="ml-1 line-through text-white/50 font-normal text-xs">₹{tour.originalPrice.toLocaleString('en-IN')}</span> : ''}</span>
            <span className="hidden md:inline-block w-px h-5 bg-white/30" />
            <span>Ex - {tour.destination.split('&')[0].trim()}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 pb-16">
        {/* Back Link */}
        <div className="mt-8 animate-fade-in-down">
          <Link href="/destinations" className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-2 btn-smooth">
            ← Back to Trips
          </Link>
        </div>

      <div className="grid lg:grid-cols-3 gap-10 mt-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <div className="animate-fade-in-up stagger-1">
            <h2 className="text-3xl font-black text-gray-900 mb-3">About This Trip</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{tour.description}</p>
          </div>

          {/* Trip Dashboard */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 md:p-8 rounded-2xl border-2 border-blue-100 animate-fade-in-up stagger-2">
            <h3 className="text-2xl font-black mb-6 text-gray-900">Trip Details</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <p className="text-gray-600 text-xs font-bold uppercase tracking-wide">Duration</p>
                <p className="text-2xl md:text-3xl font-black text-gray-900">{tour.duration} <span className="text-base md:text-lg">Days</span></p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-xs font-bold uppercase tracking-wide">Difficulty</p>
                <p className="text-xl md:text-2xl font-black text-blue-600 capitalize">{tour.difficulty}</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-xs font-bold uppercase tracking-wide">Group Size</p>
                <p className="text-xl md:text-2xl font-black text-gray-900">Max {tour.maxParticipants}</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-xs font-bold uppercase tracking-wide">Start Date</p>
                <p className="text-lg font-bold text-gray-900">{new Date(tour.startDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-xs font-bold uppercase tracking-wide">Solo Friendly</p>
                <p className="text-2xl font-black text-green-600">✓ 70%+</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-xs font-bold uppercase tracking-wide">Rating</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl md:text-2xl font-black text-yellow-500">★ {tour.rating}</span>
                  <span className="text-sm text-gray-600">({tour.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>



          {/* Day-by-Day Itinerary */}
          {tour.itinerary && tour.itinerary.length > 0 && (
            <div className="animate-fade-in-up stagger-3">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black text-gray-900">Day-by-Day Itinerary</h3>
                <button
                  onClick={handleGetItinerary}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Download size={16} />
                  Download PDF
                </button>
              </div>
              <div className="space-y-4">
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-200 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <div className="text-center leading-tight">
                          <p className="text-[10px] font-bold uppercase">Day</p>
                          <p className="text-lg font-black -mt-0.5">{day.day}</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-black text-gray-900 mb-1">{day.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{day.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {day.activities.map((activity, idx) => (
                            <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights & Inclusions */}
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up stagger-3">
            <div className="bg-blue-50 p-5 md:p-8 rounded-2xl border-2 border-blue-100">
              <h3 className="font-black text-xl text-blue-900 mb-6 flex items-center gap-2">
                <TrendingUp className="text-blue-600" />
                Highlights
              </h3>
              <ul className="space-y-3">
                {tour.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-emerald-50 p-5 md:p-8 rounded-2xl border-2 border-emerald-100">
              <h3 className="font-black text-xl text-emerald-900 mb-6 flex items-center gap-2">
                <CheckCircle className="text-emerald-600" />
                What&apos;s Included
              </h3>
              <ul className="space-y-3">
                {tour.inclusions.map((inclusion, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">{inclusion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Exclusions & Things to Carry */}
          {(tour.exclusions || tour.thingsToCarry) && (
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up mt-8">
              {tour.exclusions && tour.exclusions.length > 0 && (
                <div className="bg-rose-50 p-5 md:p-8 rounded-2xl border-2 border-rose-105">
                  <h3 className="font-black text-xl text-rose-900 mb-6 flex items-center gap-2">
                    <XCircle className="text-rose-600" />
                    Exclusions / What&apos;s Not Included
                  </h3>
                  <ul className="space-y-3">
                    {tour.exclusions.map((exclusion, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <XCircle size={20} className="text-rose-600 flex-shrink-0 mt-0.5" />
                        <span className="font-semibold">{exclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {tour.thingsToCarry && tour.thingsToCarry.length > 0 && (
                <div className="bg-amber-50 p-5 md:p-8 rounded-2xl border-2 border-amber-105">
                  <h3 className="font-black text-xl text-amber-900 mb-6 flex items-center gap-2">
                    <Briefcase className="text-amber-600" />
                    Things to Carry
                  </h3>
                  <ul className="space-y-3">
                    {tour.thingsToCarry.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Why This Trip */}
          <div className="bg-orange-50 p-5 md:p-8 rounded-2xl border-2 border-orange-100 animate-fade-in-up stagger-4">
            <h3 className="font-black text-2xl text-gray-900 mb-4">Why You&apos;ll Love This Trip</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-2xl">🤝</span>
                <div>
                  <p className="font-bold">Meet Your Tribe</p>
                  <p className="text-sm text-gray-600">Join solo travelers just like you. 70%+ of our travelers start as strangers and leave as lifelong friends.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="font-bold">Expert Trip Captain</p>
                  <p className="text-sm text-gray-600">Experienced guide who ensures everyone feels included, safe, and has an amazing time.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">📸</span>
                <div>
                  <p className="font-bold">Unforgettable Memories</p>
                  <p className="text-sm text-gray-600">Off-the-beaten-path experiences, hidden gems, and genuine moments with new friends.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Safety Guidelines */}
          {tour.safetyGuidelines && tour.safetyGuidelines.length > 0 && (
            <div className="bg-indigo-50 p-5 md:p-8 rounded-2xl border-2 border-indigo-105 animate-fade-in-up mt-8">
              <h3 className="font-black text-2xl text-indigo-900 mb-6 flex items-center gap-2">
                <ShieldAlert className="text-indigo-600" />
                Safety Guidelines
              </h3>
              <ul className="space-y-3">
                {tour.safetyGuidelines.map((guideline, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle size={20} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">{guideline}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Rules & Policies */}
          {tour.rulesAndPolicies && tour.rulesAndPolicies.length > 0 && (
            <div className="bg-slate-50 p-5 md:p-8 rounded-2xl border-2 border-slate-200 animate-fade-in-up mt-8">
              <h3 className="font-black text-2xl text-slate-900 mb-6 flex items-center gap-2">
                <Scale className="text-slate-700" />
                Rules & Policies
              </h3>
              <ul className="space-y-3">
                {tour.rulesAndPolicies.map((rule, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-slate-500 font-bold mr-1">•</span>
                    <span className="font-semibold">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Booking Section */}
        <div id="booking-section">
          {availableSpots <= 3 && availableSpots > 0 && (
            <div className="mb-6 p-4 bg-orange-50 border-2 border-orange-200 rounded-lg text-orange-700 font-bold">
              ⚡ Only {availableSpots} spot{availableSpots !== 1 ? 's' : ''} left!
            </div>
          )}
          {availableSpots === 0 && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 font-bold">
              🚫 This batch is full
            </div>
          )}
          {availableSpots > 0 && <BookingForm tour={tour} />}

          {/* Get Itinerary CTA in sidebar */}
          <div className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-100 rounded-2xl p-6 text-center">
            <Download size={28} className="text-blue-600 mx-auto mb-3" />
            <h4 className="font-black text-gray-900 mb-2">Download Itinerary</h4>
            <p className="text-sm text-gray-600 mb-4">Get the detailed day-by-day plan as a PDF</p>
            <button
              onClick={handleGetItinerary}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Download size={16} />
              Get Itinerary PDF
            </button>
          </div>
        </div>
      </div>

      {/* Related Trips Section */}
      {relatedTours.length > 0 && (
        <div className="mt-20 mb-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black text-gray-900">Related Trips</h2>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 border-2 border-blue-200 hover:border-blue-400 px-4 py-2 rounded-lg transition-all"
            >
              See All <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedTours.slice(0, 3).map((relatedTour) => {
              const rNights = relatedTour.duration - 1;
              return (
                <div key={relatedTour.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 group card-hover">
                  <div className="relative h-48 overflow-hidden bg-gray-200 image-hover">
                    <img src={relatedTour.image} alt={relatedTour.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-[#FF4B38] text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg">
                      ₹{relatedTour.price.toLocaleString('en-IN')}
                      {relatedTour.originalPrice && (
                        <span className="ml-1.5 text-white/70 line-through text-xs font-normal">
                          ₹{relatedTour.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 flex items-end gap-3">
                      <span className="text-white text-xs font-semibold bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md">
                        📅 {relatedTour.duration} Days, {rNights} Night{rNights !== 1 ? 's' : ''}
                      </span>
                      <span className="text-white text-xs font-semibold bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md">
                        👥 {relatedTour.tripType}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition line-clamp-1">
                      {relatedTour.title}
                    </h3>
                    <div className="flex items-center gap-0.5 mb-3">
                      {Array(5).fill(0).map((_, i) => (
                        <Star key={i} size={12} className={i < Math.round(relatedTour.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'} />
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <Link href={`/destinations/${relatedTour.id}`} className="text-sm font-bold text-[#FF4B38] hover:text-[#e0432f] transition-colors">
                        Read More
                      </Link>
                      <Link href={`/destinations/${relatedTour.id}`} className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-1.5 rounded-lg transition-colors">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      </div>

      {/* Signup Modal */}
      {tour && (
        <SignupModal
          isOpen={showSignupModal}
          onClose={() => setShowSignupModal(false)}
          onSuccess={handleSignupSuccess}
          tourTitle={tour.title}
        />
      )}
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star, ArrowRight, ArrowLeft, Sparkles, Users, Plane } from 'lucide-react';

interface CardData {
  image: string;
  label?: string;
}

interface SlideData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bgImage: string;
  exploreUrl: string;
  categories: string[];
  cards: CardData[];
}

const HERO_SLIDES: SlideData[] = [
  {
    id: '4',
    title: 'MANALI',
    subtitle: 'THE VALLEY OF GODS',
    description: 'Trek through Solang Valley, cross the iconic Atal Tunnel to snowy Sissu, raft on the icy Beas river, and enjoy cozy cafe vibes in Old Manali.',
    bgImage: '/manali.jpg',
    exploreUrl: '/destinations/4',
    categories: ['All Trips', 'Weekend Trips', 'Bike Trips'],
    cards: [
      {
        image: '/hadimba_temple.png',
        label: 'HADIMBA TEMPLE'
      },
      {
        image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&q=80',
        label: 'PINE FORESTS'
      },
      {
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80',
        label: 'BEAS RIVER VALLEY'
      }
    ]
  },
  {
    id: '1',
    title: 'CHOPTA',
    subtitle: 'MINI SWITZERLAND OF INDIA',
    description: 'Trek to Tungnath, the highest Shiva temple in the world, climb to the Chandrashila Peak for a 360° Himalayan vista, and camp in lush green alpine meadows.',
    bgImage: '/chopta.png',
    exploreUrl: '/destinations/1',
    categories: ['All Trips', 'Treks', 'Weekend Trips', 'Monsoon Trips'],
    cards: [
      {
        image: '/chandrashila.jpg',
        label: 'CHANDRASHILA SUMMIT'
      },
      {
        image: '/tungnath_temple.png',
        label: 'TUNGNATH TEMPLE'
      },
      {
        image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80',
        label: 'MEADOW CAMPING'
      }
    ]
  },
  {
    id: '2',
    title: 'KASOL & TOSH',
    subtitle: 'HEAVEN IN PARVATI VALLEY',
    description: 'Explore the bohemian cafes of Kasol, embark on a scenic hike to the rustic village of Tosh, and soak in the sacred hot springs of Manikaran Sahib.',
    bgImage: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?w=1920&q=80',
    exploreUrl: '/destinations/2',
    categories: ['All Trips', 'Treks', 'Weekend Trips', 'Monsoon Trips'],
    cards: [
      {
        image: '/parvati_valley.png',
        label: 'PARVATI VALLEY'
      },
      {
        image: '/tosh_village.jpg',
        label: 'TOSH VILLAGE'
      },
      {
        image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=600&q=80',
        label: 'MANIKARAN SAHIB'
      }
    ]
  },
  {
    id: '3',
    title: 'JIBHI',
    subtitle: 'THE UNTOUCHED ESCAPE',
    description: 'Unwind in cozy wooden cabins, walk through pine forests to hidden waterfalls, experience the stunning views of Jalori Pass, and hike to Serolsar Lake.',
    bgImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    exploreUrl: '/destinations/3',
    categories: ['All Trips', 'Weekend Trips'],
    cards: [
      {
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80',
        label: 'JIBHI WATERFALL'
      },
      {
        image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80',
        label: 'JALORI PASS'
      },
      {
        image: '/serolsar_lake.jpg',
        label: 'SEROLSAR LAKE'
      }
    ]
  },
  {
    id: '5',
    title: 'UDAIPUR & JAIPUR',
    subtitle: 'THE ROYAL HERITAGE OF RAJASTHAN',
    description: 'Discover the romantic lake palaces of Udaipur, explore the scenic hills of Mount Abu, step into the blue city Jodhpur, and marvel at the pink sandstone forts of Jaipur.',
    bgImage: 'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=1920&q=80',
    exploreUrl: '/destinations/5',
    categories: ['All Trips', 'Weekend Trips'],
    cards: [
      {
        image: '/udaipur.jpg',
        label: 'UDAIPUR'
      },
      {
        image: '/jodhpur.jpg',
        label: 'MEHRANGARH FORT'
      },
      {
        image: '/jaipur.jpg',
        label: 'JAIPUR'
      }
    ]
  }
];

export default function TribeHero() {
  const [slideIndex, setSlideIndex] = useState(0);

  const currentSlide = HERO_SLIDES[slideIndex] || HERO_SLIDES[0];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <div className="relative w-full min-h-[520px] md:min-h-[680px] md:h-[750px] lg:h-[800px] bg-[#121212] overflow-hidden flex flex-col justify-between pt-28 md:pt-36">
      <div className="absolute inset-0 z-0">
        <img
          src={currentSlide.bgImage}
          alt={currentSlide.title}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out scale-105 filter brightness-50 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </div>
      <div className="relative z-10 w-full px-4 md:px-12 flex-1 flex items-center">
        <div className="max-w-[1500px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-white text-left max-w-xl">
            {currentSlide.subtitle && (
              <span className="inline-block text-[#FF4B38] font-bold text-xs md:text-sm tracking-[0.25em] uppercase animate-fade-in-down">
                {currentSlide.subtitle}
              </span>
            )}

            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none uppercase select-none transition-all duration-700 font-display drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              {currentSlide.title}
            </h1>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed font-sans font-medium drop-shadow-md">
              {currentSlide.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 md:gap-6 pt-3 md:pt-4">
              <Link
                href={currentSlide.exploreUrl}
                className="group inline-flex items-center gap-2 bg-[#FF4B38] hover:bg-[#e0432f] text-white font-bold text-xs md:text-sm uppercase tracking-wider py-3 px-6 md:py-3.5 md:px-8 rounded-full shadow-[0_4px_20px_rgba(255,75,56,0.3)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Explore</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              {HERO_SLIDES.length > 1 && (
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full border border-white/20 hover:border-white/50 bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
                    aria-label="Previous Slide"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full border border-white/20 hover:border-white/50 bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
                    aria-label="Next Slide"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="hidden md:flex lg:col-span-6 justify-center items-center py-6">
            <div className="relative w-[320px] h-[250px] md:w-[480px] md:h-[350px] select-none">

              {currentSlide.cards && currentSlide.cards.length >= 3 ? (
                <>
                  <div className="absolute left-[5%] top-[10%] w-[130px] h-[190px] md:w-[170px] md:h-[250px] bg-[#1a1410] border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-out rotate-[-8deg] hover:rotate-0 hover:scale-110 hover:z-30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] origin-bottom z-10 group/card cursor-pointer">
                    <img
                      src={currentSlide.cards[0].image}
                      alt={currentSlide.cards[0].label || currentSlide.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-8 flex items-end">
                      <span className="text-[10px] md:text-xs font-black tracking-widest text-white uppercase truncate w-full">
                        {currentSlide.cards[0].label || currentSlide.title}
                      </span>
                    </div>
                  </div>
                  <div className="absolute left-[33%] top-[2%] w-[130px] h-[190px] md:w-[170px] md:h-[250px] bg-[#1a1410] border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-out rotate-[4deg] hover:rotate-0 hover:scale-110 hover:z-30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] origin-bottom z-20 group/card cursor-pointer">
                    <img
                      src={currentSlide.cards[1].image}
                      alt={currentSlide.cards[1].label || currentSlide.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-8 flex items-end">
                      <span className="text-[10px] md:text-xs font-black tracking-widest text-white uppercase truncate w-full">
                        {currentSlide.cards[1].label || currentSlide.title}
                      </span>
                    </div>
                  </div>
                  <div className="absolute left-[60%] top-[8%] w-[130px] h-[190px] md:w-[170px] md:h-[250px] bg-[#1a1410] border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-out rotate-[-3deg] hover:rotate-0 hover:scale-110 hover:z-30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] origin-bottom z-10 group/card cursor-pointer">
                    <img
                      src={currentSlide.cards[2].image}
                      alt={currentSlide.cards[2].label || currentSlide.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-8 flex items-end">
                      <span className="text-[10px] md:text-xs font-black tracking-widest text-white uppercase truncate w-full">
                        {currentSlide.cards[2].label || currentSlide.title}
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/50">
                  Loading images...
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 w-full mt-6 md:mt-12 bg-black/75 backdrop-blur-md border-t border-white/10 border-b border-white/5">
        <div className="max-w-[1500px] mx-auto px-4 md:px-12 py-4 md:py-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 md:gap-y-6 gap-x-3 md:gap-x-4 text-white items-center justify-items-center">
          <div className="flex items-center gap-2 md:gap-3 w-full justify-center lg:justify-start lg:border-r lg:border-white/10 lg:pr-4">
            <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-base md:text-lg leading-tight">4.9</span>
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-[9px] md:text-[10px] text-gray-400 font-semibold tracking-wider uppercase">Google Rating</p>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-3 w-full justify-center lg:border-r lg:border-white/10 lg:pr-4">
            <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center">
              <Star className="w-4 h-4 md:w-5 md:h-5 text-[#FF4B38] fill-[#FF4B38]" />
            </div>
            <div className="text-left">
              <span className="font-extrabold text-base md:text-lg leading-none">2000+</span>
              <p className="text-[9px] md:text-[10px] text-gray-400 font-semibold tracking-wider uppercase mt-0.5">Happy Reviews</p>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-3 w-full justify-center lg:border-r lg:border-white/10 lg:pr-4">
            <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center">
              <Users className="w-4 h-4 md:w-5 md:h-5 text-[#FF4B38]" />
            </div>
            <div className="text-left">
              <span className="font-extrabold text-base md:text-lg leading-none">10,000+</span>
              <p className="text-[9px] md:text-[10px] text-gray-400 font-semibold tracking-wider uppercase mt-0.5">Travelers</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 md:gap-3 w-full justify-center lg:border-r lg:border-white/10 lg:pr-4">
            <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#FF4B38]" />
            </div>
            <div className="text-left">
              <span className="font-extrabold text-base md:text-lg leading-none">5+</span>
              <p className="text-[9px] md:text-[10px] text-gray-400 font-semibold tracking-wider uppercase mt-0.5">Years of Experience</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 md:gap-3 w-full justify-center lg:justify-end">
            <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center">
              <Plane className="w-4 h-4 md:w-5 md:h-5 text-[#FF4B38] rotate-45" />
            </div>
            <div className="text-left">
              <span className="font-extrabold text-base md:text-lg leading-none">1000+</span>
              <p className="text-[9px] md:text-[10px] text-gray-400 font-semibold tracking-wider uppercase mt-0.5">Trips Completed</p>
            </div>
          </div>
        </div>
        <div className="w-full h-1.5 bg-[#FF4B38]" />
      </div>
    </div>
  );
}

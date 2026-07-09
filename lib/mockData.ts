import { Tour, Booking, User } from './types';

export const mockTours: Tour[] = [
  {
    id: '1',
    title: 'Tungnath Trek',
    description: 'Join the Strangers Tribe for an epic adventure covering Chopta, the pristine Deoria Tal, the sacred Tungnath Shiva Temple, the breathtaking Chandrashila Peak, and the adventure hub Rishikesh.',
    destination: 'Chopta & Rishikesh',
    duration: 5,
    price: 5999,
    originalPrice: 7999,
    maxParticipants: 25,
    currentParticipants: 18,
    image: '/tungnath_tour.jpg',
    staticPdf: '/Strangers Trip to Tungnath.pdf',
    startDate: '2026-07-20',
    endDate: '2026-07-25',
    highlights: [
      'Deoria Tal Lake Trek',
      'Tungnath Shiva Temple Trek',
      'Chandrashila Peak Summit',
      'Rishikesh Ganga Aarti & Cafes'
    ],
    inclusions: [
      'Train Journey (Jhansi–Delhi–Jhansi) – Jhansi Package Only',
      '26-Seater Tempo Traveller',
      '1 Night Stay in Chopta',
      '1 Night Stay in Rishikesh',
      '2 Breakfasts',
      '2 Dinners',
      'Bonfire & Music Night (Weather Permitting)',
      'Trip Captain',
      'Fun Group Activities',
      'First Aid Support',
      'Sightseeing as per Itinerary'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Jhansi to Delhi & Overnight Journey',
        description: 'Board train from Jhansi to Delhi. Assemble the group in Delhi, take a dinner break (self-sponsored), and begin the overnight Tempo Traveller journey to Chopta.',
        activities: ['Train journey from Jhansi to Delhi', 'Group assembly in Delhi', 'Dinner break', 'Overnight Tempo Traveller drive to Chopta']
      },
      {
        day: 2,
        title: 'Arrive Chopta & Visit Deoria Tal',
        description: 'Reach Chopta and check in to the hotel. Visit the scenic Deoria Tal lake (subject to weather/time). Return to Chopta for bonfire, music, dinner, and an overnight stay.',
        activities: ['Hotel check-in at Chopta', 'Deoria Tal Lake trek', 'Evening bonfire & music', 'Group dinner & overnight stay']
      },
      {
        day: 3,
        title: 'Tungnath & Chandrashila Trek, Drive to Rishikesh',
        description: 'Early morning trek to the sacred Tungnath Temple and the breathtaking Chandrashila Peak. Return for breakfast, check out, and drive to Rishikesh. Check in to the hotel for an overnight stay.',
        activities: ['Early morning Tungnath Temple trek', 'Chandrashila Peak summit', 'Breakfast & hotel check-out', 'Scenic drive to Rishikesh', 'Rishikesh hotel check-in']
      },
      {
        day: 4,
        title: 'Explore Rishikesh & Evening Ganga Aarti',
        description: 'Explore Rishikesh. Enjoy optional white water rafting or bungee jumping (self-paid). Attend the spiritual evening Ganga Aarti, then depart for Delhi in the evening.',
        activities: ['Explore Rishikesh cafes & markets', 'Optional white water rafting & bungee', 'Witness Ganga Aarti', 'Evening departure to Delhi']
      },
      {
        day: 5,
        title: 'Return to Jhansi & Trip Concludes',
        description: 'Reach Delhi in the morning and board the train back to Jhansi. The memorable trip concludes.',
        activities: ['Arrive in Delhi', 'Board train to Jhansi', 'Return to Jhansi', 'Farewell to your travel tribe']
      }
    ],
    difficulty: 'moderate',
    tripType: 'Group',
    rating: 4.9,
    reviews: 128,
    exclusions: [
      'Lunch',
      'River Rafting, Bungee & Other Adventure Activities',
      'Entry Fees (if applicable)',
      'Personal Expenses',
      'Anything Not Mentioned in Inclusions'
    ],
    safetyGuidelines: [
      'Follow the instructions of the Trip Captain at all times.',
      'Consumption of illegal drugs or prohibited substances is strictly forbidden.',
      'Alcohol is not permitted during trekking activities.',
      'Respect local culture, fellow travelers and nature.',
      'Do not litter; help keep the destinations clean.',
      'Carry your personal medicines and valid government ID.',
      'Wear proper trekking shoes and warm/rain clothing.',
      'Any damage caused to hotel or vehicle property will be chargeable.'
    ],
    rulesAndPolicies: [
      'Advance booking amount is mandatory to confirm your seat.',
      'Seats are allotted on a first-come, first-served basis.',
      'Share your ID proof after booking confirmation.',
      'Full payment must be completed before the departure date.',
      'The itinerary may change due to weather, road, traffic or government restrictions.',
      'Adventure activities are optional and at your own risk.',
      'No refund for unused services during the trip.',
      'Cancellation and refund policy will apply as per Strangers Tribe guidelines.',
      'Strangers Tribe is not responsible for loss of personal belongings.',
      'Participants are expected to maintain discipline throughout the trip.'
    ],
    pricingPackages: [
      { name: 'From Delhi', price: 5999, originalPrice: 7999 },
      { name: 'From Jhansi', price: 7999, originalPrice: 9999 }
    ]
  },
  {
    id: '2',
    title: 'Kasol & Tosh',
    description: 'Escape to the Parvati Valley. Explore the vibrant cafes of Kasol, hike to the scenic mountain village of Tosh, visit the holy Manikaran hot springs, and enjoy riverside music sessions.',
    destination: 'Kasol & Tosh',
    duration: 6,
    price: 6500,
    originalPrice: 8000,
    maxParticipants: 25,
    currentParticipants: 20,
    image: '/kasol_tour.jpg',
    staticPdf: '/Strangers_Tribe_Kasol_Tosh_Itinerary.pdf',
    startDate: '2026-07-15',
    endDate: '2026-07-21',
    highlights: [
      'Kasol Market & Cafe Hopping',
      'Chalal Village Riverside Walk',
      'Tosh Village Trek & Viewpoints',
      'Manikaran Sahib Hot Springs'
    ],
    inclusions: [
      'Travel (Delhi/Chandigarh-Kasol-Delhi/Chandigarh)',
      'Train assistance for Jhansi participants',
      '3 Nights stay in Kasol/Tosh area',
      '3 Breakfasts and 3 Dinners',
      'Tosh Excursion & Chalal Walk',
      'Manikaran Visit',
      'Bonfire, DJ Night & Group Games',
      'Trip Captain & First Aid Support'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Departure from Jhansi & Delhi',
        description: 'Board the train from Jhansi to Delhi. Delhi and Chandigarh participants join the group. Begin the overnight Volvo or Tempo Traveller journey to Kasol.',
        activities: ['Train journey from Jhansi', 'Delhi & Chandigarh group assembly', 'Overnight travel to Kasol']
      },
      {
        day: 2,
        title: 'Arrival in Kasol & Chalal Village Walk',
        description: 'Arrive in Kasol, check-in, and have breakfast. Explore Kasol Market, go cafe hopping, take a walk to Chalal village, and enjoy a bonfire with icebreaker games in the evening. Stay in Kasol.',
        activities: ['Hotel check-in & breakfast', 'Explore Kasol Market', 'Chalal village riverside walk', 'Bonfire & icebreaker games', 'Overnight in Kasol']
      },
      {
        day: 3,
        title: 'Tosh Village Excursion',
        description: 'Have breakfast, drive to Barshaini, and trek to the magical Tosh village. Capture beautiful viewpoints, relax at cafes, return to Kasol for games and a music night. Stay in Kasol.',
        activities: ['Breakfast in Kasol', 'Drive to Barshaini', 'Trek to Tosh Village', 'Tosh cafes & viewpoints', 'Music & games night in Kasol']
      },
      {
        day: 4,
        title: 'Manikaran Sahib & DJ Night',
        description: 'Visit the sacred Manikaran Sahib Gurudwara and its natural hot springs. Enjoy langar, shopping, and riverside relaxation. Celebrate with a bonfire, DJ night, and group awards. Stay in Kasol.',
        activities: ['Visit Manikaran Sahib & hot springs', 'Enjoy Langar & shopping', 'Riverside relaxation', 'DJ Night & Farewell Bonfire']
      },
      {
        day: 5,
        title: 'Checkout, Shopping & Return Journey',
        description: 'Have breakfast, check out of the hotel. Spend time shopping for souvenirs in Kasol before starting the overnight return journey towards Delhi and Chandigarh.',
        activities: ['Breakfast & check-out', 'Souvenir shopping in Kasol', 'Overnight return journey']
      },
      {
        day: 6,
        title: 'Drop at Delhi/Chandigarh & Return to Jhansi',
        description: 'Get dropped off at Chandigarh and Delhi. Jhansi participants continue their journey by train back to Jhansi. The trip concludes with lifelong memories.',
        activities: ['Drop-off at Delhi/Chandigarh', 'Train back to Jhansi', 'Trip concludes']
      }
    ],
    difficulty: 'easy',
    tripType: 'Group',
    rating: 4.8,
    reviews: 94,
    exclusions: [
      'Lunch',
      'Personal expenses',
      'Adventure activities',
      'Cafe expenses',
      'Anything not mentioned'
    ],
    thingsToCarry: [
      'Government ID',
      'Warm jacket',
      'Trekking shoes',
      'Power bank',
      'Water bottle',
      'Sunglasses',
      'Medicines',
      'Backpack'
    ],
    rulesAndPolicies: [
      'Only 25 seats.',
      'Age limit 18-30 years.',
      'Seat confirmed only after advance payment.',
      'Itinerary may change due to weather or road conditions.'
    ],
    pricingPackages: [
      { name: 'From Delhi', price: 6500, originalPrice: 8000 },
      { name: 'From Chandigarh', price: 6500, originalPrice: 8000 },
      { name: 'From Jhansi', price: 8000, originalPrice: 9500 }
    ]
  },
  {
    id: '3',
    title: 'Hidden Himachal Escape - Jibhi',
    description: 'Explore the untouched wooden cabins of Jibhi, the scenic Tirthan Valley trout farms, and trek to Serolsar Lake from the altitude of Jalori Pass.',
    destination: 'Jibhi & Tirthan Valley',
    duration: 6,
    price: 10999,
    originalPrice: 11499,
    maxParticipants: 26,
    currentParticipants: 22,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    staticPdf: '/Strangers Trip to Jibhi.pdf',
    startDate: '2026-07-22',
    endDate: '2026-07-28',
    highlights: [
      'Jibhi Waterfall & Mini Thailand Pool',
      'Tirthan Valley & Trout Farms',
      'Jalori Pass & Serolsar Lake Trek',
      'Sunset & Bonfire near Jalori Pass'
    ],
    inclusions: [
      'AC Train (Jhansi–Delhi–Jhansi)',
      'Tempo Traveller from Delhi',
      '3 Nights Stay (Jibhi, Tirthan Valley & Jalori Pass)',
      '3 Breakfasts & 3 Dinners',
      'Sightseeing',
      'Bonfire (Weather Permitting)',
      'Trip Coordinator'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Day 0: Jhansi Departure & Overnight Journey',
        description: 'Report at Jhansi Station (2:00 PM). Taj Express departs at 3:00 PM. Reach Delhi, and depart by Tempo Traveller at 10:30 PM for an overnight journey to Jibhi.',
        activities: ['Report at Jhansi Station (2:00 PM)', 'Taj Express departure (3:00 PM)', 'Arrive in Delhi', 'Tempo Traveller departure (10:30 PM)', 'Overnight journey to Himachal']
      },
      {
        day: 2,
        title: 'Day 1: Arrive Jibhi & Waterfall Visit',
        description: 'Arrive in Jibhi. Visit the scenic Jibhi Waterfall, the famous Mini Thailand pool, and explore the wooden cabin village and riverside. Enjoy an evening bonfire.',
        activities: ['Arrive Jibhi, check-in', 'Visit Jibhi Waterfall', 'Swim at Mini Thailand Pool', 'Explore cafes & riverside', 'Evening bonfire & games']
      },
      {
        day: 3,
        title: 'Day 2: Explore Tirthan Valley',
        description: 'Drive to Tirthan Valley. Visit local trout farms, enjoy riverside cafe stops, and explore the gateway to the Great Himalayan National Park.',
        activities: ['Drive to Tirthan Valley', 'Visit Trout Farm', 'Riverside café stop', 'Explore valley views', 'Stay in Tirthan Valley']
      },
      {
        day: 4,
        title: 'Day 3: Jalori Pass & Serolsar Lake Trek',
        description: 'Drive up to Jalori Pass (3,120m) and trek through dense forests to the pristine Serolsar Lake and visit the ancient Budhi Nagin Temple. Enjoy a beautiful sunset, bonfire, and stay overnight near Jalori Pass.',
        activities: ['Drive to Jalori Pass', 'Trek to Serolsar Lake (5 km)', 'Visit ancient Budhi Nagin Temple', 'Sunset views & bonfire', 'Overnight near Jalori Pass']
      },
      {
        day: 5,
        title: 'Day 4: Breakfast & Return Journey to Delhi',
        description: 'Enjoy breakfast near Jalori Pass, check out, and begin the return journey back to Delhi.',
        activities: ['Breakfast with mountain views', 'Pack bags and check-out', 'Begin return journey to Delhi']
      },
      {
        day: 6,
        title: 'Day 5: Reach Delhi & Board Train to Jhansi',
        description: 'Reach Delhi in the morning and board the Taj Express train back to Jhansi. The trip concludes.',
        activities: ['Arrive in Delhi', 'Board Taj Express', 'Return to Jhansi', 'Trip concludes']
      }
    ],
    difficulty: 'moderate',
    tripType: 'Group',
    rating: 4.9,
    reviews: 112,
    exclusions: [
      'Adventure Activities',
      'Lunch',
      'Personal Expenses',
      'Entry Tickets',
      'Anything not mentioned under inclusions'
    ],
    thingsToCarry: [
      'Government ID',
      'Trekking Shoes',
      'Raincoat',
      'Warm Jacket',
      'Power Bank',
      'Water Bottle',
      'Personal Medicines',
      'Torch'
    ],
    rulesAndPolicies: [
      '₹2000 non-refundable booking amount.',
      'Follow trip timings.',
      'Respect fellow travellers.',
      'No illegal substances.',
      'Sightseeing depends on weather and road conditions.'
    ],
    pricingPackages: [
      { name: 'From Delhi', price: 9999 },
      { name: 'From Jhansi', price: 10999, originalPrice: 11499 }
    ]
  },
  {
    id: '4',
    title: 'Manali',
    description: 'Trek Solang Valley, cross the Atal Tunnel to see snowy Sissu, raft Kullu river, and explore Kasol cafes with a group of solo travelers.',
    destination: 'Manali',
    duration: 5,
    price: 9999,
    originalPrice: 10999,
    maxParticipants: 25,
    currentParticipants: 15,
    image: '/manali.jpg',
    staticPdf: '/Stranger Trip for Manali .pdf',
    startDate: '2026-07-10',
    endDate: '2026-07-15',
    highlights: [
      'Solang Valley & Sissu snow views',
      'Kullu River Rafting',
      'Atal Tunnel crossing',
      'Manikaran Sahib & Kasol cafes'
    ],
    inclusions: [
      'AC Train + Tempo Traveller (depending on final group size)',
      '3 Nights Stay (Manali + Kasol)',
      '3 Breakfast & 4 Dinner',
      'River Rafting',
      'Sightseeing',
      'Trip Coordinator'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Day 0: Jhansi Departure & Overnight Journey',
        description: 'Report at Jhansi Station at 2:00 PM, departure from Jhansi Station at 3:00 PM by train to Delhi. Overnight journey towards Manali.',
        activities: ['Report at 2:00 PM', 'Departure from Jhansi Station (3:00 PM)', 'Overnight journey to Himachal']
      },
      {
        day: 2,
        title: 'Day 1: Arrival in Manali & Local Sightseeing',
        description: 'Arrival in Manali, check in to the hotel. Visit Mall Road and Old Manali for local sightseeing and cafes. Stay overnight in Manali.',
        activities: ['Arrive Manali & check-in', 'Local sightseeing', 'Explore Mall Road & Old Manali', 'Stay in Manali']
      },
      {
        day: 3,
        title: 'Day 2: Solang Valley, Atal Tunnel & Sissu',
        description: 'Drive to Solang Valley for optional adventure activities, then cross the iconic Atal Tunnel to see the snowy landscapes of Sissu and Lahaul Valley. Stay overnight in Manali.',
        activities: ['Drive to Solang Valley', 'Cross Atal Tunnel', 'Explore Sissu & Waterfall', 'Optional adventure activities', 'Stay in Manali']
      },
      {
        day: 4,
        title: 'Day 3: River Rafting in Kullu & Transfer to Kasol',
        description: 'Check out of Manali, experience thrilling river rafting on the Beas River at Kullu, transfer to Kasol, and explore local cafes. Stay overnight in Kasol.',
        activities: ['Checkout from Manali', 'River rafting in Kullu', 'Transfer to Kasol', 'Explore Kasol cafes', 'Stay in Kasol']
      },
      {
        day: 5,
        title: 'Day 4: Manikaran Sahib & Return Journey Starts',
        description: 'Visit the sacred Manikaran Sahib Gurudwara and its natural hot springs. Begin the return journey in the afternoon/evening.',
        activities: ['Visit Manikaran Sahib', 'Hot spring experience', 'Begin return journey']
      },
      {
        day: 6,
        title: 'Day 5: Arrival in Jhansi',
        description: 'Arrive back at Jhansi Station. The tour concludes with wonderful memories.',
        activities: ['Arrive back in Jhansi', 'Trip concludes']
      }
    ],
    difficulty: 'moderate',
    tripType: 'Group',
    rating: 4.7,
    reviews: 156,
    exclusions: [
      'Adventure activities (except rafting)',
      'Personal expenses',
      'Anything not mentioned in inclusions'
    ],
    thingsToCarry: [
      'Valid Government ID',
      'Warm clothes & jackets',
      'Comfortable shoes',
      'Power bank & charger',
      'Personal medicines',
      'Sunglasses & sunscreen'
    ],
    safetyGuidelines: [
      'Trip coordinator available throughout journey',
      'Separate rooms for boys and girls',
      'Verified hotels and transport',
      'Emergency contact support',
      'Follow rafting safety instructions strictly'
    ],
    rulesAndPolicies: [
      '₹2000 non-refundable booking amount required to confirm seat',
      'If trip is postponed due to insufficient participants, token amount will be adjusted in next batch',
      'We aim for a balanced group (15 boys & 15 girls), but this is not guaranteed',
      'Respect all co-travelers',
      'No illegal substances allowed',
      'Follow timings strictly',
      'Any damage to property will be chargeable',
      'Organizer holds rights to remove any misbehaving participant',
      'Sightseeing points are subject to weather and road conditions'
    ],
    pricingPackages: [
      { name: 'Stag Package (From Jhansi)', price: 9999 },
      { name: 'Couple Package', price: 22999 },
      { name: 'Family Package (2+1)', price: 24999, originalPrice: 29999 }
    ]
  },
  {
    id: '5',
    title: 'Udaipur',
    description: 'Immerse yourself in the royal grandeur of Rajasthan. Explore the romantic lakes of Udaipur, escape to the only hill station of Mount Abu, step into the blue city of Jodhpur, and admire the pink sandstone palaces of Jaipur.',
    destination: 'Udaipur',
    duration: 7,
    price: 11999,
    originalPrice: 13999,
    maxParticipants: 25,
    currentParticipants: 12,
    image: 'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=800&q=80',
    startDate: '2026-08-05',
    endDate: '2026-08-11',
    highlights: [
      'Romantic Boat Ride & Lake City Udaipur',
      'Scenic Nakki Lake & Historical Dilwara Temples in Mount Abu',
      'Mighty Mehrangarh Fort & Clock Tower Market in Jodhpur',
      'Amber Fort, Jal Mahal & iconic Hawa Mahal in Jaipur'
    ],
    inclusions: [
      '26-Seater Tempo Traveller throughout the trip',
      '5 Night Stays (Udaipur 1N + Mount Abu 1N + Jodhpur 1N + Jaipur 2N)',
      '5 Breakfasts & 5 Dinners',
      'Accommodation on Triple Sharing Basis',
      'Complete Sightseeing as per itinerary',
      'Toll Tax, Parking & State Taxes',
      'Experienced Trip Coordinator',
      'Group Games & Ice Breakers',
      'Basic First Aid Support'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Day 0: Departure from Jhansi & Overnight Journey',
        description: 'Assemble the group at the reporting point in Jhansi by 8:00 PM. Have a short trip briefing followed by departure at 9:00 PM. Travel overnight towards Udaipur.',
        activities: ['Report at Jhansi (8:00 PM)', 'Trip briefing & coordinator introduction', 'Overnight Tempo Traveller journey to Udaipur']
      },
      {
        day: 2,
        title: 'Day 1: Arrive in Udaipur & Lake Sightseeing',
        description: 'Arrive in Udaipur and check in to the hotel. Visit the gorgeous Fateh Sagar Lake, the historic Saheliyon Ki Bari, and enjoy sunset views at the Karni Mata Ropeway. Overnight stay in Udaipur.',
        activities: ['Hotel check-in & freshen up', 'Visit Fateh Sagar Lake', 'Explore Saheliyon Ki Bari gardens', 'Karni Mata Ropeway sunset views', 'Overnight stay in Udaipur']
      },
      {
        day: 3,
        title: 'Day 2: Udaipur Palace & Travel to Mount Abu',
        description: 'After breakfast, explore the grand City Palace of Udaipur and the beautiful Jagdish Temple. Later, drive to Mount Abu, the scenic hill station. Check in, explore Nakki Lake and the local market in the evening. Overnight stay in Mount Abu.',
        activities: ['Explore Udaipur City Palace', 'Visit Jagdish Temple', 'Scenic drive to Mount Abu', 'Boat ride at Nakki Lake', 'Local market shopping', 'Overnight in Mount Abu']
      },
      {
        day: 4,
        title: 'Day 3: Guru Shikhar, Dilwara Temples & Travel to Jodhpur',
        description: 'Visit Guru Shikhar (the highest peak in the Aravallis) and the famous Dilwara Temples. Depart for Jodhpur, the Blue City. Spend your evening exploring the Clock Tower Market. Overnight stay in Jodhpur.',
        activities: ['Guru Shikhar panoramic views', 'Explore intricately carved Dilwara Temples', 'Scenic drive to Jodhpur', 'Evening shopping at Clock Tower Market', 'Overnight stay in Jodhpur']
      },
      {
        day: 5,
        title: 'Day 4: Mehrangarh Fort, Jaswant Thada & Travel to Jaipur',
        description: 'Explore the majestic Mehrangarh Fort and the serene Jaswant Thada cenotaph. Afterwards, depart for the Pink City, Jaipur. Check in to the hotel and rest. Overnight stay in Jaipur.',
        activities: ['Visit Mehrangarh Fort', 'Explore Jaswant Thada', 'Scenic drive to Jaipur', 'Hotel check-in and leisure time', 'Overnight stay in Jaipur']
      },
      {
        day: 6,
        title: 'Day 5: Jaipur Royal Heritage Sightseeing',
        description: 'Embark on a full-day sightseeing tour of Jaipur. Explore Amber Fort, make a photo stop at the beautiful Jal Mahal, visit the iconic Hawa Mahal, explore the City Palace, and shop at Bapu Bazaar. Overnight stay in Jaipur.',
        activities: ['Explore Amber Fort', 'Photo stop at Jal Mahal', 'Visit Hawa Mahal', 'Tour Jaipur City Palace', 'Souvenir shopping at Bapu Bazaar', 'Overnight stay in Jaipur']
      },
      {
        day: 7,
        title: 'Day 6: Breakfast, Check-out & Return Journey',
        description: 'Have breakfast, check out of the hotel, and begin the return journey back to Jhansi, bringing an end to this royal adventure with your tribe.',
        activities: ['Group breakfast & check-out', 'Board Tempo Traveller for return journey', 'Arrive back in Jhansi & bid farewell']
      }
    ],
    difficulty: 'easy',
    tripType: 'Group',
    rating: 5.0,
    reviews: 0,
    exclusions: [
      'Lunch',
      'Entry tickets to monuments & palaces',
      'Adventure activities, boating & ropeway charges',
      'Personal expenses & shopping',
      'Travel insurance',
      'Anything not mentioned under inclusions'
    ],
    thingsToCarry: [
      'Original Government ID',
      'Comfortable cotton & light woolen clothing',
      'Comfortable walking/running shoes',
      'Sunscreen, sunglasses, cap & umbrella',
      'Power bank & chargers',
      'Personal toiletries & medications',
      'Reusable water bottle'
    ],
    rulesAndPolicies: [
      'Advance payment is mandatory to confirm your booking.',
      'Booking amount is non-refundable.',
      'The itinerary is subject to change due to weather or operational reasons.',
      'Follow the coordinator instructions at all times.',
      'Consumption of illegal substances is strictly prohibited.',
      'Damage to hotel or vehicle property will be charged to the client.',
      'Organizer is not responsible for loss of personal belongings.'
    ],
    pricingPackages: [
      { name: 'Triple Sharing Package (From Jhansi)', price: 11999, originalPrice: 13999 },
      { name: 'Double Sharing Package (From Jhansi)', price: 13999, originalPrice: 15999 }
    ]
  }
];

export const mockBookings: Booking[] = [
  {
    id: 'b1',
    tourId: '1',
    userId: 'u1',
    participants: 2,
    totalPrice: 11998,
    bookingDate: '2026-07-01',
    status: 'confirmed',
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    customerPhone: '+1-555-0101',
  },
];

export const mockUsers: User[] = [
  {
    id: 'u1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1-555-0101',
    bookings: ['b1'],
  },
];

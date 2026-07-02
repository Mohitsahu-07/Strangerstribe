import { Tour, Booking, User } from './types';

export const mockTours: Tour[] = [
  {
    id: 'chopta-tungnath',
    title: 'Chopta & Tungnath Trekking Expedition',
    description: 'Embark on a soul-stirring journey through the "Mini Switzerland of India". Trek to the highest Shiva temple in the world at Tungnath, catch spectacular panoramic mountain views at Chandrashila Peak, explore the pristine Deoria Tal lake, and relax by the holy Ganges in Rishikesh.',
    destination: 'Uttarakhand, India',
    duration: 5,
    price: 5999,
    maxParticipants: 25,
    currentParticipants: 18,
    image: 'https://images.unsplash.com/photo-1626896756244-3d57d3badc9f?w=800&auto=format&fit=crop&q=80',
    startDate: '2026-07-15',
    endDate: '2026-07-20',
    highlights: ['Tungnath (Highest Shiva Temple)', 'Chandrashila Peak 360° Views', 'Deoria Tal Lake Reflection Trek', 'Rishikesh Ganga Aarti & Cafes', 'Bonfire & Music Night'],
    inclusions: [
      'Train Journey (Jhansi–Delhi–Jhansi) – Jhansi Package Only',
      '26-Seater Tempo Traveller for local transfers',
      '1 Night Stay in Chopta',
      '1 Night Stay in Rishikesh',
      '2 Breakfasts & 2 Dinners',
      'Bonfire & Music Night (Weather Permitting)',
      'Trip Captain & Support Staff',
      'Fun Group Activities & Games',
      'First Aid Support',
      'Sightseeing as per Itinerary'
    ],
    difficulty: 'moderate',
    rating: 4.9,
    reviews: 142,
    route: 'Jhansi → Delhi → Haridwar → Rishikesh → Sari Village → Deoria Tal → Chopta → Tungnath → Chandrashila → Rishikesh → Delhi → Jhansi',
    pricingOptions: [
      { label: 'Delhi Package (Delhi to Delhi)', price: 5999 },
      { label: 'Jhansi Package (Jhansi to Jhansi with Train)', price: 7999 }
    ],
    ageGroup: '18–30 Years',
    groupSize: '20–25 Travelers',
    tagline: 'Come Solo. Leave with a Tribe.',
    itinerary: [
      { day: 1, title: 'Jhansi to Delhi & Overnight Journey', description: 'Jhansi to Delhi by train. Assemble the group in Delhi, dinner break (self-sponsored), and board the overnight Tempo Traveller journey to Chopta.' },
      { day: 2, title: 'Arrive in Chopta & Trek to Deoria Tal', description: 'Reach Chopta, hotel check-in. Visit the pristine Deoria Tal lake (subject to weather/time), hike back to Chopta, followed by a bonfire, music, dinner, and an overnight stay.' },
      { day: 3, title: 'Tungnath & Chandrashila Peak Trek', description: 'Early morning trek to Tungnath (highest Shiva temple) and Chandrashila Peak for stunning 360-degree Himalayan views. Enjoy breakfast, checkout, and drive to Rishikesh. Hotel check-in and overnight stay.' },
      { day: 4, title: 'Explore Rishikesh & Evening Departure', description: 'Explore Rishikesh, try optional river rafting or bungee jumping (self-paid), attend the divine Ganga Aarti by the river banks, and depart back to Delhi in the evening.' },
      { day: 5, title: 'Reach Delhi & Train Return', description: 'Reach Delhi early morning and board the train back to Jhansi. Trip concludes with sweet memories of the tribe.' }
    ],
    exclusions: [
      'Lunch on all days',
      'River Rafting, Bungee jumping & other adventure activities in Rishikesh',
      'Entry fees (if applicable)',
      'Personal expenses',
      'Anything not mentioned in Inclusions'
    ],
    thingsToCarry: [
      'Valid Government ID',
      'Trekking shoes (good grip)',
      'Warm clothes & jackets',
      'Raincoat / Poncho',
      'Power bank & chargers',
      'Reusable water bottle',
      'Personal medicines',
      'Backpack'
    ],
    bookingDetails: [
      'Advance booking amount is mandatory to confirm your seat.',
      'Seats are allotted on a first-come, first-served basis.',
      'Share your ID proof after booking confirmation.',
      'Full payment must be completed before the departure date.'
    ],
    safetyGuidelines: [
      'Follow the instructions of the Trip Captain at all times.',
      'Consumption of illegal drugs or prohibited substances is strictly forbidden.',
      'Alcohol is not permitted during trekking activities.',
      'Respect local culture, fellow travelers, and nature.',
      'Do not litter; help keep the destinations clean.',
      'Carry your personal medicines and valid government ID.',
      'Wear proper trekking shoes and warm/rain clothing.',
      'Any damage caused to hotel or vehicle property will be chargeable.'
    ],
    termsAndConditions: [
      'The itinerary may change due to weather, road, traffic, or government restrictions.',
      'Adventure activities are optional and at your own risk.',
      'No refund for unused services during the trip.',
      'Cancellation and refund policy will apply as per Strangers Tribe guidelines.',
      'Strangers Tribe is not responsible for loss of personal belongings.',
      'Participants are expected to maintain discipline throughout the trip.'
    ]
  },
  {
    id: 'kasol-tosh',
    title: 'Kasol & Tosh Backpacking Expedition',
    description: 'Escape to the scenic Parvati Valley. Unwind by the bubbling Parvati River in Kasol, walk the forest trails of Chalal, trek to the fairy-tale mountain village of Tosh, experience local cafe culture, and sleep under a star-filled Himalayan sky.',
    destination: 'Himachal Pradesh, India',
    duration: 6,
    price: 6500,
    maxParticipants: 25,
    currentParticipants: 14,
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&auto=format&fit=crop&q=80',
    startDate: '2026-07-22',
    endDate: '2026-07-28',
    highlights: ['Riverside Camping in Kasol', 'Tosh Mountain Village Trek', 'Chalal Pine Forest Walk', 'Manikaran Sahib Hot Springs', 'DJ Night, Bonfire & Awards'],
    inclusions: [
      'Travel via luxury Volvo / Tempo Traveller (Delhi/Chandigarh-Kasol-Delhi/Chandigarh)',
      'Train travel assistance for Jhansi participants',
      '3 Nights Stay in Kasol / Tosh (cozy guest houses/camps)',
      '3 Breakfasts & 3 Dinners',
      'Tosh Excursion & Trek guide',
      'Chalal Village walk',
      'Manikaran Gurudwara & Hot Springs visit',
      'Bonfire & DJ Night',
      'Experienced Trip Captain',
      'Fun Icebreaker Games and First Aid Support'
    ],
    difficulty: 'easy',
    rating: 4.8,
    reviews: 95,
    route: 'Jhansi → Delhi → Chandigarh → Kasol → Chalal → Barshaini → Tosh → Manikaran → Delhi → Jhansi',
    pricingOptions: [
      { label: 'Delhi Package (Delhi to Delhi)', price: 6500 },
      { label: 'Chandigarh Package (Chandigarh to Chandigarh)', price: 6500 },
      { label: 'Jhansi Package (Jhansi to Jhansi with Train)', price: 8000 }
    ],
    ageGroup: '18–30 Years',
    groupSize: 'Only 25 Travellers',
    tagline: 'Come Solo. Leave with a Tribe.',
    itinerary: [
      { day: 1, title: 'Departure & Journey to Parvati Valley', description: 'Departure from Jhansi by train to Delhi. Delhi and Chandigarh participants join the group. Overnight Volvo/Tempo Traveller journey to Kasol.' },
      { day: 2, title: 'Arrive in Kasol & Explore Chalal', description: 'Arrive in Kasol, check-in, and have breakfast. Explore the local Kasol Market, go for a peaceful riverside walk, indulge in cafe hopping, take the Chalal village trail walk, and enjoy a warm bonfire with icebreaker games in the evening. Stay in Kasol.' },
      { day: 3, title: 'Tosh Village Trek & Music Night', description: 'Enjoy breakfast, drive to Barshaini, and begin the trek to Tosh Village. Capture panoramic valley views, hang out in cozy mountain cafes, and trek back to Kasol for games and a lively music night. Stay in Kasol.' },
      { day: 4, title: 'Manikaran Sahib, Hot Springs & DJ Night', description: 'Visit the sacred Manikaran Sahib Gurudwara, relax in the natural sulfur hot springs, eat delicious langar, do some local shopping, and return to camp for a DJ night, bonfire, and special group awards. Stay in Kasol.' },
      { day: 5, title: 'Shopping, Cafe Hopping & Departure', description: 'Enjoy breakfast, checkout, and spend the day shopping or cafe hopping. In the evening, board the overnight return journey towards Delhi and Chandigarh.' },
      { day: 6, title: 'Reach Delhi/Jhansi & Conclude', description: 'Drop off at Chandigarh and Delhi. Jhansi participants continue their journey by train back to Jhansi. Trip ends.' }
    ],
    exclusions: [
      'Lunch on all days',
      'Personal expenses & shopping',
      'Adventure activities not listed',
      'Cafe expenses (food and drinks ordered outside package)',
      'Anything not mentioned in Inclusions'
    ],
    thingsToCarry: [
      'Government ID',
      'Warm jacket / sweater',
      'Comfortable trekking shoes',
      'Power bank & charger',
      'Reusable water bottle',
      'Sunglasses & sunscreen',
      'Personal medicines',
      'Backpack'
    ],
    bookingDetails: [
      'Only 25 seats available.',
      'Seat confirmation is strictly upon advance payment.',
      'Itinerary is subject to change due to weather or road conditions.'
    ]
  },
  {
    id: 'manali-kasol',
    title: 'Manali + Kasol Stranger Trip',
    description: 'Join the ultimate Himachal backpacking tour. Experience the thrill of Solang Valley, cross the engineering marvel of Atal Tunnel to Sissu, white water raft in Kullu, and dive deep into the bohemian lifestyle of Kasol and Manikaran.',
    destination: 'Himachal Pradesh, India',
    duration: 6,
    price: 9999,
    maxParticipants: 25,
    currentParticipants: 10,
    image: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?w=800&auto=format&fit=crop&q=80',
    startDate: '2026-07-10',
    endDate: '2026-07-16',
    highlights: ['Manali Old Town Sightseeing', 'Atal Tunnel & Sissu Adventure', 'Solang Valley Paragliding', 'White Water Rafting in Kullu', 'Kasol & Manikaran Explorations'],
    inclusions: [
      'AC Train + Tempo Traveller (depending on final group size)',
      '3 Nights Stay in verified hotels/camps (Manali + Kasol)',
      '3 Breakfasts & 4 Dinners',
      'River Rafting in Kullu (Included!)',
      'Sightseeing as per itinerary',
      'Fun-loving Trip Coordinator'
    ],
    difficulty: 'moderate',
    rating: 4.7,
    reviews: 68,
    route: 'Jhansi → Manali → Solang → Sissu → Kullu → Kasol → Manikaran → Jhansi',
    pricingOptions: [
      { label: 'Early Bird (Till 7 July)', price: 9999 },
      { label: 'Last Phase (7 July - 8 July)', price: 10999 },
      { label: 'Couple Package', price: 11500 },
      { label: 'Family Package (2+1)', price: 12500 }
    ],
    ageGroup: '18–30 Years',
    groupSize: '25 People/Strangers',
    tagline: 'Come Solo. Leave with a Tribe.',
    itinerary: [
      { day: 0, title: 'Assemble & Departure from Jhansi', description: 'Reporting at 2:00 PM at Jhansi Station. Taj Express departs at 3:00 PM. Board overnight Volvo / Tempo Traveller from Delhi to Manali.' },
      { day: 1, title: 'Arrive in Manali & Old Manali Exploration', description: 'Arrive in Manali, check-in. Go for local sightseeing including Mall Road and Old Manali. Stay in Manali.' },
      { day: 2, title: 'Solang Valley, Atal Tunnel & Sissu', description: 'Visit Solang Valley for paragliding/adventure sports. Drive through the historic Atal Tunnel to Sissu. Back to Manali for bonfire, dinner, and stay.' },
      { day: 3, title: 'River Rafting in Kullu & Kasol Transfer', description: 'Head to Kullu for exciting river rafting in the Beas river. Transfer to Kasol in the evening and explore cafes. Stay in Kasol.' },
      { day: 4, title: 'Manikaran Sahib Gurudwara & Return Journey', description: 'Visit Manikaran Sahib Gurudwara, relax in the hot springs. Begin return journey to Delhi/Jhansi in the evening.' },
      { day: 5, title: 'Arrival in Jhansi & Trip Concludes', description: 'Reach Delhi/Chandigarh and board the train back to Jhansi. Arrive in Jhansi with a heart full of memories.' }
    ],
    exclusions: [
      'Adventure activities in Solang Valley (paragliding, quad biking, etc.)',
      'Personal expenses & shopping',
      'Lunch on all days',
      'Anything not listed under Inclusions'
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
      'Trip coordinator available throughout the journey',
      'Separate rooms for boys and girls',
      'Verified hotels and transport',
      'Emergency contact support available 24/7',
      'Follow rafting safety instructions strictly'
    ],
    rulesAndPolicies: [
      '₹2000 non-refundable booking amount required to confirm seat.',
      'If trip is postponed due to insufficient participants, token amount will be adjusted in next batch.',
      'We aim for a balanced group (15 boys & 15 girls), but this is not guaranteed.',
      'Respect all co-travelers and maintain discipline.',
      'No illegal substances allowed.',
      'Follow timings strictly.',
      'Any damage to property will be chargeable.',
      'Organizer holds rights to remove any misbehaving participant.',
      'Sightseeing points are subject to weather and road conditions.'
    ]
  },
  {
    id: 'hidden-himachal',
    title: 'Hidden Himachal Escape (Jibhi & Tirthan Valley)',
    description: 'Discover the untouched beauty of Banjar Valley. Walk to the mesmerizing Jibhi Waterfall, explore the hidden pool of Mini Thailand, walk along the crystal-clear Tirthan River, trek to Jalori Pass, and camp near Serolsar Lake.',
    destination: 'Himachal Pradesh, India',
    duration: 6,
    price: 10499,
    maxParticipants: 26,
    currentParticipants: 16,
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&auto=format&fit=crop&q=80',
    startDate: '2026-07-28',
    endDate: '2026-08-02',
    highlights: ['Jibhi Waterfall & Mini Thailand', 'Tirthan Valley River Walk & Trout Farm', 'Jalori Pass Mountain Pass Trek', 'Serolsar Lake Sunset Hike', 'Cozy Pine Forest Stay'],
    inclusions: [
      'AC Train (Jhansi–Delhi–Jhansi)',
      'Comfortable Tempo Traveller from Delhi for local travel',
      '3 Nights Stay in cozy wooden cottages/camps (Jibhi, Tirthan Valley, Jalori Pass)',
      '3 Breakfasts & 3 Dinners',
      'Guided trek to Jalori Pass and Serolsar Lake',
      'Bonfire Night (Weather Permitting)',
      'Trip Coordinator'
    ],
    difficulty: 'moderate',
    rating: 4.9,
    reviews: 54,
    route: 'Jhansi → Delhi → Jibhi → Tirthan Valley → Jalori Pass → Delhi → Jhansi',
    pricingOptions: [
      { label: 'Early Bird Package', price: 10499 },
      { label: 'Regular Package', price: 10999 },
      { label: 'Last Phase Package', price: 11499 }
    ],
    ageGroup: '18–30 Years',
    groupSize: '25–26 Travelers',
    tagline: 'Come Solo. Leave with a Tribe.',
    itinerary: [
      { day: 0, title: 'Jhansi to Delhi & Overnight Transfer', description: 'Report at Jhansi Station at 2:00 PM. Taj Express departs at 3:00 PM. Reach Delhi and board the Tempo Traveller at 10:30 PM for an overnight journey to Jibhi.' },
      { day: 1, title: 'Jibhi Waterfall & Mini Thailand', description: 'Arrive in Jibhi. Check in at your cottage. Visit Jibhi Waterfall and the picturesque rocky pool of Mini Thailand. Chill by the riverside, enjoy a warm bonfire, and stay overnight in Jibhi.' },
      { day: 2, title: 'Tirthan Valley & Riverside Cafes', description: 'Explore Tirthan Valley. Walk by the river, visit a local trout farm, hike through forest trails, and relax in cozy riverside cafes. Stay in Tirthan Valley.' },
      { day: 3, title: 'Jalori Pass & Serolsar Lake Trek', description: 'Drive to Jalori Pass. Go on an optional trek to Serolsar Lake. Watch a beautiful sunset, followed by a bonfire and overnight stay near Jalori Pass.' },
      { day: 4, title: 'Breakfast & Return Journey', description: 'Enjoy breakfast, checkout, and begin the return journey to Delhi.' },
      { day: 5, title: 'Delhi to Jhansi & Conclude', description: 'Reach Delhi early morning and board the Taj Express for Jhansi. Trip concludes.' }
    ],
    exclusions: [
      'Adventure Activities',
      'Lunch on all days',
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
    ]
  }
];

export const mockBookings: Booking[] = [
  {
    id: 'b1',
    tourId: 'chopta-tungnath',
    userId: 'u1',
    participants: 2,
    totalPrice: 11998,
    bookingDate: '2026-07-01',
    status: 'confirmed',
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    customerPhone: '+91-8953680695',
    packageName: 'Delhi Package (Delhi to Delhi)'
  }
];

export const mockUsers: User[] = [
  {
    id: 'u1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91-8953680695',
    bookings: ['b1']
  }
];

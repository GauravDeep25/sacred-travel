/**
 * Group Tours Configuration & Itineraries Database
 * Source: Yugatirtha Scheduled Group Departures
 */

export const groupToursSiteConfig = {
  hero: [
    {
      img: "/assets/spiritual-north.jpg",
      eyebrow: "Fixed Departures · Shared Devotion",
      h1: "Group",
      h1Italic: "Trips",
      sub: "Curated small-group pilgrimages and scheduled departures with dedicated trip captains, pre-arranged VIP temple darshans, AC transportation, and like-minded fellow travellers."
    },
    {
      img: "/assets/hero-aarti.jpg",
      eyebrow: "Sacred Crossings · Guided Yatras",
      h1: "Journey",
      h1Italic: "Together",
      sub: "Experience revered Jyotirlingas, ancient Himalayan ashrams, and sacred river ghats in comfortable group departures from Mumbai, Pune, and Delhi."
    }
  ],

  categories: [
    {
      bannerTitle: "Departures from Mumbai & Pune",
      bannerDesc: "Scheduled group departures covering Maharashtra, Gujarat, and Madhya Pradesh Jyotirlingas with dedicated trip captains, AC transport, and pre-arranged darshans.",
      label: "Mumbai & Pune Departures",
      img: "/assets/Maharashtra.jpg",
      cards: [
        {
          cardTitle: "Maharashtra 3 Jyotirlinga Yatra",
          cardDesc: "Bhimashankar, Grishneshwar, Trimbakeshwar Jyotirlingas, Ellora Caves with Kailasa Temple, and Bhadrakali Maruti Temple.",
          label: "Maharashtra Jyotirlinga",
          itineraryId: "maharashtra-3-jyotirlinga",
          img: "/assets/Maharashtra.jpg",
          duration: "3 Days / 2 Nights",
          price: "Group Departure · Mumbai & Pune",
          departure: "Mumbai & Pune"
        },
        {
          cardTitle: "Gujarat Jyotirlinga Yatra",
          cardDesc: "Dwarkadhish Temple, Nageshwar Jyotirlinga, Bet Dwarka, Rukmini Devi Temple, Somnath Jyotirlinga, Bhalka Tirth, and Triveni Sangam via Volvo sleeper.",
          label: "Gujarat Jyotirlinga",
          itineraryId: "gujarat-jyotirlinga",
          img: "/assets/Gujrat.jpg",
          duration: "3 Days / 2 Nights",
          price: "Group Departure · Mumbai & Pune",
          departure: "Mumbai & Pune"
        },
        {
          cardTitle: "Ujjain & Omkareshwar Jyotirlinga Yatra",
          cardDesc: "Mahakaleshwar VIP Darshan, Omkareshwar & Mamleshwar Jyotirlingas, Sandipani Ashram, Shipra River Ram Ghat Aarti, and the illuminated Mahakal Lok Corridor.",
          label: "Ujjain & Omkareshwar",
          itineraryId: "ujjain-omkareshwar-yatra",
          img: "/assets/hero-aarti.jpg",
          duration: "3 Days / 2 Nights",
          price: "Group Departure · Mumbai",
          departure: "Mumbai"
        }
      ]
    },
    {
      bannerTitle: "Departures from Delhi",
      bannerDesc: "Himalayan spiritual retreats and scenic hill getaways departing directly from Akshardham Metro Station, Delhi.",
      label: "Delhi Departures",
      img: "/assets/Kainchi-Dham.jpg",
      cards: [
        {
          cardTitle: "Nainital • Kainchi Dham • Bhimtal Getaway",
          cardDesc: "Seek blessings at Neem Karoli Baba's Kainchi Dham Ashram, visit Golu Devta Temple, enjoy boating at Naini Lake, Naina Devi Temple, and Mall Road.",
          label: "Kainchi Dham & Nainital",
          itineraryId: "nainital-kainchi-bhimtal",
          img: "/assets/Kainchi-Dham.jpg",
          duration: "3 Nights / 2 Days Sightseeing",
          price: "Group Departure · Delhi",
          departure: "Delhi (Akshardham Metro)"
        }
      ]
    }
  ],

  itineraries: {
    "maharashtra-3-jyotirlinga": [
      {
        id: "maharashtra-3jyotirlinga-group",
        title: "Maharashtra 3 Jyotirlinga Yatra",
        duration: "3 Days / 2 Nights | Group Departure from Mumbai & Pune",
        destinationsCovered: "Bhimashankar • Grishneshwar • Trimbakeshwar • Ellora Caves",
        inclusions: [
          "One night's accommodation in Grishneshwar (200-250m from temple).",
          "AC transportation on a round-trip basis from Mumbai to Mumbai or Pune to Pune.",
          "Two breakfasts & Two lunches Unlimited all veg.",
          "VIP darshan at Trimbakeshwar Jyotirlinga Temple, subject to availability.",
          "Expert tour guide for Ellora Caves with Entry fees included.",
          "Tour coordination and assistance throughout the journey.",
          "Toll / Parking / Trip Captain / Driver charges.",
          "One surprise gift from Yugatirtha for every participant.",
          "All permits included."
        ],
        exclusions: [
          "Dinner during the tour.",
          "VIP darshan or special darshan passes at Bhimashankar and Grishneshwar.",
          "Personal expenses, shopping, souvenirs and prasad.",
          "Additional meals, snacks and beverages beyond those mentioned in the inclusions.",
          "Any additional activities or entry charges not specifically mentioned under inclusions.",
          "Expenses arising from unforeseen delays, route changes or circumstances beyond the tour operator's control.",
          "Anything not specifically mentioned under inclusions."
        ],
        notes: [
          "Friday evening departure from Mumbai and Pune in AC vehicles.",
          "Both groups assemble at a common meeting point near Bhimashankar for the yatra.",
          "VIP darshan at Trimbakeshwar is subject to availability and temple regulations.",
          "Return journey features separate vehicles returning directly to Mumbai and Pune."
        ],
        days: [
          {
            title: "Day 1 – Friday: Departure from Mumbai & Pune",
            activities: [
              "Evening departure from Mumbai and Pune in AC vehicles.",
              "Overnight journey towards Bhimashankar.",
              "Both groups will assemble at a common meeting point near Bhimashankar for the yatra."
            ]
          },
          {
            title: "Day 2 – Saturday: Bhimashankar Darshan & Grishneshwar",
            activities: [
              "Early morning darshan at Bhimashankar Jyotirlinga Temple.",
              "Proceed towards Grishneshwar after darshan.",
              "Breakfast en route.",
              "Arrival at Grishneshwar and lunch.",
              "Check-in at the hotel, located approximately 200–250 metres from Grishneshwar Temple.",
              "Freshen up and visit Grishneshwar Jyotirlinga for darshan.",
              "Explore the local market for souvenirs, prasad, fridge magnets and other local items.",
              "Evening visit to Bhadrakali Maruti Temple.",
              "Return to the hotel for an overnight stay in Grishneshwar."
            ]
          },
          {
            title: "Day 3 – Sunday: Ellora Caves, Trimbakeshwar & Return",
            activities: [
              "Early morning visit to Ellora Caves with an expert guide.",
              "Explore the magnificent rock-cut architecture and the iconic Kailasa Temple.",
              "Return to the hotel for breakfast.",
              "Check out from the hotel and proceed towards Nashik.",
              "Lunch in Nashik.",
              "Continue towards Trimbak village to visit Trimbakeshwar Jyotirlinga Temple.",
              "VIP darshan at Trimbakeshwar, subject to availability and temple regulations.",
              "Begin the return journey, with separate vehicles for Mumbai and Pune.",
              "Dinner stop en route.",
              "Arrival in Mumbai and Pune in the early hours of Monday."
            ]
          }
        ]
      }
    ],

    "nainital-kainchi-bhimtal": [
      {
        id: "nainital-kainchi-bhimtal-group",
        title: "Nainital • Kainchi Dham • Bhimtal Getaway",
        duration: "3 Nights / 2 Days Sightseeing | Delhi to Delhi",
        destinationsCovered: "Delhi • Bhimtal • Kainchi Dham Ashram • Golu Devta • Nainital • Naini Lake",
        inclusions: [
          "Delhi-to-Delhi transportation by Tempo Traveller or bus, depending on group size.",
          "Local union Sumo transportation for Nainital sightseeing, as per applicable route and arrangements.",
          "One night's hotel accommodation in Bhimtal on triple/quad sharing basis, with one double bed and an additional mattress.",
          "One breakfast at the hotel.",
          "One dinner at the hotel.",
          "Kainchi Dham visit and darshan.",
          "Trip Captain throughout the trip.",
          "Basic first-aid support."
        ],
        exclusions: [
          "Meals not specifically mentioned under inclusions.",
          "Dinner during the overnight journey to Uttarakhand and return journey to Delhi.",
          "Boating charges at Naini Lake.",
          "Personal expenses, shopping, café hopping and snacks.",
          "Entry tickets, parking charges or additional local transportation not specifically mentioned under inclusions.",
          "Any additional sightseeing or activities not included in the itinerary.",
          "Expenses arising from delays, weather conditions, road closures or other unforeseen circumstances.",
          "Anything not specifically mentioned under inclusions."
        ],
        notes: [
          "Departure point: Akshardham Metro Station, Delhi.",
          "The itinerary is subject to road conditions, weather and local transport regulations.",
          "Local union cabs may be required for certain sightseeing areas in Nainital.",
          "Darshan at temples is subject to local temple rules and crowd conditions.",
          "Hotel accommodation is included for one night only; the remaining nights involve overnight travel.",
          "Arrival and departure schedules may vary depending on traffic and road conditions."
        ],
        days: [
          {
            title: "Day 1: Departure from Delhi (Akshardham Metro)",
            activities: [
              "Meet the group and Trip Captain at the designated meeting point at Akshardham Metro Station.",
              "Begin the journey towards Nainital by Tempo Traveller or bus, depending on group size.",
              "Enjoy an overnight journey towards Uttarakhand.",
              "Dinner halt en route at your own expense."
            ]
          },
          {
            title: "Day 2: Bhimtal • Kainchi Dham • Golu Devta",
            activities: [
              "Arrive in Bhimtal and check in to the hotel.",
              "Freshen up and get ready for sightseeing.",
              "Visit Kainchi Dham Ashram and seek blessings of Neem Karoli Baba.",
              "Proceed to Golu Devta Temple for darshan.",
              "Explore the scenic surroundings of Bhimtal.",
              "Return to the hotel and enjoy group activities.",
              "Dinner at the hotel.",
              "Overnight stay in Bhimtal."
            ]
          },
          {
            title: "Day 3: Nainital Sightseeing & Return Journey to Delhi",
            activities: [
              "Enjoy breakfast at the hotel.",
              "Proceed towards Nainital for local sightseeing.",
              "Transfer to local union cabs near Nainital, as Tempo Travellers may have restrictions on entering certain areas.",
              "Enjoy boating at Naini Lake (at your own expense).",
              "Visit Naina Devi Temple and seek blessings.",
              "Explore Mall Road and enjoy café hopping and shopping at your leisure.",
              "Return to the designated parking area by local cabs.",
              "Board the Tempo Traveller or bus and begin the overnight journey towards Delhi.",
              "Dinner halt en route, if required, at your own expense."
            ]
          },
          {
            title: "Day 4: Arrival in Delhi",
            activities: [
              "Arrive at Akshardham Metro Station, Delhi in the morning.",
              "Tour concludes with beautiful memories and new friendships."
            ]
          }
        ]
      }
    ],

    "gujarat-jyotirlinga": [
      {
        id: "gujarat-jyotirlinga-group",
        title: "Gujarat Jyotirlinga Yatra",
        duration: "3 Days / 2 Nights Journey | Mumbai & Pune Departure",
        destinationsCovered: "Dwarka • Nageshwar Jyotirlinga • Bet Dwarka • Somnath Jyotirlinga",
        inclusions: [
          "Transportation as per the package itinerary.",
          "Volvo sleeper bus tickets for the Mumbai/Pune–Rajkot sector and return, arranged through a third-party provider.",
          "One night of AC hotel accommodation in Dwarka on triple/quad sharing basis, with an extra mattress for additional occupants.",
          "Two lunches and one breakfast, as per the meal plan.",
          "Toll charges and parking charges.",
          "Trip Captain for tour coordination.",
          "Driver charges.",
          "All applicable vehicle permits."
        ],
        exclusions: [
          "Dinner and meals not specifically mentioned under inclusions.",
          "Personal expenses, shopping, snacks and beverages.",
          "Ferry tickets and other charges for visiting Bet Dwarka, unless specifically included in the package.",
          "Entry fees, special darshan charges, donations and religious offerings, unless specified.",
          "Any additional local transportation not mentioned in the inclusions.",
          "Connecting cab charges from Mumbai to Pune, unless confirmed as included in the package.",
          "Expenses arising from delays, traffic, weather conditions, ferry cancellations or other unforeseen circumstances.",
          "Anything not specifically mentioned under inclusions."
        ],
        notes: [
          "The itinerary is subject to road conditions, temple timings, crowd levels and local regulations.",
          "Visits to Bet Dwarka and Shivrajpur Beach depend on available time and ferry operations.",
          "Volvo bus services are arranged through a third-party provider and are subject to availability and operator policies.",
          "Hotel accommodation is included for one night in Dwarka; the remaining nights involve overnight bus travel.",
          "Darshan timings and sightseeing schedules may change depending on local conditions."
        ],
        days: [
          {
            title: "Day 1: Overnight Journey to Rajkot",
            activities: [
              "Board the Volvo sleeper bus from Mumbai or Pune for an overnight journey towards Rajkot.",
              "Enjoy a comfortable overnight journey and prepare for the spiritual exploration of Gujarat."
            ]
          },
          {
            title: "Day 2: Dwarka – Nageshwar Jyotirlinga Darshan",
            activities: [
              "Arrive in Rajkot and transfer to the designated traveller vehicle for the journey towards Dwarka.",
              "Arrive in Dwarka and check in to the hotel.",
              "Enjoy lunch at the hotel or a nearby restaurant.",
              "Visit Nageshwar Jyotirlinga Temple, one of the twelve sacred Jyotirlingas of Lord Shiva.",
              "Proceed to Bet Dwarka, subject to ferry operations and available time.",
              "Visit Dwarkadhish Temple and seek blessings at this revered Char Dham pilgrimage site.",
              "Visit Rukmini Devi Temple, dedicated to Goddess Rukmini.",
              "If time permits, enjoy a visit to Shivrajpur Beach, known for its scenic coastline.",
              "Return to the hotel for dinner at your own expense and an overnight stay in Dwarka."
            ]
          },
          {
            title: "Day 3: Somnath Jyotirlinga Darshan & Return to Rajkot",
            activities: [
              "Check out from the hotel and depart for Somnath.",
              "Enjoy breakfast en route as per the meal plan.",
              "Visit Somnath Jyotirlinga Temple and seek blessings at one of India's most revered Shiva temples.",
              "Explore Bhalka Tirth, associated with the final earthly pastimes of Lord Krishna.",
              "Visit Triveni Sangam, the sacred confluence of three rivers.",
              "Begin the return journey towards Rajkot.",
              "Board the pre-booked Volvo sleeper bus for Mumbai or Pune.",
              "Enjoy the overnight journey back home."
            ]
          },
          {
            title: "Day 4: Arrival in Mumbai / Pune",
            activities: [
              "Arrive in Mumbai and conclude the journey with divine blessings and beautiful memories.",
              "Travellers returning to Pune will be provided with a connecting cab from Mumbai, as per the package arrangement.",
              "Tour concludes."
            ]
          }
        ]
      }
    ],

    "ujjain-omkareshwar-yatra": [
      {
        id: "ujjain-omkareshwar-group",
        title: "Ujjain & Omkareshwar Jyotirlinga Yatra",
        duration: "3 Days / 2 Nights | Mumbai to Mumbai",
        destinationsCovered: "Mahakaleshwar • Omkareshwar • Mamleshwar • Kal Bhairav • Mahakal Lok Corridor • Indore",
        inclusions: [
          "Mumbai-to-Mumbai transportation by Volvo bus, with onward and return sectors arranged as per the itinerary.",
          "Local transportation for Ujjain, Omkareshwar and Indore sightseeing.",
          "One night's hotel accommodation in Ujjain.",
          "One night's hotel accommodation in Indore.",
          "Two breakfasts.",
          "Two lunches.",
          "VIP darshan at Mahakaleshwar Jyotirlinga Temple, subject to confirmation.",
          "VIP darshan at Omkareshwar Jyotirlinga Temple, subject to confirmation.",
          "Trip coordination and assistance throughout the journey.",
          "Applicable vehicle tolls, parking charges and permits, as per the package arrangement."
        ],
        exclusions: [
          "Dinner during the tour.",
          "Boat ride charges on the Narmada River.",
          "Personal expenses, shopping, snacks and beverages.",
          "Donations, offerings and additional religious rituals.",
          "Additional sightseeing or activities not specifically mentioned under inclusions.",
          "Any additional charges for special darshan or services beyond the confirmed VIP darshan arrangements.",
          "Expenses arising from traffic delays, weather conditions, temple restrictions or other unforeseen circumstances.",
          "Anything not specifically mentioned under inclusions."
        ],
        notes: [
          "Temple visits, aartis and sightseeing are subject to temple schedules, crowd conditions and local regulations.",
          "VIP darshan is subject to confirmation and the applicable temple rules.",
          "The Ram Ghat and Harsiddhi Temple aartis depend on the day's schedule.",
          "The Narmada boat ride is subject to weather, river conditions and local permissions.",
          "Volvo bus timings and arrival schedules may vary due to traffic and operator arrangements."
        ],
        days: [
          {
            title: "Day 1: Friday – Overnight Journey from Mumbai",
            activities: [
              "Board the Volvo bus from Mumbai for an overnight journey towards Ujjain.",
              "Enjoy a comfortable overnight journey and prepare for a spiritual experience in Madhya Pradesh."
            ]
          },
          {
            title: "Day 2: Saturday – Ujjain Temple Tour & Mahakaleshwar Darshan",
            activities: [
              "Arrive in Ujjain and transfer to the hotel for freshening up, subject to hotel arrangements.",
              "Begin the spiritual journey with darshan at Kal Bhairav Temple.",
              "Visit Mangalnath Temple, a sacred temple associated with Lord Shiva.",
              "Explore Sandipani Ashram, an ancient spiritual site traditionally associated with Lord Krishna's education.",
              "Enjoy lunch and continue exploring other prominent temples in Ujjain, subject to time availability.",
              "Visit Mahakaleshwar Jyotirlinga Temple for VIP darshan, as per the confirmed arrangement.",
              "Experience the divine evening Ram Ghat Aarti on the banks of the sacred Shipra River.",
              "Visit Harsiddhi Mata Temple and experience the evening aarti, subject to temple timings.",
              "Explore the Mahakal Lok Corridor, with its grand sculptures, illuminated pathways and spiritual atmosphere.",
              "Return to the hotel for an overnight stay in Ujjain."
            ]
          },
          {
            title: "Day 3: Sunday – Omkareshwar Darshan & Overnight Stay in Indore",
            activities: [
              "Enjoy breakfast at the hotel and check out.",
              "Depart for Omkareshwar, situated on the sacred Narmada River.",
              "Visit Omkareshwar Jyotirlinga Temple for VIP darshan, as per the confirmed arrangement.",
              "Visit Mamleshwar Temple, another important Shiva temple associated with the Omkareshwar pilgrimage.",
              "Enjoy an optional boat ride on the Narmada River, subject to availability and local conditions.",
              "Spend leisure time exploring the Narmada ghats and the local market.",
              "Enjoy lunch and proceed towards Indore.",
              "Arrive in Indore and check in to the hotel.",
              "Overnight stay in Indore."
            ]
          },
          {
            title: "Day 4: Monday – Return Journey to Mumbai",
            activities: [
              "Check out from the hotel as per the bus departure schedule.",
              "Transfer to the designated boarding point in Indore.",
              "Board the Volvo bus for Mumbai.",
              "Arrive in Mumbai on Monday morning, subject to traffic and bus schedules.",
              "Tour concludes with divine blessings and beautiful memories."
            ]
          }
        ]
      }
    ]
  }
};

export const groupToursConfig = groupToursSiteConfig;
export default groupToursSiteConfig;

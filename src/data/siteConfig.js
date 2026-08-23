export const siteConfig = {
  company: {
    name: "[COMPANY NAME]",
    tagline: "Journeys through time",
    logo: "[LOGO]",
    whatsapp: "[PHONE]",
    email: "contact@[COMPANY].com",
    address: "[ADDRESS]",
    website: "www.yugatirtha.com"
  },
  
  navigation: [
    { name: "Home", path: "/" },
    { name: "Domestic", path: "/domestic" },
    { name: "International", path: "/international" },
    { name: "Spiritual Journey", path: "/spiritualjourney" },
    { name: "Experiences", path: "/experiences" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ],

  home: {
    hero: [
      {
        img: "./assets/hero-spiti.jpg",
        eyebrow: "Yuga · era · Tirtha",
        h1: "Rediscover the soul",
        h1Italic: "of the mountains.",
        sub: "Curated pilgrimages to the world's most silent heights."
      },
      {
        img: "./assets/hero-temple-south.jpg",
        eyebrow: "Sacred · Crossing · Devotion",
        h1: "Ancient echoes",
        h1Italic: "in stone.",
        sub: "Architecture that bridges the human and the divine."
      },
      {
        img: "./assets/hero-aarti.jpg",
        eyebrow: "Pravaha · Flow · Grace",
        h1: "The river's",
        h1Italic: "eternal prayer.",
        sub: "Experience the timeless rituals on the banks of the holiest waters."
      }
    ],
    categories: [
      { 
        label: "North Sacred circuits", 
        eyebrow: "The Heart", 
        desc: "A journey through the ancient stone temples and living traditions of the upper plains.",
        img: "./assets/spiritual-north.jpg" 
      },
      { 
        label: "Himalayan Trails", 
        eyebrow: "The Peaks", 
        desc: "Finding silence and spiritual clarity amidst the highest peaks on earth.",
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" 
      },
      { 
        label: "River Rituals", 
        eyebrow: "The Flow", 
        desc: "Tracing the life-giving waters where time dissolves into eternal ceremony.",
        img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800" 
      },
      { 
        label: "Bespoke Paths", 
        eyebrow: "Tailored", 
        desc: "Private, high-touch expeditions crafted specifically for the discerning seeker.",
        img: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800" 
      }
    ],
    stats: [
      { value: 2400, label: "Guided Seekers", suffix: "+" },
      { value: 180, label: "Unique Routes", suffix: "" },
      { value: 40, label: "Expeditions", suffix: "+" },
      { value: 12, label: "Jyotirlingas", suffix: "" }
    ],
    testimonials: [
      { quote: "A profound experience that went beyond simple sightseeing. It felt like coming home.", name: "Aria Sharma", city: "Mumbai" },
      { quote: "The attention to detail and the reverence for the local culture was unparalleled.", name: "Julian V.", city: "London" },
      { quote: "Life-changing. I didn't just see India; I felt the pulse of its ancient wisdom.", name: "Sarah Jenkins", city: "New York" }
    ]
  },

  domestic: {
    hero: [
      {
        img: "/assets/kashmir-C3GCvNNI.jpg",
        eyebrow: "Domestic packages",
        h1: "India, region",
        h1Italic: "by region",
        sub: "From the passes of Ladakh to the temple towns of the Coromandel coast — small-group and private journeys, each built around the season, the light and the local hands that host you."
      }
    ],
    categories: [
      { 
        bannerTitle: "North India",
        bannerDesc: "Kashmir, Ladakh and Himachal Pradesh — high passes, chinar valleys, monasteries on cliff edges and the first light of the Himalaya.",
        label: "North India", 
        img: "/assets/hero-himalaya-Ben1uNJZ.jpg",

        cards: [
          { 
            cardTitle: "Kashmir: Valley of Chinars",
            cardDesc: "Srinagar houseboats, Gulmarg meadows, Pahalgam's rivers and the shrines of the valley at an unhurried pace.",
            label: "Kashmir", 
            img: "/assets/kashmir-C3GCvNNI.jpg",
            duration: "6 nights / 7 days",
            price: "From ₹42,000"
          },
          { 
            cardTitle: "Ladakh Expedition",
            cardDesc: "Leh, Nubra, Pangong and the old monasteries — led by our own high-altitude expedition team.",
            label: "Ladakh", 
            img: "/assets/spiritual-north-NuyL8ZKr.jpg",
            duration: "8 nights / 9 days",
            price: "From ₹65,000"
          },
          { 
            cardTitle: "Himachal & Spiti Circuit",
            cardDesc: "Shimla to Kaza through Kinnaur, Tabo and Key — the route the founder has run for a decade.",
            label: "Himachal", 
            img: "/assets/hero-himalaya-Ben1uNJZ.jpg",
            duration: "9 nights / 10 days",
            price: "From ₹58,000"
          }
        ]
      },
      { 
        bannerTitle: "Northeast India",
        bannerDesc: "Meghalaya, Assam, Arunachal, Sikkim and Nagaland — living root bridges, monastery towns, tea country and rain-washed green.",
        label: "Northeast India", 
        img: "/assets/northeast-D8OXmwI_.jpg",

        cards: [
          { 
            cardTitle: "Meghalaya: Abode of Clouds",
            cardDesc: "Shillong, Cherrapunji, Mawlynnong and the double-decker root bridge trek through cloud forest.",
            label: "Meghalaya", 
            img: "/assets/northeast-D8OXmwI_.jpg",
            duration: "6 nights / 7 days",
            price: "From ₹46,000"
          },
          { 
            cardTitle: "Sikkim & Tawang Monastery Trail",
            cardDesc: "Gangtok, Rumtek, Tawang and the eastern Himalaya's great Buddhist seats, with monastery morning prayers.",
            label: "Sikkim", 
            img: "/assets/hero-himalaya-Ben1uNJZ.jpg",
            duration: "8 nights / 9 days",
            price: "From ₹59,000"
          }
        ]
      },
      { 
        bannerTitle: "West India",
        bannerDesc: "Maharashtra, Gujarat and Rajasthan — cave temples cut into basalt, salt deserts, and forts the colour of late sunlight.",
        label: "West India", 
        img: "/assets/rajasthan-Dznk4KEj.jpg",

        cards: [
          { 
            cardTitle: "Rajasthan Royal Circuit",
            cardDesc: "Jaipur, Jodhpur, Udaipur and Jaisalmer with heritage stays and desert nights.",
            label: "Rajasthan", 
            img: "/assets/rajasthan-Dznk4KEj.jpg",
            duration: "9 nights / 10 days",
            price: "From ₹64,000"
          },
          { 
            cardTitle: "Maharashtra: Ajanta, Ellora & Konkan",
            cardDesc: "Rock-cut caves, the Kailasa temple at Ellora, and the quiet Konkan coastline below the ghats.",
            label: "Maharashtra", 
            img: "/assets/temple-south-CC6aHc0Q.jpg",
            duration: "6 nights / 7 days",
            price: "From ₹38,000"
          },
          { 
            cardTitle: "Gujarat: Rann & Temple Towns",
            cardDesc: "The white Rann, Modhera sun temple, Somnath and the craft villages of Kutch.",
            label: "Gujarat", 
            img: "/assets/rajasthan-Dznk4KEj.jpg",
            duration: "7 nights / 8 days",
            price: "From ₹49,000"
          }
        ]
      },
      { 
        bannerTitle: "South India",
        bannerDesc: "Karnataka, Kerala, Tamil Nadu and Andhra Pradesh — granite gopurams, backwaters, Deccan ruins and coastal shrines.",
        label: "South India", 
        img: "/assets/temple-south-CC6aHc0Q.jpg",

        cards: [
          { 
            cardTitle: "Kerala Backwaters & Hills",
            cardDesc: "Alleppey houseboats, Munnar tea slopes, Kochi's old quarters and ayurveda days.",
            label: "Kerala", 
            img: "/assets/kerala-JKm5YrGV.jpg",
            duration: "7 nights / 8 days",
            price: "From ₹44,000"
          },
          { 
            cardTitle: "Tamil Nadu Temple Trail",
            cardDesc: "Madurai, Thanjavur, Chidambaram and Rameswaram — the Chola and Pandya heartland, temple by temple.",
            label: "Tamil Nadu", 
            img: "/assets/temple-south-CC6aHc0Q.jpg",
            duration: "8 nights / 9 days",
            price: "From ₹47,000"
          },
          { 
            cardTitle: "Karnataka: Hampi & Coast",
            cardDesc: "Hampi's ruined city, Badami caves, Gokarna's shore temples and the Malnad ghats.",
            label: "Karnataka", 
            img: "/assets/rajasthan-Dznk4KEj.jpg",
            duration: "6 nights / 7 days",
            price: "From ₹39,000"
          },
          { 
            cardTitle: "Andhra: Tirupati & Coastal Shrines",
            cardDesc: "Tirumala darshan with assisted access, Srisailam, Lepakshi and the Krishna delta towns.",
            label: "Andhra Pradesh", 
            img: "/assets/temple-south-CC6aHc0Q.jpg",
            duration: "5 nights / 6 days",
            price: "From ₹34,000"
          }
        ]
      }
    ],
    items: [
      { id: 'varanasi', title: "Eternal Kashi", location: "Uttar Pradesh", img: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=800", price: "Starts at ₹45,000" },
      { id: 'ladakh', title: "The High Passes", location: "Ladakh", img: "https://images.unsplash.com/photo-1581793745862-99fde7f73623?auto=format&fit=crop&q=80&w=800", price: "Starts at ₹85,000" },
      { id: 'rishikesh', title: "Yoga of the Ganges", location: "Uttarakhand", img: "https://images.unsplash.com/photo-1598977123418-454555150162?auto=format&fit=crop&q=80&w=800", price: "Starts at ₹35,000" }
    ]
  },

  international: {
    hero: [
      {
        img: "/assets/intl-angkor-Xa0-qQac.jpg",
        eyebrow: "International packages",
        h1: "Curated journeys",
        h1Italic: "beyond India",
        sub: "Small-group and fully custom voyages across Southeast Asia, the CIS countries and the Middle East — planned with the same care for story, season and sacred ground."
      }
    ],
    categories: [
      { 
        bannerTitle: "Southeast Asia",
        bannerDesc: "The Indic world beyond India — Khmer temple cities, Balinese water shrines and the golden stupas of the Irrawaddy.",
        label: "Southeast Asia", 
        img: "/assets/intl-angkor-Xa0-qQac.jpg",

        cards: [
          { 
            cardTitle: "Cambodia: Angkor Temple Trail",
            cardDesc: "Sunrise at Angkor Wat, Bayon, Ta Prohm and Banteay Srei with a scholar-guide on Hindu-Buddhist iconography.",
            label: "Cambodia", 
            img: "/assets/intl-angkor-Xa0-qQac.jpg",
            duration: "5 nights / 6 days",
            price: "From ₹78,000"
          },
          { 
            cardTitle: "Bali: Island of Water Temples",
            cardDesc: "Besakih, Tirta Empul purification, Ubud's rice terraces and the cliff shrine at Uluwatu.",
            label: "Bali", 
            img: "/assets/intl-bali-Ck8GSayl.jpg",
            duration: "6 nights / 7 days",
            price: "From ₹92,000"
          },
          { 
            cardTitle: "Vietnam & Thailand Highlights",
            cardDesc: "Hanoi, Halong Bay, Bangkok's temples and Chiang Mai's northern monasteries.",
            label: "Vietnam & Thailand", 
            img: "/assets/intl-vietnam-ZB5ZxQ8t.jpg",
            duration: "9 nights / 10 days",
            price: "From ₹1,25,000"
          }
        ]
      },
      { 
        bannerTitle: "CIS Countries",
        bannerDesc: "The Silk Road in blue tile — Uzbekistan, Kazakhstan, Georgia, Armenia and Azerbaijan, in small groups of twelve or fewer.",
        label: "CIS Countries", 
        img: "/assets/intl-uzbek-DVSVjwrq.jpg",

        cards: [
          { 
            cardTitle: "Uzbekistan Silk Road",
            cardDesc: "Samarkand, Bukhara and Khiva — madrasas, caravanserais and Timurid blue domes.",
            label: "Uzbekistan", 
            img: "/assets/intl-uzbek-DVSVjwrq.jpg",
            duration: "7 nights / 8 days",
            price: "From ₹1,15,000"
          },
          { 
            cardTitle: "Georgia & Armenia Caucasus",
            cardDesc: "Tbilisi, Kazbegi, Yerevan and cliff monasteries above the Debed gorge.",
            label: "Georgia & Armenia", 
            img: "/assets/intl-caucasus-DAV0UB-k.jpg",
            duration: "8 nights / 9 days",
            price: "From ₹1,32,000"
          },
          { 
            cardTitle: "Kazakhstan: Steppe & Almaty",
            cardDesc: "Almaty, Charyn canyon and the Kolsai lakes under the Tian Shan.",
            label: "Kazakhstan", 
            img: "/assets/intl-kazakh-CgLEidld.jpg",
            duration: "6 nights / 7 days",
            price: "From ₹1,05,000"
          }
        ]
      },
      { 
        bannerTitle: "Middle East",
        bannerDesc: "Desert light and old trade cities — the Gulf's modern skylines set against dunes, souks and Nabataean stone.",
        label: "Middle East", 
        img: "/assets/intl-dubai-BwHI-8lI.jpg",

        cards: [
          { 
            cardTitle: "Dubai & Abu Dhabi",
            cardDesc: "Skyline days, desert nights, the Grand Mosque and old Dubai's creek quarters.",
            label: "Dubai", 
            img: "/assets/intl-dubai-BwHI-8lI.jpg",
            duration: "5 nights / 6 days",
            price: "From ₹68,000"
          },
          { 
            cardTitle: "Jordan: Petra & Wadi Rum",
            cardDesc: "Petra by day and candlelight, Wadi Rum camps and the Dead Sea shoreline.",
            label: "Jordan", 
            img: "/assets/intl-petra-CNbqPeH5.jpg",
            duration: "6 nights / 7 days",
            price: "From ₹1,18,000"
          },
          { 
            cardTitle: "Oman: Mountains & Coast",
            cardDesc: "Muscat, Jebel Shams, wadi swims and the empty dunes of Wahiba Sands.",
            label: "Oman", 
            img: "/assets/intl-oman-LhBYLJPZ.jpg",
            duration: "6 nights / 7 days",
            price: "From ₹98,000"
          }
        ]
      }
    ],
    items: [
      { id: 'bhutan', title: "Kingdom of Cloud", location: "Bhutan", img: "https://images.unsplash.com/photo-1578516123433-39dfbe6e0781?auto=format&fit=crop&q=80&w=800", price: "Starts at $1,200" },
      { id: 'bali', title: "Island of Gods", location: "Indonesia", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800", price: "Starts at $950" }
    ]
  },

  spiritualjourney: {
    hero: [
      {
        img: "/assets/spiritual-north-NuyL8ZKr.jpg",
        eyebrow: "Our heart · Spiritual journeys",
        h1: "Sacred India,",
        h1Italic: "walked with reverence",
        sub: "The circuits that shaped a civilisation — Char Dham and Panch Kedar in the north, Panch Bhoota Stalam in the south, Shakti Peeths in the east, Jyotirlingas in the west. Guided slowly, respectfully, with real access."
      }
    ],
    directions: {
      north: {
        bannerTitle: "North · Sacred circuits",
        bannerDesc: "The Himalaya as the abode of the gods — glacial sources, stone shrines that open only in summer, and the long walk upward.",
        img: "/assets/spiritual-north-NuyL8ZKr.jpg",
        cards: [
          {
            cardTitle: "Char Dham Yatra",
            cardDesc: "Yamunotri, Gangotri, Kedarnath and Badrinath — the four Himalayan seats where India's holiest rivers begin and where Shiva and Vishnu are worshipped at the roof of the country.",
            includes: "Haridwar pickup, helicopter or road options, assisted darshan, priest coordination, oxygen-equipped vehicles and mountain-trained crew.",
            duration: "10–12 days",
            season: "May–June, September–October"
          },
          {
            cardTitle: "Panch Kedar",
            cardDesc: "Five Shiva shrines — Kedarnath, Tungnath, Rudranath, Madhyamaheshwar and Kalpeshwar — where the Pandavas are said to have found the lord hidden in the form of a bull.",
            includes: "Graded trekking support, village homestays, porters, and a guide versed in the Mahabharata narrative of each shrine.",
            duration: "14–16 days",
            season: "May–June, September–October"
          },
          {
            cardTitle: "Kashi · Prayagraj · Ayodhya",
            cardDesc: "The Ganga plain's ancient triad — the city of light, the confluence of rivers, and the birthplace city of Rama.",
            includes: "Ghat-side stays, private aarti seating, boat darshan at dawn, temple access.",
            duration: "6–7 days",
            season: "October–March"
          }
        ]
      },
      south: {
        bannerTitle: "South · Sacred circuits",
        bannerDesc: "Granite gopurams, backwaters, Deccan ruins, and coastal shrines mapping ancient spiritual paths.",
        img: "/assets/temple-south-CC6aHc0Q.jpg",
        cards: [
          {
            cardTitle: "Panch Bhoota Stalam",
            cardDesc: "Five Shiva temples embodying the elements — Chidambaram (space), Kalahasti (air), Thiruvannamalai (fire), Thiruvanaikaval (water) and Kanchipuram (earth).",
            includes: "Element-wise sequencing, early morning abhishekam access, Sanskrit-literate guide, comfortable inter-temple transfers.",
            duration: "8–9 days",
            season: "November–February"
          },
          {
            cardTitle: "Chola Temple Circuit",
            cardDesc: "Thanjavur, Gangaikonda Cholapuram and Darasuram — the imperial Chola temples, and the high-water mark of South Indian stone architecture.",
            includes: "Art-historian guide, heritage stays, Bharatanatyam or nagaswaram evening.",
            duration: "6 days",
            season: "November–February"
          },
          {
            cardTitle: "Tirupati & Rameswaram",
            cardDesc: "Venkateshwara on the seven hills and the island shrine where Rama is said to have worshipped Shiva before crossing to Lanka.",
            includes: "Assisted darshan slots, sacred bathing arrangements, Dhanushkodi excursion.",
            duration: "5–6 days",
            season: "October–March"
          }
        ] 
      },
      east: {
        bannerTitle: "East · Sacred circuits",
        bannerDesc: "Shakti Peeths and holy river confluences running deep into the eastern heartland.",
        img: "/assets/northeast-D8OXmwI_.jpg",
        cards: [
          {
            cardTitle: "Shakti Peeth Pilgrimage (East)",
            cardDesc: "Kamakhya, Kalighat, Tarapith and Jwalamukhi — the places where Sati's body is said to have fallen, each a distinct face of the goddess.",
            includes: "Morning puja participation, local priest introductions, respectful briefing on tantric traditions.",
            duration: "9–10 days",
            season: "October–March"
          },
          {
            cardTitle: "Puri, Konark & Bhubaneswar",
            cardDesc: "The Jagannath temple, the sun chariot at Konark and the Lingaraja temple — Odisha's Kalinga architecture at its fullest.",
            includes: "Coastal stays, temple town walks, Odissi performance evening.",
            duration: "5–6 days",
            season: "November–February"
          },
          {
            cardTitle: "Gaya & Bodh Gaya",
            cardDesc: "Pind daan at the Vishnupad temple and the Bodhi tree where the Buddha's awakening is remembered — two traditions, one riverbank.",
            includes: "Ritual coordination for ancestral rites, monastery visits, quiet meditation time.",
            duration: "4 days",
            season: "November–February"
          }
        ] 
      },
      west: {
        bannerTitle: "West · Sacred circuits",
        bannerDesc: "Jyotirlingas and ancient coastal temples from Saurashtra down to the Konkan coast.",
        img: "/assets/rajasthan-Dznk4KEj.jpg",
        cards: [
          {
            cardTitle: "Western Jyotirlinga Circuit",
            cardDesc: "Somnath, Nageshwar, Trimbakeshwar, Bhimashankar, Grishneshwar and Mahakaleshwar — six of the twelve lights of Shiva within one region.",
            includes: "Bhasma aarti registration at Ujjain, sunrise darshans, comfortable road transfers, Sanskrit chanting sessions.",
            duration: "9–10 days",
            season: "October–March"
          },
          {
            cardTitle: "Dwarka & Saurashtra Coast",
            cardDesc: "Krishna's kingdom by the Arabian sea, with Bet Dwarka, Somnath and the Girnar climb nearby.",
            includes: "Coastal stays, boat crossings, Girnar ropeway or guided ascent.",
            duration: "6 days",
            season: "November–February"
          },
          {
            cardTitle: "Ashtavinayak Yatra",
            cardDesc: "The eight self-manifested Ganesha shrines around Pune — a compact and much-loved Maharashtrian circuit.",
            includes: "Traditional sequencing, temple-town meals, priest-led sankalpa.",
            duration: "3–4 days",
            season: "Year-round, best August–February"
          }
        ] 
      }
    },
    flagships: [
      {
        title: "12 Jyotirlingas",
        desc: "Somnath to Rameswaram — the twelve lights of Shiva across nine states, in one continuous pan-India passage.",
        duration: "21–24 days",
        season: "October–March"
      },
      {
        title: "108 Divya Desams",
        desc: "The Vaishnava canon sung by the Alvars, run as staged modules across South India, the Himalaya and Nepal.",
        duration: "Staged, 12 days per module",
        season: "November–March"
      }
    ]
  },

  experiences: {
    hero: [
      {
        img: "./assets/hero-spiti.jpg",
        eyebrow: "Curated · Experiences",
        h1: "Signature",
        h1Italic: "Retreats.",
        sub: "Immerse yourself in specialized wellness and nature paths."
      },
      {
        img: "./assets/hero-aarti.jpg",
        eyebrow: "Local · Immersion",
        h1: "Cultural",
        h1Italic: "Tapestry.",
        sub: "Engage deeply with regional traditions and rituals."
      },
      {
        img: "./assets/hero-temple-south.jpg",
        eyebrow: "Design · Heritage",
        h1: "Architectural",
        h1Italic: "Marvels.",
        sub: "Stay in thoughtfully preserved heritage properties."
      }
    ],
    items: [
      { id: 'ayurveda', title: "Ayurvedic Retreat", location: "Kerala", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800", price: "Starts at ₹55,000" },
      { id: 'desert-camp', title: "Desert Glamping", location: "Rajasthan", img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800", price: "Starts at ₹40,000" },
      { id: 'himalayan-trek', title: "Valley of Flowers", location: "Uttarakhand", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800", price: "Starts at ₹30,000" }
    ]
  },

  about: {
    hero: [
      {
        img: "./assets/hero-temple-south.jpg",
        eyebrow: "Our · Story",
        h1: "Who are we?",
        h1Italic: "It began in the mountains",
        sub: "Curating soulful journeys since 2010."
      },
      {
        img: "./assets/hero-spiti.jpg",
        eyebrow: "Our · Vision",
        h1: "The",
        h1Italic: "Philosophy.",
        sub: "Guided by a deep respect for authentic exploration."
      },
      {
        img: "./assets/hero-aarti.jpg",
        eyebrow: "Our · People",
        h1: "Meet The",
        h1Italic: "Curators.",
        sub: "Passionate travelers dedicated to crafting your perfect path."
      }
    ],
    connect:[
      {
        h1: "OUR MISSION",
        quote: "To open India's sacred geography to travellers who want more than a sight — and to do it with the care the places themselves deserve."
      }
    ]
  },

  contact: {
    hero: [
      {
        img: "./assets/hero-temple-south.jpg",
        eyebrow: "Contact",
        h1: "Let's plan your crossing",
        alt: "Illuminated South Indian temple at dusk"
      },
      {
        img: "./assets/hero-aarti.jpg",
        eyebrow: "Reach Out",
        h1: "Every journey begins with a conversation",
        alt: "Ganga Aarti ceremony at dusk"
      },
      {
        img: "./assets/hero-spiti.jpg",
        eyebrow: "Advisory",
        h1: "Curating your sacred passage",
        alt: "High mountain landscape in the Himalayas"
      }
    ],
    enquiry: {
      eyebrow: "Enquiry",
      title: "Tell us about your journey",
      buttonText: "Send Enquiry"
    },
    sidebar: {
      title: "Reach us directly",
      note: "We reply to every enquiry within 24 hours, and we're happy to talk through a route before you commit to anything."
    }
  },

  founder: {
    name: "[FOUNDER NAME]",
    photo: "https://placehold.co/800x1200/2A1F1A/FAF6F0?text=Founder+Photo",
    bio: "With over two decades of exploring the hidden corners of the subcontinent, [NAME] founded [COMPANY] to share the transformative power of sacred travel.",
    quote: "Travel, at its most meaningful, is a pilgrimage — a sacred journey through time and tradition, connecting you not just to places, but to the stories, spirits, and wisdom that make them timeless."
  },
  
  placeholders: Array(6).fill({
    title: "[TITLE PLACEHOLDER]",
    subtitle: "[SUBTITLE/LOCATION]",
    info: "[PRICE OR DURATION]",
    image: "https://placehold.co/800x1200/2A1F1A/FAF6F0?text=Image+Placeholder"
  })
};

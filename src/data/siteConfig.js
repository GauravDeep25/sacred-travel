import { domesticSiteConfig } from './siteConfig.domestic.js';
import { internationalSiteConfig } from './siteConfig.international.js';
import { spiritualSiteConfig } from './siteConfig.spiritual.js';

export const siteConfig = {
  company: {
    name: "Yugatirtha",
    tagline: "Rediscover the Soul of India",
    logo: "Yugatirtha",
    whatsapp: "+918591262424",
    email: "info@yugatirtha.com",
    address: "3rd floor, Jay sampada apartment chinchpada road kalyan, Mumbai 421306",
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
        img: "/assets/hero-spiti.jpg",
        eyebrow: "Yuga · era · Tirtha",
        h1: "Find Peace among Peaks",
        h1Italic: "of the mountains.",
        sub: "Curated pilgrimages to the world's most silent heights."
      },
      {
        img: "/assets/hero-temple-south.jpg",
        eyebrow: "Sacred · Crossing · Devotion",
        h1: "Ancient echoes",
        h1Italic: "in stone.",
        sub: "Architecture that bridges the human and the divine."
      },
      {
        img: "/assets/hero-aarti.jpg",
        eyebrow: "Pravaha · Flow · Grace",
        h1: "The river's",
        h1Italic: "eternal prayer.",
        sub: "Experience the timeless rituals on the banks of the holiest waters."
      }
    ],
    categories: [
      {
        label: "Spiritual Journeys",
        eyebrow: "OUR HEART",
        desc: "Char Dham, Panch Kedar, the 12 Jyotirlingas, Panch Bhoota Stalam and Shakti Peeths — walked with reverence and real access.",
        img: "/assets/spiritual-north.jpg",
        path: "/spiritualjourney"
      },
      {
        label: "Domestic Packages",
        eyebrow: "NORTH TO SOUTH",
        desc: "Kashmir, Ladakh, Himachal, the Northeast, Rajasthan, Gujarat, Karnataka, Kerala, Tamil Nadu and Andhra.",
        img: "/assets/kashmir-C3GCvNNI.jpg",
        path: "/domestic"
      },
      {
        label: "International Packages",
        eyebrow: "BEYOND INDIA",
        desc: "Southeast Asia, the CIS countries and the Middle East — small-group and private departures built around living heritage.",
        img: "/assets/intl-angkor-Xa0-qQac.jpg",
        path: "/international"
      },
      {
        label: "Experiences",
        eyebrow: "BEYOND SIGHTSEEING",
        desc: "Darshan access, sunrise rituals, storytelling walks through temple towns, private boat ceremonies and encounters with master craftsmen.",
        img: "/assets/hero-aarti.jpg",
        path: "/experiences"
      }
    ],
    stats: [
      { value: 2400, label: "Travellers guided", suffix: "+", icon: "users" },
      { value: 180, label: "Curated journeys", suffix: "+", icon: "compass" },
      { value: 40, label: "Spiti & Ladakh expeditions", suffix: "+", icon: "mountain" },
      { value: 12, label: "Jyotirlingas covered", suffix: "", icon: "flame" },
      { value: 4, label: "Dham Covered", suffix: "", icon: "dham" }
    ],
    testimonials: [
      { quote: "A profound experience that went beyond simple sightseeing. It felt like coming home.", name: "Aria Sharma", city: "Gangtok" },
      { quote: "The attention to detail and the reverence for the local culture was unparalleled.", name: "Yuvraj Singh", city: "Delhi" },
      { quote: "Life-changing. I didn't just see My country; I felt the pulse of its ancient wisdom.", name: "Arjun Kulkarni", city: "Mumbai" }
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
            itineraryId: 'kashmir',
            img: "/assets/kashmir-C3GCvNNI.jpg",
            duration: "6 nights / 7 days",
            price: "From ₹42,000"
          },
          {
            cardTitle: "Ladakh Expedition",
            cardDesc: "Leh, Nubra, Pangong and the old monasteries — led by our own high-altitude expedition team.",
            label: "Ladakh",
            itineraryId: 'ladakh',
            img: "/assets/spiritual-north-NuyL8ZKr.jpg",
            duration: "8 nights / 9 days",
            price: "From ₹65,000"
          },
          {
            cardTitle: "Himachal: Pines & High Valleys",
            cardDesc: "Shimla, Manali, Dharamshala, Dalhousie and the apple orchards of the lower Himalaya at an unhurried pace.",
            label: "Himachal",
            itineraryId: 'himachal',
            img: "/assets/himachal.jpg",
            duration: "4 nights / 5 days",
            price: "From ₹35,000"
          },
          {
            cardTitle: "Spiti Valley Expedition",
            cardDesc: "Kinnaur, Tabo, Key, Chandratal and the high cold desert valleys beyond Rohtang — raw Himalaya at its most stark and beautiful.",
            label: "Spiti Valley",
            itineraryId: 'spiti',
            img: "/assets/hero-spiti.jpg",
            duration: "6 nights / 7 days",
            price: "From ₹32,000"
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
            itineraryId: 'meghalaya',
            img: "/assets/northeast-D8OXmwI_.jpg",
            duration: "6 nights / 7 days",
            price: "From ₹46,000"
          },
          {
            cardTitle: "Sikkim & Tawang Monastery Trail",
            cardDesc: "Gangtok, Rumtek, Tawang and the eastern Himalaya's great Buddhist seats, with monastery morning prayers.",
            label: "Sikkim",
            itineraryId: 'sikkim',
            img: "/assets/sikkim.jpg",
            duration: "8 nights / 9 days",
            price: "From ₹59,000"
          },
          {
            cardTitle: "Arunachal: Land of Dawn-lit Mountains",
            cardDesc: "Tawang Monastery, Sela Pass, Dirang valleys and the ancient Monpa culture of the high eastern frontier.",
            label: "Arunachal",
            itineraryId: 'arunachal',
            img: "/assets/Arunachal.jpg",
            duration: "4 nights / 5 days",
            price: "From ₹48,000"
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
            itineraryId: 'rajasthan',
            img: "/assets/rajasthan-Dznk4KEj.jpg",
            duration: "9 nights / 10 days",
            price: "From ₹64,000"
          },
          {
            cardTitle: "Maharashtra: Ajanta, Ellora & Konkan",
            cardDesc: "Rock-cut caves, the Kailasa temple at Ellora, and the quiet Konkan coastline below the ghats.",
            label: "Maharashtra",
            itineraryId: 'maharashtra',
            img: "/assets/Maharashtra.jpg",
            duration: "6 nights / 7 days",
            price: "From ₹38,000"
          },
          {
            cardTitle: "Gujarat: Rann & Temple Towns",
            cardDesc: "The white Rann, Modhera sun temple, Somnath and the craft villages of Kutch.",
            label: "Gujarat",
            itineraryId: 'gujarat',
            img: "/assets/Gujrat.jpg",
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
            cardTitle: "Tamil Nadu Temple Trail",
            cardDesc: "Madurai, Thanjavur, Chidambaram and Rameswaram — the Chola and Pandya heartland, temple by temple.",
            label: "Tamil Nadu",
            itineraryId: 'tamilnadu',
            img: "/assets/temple-south-CC6aHc0Q.jpg",
            duration: "8 nights / 9 days",
            price: "From ₹47,000"
          },
          {
            cardTitle: "Andhra: Tirupati & Coastal Shrines",
            cardDesc: "Tirumala darshan with assisted access, Srisailam, Lepakshi and the Krishna delta towns.",
            label: "Andhra Pradesh",
            itineraryId: 'andhrapradesh',
            img: "/assets/Andhra.jpg",
            duration: "5 nights / 6 days",
            price: "From ₹34,000"
          }
        ]
      }
    ],
    items: [
      { id: 'ladakh', title: "The High Passes", location: "Ladakh", img: "https://images.unsplash.com/photo-1581793745862-99fde7f73623?auto=format&fit=crop&q=80&w=800", price: "Starts at ₹85,000" }
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
            cardTitle: "Bali: Island of Water Temples",
            cardDesc: "Besakih, Tirta Empul purification, Ubud's rice terraces and the cliff shrine at Uluwatu.",
            label: "Bali",
            itineraryId: 'bali',
            img: "/assets/intl-bali-Ck8GSayl.jpg",
            duration: "6 nights / 7 days",
            price: "From ₹92,000"
          },
          {
            cardTitle: "Vietnam: Hanoi, Halong & Beyond",
            cardDesc: "Hanoi old quarters, overnight cruise in Halong Bay, ancient pagodas and emerald limestone karsts.",
            label: "Vietnam",
            itineraryId: 'vietnam',
            img: "/assets/intl-vietnam-ZB5ZxQ8t.jpg",
            duration: "6 nights / 7 days",
            price: "From ₹68,000"
          },
          {
            cardTitle: "Philippines: Islands & Hidden Lagoons",
            cardDesc: "El Nido, Coron, Cebu and azure waters — limestone cliffs, secret beaches and pristine coral reefs.",
            label: "Philippines",
            itineraryId: 'philippines',
            img: "/assets/intl-angkor-Xa0-qQac.jpg",
            duration: "6 nights / 7 days",
            price: "From ₹88,000"
          }
        ]
      },
      {
        bannerTitle: "East & South Asia",
        bannerDesc: "Sacred peaks, Shinto gates, Buddhist highlands and the historic Ramayana trail across Japan and Sri Lanka.",
        label: "East & South Asia",
        img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200",

        cards: [
          {
            cardTitle: "Japan: Sacred Shrines & Ancient Capitals",
            cardDesc: "Tokyo, Kyoto, Mount Fuji, ancient Shinto shrines, bamboo groves and tranquil zen gardens.",
            label: "Japan",
            itineraryId: 'japan',
            img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200",
            duration: "7 nights / 8 days",
            price: "From ₹1,85,000"
          },
          {
            cardTitle: "Sri Lanka: Ramayana Trail & Hill Country",
            cardDesc: "Sigiriya rock fortress, Kandy Temple of the Tooth, Ella tea hills, Ravana falls and coastal Trincomalee.",
            label: "Sri Lanka",
            itineraryId: 'srilanka',
            img: "/assets/Srilanka.jpg",
            duration: "5 nights / 6 days",
            price: "From ₹62,000"
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
            cardTitle: "Georgia & Armenia Caucasus",
            cardDesc: "Tbilisi, Kazbegi, Yerevan and cliff monasteries above the Debed gorge.",
            label: "Georgia & Armenia",
            itineraryId: 'georgia',
            img: "/assets/intl-caucasus-DAV0UB-k.jpg",
            duration: "8 nights / 9 days",
            price: "From ₹1,32,000"
          }
        ]
      }
    ],
    items: [
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
            cardTitle: "Char Dham & Do Dham Yatra",
            cardDesc: "Yamunotri, Gangotri, Kedarnath and Badrinath — the four Himalayan seats where India's holiest rivers begin, with assisted darshan and helicopter options.",
            includes: "Haridwar pickup, helicopter or road options, assisted darshan, priest coordination, oxygen-equipped vehicles and mountain-trained crew.",
            itineraryId: 'uttarakhand',
            duration: "5 to 10 days",
            season: "May–June, September–October",
            img: "/assets/spiritual-north-NuyL8ZKr.jpg"
          },
          {
            cardTitle: "Kainchi Dham & Sacred Kumaon",
            cardDesc: "The revered ashram of Neem Karoli Baba at Kainchi Dham nestled in the Kumaon hills, alongside Nainital, Almora and ancient Himalayan shrines.",
            includes: "Ashram darshan assistance, serene hill-station stays, experienced local drivers, meditation and prayer time.",
            itineraryId: 'uttarakhand',
            duration: "2 nights / 3 days",
            season: "Year-round, best March–November",
            img: "/assets/Kainchi-Dham.jpg"
          },
          {
            cardTitle: "Kashi · Prayagraj · Ayodhya",
            cardDesc: "The Ganga plain's ancient triad — the city of light, the holy Sangam confluence, and Shri Ram Janmabhoomi in Ayodhya.",
            includes: "Ghat-side stays, private aarti seating, boat darshan at dawn, VIP temple access in Kashi and Ayodhya.",
            itineraryId: 'uttarpradesh',
            duration: "2 to 5 days",
            season: "October–March",
            img: "/assets/hero-aarti.jpg"
          }
        ]
      },
      south: {
        bannerTitle: "South · Sacred circuits",
        bannerDesc: "Granite towers, thousand-pillar halls and living ritual unbroken for a millennium across the Tamil, Kannada and Telugu country.",
        img: "/assets/temple-south-CC6aHc0Q.jpg",
        cards: [
          {
            cardTitle: "Panch Bhoota Stalam",
            cardDesc: "Five Shiva temples embodying the elements — Chidambaram (space), Kalahasti (air), Thiruvannamalai (fire), Thiruvanaikaval (water) and Kanchipuram (earth).",
            includes: "Element-wise sequencing, early morning abhishekam access, Sanskrit-literate guide, comfortable inter-temple transfers.",
            itineraryId: 'tamilnadu',
            duration: "6 nights / 7 days",
            season: "November–February",
            img: "/assets/temple-south-CC6aHc0Q.jpg"
          },
          {
            cardTitle: "Rameswaram & Madurai Meenakshi",
            cardDesc: "Madurai Meenakshi Amman, the 22 sacred teerthams of Ramanathaswamy at Rameswaram, and the coastal expanse of Dhanushkodi.",
            includes: "Assisted darshan, sacred teertham bathing arrangements, heritage temple town stays.",
            itineraryId: 'tamilnadu',
            duration: "4 nights / 5 days",
            season: "October–March",
            img: "/assets/hero-temple-south.jpg"
          },
          {
            cardTitle: "Mallikarjun Jyotirling & Tirupati Balaji",
            cardDesc: "Lord Venkateshwara on the seven hills of Tirumala and the ancient Srisailam Mallikarjuna Swamy Jyotirling in the Nallamala forests.",
            includes: "Assisted Balaji darshan slots, Srisailam special entry passes, Kalahasteeswara Vayu Lingam darshan.",
            itineraryId: 'andhrapradesh',
            duration: "2 to 4 days",
            season: "Year-round, best October–March",
            img: "/assets/Andhra.jpg"
          }
        ]
      },
      east: {
        bannerTitle: "East · Sacred circuits",
        bannerDesc: "Shakti country — the goddess temples of Bengal, Assam and Odisha, and the great coastal seat of Jagannath at Puri.",
        img: "/assets/aarti-Cr2kuE6b.jpg",
        cards: [
          {
            cardTitle: "Puri Dham, Konark & Bhubaneswar",
            cardDesc: "The sacred Jagannath temple, the 13th-century sun chariot at Konark, Lingaraja temple and the coastal beauty of Chilika Lake.",
            includes: "Coastal stays, temple town walks, Odissi performance evening, assisted Jagannath darshan.",
            itineraryId: 'odisha',
            duration: "3 to 5 days",
            season: "October–March",
            img: "/assets/konark.jpg"
          },

        ]
      },
      west: {
        bannerTitle: "West · Sacred circuits",
        bannerDesc: "Jyotirlinga country and the coastal shrines of Gujarat and Maharashtra, with the Sahyadri caves in between.",
        img: "/assets/rajasthan-Dznk4KEj.jpg",
        cards: [
          {
            cardTitle: "Maharashtra Jyotirlinga Circuit",
            cardDesc: "Trimbakeshwar, Bhimashankar and Grishneshwar — sacred Jyotirlingas nestled in the Western Ghats and Deccan plateau.",
            includes: "Special entry passes, comfortable AC vehicle from Pune/Mumbai, heritage accommodations.",
            itineraryId: 'maharashtra',
            duration: "2 to 4 days",
            season: "Year-round, best August–March",
            img: "/assets/Maharashtra.jpg"
          },
          {
            cardTitle: "Somnath & Dwarka Holy Shrines",
            cardDesc: "Somnath Jyotirling on the Arabian Sea, Dwarkadhish temple in Krishna's legendary kingdom, and Bet Dwarka.",
            includes: "Evening Somnath sound & light show, Bet Dwarka ferry coordination, coastal stays, temple transfers.",
            itineraryId: 'gujarat',
            duration: "3 nights / 4 days",
            season: "October–March",
            img: "/assets/Gujrat.jpg"
          },
          {
            cardTitle: "Ujjain Mahakaleshwar & Omkareshwar",
            cardDesc: "Shree Mahakaleshwar Jyotirling with confirmed Bhasma Aarti registration, Omkareshwar on Mandhata island, and Sandipani Ashram.",
            includes: "Bhasma aarti registration assistance, VIP darshan passes, local priest coordination, Indore/Ujjain transfers.",
            itineraryId: 'madhyapradesh',
            duration: "2 nights / 3 days",
            season: "Year-round, best October–March",
            img: "/assets/hero-aarti.jpg"
          },
          {
            cardTitle: "Ashtavinayak Yatra",
            cardDesc: "The eight self-manifested Ganesha shrines around Pune — a compact and much-loved Maharashtrian circuit.",
            includes: "Traditional sequencing, temple-town meals, priest-led sankalpa.",
            itineraryId: 'maharashtra',
            duration: "3–4 days",
            season: "Year-round, best August–February",
            img: "/assets/Maharashtra.jpg"
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
    hero: {
      img: "/assets/aarti-Cr2kuE6b.jpg",
      eyebrow: "Experiences",
      h1: "What a journey feels like, not just where it goes",
      sub: "Every Yugatirtha itinerary carries at least one moment you could not have booked yourself — an early sanctum, a village ritual, a silence at altitude."
    },
    items: [
      {
        id: "rituals",
        title: "Temple rituals & darshan access",
        desc: "Bhasma aarti at Ujjain, abhishekam before the crowds, and priests who explain each offering as it is made.",
        img: "/assets/temple-south-CC6aHc0Q.jpg",
        alt: "Priest performing a temple ritual before a stone sanctum",
        span: "lg:col-span-2 lg:row-span-2"
      },
      {
        id: "sunrise",
        title: "Sacred sunrise & sunset",
        desc: "First light on Kanchenjunga, evening aarti from a boat on the Ganga, the last sun over Dwarka.",
        img: "/assets/hero-himalaya-Ben1uNJZ.jpg",
        alt: "Sunrise over Himalayan peaks with a monastery in the foreground",
        span: ""
      },
      {
        id: "traditions",
        title: "Local pilgrim traditions",
        desc: "Walk a parikrama with village pilgrims, share prasad at a community kitchen, learn a chant properly.",
        img: "/assets/aarti-Cr2kuE6b.jpg",
        alt: "Pilgrims holding lamps during an evening river ceremony",
        span: ""
      },
      {
        id: "meditation",
        title: "Meditation & yoga add-ons",
        desc: "Riverside practice in Rishikesh, silent hours in a Spiti monastery, ayurveda days in Kerala.",
        img: "/assets/kerala-JKm5YrGV.jpg",
        alt: "Quiet backwater morning in Kerala suited to meditation",
        span: "lg:col-span-2"
      },
      {
        id: "walks",
        title: "Storytelling temple-town walks",
        desc: "Madurai, Thanjavur, Varanasi and Bhubaneswar read as living texts — iconography, guilds and gods.",
        img: "/assets/rajasthan-Dznk4KEj.jpg",
        alt: "Old temple town street with historic stone architecture",
        span: ""
      },
      {
        id: "weddings",
        title: "Sacred Weddings",
        desc: "Celebrate your union amidst ancient temples, serene landscapes, and deeply rooted spiritual traditions across India.",
        img: "/assets/sacred-weddings.jpg",
        alt: "A traditional Indian wedding ceremony in a temple courtyard",
        span: ""
      }
    ]
  },

  about: {
    hero: [
      {
        img: "/assets/hero-temple-south.jpg",
        eyebrow: "Our · Story",
        h1: "Who are we?",
        h1Italic: "It began in the mountains",
        sub: "Curating soulful journeys since 2010."
      },
      {
        img: "/assets/hero-spiti.jpg",
        eyebrow: "Our · Vision",
        h1: "The",
        h1Italic: "Philosophy.",
        sub: "Guided by a deep respect for authentic exploration."
      },
      {
        img: "/assets/hero-aarti.jpg",
        eyebrow: "Our · People",
        h1: "Meet The",
        h1Italic: "Curators.",
        sub: "Passionate travelers dedicated to crafting your perfect path."
      }
    ],
    connect: [
      {
        h1: "OUR MISSION",
        quote: "To open India's sacred geography to travellers who want more than a sight — and to do it with the care the places themselves deserve."
      }
    ],
    story: {
      title: "The Story Behind Yugatirtha",
      paragraphs: [
        "Some journeys begin with a destination. Mine began with a question. As I travelled across India, I often found myself wondering how much of this country we truly know.",
        "We know the famous cities. We know the popular monuments. We know the destinations that appear on every travel itinerary. But beyond them, I began to discover another India.",
        "An India hidden behind narrow village roads. An India where ancient temples still stand quietly in the mountains, carrying stories that have survived for centuries. An India where forgotten pilgrimage routes continue to lead travellers towards places of faith. An India where culture is not displayed in museums—it is still lived every day.",
        "The more I travelled, the more I realised that some of India's greatest treasures were not necessarily the ones everyone was talking about. They were often the places we were slowly forgetting.",
        "And somewhere along those journeys, a thought stayed with me: What if travel could help us remember? What if a journey could be more than checking destinations off a list? What if travelling through India could help us reconnect—with our history, our spirituality, our culture and perhaps even with ourselves?",
        "That thought eventually became Yugatirtha."
      ]
    },
    meaning: {
      title: "The Meaning of the Journey",
      paragraphs: [
        "The name itself carries the idea behind everything we want to build.",
        "Yuga represents an era—a journey through time. Tirtha represents a sacred crossing, a place where a journey becomes something deeper. Together, Yugatirtha represents a sacred journey across the ages.",
        "Because India is not just a country to travel through. It is a civilisation to experience.",
        "Every ancient temple, every forgotten monument, every sacred river and every old pilgrimage route carries a story from another time. Yet these stories are still alive. They are waiting to be discovered."
      ]
    },
    philosophy: {
      title: "Why Yugatirtha Was Born",
      paragraphs: [
        "Yugatirtha was born from the desire to travel differently. To slow down. To go beyond the obvious. To take the roads that are not always included in travel brochures.",
        "To sit quietly in an ancient temple instead of rushing to the next destination. To listen to the stories of local people. To understand why a particular place has remained sacred for hundreds or even thousands of years.",
        "And to remind ourselves that sometimes the most meaningful places are not the most famous ones.",
        "We want to explore the India that exists beyond mainstream tourism. The hidden shrines. The forgotten heritage. The ancient traditions. The sacred landscapes. The stories that deserve to be remembered."
      ]
    },
    ethos: {
      title: "This Is More Than a Travel Company",
      paragraphs: [
        "Yugatirtha is not just about taking people from one destination to another. It is about creating experiences that stay with you long after the journey ends.",
        "A journey where you don't just see a temple—but understand its story. Where you don't just visit a village—but experience its culture. Where you don't simply travel through a landscape—but understand why generations before you considered it sacred.",
        "For some, Yugatirtha may be a journey towards spirituality. For others, it may be a journey into history and heritage. For some, it may simply be an opportunity to experience a side of India they never knew existed.",
        "But for all of us, we hope it becomes a reminder. A reminder of where we come from. A reminder of the stories that shaped us. And a reminder that even in a rapidly changing world, some things are worth slowing down for."
      ]
    },
    future: {
      title: "The Journey Continues",
      paragraphs: [
        "Yugatirtha began with a curiosity to explore India. But today, it carries a much bigger purpose.",
        "To rediscover what time has hidden. To bring forgotten stories back into the conversation. To create meaningful journeys for those searching for something beyond ordinary travel. And to help people see India not just as a destination, but as a living journey through time.",
        "Because perhaps the greatest journeys are not always about finding something new. Sometimes, they are about rediscovering something that was always there.",
        "That is the journey of Yugatirtha. JOURNEYS THROUGH TIME"
      ]
    }
  },

  contact: {
    hero: [
      {
        img: "/assets/hero-temple-south.jpg",
        eyebrow: "Contact",
        h1: "Let's plan your crossing",
        alt: "Illuminated South Indian temple at dusk"
      },
      {
        img: "/assets/hero-aarti.jpg",
        eyebrow: "Reach Out",
        h1: "Every journey begins with a conversation",
        alt: "Ganga Aarti ceremony at dusk"
      },
      {
        img: "/assets/hero-spiti.jpg",
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
    name: "Yash",
    photo: "/assets/founder.jpg",
    bio: "Yash is a travel entrepreneur and expedition leader with hands-on experience guiding journeys across some of India's most breathtaking and remote landscapes, including Spiti Valley and Ladakh. What began as a passion for the mountains grew into a deeper calling — to help travellers discover the spiritual heart of India.",
    quote: "Travel, at its best, is a pilgrimage — a crossing (tirtha) through time (yuga) that connects people not just to places, but to something older and deeper than themselves."
  },

  itineraries: {
    ...domesticSiteConfig.itineraries,
    ...internationalSiteConfig.itineraries,
    ...spiritualSiteConfig.itineraries,
  },
};

export { domesticSiteConfig, internationalSiteConfig, spiritualSiteConfig };

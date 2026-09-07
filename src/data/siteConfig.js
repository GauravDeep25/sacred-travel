export const siteConfig = {
  company: {
    name: "Yugatirtha",
    tagline: "JOURNEYS THROUGH TIME",
    logo: "Yugatirtha",
    whatsapp: "8591262424",
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
        h1: "Rediscover the soul",
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
      { value: 2400, label: "Travellers guided", suffix: "+" },
      { value: 180, label: "Curated journeys", suffix: "+" },
      { value: 40, label: "Spiti & Ladakh expeditions", suffix: "+" },
      { value: 12, label: "Jyotirlingas covered", suffix: "" },
      { value: 4, label: "Dham Covered", suffix: "" }
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
            cardTitle: "Himachal & Spiti Circuit",
            cardDesc: "Shimla to Kaza through Kinnaur, Tabo and Key — the route the founder has run for a decade.",
            label: "Himachal",
            itineraryId: 'himachal',
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
            img: "/assets/temple-south-CC6aHc0Q.jpg",
            duration: "6 nights / 7 days",
            price: "From ₹38,000"
          },
          { 
            cardTitle: "Gujarat: Rann & Temple Towns",
            cardDesc: "The white Rann, Modhera sun temple, Somnath and the craft villages of Kutch.",
            label: "Gujarat", 
            itineraryId: 'gujarat',
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
            itineraryId: 'kerala',
            img: "/assets/kerala-JKm5YrGV.jpg",
            duration: "7 nights / 8 days",
            price: "From ₹44,000"
          },
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
            itineraryId: 'andhrapradesh',
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
            itineraryId: 'bali',
            img: "/assets/intl-bali-Ck8GSayl.jpg",
            duration: "6 nights / 7 days",
            price: "From ₹92,000"
          },
          { 
            cardTitle: "Vietnam & Thailand Highlights",
            cardDesc: "Hanoi, Halong Bay, Bangkok's temples and Chiang Mai's northern monasteries.",
            label: "Vietnam & Thailand",
            itineraryId: 'vietnam',
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
            itineraryId: 'georgia',
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
            itineraryId: 'uttarakhand',
            duration: "10–12 days",
            season: "May–June, September–October",
            img: "/assets/spiritual-north-NuyL8ZKr.jpg"
          },
          {
            cardTitle: "Panch Kedar",
            cardDesc: "Five Shiva shrines — Kedarnath, Tungnath, Rudranath, Madhyamaheshwar and Kalpeshwar — where the Pandavas are said to have found the lord hidden in the form of a bull.",
            includes: "Graded trekking support, village homestays, porters, and a guide versed in the Mahabharata narrative of each shrine.",
            itineraryId: 'uttarakhand',
            duration: "14–16 days",
            season: "May–June, September–October",
            img: "/assets/hero-himalaya-Ben1uNJZ.jpg"
          },
          {
            cardTitle: "Kashi · Prayagraj · Ayodhya",
            cardDesc: "The Ganga plain's ancient triad — the city of light, the confluence of rivers, and the birthplace city of Rama.",
            includes: "Ghat-side stays, private aarti seating, boat darshan at dawn, temple access.",
            itineraryId: 'uttarpradesh',
            duration: "6–7 days",
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
            duration: "8–9 days",
            season: "November–February",
            img: "/assets/temple-south-CC6aHc0Q.jpg"
          },
          {
            cardTitle: "Chola Temple Circuit",
            cardDesc: "Thanjavur, Gangaikonda Cholapuram and Darasuram — the imperial Chola temples, and the high-water mark of South Indian stone architecture.",
            includes: "Art-historian guide, heritage stays, Bharatanatyam or nagaswaram evening.",
            itineraryId: 'tamilnadu',
            duration: "6 days",
            season: "November–February",
            img: "/assets/hero-temple-south.jpg"
          },
          {
            cardTitle: "Tirupati & Rameswaram",
            cardDesc: "Venkateshwara on the seven hills and the island shrine where Rama is said to have worshipped Shiva before crossing to Lanka.",
            includes: "Assisted darshan slots, sacred bathing arrangements, Dhanushkodi excursion.",
            itineraryId: 'andhrapradesh',
            duration: "5–6 days",
            season: "October–March",
            img: "/assets/kerala-JKm5YrGV.jpg"
          }
        ] 
      },
      east: {
        bannerTitle: "East · Sacred circuits",
        bannerDesc: "Shakti country — the goddess temples of Bengal, Assam and Odisha, and the great coastal seat of Jagannath at Puri.",
        img: "/assets/aarti-Cr2kuE6b.jpg",
        cards: [
          {
            cardTitle: "Shakti Peeth Pilgrimage (East)",
            cardDesc: "Kamakhya, Kalighat, Tarapith and Jwalamukhi — the places where Sati's body is said to have fallen, each a distinct face of the goddess.",
            includes: "Morning puja participation, local priest introductions, respectful briefing on tantric traditions.",
            duration: "9–10 days",
            season: "October–March",
            img: "/assets/aarti-Cr2kuE6b.jpg"
          },
          {
            cardTitle: "Puri, Konark & Bhubaneswar",
            cardDesc: "The Jagannath temple, the sun chariot at Konark and the Lingaraja temple — Odisha's Kalinga architecture at its fullest.",
            includes: "Coastal stays, temple town walks, Odissi performance evening.",
            itineraryId: 'odisha',
            duration: "5–6 days",
            season: "November–February",
            img: "/assets/northeast-D8OXmwI_.jpg"
          },
          {
            cardTitle: "Gaya & Bodh Gaya",
            cardDesc: "Pind daan at the Vishnupad temple and the Bodhi tree where the Buddha's awakening is remembered — two traditions, one riverbank.",
            includes: "Ritual coordination for ancestral rites, monastery visits, quiet meditation time.",
            duration: "4 days",
            season: "November–February",
            img: "/assets/hero-aarti.jpg"
          }
        ] 
      },
      west: {
        bannerTitle: "West · Sacred circuits",
        bannerDesc: "Jyotirlinga country and the coastal shrines of Gujarat and Maharashtra, with the Sahyadri caves in between.",
        img: "/assets/rajasthan-Dznk4KEj.jpg",
        cards: [
          {
            cardTitle: "Western Jyotirlinga Circuit",
            cardDesc: "Somnath, Nageshwar, Trimbakeshwar, Bhimashankar, Grishneshwar and Mahakaleshwar — six of the twelve lights of Shiva within one region.",
            includes: "Bhasma aarti registration at Ujjain, sunrise darshans, comfortable road transfers, Sanskrit chanting sessions.",
            itineraryId: 'maharashtra',
            duration: "9–10 days",
            season: "October–March",
            img: "/assets/rajasthan-Dznk4KEj.jpg"
          },
          {
            cardTitle: "Dwarka & Saurashtra Coast",
            cardDesc: "Krishna's kingdom by the Arabian sea, with Bet Dwarka, Somnath and the Girnar climb nearby.",
            includes: "Coastal stays, boat crossings, Girnar ropeway or guided ascent.",
            itineraryId: 'gujarat',
            duration: "6 days",
            season: "November–February",
            img: "/assets/hero-spiti.jpg"
          },
          {
            cardTitle: "Ashtavinayak Yatra",
            cardDesc: "The eight self-manifested Ganesha shrines around Pune — a compact and much-loved Maharashtrian circuit.",
            includes: "Traditional sequencing, temple-town meals, priest-led sankalpa.",
            itineraryId: 'maharashtra',
            duration: "3–4 days",
            season: "Year-round, best August–February",
            img: "/assets/temple-south-CC6aHc0Q.jpg"
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
        img: "/assets/hero-spiti.jpg",
        eyebrow: "Curated · Experiences",
        h1: "Beyond",
        h1Italic: "sightseeing.",
        sub: "Darshan access, sunrise rituals, storytelling walks through temple towns, meditation and yoga add-ons."
      },
      {
        img: "/assets/hero-aarti.jpg",
        eyebrow: "Ritual · Immersion",
        h1: "Where the sacred",
        h1Italic: "becomes personal.",
        sub: "Private ceremonies, after-hours access, and guides who know the living tradition behind the stone."
      },
      {
        img: "/assets/hero-temple-south.jpg",
        eyebrow: "Curated · Add-ons",
        h1: "Every journey,",
        h1Italic: "deeper.",
        sub: "Layer a bespoke experience onto any pilgrimage or cultural tour — or make it the whole trip."
      }
    ],
    intro: {
      eyebrow: "What we offer",
      title: "Experiences, not excursions",
      body: "These are not add-ons. They are the moments that stay with you long after the journey ends — private darshans arranged before the gates open, dawn boat rides with a temple priest, storytelling walks through a fort town with a local historian. Each one is built around genuine access and genuine reverence."
    },
    categories: [
      {
        id: "darshan",
        eyebrow: "Sacred access",
        title: "Darshan & Ritual",
        desc: "Private or priority darshan at major shrines. Assisted abhishekam, bhasma aarti registration at Ujjain, ghat-side seating at Varanasi, and pre-dawn puja participation coordinated with temple priests.",
        img: "/assets/aarti-Cr2kuE6b.jpg",
        tags: ["Varanasi Ganga Aarti", "Tirupati darshan access", "Bhasma Aarti — Ujjain", "Kedarnath priority entry", "Abhishekam participation"]
      },
      {
        id: "walks",
        eyebrow: "On foot, slowly",
        title: "Storytelling Walks",
        desc: "Guided walks through temple towns and heritage quarters with local historians, Sanskrit scholars, and artists who carry the living knowledge of a place. Madurai, Hampi, Varanasi, Orchha, and more.",
        img: "/assets/temple-south-CC6aHc0Q.jpg",
        tags: ["Temple town walks — Madurai", "Hampi ruined city", "Old Varanasi ghats", "Orchha after dark", "Chidambaram architecture tour"]
      },
      {
        id: "wellness",
        eyebrow: "Body & mind",
        title: "Yoga & Meditation",
        desc: "Structured morning practices with trained teachers in the right setting — Rishikesh at the Ganga bank, Mysore's Ashtanga lineage, or a quiet meditation day at a Himalayan monastery.",
        img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
        tags: ["Rishikesh Ganga-bank yoga", "Mysore Ashtanga — traditional shala", "Vipassana day retreat", "Monastery sit — Spiti", "Pranayama at sunrise"]
      },
      {
        id: "culinary",
        eyebrow: "Taste & tradition",
        title: "Culinary & Craft",
        desc: "Meals cooked in temple kitchens, craft village visits, sari-weaving demonstrations in Kanchipuram, a Marwari thali with a heritage family in Shekhawati, or a Chettinad cooking class at a mansion.",
        img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=1200",
        tags: ["Temple langar — Amritsar", "Kanchipuram silk weaving", "Shekhawati fresco village", "Chettinad cooking class", "Onam Sadhya — Kerala"]
      },
      {
        id: "wilderness",
        eyebrow: "Wild India",
        title: "Wilderness & Stars",
        desc: "Desert nights under a million stars at Rann of Kutch, high-altitude camping above Spiti, private wildlife safaris in Bandhavgarh, or a river camp on the Kali-Gandaki gorge.",
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
        tags: ["Rann of Kutch under stars", "Spiti high-altitude camp", "Kali-Gandaki gorge", "Bandhavgarh private safari", "Valley of Flowers trek"]
      },
      {
        id: "heritage",
        eyebrow: "Living history",
        title: "Heritage Stays",
        desc: "Nights in royal havelis, converted forts, planter bungalows and palace guest quarters — chosen not for luxury branding but for their authentic relationship to the place and its people.",
        img: "/assets/rajasthan-Dznk4KEj.jpg",
        tags: ["Shekhawati haveli stay", "Darbhanga palace — Madhubani", "Coorg planter bungalow", "Jaisalmer fort quarter", "Chettinad mansion — Karaikudi"]
      }
    ],
    process: [
      {
        number: "01",
        title: "Tell us what moves you",
        desc: "A single message is all it takes. Tell us the destination, the kind of access you're looking for, and how many in your group. We'll take it from there."
      },
      {
        number: "02",
        title: "We research the real access",
        desc: "Our team speaks to the priests, the local experts, the temple trusts. We find out what's actually possible — not just what's advertised."
      },
      {
        number: "03",
        title: "You receive a tailored proposal",
        desc: "A clear itinerary with honest timings, honest costs, and honest descriptions of what to expect. No package language."
      },
      {
        number: "04",
        title: "We walk beside you",
        desc: "On the ground, our guides carry the knowledge and the contacts — so your attention can be entirely on the experience itself."
      }
    ],
    testimonials: [
      {
        quote: "The Bhasma Aarti access in Ujjain was something I had been trying to arrange for three years. Yugatirtha sorted it in a single call.",
        name: "Rohan Mehta",
        city: "Bengaluru"
      },
      {
        quote: "The storytelling walk through Hampi was worth the entire trip. Our guide knew the iconography of every panel — it transformed ruins into a living city.",
        name: "Claire Dubois",
        city: "Paris"
      },
      {
        quote: "Waking before dawn at Kedarnath, with no crowds and a guide who knew the morning prayers — that is something I will carry for the rest of my life.",
        name: "Priya Nair",
        city: "Dubai"
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
    connect:[
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
    kashmir: [
      {
        id: 'kashmir-1',
        title: `Kashmir`,
        duration: `Kashmir 4N/5D`,
        inclusions: [
          `Entire travel as per the itinerary in a private vehicle`,
          `Accommodation for 4 Nights on a Double Sharing Basis (1 night in Srinagar in a houseboat, 1 night in Srinagar in a hotel, 1 night in Pahalgam in a hotel, 1 night in Gulmarg in a hotel)`,
          `08 Meals (Breakfast from Day 2 to Day 5, Dinner from Day 1 to Day 4)`,
          `Driver Charges, Permits, Tolls, Fuel & Parking charges`,
          `Internal transfer to Aru Valley, Betaab Valley and Chandanwari`,
          `Airport/ Railway Station Pickup and Drop`,
          `Shikara Ride (1 Hr Shikara Ride)`,
          `Gondola Cable car phase 1 tickets.`,
          `Candle Light Dinner , Cake And Room Decoration in Houseboat."`,
        ],
        days: [
          {
            title: `Day 1 - Arrival in Srinagar. Local Sightseeing in Srinagar.`,
            activities: [`Arrive at Srinagar Airport and meet our representative.`, `Transfer to the hotel and check in.`, `Proceed for local sightseeing covering Mughal Gardens, Nishat Bagh, Shalimar Bagh and Shankaracharya Temple, subject to time and weather conditions.`, `Evening free to explore the local market or enjoy a relaxing Shikara ride on Dal Lake.`, `Overnight stay in Srinagar.`],
          },
          {
            title: `Day 2 - Srinagar to Gulmarg. Indulge in winter sports.`,
            activities: [`Breakfast and check out from the hotel.`, `Drive towards Gulmarg through the scenic Kashmir Valley.`, `Arrive in Gulmarg and check in.`, `Enjoy the beautiful snow-covered landscapes and indulge in winter activities such as snowboarding, skiing and sledging, subject to weather and operational conditions.`, `Optional Gondola ride, subject to availability and weather conditions.`, `Evening at leisure.`, `Overnight stay in Gulmarg.`],
          },
          {
            title: `Day 3 - Gulmarg to Pahalgam. Enroute Visit Avantipur Ruins.`,
            activities: [`Breakfast and check out from the hotel.`, `Proceed towards Pahalgam.`, `En route, visit the historic Avantipur Ruins, known for its ancient temple remains.`, `Continue the scenic drive towards Pahalgam through beautiful valleys and countryside.`, `Arrive in Pahalgam and check in to the hotel.`, `Evening free to relax and enjoy the peaceful surroundings.`, `Overnight stay in Pahalgam.`],
          },
          {
            title: `Day 4 - Pahalgam to Srinagar. Visit the Aru Valley, Betaab Valley and Chandanwari`,
            activities: [`Breakfast and check out from the hotel.`, `Explore the beautiful valleys of Pahalgam, including Aru Valley, Betaab Valley and Chandanwari, subject to local vehicle regulations and weather conditions.`, `Enjoy the scenic Himalayan landscapes and spend time by the Lidder River.`, `Proceed towards Srinagar.`, `Arrive in Srinagar and check in to the hotel.`, `Evening free for leisure and shopping.`, `Overnight stay in Srinagar.`],
          },
          {
            title: `Day 5 - Departure. Depart with a bag of happy memories.`,
            activities: [`Breakfast and check out from the hotel.`, `Transfer to Srinagar Airport as per your departure schedule.`, `Depart with a bag full of happy memories from Kashmir.`],
          },
        ],
      },
      {
        id: 'kashmir-2',
        title: `Kashmir`,
        duration: `Kashmir 5N/6D`,
        inclusions: [
          `Travel as per the Itinerary in Sedan`,
          `Accommodation for 5 Nights on Double Sharing Basis (1 night in Srinagar in Houseboat, 2 nights in Srinagar in a hotel, 1 night in Pahalgam in a hotel, 1 night in Gulmarg in a hotel)`,
          `10 Meals (Breakfast from Day 2 to Day 6, Dinner from Day 1 to Day 5)`,
          `Driver Charges, Permits, Tolls, Fuel & Parking charges`,
          `Airport/ Railway Station Pickup and Drop`,
          `Shikara Ride (1 Hr Shikara Ride)`,
          `Honeymoon inclusions - candlelight dinner, flower decoration and cake`,
          `Gondola Cable car phase 1 tickets.`,
        ],
        days: [
          {
            title: `Day 1 - Arrival in Srinagar. Stay in a houseboat.`,
            activities: [`Arrive at Srinagar Airport and meet our representative.`, `Transfer to the famous Dal Lake and check in to your traditional Kashmiri houseboat.`, `Enjoy a relaxing Shikara ride on Dal Lake, surrounded by beautiful mountains and floating markets.`, `Evening at leisure to experience the peaceful atmosphere of the lake.`, `Overnight stay in a houseboat in Srinagar.`],
          },
          {
            title: `Day 2 - Srinagar to Gulmarg. Indulge in winter sports.`,
            activities: [`Breakfast and check out from the houseboat.`, `Drive towards Gulmarg through the scenic Kashmir Valley.`, `Arrive in Gulmarg and check in to the hotel.`, `Spend the day enjoying the snow-covered landscape and optional winter activities such as skiing, snowboarding and sledging, subject to weather and operational conditions.`, `Optional Gulmarg Gondola ride, subject to availability and weather conditions.`, `Evening at leisure.`, `Overnight stay in Gulmarg.`],
          },
          {
            title: `Day 3 - Gulmarg to Pahalgam. Enroute Visit Avantipur Ruins.`,
            activities: [`Breakfast and check out.`, `Proceed towards the beautiful valley of Pahalgam.`, `En route, visit the historic Avantipur Ruins, known for its ancient temple remains.`, `Continue the scenic drive towards Pahalgam through the countryside and picturesque valleys.`, `Check in to the hotel upon arrival.`, `Evening free to relax and enjoy the peaceful surroundings.`, `Overnight stay in Pahalgam.`],
          },
          {
            title: `Day 4 - Pahalgam to Srinagar. Local Sightseeing in Srinagar.`,
            activities: [`Breakfast and check out from the hotel.`, `Enjoy some time around Pahalgam and the scenic Lidder River.`, `Proceed towards Srinagar.`, `On arrival, visit the beautiful Mughal Gardens – Nishat Bagh and Shalimar Bagh.`, `Visit Shankaracharya Temple, subject to time, weather and local conditions.`, `Evening free for shopping or leisure.`, `Overnight stay in Srinagar.`],
          },
          {
            title: `Day 5 - Excursion to Sonmarg. Pony Ride to Thajiwas Glacier."`,
            activities: [`Breakfast at the hotel.`, `Proceed for a full-day excursion to Sonmarg, surrounded by spectacular Himalayan landscapes.`, `Enjoy the scenic beauty of Sonmarg and take a pony ride towards Thajiwas Glacier, subject to weather and local conditions.`, `Spend time enjoying the snow-covered surroundings.`, `Return to Srinagar by evening.`, `Overnight stay in Srinagar.`],
          },
          {
            title: `Day 6 - Departure. Depart with a bag of happy memories.`,
            activities: [`Breakfast and check out from the hotel.`, `Transfer to Srinagar Airport as per your departure schedule.`, `Depart with a bag full of happy memories from Kashmir.`],
          },
        ],
      },
      {
        id: 'kashmir-3',
        title: `Kashmir`,
        duration: `Kashmir 6N/7D`,
        inclusions: [
          `"Travel as per the Itinerary in Sedan/ SUV (as per group size)`,
          `Accommodation for 6 Nights on Sharing Basis (1 night in Srinagar in Houseboat, 2 nights in Srinagar in Hotel, 2 nights in Pahalgam in a hotel, 1 night in Gulmarg in a hotel)`,
          `12 Meals (Breakfast from Day 2 to Day 7, Dinner from Day 1 to Day 6)`,
          `Driver Charges, Permits, Tolls, Fuel & Parking charges`,
          `Airport/ Railway Station Pickup and Drop`,
          `Shikara Ride (1 Hr Shikara Ride)`,
          `Welcome drink on arrival.`,
          `Full day local sightseeing in Srinagar..`,
          `Sonmarg Excursion transfer.`,
          `Honeymoon Inclusion - Candle Light Dinner , Cake And Room Decoration in Houseboat`,
          `Gondola cable car Phase 1 Tickets."`,
        ],
        days: [
          {
            title: `Day 1 - Arrival In Srinagar. Local Sightseeing In Srinagar.`,
            activities: [`Arrive at Srinagar Airport and meet our representative.`, `Transfer to the hotel and check in.`, `Visit Mughal Gardens – Nishat Bagh and Shalimar Bagh, followed by Shankaracharya Temple, subject to time and local conditions.`, `Evening free for leisure and shopping.`, `Overnight stay in Srinagar.`],
          },
          {
            title: `Day 2 - Excursion To Sonmarg. Pony Ride To Thajiwas Glacier.`,
            activities: [`Breakfast at the hotel and proceed for a day excursion to Sonmarg.`, `Enjoy the spectacular Himalayan landscapes and visit Thajiwas Glacier by pony ride, subject to weather and local conditions.`, `Spend time enjoying the snow-covered surroundings of Sonmarg.`, `Return to Srinagar by evening.`, `Overnight stay in Srinagar.`],
          },
          {
            title: `Day 3 - Srinagar To Gulmarg. Indulge In Winter Sports.`,
            activities: [`Breakfast and check out from the hotel.`, `Drive towards Gulmarg through the scenic Kashmir Valley.`, `Check in to the hotel and enjoy the snow-covered landscapes.`, `Indulge in winter activities such as skiing, snowboarding and sledging, subject to weather and operational conditions.`, `Optional Gondola ride, subject to availability.`, `Overnight stay in Gulmarg.`],
          },
          {
            title: `Day 4 - Gulmarg To Pahalgam. Enroute Visit Avantipur Ruins.`,
            activities: [`Breakfast and check out.`, `Proceed towards Pahalgam through the beautiful Kashmir countryside.`, `En route, visit the historic Avantipur Ruins.`, `Continue towards Pahalgam and check in to the hotel.`, `Evening free to relax and enjoy the peaceful surroundings.`, `Overnight stay in Pahalgam.`],
          },
          {
            title: `Day 5 - Full Day Tour To Aru & Betaab Valley With Chandanwari.`,
            activities: [`Breakfast at the hotel.`, `Proceed for a full-day excursion covering Aru Valley, Betaab Valley and Chandanwari, subject to weather and local vehicle regulations.`, `Enjoy the scenic beauty of the mountains, valleys and Lidder River.`, `Return to the hotel by evening.`, `Overnight stay in Pahalgam.`],
          },
          {
            title: `Day 6 - Pahalgam To Srinagar. Evening Shikara Ride & Houseboat Stay.`,
            activities: [`Breakfast and check out from the hotel.`, `Drive back towards Srinagar.`, `On arrival, enjoy a relaxing Shikara ride on Dal Lake.`, `Experience the floating markets and beautiful Himalayan surroundings.`, `Check in to a traditional Kashmiri houseboat.`, `Evening at leisure.`, `Overnight stay in a houseboat in Srinagar.`],
          },
          {
            title: `Day 7 - Departure. Depart With A Bag Of Happy Memories.`,
            activities: [`Breakfast and check out from the houseboat.`, `Transfer to Srinagar Airport as per your departure schedule.`, `Depart with a bag full of happy memories from Kashmir.`],
          },
        ],
      },
    ],
    ladakh: [
      {
        id: 'ladakh-1',
        title: `Ladakh`,
        duration: `Ladakh 5N/6D`,
        inclusions: [
          `Entire travel from Leh to Leh by Innova`,
          `Stay for 5 nights – 3 nights in a hotel at Leh, 1 night in a Hotel at Nubra Valley, 1 night in cottage at Pangong Tso on a double sharing basis`,
          `A total of 10 meals – 1 meal Day 1 (D) + 2 meals Day 2 (B + D) + 2 meals Day 3 (B+D) + 2 meals Day 4 (B+D) + 2 meals Day 5 (B+D) + 1 meal Day 6 (B)`,
          `All inner line permits for the trip`,
          `Driver Night Charges, Toll Tax, Parking Charges, etc.`,
          `On call assistance throughout the trip`,
          `An Oxygen Cylinder 24X7 in the car in case of emergency`,
          `Airport pick or drop. ( Private taxi won't be provided, taxis will be available on pre-decided slots time as per the Flights timings).`,
          `All inner line permits for the trip - Change to- Environmental fees as applicable`,
        ],
        days: [
          {
            title: `Day 1 – Arrival in Leh. Leisure Day for Acclimatization.`,
            activities: [`Arrive at the Leh airport after a scenic flight over the Himalayas.`, `Meet our representative who will help with your transfers to the hotel.`, `Complete the check-in formalities and rest for some time.`, `You can then spend the rest of the day at leisure.`, `We suggest you go for a short walk around your hotel, to acclimate yourself to the altitude better.`, `After coming back from the hotel our trip captain will provide you with a brief of the journey.`, `Overnight stay in Leh.`],
          },
          {
            title: `Day 2 – Leh Local Sightseeing- Visit Gurudwara Pathar Sahib, Shanti Stupa, etc.`,
            activities: [`Wake up in your hotel room in Leh and have a delicious breakfast.`, `After having breakfast, get ready for local sightseeing.`, `Our first stop will be the iconic Shanti Stupa for a mesmerizing view of Leh and its surroundings.`, `Moving forward, we will stop at Gurdwara Pathar Sahib, a sacred place that is believed to have imprints of Sikh Guru Nanak Dev Ji.`, `Next, we will also witness the rare phenomenon at the Magnetic Hill where the natural surroundings create an optical illusion that makes it look like vehicles are rolling uphill.`, `Further, we will stop at the Sangam Point where the Zanskar and Indus rivers confluence.`, `Next, we can explore the Hall of Fame, which honors the Indian soldiers who died in the wars and battles fought in Ladakh.`, `You can spend your evening exploring the vibrant local Leh market and indulging in some delicious food and drinks at the cozy cafes around.`, `After a day of exploration and adventure, we will return to our hotel.`, `Enjoy a delicious dinner, and then get some well-deserved rest.`, `Overnight stay in Leh.`],
          },
          {
            title: `Day 3 – Leh To Nubra Valley via Khardung-La - one of the highest motorable roads`,
            activities: [`Wake up in the Nubra Valley and get ready for a delicious breakfast.`, `We will then get ready for the exciting journey on one of the highest motorable roads.`, `Our first stop will be the iconic Khardung-La - one of the highest motorable roads in the world at a height of 5359 meters.`, `Next, we will stop at the Diskit Monastery, the biggest monastery of Nubra Valley which is famous as the home of 106 feet of Maitreya Buddha statue.`, `Further, we will pass over Shyok River to reach Nubra Valley, also known as Ldumra or the Valley of Flowers.`, `If time permits, you can also take part in some adventure like a double-humped Bactrian camel safari or an ATV ride on the deserted land of Hunder Sand dunes.`, `We will then check into the hotel rooms and have a hearty dinner.`, `Overnight stay in Nubra Valley.`],
          },
          {
            title: `Day 4 – Transfer from Nubra to Pangong Via Shyok | Explore colour-changing Lake`,
            activities: [`Wake up in the Nubra Valley and get ready for an adventurous journey to the famous Pangong Tso.`, `While driving, we will cross the charming Agam and Shyok villages which are known for their scenic beauty.`, `Continue the adventurous journey until we are greeted with the majestic views of the famous Pangong Lake which is the highest saltwater lake in the world.`, `Pangong Lake is about 4 km wide on average and at least 136 Km long and is located at an altitude of 4300 meters above sea level.`, `Spend some time around the lake, where you can admire the reflection of the surrounding mountains in the stunning blue lake.`, `You can also click pictures at the famous 3-idiots set here.`, `We will then head to check in at our campsite near the lake and have a delicious dinner.`, `Overnight stay near Pangong Lake.`],
          },
          {
            title: `Day 5 – Transfers from Pangong to Leh via Chang-La at an altitude of 5360 meters`,
            activities: [`Get ready to start the day as you wake up early to witness a breathtaking sunrise from your camp.`, `We will then enjoy a delicious breakfast near the lake, before making our way back to Leh.`, `En route, we will stop at Chang-La, one of the highest motorable roads in the world at a staggering altitude of 5360 meters.`, `Further, we will pass the popular towns of Karu, Thikshey and Shey until we reach Leh.`, `Reach Leh by evening and check-in at the hotel.`, `You can then spend the rest of the evening exploring the Leh local market on your own.`, `Here, you can indulge in shopping, go cafe hopping, and try local delicacies.`, `After a day of exploration and adventure, we will return to our hotel.`, `Enjoy a delicious dinner, and then get some rest in your comfortable bed.`, `Overnight stay in Leh.`],
          },
          {
            title: `Day 6 – Departure from Leh | Tour Concludes`,
            activities: [`Wake up and have a delicious breakfast at your hotel in Leh.`, `Pack your bags and complete the check-out formalities.`, `Our representative will transfer you to the Leh airport for your onward journey.`, `Take a scenic flight back home with unforgettable memories of your Ladakh adventure.`, `Your trip concludes here.`],
          },
        ],
      },
      {
        id: 'ladakh-2',
        title: `Ladakh`,
        duration: `Ladakh 6N/7D`,
        inclusions: [
          `Entire travel from Leh to Leh by Innova`,
          `Stay for 6 nights`,
          `A total of 12 meals`,
          `All inner line permits for the trip`,
          `Driver Night Charges, Toll Tax, Parking Charges, etc.`,
          `On call assistance throughout the trip`,
          `An Oxygen Cylinder 24X7 in the car in case of emergency`,
          `Airport pick or drop. ( Private taxi won't be provided, taxis will be available on pre-decided slots time as per the Flights timings).`,
          `All inner line permits for the trip - Change to- Environmental fees as applicable`,
        ],
        days: [
          {
            title: `Day 1 – Arrival in Leh. Leisure Day for Acclimatization.`,
            activities: [`Arrive at the Leh airport after a scenic flight over the Himalayas.`, `Meet our representative who will help with your transfers to the hotel.`, `Complete the check-in formalities and rest for some time.`, `You can then spend the rest of the day at leisure.`, `We suggest you go for a short walk around your hotel, to acclimate yourself to the altitude better.`, `After coming back from the hotel our trip captain will provide you with a brief of the journey.`, `Overnight stay in Leh.`],
          },
          {
            title: `Day 2 – Leh Local Sightseeing- Visit Gurudwara Pathar Sahib, Shanti Stupa, etc.`,
            activities: [`Wake up in your hotel room in Leh and have a delicious breakfast.`, `After having breakfast, get ready for local sightseeing.`, `Our first stop will be the iconic Shanti Stupa for a mesmerizing view of Leh and its surroundings.`, `Moving forward, we will stop at Gurdwara Pathar Sahib, a sacred place that is believed to have imprints of Sikh Guru Nanak Dev Ji.`, `Next, we will also witness the rare phenomenon at the Magnetic Hill where the natural surroundings create an optical illusion that makes it look like vehicles are rolling uphill.`, `Further, we will stop at the Sangam Point where the Zanskar and Indus rivers confluence.`, `Next, we can explore the Hall of Fame, which honors the Indian soldiers who died in the wars and battles fought in Ladakh.`, `You can spend your evening exploring the vibrant local Leh market and indulging in some delicious food and drinks at the cozy cafes around.`, `After a day of exploration and adventure, we will return to our hotel.`, `Enjoy a delicious dinner, and then get some well-deserved rest.`, `Overnight stay in Leh.`],
          },
          {
            title: `Day 3 – Leh To Nubra Valley via Khardung-La - one of the highest motorable roads`,
            activities: [`Wake up in the Nubra Valley and get ready for a delicious breakfast.`, `We will then get ready for the exciting journey on one of the highest motorable roads.`, `Our first stop will be the iconic Khardung-La - one of the highest motorable roads in the world at a height of 5359 meters.`, `Next, we will stop at the Diskit Monastery, the biggest monastery of Nubra Valley which is famous as the home of 106 feet of Maitreya Buddha statue.`, `Further, we will pass over Shyok River to reach Nubra Valley, also known as Ldumra or the Valley of Flowers.`, `If time permits, you can also take part in some adventure like a double-humped Bactrian camel safari or an ATV ride on the deserted land of Hunder Sand dunes.`, `We will then check into the hotel rooms and have a hearty dinner.`, `Overnight stay in Nubra Valley.`],
          },
          {
            title: `Day 4 – Transfer from Nubra to Pangong Via Shyok | Explore colour-changing Lake`,
            activities: [`Wake up in the Nubra Valley and get ready for an adventurous journey to the famous Pangong Tso.`, `While driving, we will cross the charming Agam and Shyok villages which are known for their scenic beauty.`, `Continue the adventurous journey until we are greeted with the majestic views of the famous Pangong Lake which is the highest saltwater lake in the world.`, `Pangong Lake is about 4 km wide on average and at least 136 Km long and is located at an altitude of 4300 meters above sea level.`, `Spend some time around the lake, where you can admire the reflection of the surrounding mountains in the stunning blue lake.`, `You can also click pictures at the famous 3-idiots set here.`, `We will then head to check in at our campsite near the lake and have a delicious dinner.`, `Overnight stay near Pangong Lake.`],
          },
          {
            title: `Day 5 – Pangong Lake to Tso Moriri via Tsaga La | Experience the Remote Changthang Region`,
            activities: [`Wake up early to witness a breathtaking sunrise over Pangong Lake.`, `After a delicious breakfast, check out from your camp and begin your journey to Tso Moriri.`, `Drive through the remote and rugged landscapes of the Changthang region, passing via Tsaga La, Chushul, and Rezang La.`, `Arrive at the beautiful Tso Moriri Lake, a high-altitude Ramsar wetland known for its rich biodiversity and migratory birds.`, `Check into your camp or guesthouse near the lake and rest for a while.`, `Spend your evening strolling along the pristine shores of the lake and taking in the tranquil atmosphere.`, `Have a warm dinner and an overnight stay near Tso Moriri Lake.`],
          },
          {
            title: `Day 6 – Tso Moriri to Leh via Chumathang | Return to the City`,
            activities: [`Enjoy your breakfast with the stunning views of Tso Moriri Lake in the backdrop.`, `Check out from your accommodation and start your return journey towards Leh.`, `Drive past the scenic Mahe Bridge and the natural hot springs of Chumathang.`, `En route, you can visit the famous Thiksey Monastery and Shey Palace, if time permits.`, `Reach Leh by the evening and check in at your hotel.`, `You have the rest of the evening at leisure to relax or buy some last-minute souvenirs from the Leh market.`, `Enjoy your final dinner in Ladakh and get some sound sleep.`, `Overnight stay in Leh.`],
          },
          {
            title: `Day 7 – Departure from Leh | Tour Concludes`,
            activities: [`Wake up and have a delicious breakfast at your hotel in Leh.`, `Pack your bags and complete the check-out formalities.`, `Our representative will transfer you to the Leh airport for your onward journey.`, `Take a scenic flight back home with unforgettable memories of your Ladakh adventure.`, `Your trip concludes here.`],
          },
        ],
      },
      {
        id: 'ladakh-3',
        title: `Ladakh`,
        duration: `Ladakh 7N/8D`,
        inclusions: [
          `Entire travel from Leh to Leh by Innova`,
          `Stay for 7 nights`,
          `A total of 14 meals`,
          `All inner line permits for the trip`,
          `Driver Night Charges, Toll Tax, Parking Charges, etc.`,
          `On call assistance throughout the trip`,
          `An Oxygen Cylinder 24X7 in the car in case of emergency`,
          `Airport pick or drop. ( Private taxi won't be provided, taxis will be available on pre-decided slots time as per the Flights timings).`,
          `All inner line permits for the trip - Change to- Environmental fees as applicable`,
        ],
        days: [
          {
            title: `Day 1 – Arrival in Leh. Leisure Day for Acclimatization.`,
            activities: [`Arrive at the Leh airport after a scenic flight over the Himalayas.`, `Meet our representative who will help with your transfers to the hotel.`, `Complete the check-in formalities and rest for some time.`, `You can then spend the rest of the day at leisure.`, `We suggest you go for a short walk around your hotel, to acclimate yourself to the altitude better.`, `After coming back from the hotel our trip captain will provide you with a brief of the journey.`, `Overnight stay in Leh.`],
          },
          {
            title: `Day 2 – Leh Local Sightseeing- Visit Gurudwara Pathar Sahib, Shanti Stupa, etc.`,
            activities: [`Wake up in your hotel room in Leh and have a delicious breakfast.`, `After having breakfast, get ready for local sightseeing.`, `Our first stop will be the iconic Shanti Stupa for a mesmerizing view of Leh and its surroundings.`, `Moving forward, we will stop at Gurdwara Pathar Sahib, a sacred place that is believed to have imprints of Sikh Guru Nanak Dev Ji.`, `Next, we will also witness the rare phenomenon at the Magnetic Hill where the natural surroundings create an optical illusion that makes it look like vehicles are rolling uphill.`, `Further, we will stop at the Sangam Point where the Zanskar and Indus rivers confluence.`, `Next, we can explore the Hall of Fame, which honors the Indian soldiers who died in the wars and battles fought in Ladakh.`, `You can spend your evening exploring the vibrant local Leh market and indulging in some delicious food and drinks at the cozy cafes around.`, `After a day of exploration and adventure, we will return to our hotel.`, `Enjoy a delicious dinner, and then get some well-deserved rest.`, `Overnight stay in Leh.`],
          },
          {
            title: `Day 3 – Leh To Nubra Valley via Khardung-La - one of the highest motorable roads`,
            activities: [`Wake up in your hotel room in Leh and have a delicious breakfast.`, `We will then get ready for the exciting journey on one of the highest motorable roads.`, `Our first stop will be the iconic Khardung-La - one of the highest motorable roads in the world at a height of 5359 meters.`, `Next, we will stop at the Diskit Monastery, the biggest monastery of Nubra Valley which is famous as the home of 106 feet of Maitreya Buddha statue.`, `Further, we will pass over from Shyok River to reach Nubra Valley, also known as Ldumra or the Valley of Flowers.`, `If time permits, you can also take part in some adventure like a double-humped Bactrian camel safari or an ATV ride on the deserted land of Hunder Sand dunes.`, `We will then check into the hotel rooms and have a hearty dinner.`, `Overnight stay in Nubra Valley.`],
          },
          {
            title: `Day 4 – Excursion to Turtuk | Visit the Last Village on the Indo-Pak Border`,
            activities: [`Wake up to a beautiful morning in Nubra Valley and have a hearty breakfast.`, `Get ready for an exciting excursion to Turtuk, the last village on the Indo-Pak border.`, `Enjoy a scenic drive through the picturesque landscapes and along the Shyok River.`, `Explore the charming village of Turtuk, interact with the friendly locals, and learn about their unique Balti culture.`, `Take a walk through the lush green apricot orchards and enjoy the stunning views of the Karakoram range.`, `After a day of exploration, drive back to your hotel or camp in Nubra Valley.`, `Enjoy a warm dinner and an overnight stay in Nubra Valley.`],
          },
          {
            title: `Day 5 – Transfer from Nubra to Pangong Via Shyok | Explore colour-changing Lake`,
            activities: [`Wake up in the Nubra Valley and get ready for an adventurous journey to the famous Pangong Tso.`, `While driving, we will cross the charming Agam and Shyok villages which are known for their scenic beauty.`, `Continue the adventurous journey until we are greeted with the majestic views of the famous Pangong Lake which is the highest saltwater lake in the world.`, `Pangong Lake is about 4 km wide on average and at least 136 Km long and is located at an altitude of 4300 meters above sea level.`, `Spend some time around the lake, where you can admire the reflection of the surrounding mountains in the stunning blue lake.`, `You can also click pictures at the famous 3-idiots set here.`, `We will then head to check in at our campsite near the lake and have a delicious dinner.`, `Overnight stay near Pangong Lake.`],
          },
          {
            title: `Day 6 – Pangong Lake to Tso Moriri via Tsaga La | Experience the Remote Changthang Region`,
            activities: [`Wake up early to witness a breathtaking sunrise over Pangong Lake.`, `After a delicious breakfast, check out from your camp and begin your journey to Tso Moriri.`, `Drive through the remote and rugged landscapes of the Changthang region, passing via Tsaga La, Chushul, and Rezang La.`, `Arrive at the beautiful Tso Moriri Lake, a high-altitude Ramsar wetland known for its rich biodiversity and migratory birds.`, `Check into your camp or guesthouse near the lake and rest for a while.`, `Spend your evening strolling along the pristine shores of the lake and taking in the tranquil atmosphere.`, `Have a warm dinner and an overnight stay near Tso Moriri Lake.`],
          },
          {
            title: `Day 7 – Tso Moriri to Leh via Chumathang | Return to the City`,
            activities: [`Enjoy your breakfast with the stunning views of Tso Moriri Lake in the backdrop.`, `Check out from your accommodation and start your return journey towards Leh.`, `Drive past the scenic Mahe Bridge and the natural hot springs of Chumathang.`, `En route, you can visit the famous Thiksey Monastery and Shey Palace, if time permits.`, `Reach Leh by the evening and check in at your hotel.`, `You have the rest of the evening at leisure to relax or buy some last-minute souvenirs from the Leh market.`, `Enjoy your final dinner in Ladakh and get some sound sleep.`, `Overnight stay in Leh.`],
          },
          {
            title: `Day 8 – Departure from Leh | Tour Concludes`,
            activities: [`Wake up and have a delicious breakfast at your hotel in Leh.`, `Pack your bags and complete the check-out formalities.`, `Our representative will transfer you to the Leh airport for your onward journey.`, `Take a scenic flight back home with unforgettable memories of your Ladakh adventure.`, `Your trip concludes here.`],
          },
        ],
      },
    ],
    himachal: [
      {
        id: 'himachal-1',
        title: `Himachal`,
        duration: `Himachal 4N/5D`,
        inclusions: [
          `4 Nights accommodation`,
          `Daily breakfast & dinner`,
          `Private vehicle for all transfers & sightseeing`,
          `Delhi–Shimla & Manali–Delhi volvo`,
          `Kufri, Shimla & Manali sightseeing`,
          `Solang Valley & snow-point excursion`,
          `Driver, fuel, toll & parking charges`,
          `Tour assistance throughout the journey`,
        ],
        days: [
          {
            title: `DAY 0      Delhi to Shimla Departure.`,
            activities: [`Depart from Delhi in the evening/night by overnight Volvo/bus.`, `Travel towards Shimla through the scenic Himalayan foothills.`, `Overnight journey to Shimla.`],
          },
          {
            title: `DAY 1        Kufri Visit - Mall road - Overnight stay in Shimla`,
            activities: [`Arrive in Shimla in the morning.`, `Transfer to the hotel and complete check-in, subject to availability.`, `After some rest, proceed for a visit to Kufri, known for its beautiful mountain landscapes.`, `Enjoy the scenic surroundings and explore the local attractions.`, `Return to Shimla.`, `In the evening, explore Mall Road, Ridge, and the nearby local market.`, `Enjoy shopping, cafés, and the vibrant atmosphere of Shimla.`, `Return to the hotel.`, `Overnight stay in Shimla.`],
          },
          {
            title: `DAY 2        Early morning departure to Manali – Mall Road Visit`,
            activities: [`Enjoy breakfast and check out from the hotel.`, `Start your early morning journey towards Manali.`, `Enjoy the scenic drive through the mountains, valleys, and riverside landscapes.`, `Stop en route for refreshments and lunch.`, `Arrive in Manali and check in to your hotel.`, `After some rest, head out to explore Manali Mall Road.`, `Enjoy shopping, local cafés, restaurants, and the lively atmosphere.`, `Return to the hotel.`, `Overnight stay in Manali.`],
          },
          {
            title: `DAY 3        Solang Valley – Rohtang Pass Visit/Gulaba Snow Point - Overnight Stay in Manali`,
            activities: [`Enjoy breakfast at the hotel.`, `Begin your day with a visit to Solang Valley, famous for its spectacular mountain scenery and adventure activities.`, `Enjoy the beautiful views of the surrounding Himalayan peaks.`, `Continue towards Rohtang Pass if the route is open and permits are available.`, `If Rohtang Pass is not accessible, visit Gulaba Snow Point as an alternative.`, `Spend time enjoying the snow-covered landscapes and taking photographs.`, `Return to Manali in the evening.`, `Relax at the hotel after the day's excursion.`, `Overnight stay in Manali.`],
          },
          {
            title: `DAY 4        Vashishtha Temple Visit – Old Manali – Relax & Chill - Overnight Stay in Manali`,
            activities: [`Enjoy breakfast at the hotel.`, `Visit the peaceful Vashisht Temple and explore the surrounding village.`, `Continue towards Old Manali, known for its charming cafés, narrow lanes, local shops, and relaxed atmosphere.`, `Explore the area at your own pace.`, `Enjoy lunch at one of the local cafés.`, `Spend the afternoon relaxing and enjoying the beautiful surroundings of Manali.`, `Evening at leisure.`, `Return to the hotel.`, `Overnight stay in Manali.`],
          },
          {
            title: `DAY 5        Manali Local Market - Departure to Delhi`,
            activities: [`Enjoy breakfast and check out from the hotel.`, `Spend some time exploring the Manali Local Market.`, `Shop for souvenirs, woollens, handicrafts, and local products.`, `After shopping, begin your journey towards Delhi.`, `Enjoy the scenic drive through the mountains and plains.`, `Continue your overnight journey to Delhi.`],
          },
        ],
      },
      {
        id: 'himachal-2',
        title: `Himachal`,
        duration: `Himachal 5N/6D`,
        inclusions: [
          `4 Nights accommodation in selected hotels`,
          `Daily breakfast & dinner`,
          `Volvo bus tickets: Delhi–Shimla & Manali–Delhi`,
          `Private vehicle for local sightseeing & intercity transfers`,
          `Shimla & Kufri sightseeing`,
          `En route Kullu Valley visit`,
          `Solang Valley & Manali local sightseeing`,
          `Rohtang Pass/Gulaba Snow Point excursion, subject to permits & weather conditions`,
          `Driver, fuel, toll & parking charges`,
          `Tour assistance throughout the journey`,
        ],
        days: [
          {
            title: `DAY 1        Delhi to Shimla. Start a scenic road journey`,
            activities: [`Begin your scenic road journey from Delhi to Shimla.`, `Enjoy the changing landscapes as you travel from the plains into the Himalayan foothills.`, `Stop en route for refreshments and lunch.`, `Arrive in Shimla and check in to your hotel.`, `Evening at leisure to relax and explore the nearby surroundings.`, `Overnight stay in Shimla.`],
          },
          {
            title: `DAY 2        Local sightseeing in Shimla. Excursion to Kufri`,
            activities: [`Enjoy breakfast at the hotel.`, `Begin your local sightseeing tour of Shimla.`, `Visit popular attractions such as The Ridge, Christ Church, Mall Road, and Scandal Point.`, `Later, proceed for an excursion to Kufri, surrounded by beautiful Himalayan landscapes.`, `Enjoy the scenic views and explore the local attractions.`, `Return to Shimla in the evening.`, `Spend the evening at leisure on Mall Road.`, `Overnight stay in Shimla.`],
          },
          {
            title: `DAY 3        Shimla to Manali. En route visit the Kullu Valley`,
            activities: [`Enjoy breakfast and check out from the hotel.`, `Begin your scenic drive towards Manali.`, `Travel through beautiful mountain roads, valleys, and riverside landscapes.`, `En route, visit the picturesque Kullu Valley.`, `Explore the valley and, depending on time, visit local handicraft shops and enjoy the surrounding scenery.`, `Continue towards Manali.`, `Arrive in Manali and check in to your hotel.`, `Spend the evening at leisure.`, `Overnight stay in Manali.`],
          },
          {
            title: `DAY 4        Visit the Solang Valley. Half-Day Local Sightseeing in Manali`,
            activities: [`Enjoy breakfast at the hotel.`, `Visit the beautiful Solang Valley, famous for its panoramic mountain views and adventure activities.`, `Enjoy the scenic surroundings and optional adventure activities, subject to season and local conditions.`, `Return to Manali.`, `After lunch, begin a half-day local sightseeing tour.`, `Visit Hadimba Temple, Vashisht Temple, Manali Nature Park, and Old Manali.`, `Explore the local cafés, markets, and peaceful surroundings.`, `Return to the hotel.`, `Overnight stay in Manali.`],
          },
          {
            title: `DAY 5        Full day excursion to Rohtang Pass.`,
            activities: [`Enjoy an early breakfast at the hotel.`, `Begin your full-day excursion towards Rohtang Pass, subject to weather, road conditions, permits, and local regulations.`, `Enjoy breathtaking views of snow-covered mountains and high-altitude landscapes.`, `Spend time at the permitted sightseeing area and enjoy the surrounding natural beauty.`, `Take photographs and experience the spectacular Himalayan scenery.`, `Return to Manali in the evening.`, `Relax at the hotel after the day's excursion.`, `Overnight stay in Manali.`],
          },
          {
            title: `DAY 6        Manali to Delhi. Departure`,
            activities: [`Enjoy breakfast and check out from the hotel.`, `Begin your return journey from Manali to Delhi.`, `Enjoy the scenic drive through the mountains and valleys.`, `Stop en route for refreshments and lunch.`, `Continue towards Delhi.`, `Arrive in Delhi and proceed for your onward journey.`],
          },
        ],
      },
      {
        id: 'himachal-3',
        title: `Himachal`,
        duration: `Himachal 5N/6D`,
        inclusions: [
          `5 Nights accommodation in selected hotels`,
          `Daily breakfast & dinner`,
          `Private vehicle for all transfers & sightseeing`,
          `Chandigarh–Aut & Manali–Chandigarh transfers`,
          `Tirthan, Jibhi & Manali sightseeing`,
          `Jalori Pass & Selorsar Lake excursion`,
          `Solang Valley excursion`,
          `Driver, fuel, toll & parking charges`,
          `Tour assistance throughout the journey`,
        ],
        days: [
          {
            title: `DAY 0        Chandigarh to Aut. Begin your journey to the mountain`,
            activities: [`Begin your journey from Chandigarh towards the mountains.`, `Drive through the scenic landscapes of Himachal Pradesh.`, `Pass through beautiful valleys, rivers, and mountain villages.`, `Arrive in Aut, the gateway to Tirthan Valley.`, `Check in to your hotel/homestay and relax.`, `Overnight stay in Aut.`],
          },
          {
            title: `DAY 1        Local sightseeing in Tirthan.`,
            activities: [`Enjoy breakfast at your stay.`, `Begin exploring the peaceful Tirthan Valley, known for its rivers, forests, and traditional Himalayan villages.`, `Take a leisurely walk along the Tirthan River.`, `Visit nearby villages and experience the local mountain lifestyle.`, `Explore the surrounding pine and deodar forests.`, `Enjoy the peaceful natural surroundings and capture beautiful photographs.`, `Spend the evening relaxing by the river or at your homestay.`, `Overnight stay in Tirthan Valley/Jibhi.`],
          },
          {
            title: `DAY 2        Jibhi to Jalori Pass. Hike to Selorsar Lake`,
            activities: [`Enjoy an early breakfast.`, `Begin your journey from Jibhi towards Jalori Pass.`, `Drive through winding mountain roads surrounded by dense forests.`, `Reach Jalori Pass, a beautiful high-altitude mountain pass.`, `Begin the scenic hike towards Serolsar Lake through the forest trail.`, `Enjoy the peaceful surroundings and spectacular Himalayan scenery along the trek.`, `Spend some time at Serolsar Lake and relax amidst nature.`, `Hike back towards Jalori Pass.`, `Drive back to Jibhi.`, `Spend the evening relaxing at your accommodation.`, `Overnight stay in Jibhi.`],
          },
          {
            title: `DAY 3        Jibhi to Manali. Local Sightseeing in Jibhi`,
            activities: [`Enjoy breakfast and check out from your accommodation.`, `Before departing, explore some of Jibhi's local attractions.`, `Visit the charming Jibhi Waterfall and enjoy the peaceful forest surroundings.`, `Take a short walk through the village and explore traditional Himachali architecture.`, `Begin your scenic drive towards Manali.`, `Travel through beautiful mountain roads and valleys.`, `Stop en route for refreshments and lunch.`, `Arrive in Manali and check in to your hotel.`, `Spend the evening at leisure.`, `Overnight stay in Manali.`],
          },
          {
            title: `DAY 4        Local Sightseeing in Manali. Visit the famous temples and Mall Road`,
            activities: [`Enjoy breakfast at the hotel.`, `Begin your local sightseeing tour of Manali.`, `Visit the famous Hadimba Devi Temple, surrounded by tall deodar trees.`, `Visit the historic Vashisht Temple and explore the surrounding village.`, `Visit Manali Nature Park and enjoy a peaceful walk through the forest.`, `Explore Old Manali, known for its cafés, local shops, and relaxed atmosphere.`, `In the evening, visit Mall Road for shopping and local food.`, `Enjoy the lively atmosphere of central Manali.`, `Return to the hotel.`, `Overnight stay in Manali.`],
          },
          {
            title: `DAY 5        Excursion to Solang Valley. Indulge in adventure activities`,
            activities: [`Enjoy breakfast at the hotel.`, `Drive to the spectacular Solang Valley, surrounded by snow-capped Himalayan peaks.`, `Spend the day enjoying the valley's scenic beauty.`, `Indulge in optional adventure activities depending on season and local availability, such as:`, `🪂 Paragliding`, `🚡 Ropeway/Cable Car`, `🏍️ ATV rides`, `🧗 Other locally available activities`, `Enjoy photography and leisure time in the valley.`, `Return to Manali in the evening.`, `Spend the evening relaxing at the hotel or exploring the local market.`, `Overnight stay in Manali.`],
          },
          {
            title: `DAY 6        Manali to Chandigarh. Departure`,
            activities: [`Enjoy breakfast and check out from the hotel.`, `Begin your return journey from Manali to Chandigarh.`, `Enjoy the scenic drive through the mountains and valleys.`, `Stop en route for refreshments and lunch.`, `Continue towards Chandigarh.`, `Arrive in Chandigarh and proceed for your onward journey.`, `Bid farewell to the beautiful mountains of Himachal Pradesh with unforgettable memories.`],
          },
        ],
      },
      {
        id: 'himachal-4',
        title: `Himachal`,
        duration: `Himachal 8N/9D`,
        inclusions: [
          `8 Nights accommodation in selected hotels/camps`,
          `Daily breakfast & dinner`,
          `Overnight journey by Volvo/bus from Delhi to McLeodganj & Manali to Delhi`,
          `Private vehicle for local transfers & sightseeing`,
          `McLeodganj, Bir Billing, Kasol & Manali sightseeing`,
          `Bir Billing paragliding activity`,
          `River rafting, subject to weather & operational conditions`,
          `Manikaran Sahib visit`,
          `Chalal & Rudranag trekking experience`,
          `1 Night camping in Parvati Valley`,
          `Driver, fuel, toll & parking charges`,
          `Trek/camping assistance`,
          `Tour assistance throughout the journey`,
        ],
        days: [
          {
            title: `DAY 0        Overnight Journey From Delhi to McLeodganj (Distance: Approx. 480 Km)`,
            activities: [`Depart from Delhi in the evening by overnight bus/vehicle.`, `Travel towards McLeod Ganj through the scenic landscapes of Himachal Pradesh.`, `Overnight journey towards the mountains.`],
          },
          {
            title: `DAY 1        McLeod Ganj Sightseeing | Visit Bhagsunag Temple & Waterfall (Distance: Approx. 8-10 Km)`,
            activities: [`Arrive in McLeod Ganj in the morning.`, `Transfer to your hotel and freshen up.`, `After some rest, begin local sightseeing.`, `Visit Bhagsunag Temple, an important spiritual site surrounded by beautiful mountain scenery.`, `Continue with a short walk to Bhagsu Waterfall.`, `Explore the surrounding cafés, shops, and mountain trails.`, `Spend the evening exploring McLeod Ganj Market and the local Tibetan atmosphere.`, `Return to the hotel and relax.`, `Overnight stay in McLeod Ganj.`],
          },
          {
            title: `DAY 2        McLeod Ganj To Bir Billing | Local Exploration (Distance: Approx. 70 Km)`,
            activities: [`Enjoy breakfast and check out from the hotel.`, `Begin your scenic drive towards Bir Billing, one of India's most popular paragliding destinations.`, `Arrive in Bir and check in to your accommodation.`, `Explore Bir Tibetan Colony and its peaceful surroundings.`, `Visit local cafés, monasteries, and handicraft shops.`, `Enjoy a leisurely walk around the beautiful mountain landscape.`, `Spend the evening relaxing and preparing for the next day's adventure activities.`, `Overnight stay in Bir Billing.`],
          },
          {
            title: `DAY 3        Bir Billing Paragliding | Enjoy River Rafting & Transfer To Kasol (Distance: Approx. 180 Km)`,
            activities: [`Enjoy breakfast at your accommodation.`, `Head to the Billing take-off point for an exciting paragliding experience over the beautiful Kangra Valley.`, `Enjoy breathtaking aerial views of the Himalayan landscape.`, `After the activity, return to Bir and have lunch.`, `Continue with a river rafting experience, subject to seasonal conditions and local availability.`, `Begin your scenic drive towards Kasol, travelling through beautiful mountain roads and valleys.`, `Arrive in Kasol and check in to your accommodation.`, `Spend the evening at leisure.`, `Explore the riverside surroundings or relax at a local café.`, `Overnight stay in Kasol.`],
          },
          {
            title: `DAY 4        Visit Manikaran Sahib & Trek to Chalal Village | Evening at Leisure (Distance: Approx. 12-15 Km)`,
            activities: [`Enjoy breakfast at the hotel.`, `Drive towards Manikaran Sahib, a revered pilgrimage destination in the Parvati Valley.`, `Visit the Manikaran Sahib Gurudwara and experience its peaceful surroundings.`, `Explore the famous natural hot springs and the nearby market.`, `Return towards Kasol.`, `Begin the scenic trek to Chalal Village, passing through forests and mountain trails.`, `Explore the traditional village and enjoy beautiful views of the Parvati Valley.`, `Trek back to Kasol.`, `Spend the evening at leisure.`, `Relax by the river or explore the local cafés and market.`, `Overnight stay in Kasol.`],
          },
          {
            title: `DAY 5        Trek To Rudranag | Overnight Camping In Parvati Valley (Distance: Approx. 28 Km)`,
            activities: [`Enjoy an early breakfast.`, `Begin your journey towards Barshaini, the starting point for the Parvati Valley trek.`, `Start trekking through scenic mountain trails surrounded by forests and valleys.`, `Pass through beautiful Himalayan landscapes as you make your way towards Rudranag.`, `Visit the Rudranag Temple and waterfall.`, `Spend some time enjoying the peaceful surroundings.`, `Continue to the designated camping area, subject to local permissions and campsite availability.`, `Enjoy the evening surrounded by the natural beauty of the Parvati Valley.`, `Overnight stay in a camp.`],
          },
          {
            title: `DAY 6        Trek Down to Barshaini & Transfer To Manali | Evening At Leisure (Distance: Approx. 95 Km)`,
            activities: [`Wake up to the peaceful surroundings of the Parvati Valley.`, `Enjoy breakfast at the campsite.`, `Begin your trek back towards Barshaini.`, `Meet your vehicle at Barshaini and begin the journey towards Manali.`, `Enjoy the scenic drive through the Himalayan valleys.`, `Arrive in Manali and check in to your hotel.`, `Spend the evening at leisure.`, `Relax after the trek and enjoy the cool mountain atmosphere.`, `Overnight stay in Manali.`],
          },
          {
            title: `DAY 7        Leisure Day In Manali`,
            activities: [`Enjoy a relaxed breakfast at the hotel.`, `Keep the day free to rest after the trekking and adventure activities.`, `Explore Old Manali at your own pace.`, `Enjoy local cafés, restaurants, shops, and riverside walks.`, `Alternatively, spend some quiet time at the hotel enjoying the mountain views.`, `In the evening, explore Mall Road and shop for local souvenirs.`, `Return to the hotel.`, `Overnight stay in Manali.`],
          },
          {
            title: `DAY 8        Manali Exploration & Departure For Delhi (Distance: Approx. 480 km)`,
            activities: [`Enjoy breakfast and check out from the hotel.`, `Visit some of Manali's popular attractions, depending on your departure time.`, `Explore Hadimba Devi Temple, surrounded by beautiful deodar forests.`, `Visit Vashisht Village and Temple if time permits.`, `Spend some time shopping at the local market.`, `Begin your journey from Manali towards Delhi.`, `Enjoy the scenic drive through the mountains and valleys.`, `Continue your overnight journey towards Delhi.`],
          },
          {
            title: `DAY 9        Reach Delhi for journey back home.`,
            activities: [`Arrive in Delhi in the morning, depending on traffic and road conditions.`, `Proceed to your destination with wonderful memories of your Himachal adventure.`, `Tour concludes.`],
          },
        ],
      },
    ],
    meghalaya: [
      {
        id: 'meghalaya-1',
        title: `Meghalaya`,
        duration: `Meghalaya 4N/5D`,
        inclusions: [
          `A dedicated vehicle with a driver cum guide for the entire stay.`,
          `Accommodation for all nights on twin sharing basis in local homestays/local guesthouses/hotels.`,
          `Breakfast starting day 2 till last day.`,
          `Local guide wherever required.`,
          `All toll charges as required.`,
        ],
        days: [
          {
            title: `Day 1  - Guwahati To Shillong`,
            activities: [`Arrive at Guwahati Airport/Railway Station and meet your driver.`, `Begin your scenic journey towards Shillong, the “Scotland of the East.”`, `En route, visit Umiam Lake and enjoy the beautiful views of the surrounding hills.`, `Continue towards Shillong and check in to your hotel.`, `After some rest, explore Shillong local market / Police Bazaar.`, `Enjoy the evening at leisure.`, `Overnight stay in Shillong.`],
          },
          {
            title: `Day 2 – Shillong – Sacred Grove – Heritage Village – Cherrapunjee`,
            activities: [`Enjoy breakfast at the hotel and check out.`, `Drive towards the beautiful Mawphlang Sacred Grove, a protected forest with deep cultural and spiritual significance for the Khasi community.`, `Take a guided walk through the forest and experience its unique flora and peaceful surroundings.`, `Proceed towards the Khasi Heritage Village, showcasing traditional Khasi houses, lifestyle, culture, and architecture.`, `Continue your scenic drive towards Cherrapunjee (Sohra), one of the most famous destinations in Meghalaya.`, `On arrival, check in to your hotel/resort.`, `Spend the evening relaxing and enjoying the surrounding hills.`, `Overnight stay in Cherrapunjee`],
          },
          {
            title: `Day 3 – Cherrapunjee – Tyrna – Double Decker Living Root Bridge – Cherrapunjee`,
            activities: [`Start your day early with breakfast.`, `Drive to Tyrna Village, the starting point for the trek to the famous Nongriat Double Decker Living Root Bridge.`, `Begin the trek through lush forests, hills, and traditional Khasi villages.`, `Descend hundreds of steps towards Nongriat.`, `Reach the spectacular Double Decker Living Root Bridge, naturally created by training the roots of rubber fig trees over many years.`, `Spend some time exploring and photographing the area.`, `Depending on time and energy, you may continue towards the natural pools/waterfalls nearby.`, `Begin the challenging uphill trek back to Tyrna Village.`, `Drive back to Cherrapunjee.`, `Relax and enjoy a well-deserved evening at your hotel.`, `Overnight stay in Cherrapunjee.`],
          },
          {
            title: `Day 4 – Cherrapunjee – Dawki – Mawlynnong`,
            activities: [`Enjoy breakfast and check out from the hotel.`, `Begin your journey towards Dawki, located close to the India–Bangladesh border.`, `Visit the famous Dawki River and enjoy the spectacular views of its crystal-clear waters.`, `Enjoy a boating experience on the river, subject to weather and local conditions.`, `Visit the Dawki–Tamabil border area and experience the unique atmosphere around the international border.`, `Continue towards Mawlynnong, often known for its cleanliness and beautiful natural surroundings.`, `Explore the village and experience its traditional Khasi lifestyle.`, `Visit the Mawlynnong Living Root Bridge and enjoy a short nature walk.`, `Depending on time, visit the Mawlynnong Sky View/Balancing Rock area.`, `Check in to your homestay/resort.`, `Evening at leisure.`, `Overnight stay in Mawlynnong.`],
          },
          {
            title: `Day 5 – Mawlynnong – Guwahati`,
            activities: [`Enjoy breakfast at the hotel/homestay.`, `Spend some time exploring Mawlynnong in the morning.`, `Begin your return journey towards Guwahati.`, `Enjoy the scenic drive through the Meghalaya hills.`, `On reaching Guwahati, visit Kamakhya Temple if time permits and depending on your departure schedule.`, `Proceed to Guwahati Airport/Railway Station for your onward journey.`],
          },
        ],
      },
      {
        id: 'meghalaya-2',
        title: `Meghalaya`,
        duration: `Meghalaya 5N/6D`,
        inclusions: [
          `Entire travel as per the itinerary by tempo traveler`,
          `5 nights accommodation – 2 Nights in Hotel at Cherrapunjee, 1 Night in Camps at Shnongpdeng & 2 Nights in Hotel at Shillong on double/triple sharing basis`,
          `6 meals – Breakfast on Day 2, Day 3, Day 4, Day 5 & Day 6 + Dinner on Day 4`,
          `Entry fees to the sightseeing places mentioned in the itinerary`,
          `Guided trek to various points`,
          `Team Captain throughout the trip`,
          `Medical Kit to handle emergency conditions`,
          `Driver night charges, toll & parking charges`,
          `All inner line permits`,
          `Boating, Cliff jumping and Snorkeling in Shnongpdeng`,
          `Bonfire (if weather permits)`,
        ],
        days: [
          {
            title: `Day 1 -  Arrival In Guwahati | Transfer To Shillong Via Umiam Lake`,
            activities: [`Arrive at Guwahati Airport/Railway Station and meet your driver.`, `Begin your scenic drive towards Shillong, the “Scotland of the East.”`, `En route, stop at the beautiful Umiam Lake, surrounded by lush green hills.`, `Enjoy panoramic views of the lake and take some memorable photographs.`, `Continue your journey towards Shillong.`, `On arrival, check in to your hotel and relax.`, `In the evening, explore Police Bazaar, Shillong's popular shopping and dining area.`, `Return to the hotel for dinner.`, `Overnight stay in Shillong.`],
          },
          {
            title: `Day 2 - Shillong to Cherrapunjee | Laitlum Canyon | Waterfalls & Caves`,
            activities: [`Enjoy breakfast and check out from the hotel.`, `Start your journey towards Laitlum Canyon, one of Meghalaya's most spectacular viewpoints.`, `Enjoy breathtaking views of deep valleys, rolling hills, and surrounding villages.`, `Continue towards Cherrapunjee (Sohra).`, `En route, visit some of the region's beautiful waterfalls, depending on seasonal accessibility.`, `Explore the famous Mawsmai Cave, known for its impressive limestone formations and narrow passages.`, `Continue sightseeing around Sohra and visit nearby waterfalls.`, `Check in to your hotel/resort in Cherrapunjee.`, `Relax and enjoy the peaceful surroundings.`, `Overnight stay in Cherrapunjee.`],
          },
          {
            title: `Day 3 - Single Root Bridge | Double Decker Living Root Bridge Trek`,
            activities: [`Start the day early with breakfast.`, `Drive towards the trekking point near Tyrna Village.`, `Begin your trek through the lush green forests and traditional Khasi settlements.`, `Along the trail, experience the unique Single Living Root Bridge, naturally formed by guiding the roots of rubber fig trees.`, `Continue deeper into the forest towards Nongriat Village.`, `Reach the famous Nongriat Double Decker Living Root Bridge.`, `Spend time exploring the bridge and surrounding tropical forest.`, `Enjoy the natural beauty and take photographs.`, `Depending on time, fitness, and local conditions, explore the nearby natural pools and waterfalls.`, `Begin the trek back towards Tyrna.`, `Drive back to Cherrapunjee and relax at your hotel.`, `Overnight stay in Cherrapunjee.`],
          },
          {
            title: `Day 4 - Mawsmai Caves | Mawlynnong Village | Transfer to Shnongpdeng (Dawki)`,
            activities: [`Enjoy breakfast and check out from the hotel.`, `Begin the day's sightseeing with Mawsmai Caves if not covered properly on Day 2.`, `Continue towards Mawlynnong, famous for its beautiful natural surroundings and traditional Khasi village lifestyle.`, `Explore the village and take a leisurely walk through its clean and peaceful surroundings.`, `Visit the Mawlynnong Living Root Bridge.`, `Continue your scenic drive towards Shnongpdeng, near Dawki.`, `Check in to your riverside campsite/homestay.`, `Spend the evening relaxing beside the Umngot River.`, `Enjoy the peaceful atmosphere and beautiful surroundings.`, `Overnight stay in Shnongpdeng/Dawki.`],
          },
          {
            title: `Day 5 - Water Sports | Phe-Phe Waterfall | Return to Shillong`,
            activities: [`Enjoy breakfast at your riverside stay.`, `Head to the Umngot River for exciting water activities.`, `Depending on weather, season, and local operating conditions, enjoy activities such as:`, `🚣 Boating`, `🛶 Kayaking`, `🏊 Swimming`, `💦 Other locally available water activities`, `Spend some relaxing time beside the crystal-clear river.`, `After the water activities, begin your journey towards Phe-Phe Waterfall.`, `Enjoy the beautiful natural surroundings and take photographs.`, `Continue your drive towards Shillong.`, `Check in to your hotel upon arrival.`, `Evening at leisure.`, `Overnight stay in Shillong.`],
          },
          {
            title: `Day 6 - Umiam Lake | Departure from Guwahati`,
            activities: [`Enjoy breakfast and check out from the hotel.`, `Begin your journey towards Guwahati.`, `Stop at Umiam Lake if you were unable to explore it properly on Day 1, or enjoy another scenic viewpoint around the lake.`, `Continue towards Guwahati.`, `Depending on your departure time, you may visit Kamakhya Temple or explore a local market.`, `Proceed to Guwahati Airport/Railway Station for your onward journey.`],
          },
        ],
      },
      {
        id: 'meghalaya-3',
        title: `Meghalaya`,
        duration: `Meghalaya 6N/7D`,
        inclusions: [
          `- Entire travel as per the itinerary by Tempo Traveller`,
          `- 6 nights accommodation – 1 Night in Hotel in Jowai, 2 Nights in Hotel at Cherrapunjee, 1 Night in Camps at Shnongpdeng, & 2 Nights in Hotel at Shillong on double/triple sharing basis`,
          `- 7 meals – Breakfast on Day 2, Day 3, Day 4, Day 5, Day 6, Day 7 + Dinner on Day 3`,
          `- Entry fees to the sightseeing places mentioned in the itinerary`,
          `- Guided trek to various points`,
          `- Team Captain throughout the trip`,
          `- Medical Kit to handle emergency conditions`,
          `- Driver night charges, toll & parking charges`,
          `- All inner line permits`,
          `- Barbeque at Shnongpdeng (if weather permits)`,
          `- Boating, Cliff jumping and Snorkeling in Shnongpdeng`,
          `- Boating, Guide, 4X4 Vehicle for Krem Chympe Caves`,
          `- Bonfire (if weather permits)`,
        ],
        days: [
          {
            title: `Day 1 -  Arrival In Guwahati | Transfer To Shillong Via Umiam Lake`,
            activities: [`Arrive at Guwahati Airport/Railway Station and meet your driver.`, `Begin your scenic journey towards Shillong.`, `En route, stop at the beautiful Umiam Lake, surrounded by green hills.`, `Enjoy the panoramic views and take some photographs.`, `Continue towards Shillong, known as the “Scotland of the East.”`, `Check in to your hotel and relax.`, `In the evening, explore Police Bazaar and the local surroundings.`, `Overnight stay in Shillong.`],
          },
          {
            title: `Day 2 - Nongjrong Sunrise | Laitlum Canyons | Transfer To Jowai`,
            activities: [`Start your day very early for a memorable Nongjrong Sunrise experience.`, `Reach the viewpoint and enjoy panoramic views of the surrounding hills and valleys as the sun rises.`, `Return for breakfast and prepare for the next part of the journey.`, `Proceed towards Laitlum Canyons, one of Meghalaya's most dramatic landscapes.`, `Enjoy the breathtaking views of deep valleys, green hills, and winding trails.`, `Spend some time exploring the viewpoint and capturing photographs.`, `Continue your journey towards Jowai, the gateway to Meghalaya's beautiful Jaintia Hills.`, `Check in to your hotel/homestay.`, `Evening at leisure to relax and explore the local surroundings.`, `Overnight stay in Jowai.`],
          },
          {
            title: `Day 3 - Krem Chympe Exploration | Transfer To Shnongpdeng`,
            activities: [`Enjoy breakfast at the hotel.`, `Begin your journey towards Krem Chympe, one of the fascinating cave systems in the Jaintia Hills.`, `Prepare for an adventurous cave exploration through the natural underground formations.`, `Explore the unique limestone formations, passages, and surrounding landscapes.`, `The cave experience can be physically demanding, so follow your local guide's instructions throughout the activity.`, `After the exploration, continue towards Shnongpdeng, located beside the beautiful Umngot River.`, `Check in to your riverside campsite/homestay.`, `Spend the evening relaxing beside the river.`, `Enjoy the peaceful surroundings and beautiful sunset views.`, `Overnight stay in Shnongpdeng.`],
          },
          {
            title: `Day 4 - Water Adventures, Dawki Viewpoint & Mawlynnong | Transfer To Cherrapunjee`,
            activities: [`Enjoy breakfast at your riverside stay.`, `Begin the morning with exciting water adventures on the Umngot River.`, `Depending on weather, season, and local availability, enjoy activities such as:`, `🚣 Boating`, `🛶 Kayaking`, `🏊 Swimming`, `💦 Other locally operated river activities`, `After the water activities, proceed towards Dawki Viewpoint.`, `Enjoy panoramic views of the Dawki region and the surrounding hills.`, `Continue towards Mawlynnong Village, famous for its picturesque surroundings and Khasi culture.`, `Explore the village and enjoy a leisurely walk through the local area.`, `Visit the Mawlynnong Living Root Bridge if time and local conditions permit.`, `Continue towards Cherrapunjee (Sohra).`, `Check in to your hotel/resort and relax.`, `Overnight stay in Cherrapunjee.`],
          },
          {
            title: `Day 5 - Day Trip To Double Decker Living Root Bridge | The Nongriat Trek`,
            activities: [`Start early with breakfast.`, `Drive towards Tyrna Village, the starting point of the famous Nongriat trek.`, `Begin the descent through lush tropical forests and traditional Khasi villages.`, `Follow the scenic trail towards Nongriat Village.`, `Along the way, witness Meghalaya's famous living root bridges, naturally formed by guiding the roots of rubber fig trees.`, `Continue towards the spectacular Double Decker Living Root Bridge.`, `Spend time exploring this remarkable natural structure and the surrounding forest.`, `Depending on your fitness level, time, and local conditions, you can explore nearby natural pools and waterfalls.`, `Begin the challenging trek back to Tyrna.`, `Drive back to Cherrapunjee.`, `Relax and recover at your hotel after the trek.`, `Overnight stay in Cherrapunjee.`],
          },
          {
            title: `Day 6 - Cherrapunjee Waterfalls & Caves | Transfer To Shillong`,
            activities: [`Enjoy breakfast and check out.`, `Begin your Cherrapunjee sightseeing tour.`, `Visit the magnificent Nohkalikai Falls, one of the most iconic waterfalls in Meghalaya.`, `Explore the famous Mawsmai Caves and experience their fascinating limestone formations and narrow passages.`, `Depending on time and seasonal accessibility, visit other nearby waterfalls and viewpoints.`, `Enjoy the spectacular landscapes of Sohra before beginning your drive towards Shillong.`, `On arrival in Shillong, check in to your hotel.`, `Spend the evening at leisure.`, `Explore Police Bazaar or enjoy a relaxed evening in the city.`, `Overnight stay in Shillong.`],
          },
          {
            title: `Day 7 - Umiam Lake Stop | Transfer To Guwahati | Departure`,
            activities: [`Enjoy breakfast and check out from your hotel.`, `Begin your journey towards Guwahati.`, `Make a scenic stop at Umiam Lake if desired and enjoy the final views of Meghalaya's beautiful hills.`, `Continue towards Guwahati.`, `Depending on your departure schedule, you may have time for a short city visit or shopping.`, `Proceed to Guwahati Airport/Railway Station for your onward journey.`, `Your memorable 7-day Meghalaya adventure comes to an end.`],
          },
        ],
      },
    ],
    sikkim: [
      {
        id: 'sikkim-1',
        title: `Sikkim`,
        duration: `Sikkim 4N/5D`,
        inclusions: [
          `Meet and assistance on arrival.`,
          `Sight-seeing with airport/railway station pickup and drop.`,
          `Accommodation in below-mentioned hotels with breakfast included (Lachung hotels includes breakfast and dinner).`,
          `Exclusive A/C vehicle as per itinerary on point to point basis (not on disposal basis).`,
          `All Taxes.`,
        ],
        days: [
          {
            title: `Day 1 – NJP/Bagdogra to Gangtok (MG Marg)`,
            activities: [`Arrive at NJP Railway Station / Bagdogra Airport and meet your driver.`, `Begin your scenic drive towards Gangtok, the capital of Sikkim.`, `Enjoy the beautiful mountain landscapes and winding roads along the way.`, `On arrival in Gangtok, check in to your hotel.`, `Take some time to relax after the journey.`, `In the evening, visit MG Marg, Gangtok's famous pedestrian boulevard.`, `Explore the local shops, cafés, restaurants, and vibrant surroundings.`, `Return to the hotel for dinner.`, `Overnight stay in Gangtok.`],
          },
          {
            title: `Day 2 – Gangtok – Tsomgo Lake & Baba Mandir (Nathula Pass optional)`,
            activities: [`Enjoy an early breakfast at the hotel.`, `Start your excursion towards Tsomgo Lake, a beautiful high-altitude glacial lake surrounded by mountains.`, `Spend some time enjoying the scenic surroundings and taking photographs.`, `Continue towards Baba Harbhajan Singh Mandir, popularly known as Baba Mandir.`, `Learn about the history and local significance of this famous site.`, `Optional: Continue to Nathula Pass, subject to permit availability, weather, road conditions, and applicable restrictions.`, `Return to Gangtok in the afternoon/evening.`, `Spend the evening at leisure.`, `Explore MG Marg again or relax at the hotel.`, `Overnight stay in Gangtok.`],
          },
          {
            title: `Day 3 – Gangtok to Lachung (via Singhik View Point & Seven Sisters Waterfalls)`,
            activities: [`Enjoy breakfast and check out from your hotel.`, `Begin your scenic drive towards Lachung, a picturesque mountain village in North Sikkim.`, `Stop at Singhik View Point for spectacular views of the surrounding Himalayan peaks, weather permitting.`, `Continue your journey through the beautiful mountain roads.`, `En route, stop at the impressive Seven Sisters Waterfalls.`, `Enjoy the waterfall views and take photographs.`, `Continue towards Lachung, passing through beautiful valleys, rivers, forests, and mountain villages.`, `Arrive in Lachung and check in to your hotel/homestay.`, `Spend the evening relaxing and enjoying the peaceful mountain atmosphere.`, `Overnight stay in Lachung.`],
          },
          {
            title: `Day 4 – Lachung – Yumthang Valley – Bheerma & Twin Waterfalls – back to Gangtok (Zero Point optional)`,
            activities: [`Start your day early with breakfast.`, `Drive towards the spectacular Yumthang Valley, popularly known for its alpine landscapes, mountain views, and seasonal flowers.`, `Spend time exploring the valley and enjoying the breathtaking Himalayan scenery.`, `Visit Bheerma Waterfall and Twin Waterfalls, subject to road and local accessibility.`, `Enjoy the surrounding natural beauty and take photographs.`, `Optional: Continue towards Zero Point, one of the highest accessible tourist areas in North Sikkim, subject to permits, weather, road conditions, and local regulations.`, `After sightseeing, begin your return journey.`, `Continue towards Gangtok.`, `Arrive in Gangtok in the evening and check in to your hotel.`, `Relax after the long journey.`, `Overnight stay in Gangtok.`],
          },
          {
            title: `Day 5 – Gangtok to NJP/Bagdogra (Departure)`,
            activities: [`Enjoy breakfast at the hotel.`, `Check out and begin your journey back towards NJP Railway Station / Bagdogra Airport.`, `Enjoy the final scenic views of the Sikkim hills along the way.`, `Arrive at NJP/Bagdogra according to your departure schedule.`, `Proceed for your onward journey.`],
          },
        ],
      },
      {
        id: 'sikkim-2',
        title: `Sikkim`,
        duration: `Sikkim 5N/6D`,
        inclusions: [
          `Travel as per the itinerary in a hatchback or SUV, depending on the group size`,
          `Accommodation for 5 nights on a sharing basis, including 2 nights in Gangtok, 1 night in Pelling, and 2 nights in Darjeeling`,
          `A total of 6 meals, with breakfast provided from Day 2 to Day 6, Candlelight dinner at the hotel in Darjeeling`,
          `Driver charges, permits, tolls, fuel, and parking charges`,
          `Airport or railway station pickup and drop-off`,
        ],
        days: [
          {
            title: `Day 1 – Arrival at Bagdogra/NJP & Transfer to Gangtok`,
            activities: [`Arrive at Bagdogra Airport/NJP Railway Station and meet your driver.`, `Begin your scenic journey towards Gangtok, the capital of Sikkim.`, `Enjoy the beautiful mountain landscapes and winding roads along the way.`, `Stop at suitable viewpoints along the route for refreshments and photographs.`, `Arrive in Gangtok and check in to your hotel.`, `Spend the evening at leisure.`, `Explore the famous MG Marg, known for its vibrant atmosphere, cafés, shops, and restaurants.`, `Return to the hotel for dinner.`, `Overnight stay in Gangtok.`],
          },
          {
            title: `Day 2 – Excursion to Tsomgo Lake & Baba Mandir | Nathula Pass (Optional)`,
            activities: [`Enjoy an early breakfast at the hotel.`, `Start your excursion towards Tsomgo Lake, a spectacular high-altitude glacial lake surrounded by Himalayan mountains.`, `Spend some time enjoying the scenery and taking photographs.`, `Continue towards Baba Harbhajan Singh Mandir, popularly known as Baba Mandir.`, `Explore the site and learn about its local significance.`, `Optional: Proceed towards Nathula Pass, the historic mountain pass on the India–Tibet border, subject to permit availability, weather, and road conditions.`, `Return to Gangtok after sightseeing.`, `Spend the evening relaxing at the hotel or exploring MG Marg.`, `Overnight stay in Gangtok.`],
          },
          {
            title: `Day 3 – Gangtok to Pelling | Transfer via Ravangla`,
            activities: [`Enjoy breakfast and check out from your Gangtok hotel.`, `Begin your scenic journey towards Pelling.`, `En route, visit Ravangla, a beautiful mountain destination in South Sikkim.`, `Visit the famous Buddha Park, home to a magnificent Buddha statue surrounded by peaceful gardens and Himalayan landscapes.`, `Spend some time exploring the park and enjoying the panoramic mountain views.`, `Continue your journey towards Pelling.`, `Drive through picturesque mountain roads, forests, valleys, and local villages.`, `Arrive in Pelling and check in to your hotel.`, `Spend the evening at leisure.`, `Enjoy the peaceful mountain atmosphere and views of the surrounding Himalayas.`, `Overnight stay in Pelling.`],
          },
          {
            title: `Day 4 – Pelling Half Day Sightseeing | Skywalk Experience | Transfer to Darjeeling`,
            activities: [`Enjoy breakfast at the hotel.`, `Begin your half-day sightseeing tour of Pelling.`, `Visit the historic Pemayangtse Monastery, one of the important monasteries in Sikkim.`, `Explore the scenic surroundings and enjoy views of the Himalayan landscape.`, `Visit Rabdentse Ruins, the remains of the former capital of Sikkim, if time permits.`, `Experience the famous Pelling Skywalk, offering panoramic views of the surrounding mountains and valleys.`, `After sightseeing, check out and begin your journey towards Darjeeling.`, `Enjoy the scenic drive through the hills.`, `Arrive in Darjeeling and check in to your hotel.`, `Spend the evening at leisure.`, `Overnight stay in Darjeeling.`],
          },
          {
            title: `Day 5 – Full Day Local Sightseeing in Darjeeling | Candlelight Dinner`,
            activities: [`Start the day early and proceed towards Tiger Hill to witness the spectacular sunrise over the Himalayan ranges, weather permitting.`, `On the way back, visit Ghoom Monastery and Batasia Loop.`, `Return to the hotel for breakfast.`, `Continue with local sightseeing in Darjeeling.`, `Visit the Himalayan Mountaineering Institute and Padmaja Naidu Himalayan Zoological Park.`, `Explore the Tenzing Rock area.`, `Visit a local tea garden and learn about Darjeeling's famous tea.`, `In the evening, take a leisurely walk around Chowrasta/Mall Road and explore the local market.`, `In the evening, enjoy a special candlelight dinner, creating a memorable experience surrounded by the beautiful Darjeeling hills.`, `Return to the hotel.`, `Overnight stay in Darjeeling.`],
          },
          {
            title: `Day 6 – Departure | Bid Farewell to Darjeeling`,
            activities: [`Enjoy breakfast at the hotel.`, `Check out and begin your journey towards Bagdogra Airport/NJP Railway Station.`, `Enjoy the final scenic views of the Himalayan foothills during the drive.`, `Arrive at Bagdogra/NJP according to your departure schedule.`, `Proceed for your onward journey with beautiful memories of Sikkim & Darjeeling.`],
          },
        ],
      },
      {
        id: 'sikkim-3',
        title: `Sikkim`,
        duration: `Sikkim 6N/7D`,
        inclusions: [
          `Travel as per itinerary in Hatchback/SUV (as per group size)`,
          `Accommodation for 6 Nights – 2 Nights in Gangtok, 1 Night in Pelling, 2 Nights in Darjeeling, 1 Night in Kalimpong on sharing basis`,
          `6 Meals (Breakfast from Day 2 to Day 7)`,
          `Driver Charges, Permits, Tolls, Fuel & Parking charges`,
          `Airport/Railway Station Pickup and Drop`,
        ],
        days: [
          {
            title: `Day 1 – Arrival at Bagdogra Airport/New Jalpaiguri Rly St (NJP), Transfer to Darjeeling`,
            activities: [`Arrive at Bagdogra Airport / New Jalpaiguri Railway Station (NJP) and meet your driver.`, `Begin your scenic drive towards Darjeeling, one of India's most beautiful hill stations.`, `Enjoy the winding mountain roads, tea gardens, forests, and views of the Himalayan foothills.`, `En route, stop at suitable viewpoints for photographs and refreshments.`, `Arrive in Darjeeling and check in to your hotel.`, `Spend the evening at leisure.`, `Take a relaxed walk around Chowrasta/Mall Road and explore the local cafés and shops.`, `Return to the hotel for dinner.`, `Overnight stay in Darjeeling.`],
          },
          {
            title: `Day 2 – Darjeeling Sightseeing Day | Explore the best places in this hill station`,
            activities: [`Start your day early with a visit to Tiger Hill to witness the spectacular sunrise over the Himalayan ranges, weather permitting.`, `On the way back, visit Ghoom Monastery, one of Darjeeling's oldest Tibetan Buddhist monasteries.`, `Stop at Batasia Loop and enjoy panoramic views of the surrounding mountains and the famous Darjeeling Himalayan Railway.`, `Return to the hotel for breakfast.`, `Continue your sightseeing with a visit to the Himalayan Mountaineering Institute.`, `Explore the Padmaja Naidu Himalayan Zoological Park, home to several rare Himalayan species.`, `Visit Tenzing Rock, associated with the legendary mountaineer Tenzing Norgay.`, `Visit a Darjeeling tea garden and learn about the region's world-famous tea.`, `In the evening, explore Chowrasta and Mall Road.`, `Enjoy the local atmosphere, shopping, cafés, and mountain views.`, `Return to the hotel.`, `Overnight stay in Darjeeling.`],
          },
          {
            title: `Day 3 – Darjeeling to Pelling, Half-Day Sightseeing in Pelling`,
            activities: [`Enjoy breakfast and check out from your Darjeeling hotel.`, `Begin your scenic journey towards Pelling in West Sikkim.`, `Drive through beautiful mountain landscapes, forests, valleys, and local villages.`, `Arrive in Pelling and check in to your hotel.`, `After a short rest, begin your half-day sightseeing.`, `Visit Pemayangtse Monastery, one of the most important monasteries in Sikkim.`, `Explore the historic Rabdentse Ruins, the remains of the former capital of Sikkim.`, `Visit the Pelling Skywalk and enjoy panoramic views of the surrounding Himalayan landscape.`, `Depending on time and local conditions, visit nearby waterfalls/viewpoints.`, `Return to your hotel.`, `Evening at leisure.`, `Overnight stay in Pelling.`],
          },
          {
            title: `Day 4 – Pelling to Gangtok, Transfer via Ravangla`,
            activities: [`Enjoy breakfast and check out from the hotel.`, `Begin your journey towards Gangtok.`, `En route, stop at Ravangla, a beautiful destination surrounded by the Himalayan mountains.`, `Visit the famous Buddha Park, featuring a magnificent Buddha statue set amidst peaceful gardens and mountain scenery.`, `Spend time exploring the park and enjoying the panoramic views.`, `Continue your drive towards Gangtok.`, `Enjoy the scenic route through forests, valleys, and mountain villages.`, `Arrive in Gangtok and check in to your hotel.`, `Spend the evening at leisure.`, `Explore MG Marg, Gangtok's lively pedestrian boulevard.`, `Return to the hotel for dinner.`, `Overnight stay in Gangtok.`],
          },
          {
            title: `Day 5 – Explore Around Gangtok, Tsomgo Lake | Baba Mandir | Nathula Pass (Optional)`,
            activities: [`Enjoy an early breakfast at the hotel.`, `Begin your excursion towards Tsomgo Lake, a beautiful high-altitude glacial lake surrounded by mountains.`, `Spend some time enjoying the scenery and taking photographs.`, `Continue towards Baba Harbhajan Singh Mandir, popularly known as Baba Mandir.`, `Explore the site and learn about its local significance.`, `Optional: Continue to Nathula Pass, the historic mountain pass on the India–Tibet border, subject to permit availability, weather, road conditions, and local regulations.`, `Return to Gangtok after sightseeing.`, `Spend the evening at leisure.`, `Explore MG Marg, visit local cafés, or relax at the hotel.`, `Overnight stay in Gangtok.`],
          },
          {
            title: `Day 6 – Gangtok to Kalimpong, Sightseeing in Kalimpong`,
            activities: [`Enjoy breakfast and check out from the hotel.`, `Begin your scenic journey towards Kalimpong, a charming hill station known for its monasteries, viewpoints, and colonial-era character.`, `On arrival, check in to your hotel.`, `Begin your Kalimpong sightseeing tour.`, `Visit Deolo Hill, one of the best viewpoints in Kalimpong, offering beautiful views of the surrounding valleys and mountains.`, `Visit Durpin Dara Hill for panoramic views of the Teesta and Relli valleys.`, `Explore Zang Dhok Palri Phodang Monastery, also known as Durpin Monastery.`, `Visit Pine View Nursery, famous for its collection of Himalayan plants and flowers.`, `Explore the local market and enjoy the peaceful atmosphere of Kalimpong.`, `Return to the hotel.`, `Overnight stay in Kalimpong.`],
          },
          {
            title: `Day 7 – Departure, Kalimpong to Bagdogra Airport/NJP Station`,
            activities: [`Enjoy breakfast at the hotel.`, `Check out and begin your journey towards Bagdogra Airport / NJP Railway Station.`, `Enjoy the final scenic views of the Himalayan foothills during the drive.`, `Arrive at the airport/railway station according to your departure schedule.`, `Proceed for your onward journey with wonderful memories of Darjeeling, Sikkim, and Kalimpong.`],
          },
        ],
      },
    ],
    rajasthan: [
      {
        id: 'rajasthan-1',
        title: `Rajasthan`,
        duration: `Rajasthan 6N/7D`,
        inclusions: [
          `Airport / Railway Station pick up and drop as per your flight timings`,
          `Transfer & Sightseeing in an AC vehicle (SUV/Sedan/Tempo Traveler) as per group size with driver allowances, parking charges, toll tax and driver night halts`,
          `6 nights accommodation – 1 Night in Delhi, 2 Nights in Agra, 3 Nights in Jaipur on twin sharing basis`,
          `A total of 6 meals included (Breakfast from Day 2 to Day 7)`,
          `English speaking tour guide during city tour in Delhi, Agra, and Jaipur`,
          `Entrance fees for all monuments mentioned in the itinerary`,
          `Rickshaw ride in Old Delhi (Chandni Chowk)`,
          `Elephant / Jeep ride at Amber Fort`,
          `Bottled water during transfers and tour`,
          `24/7 National Tour Assistance`,
        ],
        days: [
          {
            title: `Day 1 – Arrival in Delhi | Sightseeing Tour of Old & New Delhi`,
            activities: [`Arrive at the designated location in Delhi and board your vehicle for Delhi tour.`, `Begin your tour of Old Delhi with Red Fort, Jama Masjid, and a rickshaw ride through the narrow lanes of Chandni Chowk.`, `Drive past Raj Ghat, the memorial of Mahatma Gandhi.`, `Head to New Delhi and visit Qutub Minar.`, `Drive past India Gate, Rashtrapati Bhavan, and Parliament House.`, `Visit Humayun's Tomb, a UNESCO World Heritage site and fine example of Mughal architecture.`, `Check in to the hotel and relax.`, `Overnight stay in Delhi.`],
          },
          {
            title: `Day 2 – Delhi Sightseeing Continues | Visit Lotus Temple, Akshardham Temple & Drive to Agra`,
            activities: [`Enjoy a delicious breakfast at the hotel and check out.`, `Visit Lotus Temple, a Bahá'í House of Worship famous for its flowerlike shape. (Closed on Mondays)`, `Next, visit Akshardham Temple, a modern Hindu temple complex known for its grand architecture and spiritual exhibitions.`, `Later, set out on a scenic drive to Agra (approx. 210 km / 4 hrs) via the Yamuna Expressway.`, `On arrival in Agra, check in to your hotel and unwind.`, `In the evening, visit Mehtab Bagh for a romantic view of the Taj Mahal from across the Yamuna River.`, `Explore local markets for shopping.`, `Overnight stay in Agra.`],
          },
          {
            title: `Day 3 – Arrival in Agra | Visit Agra Fort, Tomb of I'timād-ud-Daulah`,
            activities: [`Enjoy breakfast and check out from hotel and proceed to visit Taj Mahal.`, `Visit Agra Fort, a UNESCO World Heritage site that served as the main residence of the Mughal emperors until 1638.`, `Explore its palaces, courtyards, and hall of public audience.`, `Next, visit Tomb of I'timād-ud-Daulah, often called the 'Baby Taj', a Mughal mausoleum often regarded as a draft of the Taj Mahal.`, `Visit Mehtab Bagh for a scenic view of Taj Mahal from across the river, if not visited on Day 2.`, `In the evening, explore local markets of Agra for leather goods, marble inlay work, and handicrafts.`, `Check in to your hotel and unwind.`, `Overnight stay in Agra.`],
          },
          {
            title: `Day 4 – Early Morning Taj Mahal Visit | Drive to Jaipur via Fatehpur Sikri and Abhaneri Stepwell`,
            activities: [`Early morning visit the iconic Taj Mahal at sunrise.`, `Return to hotel for breakfast, check out and proceed towards Jaipur (approx. 240 km / 5-6 hrs).`, `En route, visit Fatehpur Sikri, the deserted red sandstone city built by Emperor Akbar in the late 16th century.`, `Explore Buland Darwaza, Jama Masjid, and Tomb of Salim Chishti.`, `Continue towards Jaipur, with an optional stop at Abhaneri stepwell (Chand Baori), one of India's largest and deepest stepwells.`, `Reach Jaipur in the evening and check in to your hotel.`, `Spend the rest of the evening at leisure or explore local markets.`, `Overnight stay in Jaipur.`],
          },
          {
            title: `Day 5 – Transfer to Jaipur | Pink City Exploration - Amber Fort, City Palace, Hawa Mahal & Jantar Mantar`,
            activities: [`After breakfast, get ready for a full-day sightseeing tour of Jaipur, the Pink City.`, `Start with Amer Fort (Amber Fort), a hilltop fortress offering magnificent views, elephant ride or jeep ride.`, `Stop at Jal Mahal (Water Palace) for a photo stop.`, `Visit City Palace, a magnificent palace complex that combines Rajasthani and Mughal architecture. (Timings: 10 am to 5 pm)`, `Walk to the famous Hawa Mahal (Palace of Winds), featuring 953 small windows designed for royal women to observe street festivals.`, `Visit Jantar Mantar, an astronomical observatory built by Maharaja Sawai Jai Singh II and a UNESCO World Heritage site.`, `Explore the local bazaars of Jaipur for textiles, jewelry, handicrafts, and souvenirs.`, `Overnight stay in Jaipur.`],
          },
          {
            title: `Day 6 – Local Sightseeing of Jaipur | Visit Jaigarh Fort, Nahargarh Fort and Galta Ji`,
            activities: [`Enjoy breakfast and set out for another day of exploration in Jaipur.`, `Visit Jaigarh Fort, home to the Jaivana cannon, once the world's largest cannon on wheels, and offering grand views of the surrounding hills.`, `Head to Nahargarh Fort, located on the Aravalli hills, offering sweeping views of Jaipur city.`, `Visit Galta Ji (Monkey Temple), an ancient Hindu pilgrimage site set in a narrow crevice in the hills, known for its natural springs and sacred kunds.`, `Rest of the day is at leisure for shopping or exploring local cafes.`, `Overnight stay in Jaipur.`],
          },
          {
            title: `Day 7 – Departure day - End of Trip with Lifetime Memories`,
            activities: [`Enjoy breakfast, check out from the hotel, and proceed towards Delhi (approx. 270 km / 5-6 hrs) or Jaipur Airport/Railway Station for your onward journey.`, `Reach Delhi/Jaipur by evening and head towards airport/railway station for your onward flight/train with cherished memories of the Golden Triangle tour.`],
          },
        ],
      },
      {
        id: 'rajasthan-2',
        title: `Rajasthan`,
        duration: `Rajasthan 7N/8D`,
        inclusions: [
          `Airport/ Railway Station pick up and drop as per your flight timings`,
          `Comfortable and hygienic Vehicle (SUV/ Sedan/ Tempo Traveler) as per the group size`,
          `7 Nights accommodation (2 Nights in Jaipur, 2 Nights in Udaipur, 1 Night in Jodhpur, 1 Night in Jaisalmer, 1 Night in Swiss Tents)`,
          `A total of 7 meals included (Breakfast from Day 2 to Day 8)`,
          `On call travel assistance throughout the trip`,
          `Driver night charges & allowances, toll tax, parking charges, etc.`,
          `Camel Safari in Jaisalmer (In Swiss Tents)`,
        ],
        days: [
          {
            title: `Day 1 – Arrival In Jaipur | Welcome to the Pink City`,
            activities: [`Arrive at the Jaipur airport/ railway station in the morning and meet our representative, who will safely drop you at your pre-booked hotel.`, `Arrive Jaipur, check in to the hotel, after freshen up get ready to explore local Jaipur.`, `We will first take you to the magnificent City palace of Jaipur - the current residence of the royal family of Jaipur.`, `(Timings- 10 am to 5 pm (ticket window closes at 5 pm)).`, `Explore the various edifices, museums, art galleries, and royal suits, and observe local artisans at the workshops located in the palace complex.`, `Afterwards, you can take a brief stop at the iconic Hawa Mahal in Jaipur and walk before moving on to Jantar Mantar observatory.`, `In the evening you can visit the famous Albert Hall Museum, Birla Mandir (Birla Temple) before heading to hotel.`, `Overnight stay in Jaipur.`],
          },
          {
            title: `Day 2 – Local Sightseeing of Jaipur | Explore the heritage city`,
            activities: [`After breakfast in the morning we go for Jaipur local sightseeing.`, `Head to Amer Fort.`, `Morning trip by Amer Fort.`, `(Timings - 8:00 AM to 5:30 PM).`, `Later on, take an elephant ride (Cost extra) at the Amer Fort to the main entrance of the fort.`, `Afterwards, you'll visit the stunning Jal Mahal.`, `It is situated right in the center of the Man Sagar Lake on the outskirts of Jaipur.`, `Afterwards, head towards the magnificent Nahargarh Fort, built by Maharaja Sawai Jai Singh II, which offers breathtaking panoramic views of Jaipur city and houses the beautiful Madhavendra Bhawan.`, `Later in the evening, you can roam around the local markets of Jaipur like Bapu Bazaar, Johari Bazaar to indulge in shopping spree.`, `Return to the hotel for dinner and overnight stay in Jaipur.`],
          },
          {
            title: `Day 3 – Jaipur to Udaipur | Welcome to the City of Lakes`,
            activities: [`Check out from the hotel after breakfast and drive to Udaipur (the City of Lakes).`, `En route to Udaipur, take a halt to visit the famous Pushkar Lake and Brahma Temple.`, `After arrival in Udaipur, check-in to your pre-booked hotel.`, `In the evening, you can take a boat ride on Lake Pichola (at your own cost) and witness the beautiful sunset.`, `Spend a comfortable night at your pre-booked hotel in Udaipur.`],
          },
          {
            title: `Day 4 – Udaipur Sightseeing | Witness the charm of City Palace`,
            activities: [`After breakfast, get ready for a full-day sightseeing tour of Udaipur.`, `Start the day by visiting Sahelion-ki-Bari, a beautiful garden with fountains, lotus pools and marble elephants, originally built for the queens and their friends to relax and spend some time.`, `Later on, visit the City Palace Museum, the grand City Palace complex, which was built over a period of 400 years with a blend of Rajasthani, Mughal and European architecture.`, `After exploring the City Palace, head towards the nearby Jagdish Temple, an architecture marvel of the Mewar dynasty dedicated to Lord Vishnu.`, `In the evening, you will visit the famous Mansapurna Karni Mata ropeway to get a bird's eye view of the entire city and lakes.`, `After completing the local sightseeing, return to your hotel in Udaipur.`, `Overnight stay in Udaipur.`],
          },
          {
            title: `Day 5 – Udaipur to Jodhpur | Blue City of Rajasthan`,
            activities: [`Post breakfast, complete the checkout formalities and proceed towards Jodhpur.`, `By afternoon, reach Jodhpur, Check-in to your hotel and head out for sightseeing of Mehrangarh Fort, which is one of the largest and most glorious forts of India.`, `The fort has a museum that houses an exquisite collection of palanquins, howdahs, royal cradles, miniatures, musical instruments, costumes and furniture.`, `You can also visit the nearby royal cenotaph of Jaswant Thada, known as the Taj Mahal of Marwar.`, `In the evening, you will visit the local shopping areas in Jodhpur like Sardar Market located near the famous Clock Tower.`, `Overnight stay in Jodhpur.`],
          },
          {
            title: `Day 6 – Jodhpur to Jaisalmer | Arrival at Open Thar Desert`,
            activities: [`Post breakfast in the hotel, complete the checkout formalities and drive to Jaisalmer (The Golden City).`, `Before arriving in Jaisalmer, we take a halt to visit the famous Jaisalmer War Museum, which tells the tales of bravery of the Indian soldiers during the 1971 Longewala battle.`, `Reach Jaisalmer by late afternoon, check in to your Swiss Tents, and take some rest to prepare yourself for a thrilling Evening in the Thar Desert.`, `In the evening, you will go for a Camel Safari in the Sand Dunes to enjoy a beautiful Sunset.`, `Spend your evening enjoying folk dance and music activities in the camp.`, `Overnight stay in Jaisalmer.`],
          },
          {
            title: `Day 7 – Sightseeing in Jaisalmer | Explore the 'The Golden City'`,
            activities: [`Post breakfast, get ready to witness the living Fort of India - the Jaisalmer Fort proudly standing out in the middle of the Thar Desert, built from golden sands stones and sandstone.`, `Next, you will visit some of the magnificent havelis in Jaisalmer grand mansions with exquisite carvings, grand courtyards and intricate artwork, basically the ancient homes of wealthy merchants that make up the sandstone city, some of the famous havelis include:`, `Patwon ki Haveli, which is actually a cluster of 5 havelis and the first haveli to be erected in Jaisalmer.`, `Nathmal ki Haveli, which has two identically looking sections but intricately carved differently, as it was carved by two brothers.`, `Salim Singh ki Haveli, known for its unique and distinctive architecture.`, `Later you will visit the beautiful Gadisar Lake.`],
          },
          {
            title: `Day 8 – Jaisalmer to Jodhpur | End of Trip with Lifetime Memories`,
            activities: [`Post breakfast, pack your luggage, check out and start your journey back to Jodhpur.`, `After 5-6 Hrs of road journey you will reach Jodhpur.`, `Your tour concludes once you are dropped at the Jodhpur airport/ railway station for your onward journey.`],
          },
        ],
      },
      {
        id: 'rajasthan-3',
        title: `Rajasthan`,
        duration: `Rajasthan 9N/10D`,
        inclusions: [
          `Travel as per itinerary in AC Sedan / Innova / Tempo Traveller (As per Group Size).`,
          `Accommodation for 9 Nights on double/triple sharing basis as per group size.`,
          `Meals as per Plan (Breakfast at hotels + Breakfast & Dinner at Swiss Tents).`,
          `Camel Safari in Thar Desert, Jaisalmer.`,
          `Cultural Evening with Folk Dance & Music at Swiss Tents.`,
          `Toll taxes, Parking, State taxes, Driver Bata.`,
          `Sightseeing & Transfers as per the itinerary.`,
          `24/7 National Tour Assistance.`,
        ],
        days: [
          {
            title: `Day 1 – Arrival in Jaipur | Welcome to the Pink City`,
            activities: [`Arrive in Jaipur in the morning and meet our representative, who will safely drop you at your pre-booked hotel.`, `Complete check-in formalities and rest for a while.`, `After freshen up, get ready to explore the magnificent City palace of Jaipur - the current residence of the royal family of Jaipur.`, `Explore the various edifices, museums, art galleries, and royal suits, and observe local artisans at the workshops located in the palace complex.`, `Afterwards, you can take a brief stop at the iconic Hawa Mahal in Jaipur and walk before moving on to Jantar Mantar observatory.`, `In the evening you can visit the famous Albert Hall Museum, Birla Mandir (Birla Temple) before heading to hotel.`, `Overnight stay in Jaipur.`],
          },
          {
            title: `Day 2 – Local Sightseeing of Jaipur | Explore the heritage city`,
            activities: [`After breakfast in the morning we go for Jaipur local sightseeing.`, `Head to Amer Fort.`, `Morning trip by Amer Fort.`, `(Timings- 8:00 AM to 5:30 PM).`, `Later on, take an elephant ride (Cost extra) at the Amer Fort to the main entrance of the fort.`, `Afterwards, you'll visit the stunning Jal Mahal.`, `It is situated right in the center of the Man Sagar Lake on the outskirts of Jaipur.`, `Afterwards, head towards the magnificent Nahargarh Fort, built by Maharaja Sawai Jai Singh II, which offers breathtaking panoramic views of Jaipur city and houses the beautiful Madhavendra Bhawan.`, `Later in the evening, you can roam around the local markets of Jaipur like Bapu Bazaar, Johari Bazaar to indulge in shopping spree.`, `Return to the hotel for dinner and overnight stay in Jaipur.`],
          },
          {
            title: `Day 3 – Jaipur to Bikaner | Visit Junagarh Fort & Karni Mata Temple`,
            activities: [`Post breakfast pack your bags & depart for Bikaner.`, `Arrive at Bikaner, check-in to your pre-booked hotel.`, `Later in the day go for the local sightseeeing of Bikaner.`, `Visit the Junagarh Fort, that has an undefeated fort and houses numerous palaces, courtyards & pavilions.`, `Later visit the Karni Mata Temple in Deshnok, also known as the Rat Temple, known for the holy rats.`, `You can also visit the National Research Centre on Camel, one of its kind in Asia and see the different breeds of camels.`, `Return to the hotel in evening for dinner.`, `Overnight stay in Bikaner.`],
          },
          {
            title: `Day 4 – Bikaner to Jaisalmer | Arrival at Open Thar Desert`,
            activities: [`Post breakfast in the hotel, complete the checkout formalities and proceed towards Jaisalmer (The Golden City).`, `Before arriving in Jaisalmer, we take a halt to visit the famous Jaisalmer War Museum, which tells the tales of bravery of the Indian soldiers during the 1971 Longewala battle.`, `Reach Jaisalmer by late afternoon, check in to your Swiss Tents, and take some rest to prepare yourself for a thrilling Evening in the Thar Desert.`, `In the evening, you will go for a Camel Safari in the Sand Dunes to enjoy a beautiful sunset.`, `Spend your evening enjoying folk dance and music activities in the camp.`, `Overnight stay in Jaisalmer.`],
          },
          {
            title: `Day 5 – Sightseeing in Jaisalmer | Explore the Golden City's havelis and architecture`,
            activities: [`Post breakfast, get ready to witness the living Fort of India - the Jaisalmer Fort proudly standing out in the middle of the Thar Desert, built from golden sands stones and sandstone.`, `Next, you will visit some of the magnificent havelis in Jaisalmer grand mansions with exquisite carvings, grand courtyards and intricate artwork,`, `Basically the ancient homes of wealthy merchants that make up the sandstone city; some of the famous havelis include:`, `Patwon ki Haveli, which is actually a cluster of 5 havelis and the first haveli to be erected in Jaisalmer;`, `Nathmal ki Haveli, which has two identically looking sections but intricately carved differently, as it was carved by two brothers.`, `Salim Singh ki Haveli, known for its unique and distinctive architecture.`, `Later you will visit the beautiful Gadisar Lake.`, `Overnight stay in Jaisalmer.`],
          },
          {
            title: `Day 6 – Jaisalmer to Jodhpur | Blue City of Rajasthan`,
            activities: [`Post breakfast, get ready to explore the local sightseeing of Jodhpur.`, `You will first visit the Jaswant Thada, a white marble cenotaph in memory of Maharaja Jaswant Singh II.`, `Then head to the Umaid Bhawan Palace Museum, a part of the grand Umaid Bhawan Palace which is one of the world's largest private residences.`, `Then you will visit the Mandore Gardens, which houses the cenotaphs of Jodhpur's former rulers.`, `In the evening, visit the local markets for shopping, where you can buy traditional Rajasthani attire, handicrafts, and spices.`, `Overnight stay in Jodhpur.`],
          },
          {
            title: `Day 7 – Jodhpur Sightseeing | Visit Mehrangarh Fort, Jaswant Thada, Umaid Bhawan`,
            activities: [`Post breakfast, complete the checkout-formalities and depart for Udaipur.`, `En route, visit the Ranakpur Jain Temple, a beautiful 15th-century temple made of white marble, dedicated to Tirthankara Adinatha.`, `Reach Udaipur by evening, check in to your pre-booked hotel.`, `Rest of the evening is at leisure.`, `Overnight stay at Udaipur.`],
          },
          {
            title: `Day 8 – Jodhpur to Udaipur | Welcome to the City of Lakes`,
            activities: [`After breakfast, get ready for a full-day sightseeing tour of Udaipur.`, `Start the day by visiting Saheliyon-ki-Bari, a beautiful garden with fountains, lotus pools and marble elephants, originally built for the queens and their friends to relax and spend some time.`, `Later on, visit the City Palace Museum, the grand City Palace complex, which was built over a period of 400 years with a blend of Rajasthani, Mughal and European architecture.`, `After exploring the City Palace, head towards the nearby Jagdish Temple, an architecture marvel of the Mewar dynasty dedicated to Lord Vishnu.`, `In the evening, you can take a boat ride on Lake Pichola (at your own cost) and witness the beautiful sunset.`, `Overnight stay in Udaipur.`],
          },
          {
            title: `Day 9 – Udaipur Sightseeing | Visit the charm of City Palace, Lake Pichola`,
            activities: [`Enjoy a delicious breakfast, pack your bags and complete checkout formalities.`, `You will be dropped at Udaipur Airport / Railway station for your onward journey.`],
          },
          {
            title: `Day 10 – Departure day | End of Trip with Lifetime Memories`,
            activities: [`Enjoy a delicious breakfast, pack your bags and complete checkout formalities.You will be dropped at Udaipur Airport / Railway station for your onward journey.`],
          },
        ],
      },
    ],
    bali: [
      {
        id: 'bali-1',
        title: `BALI 5N`,
        duration: ``,
        inclusions: [
          `2 Nights accommodation in Ubud at a 3/4-star hotel`,
          `1 Night accommodation in Nusa Penida at a 3/4-star hotel`,
          `2 Nights accommodation in Seminyak at a 3/4-star hotel`,
          `Daily breakfast at the hotel`,
          `Airport transfers on private basis`,
          `Private transfers for sightseeing as per itinerary`,
          `Sanur–Nusa Penida–Sanur fast boat tickets`,
          `Ubud sightseeing including Tegallalang Rice Terrace, Bali Swing & Tirta Empul Temple`,
          `Nusa Penida sightseeing including Kelingking Beach, Broken Beach, Angel’s Billabong & Crystal Bay`,
          `Nusa Penida–Seminyak transfers`,
          `South Bali sightseeing including Padang Padang Beach & Uluwatu Temple`,
          `Kecak Dance Show at Uluwatu`,
          `All applicable taxes and service charges`,
        ],
        days: [
          {
            title: `Day 1 | Arrival in Bali – Transfer to Ubud`,
            activities: [`Arrive at Ngurah Rai International Airport`, `Private transfer to Ubud`, `Hotel check-in and relaxation`, `Evening at leisure to explore Ubud Market or nearby cafés`, `Overnight in Ubud`],
          },
          {
            title: `Day 2 | Ubud Nature & Culture`,
            activities: [`Breakfast at the hotel`, `Visit Tegallalang Rice Terraces`, `Enjoy a Bali Swing experience`, `Visit Tirta Empul Temple`, `Explore Ubud Art Market and local streets`, `Evening at leisure`, `Overnight in Ubud`],
          },
          {
            title: `Day 3 | Ubud – Nusa Penida`,
            activities: [`Breakfast and check-out`, `Transfer to Sanur Harbour`, `Fast boat to Nusa Penida`, `Visit Kelingking Beach`, `Explore Broken Beach & Angel’s Billabong`, `Visit Crystal Bay`, `Check-in at the hotel`, `Sunset and leisure time`, `Overnight in Nusa Penida`],
          },
          {
            title: `Day 4 | Nusa Penida – Seminyak`,
            activities: [`Breakfast at the hotel`, `Explore Nusa Penida’s scenic spots`, `Visit Diamond Beach / Atuh Beach depending on the route`, `Transfer to the harbour`, `Fast boat back to Bali`, `Private transfer to Seminyak`, `Check-in and relax`, `Evening at Seminyak Beach`, `Overnight in Seminyak`],
          },
          {
            title: `Day 5 | South Bali – Uluwatu & Sunset`,
            activities: [`Breakfast at the hotel`, `Visit Padang Padang Beach`, `Explore Uluwatu Temple`, `Watch the Kecak Dance Show`, `Enjoy sunset views`, `Evening dinner and optional nightlife/club experience in Seminyak`, `Overnight in Seminyak`],
          },
          {
            title: `Day 6 | Seminyak – Departure`,
            activities: [`Breakfast at the hotel`, `Free time for shopping, cafés or beach relaxation`, `Check-out`, `Private transfer to Ngurah Rai International Airport`, `Departure from Bali`],
          },
        ],
      },
      {
        id: 'bali-2',
        title: `BALI 5N (YOGA)`,
        duration: ``,
        inclusions: [
          `5 nights stay at a pre-selected premium wellness resort in Ubud`,
          `Daily breakfast and dinners`,
          `5 guided yoga sessions with a professional instructor`,
          `Visit to Tegalalang Rice Terraces`,
          `Sacred Water Healing Ceremony at Pura Taman Pecampuhan Sala`,
          `Heart-opening Cacao Ceremony`,
          `Visit to Tegenungan Waterfall`,
          `Ecstatic Dance Session at The Yoga Barn`,
          `Full-day excursion to Sekumpul Waterfall`,
          `Visit to Ulun Danu Beratan Temple`,
          `Traditional Balinese massage session`,
          `All airport transfers and sightseeing on a private basis`,
          `English-speaking driver throughout the trip`,
        ],
        days: [
          {
            title: `DAY 1 – WELCOME TO THE ISLAND OF THE GODS`,
            activities: [`Arrive in Bali and enjoy a comfortable transfer to your peaceful retreat in Ubud, surrounded by lush rice paddies and tropical greenery. After checking in and taking some time to relax, settle into the tranquil pace of island life.`, `In the evening, begin your retreat with a Gentle Releasing Yoga Session, specially designed to ease travel fatigue, stretch the body after your journey, and bring your mind into the present moment.`, `As the sun sets, gather for a beautiful Welcome Dinner, where you'll meet your fellow travellers, share stories, and set intentions for the incredible days ahead.`, `Meals: Dinner`],
          },
          {
            title: `DAY 2 – YOGA • RICE TERRACES • SACRED WATER HEALING`,
            activities: [`Wake up to the sounds of nature and begin the morning with a peaceful Sunrise Yoga Session, allowing mindful movement and breathwork to awaken your body and mind.`, `After breakfast, head towards the iconic Tegalalang Rice Terraces, where you'll stroll through Bali's emerald-green landscapes and soak in spectacular panoramic views.`, `Later, experience one of Bali's most unique wellness rituals at Pura Taman Pecampuhan Sala, known for its sacred natural springs. Participate in a traditional Water Healing Ceremony, guided by local customs, designed to cleanse negative energy and promote inner balance.`, `Return to Ubud and spend the evening at leisure before enjoying a wholesome group dinner.`, `Meals: Breakfast & Dinner`],
          },
          {
            title: `DAY 3 – CACAO EXPERIENCE• WATERFALL ESCAPE • ECSTATIC DANCE`,
            activities: [`Begin your morning with a Revitalising Yoga Session, followed by a nourishing breakfast.`, `The day continues with a beautiful Chocolate Workshop, Class & Tasting. Discover the art of chocolate making in a fun, hands-on class. Learn the chocolate-making process, & enjoy a guided chocolate tasting .`, `Later, venture to the breathtaking SUWAT Waterfall, where lush tropical forests surround cascading waters. Relax by the falls, take a refreshing swim, or simply enjoy the peaceful atmosphere.`, `As night falls, experience the vibrant energy of Ecstatic Dance at The Yoga Barn, one of Ubud's most celebrated wellness experiences. Dance freely without judgement, reconnect with yourself through movement, and embrace the joy of complete self-expression.`, `Return to the hotel after an unforgettable evening.`, `Meals: Breakfast & Dinner`],
          },
          {
            title: `DAY 4 – SEKUMPUL WATERFALL • ULUN DANU TEMPLE`,
            activities: [`Begin your day with an Uplifting Morning Yoga Session, leaving you feeling refreshed and energised.`, `After breakfast, embark on a scenic journey to the breathtaking Sekumpul Waterfall, one of Bali's most spectacular natural wonders. Trek through lush forests and streams before arriving at the magnificent twin waterfalls hidden deep within the jungle.`, `Today's adventure takes you to the breathtaking Ulun Danu Beratan Temple, one of Bali's most iconic lakeside temples surrounded by misty mountains and peaceful waters.`, `mind, reduce stress, and restore inner balance.`, `Return to the resort for dinner and a restful night.`, `Meals: Breakfast & Dinner`],
          },
          {
            title: `DAY 5 – BALI SWING • SOUND HEALING • MASSAGE • FAREWELL CELEBRATION`,
            activities: [`Enjoy one final Morning Yoga Session, reflecting on your wellness journey before breakfast.`, `On your return, stop for the iconic Bali Swing Experience, where you'll soar above lush valleys and rice terraces while taking in unforgettable panoramic views.`, `Later in the evening, immerse yourself in a deeply relaxing Sound Healing Session at the Pyramids of Chi, allowing the therapeutic vibrations of ancient instruments to calm the mind, reduce stress, and restore inner balance.`, `Enjoy an authentic Balinese lunch before indulging in a traditional Balinese Massage, allowing your body to fully unwind after days of exploration and yoga.`, `In the evening, gather for a memorable Farewell Dinner overlooking the rice fields, celebrating new friendships, unforgettable experiences, and the beautiful journey you've shared together.`, `Meals: Breakfast & Dinner`],
          },
          {
            title: `DAY 6 – UNTIL NEXT TIME, BALI`,
            activities: [`Wake up to your final peaceful morning in Bali.`, `Take a refreshing swim, enjoy a quiet walk through the gardens, or simply relax with a cup of coffee while soaking in the beauty of your surroundings.`, `After breakfast, check out of the resort and transfer comfortably to the airport.`, `Leave Bali carrying home not only beautiful memories and meaningful friendships but also a renewed sense of peace, balance, and wellbeing.`, `Meals: Breakfast`],
          },
        ],
      },
    ],
    georgia: [
      {
        id: 'georgia-1',
        title: `GEORGIA 5N6D`,
        duration: ``,
        inclusions: [
          `5 nights accommodation in 4★ hotels on twin sharing basis.`,
          `Daily breakfast at the hotel.`,
          `Airport arrival & departure transfers.`,
          `Private vehicle for sightseeing and intercity transfers.`,
          `Tbilisi city sightseeing.`,
          `Full-day Kazbegi & Gudauri excursion.`,
          `Gergeti Trinity Church visit.`,
          `Mtskheta & Jvari Monastery sightseeing.`,
          `Ananuri Fortress & Zhinvali Reservoir visit.`,
          `English-speaking driver/guide.`,
          `Entrance fees as per itinerary.`,
          `All applicable local taxes and service charges.`,
          `24/7 local assistance during the tour.`,
        ],
        days: [
          {
            title: `Day 1`,
            activities: [`Arrive`, `Airport transfer`, `Hotel check-in`, `Evening at leisure`],
          },
          {
            title: `Day 2`,
            activities: [`Breakfast`, `Old Tbilisi`, `Narikala Fortress`, `Mother of Georgia`, `Bridge of Peace`, `Rike Park`, `Sulphur Baths area`],
          },
          {
            title: `Day 3`,
            activities: [`Breakfast`, `Zhinvali Reservoir`, `Ananuri Fortress`, `Gudauri`, `Friendship Monument`, `Kazbegi`, `Hotel check-in`],
          },
          {
            title: `Day 4`,
            activities: [`Breakfast`, `Gergeti Trinity Church`, `Scenic mountain drive`, `Return to Tbilisi`, `Evening at leisure`],
          },
          {
            title: `Day 5`,
            activities: [`Breakfast`, `Mtskheta`, `Jvari Monastery`, `Svetitskhoveli Cathedral`, `Tbilisi city/shopping`, `Evening at leisure`],
          },
          {
            title: `Day 6`,
            activities: [`Breakfast`, `Check-out`, `Free time depending on flight`, `Airport transfer`, `Departure`],
          },
        ],
      },
      {
        id: 'georgia-2',
        title: `GEORGIA 6N/7D`,
        duration: ``,
        inclusions: [
          `6 nights accommodation in 4★ hotels on twin sharing basis.`,
          `Daily breakfast at the hotel.`,
          `Airport arrival and departure transfers.`,
          `Private vehicle for all sightseeing and intercity transfers.`,
          `Tbilisi City Tour including Old Tbilisi, Narikala Fortress, Bridge of Peace & Rike Park.`,
          `Kazbegi & Gudauri excursion including Zhinvali Reservoir, Ananuri Fortress & Friendship Monument.`,
          `Gergeti Trinity Church visit.`,
          `Kakheti day trip including Sighnaghi & Bodbe Monastery.`,
          `Winery visit and wine tasting in Kakheti.`,
          `Mtskheta excursion including Jvari Monastery & Svetitskhoveli Cathedral.`,
          `English-speaking driver/guide.`,
          `Entrance fees as per itinerary.`,
          `Applicable taxes and service charges.`,
          `24/7 local assistance.`,
        ],
        days: [
          {
            title: `Day 1`,
            activities: [`Arrive in Tbilisi`, `Airport transfer`, `Hotel check-in`, `Evening at leisure`],
          },
          {
            title: `Day 2`,
            activities: [`Breakfast`, `Old Tbilisi`, `Narikala Fortress`, `Mother of Georgia`, `Sulphur Baths area`, `Bridge of Peace`, `Rike Park`],
          },
          {
            title: `Day 3`,
            activities: [`Breakfast`, `Drive along Georgian Military Highway`, `Zhinvali Reservoir`, `Ananuri Fortress`, `Gudauri`, `Friendship Monument`, `Arrive Kazbegi`, `Overnight`],
          },
          {
            title: `Day 4`,
            activities: [`Breakfast`, `Visit Gergeti Trinity Church`, `Mountain views`, `Return to Tbilisi`, `Evening at leisure`],
          },
          {
            title: `Day 5`,
            activities: [`Breakfast`, `Day trip to Kakheti wine region`, `Sighnaghi`, `Bodbe Monastery`, `Local winery visit/tasting`, `Return to Tbilisi`],
          },
          {
            title: `Day 6`,
            activities: [`Breakfast`, `Mtskheta`, `Jvari Monastery`, `Svetitskhoveli Cathedral`, `Return to Tbilisi`, `Shopping/free time`, `Farewell dinner`],
          },
          {
            title: `Day 7`,
            activities: [`Breakfast`, `Check-out`, `Airport transfer`, `Departure`],
          },
        ],
      },
    ],
    vietnam: [
      {
        id: 'vietnam-1',
        title: `Vietnam 6n/7d`,
        duration: ``,
        inclusions: [
          `06 Nights Accommodation in hostel`,
          `A total of 7 meals included Breakfast from Day 2 to Day 7 and Lunch on Day 2.`,
          `Half-day Hanoi City tour`,
          `Halong Bay day tour with onboard Cruise Lunch and Kayaking`,
          `Full Day Bana - Hill Tour with Cable Car and tickets to Golden Bridge, French Village, Fantasy Park (with rides)`,
          `Hoi An Ancient Town Tour`,
          `Basket Boat Ride in Coconut Forest and Lantern boat ride on Hoai River`,
          `Cu Chi Tunnels Tour`,
          `Domestic Flights – ( Hanoi to Danang to Saigon)`,
          `All entrance fees and sightseeing as mentioned in the program`,
          `Transportation by vehicle with A/C as per program`,
          `Local English-speaking guides in Vietnam`,
          `Bottles of mineral water on tour day`,
        ],
        days: [
          {
            title: `Day 1 – Hanoi Arrival and Half-day Tour`,
            activities: [],
          },
          {
            title: `Day 2 – Excursions to the Halong Bay Cruise. Lunch on Cruise.`,
            activities: [],
          },
          {
            title: `Day 3 – Transfer from Hanoi to Da Nang. Day at Leisure.`,
            activities: [],
          },
          {
            title: `Day 4 – Full Day Trip to Marble Mountain, Hoi An Ancient Town and Lantern on Boat Tour.`,
            activities: [],
          },
          {
            title: `Day 5 – Ba Na Hills Day Trip - Golden Bridge, Fantasy Park & French Village`,
            activities: [],
          },
          {
            title: `Day 6 – Da Nang to Saigon. Spend the day at Leisure.`,
            activities: [],
          },
          {
            title: `Day 7 – Visit Cu Chi Tunnels | Depart with a lot of happy memories.`,
            activities: [],
          },
        ],
      },
      {
        id: 'vietnam-2',
        title: `Vietnam 7n/8d`,
        duration: ``,
        inclusions: [
          `7 Nights Accommodation based on double/twin sharing room as per the itinerary`,
          `A total of 9 meals included Breakfast from Day 2 to Day 8 and Lunch on Day 2 & 4`,
          `Muong Hoa Funicular (2 way) + buffet lunch`,
          `Hanoi to Sapa & Sapa to Hanoi VIA Sleeper or Limo Bus`,
          `Sun World Fansipan Legend With Cable car ticket`,
          `Glass Bridge Ticket`,
          `Cat Cat Village Tour`,
          `Half-day Hanoi City tour`,
          `Halong Bay day tour with Sunset party and Kayaking`,
          `Marble Mountains Tour`,
          `Coconut Village Tour with Basket Boat ride`,
          `Hoi An Ancient Town Tour`,
          `Lantern boat ride on Hoai River`,
          `Full Day Bana Hill Tour with Cable Car and tickets to Golden Bridge, French Village, Fantasy Park (with rides)`,
          `Domestic Flights - ( Hanoi to Da Nang)`,
          `Sightseeing as mentioned in the program`,
          `Transportation by vehicle with A/C as per the program`,
          `Local English-speaking guides in Vietnam`,
          `Bottles of mineral water on the tour day`,
          `Fixed Airport Pick-up & Drop-off`,
        ],
        days: [
          {
            title: `Day 1 – Arrival In Hanoi & Transfer To Sapa | Evening At Leisure`,
            activities: [],
          },
          {
            title: `Day 2 – Sapa Sightseeing Tour | Fansipan Peak, Muong Hoa Funicular, Glass Bridge & Cat Cat Village`,
            activities: [],
          },
          {
            title: `Day 3 – Sapa To Hanoi | Hanoi Half-Day City Tour`,
            activities: [],
          },
          {
            title: `Day 4 – Ha Long Bay | Luxury Day Cruise, Kayaking & Buffet Lunch`,
            activities: [],
          },
          {
            title: `Day 5 – Hanoi To Da Nang | Evening At Leisure`,
            activities: [],
          },
          {
            title: `Day 6 – Da Nang | Marble Mountain, Coconut Forest, Hoi An Ancient Town & Lantern Boat Ride`,
            activities: [],
          },
          {
            title: `Day 7 – Ba Na Hills Day Trip | Cable Car, Golden Bridge, Fantasy Park & French Village`,
            activities: [],
          },
          {
            title: `Day 8 – Departure | Take back a lot of happy memories`,
            activities: [],
          },
        ],
      },
    ],
    kerala: [
    ],
    uttarakhand: [
      {
        id: 'uttarakhand-1',
        title: `Do Dham`,
        duration: `5N/6D`,
        inclusions: [
          `5 nights accommodation in selected category hotels`,
          `Daily breakfast and dinner.`,
          `Private vehicle for all transfers and sightseeing as per itinerary.`,
          `Haridwar pickup and drop.`,
          `Guptkashi–Gaurikund–Guptkashi transportation.`,
          `All applicable driver charges.`,
          `Fuel charges.`,
          `Toll taxes.`,
          `Parking charges.`,
          `Accommodation and meals as mentioned.`,
          `Assistance throughout the yatra.`,
        ],
        days: [
          {
            title: `Day 1 – Haridwar to Guptkashi`,
            activities: [`Early morning pickup from Haridwar.`, `Meet and greet with our representative.`, `Proceed towards Guptkashi.`, `Enjoy the scenic Himalayan journey through the Garhwal region.`, `En route, visit Devprayag, subject to time availability.`, `Continue towards Rudraprayag.`, `Proceed towards Guptkashi.`, `Arrive in Guptkashi and check in to the hotel.`, `Evening free for rest and preparation for the Kedarnath trek.`, `Overnight stay in Guptkashi.`],
          },
          {
            title: `Day 2 – Guptkashi to Gaurikund – Trek to Kedarnath`,
            activities: [`Early morning breakfast.`, `Proceed from Guptkashi towards Gaurikund by vehicle.`, `Start the trek from Gaurikund to Kedarnath.`, `Trek through the scenic Himalayan landscape.`, `Reach Kedarnath Dham.`, `Check in at the pre-booked accommodation.`, `Rest and freshen up.`, `Visit Kedarnath Temple for darshan, subject to darshan timings.`, `Attend evening Aarti, subject to temple schedule.`, `Spend the evening in the spiritual atmosphere of Kedarnath.`, `Overnight stay in Kedarnath.`],
          },
          {
            title: `Day 3 – Kedarnath to Gaurikund – Guptkashi`,
            activities: [`Early morning darshan at Kedarnath Temple.`, `Return to the accommodation for breakfast.`, `Begin the trek from Kedarnath towards Gaurikund.`, `Arrive at Gaurikund.`, `Meet the vehicle and proceed towards Guptkashi.`, `Arrive in Guptkashi.`, `Check in to the hotel.`, `Evening free for rest and relaxation.`, `Overnight stay in Guptkashi.`],
          },
          {
            title: `Day 4 – Guptkashi to Badrinath`,
            activities: [`Early morning breakfast.`, `Check out from the hotel.`, `Proceed towards Badrinath.`, `En route, enjoy the scenic Himalayan valleys.`, `Visit Joshimath, subject to time availability.`, `Arrive in Badrinath and check in to the hotel.`, `Visit Tapt Kund, subject to local conditions and temple guidelines.`, `Proceed for darshan at Shri Badrinath Temple.`, `Attend evening Aarti, subject to temple timings.`, `Return to the hotel.`, `Overnight stay in Badrinath.`],
          },
          {
            title: `Day 5 – Badrinath to Rudraprayag`,
            activities: [`Early morning darshan at Badrinath Temple.`, `Return to the hotel for breakfast.`, `Check out from the hotel.`, `Visit Mana Village, subject to time and road conditions.`, `Visit Vyas Gufa and Ganesh Gufa, subject to time availability.`, `Proceed towards Rudraprayag.`, `En route, enjoy the scenic Himalayan landscapes.`, `Arrive in Rudraprayag and check in to the hotel.`, `Evening free for relaxation.`, `Overnight stay in Rudraprayag.`],
          },
          {
            title: `Day 6 – Rudraprayag to Haridwar – Departure`,
            activities: [`Early morning breakfast.`, `Check out from the hotel.`, `Proceed towards Haridwar.`, `En route, visit Devprayag, subject to time availability.`, `Continue towards Haridwar.`, `Arrive in Haridwar.`, `Drop at Haridwar Railway Station/Bus Stand/Hotel for onward journey.`, `Tour concludes with divine blessings and memories of Kedarnath and Badrinath.`],
          },
        ],
      },
      {
        id: 'uttarakhand-2',
        title: `Char Dham`,
        duration: `Char Dham 9N/10D`,
        inclusions: [
          `9 nights accommodation in selected category hotels/camps.`,
          `Daily breakfast and dinner.`,
          `Private vehicle for all transfers and sightseeing as per itinerary.`,
          `Haridwar pickup and drop.`,
          `Barkot, Uttarkashi, Guptkashi, Kedarnath, Badrinath and Rudraprayag accommodation.`,
          `Transportation to Janki Chatti and Gaurikund.`,
          `Driver allowance, fuel, toll and parking charges.`,
          `All applicable transportation expenses as per itinerary.`,
          `Assistance throughout the yatra.`,
        ],
        days: [
          {
            title: `Day 1 – Haridwar to Barkot`,
            activities: [`Pickup from Haridwar and drive towards Barkot.`, `En route, enjoy the scenic Himalayan landscapes and visit Mussoorie/ Kempty Falls, subject to time availability.`, `Arrive in Barkot and check in to the hotel.`, `Evening at leisure and preparation for the Yamunotri Yatra.`, `Overnight stay in Barkot.`],
          },
          {
            title: `Day 2 – Barkot – Yamunotri Temple – Barkot`,
            activities: [`Early morning drive to Janki Chatti.`, `Start the trek to Yamunotri Temple.`, `Visit Yamunotri Temple and offer prayers.`, `Return trek to Janki Chatti and drive back to Barkot.`, `Evening free for rest.`, `Overnight stay in Barkot.`],
          },
          {
            title: `Day 3 – Barkot to Uttarkashi`,
            activities: [`Breakfast and check out.`, `Drive towards Uttarkashi.`, `En route enjoy the beautiful Himalayan valleys.`, `Visit Vishwanath Temple in Uttarkashi.`, `Check in to the hotel and relax.`, `Overnight stay in Uttarkashi.`],
          },
          {
            title: `Day 4 – Uttarkashi – Gangotri Temple – Uttarkashi`,
            activities: [`Early morning drive towards Gangotri.`, `Visit Gangotri Temple and offer prayers.`, `Spend time around the sacred Bhagirathi River.`, `Return to Uttarkashi by evening.`, `Overnight stay in Uttarkashi.`],
          },
          {
            title: `Day 5 – Uttarkashi to Guptkashi`,
            activities: [`Breakfast and check out.`, `Drive towards Guptkashi through the scenic Himalayan route.`, `En route, pass through beautiful mountain valleys and riverside landscapes.`, `Arrive in Guptkashi and check in to the hotel.`, `Evening free for rest and preparation for Kedarnath.`, `Overnight stay in Guptkashi.`],
          },
          {
            title: `Day 6 – Guptkashi – Gaurikund – Trek to Kedarnath`,
            activities: [`Early morning proceed towards Gaurikund.`, `Start the trek from Gaurikund to Kedarnath.`, `Reach Kedarnath and check in to the accommodation.`, `Visit Kedarnath Temple for darshan, subject to temple timings.`, `Evening Aarti, subject to availability.`, `Overnight stay in Kedarnath.`],
          },
          {
            title: `Day 7 – Kedarnath – Gaurikund – Guptkashi`,
            activities: [`Early morning darshan at Kedarnath Temple.`, `Return to the accommodation and begin the trek towards Gaurikund.`, `Arrive at Gaurikund and proceed by vehicle towards Guptkashi.`, `Check in to the hotel and relax.`, `Overnight stay in Guptkashi.`],
          },
          {
            title: `Day 8 – Guptkashi to Badrinath`,
            activities: [`Breakfast and check out.`, `Drive towards Badrinath.`, `En route enjoy the spectacular Himalayan scenery.`, `Arrive in Badrinath and check in.`, `Visit Tapt Kund, subject to local conditions and temple guidelines.`, `Darshan at Shri Badrinath Temple.`, `Attend evening Aarti, subject to temple timings.`, `Overnight stay in Badrinath.`],
          },
          {
            title: `Day 9 – Badrinath – Mana Village – Rudraprayag`,
            activities: [`Early morning Badrinath Temple darshan.`, `Return for breakfast and check out.`, `Visit Mana Village, Vyas Gufa and Ganesh Gufa, subject to time and road conditions.`, `Proceed towards Rudraprayag.`, `Arrive and check in to the hotel.`, `Evening at leisure.`, `Overnight stay in Rudraprayag.`],
          },
          {
            title: `Day 10 – Rudraprayag to Haridwar – Departure`,
            activities: [`Breakfast and check out.`, `Drive towards Haridwar.`, `En route, visit Devprayag, subject to time availability.`, `Arrive in Haridwar.`, `Drop at Haridwar Railway Station/Bus Stand/Hotel for onward journey.`, `Yatra concludes with the blessings of Char Dham.`],
          },
        ],
      },
      {
        id: 'uttarakhand-3',
        title: `Kainchi Dham`,
        duration: `Kainchi Dham 2N/3D`,
        inclusions: [
          `2 nights accommodation in selected category hotel.`,
          `Daily breakfast.`,
          `Private vehicle for all transfers and sightseeing.`,
          `Haldwani pickup and drop.`,
          `All sightseeing as per itinerary.`,
          `Driver allowance.`,
          `Fuel, toll taxes and parking charges.`,
          `All applicable transportation charges.`,
          `Assistance throughout the journey.`,
        ],
        days: [
          {
            title: `Day 1 – Arrival in Haldwani | Explore the Beautiful Lakes of Kumaon`,
            activities: [`Arrival at Haldwani Railway Station.`, `Meet and greet with our representative.`, `Proceed towards Bhimtal and check in to the hotel.`, `Visit Bhimtal Lake and enjoy the peaceful surroundings.`, `Explore Sattal, a beautiful cluster of interconnected lakes.`, `Visit Naukuchiatal and enjoy the scenic Himalayan views.`, `Return to the hotel.`, `Evening free for leisure.`, `Overnight stay in Bhimtal.`],
          },
          {
            title: `Day 2 – Bhimtal to Mukteshwar | Seek Blessings of Mahadev`,
            activities: [`Breakfast and check out from the hotel.`, `Drive towards Mukteshwar through the scenic Kumaon hills.`, `Visit Mukteshwar Dham Temple and seek blessings of Lord Shiva.`, `Visit Chauli Ki Jali and enjoy panoramic views of the Himalayan ranges.`, `Explore the peaceful surroundings of Mukteshwar.`, `Check in to the hotel.`, `Evening at leisure.`, `Overnight stay in Mukteshwar.`],
          },
          {
            title: `Day 3 – Kainchi Dham / Nainital | Blessings of Maharajji & Departure`,
            activities: [`Breakfast and check out from the hotel.`, `Proceed towards Kainchi Dham.`, `Visit the famous Neem Karoli Baba Ashram and seek blessings.`, `Proceed towards Nainital.`, `Visit Naini Lake and explore Mall Road.`, `Visit Naina Devi Temple, subject to time availability.`, `Enjoy some leisure time in Nainital.`, `Proceed towards Haldwani.`, `Drop at Haldwani Railway Station for your onward journey.`, `Tour concludes with beautiful memories and divine blessings.`],
          },
        ],
      },
      {
        id: 'uttarakhand-4',
        title: `Badrinath`,
        duration: `Badrinath 4N/5D`,
        inclusions: [
          `4 Nights accommodation`,
          `Daily breakfast & dinner`,
          `Private vehicle for transfers & sightseeing`,
          `Delhi pickup & drop`,
          `Driver, fuel, toll & parking charges`,
          `All sightseeing as per itinerary`,
          `Tour assistance throughout the journey`,
        ],
        days: [
          {
            title: `Day 1 - Delhi Arrival – Haridwar/Rishikesh`,
            activities: [`Arrival at Delhi Airport/Railway Station.`, `Meet and greet with our representative.`, `Proceed towards Haridwar or Rishikesh.`, `Check in to the hotel.`, `In the evening, attend Ganga Aarti.`, `Explore the spiritual surroundings.`, `Overnight stay in Haridwar/Rishikesh.`],
          },
          {
            title: `Day 2 – Haridwar/Rishikesh to Joshimath/Pipalkoti`,
            activities: [`Early morning breakfast and check out.`, `Proceed towards Joshimath/Pipalkoti.`, `En route, witness the Himalayan landscapes and river valleys.`, `Visit Devprayag, subject to time availability.`, `Visit Rudraprayag, subject to time availability.`, `Continue towards Joshimath/Pipalkoti.`, `Check in to the hotel.`, `Overnight stay in Joshimath/Pipalkoti.`],
          },
          {
            title: `Day 3 – Joshimath/Pipalkoti to Badrinath`,
            activities: [`Early morning breakfast and check out.`, `Proceed towards Badrinath.`, `Arrive and check in to the hotel.`, `Freshen up and relax.`, `Take a holy bath at Tapt Kund, subject to conditions and temple guidelines.`, `Proceed for darshan at Shri Badrinath Temple.`, `Attend evening Aarti, subject to timing.`, `Overnight stay in Badrinath.`],
          },
          {
            title: `Day 4 – Badrinath to Mana to Rudraprayag/Srinagar`,
            activities: [`Early morning darshan at Shri Badrinath Temple.`, `Return to the hotel for breakfast.`, `Visit Mana Village.`, `Visit Vyas Gufa.`, `Visit Ganesh Gufa.`, `Visit Mata Murti Temple, subject to time availability.`, `Check out from the hotel.`, `Proceed towards Rudraprayag or Srinagar.`, `Check in to the hotel.`, `Overnight stay in Rudraprayag/Srinagar.`],
          },
          {
            title: `Day 5 – Rudraprayag/Srinagar to Rishikesh to Delhi`,
            activities: [`Early morning breakfast and check out.`, `Proceed towards Rishikesh.`, `Visit Ram Jhula or Laxman Jhula area, subject to time availability.`, `Continue towards Delhi.`, `Drop at Delhi Airport/Railway Station for onward journey.`],
          },
        ],
      },
    ],
    uttarpradesh: [
      {
        id: 'uttarpradesh-1',
        title: `Varanasi - Ayodhya`,
        duration: `Varanasi  4N/5D`,
        inclusions: [
          `Accommodation for 4 nights in selected category hotels.`,
          `Daily breakfast at the hotel.`,
          `Private vehicle for all transfers and sightseeing as per the itinerary.`,
          `Airport/Railway Station pickup and drop.`,
          `Driver allowance.`,
          `Fuel charges.`,
          `Toll taxes.`,
          `Parking charges.`,
          `All applicable transportation charges.`,
        ],
        days: [
          {
            title: `Day 1 – Arrival in Varanasi`,
            activities: [`Arrival at Varanasi Airport/Railway Station.`, `Meet and greet with our representative.`, `Transfer to the hotel and check in.`, `Freshen up and relax.`, `In the evening, proceed to Dashashwamedh Ghat.`, `Witness the famous Ganga Aarti.`, `Enjoy the spiritual atmosphere of the ghats.`, `Return to the hotel.`, `Overnight stay in Varanasi.`],
          },
          {
            title: `Day 2 – Varanasi Sightseeing`,
            activities: [`Early morning enjoy a boat ride on the River Ganga.`, `Visit Kashi Vishwanath Temple for darshan.`, `Visit Annapurna Devi Temple.`, `Visit Kal Bhairav Temple.`, `Visit Sankat Mochan Hanuman Temple.`, `Visit Durga Kund Temple.`, `Visit Tulsi Manas Mandir.`, `Visit Banaras Hindu University and Bharat Kala Bhavan, subject to time availability.`, `Visit Assi Ghat in the evening.`, `Return to the hotel.`, `Overnight stay in Varanasi.`],
          },
          {
            title: `Day 3 – Varanasi to Ayodhya`,
            activities: [`Early morning breakfast and check out from the hotel.`, `Proceed towards Ayodhya.`, `Arrive in Ayodhya and check in to the hotel.`, `Freshen up and relax.`, `Visit Ram Janmabhoomi Temple for darshan.`, `Visit Hanuman Garhi.`, `Visit Kanak Bhawan.`, `Visit Dashrath Mahal.`, `In the evening, visit Saryu Ghat and attend the Saryu Aarti, subject to time availability.`, `Return to the hotel.`, `Overnight stay in Ayodhya.`],
          },
          {
            title: `Day 4 – Ayodhya Sightseeing`,
            activities: [`Early morning visit Ram Janmabhoomi Temple for darshan.`, `Visit Ram Ki Paidi.`, `Visit Nageshwarnath Temple.`, `Visit Treta Ke Thakur.`, `Visit Guptar Ghat.`, `Visit Mani Parvat, subject to time availability.`, `Explore the local spiritual atmosphere and markets.`, `In the evening, visit Saryu Ghat.`, `Return to the hotel.`, `Overnight stay in Ayodhya.`],
          },
          {
            title: `Day 5 – Ayodhya to Varanasi Departure`,
            activities: [`Early morning breakfast and check out from the hotel.`, `Proceed towards Varanasi.`, `En route, visit Vindhyachal Temple, subject to time availability and departure schedule.`, `Continue the journey towards Varanasi.`, `Drop at Varanasi Airport/Railway Station for onward journey with divine memories.`],
          },
        ],
      },
      {
        id: 'uttarpradesh-2',
        title: `Kashi Package`,
        duration: `Kashi Package 2N/3D`,
        inclusions: [
          `Accommodation for 2 nights in selected category hotels.`,
          `Daily breakfast at the hotel.`,
          `Private vehicle for all transfers and sightseeing as per the itinerary.`,
          `Airport/Railway Station pickup and drop.`,
          `Driver allowance.`,
          `Fuel charges.`,
          `Toll taxes.`,
          `Parking charges.`,
          `All applicable transportation charges.`,
        ],
        days: [
          {
            title: `Day 1 – Arrival in Varanasi`,
            activities: [`Arrival at Varanasi Airport/Railway Station.`, `Meet and greet with our representative.`, `Transfer to the pre-booked hotel.`, `Check in to the hotel and freshen up.`, `Proceed for darshan at Kashi Vishwanath Temple.`, `Visit Kashi Vishalakshi Devi Shaktipeeth.`, `Visit Mata Annapurna Temple.`, `Explore the ancient lanes of Varanasi with a local companion/guide.`, `In the evening, proceed towards Dashashwamedh Ghat.`, `Witness the famous and spiritual Ganga Aarti.`, `Return to the hotel.`, `Overnight stay in Varanasi.`],
          },
          {
            title: `Day 2 – Varanasi Sightseeing`,
            activities: [`Breakfast at the hotel.`, `Proceed towards Sarnath.`, `Visit Moolgandh Kuti Vihar.`, `Visit Deer Park.`, `Visit Dhamek Stupa.`, `Visit Dharmarajika Stupa.`, `Visit Sarnath Museum, subject to operational timings.`, `Visit Wat Thai Temple and the 80-feet Buddha Statue.`, `Return for lunch.`, `Later, proceed for Varanasi local sightseeing.`, `Visit Vyas Kashi / Ram Nagar Fort.`, `Visit the New Kashi Vishwanath Temple located inside the Banaras Hindu University campus.`, `Visit Tulsi Manas Temple.`, `Visit Sankat Mochan Hanuman Temple.`, `Visit Durga Mandir near Durga Kund.`, `Return to the hotel.`, `Overnight stay in Varanasi.`],
          },
          {
            title: `Day 3 - Varanasi Departure`,
            activities: [`Breakfast at the hotel.`, `Check out from the hotel.`, `Transfer to Varanasi Airport/Railway Station as per the departure schedule.`, `Depart for your onward journey with divine memories of Kashi.`],
          },
        ],
      },
      {
        id: 'uttarpradesh-3',
        title: `Kashi-Prayagraj-Ayodhya`,
        duration: `Kashi-Prayagraj-Ayodhya 4N/5D`,
        inclusions: [
          `Accommodation for 4 nights in selected category hotels.`,
          `Daily breakfast at the hotel.`,
          `Private vehicle for all transfers and sightseeing as per the itinerary.`,
          `Airport/Railway Station pickup and drop.`,
          `Driver allowance.`,
          `Fuel charges.`,
          `Toll taxes.`,
          `Parking charges.`,
          `All applicable transportation charges.`,
        ],
        days: [
          {
            title: `Day 1 – Arrival in Varanasi`,
            activities: [`Arrival at Varanasi Airport/Railway Station.`, `Meet and greet with our representative.`, `Transfer to the pre-booked hotel. Check in to the hotel and freshen up.`, `Proceed for darshan at Kashi Vishwanath Temple.`, `Visit Kashi Vishalakshi Devi Shaktipeeth.`, `Visit Mata Annapurna Temple.`, `Explore the ancient spiritual lanes around the Kashi Vishwanath Temple.`, `In the evening, proceed towards Dashashwamedh Ghat.`, `Witness the famous Ganga Aarti.`, `Return to the hotel.`, `Overnight stay in Varanasi.`],
          },
          {
            title: `Day 2 – Varanasi Sightseeing`,
            activities: [`Early morning, enjoy a boat ride on the River Ganga, subject to weather conditions.`, `Return to the hotel for breakfast.`, `Proceed towards Sarnath, Visit Moolgandh Kuti Vihar.`, `Visit Deer Park. Visit Dhamek Stupa.`, `Visit Sarnath Museum, subject to operational timings.`, `Visit the Buddha Statue and Wat Thai Temple.`, `Return towards Varanasi.`, `Visit New Kashi Vishwanath Temple inside the Banaras Hindu University campus.`, `Visit Sankat Mochan Hanuman Temple.`, `Visit Durga Kund Temple. Visit Tulsi Manas Temple.`, `Return to the hotel.`, `Overnight stay in Varanasi.`],
          },
          {
            title: `Day 3 – Varanasi to Prayagraj`,
            activities: [`Breakfast at the hotel.`, `Check out from the hotel.`, `Proceed towards Prayagraj.`, `Arrive in Prayagraj and check in to the hotel.`, `Proceed to Triveni Sangam.`, `Take a boat ride to the confluence point, subject to boat operations.`, `Take a holy dip at the sacred confluence of the Ganga, Yamuna and Saraswati rivers.`, `Visit Bade Hanuman Temple.`, `Visit Anand Bhavan, subject to time availability and guest preference.`, `Visit Alopi Devi Temple.`, `Return to the hotel.`, `Overnight stay in Prayagraj.`],
          },
          {
            title: `Day 4 – Prayagraj to Ayodhya`,
            activities: [`Breakfast at the hotel.`, `Check out from the hotel. Proceed towards Ayodhya.`, `Arrive in Ayodhya and check in to the hotel.`, `Freshen up and relax.`, `Proceed for darshan at Shri Ram Janmabhoomi Temple.`, `Visit Hanuman Garhi. Visit Kanak Bhawan.`, `Visit Dashrath Mahal. Visit Ram Ki Paidi.`, `In the evening, visit the banks of the sacred Saryu River.`, `Witness the Saryu Aarti, subject to timing.`, `Return to the hotel.`, `Overnight stay in Ayodhya.`],
          },
          {
            title: `Day 5 – Ayodhya Sightseeing and Departure`,
            activities: [`Early morning, proceed for darshan at Shri Ram Janmabhoomi Temple, subject to darshan timings.`, `Return to the hotel for breakfast.`, `Check out from the hotel.`, `Visit Nageshwarnath Temple.`, `Visit Treta Ke Thakur.`, `Visit Guptar Ghat.`, `Visit Mani Parvat, subject to time availability.`, `Transfer to Ayodhya Airport/Railway Station for onward journey.`],
          },
        ],
      },
    ],
    maharashtra: [
      {
        id: 'maharashtra-1',
        title: `Mahrashtra Jyotirling Pune`,
        duration: `Mahrashtra Jyotirling Pune 2N/3D`,
        inclusions: [],
        days: [
          {
            title: `Day 1 - Arrival in Pune | Drive to Grisneshwar`,
            activities: [`Pickup from Pune airport, railway station, bus stand, or your hotel.`, `Proceed towards Shani Shingnapur for darshan.`, `Continue to Grishneshwar and check in near the temple route.`, `Evening darshan planning and overnight stay near Grishneshwar.`],
          },
          {
            title: `Day 2 - Grishneshwar to Nashik`,
            activities: [`Early morning Grishneshwar Jyotirlinga darshan.`, `Visit Ellora Caves.`, `Visit Shirdi`, `Drive towards Nashik for Trimbakeshwar Jyotirlinga darshan.`, `Overnight stay in Nashik`],
          },
          {
            title: `Day 3 - Nashik to Bhimashankar & Departure`,
            activities: [`Early drive to Bhimashankar for the third Jyotirlinga darshan.`, `Return to Pune and visit Dagdu Seth Ganpati if time permits.`, `Short Pune heritage stop at Shaniwar Wada, subject to schedule.`, `Drop at Pune airport, railway station, bus stand, or your hotel.`],
          },
        ],
      },
      {
        id: 'maharashtra-2',
        title: `Mahrashtra Jyotirling Pune`,
        duration: `Mahrashtra Jyotirling Pune 3N/4D`,
        inclusions: [],
        days: [
          {
            title: `Day 1 - Arrival in Pune | Drive to Bhimashankar`,
            activities: [`Arrive in Pune and meet our representative.`, `Begin your spiritual journey towards Bhimashankar.`, `Enjoy the scenic drive through the Western Ghats.`, `Arrive at Bhimashankar and check in to the hotel.`, `Visit the sacred Bhimashankar Jyotirlinga Temple for darshan.`, `Spend some peaceful time in the spiritual surroundings.`, `Return to the hotel and relax.`, `Stay in Bhimashankar`],
          },
          {
            title: `Day 2 - Bhimashankar to Nashik | Trimbakeshwar Jyotirlinga`,
            activities: [`Early morning breakfast at the hotel.`, `Check out and proceed towards Nashik.`, `Arrive in Trimbakeshwar and proceed for darshan at the sacred Trimbakeshwar Jyotirlinga Temple.`, `Seek blessings of Lord Shiva.`, `Depending on time availability, explore nearby spiritual attractions.`, `Proceed to Nashik and check in to the hotel.`, `Spend the evening at leisure.`, `Stay in Nashik`],
          },
          {
            title: `Day 3 - Nashik to Grishneshwar | Shirdi & Ellora Caves`,
            activities: [`Early morning breakfast at the hotel.`, `Check out and proceed towards Shirdi.`, `Visit Shirdi Sai Baba Temple for darshan.`, `Continue your journey towards Grishneshwar.`, `En route, visit the magnificent Ellora Caves and explore the ancient rock-cut architecture.`, `Proceed towards Grishneshwar Jyotirlinga Temple for darshan.`, `Check in to the hotel and relax.`, `Stay in Chhatrapati Sambhajinagar / Near Grishneshwar`],
          },
          {
            title: `Day 4 - Grishneshwar to Pune | Departure`,
            activities: [`Early morning breakfast at the hotel.`, `Check out from the hotel.`, `Depending on the previous day's darshan schedule, you may visit Grishneshwar Temple for darshan.`, `Begin your journey back towards Pune.`, `Arrive in Pune and get dropped at the airport, railway station or your preferred location.`, `Depart with the divine blessings of Lord Shiva and beautiful memories from your Maharashtra Jyotirlinga Yatra. 🙏`],
          },
        ],
      },
      {
        id: 'maharashtra-3',
        title: `Maharashtra Jyotirling Mumbai`,
        duration: `Maharashtra Jyotirling Mumbai 3N/4D`,
        inclusions: [],
        days: [
          {
            title: `Day 1 - Mumbai to Trimbakeshwar | Trimbakeshwar Jyotirlinga Darshan`,
            activities: [`Early morning departure from Mumbai towards Trimbakeshwar.`, `Enjoy the scenic drive towards Nashik.`, `Arrive at Trimbakeshwar and proceed for darshan at the sacred Trimbakeshwar Jyotirlinga Temple.`, `Seek blessings of Lord Shiva and spend some peaceful time at the temple.`, `Depending on time availability, visit nearby spiritual attractions in Trimbakeshwar.`, `Check in to the hotel and relax.`, `Stay in Trimbakeshwar`],
          },
          {
            title: `Day 2 - Trimbakeshwar to Shirdi | Grishneshwar & Ellora Caves`,
            activities: [`Early morning breakfast at the hotel.`, `Check out and begin the journey towards the Aurangabad/Chhatrapati Sambhajinagar region.`, `Visit the sacred Grishneshwar Jyotirlinga Temple and seek blessings of Lord Shiva.`, `Explore the magnificent Ellora Caves, known for their ancient rock-cut temples, monasteries and the iconic Kailasa Temple.`, `After completing the sightseeing, proceed towards Shirdi.`, `Arrive in Shirdi and check in to the hotel.`, `Depending on time availability, visit Sai Baba Temple for darshan.`, `Return to the hotel and relax.`, `Stay in Shirdi`],
          },
          {
            title: `Day 3 - Shirdi to Bhimashankar | Sai Baba Darshan & Spiritual Journey`,
            activities: [`Early morning visit to Shirdi Sai Baba Temple for darshan.`, `Return to the hotel for breakfast.`, `Check out and begin the journey towards Bhimashankar.`, `Enjoy the scenic drive through Maharashtra's changing landscapes.`, `Arrive in Bhimashankar and check in to the hotel.`, `Spend the evening at leisure and relax.`, `Stay in Bhimashankar`],
          },
          {
            title: `Day 4 - Bhimashankar to Mumbai | Departure`,
            activities: [`Early morning visit to the sacred Bhimashankar Jyotirlinga Temple for darshan.`, `Return to the hotel for breakfast and check out.`, `Begin the return journey towards Mumbai.`, `Arrive in Mumbai and get dropped at your preferred location.`],
          },
        ],
      },
    ],
    gujarat: [
      {
        id: 'gujarat-1',
        title: `Gujarat Jyotirling`,
        duration: `Gujarat Jyotirling 3N/4D`,
        inclusions: [
          `Accommodation as per the choice of hotels/ stays`,
          `Breakfast ( Buffet / Fixed Menu )`,
          `Driver's Night Allowance, Inter State tax, and fuel charges`,
          `Meet, Greet & Assistance if required at destinations`,
          `Parking & Toll Tax`,
          `Arrival & Departure Transfers`,
          `Transfers by Private & Exclusive Car`,
          `Sightseeing by Private & Exclusive Car`,
          `Co-operative driver with local knowledge`,
        ],
        days: [
          {
            title: `Day 1 – Rajkot to Dwarka`,
            activities: [`Arrival at Rajkot Airport/Railway Station.`, `Pickup and proceed towards Dwarka.`, `En route visit Bala Hanuman Temple, Jamnagar (subject to time availability).`, `Arrive in Dwarka and check in to the hotel.`, `Visit Dwarkadhish Temple.`, `Visit Gomti Ghat and Sudama Setu.`, `Attend evening Aarti at Dwarkadhish Temple.`, `Overnight stay in Dwarka.`],
          },
          {
            title: `Day 2 – Dwarka Local Sightseeing`,
            activities: [`Early morning darshan at Dwarkadhish Temple.`, `Visit Nageshwar Jyotirlinga.`, `Proceed towards Okha and take a ferry to Bet Dwarka.`, `Darshan at Bet Dwarka Temple.`, `Return to the mainland.`, `Visit Rukmini Devi Temple.`, `Visit Gopi Talav, subject to time availability.`, `Return to Dwarka.`, `Overnight stay in Dwarka.`],
          },
          {
            title: `Day 3 – Dwarka to Somnath via Porbandar`,
            activities: [`Breakfast and check out from the hotel.`, `Proceed towards Porbandar.`, `Visit Kirti Mandir.`, `Visit Sudama Temple.`, `Continue towards Somnath.`, `Arrive in Somnath and check in to the hotel.`, `Visit Somnath Jyotirlinga Temple.`, `Attend evening Aarti at Somnath Temple.`, `Attend Light and Sound Show, subject to availability.`, `Overnight stay in Somnath.`],
          },
          {
            title: `Day 4 – Somnath to Rajkot | Departure`,
            activities: [`Early morning darshan at Somnath Jyotirlinga Temple.`, `Breakfast and check out from the hotel.`, `Visit Bhalka Tirth.`, `Visit Triveni Sangam.`, `Visit Geeta Mandir.`, `Proceed towards Rajkot.`, `Drop at Rajkot Airport/Railway Station for onward journey.`],
          },
        ],
      },
    ],
    odisha: [
      {
        id: 'odisha-1',
        title: `Puri Dham`,
        duration: `Puri Dham 4N/5D`,
        inclusions: [
          `Accommodation as per the choice of hotels/ stays`,
          `Breakfast ( Buffet / Fixed Menu )`,
          `Driver's Night Allowance, Inter State tax, and fuel charges`,
          `Meet, Greet & Assistance if required at destinations`,
          `Parking & Toll Tax`,
          `Arrival & Departure Transfers`,
          `Transfers by Private & Exclusive Car`,
          `Sightseeing by Private & Exclusive Car`,
          `Co-operative driver with local knowledge`,
        ],
        days: [
          {
            title: `Day 1 – Bhubaneswar Arrival to Puri`,
            activities: [`Arrival at Bhubaneswar Airport/Railway Station.`, `Pickup and proceed towards Puri.`, `Check in to the hotel.`, `Visit Shree Jagannath Temple for darshan.`, `Visit Puri Beach in the evening.`, `Overnight stay in Puri.`],
          },
          {
            title: `Day 2 – Puri to Konark to Puri`,
            activities: [`Early morning breakfast at the hotel.`, `Visit Konark Sun Temple.`, `Visit Chandrabhaga Beach.`, `Visit Ramachandi Temple.`, `Return to Puri.`, `Evening free for Jagannath Temple darshan or local exploration.`, `Overnight stay in Puri.`],
          },
          {
            title: `Day 3 – Puri to Chilika Lake to Puri`,
            activities: [`Breakfast at the hotel.`, `Proceed towards Chilika Lake.`, `Enjoy a boat ride at Chilika Lake.`, `Visit Kalijai Temple.`, `Dolphin spotting, subject to weather and operational conditions.`, `Return to Puri.`, `Overnight stay in Puri.`],
          },
          {
            title: `Day 4 – Puri to Bhubaneswar`,
            activities: [`Breakfast and check out from the hotel.`, `Proceed towards Bhubaneswar.`, `Visit Lingaraj Temple.`, `Visit Mukteshwar Temple.`, `Visit Rajarani Temple.`, `Visit Udayagiri and Khandagiri Caves.`, `Check in to the hotel.`, `Overnight stay in Bhubaneswar.`],
          },
          {
            title: `Day 5 – Bhubaneswar Departure`,
            activities: [`Breakfast and check out from the hotel.`, `Visit remaining local temples, subject to flight/train timing.`, `Drop at Bhubaneswar Airport/Railway Station for onward journey.`],
          },
        ],
      },
      {
        id: 'odisha-2',
        title: `Puri Konark`,
        duration: `Puri Konark 3N/4D`,
        inclusions: [
          `Accommodation as per the choice of hotels/ stays`,
          `Breakfast ( Buffet / Fixed Menu )`,
          `Driver's Night Allowance, Inter State tax, and fuel charges`,
          `Meet, Greet & Assistance if required at destinations`,
          `Parking & Toll Tax`,
          `Arrival & Departure Transfers`,
          `Transfers by Private & Exclusive Car`,
          `Sightseeing by Private & Exclusive Car`,
          `Co-operative driver with local knowledge`,
        ],
        days: [
          {
            title: `Day 1 – Bhubaneswar Arrival to Puri`,
            activities: [`Arrival at Bhubaneswar Airport/Railway Station.`, `Pickup and proceed towards Puri.`, `Check in to the hotel.`, `Visit Shree Jagannath Temple for darshan.`, `Visit Puri Beach in the evening.`, `Overnight stay in Puri.`],
          },
          {
            title: `Day 2 – Puri to Konark to Puri`,
            activities: [`Early morning breakfast at the hotel.`, `Visit Konark Sun Temple.`, `Visit Chandrabhaga Beach.`, `Visit Ramachandi Temple.`, `Return to Puri.`, `Evening free for Jagannath Temple darshan or local exploration.`, `Overnight stay in Puri.`],
          },
          {
            title: `Day 3 – Puri to Chilika Lake to Puri`,
            activities: [`Breakfast at the hotel.`, `Proceed towards Chilika Lake.`, `Enjoy a boat ride at Chilika Lake.`, `Visit Kalijai Temple.`, `Dolphin spotting, subject to weather and operational conditions.`, `Return to Puri.`, `Overnight stay in Puri.`],
          },
          {
            title: `Day 4 – Bhubaneswar Departure`,
            activities: [`Breakfast and check out from the hotel.`, `Proceed towards Bhubaneswar.Visit remaining local temples, subject to flight/train timing.`, `Drop at Bhubaneswar Airport/Railway Station for onward journey.`],
          },
        ],
      },
    ],
    tamilnadu: [
      {
        id: 'tamilnadu-1',
        title: `Rameswaram`,
        duration: `Rameswaram 4N/5D`,
        inclusions: [
          `Accommodation in selected category hotels.`,
          `Daily breakfast at the hotel.`,
          `Private vehicle for all transfers and sightseeing as per the itinerary.`,
          `Airport/Railway Station pickup and drop.`,
          `Driver allowance.`,
          `Toll taxes.`,
          `Parking charges.`,
          `Fuel charges.`,
          `All applicable transportation charges.`,
          `Assistance during the tour.`,
        ],
        days: [
          {
            title: `Day 1 – Arrival in Madurai and Local Sightseeing`,
            activities: [`Arrival at Madurai Airport/Railway Station.`, `Meet and greet with our representative.`, `Transfer to the pre-booked hotel.`, `Check in to the hotel and freshen up.`, `Visit the famous Meenakshi Amman Temple.`, `Visit Thirumalai Nayakkar Mahal.`, `Visit Thirupparankundram Murugan Temple, subject to time availability.`, `Visit Gandhi Memorial Museum, subject to time availability.`, `In the evening, explore the surroundings of Meenakshi Amman Temple.`, `Return to the hotel.`, `Overnight stay in Madurai.`],
          },
          {
            title: `Day 2 – Madurai to Rameswaram`,
            activities: [`Early morning breakfast at the hotel.`, `Check out from the hotel.`, `Proceed towards Rameswaram.`, `Enjoy the scenic journey towards Pamban Island.`, `Stop for a view of the famous Pamban Bridge.`, `Arrive in Rameswaram and check in to the hotel.`, `Freshen up and relax.`, `Visit Agni Theertham.`, `Proceed for darshan at Ramanathaswamy Temple.`, `Visit Panchamukhi Hanuman Temple.`, `Visit Ramar Padam, subject to time availability.`, `Return to the hotel.`, `Overnight stay in Rameswaram.`],
          },
          {
            title: `Day 3 – Rameswaram Local Sightseeing`,
            activities: [`Early morning breakfast at the hotel.`, `Proceed for Rameswaram local sightseeing.`, `Visit Dhanushkodi.`, `Visit Kothandaramaswamy Temple.`, `Enjoy the scenic coastal drive towards Dhanushkodi.`, `Visit the ruins and beach area of Dhanushkodi.`, `Visit Dr. APJ Abdul Kalam Memorial.`, `Visit Pamban Bridge viewpoint, if not covered on the previous day.`, `Evening free for personal activities or optional temple darshan.`, `Return to the hotel.`, `Overnight stay in Rameswaram.`],
          },
          {
            title: `Day 4 – Rameswaram to Kanyakumari`,
            activities: [`Early morning breakfast at the hotel.`, `Check out from the hotel.`, `Proceed towards Kanyakumari.`, `En route, visit Suchindram Thanumalayan Temple, subject to time availability.`, `Continue the journey towards Kanyakumari.`, `Arrive in Kanyakumari and check in to the hotel.`, `Visit Kumari Amman Temple.`, `Visit Gandhi Mandapam.`, `Visit the Kanyakumari beach area.`, `In the evening, witness the famous sunset at Kanyakumari.`, `Return to the hotel.`, `Overnight stay in Kanyakumari.`],
          },
          {
            title: `Day 5 – Kanyakumari Sightseeing and Departure`,
            activities: [`Early morning witness the beautiful sunrise at Kanyakumari.`, `Breakfast at the hotel.`, `Check out from the hotel.`, `Proceed to Vivekananda Rock Memorial by ferry, subject to ferry operations and weather conditions.`, `Visit Thiruvalluvar Statue.`, `Visit Vivekananda Memorial.`, `Visit the nearby sightseeing points, subject to departure timings.`, `Proceed towards Trivandrum Airport for departure.`],
          },
        ],
      },
      {
        id: 'tamilnadu-2',
        title: `Pancha bootha stalam`,
        duration: `Pancha bootha stalam 6N/7D`,
        inclusions: [
          `Accommodation in selected category hotels.`,
          `Daily breakfast at the hotel.`,
          `Private vehicle for all transfers and sightseeing as per the itinerary.`,
          `Airport/Railway Station pickup and drop.`,
          `Driver allowance.`,
          `Toll taxes.`,
          `Parking charges.`,
          `Fuel charges.`,
          `All applicable transportation charges.`,
          `Assistance during the tour.`,
        ],
        days: [
          {
            title: `Day 1 – Chennai Arrival – Srikalahasti – Kanchipuram`,
            activities: [`Arrival at Chennai Airport/Railway Station.`, `Meet and greet with our representative.`, `Proceed towards Srikalahasti.`, `Visit Srikalahasteeswara Temple.`, `Offer prayers to Lord Shiva representing the Air Element (Vayu).`, `Visit Bharadwaja Tirtham, subject to time availability.`, `Proceed towards Kanchipuram.`, `Check in to the hotel.`, `Overnight stay in Kanchipuram.`],
          },
          {
            title: `Day 2 – Kanchipuram Sightseeing – Tiruvannamalai`,
            activities: [`Breakfast at the hotel.`, `Visit Ekambareswarar Temple.`, `Offer prayers to Lord Shiva representing the Earth Element (Prithvi).`, `Visit Kamakshi Amman Temple.`, `Visit Varadharaja Perumal Temple.`, `Visit Kailasanathar Temple, subject to time availability.`, `Proceed towards Tiruvannamalai.`, `Check in to the hotel.`, `Evening free for relaxation or local exploration.`, `Overnight stay in Tiruvannamalai.`],
          },
          {
            title: `Day 3 – Tiruvannamalai Sightseeing`,
            activities: [`Early morning visit Arunachaleswarar Temple.`, `Offer prayers to Lord Shiva representing the Fire Element (Agni).`, `Visit Unnamulai Amman Temple.`, `Visit Sri Ramana Ashram.`, `Visit Virupaksha Cave, subject to time availability.`, `Visit Skandashram, subject to time availability.`, `In the evening, experience the spiritual atmosphere around Arunachala Hill.`, `Optional Girivalam / temple circumambulation, depending on guest preference and physical comfort.`, `Return to the hotel.`, `Overnight stay in Tiruvannamalai.`],
          },
          {
            title: `Day 4 – Tiruvannamalai to Chidambaram`,
            activities: [`Breakfast and check out from the hotel.`, `Proceed towards Chidambaram.`, `Arrive and check in to the hotel.`, `Visit Thillai Nataraja Temple.`, `Offer prayers to Lord Shiva representing the Space / Ether Element (Akasha).`, `Visit the Chidambara Rahasyam.`, `Visit Thillai Kali Amman Temple.`, `Visit Pichavaram Mangrove Forest, subject to time availability and guest preference.`, `Return to the hotel.`, `Overnight stay in Chidambaram.`],
          },
          {
            title: `Day 5 – Chidambaram to Thiruvanaikaval – Trichy`,
            activities: [`Breakfast and check out from the hotel.`, `Proceed towards Tiruchirappalli.`, `Visit Jambukeswarar Temple at Thiruvanaikaval.`, `Offer prayers to Lord Shiva representing the Water Element (Jala).`, `Visit Akilandeswari Amman Temple.`, `Visit Ucchi Pillayar Temple at Rockfort, subject to time availability.`, `Proceed to the hotel and check in.`, `Overnight stay in Trichy.`],
          },
          {
            title: `Day 6 – Trichy and Srirangam Sightseeing`,
            activities: [`Breakfast at the hotel.`, `Visit Sri Ranganathaswamy Temple, Srirangam.`, `Visit Samayapuram Mariamman Temple.`, `Visit Uraiyur Vekkali Amman Temple, subject to time availability.`, `Visit Rockfort Temple, if not covered on the previous day.`, `Evening free for local exploration or shopping.`, `Return to the hotel.`, `Overnight stay in Trichy.`],
          },
          {
            title: `Day 7 - Departure`,
            activities: [`Breakfast and check out from the hotel.`, `Proceed towards Chennai.`, `Drop at Trichy/Chennai Airport/Railway Station for onward journey.`],
          },
        ],
      },
    ],
    andhrapradesh: [
      {
        id: 'andhrapradesh-1',
        title: `Mallikarjun Jyotirling`,
        duration: `Mallikarjun Jyotirling 3N/4D`,
        inclusions: [
          `3 Nights accommodation`,
          `Daily breakfast`,
          `Private vehicle for all transfers & sightseeing`,
          `Hyderabad pickup & drop`,
          `Driver, fuel, toll & parking charges`,
          `Sightseeing as per itinerary`,
          `Tour assistance throughout the journey`,
        ],
        days: [
          {
            title: `Day 1 – Arrival in Hyderabad & Swarnagiri Temple`,
            activities: [`Arrival at Hyderabad Airport/Railway Station.`, `Meet and greet with our representative and transfer to the hotel.`, `Visit Swarnagiri Temple, known for its grand Venkateswara Swamy idol and beautiful architecture.`, `Spend some time exploring the temple premises and seek blessings.`, `Return to Hyderabad.`, `Evening free for leisure or local exploration.`, `Overnight stay in Hyderabad.`],
          },
          {
            title: `Day 2 – Hyderabad to Srisailam`,
            activities: [`Breakfast at the hotel and check out.`, `Proceed towards Srisailam through the scenic Nallamala Hills.`, `En route enjoy the beautiful forest and Krishna River landscapes.`, `Arrive in Srisailam and check in to the hotel.`, `Visit Mallikarjuna Jyotirlinga Temple for darshan.`, `Visit Bhramaramba Devi Temple, one of the Shakti Peethas.`, `Evening free for temple rituals and spiritual activities.`, `Overnight stay in Srisailam.`],
          },
          {
            title: `Day 3 – Srisailam Sightseeing & Spiritual Exploration`,
            activities: [`Early morning visit to Mallikarjuna Temple for darshan, subject to temple timings.`, `Visit Srisailam Dam and enjoy the scenic surroundings.`, `Visit Pathala Ganga and, subject to operations, take the ropeway/steps towards the sacred waters.`, `Visit Sakshi Ganapati Temple.`, `Explore other nearby spiritual sites depending on time and temple timings.`, `Return to the hotel and relax.`, `Overnight stay in Srisailam.`],
          },
          {
            title: `Day 4 – Srisailam to Hyderabad | Departure`,
            activities: [`Breakfast at the hotel and check out.`, `Proceed towards Hyderabad.`, `En route, visit any missed attraction, subject to time availability.`, `Arrive in Hyderabad.`, `Drop at Hyderabad Airport/Railway Station for your onward journey.`, `Tour concludes with the blessings of Lord Mallikarjuna and Maa Bhramaramba.`],
          },
        ],
      },
      {
        id: 'andhrapradesh-2',
        title: `Tirupati`,
        duration: `Tirupati 2N/3D`,
        inclusions: [
          `2 Nights accommodation`,
          `Daily breakfast`,
          `Private vehicle for transfers & sightseeing`,
          `Tirupati Airport/Railway Station pickup & drop`,
          `Tirumala transfers`,
          `Driver, fuel, toll & parking charges`,
          `Sightseeing as per itinerary`,
          `Tour assistance throughout the journey`,
        ],
        days: [
          {
            title: `Day 1 – Arrival in Tirupati | Temple Exploration`,
            activities: [`Arrival at Tirupati Airport/Railway Station.`, `Meet and greet with our representative.`, `Transfer to the hotel and check in.`, `Visit Sri Padmavathi Ammavari Temple, Tiruchanur.`, `Visit Govindaraja Swamy Temple.`, `Visit Kapila Theertham Temple.`, `Evening free for rest and spiritual activities.`, `Overnight stay in Tirupati.`],
          },
          {
            title: `Day 2 – Tirumala | Sri Venkateswara Swamy Darshan`,
            activities: [`Early morning proceed towards Tirumala.`, `Visit Sri Venkateswara Swamy Temple for darshan.`, `Seek blessings at the sacred Tirumala Temple.`, `Visit Varahaswami Temple.`, `Visit Akasa Ganga, subject to time and local conditions.`, `Visit Papavinasam.`, `Return to Tirupati.`, `Evening free for leisure or additional temple visit.`, `Overnight stay in Tirupati.`],
          },
          {
            title: `Day 3 – Tirupati Sightseeing & Departure`,
            activities: [`Breakfast at the hotel and check out.`, `Visit Sri Kalahasti Temple, if departure timing permits.`, `Alternatively, explore any remaining temples in Tirupati.`, `Proceed to Tirupati Airport/Railway Station.`, `Departure for onward journey.`, `Yatra concludes with the blessings of Lord Venkateswara.`],
          },
        ],
      },
      {
        id: 'andhrapradesh-3',
        title: `Tirupati with Kalahasti`,
        duration: `Tirupati with Kalahasti 2N/3D`, 
        inclusions: [],
        days: [
          {
            title: `Day 1 – Arrival in Tirupati | Temple Exploration`,
            activities: [`Arrival at Tirupati Airport/Railway Station.`, `Meet and greet with our representative.`, `Transfer to the hotel and check in.`, `Visit Sri Padmavathi Ammavari Temple, Tiruchanur.`, `Visit Govindaraja Swamy Temple.`, `Visit Kapila Theertham Temple.`, `Evening free for rest and spiritual activities.`, `Overnight stay in Tirupati.`],
          },
          {
            title: `Day 2 – Tirumala | Sri Venkateswara Swamy Darshan`,
            activities: [`Early morning proceed towards Tirumala.`, `Visit Sri Venkateswara Swamy Temple for darshan.`, `Seek blessings at the sacred Tirumala Temple.`, `Visit Varahaswami Temple.`, `Visit Akasa Ganga, subject to time and local conditions.`, `Visit Papavinasam.`, `Return to Tirupati.`, `Evening free for leisure or additional temple visit.`, `Overnight stay in Tirupati.`],
          },
          {
            title: `Day 3 – Sri Kalahasti Temple | Departure`,
            activities: [`Early morning breakfast and check out.`, `Proceed towards Sri Kalahasteeswara Temple, Srikalahasti.`, `Seek blessings at the famous Shiva temple, traditionally associated with the Vayu (Air) element.`, `Visit the temple complex and surrounding spiritual sites, subject to time.`, `Proceed towards Tirupati.`, `Drop at Tirupati Airport/Railway Station for onward journey.`],
          },
        ],
      },
    ],
  },
}

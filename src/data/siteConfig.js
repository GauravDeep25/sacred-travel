export const siteConfig = {
  company: {
    name: "[COMPANY NAME]",
    tagline: "Journeys through time",
    logo: "[LOGO]",
    whatsapp: "[PHONE]",
    email: "contact@[COMPANY].com",
    address: "[ADDRESS]"
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
        img: "./assets/hero-aarti.jpg",
        eyebrow: "Spiritual · Paths",
        h1: "Awaken",
        h1Italic: "The Soul.",
        sub: "Embark on transformative pilgrimages."
      },
      {
        img: "./assets/hero-temple-south.jpg",
        eyebrow: "Inner · Peace",
        h1: "Path of",
        h1Italic: "Devotion.",
        sub: "Trace the footsteps of ancient seekers."
      },
      {
        img: "./assets/hero-spiti.jpg",
        eyebrow: "Quiet · Mind",
        h1: "Silent",
        h1Italic: "Retreats.",
        sub: "Find clarity in the world's most peaceful places."
      }
    ],
    items: [
      { id: 'kailash', title: "Mount Kailash Yatra", location: "Tibet", img: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&q=80&w=800", price: "Starts at ₹1,50,000" },
      { id: 'chardham', title: "Char Dham Yatra", location: "Uttarakhand", img: "https://images.unsplash.com/photo-1626014903706-932f91bc7d71?auto=format&fit=crop&q=80&w=800", price: "Starts at ₹65,000" },
      { id: 'bodhgaya', title: "Path of Awakening", location: "Bihar", img: "https://images.unsplash.com/photo-1590393275627-0c484ceeb085?auto=format&fit=crop&q=80&w=800", price: "Starts at ₹25,000" }
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
        h1: "Who",
        h1Italic: "We Are.",
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
    items: [
      { id: 'our-story', title: "Our Story", location: "The Beginning", img: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=800", price: "Since 2010" },
      { id: 'our-mission', title: "Our Mission", location: "The Philosophy", img: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&q=80&w=800", price: "Curating Soulful Journeys" },
      { id: 'our-team', title: "Our Curators", location: "The People", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", price: "Meet the Experts" }
    ]
  },

  founder: {
    name: "[FOUNDER NAME]",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    bio: "With over two decades of exploring the hidden corners of the subcontinent, [NAME] founded [COMPANY] to share the transformative power of sacred travel.",
    quote: "Travel, at its most meaningful, is a pilgrimage — a sacred journey through time and tradition, connecting you not just to places, but to the stories, spirits, and wisdom that make them timeless."
  },

  // Skeleton placeholders
  placeholders: Array(6).fill({
    title: "[TITLE PLACEHOLDER]",
    subtitle: "[SUBTITLE/LOCATION]",
    info: "[PRICE OR DURATION]",
    image: "https://placehold.co/800x1200/2A1F1A/FAF6F0?text=Image+Placeholder"
  })
};

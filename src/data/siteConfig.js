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
        img: "./src/assets/hero-spiti.jpg",
        eyebrow: "Yuga · era · Tirtha",
        h1: "Rediscover the soul",
        h1Italic: "of the mountains.",
        sub: "Curated pilgrimages to the world's most silent heights."
      },
      {
        img: "./src/assets/hero-temple-south.jpg",
        eyebrow: "Sacred · Crossing · Devotion",
        h1: "Ancient echoes",
        h1Italic: "in stone.",
        sub: "Architecture that bridges the human and the divine."
      },
      {
        img: "./src/assets/hero-aarti.jpg",
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
        img: "./src/assets/spiritual-north.jpg" 
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
        img: "./src/assets/hero-spiti.jpg",
        eyebrow: "Domestic · Journeys",
        h1: "Explore",
        h1Italic: "Sacred India.",
        sub: "Discover the timeless beauty within."
      },
      {
        img: "./src/assets/hero-temple-south.jpg",
        eyebrow: "Heritage · Stone",
        h1: "Ancient",
        h1Italic: "Wonders.",
        sub: "Walk through centuries of divine architecture."
      },
      {
        img: "./src/assets/hero-aarti.jpg",
        eyebrow: "Culture · Flow",
        h1: "Living",
        h1Italic: "Traditions.",
        sub: "Witness the vibrant pulse of local devotion."
      }
    ],
    categories: [
      { 
        bannerTitle: "North India",
        bannerDesc: "North india stuff",
        label: "North Sacred circuits", 
        img: "./src/assets/spiritual-north.jpg",

        cards: [
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "card 1", 
            img: "./src/assets/spiritual-north.jpg" 
          },
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "card 2", 
            img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" 
          },
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "card 3", 
            img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800" 
          },
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "Bespoke Paths", 
            img: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800" 
          }
        ]
      },
      { 
        bannerTitle: "Northeast India",
        bannerDesc: "Northeast india stuff",
        label: "Himalayan Trails", 
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",

        cards: [
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "card 1", 
            img: "./src/assets/spiritual-north.jpg" 
          },
          { 
            cardTitle: "card 2",
            cardDesc: "card 2 desc",
            label: "card 2", 
            img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" 
          },
          { 
            cardTitle: "card 3",
            cardDesc: "card 1 desc",
            label: "card 3", 
            img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800" 
          },
          { 
            cardTitle: "card 4",
            cardDesc: "card 1 desc",
            label: "Bespoke Paths", 
            img: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800" 
          }
        ]
      },
      { 
        bannerTitle: "West India",
        bannerDesc: "west india stuff",
        label: "River Rituals", 
        img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800",

        cards: [
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "card 1", 
            img: "./src/assets/spiritual-north.jpg" 
          },
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "card 2", 
            img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" 
          },
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "card 3", 
            img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800" 
          },
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "Bespoke Paths", 
            img: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800" 
          }
        ]
      },
      { 
        bannerTitle: "South India",
        bannerDesc: "south india stuff",
        label: "Bespoke Paths", 
        img: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800",

        cards: [
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "card 1", 
            img: "./src/assets/spiritual-north.jpg" 
          },
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "card 2", 
            img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" 
          },
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "card 3", 
            img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800" 
          },
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "Bespoke Paths", 
            img: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800" 
          }
        ]
      },
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
        img: "./src/assets/hero-spiti.jpg",
        eyebrow: "International · Journeys",
        h1: "Explore",
        h1Italic: "Sacred India.",
        sub: "Discover the timeless beauty within."
      },
      {
        img: "./src/assets/hero-temple-south.jpg",
        eyebrow: "Heritage · Stone",
        h1: "Ancient",
        h1Italic: "Wonders.",
        sub: "Walk through centuries of divine architecture."
      },
      {
        img: "./src/assets/hero-aarti.jpg",
        eyebrow: "Culture · Flow",
        h1: "Living",
        h1Italic: "Traditions.",
        sub: "Witness the vibrant pulse of local devotion."
      }
    ],
    categories: [
      { 
        bannerTitle: "North India",
        bannerDesc: "North india stuff",
        label: "North Sacred circuits", 
        img: "./src/assets/spiritual-north.jpg",

        cards: [
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "card 1", 
            img: "./src/assets/spiritual-north.jpg" 
          },
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "card 2", 
            img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" 
          },
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "card 3", 
            img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800" 
          },
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "Bespoke Paths", 
            img: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800" 
          }
        ]
      },
      { 
        bannerTitle: "Northeast India",
        bannerDesc: "Northeast india stuff",
        label: "Himalayan Trails", 
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",

        cards: [
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "card 1", 
            img: "./src/assets/spiritual-north.jpg" 
          },
          { 
            cardTitle: "card 2",
            cardDesc: "card 2 desc",
            label: "card 2", 
            img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" 
          },
          { 
            cardTitle: "card 3",
            cardDesc: "card 1 desc",
            label: "card 3", 
            img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800" 
          },
          { 
            cardTitle: "card 4",
            cardDesc: "card 1 desc",
            label: "Bespoke Paths", 
            img: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800" 
          }
        ]
      },
      { 
        bannerTitle: "West India",
        bannerDesc: "west india stuff",
        label: "River Rituals", 
        img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800",

        cards: [
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "card 1", 
            img: "./src/assets/spiritual-north.jpg" 
          },
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "card 2", 
            img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" 
          },
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "card 3", 
            img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800" 
          },
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "Bespoke Paths", 
            img: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800" 
          }
        ]
      },
      { 
        bannerTitle: "South India",
        bannerDesc: "south india stuff",
        label: "Bespoke Paths", 
        img: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800",

        cards: [
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "card 1", 
            img: "./src/assets/spiritual-north.jpg" 
          },
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "card 2", 
            img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" 
          },
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "card 3", 
            img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800" 
          },
          { 
            cardTitle: "card 1",
            cardDesc: "card 1 desc",
            label: "Bespoke Paths", 
            img: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800" 
          }
        ]
      },
    ],

    items: [
      { id: 'bhutan', title: "Kingdom of Cloud", location: "Bhutan", img: "https://images.unsplash.com/photo-1578516123433-39dfbe6e0781?auto=format&fit=crop&q=80&w=800", price: "Starts at $1,200" },
      { id: 'bali', title: "Island of Gods", location: "Indonesia", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800", price: "Starts at $950" }
    ]
  },

  spiritualjourney: {
    hero: [
      {
        img: "./src/assets/hero-aarti.jpg",
        eyebrow: "Spiritual · Paths",
        h1: "Awaken",
        h1Italic: "The Soul.",
        sub: "Embark on transformative pilgrimages."
      },
      {
        img: "./src/assets/hero-temple-south.jpg",
        eyebrow: "Inner · Peace",
        h1: "Path of",
        h1Italic: "Devotion.",
        sub: "Trace the footsteps of ancient seekers."
      },
      {
        img: "./src/assets/hero-spiti.jpg",
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
        img: "./src/assets/hero-spiti.jpg",
        eyebrow: "Curated · Experiences",
        h1: "Signature",
        h1Italic: "Retreats.",
        sub: "Immerse yourself in specialized wellness and nature paths."
      },
      {
        img: "./src/assets/hero-aarti.jpg",
        eyebrow: "Local · Immersion",
        h1: "Cultural",
        h1Italic: "Tapestry.",
        sub: "Engage deeply with regional traditions and rituals."
      },
      {
        img: "./src/assets/hero-temple-south.jpg",
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
        img: "./src/assets/hero-temple-south.jpg",
        eyebrow: "Our · Story",
        h1: "Who",
        h1Italic: "We Are.",
        sub: "Curating soulful journeys since 2010."
      },
      {
        img: "./src/assets/hero-spiti.jpg",
        eyebrow: "Our · Vision",
        h1: "The",
        h1Italic: "Philosophy.",
        sub: "Guided by a deep respect for authentic exploration."
      },
      {
        img: "./src/assets/hero-aarti.jpg",
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

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

  domestic: [
    { id: 'varanasi', title: "Eternal Kashi", location: "Uttar Pradesh", img: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=800", price: "Starts at ₹45,000" },
    { id: 'ladakh', title: "The High Passes", location: "Ladakh", img: "https://images.unsplash.com/photo-1581793745862-99fde7f73623?auto=format&fit=crop&q=80&w=800", price: "Starts at ₹85,000" },
    { id: 'rishikesh', title: "Yoga of the Ganges", location: "Uttarakhand", img: "https://images.unsplash.com/photo-1598977123418-454555150162?auto=format&fit=crop&q=80&w=800", price: "Starts at ₹35,000" }
  ],

  international: [
    { id: 'bhutan', title: "Kingdom of Cloud", location: "Bhutan", img: "https://images.unsplash.com/photo-1578516123433-39dfbe6e0781?auto=format&fit=crop&q=80&w=800", price: "Starts at $1,200" },
    { id: 'bali', title: "Island of Gods", location: "Indonesia", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800", price: "Starts at $950" }
  ],

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
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, CheckCircle2, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

// Map destination slugs to card images and page info
const destinationMeta = {
  kashmir:     { img: '/assets/kashmir-C3GCvNNI.jpg',          region: 'North India',     from: '/domestic',       fromLabel: 'Domestic' },
  ladakh:      { img: '/assets/spiritual-north-NuyL8ZKr.jpg',  region: 'North India',     from: '/domestic',       fromLabel: 'Domestic' },
  himachal:    { img: '/assets/hero-himalaya-Ben1uNJZ.jpg',     region: 'North India',     from: '/domestic',       fromLabel: 'Domestic' },
  spiti:       { img: '/assets/hero-himalaya-Ben1uNJZ.jpg',     region: 'North India',     from: '/domestic',       fromLabel: 'Domestic' },
  meghalaya:   { img: '/assets/northeast-D8OXmwI_.jpg',         region: 'Northeast India', from: '/domestic',       fromLabel: 'Domestic' },
  sikkim:      { img: '/assets/hero-himalaya-Ben1uNJZ.jpg',     region: 'Northeast India', from: '/domestic',       fromLabel: 'Domestic' },
  arunachal:   { img: '/assets/northeast-D8OXmwI_.jpg',         region: 'Northeast India', from: '/domestic',       fromLabel: 'Domestic' },
  rajasthan:   { img: '/assets/rajasthan-Dznk4KEj.jpg',         region: 'West India',      from: '/domestic',       fromLabel: 'Domestic' },
  kerala:      { img: '/assets/kerala-JKm5YrGV.jpg',            region: 'South India',     from: '/domestic',       fromLabel: 'Domestic' },
  bali:        { img: '/assets/intl-bali-Ck8GSayl.jpg',         region: 'Southeast Asia',  from: '/international',  fromLabel: 'International' },
  vietnam:     { img: '/assets/intl-vietnam-ZB5ZxQ8t.jpg',      region: 'Southeast Asia',  from: '/international',  fromLabel: 'International' },
  philippines: { img: '/assets/intl-angkor-Xa0-qQac.jpg',       region: 'Southeast Asia',  from: '/international',  fromLabel: 'International' },
  georgia:     { img: '/assets/intl-caucasus-DAV0UB-k.jpg',     region: 'CIS Countries',   from: '/international',  fromLabel: 'International' },
  japan:       { img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200', region: 'East Asia', from: '/international', fromLabel: 'International' },
  srilanka:    { img: '/assets/temple-south-CC6aHc0Q.jpg',       region: 'South Asia',      from: '/international',  fromLabel: 'International' },
};

const destinationDisplayNames = {
  kashmir: 'Kashmir', ladakh: 'Ladakh', himachal: 'Himachal Pradesh',
  spiti: 'Spiti Valley', meghalaya: 'Meghalaya', sikkim: 'Sikkim',
  arunachal: 'Arunachal Pradesh', rajasthan: 'Rajasthan', kerala: 'Kerala',
  bali: 'Bali', vietnam: 'Vietnam', philippines: 'Philippines',
  georgia: 'Georgia', japan: 'Japan', srilanka: 'Sri Lanka',
};

function DayCard({ day, index, isOpen, onToggle }) {
  return (
    <div className="border border-gray-200 bg-white overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#faf9f7] transition-colors group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4A373]/15 text-[#b8864e] text-xs font-bold flex items-center justify-center">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-serif text-base sm:text-lg text-gray-900 leading-snug">{day.title}</span>
        </div>
        <span className="ml-4 flex-shrink-0 text-[#D4A373]">
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-gray-100">
              {day.activities && day.activities.length > 0 ? (
                <ul className="space-y-2 mt-3">
                  {day.activities.map((act, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                      <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4A373]" />
                      {act}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500 mt-3 italic">Full details available on enquiry.</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ItineraryDetail() {
  const { destination } = useParams();
  const navigate = useNavigate();

  const packages = siteConfig.itineraries?.[destination] || [];
  const meta = destinationMeta[destination] || {
    img: '/assets/hero-spiti.jpg',
    region: 'India',
    from: '/',
    fromLabel: 'Home',
  };
  const displayName = destinationDisplayNames[destination] || destination;

  const [selectedPkg, setSelectedPkg] = useState(0);
  const [openDays, setOpenDays] = useState([0]); // first day open by default

  // Reset when package changes
  useEffect(() => {
    setOpenDays([0]);
  }, [selectedPkg]);

  const currentPkg = packages[selectedPkg];

  const toggleDay = (i) => {
    setOpenDays(prev =>
      prev.includes(i) ? prev.filter(d => d !== i) : [...prev, i]
    );
  };

  const expandAll = () => setOpenDays(currentPkg?.days?.map((_, i) => i) || []);
  const collapseAll = () => setOpenDays([]);

  if (!packages || packages.length === 0) {
    return (
      <div className="min-h-screen bg-[#faf9f6] flex flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="text-[#D4A373] text-xs tracking-widest uppercase font-semibold">Itinerary</p>
        <h1 className="font-serif text-4xl text-gray-900">Coming Soon</h1>
        <p className="text-gray-500 text-sm max-w-md">
          The detailed itinerary for <strong>{displayName}</strong> is being prepared. Enquire directly and we'll send you a custom programme.
        </p>
        <a
          href={`https://wa.me/918591262424?text=I'd%20like%20information%20about%20${encodeURIComponent(displayName)}%20packages`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-[#E2852B] text-white px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#c97524] transition-colors"
        >
          <MessageCircle size={16} />
          Enquire via WhatsApp
        </a>
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-2 transition-colors"
        >
          <ArrowLeft size={16} /> Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      {/* ── Hero Strip ─────────────────────────────── */}
      <div className="relative h-[55vh] min-h-[340px] w-full overflow-hidden">
        <img
          src={meta.img}
          alt={displayName}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />

        {/* Back button */}
        <div className="absolute top-6 left-6 z-10">
          <Link
            to={meta.from}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-xs font-semibold uppercase tracking-widest transition-colors"
          >
            <ArrowLeft size={16} />
            {meta.fromLabel}
          </Link>
        </div>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-12 pb-10 z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#D4A373] text-[10px] tracking-[0.3em] uppercase font-semibold mb-2"
          >
            {meta.region} · Itinerary
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="font-serif text-4xl sm:text-6xl text-white leading-tight"
          >
            {displayName}
          </motion.h1>
        </div>
      </div>

      {/* ── Duration Tab Selector ──────────────────── */}
      {packages.length > 1 && (
        <div className="bg-white border-b border-gray-200 sticky top-[55.5px] z-40">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 flex gap-1 overflow-x-auto py-0">
            {packages.map((pkg, i) => (
              <button
                key={pkg.id}
                onClick={() => setSelectedPkg(i)}
                className={`flex-shrink-0 px-5 py-4 text-[10px] font-bold uppercase tracking-[0.2em] border-b-2 transition-colors whitespace-nowrap ${
                  selectedPkg === i
                    ? 'border-[#D4A373] text-[#b8864e]'
                    : 'border-transparent text-gray-500 hover:text-gray-900'
                }`}
              >
                {pkg.duration || `Package ${i + 1}`}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Main Content ───────────────────────────── */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPkg}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Left — Day Timeline */}
              <div className="lg:col-span-2">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                  <div>
                    <p className="text-[#D4A373] text-[10px] tracking-widest uppercase font-semibold mb-1">Programme</p>
                    <h2 className="font-serif text-3xl text-gray-900">
                      Day by Day
                    </h2>
                  </div>
                  {currentPkg?.duration && (
                    <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold uppercase tracking-widest">
                      <Clock size={14} className="text-[#D4A373]" />
                      {currentPkg.duration}
                    </div>
                  )}
                </div>

                {/* Expand / Collapse all */}
                {currentPkg?.days?.length > 0 && (
                  <div className="flex gap-4 mb-5">
                    <button
                      onClick={expandAll}
                      className="text-[10px] uppercase tracking-widest font-semibold text-[#D4A373] hover:text-[#b8864e] transition-colors"
                    >
                      Expand all
                    </button>
                    <span className="text-gray-300">|</span>
                    <button
                      onClick={collapseAll}
                      className="text-[10px] uppercase tracking-widest font-semibold text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      Collapse all
                    </button>
                  </div>
                )}

                {/* Days Accordion */}
                <div className="space-y-2">
                  {currentPkg?.days?.map((day, i) => (
                    <DayCard
                      key={i}
                      day={day}
                      index={i}
                      isOpen={openDays.includes(i)}
                      onToggle={() => toggleDay(i)}
                    />
                  ))}
                  {(!currentPkg?.days || currentPkg.days.length === 0) && (
                    <p className="text-sm text-gray-500 italic">Itinerary details coming soon. Enquire for a custom programme.</p>
                  )}
                </div>
              </div>

              {/* Right — Sidebar */}
              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-28 space-y-6">

                  {/* CTA Card */}
                  <div className="bg-[#1a1209] text-white p-8">
                    <p className="text-[#D4A373] text-[10px] tracking-widest uppercase font-semibold mb-3">Book this trip</p>
                    <h3 className="font-serif text-2xl mb-2 leading-tight">{displayName}</h3>
                    {currentPkg?.duration && (
                      <p className="text-white/60 text-xs mb-6 flex items-center gap-2">
                        <Clock size={12} className="text-[#D4A373]" />
                        {currentPkg.duration}
                      </p>
                    )}
                    <a
                      href={`https://wa.me/918591262424?text=I'd%20like%20to%20enquire%20about%20the%20${encodeURIComponent(displayName)}%20${encodeURIComponent(currentPkg?.duration || '')}%20package`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-[#E2852B] text-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#c97524] transition-colors"
                    >
                      <MessageCircle size={15} />
                      Enquire via WhatsApp
                    </a>
                    <p className="text-white/40 text-xs mt-4 text-center">We reply within 24 hours</p>
                  </div>

                  {/* Inclusions Card */}
                  {currentPkg?.inclusions?.length > 0 && (
                    <div className="border border-gray-200 bg-white p-7">
                      <p className="text-[#D4A373] text-[10px] tracking-widest uppercase font-semibold mb-5">What's included</p>
                      <ul className="space-y-3">
                        {currentPkg.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5 text-emerald-600" />
                            <span className="text-sm text-gray-700 leading-relaxed">{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Other packages link */}
                  {packages.length > 1 && (
                    <div className="border border-gray-200 bg-white p-6">
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-4">Other durations</p>
                      <div className="space-y-2">
                        {packages.map((pkg, i) => (
                          <button
                            key={pkg.id}
                            onClick={() => setSelectedPkg(i)}
                            className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between transition-colors ${
                              selectedPkg === i
                                ? 'bg-[#D4A373]/10 text-[#b8864e] font-semibold'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            <span>{pkg.duration || `Package ${i + 1}`}</span>
                            <span className="text-xs text-gray-400">{pkg.days?.length || 0}d</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Sticky Mobile CTA ─────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 px-5 py-3">
        <a
          href={`https://wa.me/918591262424?text=I'd%20like%20to%20enquire%20about%20the%20${encodeURIComponent(displayName)}%20${encodeURIComponent(currentPkg?.duration || '')}%20package`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-[#E2852B] text-white py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#c97524] transition-colors"
        >
          <MessageCircle size={15} />
          Enquire via WhatsApp
        </a>
      </div>
    </div>
  );
}

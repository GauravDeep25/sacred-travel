import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Share2,
  Check,
  Compass,
  List,
  MapPin,
} from 'lucide-react';
import ItineraryMapScroll from '../components/itinerary/ItineraryMapScroll';
import {
  destinationMeta,
  destinationDisplayNames,
  getDestinationPackages,
  getPackageSlug,
  findPackageIndex,
  extractDurationShort,
  CANONICAL_BASE,
} from '../data/itineraryRegistry';
import { trackWhatsAppClick, trackEvent } from '../utils/analytics';

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
  const { destination, subItinerary } = useParams();
  const navigate = useNavigate();

  // Normalize parameters
  const cleanDest = (destination || '').toLowerCase().trim().replace(/[^a-z0-9-]/g, '');
  const cleanSub = (subItinerary || '').toLowerCase().trim().replace(/[^a-z0-9-]/g, '');

  // Backward compatibility: map legacy state routes to specific places
  let resolvedDest = cleanDest;
  let resolvedSub = cleanSub;
  if (cleanDest === 'uttarakhand') {
    if (cleanSub.includes('adi') || cleanSub.includes('kailash') || cleanSub.includes('7n')) {
      resolvedDest = 'adi-kailash';
      resolvedSub = '7n-8d';
    } else if (cleanSub.includes('badrinath') || cleanSub.includes('4n')) {
      resolvedDest = 'badrinath';
      resolvedSub = '4n-5d';
    } else if (cleanSub.includes('kainchi') || cleanSub.includes('2n')) {
      resolvedDest = 'kainchi-dham';
      resolvedSub = '2n-3d';
    } else if (cleanSub.includes('char') || cleanSub.includes('9n') || cleanSub.includes('10d')) {
      resolvedDest = 'char-dham';
      resolvedSub = '9n-10d';
    } else if (cleanSub.includes('do') || cleanSub.includes('5n')) {
      resolvedDest = 'do-dham';
      resolvedSub = '5n-6d';
    }
  }

  const packages = getDestinationPackages(resolvedDest, resolvedSub);
  const meta = destinationMeta[resolvedDest] || {
    img: '/assets/hero-spiti.jpg',
    region: 'India',
    from: '/',
    fromLabel: 'Home',
  };
  const displayName = destinationDisplayNames[resolvedDest] || (resolvedDest.charAt(0).toUpperCase() + resolvedDest.slice(1));

  // Derive selected package index directly from the URL route
  const selectedPkg = packages.length > 0 ? findPackageIndex(packages, resolvedDest, resolvedSub) : 0;
  const [openDays, setOpenDays] = useState([0]); // first day open by default
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState('map'); // 'map' (interactive map & unrolling scroll) or 'list' (accordion)

  const currentPkg = packages[selectedPkg];

  // Dynamic SEO meta tags and document title for each sub-itinerary endpoint
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const doc = window.document;
    if (currentPkg) {
      const dur = extractDurationShort(currentPkg.duration) || currentPkg.duration;
      doc.title = `${displayName} ${dur} Tour Itinerary | Yugatīrtha`;
    } else if (displayName) {
      doc.title = `${displayName} Tour Itineraries & Packages | Yugatīrtha`;
    }

    // Set canonical link for SEO
    let canonical = doc.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = doc.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      doc.head.appendChild(canonical);
    }

    const currentSlug = currentPkg ? getPackageSlug(currentPkg, resolvedDest, selectedPkg) : '';
    const canonicalUrl = currentSlug
      ? `${CANONICAL_BASE}/itinerary/${resolvedDest}/${currentSlug}`
      : `${CANONICAL_BASE}/itinerary/${resolvedDest}`;
    canonical.setAttribute('href', canonicalUrl);
  }, [displayName, resolvedDest, selectedPkg, currentPkg]);

  const handleSelectPackage = (index) => {
    const targetPkg = packages[index];
    if (targetPkg) {
      const slug = getPackageSlug(targetPkg, resolvedDest, index);
      trackEvent('select_package', {
        destination: resolvedDest,
        package_duration: targetPkg.duration || slug,
      });
      navigate(`/itinerary/${resolvedDest}/${slug}`);
      setOpenDays([0]);
    }
  };

  const handleCopyLink = () => {
    const slug = currentPkg ? getPackageSlug(currentPkg, resolvedDest, selectedPkg) : '';
    const shareUrl = slug
      ? `${window.location.origin}/itinerary/${resolvedDest}/${slug}`
      : `${window.location.origin}/itinerary/${resolvedDest}`;
    trackEvent('share_itinerary', {
      destination: resolvedDest,
      package_duration: currentPkg?.duration || 'standard',
      share_url: shareUrl,
    });
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const toggleDay = (i) => {
    setOpenDays(prev =>
      prev.includes(i) ? prev.filter(d => d !== i) : [...prev, i]
    );
  };

  const expandAll = () => setOpenDays(currentPkg?.days?.map((_, i) => i) || []);
  const collapseAll = () => setOpenDays([]);

  if (!packages || packages.length === 0) {
    return (
      <div className="min-h-screen bg-[#faf9f6] flex flex-col items-center justify-center gap-6 px-6 pt-32 pb-16 text-center">
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
      <div className="relative h-[55vh] min-h-[380px] w-full overflow-hidden">
        <img
          src={meta.img}
          alt={displayName}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />

        {/* Back button positioned safely below fixed navbar */}
        <div className="absolute top-24 left-0 right-0 z-20 w-full max-w-7xl mx-auto px-6">
          <Link
            to={meta.from}
            className="inline-flex items-center gap-2 text-white/90 hover:text-white text-xs font-semibold uppercase tracking-widest transition-colors bg-black/30 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/20 hover:border-white/40"
          >
            <ArrowLeft size={14} />
            {meta.fromLabel}
          </Link>
        </div>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 pb-10 z-10 w-full max-w-7xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#D4A373] text-[10px] tracking-[0.3em] uppercase font-semibold mb-2"
          >
            {meta.region} · {extractDurationShort(currentPkg?.duration) || currentPkg?.duration || 'Itinerary'}
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

      {/* ── Duration Tab Selector (Sub-Itinerary Endpoints) ── */}
      {packages.length > 1 && (
        <div className="bg-white border-b border-gray-200 sticky top-[68px] z-40 shadow-xs">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 flex items-center justify-between">
            <div className="flex gap-1 overflow-x-auto py-0">
              {packages.map((pkg, i) => {
                const isSelected = selectedPkg === i;
                const slug = getPackageSlug(pkg, resolvedDest, i);
                const shortDur = extractDurationShort(pkg.duration) || pkg.duration || `Package ${i + 1}`;
                return (
                  <Link
                    key={pkg.id || i}
                    to={`/itinerary/${resolvedDest}/${slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSelectPackage(i);
                    }}
                    className={`flex-shrink-0 px-5 py-4 text-[10px] font-bold uppercase tracking-[0.2em] border-b-2 transition-colors whitespace-nowrap ${
                      isSelected
                        ? 'border-[#D4A373] text-[#b8864e]'
                        : 'border-transparent text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {shortDur}
                  </Link>
                );
              })}
            </div>

            <button
              onClick={handleCopyLink}
              title="Copy direct link to this sub-itinerary"
              className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-[#b8864e] px-3 py-1.5 rounded transition-colors"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald-600" />
                  <span className="text-emerald-600 font-semibold">Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 size={13} />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* ── Main Content ───────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Top View Mode Switcher & Circuit Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-5 border-b border-gray-200">
          <div>
            <div className="flex items-center gap-2 text-[#D4A373] text-[10px] tracking-widest uppercase font-semibold mb-1">
              <span>{displayName} Circuit</span>
              {currentPkg?.duration && (
                <>
                  <span>•</span>
                  <span className="text-gray-500 font-normal">{currentPkg.duration}</span>
                </>
              )}
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-gray-900">
              {currentPkg?.title && currentPkg.title !== displayName ? currentPkg.title : 'Curated Pilgrimage Plan'}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* View Switcher Toggle */}
            <div className="inline-flex items-center border border-[#E7E1D7] bg-white divide-x divide-[#E7E1D7] shadow-2xs">
              <button
                onClick={() => setViewMode('map')}
                className={`inline-flex items-center gap-2 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
                  viewMode === 'map'
                    ? 'bg-primary text-white'
                    : 'text-[#332D29] hover:bg-[#F9F7F2] hover:text-primary'
                }`}
                title="View interactive map and unrolling manuscript scrolls"
              >
                <Compass size={13} />
                <span>Map & Scroll</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`inline-flex items-center gap-2 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
                  viewMode === 'list'
                    ? 'bg-primary text-white'
                    : 'text-[#332D29] hover:bg-[#F9F7F2] hover:text-primary'
                }`}
                title="View original day-by-day accordion list"
              >
                <List size={13} />
                <span>Classic List</span>
              </button>
            </div>

            {/* Share Button */}
            <button
              onClick={handleCopyLink}
              title="Copy direct link to this sub-itinerary"
              className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#332D29] hover:text-primary px-4 py-2.5 border border-[#E7E1D7] bg-white hover:bg-[#F9F7F2] transition-colors shadow-2xs"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald-600" />
                  <span className="text-emerald-600 font-semibold">Copied</span>
                </>
              ) : (
                <>
                  <Share2 size={13} />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {viewMode === 'map' ? (
            /* ── VIEW 1: Interactive Journey Map & Royal Parchment Scroll ── */
            <motion.div
              key={`map-${selectedPkg}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="space-y-12"
            >
              <ItineraryMapScroll
                destination={resolvedDest}
                displayName={displayName}
                packageData={currentPkg}
              />

              {/* Lower Details Row: Inclusions & WhatsApp Booking Concierge */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t border-[#E7E1D7]">
                
                {/* 1. What's Included */}
                {currentPkg?.inclusions?.length > 0 && (
                  <div className="lg:col-span-2 border border-[#E7E1D7] bg-[#FCFBF8] p-8 shadow-xs">
                    <div className="flex items-center gap-2 text-primary text-[10px] tracking-[0.25em] uppercase font-bold mb-4">
                      <CheckCircle2 size={14} className="text-emerald-700" />
                      <span>Sacred Inclusions & Comforts</span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {currentPkg.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#332D29] leading-relaxed">
                          <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5 text-emerald-700" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 2. Direct WhatsApp Booking Concierge */}
                <div className="border border-[#E7E1D7] bg-[#1a1209] text-white p-8 shadow-sm flex flex-col justify-between">
                  <div>
                    <p className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold mb-2">Private Circuit Concierge</p>
                    <h3 className="font-serif text-2xl text-white mb-2 leading-tight">{displayName}</h3>
                    {currentPkg?.duration && (
                      <p className="text-white/60 text-xs mb-4 flex items-center gap-2">
                        <Clock size={12} className="text-primary" />
                        {currentPkg.duration}
                      </p>
                    )}
                    <p className="text-xs text-white/70 leading-relaxed mb-6">
                      Customise your travel dates, pickup points, hotel categories and VIP temple passes directly with our dedicated travel desk.
                    </p>
                  </div>

                  <div>
                    <a
                      href={`https://wa.me/918591262424?text=I'd%20like%20to%20enquire%20about%20the%20${encodeURIComponent(displayName)}%20${encodeURIComponent(currentPkg?.duration || '')}%20package`}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => trackWhatsAppClick('itinerary_map_cta', `${displayName} - ${currentPkg?.duration || ''}`)}
                      className="flex items-center justify-center gap-2 w-full bg-primary text-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#c97524] transition-colors shadow-sm"
                    >
                      <MessageCircle size={15} />
                      Enquire via WhatsApp
                    </a>
                    <p className="text-white/40 text-[10px] mt-2.5 text-center">Prompt assistance within 24 hours</p>
                  </div>
                </div>

              </div>
            </motion.div>
          ) : (
            /* ── VIEW 2: Classic Accordion & Sidebar List ── */
            <motion.div
              key={`list-${selectedPkg}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Left — Day Timeline */}
                <div className="lg:col-span-2">
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
                        onClick={() => trackWhatsAppClick('itinerary_sidebar', `${displayName} - ${currentPkg?.duration || ''}`)}
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
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-4">All Circuits & Durations</p>
                        <div className="space-y-2">
                          {packages.map((pkg, i) => {
                            const slug = getPackageSlug(pkg, resolvedDest, i);
                            const isSelected = selectedPkg === i;
                            const shortDur = extractDurationShort(pkg.duration) || pkg.duration || `Package ${i + 1}`;
                            return (
                              <Link
                                key={pkg.id || i}
                                to={`/itinerary/${resolvedDest}/${slug}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleSelectPackage(i);
                                }}
                                className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between transition-colors ${
                                  isSelected
                                    ? 'bg-[#D4A373]/10 text-[#b8864e] font-semibold border-l-2 border-[#D4A373]'
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`}
                              >
                                <span>{shortDur}</span>
                                <span className="text-xs text-gray-400">{pkg.days?.length || 0}d</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Sticky Mobile CTA ─────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 px-5 py-3">
        <a
          href={`https://wa.me/918591262424?text=I'd%20like%20to%20enquire%20about%20the%20${encodeURIComponent(displayName)}%20${encodeURIComponent(currentPkg?.duration || '')}%20package`}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackWhatsAppClick('itinerary_sticky_mobile', `${displayName} - ${currentPkg?.duration || ''}`)}
          className="flex items-center justify-center gap-2 w-full bg-[#E2852B] text-white py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#c97524] transition-colors"
        >
          <MessageCircle size={15} />
          Enquire via WhatsApp
        </a>
      </div>
    </div>
  );
}

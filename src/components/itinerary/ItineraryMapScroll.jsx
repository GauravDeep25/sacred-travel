import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Play,
  Pause,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Crosshair,
  Moon,
  MessageCircle,
  Sparkles,
  Scroll,
  List
} from 'lucide-react';

/**
 * Clean & extract human-friendly stop names & night stays from day titles & activities
 */
function parseDayDetails(day, index, totalDays) {
  const fullTitle = (day?.title || `Day ${index + 1}`).trim();

  // Cleanly strip prefixes like "Day 1 -", "Day 1 :", "Day 1 |", "Day 1 –", "Day 1.", "Day 01:"
  let titleWithoutDay = fullTitle
    .replace(/^Day\s*\d+\s*[:|–—-]\s*/i, '')
    .replace(/^Day\s*\d+\.?\s*/i, '')
    .trim();

  if (!titleWithoutDay) {
    titleWithoutDay = `Stop ${index + 1}`;
  }

  // Extract a clean short stop/place name (before secondary delimiters)
  let stopName = titleWithoutDay;
  for (const delimiter of [' – ', ' - ', ' — ', ' | ', '. ']) {
    if (stopName.includes(delimiter)) {
      stopName = stopName.split(delimiter)[0].trim();
      break;
    }
  }

  // Handle "Kathgodam to Pithoragarh" -> "Pithoragarh" (or Kathgodam for Day 1)
  if (stopName.toLowerCase().includes(' to ')) {
    const parts = stopName.split(/\s+to\s+/i);
    stopName = index === 0 ? `${parts[0].trim()} → ${parts[1]?.trim() || ''}` : (parts[1]?.trim() || parts[0].trim());
  }

  // Find Night Stay in activities
  let nightStay = null;
  const activities = day?.activities || [];
  for (const act of activities) {
    const match = act.match(/(?:Night\s*stay|Overnight\s*stay\s*(?:in|at)?)\s*[:–—-]?\s*([A-Za-z0-9\s/]+)/i);
    if (match && match[1]) {
      nightStay = match[1].replace(/[.,]/g, '').trim();
      break;
    }
  }

  // Determine stage tag
  let stageType = 'Waypoint';
  if (index === 0) stageType = 'Circuit Origin';
  else if (index === totalDays - 1) stageType = 'Final Departure';
  else if (index === Math.floor(totalDays / 2)) stageType = 'Sacred Pinnacle';

  return {
    dayNumber: index + 1,
    fullTitle,
    titleWithoutDay,
    stopName,
    nightStay,
    activities,
    stageType,
  };
}

/**
 * Calculates responsive, organic cartographic coordinates for N days
 * Across an enlarged 1200 x 600 canvas
 */
function calculateWaypointCoordinates(totalDays) {
  const width = 1200;
  const height = 600;
  const paddingX = 140;
  const paddingY = 120;

  if (totalDays <= 1) {
    return [{ x: width / 2, y: height / 2 }];
  }

  const points = [];
  for (let i = 0; i < totalDays; i++) {
    const t = i / (totalDays - 1); // 0 to 1

    // Natural curving circuit across the landscape
    const x = paddingX + t * (width - 2 * paddingX);

    // Sinusoidal crest for Himalayan elevation peaks
    const elevationArch = Math.sin(t * Math.PI) * 210;
    const meander = Math.sin(t * Math.PI * 2.8) * 60;
    const baseY = height - paddingY - 30;
    const y = baseY - elevationArch + meander;

    points.push({
      x: Math.round(x),
      y: Math.round(Math.max(paddingY, Math.min(height - paddingY, y)))
    });
  }

  return points;
}

/**
 * Generates smooth SVG cubic Bezier curve string connecting waypoints
 */
function generateCurvedPath(points) {
  if (points.length < 2) return '';
  let d = `M ${points[0].x} ${points[0].y}`;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i === 0 ? 0 : i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2 < points.length ? i + 2 : i + 1];

    const cp1x = p1.x + (p2.x - p0.x) / 5;
    const cp1y = p1.y + (p2.y - p0.y) / 5;
    const cp2x = p2.x - (p3.x - p1.x) / 5;
    const cp2y = p2.y - (p3.y - p1.y) / 5;

    d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x} ${p2.y}`;
  }
  return d;
}

const WORLD_WIDTH = 1200;
const WORLD_HEIGHT = 600;
const MIN_ZOOM = 1.0;
const MAX_ZOOM = 4.0;
const POINT_FOCUS_ZOOM = 2.4;
const MOBILE_FOCUS_ZOOM = 3.4;

export default function ItineraryMapScroll({
  destination: _destination,
  displayName,
  packageData,
}) {
  const days = packageData?.days || [];
  const totalDays = days.length;

  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [isPlayingTour, setIsPlayingTour] = useState(false);
  const [hoveredDayIndex, setHoveredDayIndex] = useState(null);

  // Parsed data & coordinates
  const parsedDays = days.map((day, idx) => parseDayDetails(day, idx, totalDays));
  const coordinates = useMemo(() => calculateWaypointCoordinates(totalDays), [totalDays]);
  const fullPathD = generateCurvedPath(coordinates);

  const activePoints = coordinates.slice(0, selectedDayIndex + 1);
  const activePathD = activePoints.length > 1 ? generateCurvedPath(activePoints) : '';

  // Detect mobile viewports (< 768px)
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });
  const [mobileSubView, setMobileSubView] = useState('map'); // 'map' (interactive map) or 'stops' (vertical circuit stops timeline)

  // Pan & Zoom state: in mobile view, default to 3.4x zoom and focused on current checkpoint
  const [zoom, setZoom] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return MOBILE_FOCUS_ZOOM;
    }
    return 1.0;
  });

  const [center, setCenter] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768 && coordinates[0]) {
      return { x: coordinates[0].x, y: coordinates[0].y };
    }
    return { x: 600, y: 300 };
  });

  const [isFocusMode, setIsFocusMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });
  const [isDragging, setIsDragging] = useState(false);
  const [isPinching, setIsPinching] = useState(false);

  const dragStartRef = useRef({ x: 0, y: 0, centerStart: { x: 600, y: 300 } });
  const pinchStartRef = useRef({ dist: 0, zoom: 1.0 });

  const svgContainerRef = useRef(null);
  const scrollSectionRef = useRef(null);
  const scrollTouchStartRef = useRef({ x: 0, y: 0 });

  // Detect mobile resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // In mobile view, default map to 3.4x zoom and focused on the current checkpoint
  useEffect(() => {
    if (isMobile && coordinates[selectedDayIndex]) {
      const pt = coordinates[selectedDayIndex];
      setCenter({ x: pt.x, y: pt.y });
      setZoom(MOBILE_FOCUS_ZOOM);
      setIsFocusMode(true);
    }
  }, [isMobile, coordinates, selectedDayIndex]);

  // 1. Calculate maximum activity count and maximum text volume across all days in this itinerary
  const maxContentMetrics = useMemo(() => {
    if (!days || days.length === 0) {
      return { maxActs: 4, maxLinesMobile: 14, maxLinesDesktop: 10 };
    }

    let maxActs = 0;
    let maxLinesMobile = 0;
    let maxLinesDesktop = 0;

    days.forEach((d) => {
      const acts = d.activities || [];
      maxActs = Math.max(maxActs, acts.length);

      const titleLen = (d.title || '').length;
      // Mobile text column (~300px): ~32 chars/line for titles, ~36 for activities
      const titleLinesMob = Math.max(1, Math.ceil(titleLen / 32));
      const actLinesMob = acts.reduce((sum, a) => sum + Math.max(1, Math.ceil(a.length / 36)), 0);
      const totalMob = titleLinesMob + actLinesMob + acts.length * 0.5;

      // Desktop text column (~700px): ~65 chars/line for titles, ~75 for activities
      const titleLinesDesk = Math.max(1, Math.ceil(titleLen / 65));
      const actLinesDesk = acts.reduce((sum, a) => sum + Math.max(1, Math.ceil(a.length / 75)), 0);
      const totalDesk = titleLinesDesk + actLinesDesk + acts.length * 0.5;

      maxLinesMobile = Math.max(maxLinesMobile, totalMob);
      maxLinesDesktop = Math.max(maxLinesDesktop, totalDesk);
    });

    return {
      maxActs: Math.max(maxActs, 4),
      maxLinesMobile: Math.max(maxLinesMobile, 12),
      maxLinesDesktop: Math.max(maxLinesDesktop, 8),
    };
  }, [days]);

  // 2. Compute a constant, fixed content height calibrated to fit the maximum text content
  const fixedContentHeight = useMemo(() => {
    if (isMobile) {
      // Mobile: fixed height so the scroll never changes size between days
      return Math.max(420, 150 + Math.round(maxContentMetrics.maxLinesMobile * 24));
    }
    // Desktop: fixed height calibrated to the maximum text content across all days
    return Math.max(500, 170 + Math.round(maxContentMetrics.maxLinesDesktop * 27));
  }, [isMobile, maxContentMetrics]);

  // Focus on a specific point with camera glide
  const focusOnPoint = useCallback((index, targetZoom = POINT_FOCUS_ZOOM) => {
    const pt = coordinates[index];
    if (pt) {
      setCenter({ x: pt.x, y: pt.y });
      setZoom(targetZoom);
      setIsFocusMode(true);
    }
  }, [coordinates]);

  // Reset to full overview
  const resetToOverview = useCallback(() => {
    setCenter({ x: 600, y: 300 });
    setZoom(1.0);
    setIsFocusMode(false);
  }, []);

  // When selected day changes and focus mode is on, glide to that point
  useEffect(() => {
    if (isFocusMode && coordinates[selectedDayIndex]) {
      const pt = coordinates[selectedDayIndex];
      setCenter({ x: pt.x, y: pt.y });
    }
  }, [selectedDayIndex, isFocusMode, coordinates]);

  // Tour Auto-Play effect
  useEffect(() => {
    let timer;
    if (isPlayingTour && totalDays > 1) {
      timer = setInterval(() => {
        setSelectedDayIndex((prev) => {
          if (prev >= totalDays - 1) {
            setIsPlayingTour(false);
            return prev;
          }
          return prev + 1;
        });
      }, 3800);
    }
    return () => clearInterval(timer);
  }, [isPlayingTour, totalDays]);

  // Handle Day Selection with directional transition
  const handleSelectDay = (index, shouldFocus = isFocusMode) => {
    setIsPlayingTour(false);
    setSlideDirection(index >= selectedDayIndex ? 1 : -1);
    setSelectedDayIndex(index);
    if (shouldFocus || isMobile) {
      focusOnPoint(index, isMobile ? MOBILE_FOCUS_ZOOM : POINT_FOCUS_ZOOM);
    }
  };

  const handleNextDay = () => {
    if (selectedDayIndex < totalDays - 1) {
      setSlideDirection(1);
      const nextIdx = selectedDayIndex + 1;
      setSelectedDayIndex(nextIdx);
      if (isFocusMode || isMobile) {
        focusOnPoint(nextIdx, isMobile ? MOBILE_FOCUS_ZOOM : POINT_FOCUS_ZOOM);
      }
    }
  };

  const handlePrevDay = () => {
    if (selectedDayIndex > 0) {
      setSlideDirection(-1);
      const prevIdx = selectedDayIndex - 1;
      setSelectedDayIndex(prevIdx);
      if (isFocusMode || isMobile) {
        focusOnPoint(prevIdx, isMobile ? MOBILE_FOCUS_ZOOM : POINT_FOCUS_ZOOM);
      }
    }
  };

  // Touch Swipe navigation on the Manuscript Scroll
  // Swiping Left -> Next Day, Swiping Right -> Prev Day
  const handleScrollTouchStart = (e) => {
    if (e.touches && e.touches.length === 1) {
      scrollTouchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  };

  const handleScrollTouchEnd = (e) => {
    if (e.changedTouches && e.changedTouches.length > 0) {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaX = touchEndX - scrollTouchStartRef.current.x;
      const deltaY = touchEndY - scrollTouchStartRef.current.y;

      // Minimum horizontal swipe distance of 35px and distinctly horizontal (not vertical scroll)
      if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY) * 1.1) {
        if (deltaX < 0) {
          handleNextDay();
        } else {
          handlePrevDay();
        }
      }
    }
  };

  // Zoom buttons
  const handleZoomIn = () => {
    setZoom((z) => Math.min(MAX_ZOOM, parseFloat((z + 0.4).toFixed(1))));
  };

  const handleZoomOut = () => {
    setZoom((z) => {
      const newZ = Math.max(MIN_ZOOM, parseFloat((z - 0.4).toFixed(1)));
      if (newZ <= 1.05) setIsFocusMode(false);
      return newZ;
    });
  };

  // Toggle Single Point Focus mode
  const toggleFocusMode = () => {
    if (isFocusMode) {
      resetToOverview();
    } else {
      focusOnPoint(selectedDayIndex, isMobile ? MOBILE_FOCUS_ZOOM : POINT_FOCUS_ZOOM);
    }
  };

  // Dragging to Pan on PC
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      centerStart: { ...center },
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !svgContainerRef.current) return;
    const rect = svgContainerRef.current.getBoundingClientRect();
    const scaleX = (WORLD_WIDTH / zoom) / rect.width;
    const scaleY = (WORLD_HEIGHT / zoom) / rect.height;

    const dx = (e.clientX - dragStartRef.current.x) * scaleX;
    const dy = (e.clientY - dragStartRef.current.y) * scaleY;

    setCenter({
      x: dragStartRef.current.centerStart.x - dx,
      y: dragStartRef.current.centerStart.y - dy,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile (1 finger pan, 2 fingers pinch to zoom)
  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      setIsPinching(true);
      setIsDragging(false);
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      pinchStartRef.current = { dist, zoom };
    } else if (e.touches.length === 1) {
      setIsDragging(true);
      setIsPinching(false);
      dragStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        centerStart: { ...center },
      };
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && isPinching) {
      e.preventDefault();
      const currentDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      if (pinchStartRef.current.dist > 0) {
        const factor = currentDist / pinchStartRef.current.dist;
        const newZoom = Math.max(
          MIN_ZOOM,
          Math.min(MAX_ZOOM, parseFloat((pinchStartRef.current.zoom * factor).toFixed(2)))
        );
        setZoom(newZoom);
        if (newZoom <= 1.05) setIsFocusMode(false);
      }
    } else if (e.touches.length === 1 && isDragging && svgContainerRef.current) {
      const rect = svgContainerRef.current.getBoundingClientRect();
      const scaleX = (WORLD_WIDTH / zoom) / rect.width;
      const scaleY = (WORLD_HEIGHT / zoom) / rect.height;

      const dx = (e.touches[0].clientX - dragStartRef.current.x) * scaleX;
      const dy = (e.touches[0].clientY - dragStartRef.current.y) * scaleY;

      setCenter({
        x: dragStartRef.current.centerStart.x - dx,
        y: dragStartRef.current.centerStart.y - dy,
      });
    }
  };

  const handleTouchEnd = (e) => {
    if (e.touches.length < 2) {
      setIsPinching(false);
    }
    if (e.touches.length === 0) {
      setIsDragging(false);
    }
  };

  // Calculate dynamic SVG viewBox based on current center and zoom
  const vbWidth = WORLD_WIDTH / zoom;
  const vbHeight = WORLD_HEIGHT / zoom;
  const clampedCenterX = Math.max(vbWidth / 2, Math.min(WORLD_WIDTH - vbWidth / 2, center.x));
  const clampedCenterY = Math.max(vbHeight / 2, Math.min(WORLD_HEIGHT - vbHeight / 2, center.y));
  const vbX = Math.round(clampedCenterX - vbWidth / 2);
  const vbY = Math.round(clampedCenterY - vbHeight / 2);
  const dynamicViewBox = `${vbX} ${vbY} ${Math.round(vbWidth)} ${Math.round(vbHeight)}`;

  const currentParsedDay = parsedDays[selectedDayIndex] || parsedDays[0];

  const cleanTitle = useMemo(() => {
    const raw = packageData?.title || displayName || '';
    // Strip any ": Day 1 to Day 3", "Day m to day n", or similar range pattern
    const withoutDays = raw
      .replace(/:\s*Day\s*\d+\s*(?:to|-)\s*Day\s*\d+/gi, '')
      .replace(/\s*Day\s*\d+\s*(?:to|-)\s*Day\s*\d+/gi, '')
      .replace(/:\s*Day\s*\d+\s*to\s*\d+/gi, '')
      .trim();

    return withoutDays.toLowerCase().includes('expedition')
      ? withoutDays
      : `${withoutDays} Expedition`;
  }, [packageData?.title, displayName]);

  const whatsappMessage = encodeURIComponent(
    `Namaste! I would like to enquire about ${displayName} (${packageData?.duration || 'Tour'}), specifically Day ${currentParsedDay?.dayNumber}: ${currentParsedDay?.titleWithoutDay}.`
  );
  const whatsappUrl = `https://wa.me/918591262424?text=${whatsappMessage}`;

  return (
    <div className="w-full space-y-10">

      {/* ── TOP CONTROL DECK: EDITORIAL HEADER (RESPONSIVE & DECLUTTERED) ────────── */}
      <div className="border border-[#E5E3DB] bg-[#FCFBF8] shadow-xs">
        <div className="p-4 sm:p-8 pb-3 sm:pb-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
            <div>
              <p className="eyebrow !mb-1.5 sm:!mb-2 flex items-center gap-2 text-[9px] sm:text-[10px]">
                <Compass size={13} className="text-primary animate-spin-slow shrink-0" />
                <span>Interactive Sacred Circuit Map</span>
              </p>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-charcoal tracking-tight">
                {cleanTitle}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/70 mt-1 max-w-2xl leading-relaxed hidden sm:block">
                Drag to pan across the sacred terrain or use the navigation controls below to explore each day's plan.
              </p>
            </div>

            {/* Desktop Action Toolbar (Preserved for PC) */}
            <div className="hidden md:flex flex-wrap items-center gap-2">

              {/* Single Point Focus vs Full Overview Toggle */}
              <button
                onClick={toggleFocusMode}
                className={`inline-flex items-center gap-2 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] border transition-colors ${isFocusMode
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-charcoal border-[#E5E3DB] hover:border-primary hover:text-primary'
                  }`}
                title={isFocusMode ? 'Zoom out to view full circuit' : 'Focus camera on Day ' + (selectedDayIndex + 1)}
              >
                <Crosshair size={13} />
                <span>{isFocusMode ? `Focus: Day ${selectedDayIndex + 1}` : 'Focus Point'}</span>
              </button>

              {/* Auto-Play Tour */}
              <button
                onClick={() => {
                  setIsPlayingTour(!isPlayingTour);
                  if (!isPlayingTour && !isFocusMode) {
                    focusOnPoint(selectedDayIndex);
                  }
                }}
                className={`inline-flex items-center gap-2 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] border transition-colors ${isPlayingTour
                    ? 'bg-[#003525] text-white border-[#003525]'
                    : 'bg-white text-charcoal border-[#E5E3DB] hover:border-primary hover:text-primary'
                  }`}
              >
                {isPlayingTour ? <Pause size={13} /> : <Play size={13} />}
                <span>{isPlayingTour ? 'Pause' : 'Auto Tour'}</span>
              </button>

              {/* Reset View */}
              <button
                onClick={resetToOverview}
                title="Reset view to full route"
                className="p-2.5 border border-[#E5E3DB] bg-white text-charcoal hover:border-primary hover:text-primary transition-colors"
              >
                <RotateCcw size={13} />
              </button>

              {/* Prev / Next Day Navigator */}
              <div className="inline-flex items-center border border-[#E5E3DB] bg-white divide-x divide-[#E5E3DB]">
                <button
                  onClick={handlePrevDay}
                  disabled={selectedDayIndex === 0}
                  className="p-2.5 hover:bg-[#F9F7F2] disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-charcoal"
                  title="Previous Stop"
                >
                  <ChevronLeft size={15} />
                </button>
                <span className="text-[10px] font-bold px-3 text-charcoal tracking-[0.2em] uppercase whitespace-nowrap">
                  DAY {selectedDayIndex + 1}/{totalDays}
                </span>
                <button
                  onClick={handleNextDay}
                  disabled={selectedDayIndex === totalDays - 1}
                  className="p-2.5 hover:bg-[#F9F7F2] disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-charcoal"
                  title="Next Stop"
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>

            {/* Mobile-Only Action Deck (Clean, Non-Cluttered & Thumb-Friendly) */}
            <div className="flex md:hidden items-center justify-between gap-2 pt-1 border-t border-[#E5E3DB]/80">
              {/* Mobile Sub-View Switcher: Interactive Map vs Vertical Circuit Stops */}
              <div className="inline-flex items-center border border-[#E5E3DB] bg-white divide-x divide-[#E5E3DB] shadow-2xs">
                <button
                  onClick={() => setMobileSubView('map')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider transition-colors ${mobileSubView === 'map'
                      ? 'bg-primary text-white'
                      : 'text-charcoal hover:bg-[#F9F7F2]'
                    }`}
                >
                  <Compass size={11} />
                  <span>Map</span>
                </button>
                <button
                  onClick={() => setMobileSubView('stops')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider transition-colors ${mobileSubView === 'stops'
                      ? 'bg-primary text-white'
                      : 'text-charcoal hover:bg-[#F9F7F2]'
                    }`}
                >
                  <List size={11} />
                  <span>Stops ({totalDays})</span>
                </button>
              </div>

              {/* Mobile Controls: Stepper & Camera Focus */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={toggleFocusMode}
                  className={`inline-flex items-center gap-1 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wider border transition-colors ${isFocusMode
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-charcoal border-[#E5E3DB]'
                    }`}
                  title={isFocusMode ? 'Show Full Route' : 'Focus Day'}
                >
                  <Crosshair size={11} />
                  <span>{isFocusMode ? 'Focused' : 'Overview'}</span>
                </button>

                <button
                  onClick={() => {
                    setIsPlayingTour(!isPlayingTour);
                    if (!isPlayingTour && !isFocusMode) {
                      focusOnPoint(selectedDayIndex, MOBILE_FOCUS_ZOOM);
                    }
                  }}
                  className={`p-1.5 border transition-colors ${isPlayingTour
                      ? 'bg-[#003525] text-white border-[#003525]'
                      : 'bg-white text-charcoal border-[#E5E3DB]'
                    }`}
                  title={isPlayingTour ? 'Pause Tour' : 'Auto Play'}
                >
                  {isPlayingTour ? <Pause size={12} /> : <Play size={12} />}
                </button>

                <button
                  onClick={resetToOverview}
                  className="p-1.5 border border-[#E5E3DB] bg-white text-charcoal hover:text-primary transition-colors"
                  title="Reset Overview"
                >
                  <RotateCcw size={12} />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Day Tabs Strip with horizontal scroll bar positioned cleanly below the orange indicator line */}
        <div className="border-t border-[#E5E3DB] bg-[#F7F4EE] px-3 sm:px-8">
          <div className="overflow-x-auto pt-1 pb-2 scrollbar-thin scrollbar-thumb-[#d2955c]/30 hover:scrollbar-thumb-primary/60 scrollbar-track-black/5">
            <div className="flex items-center gap-1 border-b border-[#E5E3DB] min-w-max">
              {parsedDays.map((pDay, idx) => {
                const isSelected = selectedDayIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectDay(idx, isFocusMode)}
                    className={`relative flex-shrink-0 px-3.5 sm:px-5 py-2.5 sm:py-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-all whitespace-nowrap cursor-pointer ${
                      isSelected
                        ? 'text-primary bg-[#FCFBF8] font-bold shadow-2xs'
                        : 'text-charcoal/60 hover:text-charcoal hover:bg-black/5'
                    }`}
                  >
                    <span>Day {pDay.dayNumber}: {pDay.stopName}</span>
                    {/* Active Orange Indicator Line - Sits securely ABOVE the scrollbar */}
                    {isSelected && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-primary z-10" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── MAP VIEWPORT & MOBILE CIRCUIT STOPS ── */}
      <div className="relative w-full">
        {/* If Mobile user selects 'stops' view, render clean Vertical Pilgrimage Timeline */}
        {mobileSubView === 'stops' ? (
          <div className="md:hidden bg-[#FCFBF8] border border-[#E5E3DB] p-4 shadow-sm">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E5E3DB]">
              <span className="text-[10px] uppercase tracking-widest font-bold text-primary">
                {displayName} Circuit Stages ({totalDays} Days)
              </span>
              <span className="text-[10px] text-charcoal/60">Tap to inspect day</span>
            </div>
            <div className="space-y-2">
              {parsedDays.map((pDay, idx) => {
                const isSelected = selectedDayIndex === idx;
                const isPassed = idx < selectedDayIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      handleSelectDay(idx, true);
                      if (scrollSectionRef.current) {
                        scrollSectionRef.current.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`w-full text-left p-3 border transition-all flex items-center justify-between gap-3 ${isSelected
                        ? 'border-primary bg-primary/10 shadow-xs'
                        : 'border-[#E5E3DB] bg-white hover:bg-[#F9F7F2]'
                      }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`w-7 h-7 shrink-0 text-xs font-bold flex items-center justify-center ${isSelected
                            ? 'bg-primary text-white'
                            : isPassed
                              ? 'bg-charcoal text-white'
                              : 'bg-[#F2ECE1] text-charcoal border border-[#E5E3DB]'
                          }`}
                      >
                        {pDay.dayNumber}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[9px] uppercase tracking-wider font-bold text-primary leading-none mb-0.5">
                          {pDay.stageType}
                        </p>
                        <h5 className="font-serif text-sm font-semibold text-charcoal truncate">
                          {pDay.stopName}
                        </h5>
                        {pDay.nightStay && (
                          <p className="text-[10px] text-[#003525] flex items-center gap-1 font-serif mt-0.5">
                            <Moon size={10} className="shrink-0" />
                            <span className="truncate">Stay: {pDay.nightStay}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <ChevronRight
                      size={15}
                      className={`shrink-0 ${isSelected ? 'text-primary' : 'text-charcoal/30'}`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="w-full bg-[#FCFBF8] border border-[#E5E3DB] shadow-lg relative overflow-hidden flex flex-col">
            {/* Cartographic Top Bar Header */}
            <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] bg-[#F2ECE1] border-b border-[#E5E3DB] px-3 sm:px-5 py-2.5 sm:py-3 select-none text-charcoal/80">
              <div className="flex items-center gap-2 truncate">
                <span className="hidden sm:inline">YUGATĪRTHA PILGRIMAGE EXPEDITION •</span>
                <span className="text-charcoal font-semibold truncate">{displayName} Circuit</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-sans tracking-normal font-normal shrink-0">
                <span className="text-charcoal/70 hidden lg:inline text-[11px]">
                  Drag to Pan • 2-Finger Pinch to Zoom • Tap Marker to View
                </span>
                <span className="font-semibold text-charcoal bg-white px-2 py-0.5 border border-[#E5E3DB] text-[9px] sm:text-[10px] tracking-wider uppercase">
                  {zoom.toFixed(1)}x Zoom
                </span>
              </div>
            </div>

            {/* SVG Map Container (Responsive Height for mobile & desktop) */}
            <div
              ref={svgContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className={`relative w-full overflow-hidden select-none h-[310px] sm:h-[440px] md:h-[600px] ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
                }`}
            >
              {/* STATIONARY COMPASS ROSE (Hidden on mobile to preserve screen space; preserved on PC) */}
              <div className="hidden md:block absolute top-4 right-4 z-20 pointer-events-none select-none drop-shadow-sm">
                <svg width="64" height="64" viewBox="0 0 100 100" className="opacity-95">
                  <circle cx="50" cy="50" r="46" fill="#FCFBF8" stroke="#d2955c" strokeWidth="2" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#E5E3DB" strokeWidth="1.2" strokeDasharray="3 3" />
                  {/* 8-Pointed Star Points */}
                  <polygon points="50,10 57,43 50,50" fill="#f3821d" />
                  <polygon points="50,10 43,43 50,50" fill="#d2955c" />
                  <polygon points="50,90 57,57 50,50" fill="#d2955c" />
                  <polygon points="50,90 43,57 50,50" fill="#332D29" />
                  <polygon points="90,50 57,57 50,50" fill="#d2955c" />
                  <polygon points="90,50 57,43 50,50" fill="#332D29" />
                  <polygon points="10,50 43,57 50,50" fill="#332D29" />
                  <polygon points="10,50 43,43 50,50" fill="#d2955c" />
                  {/* Corner Sub-cardinals */}
                  <polygon points="78,22 55,45 50,50" fill="#E2DACD" />
                  <polygon points="22,78 45,55 50,50" fill="#E2DACD" />
                  <polygon points="78,78 55,55 50,50" fill="#C2B7A5" />
                  <polygon points="22,22 45,45 50,50" fill="#C2B7A5" />
                  {/* Center Boss */}
                  <circle cx="50" cy="50" r="5" fill="#332D29" stroke="#f3821d" strokeWidth="1.5" />
                  {/* Cardinal Direction Letters */}
                  <text x="50" y="8" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#f3821d" fontFamily="serif">N</text>
                  <text x="94" y="54" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#332D29" fontFamily="serif">E</text>
                  <text x="50" y="99" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#332D29" fontFamily="serif">S</text>
                  <text x="7" y="54" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#332D29" fontFamily="serif">W</text>
                </svg>
              </div>

              {/* SVG Visual Canvas */}
              <svg
                viewBox={dynamicViewBox}
                className="w-full h-full transition-all duration-300 ease-out"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <radialGradient id="parchmentTexture" cx="50%" cy="50%" r="70%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                    <stop offset="60%" stopColor="#F9F7F2" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#EFE8DD" stopOpacity="1" />
                  </radialGradient>

                  <filter id="goldTrailGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  <filter id="pinShadow" x="-25%" y="-25%" width="150%" height="150%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#332D29" floodOpacity="0.2" />
                  </filter>
                </defs>

                <rect x="0" y="0" width={WORLD_WIDTH} height={WORLD_HEIGHT} fill="url(#parchmentTexture)" />

                {/* Topographical Contour Waves */}
                <g stroke="#DFD8CC" strokeWidth="1.2" fill="none" opacity="0.6">
                  <path d="M 0 160 Q 300 90 600 150 T 1200 130" />
                  <path d="M 0 280 Q 250 330 650 240 T 1200 300" />
                  <path d="M 0 420 Q 350 480 750 380 T 1200 440" />
                  <path d="M 180 0 Q 240 300 190 600" strokeDasharray="4 8" />
                  <path d="M 600 0 Q 650 300 590 600" strokeDasharray="4 8" />
                  <path d="M 1020 0 Q 980 300 1030 600" strokeDasharray="4 8" />
                </g>

                {/* Illustrated Mountain Ridges Silhouette */}
                <g stroke="#CFC5B5" strokeWidth="1.4" fill="none" opacity="0.5">
                  <path d="M 460 200 L 510 135 L 560 200 L 610 120 L 660 200 L 710 145 L 760 200" />
                  <path d="M 510 135 L 530 200" />
                  <path d="M 610 120 L 630 200" />
                  <path d="M 710 145 L 725 200" />
                </g>

                {/* 1. Base Trail Path */}
                {fullPathD && (
                  <path
                    d={fullPathD}
                    fill="none"
                    stroke="#B8AC9C"
                    strokeWidth="3.5"
                    strokeDasharray="9 7"
                    strokeLinecap="round"
                    opacity="0.75"
                  />
                )}

                {/* 2. Active Progress Trail (Saffron Brand Color) */}
                {activePathD && (
                  <path
                    d={activePathD}
                    fill="none"
                    stroke="#f3821d"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    filter="url(#goldTrailGlow)"
                    className="transition-all duration-500"
                  />
                )}

                {/* 3. Waypoint Markers (Decluttered for Mobile: plaques only for active day; all plaques on PC) */}
                {coordinates.map((pt, idx) => {
                  const pDay = parsedDays[idx];
                  const isSelected = selectedDayIndex === idx;
                  const isHovered = hoveredDayIndex === idx;
                  const isPassed = idx < selectedDayIndex;

                  const labelOffsetY = idx % 2 === 0 ? -30 : 36;
                  const showPlaque = !isMobile || isSelected;

                  return (
                    <g
                      key={idx}
                      transform={`translate(${pt.x}, ${pt.y})`}
                      className="cursor-pointer transition-transform duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectDay(idx, isFocusMode);
                      }}
                      onMouseEnter={() => setHoveredDayIndex(idx)}
                      onMouseLeave={() => setHoveredDayIndex(null)}
                    >
                      {/* Elegant Cartographic Halo for Selected Stop */}
                      {isSelected && (
                        <>
                          <circle
                            cx="0"
                            cy="0"
                            r={isMobile ? 22 : 25}
                            fill="none"
                            stroke="#f3821d"
                            strokeWidth="1.5"
                            strokeDasharray="3 3"
                            opacity="0.8"
                          />
                          <circle
                            cx="0"
                            cy="0"
                            r={isMobile ? 18 : 20}
                            fill="#f3821d"
                            fillOpacity="0.14"
                          />
                        </>
                      )}

                      {/* Outer Circle Medallion */}
                      <circle
                        cx="0"
                        cy="0"
                        r={isSelected ? (isMobile ? 14 : 16) : isHovered ? 14 : (isMobile ? 10 : 12)}
                        fill={isSelected ? '#f3821d' : isPassed ? '#332D29' : '#FFFFFF'}
                        stroke={isSelected ? '#FFFFFF' : isPassed ? '#d2955c' : '#B8AC9C'}
                        strokeWidth={isSelected ? '2.5' : '1.8'}
                        filter="url(#pinShadow)"
                        className="transition-all duration-300"
                      />

                      {/* Day Number */}
                      <text
                        x="0"
                        y={isSelected ? (isMobile ? '4' : '4.5') : (isMobile ? '3.5' : '4')}
                        textAnchor="middle"
                        fontSize={isSelected ? (isMobile ? '10' : '11') : (isMobile ? '9' : '10')}
                        fontWeight="bold"
                        fontFamily="sans-serif"
                        fill={isSelected || isPassed ? '#FFFFFF' : '#332D29'}
                        className="select-none pointer-events-none"
                      >
                        {pDay.dayNumber}
                      </text>

                      {/* Clean Rectangular Label Plaque (Only selected stop on mobile to eliminate overlap clutter) */}
                      {showPlaque && (
                        <g transform={`translate(0, ${labelOffsetY})`}>
                          <rect
                            x="-58"
                            y="-12"
                            width="116"
                            height="24"
                            rx="1"
                            fill={isSelected ? '#332D29' : '#FFFFFF'}
                            stroke={isSelected ? '#f3821d' : '#DCD4C7'}
                            strokeWidth={isSelected ? '1.5' : '1'}
                            filter="url(#pinShadow)"
                            className="transition-all duration-200"
                          />
                          <text
                            x="0"
                            y="4"
                            textAnchor="middle"
                            fontSize="10"
                            fontWeight={isSelected ? 'bold' : '600'}
                            fontFamily="serif"
                            fill={isSelected ? '#f3821d' : '#332D29'}
                            className="select-none pointer-events-none tracking-tight"
                          >
                            {pDay.stopName.length > 17 ? pDay.stopName.slice(0, 16) + '…' : pDay.stopName}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Floating Navigation & Zoom HUD (Responsive) */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex flex-col items-center bg-white/95 backdrop-blur-md border border-[#E5E3DB] shadow-md divide-y divide-[#E5E3DB] select-none z-20">
                <button
                  onClick={handleZoomIn}
                  className="p-2 sm:p-2.5 hover:bg-[#F9F7F2] text-charcoal hover:text-primary transition-colors"
                  title="Zoom In (+)"
                >
                  <ZoomIn size={15} />
                </button>
                <button
                  onClick={handleZoomOut}
                  className="p-2 sm:p-2.5 hover:bg-[#F9F7F2] text-charcoal hover:text-primary transition-colors"
                  title="Zoom Out (-)"
                >
                  <ZoomOut size={15} />
                </button>
                <button
                  onClick={() => focusOnPoint(selectedDayIndex, isMobile ? MOBILE_FOCUS_ZOOM : POINT_FOCUS_ZOOM)}
                  className={`p-2 sm:p-2.5 transition-colors ${isFocusMode ? 'bg-primary text-white' : 'hover:bg-[#F9F7F2] text-charcoal'
                    }`}
                  title="Center on Selected Stop"
                >
                  <Crosshair size={15} />
                </button>
              </div>

              {/* Desktop Active Stop Badge Overlay (Hidden on mobile to avoid blocking map) */}
              <div className="hidden md:block absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-[#E5E3DB] p-4 shadow-sm max-w-xs select-none z-20">
                <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary mb-1">
                  Day {currentParsedDay.dayNumber} of {totalDays} · {currentParsedDay.stageType}
                </p>
                <h4 className="font-serif text-lg text-charcoal font-medium leading-tight">
                  {currentParsedDay.stopName}
                </h4>
                {currentParsedDay.nightStay && (
                  <div className="flex items-center gap-1.5 text-xs text-[#003525] mt-1.5 font-serif border-t border-[#E5E3DB]/70 pt-1.5">
                    <Moon size={11} className="text-[#003525]" />
                    <span>Stay: {currentParsedDay.nightStay}</span>
                  </div>
                )}
              </div>

            </div>

            {/* Mobile-Only Dedicated Active Stop Card (Non-blocking, Thumb-Friendly) */}
            <div className="md:hidden bg-white border-t border-[#E5E3DB] p-3 sm:p-4">
              <div className="flex items-center justify-between gap-2.5">
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-primary truncate mb-0.5">
                    Day {currentParsedDay.dayNumber} of {totalDays} · {currentParsedDay.stageType}
                  </p>
                  <h4 className="font-serif text-base font-semibold text-charcoal truncate">
                    {currentParsedDay.stopName}
                  </h4>
                  {currentParsedDay.nightStay && (
                    <p className="text-[11px] text-[#003525] font-serif flex items-center gap-1 mt-0.5 truncate">
                      <Moon size={11} className="shrink-0" />
                      <span>Stay: <strong>{currentParsedDay.nightStay}</strong></span>
                    </p>
                  )}
                </div>

                {/* Mobile quick Prev/Next stepper buttons */}
                <div className="inline-flex items-center border border-[#E5E3DB] bg-[#F9F7F2] divide-x divide-[#E5E3DB] shrink-0">
                  <button
                    onClick={handlePrevDay}
                    disabled={selectedDayIndex === 0}
                    className="p-2 text-charcoal disabled:opacity-25 hover:bg-white transition-colors"
                    aria-label="Previous day"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={handleNextDay}
                    disabled={selectedDayIndex === totalDays - 1}
                    className="p-2 text-charcoal disabled:opacity-25 hover:bg-white transition-colors"
                    aria-label="Next day"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Map Bottom Status Bar */}
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-charcoal/80 bg-[#F9F7F2] border-t border-[#E5E3DB] px-3 sm:px-5 py-2.5 sm:py-3">
              <span className="flex items-center gap-1.5 sm:gap-2 font-medium truncate">
                <Sparkles size={12} className="text-primary shrink-0" />
                <strong className="shrink-0">Day {currentParsedDay.dayNumber}:</strong>
                <span className="truncate">{currentParsedDay.titleWithoutDay}</span>
              </span>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-charcoal/60 italic hidden md:inline text-xs">
                  {isFocusMode ? 'Focused view on current stage' : 'Overview of complete pilgrimage'}
                </span>
                <button
                  onClick={() => {
                    if (scrollSectionRef.current) {
                      scrollSectionRef.current.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-primary hover:text-[#d97013] font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] flex items-center gap-1"
                >
                  <span>Read Below ↓</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── THE ROYAL MANUSCRIPT SCROLL (WITH FINGER SWIPE NAVIGATION) ── */}
      <div
        ref={scrollSectionRef}
        onTouchStart={handleScrollTouchStart}
        onTouchEnd={handleScrollTouchEnd}
        className="max-w-4xl mx-auto w-full pt-4 pb-12 select-none touch-pan-y px-1 sm:px-0"
      >

        {/* Subtle Header Tag */}
        <div className="flex items-center justify-between px-2 mb-2 sm:mb-3">
          <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-serif text-charcoal/80 truncate">
            <Scroll size={13} className="text-primary shrink-0" />
            <span className="font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[9px] sm:text-[10px] text-primary shrink-0">Royal Manuscript</span>
            <span>•</span>
            <span className="italic truncate">Day {currentParsedDay.dayNumber}: {currentParsedDay.stopName}</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="text-[10px] uppercase tracking-[0.15em] text-charcoal/45 font-bold hidden md:inline">
              Swipe left/right or use buttons to navigate
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary font-bold bg-[#F4EFE6] px-2 py-0.5 border border-[#E5E3DB]">
              Stage {selectedDayIndex + 1} of {totalDays}
            </span>
          </div>
        </div>

        {/* ── SCROLL CONTAINER (ADAPTIVE HEIGHT ON MOBILE, FIXED ON PC) ── */}
        <div className="relative w-full">

          {/* Top Wooden Rod (Stationary & Fixed) */}
          <div className="relative z-20 flex items-center justify-center">
            <div className="w-5 sm:w-6 h-7 sm:h-8 rounded-l-xs bg-gradient-to-r from-[#b37e46] via-[#d2955c] to-[#f3821d] shadow-md border-r border-[#8c5e2d]" />
            <div className="flex-1 h-5 sm:h-6 bg-gradient-to-b from-[#1F1B18] via-[#332D29] to-[#161311] shadow-md border-y border-[#4a3f37] relative">
              <div className="absolute inset-x-0 top-1 h-[1px] bg-white/15" />
              <div className="absolute inset-x-0 bottom-1 h-[1px] bg-black/40" />
            </div>
            <div className="w-5 sm:w-6 h-7 sm:h-8 rounded-r-xs bg-gradient-to-l from-[#b37e46] via-[#d2955c] to-[#f3821d] shadow-md border-l border-[#8c5e2d]" />
          </div>

          {/* Parchment Sheet Body (Responsive padding) */}
          <div className="relative mx-1 sm:mx-4 bg-gradient-to-b from-[#FFFFFF] via-[#F9F7F2] to-[#F3EDE2] border-x sm:border-x-2 border-[#E2DACD] shadow-2xl p-4 sm:p-10 pt-6 sm:pt-8 text-charcoal">

            {/* Watermark Texture */}
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#332D29_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Inner Double Frame */}
            <div className="border border-[#E7E1D7] p-4 sm:p-8 bg-white/50 backdrop-blur-2xs rounded-none relative shadow-inner flex flex-col justify-between">

              {/* Corner Fleurons */}
              <span className="absolute -top-3 -left-3 text-[#d2955c] font-serif text-sm sm:text-base select-none">⚜</span>
              <span className="absolute -top-3 -right-3 text-[#d2955c] font-serif text-sm sm:text-base select-none">⚜</span>
              <span className="absolute -bottom-3 -left-3 text-[#d2955c] font-serif text-sm sm:text-base select-none">⚜</span>
              <span className="absolute -bottom-3 -right-3 text-[#d2955c] font-serif text-sm sm:text-base select-none">⚜</span>

              {/* ── CONTENT CONTAINER: Fixed size calibrated to maximum text content (does not jump or resize) ── */}
              <div
                style={{ height: `${fixedContentHeight}px` }}
                className="relative flex flex-col justify-start overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 hover:scrollbar-thumb-primary/40 pr-1 sm:pr-2"
              >
                <AnimatePresence mode="wait" custom={slideDirection}>
                  <motion.div
                    key={selectedDayIndex}
                    custom={slideDirection}
                    initial={{ opacity: 0, x: slideDirection * 22 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -slideDirection * 22 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="space-y-4 sm:space-y-6"
                  >
                    {/* Header: Day Number, Title, Stay */}
                    <div className="text-center pb-3.5 sm:pb-5 border-b border-[#E7E1D7]">
                      <div className="inline-block text-[9px] sm:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.25em] text-primary uppercase mb-1.5 sm:mb-2">
                        DAY 0{currentParsedDay.dayNumber} OF 0{totalDays} · {currentParsedDay.stageType.toUpperCase()}
                      </div>

                      <h3 className="font-serif text-xl sm:text-3xl lg:text-4xl text-charcoal leading-tight">
                        {currentParsedDay.titleWithoutDay}
                      </h3>

                      {currentParsedDay.nightStay && (
                        <div className="mt-2.5 sm:mt-3.5 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 border border-[#003525]/20 bg-[#003525]/10 text-[#003525] text-xs font-serif">
                          <Moon size={11} className="text-[#003525] shrink-0" />
                          <span><strong>Night Stay:</strong> {currentParsedDay.nightStay}</span>
                        </div>
                      )}
                    </div>

                    {/* Activities List */}
                    <div className="space-y-2.5 sm:space-y-3.5">
                      <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] font-bold text-accent">
                        Daily Sacred Programme & Darshan
                      </p>

                      {currentParsedDay.activities && currentParsedDay.activities.length > 0 ? (
                        <ul className="space-y-2 sm:space-y-3">
                          {currentParsedDay.activities.map((act, actIdx) => (
                            <li key={actIdx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-charcoal leading-relaxed">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-xs sm:text-sm text-charcoal/60 italic">
                          Detailed sightseeing, pujas and transfers are curated seamlessly for this day.
                        </p>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Mobile Stage Dots Indicator */}
              <div className="flex sm:hidden justify-center items-center gap-1.5 pt-3 pb-1">
                {days.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectDay(i, isFocusMode)}
                    className={`h-1.5 rounded-full transition-all ${selectedDayIndex === i ? 'w-4 bg-primary' : 'w-1.5 bg-[#E5E3DB]'
                      }`}
                    aria-label={`Jump to day ${i + 1}`}
                  />
                ))}
              </div>

              {/* ── ACTION BUTTONS: Thumb-friendly on Mobile, Inline on Desktop ── */}
              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[#E7E1D7] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center border border-[#E5E3DB] bg-[#F9F7F2] divide-x divide-[#E5E3DB] w-full sm:w-auto">
                  <button
                    onClick={handlePrevDay}
                    disabled={selectedDayIndex === 0}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-charcoal hover:bg-white disabled:opacity-30 disabled:hover:bg-[#F9F7F2] transition-colors"
                  >
                    <ChevronLeft size={14} />
                    <span>Prev Stop</span>
                  </button>
                  <button
                    onClick={handleNextDay}
                    disabled={selectedDayIndex === totalDays - 1}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-charcoal hover:bg-white disabled:opacity-30 disabled:hover:bg-[#F9F7F2] transition-colors"
                  >
                    <span>Next Stop</span>
                    <ChevronRight size={14} />
                  </button>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-2.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] bg-primary text-white hover:bg-[#c97524] transition-colors shadow-sm"
                >
                  <MessageCircle size={14} />
                  <span>Enquire Day {currentParsedDay.dayNumber} Details</span>
                </a>
              </div>

            </div>
          </div>

          {/* Bottom Wooden Rod & Tassel (Stationary & Fixed) */}
          <div className="relative z-20 flex flex-col items-center">
            <div className="w-full flex items-center justify-center">
              <div className="w-5 sm:w-6 h-7 sm:h-8 rounded-l-xs bg-gradient-to-r from-[#b37e46] via-[#d2955c] to-[#f3821d] shadow-md border-r border-[#8c5e2d]" />
              <div className="flex-1 h-5 sm:h-6 bg-gradient-to-b from-[#1F1B18] via-[#332D29] to-[#161311] shadow-md border-y border-[#4a3f37] relative">
                <div className="absolute inset-x-0 top-1 h-[1px] bg-white/15" />
                <div className="absolute inset-x-0 bottom-1 h-[1px] bg-black/40" />
              </div>
              <div className="w-5 sm:w-6 h-7 sm:h-8 rounded-r-xs bg-gradient-to-l from-[#b37e46] via-[#d2955c] to-[#f3821d] shadow-md border-l border-[#8c5e2d]" />
            </div>

            {/* Hanging Tassel */}
            <div className="flex flex-col items-center -mt-0.5">
              <div className="w-2 h-3 sm:h-4 bg-primary" />
              <div className="w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-charcoal shadow-xs border border-accent" />
              <div className="w-3.5 sm:w-4 h-5 sm:h-6 bg-gradient-to-b from-charcoal to-[#1a1614] shadow-xs" />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

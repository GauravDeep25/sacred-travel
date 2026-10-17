import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  Maximize2,
  Minimize2,
  Moon,
  MessageCircle,
  Sparkles,
  Scroll,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

/**
 * Clean & extract human-friendly stop names & night stays from day titles & activities
 */
function parseDayDetails(day, index, totalDays) {
  const fullTitle = day?.title || `Day ${index + 1}`;
  
  // Remove "Day X -" or "Day X :" prefix
  const titleWithoutDay = fullTitle.replace(/^Day\s*\d+\s*[-:–—]\s*/i, '').trim();

  // Extract a clean short stop/place name
  let stopName = titleWithoutDay;
  if (titleWithoutDay.includes(' - ')) {
    stopName = titleWithoutDay.split(' - ')[0].trim();
  } else if (titleWithoutDay.includes(' – ')) {
    stopName = titleWithoutDay.split(' – ')[0].trim();
  } else if (titleWithoutDay.includes('.')) {
    stopName = titleWithoutDay.split('.')[0].trim();
  } else if (titleWithoutDay.includes('|')) {
    stopName = titleWithoutDay.split('|')[0].trim();
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
    const match = act.match(/(?:Night\s*stay|Overnight\s*stay\s*(?:in|at)?)\s*[:–—\-]?\s*([A-Za-z0-9\s/]+)/i);
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
const MAX_ZOOM = 3.5;
const POINT_FOCUS_ZOOM = 2.4;

export default function ItineraryMapScroll({
  destination,
  displayName,
  packageData,
}) {
  const days = packageData?.days || [];
  const totalDays = days.length;

  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [isPlayingTour, setIsPlayingTour] = useState(false);
  const [hoveredDayIndex, setHoveredDayIndex] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [isScrollOpen, setIsScrollOpen] = useState(true); // Open & close animation for the Royal Scroll

  // Pan & Zoom state (No mouse-wheel zooming; buttons + 2-finger pinch)
  const [zoom, setZoom] = useState(1.0);
  const [center, setCenter] = useState({ x: 600, y: 300 });
  const [isDragging, setIsDragging] = useState(false);
  const [isPinching, setIsPinching] = useState(false);

  const dragStartRef = useRef({ x: 0, y: 0, centerStart: { x: 600, y: 300 } });
  const pinchStartRef = useRef({ dist: 0, zoom: 1.0 });

  const svgContainerRef = useRef(null);
  const scrollSectionRef = useRef(null);

  // Parsed data & coordinates
  const parsedDays = days.map((day, idx) => parseDayDetails(day, idx, totalDays));
  const coordinates = calculateWaypointCoordinates(totalDays);
  const fullPathD = generateCurvedPath(coordinates);

  const activePoints = coordinates.slice(0, selectedDayIndex + 1);
  const activePathD = activePoints.length > 1 ? generateCurvedPath(activePoints) : '';

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

  // Handle Day Selection
  const handleSelectDay = (index, shouldFocus = isFocusMode) => {
    setIsPlayingTour(false);
    setSelectedDayIndex(index);
    setIsScrollOpen(true); // Automatically unroll the scroll for the newly clicked day
    if (shouldFocus) {
      focusOnPoint(index);
    }
  };

  const handleNextDay = () => {
    if (selectedDayIndex < totalDays - 1) {
      const nextIdx = selectedDayIndex + 1;
      setSelectedDayIndex(nextIdx);
      setIsScrollOpen(true);
      if (isFocusMode) {
        focusOnPoint(nextIdx);
      }
    }
  };

  const handlePrevDay = () => {
    if (selectedDayIndex > 0) {
      const prevIdx = selectedDayIndex - 1;
      setSelectedDayIndex(prevIdx);
      setIsScrollOpen(true);
      if (isFocusMode) {
        focusOnPoint(prevIdx);
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
      focusOnPoint(selectedDayIndex);
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
      // 2 fingers = pinch zoom
      setIsPinching(true);
      setIsDragging(false);
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      pinchStartRef.current = { dist, zoom };
    } else if (e.touches.length === 1) {
      // 1 finger = pan/drag
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

  const whatsappMessage = encodeURIComponent(
    `Namaste! I would like to enquire about ${displayName} (${packageData?.duration || 'Tour'}), specifically Day ${currentParsedDay?.dayNumber}: ${currentParsedDay?.titleWithoutDay}.`
  );
  const whatsappUrl = `https://wa.me/918591262424?text=${whatsappMessage}`;

  return (
    <div className="w-full space-y-10">

      {/* ── TOP CONTROL DECK: ENLARGED MAP HEADER ────────── */}
      <div className="bg-[#fcfaf6] border border-[#e8ddcb] rounded-2xl p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#b8864e] text-[11px] font-bold tracking-[0.25em] uppercase mb-1">
              <Compass size={15} className="animate-spin-slow text-[#d4af37]" />
              <span>Interactive Sacred Circuit Map</span>
              <span className="text-gray-300">•</span>
              <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                Touch Pinch & Drag
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-gray-900 tracking-tight">
              {displayName} Expedition: Day 1 to Day {totalDays}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Pinch with two fingers or use zoom buttons to navigate. Click any day marker to unfurl its royal manuscript scroll.
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Single Point Focus vs Full Overview Toggle */}
            <button
              onClick={toggleFocusMode}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all shadow-xs ${
                isFocusMode
                  ? 'bg-[#b8864e] text-white shadow-[#b8864e]/30 scale-105'
                  : 'bg-white text-gray-700 border border-[#e2d5c0] hover:bg-[#faf4ea]'
              }`}
              title={isFocusMode ? 'Zoom out to view full circuit' : 'Zoom into Day ' + (selectedDayIndex + 1)}
            >
              <Crosshair size={14} className={isFocusMode ? 'animate-pulse' : ''} />
              <span>{isFocusMode ? `Focus: Day ${selectedDayIndex + 1}` : 'Single Point Focus'}</span>
            </button>

            {/* Auto-Play Tour */}
            <button
              onClick={() => {
                setIsPlayingTour(!isPlayingTour);
                if (!isPlayingTour && !isFocusMode) {
                  focusOnPoint(selectedDayIndex);
                }
              }}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all shadow-xs ${
                isPlayingTour
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-gray-700 border border-[#e2d5c0] hover:bg-[#faf4ea]'
              }`}
            >
              {isPlayingTour ? <Pause size={13} /> : <Play size={13} />}
              <span>{isPlayingTour ? 'Pause Tour' : 'Auto Tour'}</span>
            </button>

            {/* Fullscreen / Theater Mode Button */}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white text-gray-700 hover:text-gray-900 border border-[#e2d5c0] hover:bg-[#faf4ea] text-xs font-semibold shadow-xs transition-colors"
              title={isFullscreen ? 'Exit Fullscreen Theater' : 'Enlarge Map to Fullscreen Theater'}
            >
              {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
              <span className="hidden sm:inline">{isFullscreen ? 'Exit' : 'Enlarge'}</span>
            </button>

            {/* Reset View */}
            <button
              onClick={resetToOverview}
              title="Reset view to full route"
              className="p-2 rounded-full bg-white text-gray-600 hover:text-gray-900 border border-[#e2d5c0] hover:bg-[#faf4ea] transition-colors"
            >
              <RotateCcw size={14} />
            </button>

            {/* Prev / Next Day Navigator */}
            <div className="flex items-center bg-white border border-[#e2d5c0] rounded-full p-1 shadow-xs">
              <button
                onClick={handlePrevDay}
                disabled={selectedDayIndex === 0}
                className="p-1.5 rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-gray-700"
                title="Previous Stop"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-[11px] font-bold px-2.5 text-gray-800 tracking-wider">
                DAY {selectedDayIndex + 1}/{totalDays}
              </span>
              <button
                onClick={handleNextDay}
                disabled={selectedDayIndex === totalDays - 1}
                className="p-1.5 rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-gray-700"
                title="Next Stop"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Day Selector Strip */}
        <div className="mt-5 pt-4 border-t border-[#f0e6d6] flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {parsedDays.map((pDay, idx) => {
            const isSelected = selectedDayIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => handleSelectDay(idx, isFocusMode)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 shrink-0 flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#b8864e] text-white shadow-md shadow-[#b8864e]/20 scale-105'
                    : 'bg-white text-gray-600 border border-[#e2d5c0] hover:border-[#b8864e] hover:text-[#b8864e]'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-white' : 'bg-[#d4af37]'}`} />
                <span>Day {pDay.dayNumber}: {pDay.stopName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── THE ENLARGED SCROLLABLE & INTERACTIVE MAP VIEWPORT ── */}
      <div
        className={`${
          isFullscreen
            ? 'fixed inset-0 z-50 bg-[#160e08]/95 p-4 sm:p-8 flex flex-col justify-center items-center backdrop-blur-md'
            : 'relative w-full'
        }`}
      >
        <div
          className={`w-full bg-[#fbf8f2] border-2 border-[#d9c7aa] rounded-2xl shadow-xl relative overflow-hidden flex flex-col ${
            isFullscreen ? 'max-w-7xl h-[90vh]' : ''
          }`}
        >
          {/* Cartographic Top Bar Header */}
          <div className="flex items-center justify-between text-[11px] font-serif text-[#8f7450] tracking-widest uppercase bg-[#f4ebdb] border-b border-[#ebdcc4] px-4 py-2.5 select-none">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#b8864e] animate-ping" />
              <span>YUGATĪRTHA PILGRIMAGE EXPEDITION</span>
              <span className="hidden sm:inline text-gray-400">•</span>
              <span className="hidden sm:inline text-gray-700">{displayName} Circuit</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-sans tracking-normal">
              <span className="text-gray-600 hidden md:inline">
                Drag to Pan • 2-Finger Pinch to Zoom • Touch to Navigate
              </span>
              <span className="font-semibold text-gray-800 bg-white/70 px-2 py-0.5 rounded border border-[#d8c5a4]">
                {zoom.toFixed(1)}x Zoom
              </span>
              {isFullscreen && (
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="p-1 rounded hover:bg-black/10 text-gray-700"
                  title="Close Fullscreen"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* SVG Map Container (Enlarged Height: 460px - 600px, Wheel zoom removed!) */}
          <div
            ref={svgContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className={`relative w-full overflow-hidden select-none touch-none ${
              isFullscreen
                ? 'flex-1 h-full'
                : 'h-[460px] sm:h-[540px] md:h-[600px]'
            } ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          >
            {/* ── STATIONARY COMPASS ROSE FIXED ON TOP OF MAP ── */}
            <div className="absolute top-4 right-4 z-20 pointer-events-none select-none drop-shadow-md">
              <svg width="68" height="68" viewBox="0 0 100 100" className="opacity-95">
                <circle cx="50" cy="50" r="46" fill="#fffdf7" stroke="#b89a6c" strokeWidth="2.2" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#d5c4a5" strokeWidth="1.2" strokeDasharray="3 3" />
                {/* 8-Pointed Star Points */}
                <polygon points="50,10 57,43 50,50" fill="#b8864e" />
                <polygon points="50,10 43,43 50,50" fill="#8c6231" />
                <polygon points="50,90 57,57 50,50" fill="#8c6231" />
                <polygon points="50,90 43,57 50,50" fill="#b8864e" />
                <polygon points="90,50 57,57 50,50" fill="#8c6231" />
                <polygon points="90,50 57,43 50,50" fill="#b8864e" />
                <polygon points="10,50 43,57 50,50" fill="#b8864e" />
                <polygon points="10,50 43,43 50,50" fill="#8c6231" />
                {/* Corner Sub-cardinals */}
                <polygon points="78,22 55,45 50,50" fill="#cbb38d" />
                <polygon points="22,78 45,55 50,50" fill="#cbb38d" />
                <polygon points="78,78 55,55 50,50" fill="#a48455" />
                <polygon points="22,22 45,45 50,50" fill="#a48455" />
                {/* Center Boss */}
                <circle cx="50" cy="50" r="6" fill="#4d3012" stroke="#d4af37" strokeWidth="1.5" />
                {/* Cardinal Direction Letters */}
                <text x="50" y="8" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#4d3012" fontFamily="serif">N</text>
                <text x="94" y="54" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#5c3814" fontFamily="serif">E</text>
                <text x="50" y="99" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#5c3814" fontFamily="serif">S</text>
                <text x="7" y="54" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#5c3814" fontFamily="serif">W</text>
              </svg>
            </div>

            {/* SVG Visual Canvas */}
            <svg
              viewBox={dynamicViewBox}
              className="w-full h-full transition-all duration-300 ease-out"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Vintage Parchment Texture Gradient */}
                <radialGradient id="parchmentTexture" cx="50%" cy="50%" r="70%">
                  <stop offset="0%" stopColor="#fffdf8" stopOpacity="0.95" />
                  <stop offset="65%" stopColor="#fbf6ea" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#f0e1c6" stopOpacity="1" />
                </radialGradient>

                {/* Radiant Golden Trail Glow */}
                <filter id="goldTrailGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Pin Drop Shadow */}
                <filter id="pinShadow" x="-25%" y="-25%" width="150%" height="150%">
                  <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#2e1d0d" floodOpacity="0.3" />
                </filter>
              </defs>

              {/* Base Cartographic Background */}
              <rect x="0" y="0" width={WORLD_WIDTH} height={WORLD_HEIGHT} fill="url(#parchmentTexture)" />

              {/* Topographical Contour Waves */}
              <g stroke="#dfcfb5" strokeWidth="1.2" fill="none" opacity="0.5">
                <path d="M 0 160 Q 300 90 600 150 T 1200 130" />
                <path d="M 0 280 Q 250 330 650 240 T 1200 300" />
                <path d="M 0 420 Q 350 480 750 380 T 1200 440" />
                <path d="M 180 0 Q 240 300 190 600" strokeDasharray="4 8" />
                <path d="M 600 0 Q 650 300 590 600" strokeDasharray="4 8" />
                <path d="M 1020 0 Q 980 300 1030 600" strokeDasharray="4 8" />
              </g>

              {/* Illustrated Mountain Ridges Silhouette across high valleys */}
              <g stroke="#c9b392" strokeWidth="1.4" fill="none" opacity="0.4">
                <path d="M 460 200 L 510 135 L 560 200 L 610 120 L 660 200 L 710 145 L 760 200" />
                <path d="M 510 135 L 530 200" />
                <path d="M 610 120 L 630 200" />
                <path d="M 710 145 L 725 200" />
              </g>

              {/* 1. Base Trail Path (Full Expedition in warm sepia dash) */}
              {fullPathD && (
                <path
                  d={fullPathD}
                  fill="none"
                  stroke="#9e805b"
                  strokeWidth="4"
                  strokeDasharray="9 7"
                  strokeLinecap="round"
                  opacity="0.65"
                />
              )}

              {/* 2. Active Progress Trail (Illuminated radiant gold) */}
              {activePathD && (
                <path
                  d={activePathD}
                  fill="none"
                  stroke="#d4923b"
                  strokeWidth="5"
                  strokeLinecap="round"
                  filter="url(#goldTrailGlow)"
                  className="transition-all duration-500"
                />
              )}

              {/* 3. Interactive Waypoint Pins for every Day */}
              {coordinates.map((pt, idx) => {
                const pDay = parsedDays[idx];
                const isSelected = selectedDayIndex === idx;
                const isHovered = hoveredDayIndex === idx;
                const isPassed = idx < selectedDayIndex;

                const labelOffsetY = idx % 2 === 0 ? -32 : 38;

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
                    {/* Active Golden Pulse Waves */}
                    {isSelected && (
                      <>
                        <circle
                          cx="0"
                          cy="0"
                          r="34"
                          fill="none"
                          stroke="#d4923b"
                          strokeWidth="2.5"
                          opacity="0.6"
                          className="animate-ping"
                        />
                        <circle
                          cx="0"
                          cy="0"
                          r="24"
                          fill="#d4923b"
                          fillOpacity="0.15"
                          stroke="#ffd700"
                          strokeWidth="1.5"
                        />
                      </>
                    )}

                    {/* Outer Medallion Marker */}
                    <circle
                      cx="0"
                      cy="0"
                      r={isSelected ? 18 : isHovered ? 16 : 13}
                      fill={isSelected ? '#b8864e' : isPassed ? '#543c1f' : '#ffffff'}
                      stroke={isSelected ? '#ffd700' : isPassed ? '#d4af37' : '#947854'}
                      strokeWidth={isSelected ? '3.5' : '2'}
                      filter="url(#pinShadow)"
                      className="transition-all duration-300"
                    />

                    {/* Inner Day Number Badge */}
                    <text
                      x="0"
                      y={isSelected ? '5' : '4'}
                      textAnchor="middle"
                      fontSize={isSelected ? '12' : '10'}
                      fontWeight="bold"
                      fontFamily="sans-serif"
                      fill={isSelected || isPassed ? '#ffffff' : '#3d2c18'}
                      className="select-none pointer-events-none"
                    >
                      {pDay.dayNumber}
                    </text>

                    {/* Stop Name Label Plaque */}
                    <g transform={`translate(0, ${labelOffsetY})`}>
                      <rect
                        x="-62"
                        y="-13"
                        width="124"
                        height="26"
                        rx="13"
                        fill={isSelected ? '#2e1e10' : '#fffcf5'}
                        stroke={isSelected ? '#ffd700' : '#cfbea2'}
                        strokeWidth={isSelected ? '2' : '1'}
                        filter="url(#pinShadow)"
                        className="transition-all duration-200"
                      />
                      <text
                        x="0"
                        y="4"
                        textAnchor="middle"
                        fontSize="10.5"
                        fontWeight={isSelected ? 'bold' : '600'}
                        fontFamily="serif"
                        fill={isSelected ? '#ffd700' : '#382818'}
                        className="select-none pointer-events-none tracking-tight"
                      >
                        {pDay.stopName.length > 17 ? pDay.stopName.slice(0, 16) + '…' : pDay.stopName}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>

            {/* Floating Navigation & Zoom HUD Overlay on the Map */}
            <div className="absolute bottom-4 right-4 flex flex-col items-center gap-1.5 bg-white/90 backdrop-blur-md p-1.5 rounded-2xl border border-[#d8c5a4] shadow-lg select-none z-20">
              <button
                onClick={handleZoomIn}
                className="p-2 rounded-xl hover:bg-[#faf4ea] text-gray-700 hover:text-gray-900 transition-colors"
                title="Zoom In (+)"
              >
                <ZoomIn size={17} />
              </button>
              <div className="w-4 h-[1px] bg-gray-200" />
              <button
                onClick={handleZoomOut}
                className="p-2 rounded-xl hover:bg-[#faf4ea] text-gray-700 hover:text-gray-900 transition-colors"
                title="Zoom Out (-)"
              >
                <ZoomOut size={17} />
              </button>
              <div className="w-4 h-[1px] bg-gray-200" />
              <button
                onClick={() => focusOnPoint(selectedDayIndex)}
                className={`p-2 rounded-xl transition-colors ${
                  isFocusMode ? 'bg-[#b8864e] text-white' : 'hover:bg-[#faf4ea] text-gray-700'
                }`}
                title="Center on Selected Stop"
              >
                <Crosshair size={17} />
              </button>
            </div>

            {/* Active Stop Badge Overlay (Top Left of Map) */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-[#d8c5a4] rounded-xl px-4 py-2.5 shadow-md max-w-xs select-none z-20">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-[#b8864e]">
                <span>Day {currentParsedDay.dayNumber} of {totalDays}</span>
                <span>•</span>
                <span>{currentParsedDay.stageType}</span>
              </div>
              <h4 className="font-serif text-base sm:text-lg text-gray-900 font-semibold leading-tight mt-0.5">
                {currentParsedDay.stopName}
              </h4>
              {currentParsedDay.nightStay && (
                <div className="flex items-center gap-1.5 text-xs text-[#8a2b2b] mt-1 font-serif">
                  <Moon size={11} />
                  <span>Stay: {currentParsedDay.nightStay}</span>
                </div>
              )}
            </div>

          </div>

          {/* Map Bottom Status Bar */}
          <div className="flex items-center justify-between text-[11px] text-[#7d6749] bg-[#fbf8f2] border-t border-[#ebdcc4] px-4 py-2.5">
            <span className="flex items-center gap-1.5 font-medium">
              <Sparkles size={13} className="text-[#b8864e]" />
              <strong>Day {currentParsedDay.dayNumber}:</strong> {currentParsedDay.titleWithoutDay}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-gray-500 italic hidden sm:inline">
                {isFocusMode ? 'Showing 1 point at a time (Camera locked)' : 'Entire Route Overview'}
              </span>
              <button
                onClick={() => {
                  setIsScrollOpen(true);
                  if (scrollSectionRef.current) {
                    scrollSectionRef.current.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-[#b8864e] hover:text-[#936531] font-semibold underline underline-offset-2 flex items-center gap-1"
              >
                <Scroll size={13} />
                <span>{isScrollOpen ? 'Scroll Down to Details' : 'Unroll Manuscript Scroll'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── THE ROYAL MANUSCRIPT SCROLL SECTION (WITH OPEN/CLOSE ANIMATION) ── */}
      <div ref={scrollSectionRef} className="max-w-4xl mx-auto w-full pt-4">
        
        {/* Scroll Header Bar with Open / Close Toggle Button */}
        <div className="flex items-center justify-between px-2 mb-3">
          <div className="flex items-center gap-2 text-xs font-serif text-[#785b37]">
            <Scroll size={15} className="text-[#b8864e]" />
            <span className="font-semibold uppercase tracking-widest text-[11px]">Royal Manuscript Itinerary</span>
            <span>•</span>
            <span className="italic">Day {currentParsedDay.dayNumber}: {currentParsedDay.stopName}</span>
          </div>

          <button
            onClick={() => setIsScrollOpen(!isScrollOpen)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-[#7d5d36] hover:text-gray-900 bg-[#f4ebdb] hover:bg-[#ede1ce] border border-[#d8c5a4] transition-colors"
          >
            {isScrollOpen ? (
              <>
                <span>Roll Up</span>
                <ChevronUp size={14} />
              </>
            ) : (
              <>
                <span>Unroll Scroll</span>
                <ChevronDown size={14} />
              </>
            )}
          </button>
        </div>

        {/* AnimatePresence for Smooth Rolling Open and Closed Animation */}
        <AnimatePresence mode="wait">
          {isScrollOpen ? (
            /* ── STATE 1: UNROLLED SCROLL WITH ANIMATION ── */
            <motion.div
              key={`open-scroll-${selectedDayIndex}`}
              initial={{ height: 0, opacity: 0, scaleY: 0.1 }}
              animate={{ height: 'auto', opacity: 1, scaleY: 1 }}
              exit={{ height: 0, opacity: 0, scaleY: 0.1 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'top center' }}
              className="relative w-full overflow-hidden"
            >
              {/* TOP WOODEN ROLLER ROD */}
              <div className="relative z-20 flex items-center justify-center">
                {/* Left Gold Finial */}
                <div className="w-6 h-8 rounded-l-md bg-gradient-to-r from-[#8a6828] via-[#d4af37] to-[#ffd700] shadow-md border-r border-[#694c16]" />
                
                {/* Center Walnut Wooden Rod */}
                <div className="flex-1 h-6 bg-gradient-to-b from-[#2e190e] via-[#4d2a17] to-[#1a0e08] rounded-xs shadow-md border-y border-[#6e3e23] relative">
                  <div className="absolute inset-x-0 top-1 h-[1px] bg-white/20" />
                  <div className="absolute inset-x-0 bottom-1 h-[1px] bg-black/40" />
                </div>

                {/* Right Gold Finial */}
                <div className="w-6 h-8 rounded-r-md bg-gradient-to-l from-[#8a6828] via-[#d4af37] to-[#ffd700] shadow-md border-l border-[#694c16]" />
              </div>

              {/* UNROLLED PARCHMENT BODY */}
              <div className="relative mx-4 bg-gradient-to-b from-[#fbf6ec] via-[#f8f0dd] to-[#f4e9d0] border-x-2 border-[#d9c7a8] shadow-2xl p-6 sm:p-10 pt-8 text-charcoal">
                
                {/* Subtle Watermark Texture */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#8c6231_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Inner Double Gold Border Frame */}
                <div className="border border-[#dcc59f] p-6 sm:p-8 bg-white/40 backdrop-blur-2xs rounded-sm relative shadow-inner">
                  
                  {/* Classical Corner Fleurons */}
                  <span className="absolute -top-3 -left-3 text-[#b8864e] font-serif text-base select-none">⚜</span>
                  <span className="absolute -top-3 -right-3 text-[#b8864e] font-serif text-base select-none">⚜</span>
                  <span className="absolute -bottom-3 -left-3 text-[#b8864e] font-serif text-base select-none">⚜</span>
                  <span className="absolute -bottom-3 -right-3 text-[#b8864e] font-serif text-base select-none">⚜</span>

                  {/* Top Close / Roll Up Button in Upper Right */}
                  <button
                    onClick={() => setIsScrollOpen(false)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-black/5 transition-colors"
                    title="Roll Up Manuscript"
                  >
                    <X size={16} />
                  </button>

                  {/* Header & Seal */}
                  <div className="text-center pb-5 border-b border-[#e5d4bb] mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f3e5ce] border border-[#d5bc94] text-[10px] font-bold tracking-[0.25em] text-[#825c2b] uppercase mb-2">
                      <span>DAY 0{currentParsedDay.dayNumber} OF 0{totalDays}</span>
                      <span>•</span>
                      <span>{currentParsedDay.stageType.toUpperCase()}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-4xl text-gray-900 leading-tight">
                      {currentParsedDay.titleWithoutDay}
                    </h3>

                    {/* Night Stay Wax Badge */}
                    {currentParsedDay.nightStay && (
                      <div className="mt-3.5 inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#581c1c]/5 border border-[#8a2b2b]/20 text-[#6d1f1f] text-xs font-serif">
                        <Moon size={13} className="text-[#8a2b2b]" />
                        <span><strong>Night Stay:</strong> {currentParsedDay.nightStay}</span>
                      </div>
                    )}
                  </div>

                  {/* Detailed Activities Programme */}
                  <div className="space-y-4 mb-8">
                    <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#b8864e]">
                      Daily Sacred Programme & Darshan
                    </p>
                    
                    {currentParsedDay.activities && currentParsedDay.activities.length > 0 ? (
                      <ul className="space-y-3.5">
                        {currentParsedDay.activities.map((act, actIdx) => (
                          <li key={actIdx} className="flex items-start gap-3 text-sm text-gray-800 leading-relaxed">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-[#b8864e] shrink-0 border border-[#8a5b28]" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-gray-500 italic">
                        Detailed sightseeing, pujas and transfers are curated seamlessly for this day.
                      </p>
                    )}
                  </div>

                  {/* Bottom Navigation & WhatsApp Action Bar */}
                  <div className="pt-5 border-t border-[#e5d4bb] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        onClick={handlePrevDay}
                        disabled={selectedDayIndex === 0}
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 px-4 py-2 rounded-md text-xs font-semibold text-gray-700 bg-[#f7eedc] hover:bg-[#ebdcc0] disabled:opacity-40 disabled:hover:bg-[#f7eedc] transition-colors border border-[#d9c49f]"
                      >
                        <ChevronLeft size={15} />
                        <span>Prev Stop</span>
                      </button>
                      <button
                        onClick={handleNextDay}
                        disabled={selectedDayIndex === totalDays - 1}
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 px-4 py-2 rounded-md text-xs font-semibold text-gray-700 bg-[#f7eedc] hover:bg-[#ebdcc0] disabled:opacity-40 disabled:hover:bg-[#f7eedc] transition-colors border border-[#d9c49f]"
                      >
                        <span>Next Stop</span>
                        <ChevronRight size={15} />
                      </button>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#25D366] text-white hover:bg-[#20ba59] transition-colors shadow-sm"
                    >
                      <MessageCircle size={15} />
                      <span>Enquire Day {currentParsedDay.dayNumber} Details</span>
                    </a>
                  </div>

                </div>
              </div>

              {/* BOTTOM WOODEN ROLLER ROD & SILK TASSEL */}
              <div className="relative z-20 flex flex-col items-center">
                <div className="w-full flex items-center justify-center">
                  <div className="w-6 h-8 rounded-l-md bg-gradient-to-r from-[#8a6828] via-[#d4af37] to-[#ffd700] shadow-md border-r border-[#694c16]" />
                  <div className="flex-1 h-6 bg-gradient-to-b from-[#2e190e] via-[#4d2a17] to-[#1a0e08] rounded-xs shadow-md border-y border-[#6e3e23] relative">
                    <div className="absolute inset-x-0 top-1 h-[1px] bg-white/20" />
                    <div className="absolute inset-x-0 bottom-1 h-[1px] bg-black/40" />
                  </div>
                  <div className="w-6 h-8 rounded-r-md bg-gradient-to-l from-[#8a6828] via-[#d4af37] to-[#ffd700] shadow-md border-l border-[#694c16]" />
                </div>

                {/* Hanging Silk Tassel Centerpiece */}
                <div className="flex flex-col items-center -mt-0.5">
                  <div className="w-2 h-4 bg-[#b8864e]" />
                  <div className="w-4 h-4 rounded-full bg-[#851d1d] shadow-xs border border-[#ffd700]" />
                  <div className="w-5 h-7 bg-gradient-to-b from-[#851d1d] to-[#580000] rounded-b-sm shadow-xs" />
                </div>
              </div>

            </motion.div>
          ) : (
            /* ── STATE 2: ROLLED CLOSED SCROLL BANNER ── */
            <motion.div
              key="closed-scroll"
              initial={{ opacity: 0, scaleY: 0.8 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0.8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onClick={() => setIsScrollOpen(true)}
              className="cursor-pointer group select-none py-2"
            >
              {/* Rolled Cylinder Rods with Center Calligraphic Badge */}
              <div className="relative flex flex-col items-center">
                {/* Double Rods Closed Together */}
                <div className="w-full flex items-center justify-center">
                  <div className="w-6 h-9 rounded-l-md bg-gradient-to-r from-[#8a6828] via-[#d4af37] to-[#ffd700] shadow-md border-r border-[#694c16]" />
                  <div className="flex-1 h-8 bg-gradient-to-b from-[#2e190e] via-[#4d2a17] to-[#1a0e08] rounded-xs shadow-md border-y border-[#6e3e23] flex items-center justify-center px-4">
                    <span className="text-[#ffd700] font-serif text-sm sm:text-base tracking-wider flex items-center gap-2 group-hover:scale-105 transition-transform">
                      <Scroll size={16} className="text-[#ffd700]" />
                      <span>Day {currentParsedDay.dayNumber}: {currentParsedDay.stopName} — Click to Unroll Manuscript</span>
                      <ChevronDown size={15} />
                    </span>
                  </div>
                  <div className="w-6 h-9 rounded-r-md bg-gradient-to-l from-[#8a6828] via-[#d4af37] to-[#ffd700] shadow-md border-l border-[#694c16]" />
                </div>

                {/* Tassel */}
                <div className="flex flex-col items-center -mt-0.5">
                  <div className="w-2 h-3 bg-[#b8864e]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#851d1d] border border-[#ffd700]" />
                  <div className="w-4 h-6 bg-gradient-to-b from-[#851d1d] to-[#580000] rounded-b-sm shadow-xs" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Compass, Mountain, Flame } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

// Custom Map Pin + Way / Route Icon for 4 Dham
function MapPinWayIcon({ className = 'w-6 h-6', strokeWidth = 1.75 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Origin waypoint */}
      <circle cx="4.5" cy="19.5" r="1.5" />
      {/* S-curved pilgrim route / way winding to destination */}
      <path d="M6 19.5h4.5a3.5 3.5 0 0 0 3.5-3.5v-1a3 3 0 0 1 2.5-2.8" />
      {/* Sacred Dham Map Pin */}
      <path d="M17 2.5a3.5 3.5 0 0 0-3.5 3.5c0 2.4 3.5 5.8 3.5 5.8s3.5-3.4 3.5-5.8a3.5 3.5 0 0 0-3.5-3.5z" />
      <circle cx="17" cy="6" r="1.2" />
    </svg>
  );
}

const ICON_MAP = {
  users: Users,
  compass: Compass,
  mountain: Mountain,
  flame: Flame,
  dham: MapPinWayIcon,
};

function getStatIcon(stat, index) {
  if (stat.icon && ICON_MAP[stat.icon]) {
    return ICON_MAP[stat.icon];
  }
  const fallbackIcons = [Users, Compass, Mountain, Flame, MapPinWayIcon];
  return fallbackIcons[index % fallbackIcons.length];
}

function StatItem({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const IconComponent = getStatIcon(stat, index);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.7, ease: 'easeOut' }}
      className="flex flex-col items-start text-left group"
    >
      {/* Orange Icon */}
      <div className="mb-6 text-primary transition-transform duration-500 group-hover:-translate-y-0.5">
        <IconComponent className="w-6 h-6" strokeWidth={1.75} />
      </div>

      {/* Large Serif Number */}
      <div className="text-4xl sm:text-5xl lg:text-[54px] font-serif text-white mb-3 leading-none tracking-tight">
        {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
        {stat.suffix}
      </div>

      {/* Uppercase Label */}
      <p className="text-white/60 uppercase tracking-[0.2em] text-[10px] sm:text-[11px] font-sans font-medium leading-relaxed">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function StatsStrip() {
  const stats = siteConfig.home.stats;

  return (
    <section className="bg-dark py-20 md:py-24 px-6 md:px-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
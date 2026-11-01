'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

interface InteractiveHugButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'gold' | 'ruby' | 'white';
  size?: 'compact' | 'large';
}

const BURST_PARTICLES = [
  { id: 'bp1', x: -55, y: -48, color: 'text-rose-500 fill-rose-500' },
  { id: 'bp2', x: -25, y: -62, color: 'text-amber-400 fill-amber-400' },
  { id: 'bp3', x: 0, y: -70, color: 'text-pink-500 fill-pink-500' },
  { id: 'bp4', x: 28, y: -60, color: 'text-red-500 fill-red-500' },
  { id: 'bp5', x: 58, y: -45, color: 'text-yellow-300 fill-yellow-300' },
  { id: 'bp6', x: -42, y: -25, color: 'text-fuchsia-400 fill-fuchsia-400' },
  { id: 'bp7', x: 42, y: -25, color: 'text-orange-400 fill-orange-400' },
];

export default function InteractiveHugButton({
  label,
  onClick,
  variant = 'ruby',
  size = 'large',
}: InteractiveHugButtonProps) {
  const [burstKey, setBurstKey] = useState<number>(0);

  const handlePress = () => {
    setBurstKey((prev) => prev + 1);
    onClick();
  };

  const surfaceClass =
    variant === 'white'
      ? 'bg-white text-stone-900 border-2 border-amber-300 shadow-[0_8px_25px_rgba(251,191,36,0.45)]'
      : variant === 'gold'
      ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white border-2 border-yellow-200 shadow-[0_8px_25px_rgba(249,115,22,0.5)]'
      : 'bg-gradient-to-r from-rose-600 via-orange-600 to-amber-500 text-white border-2 border-amber-200/80 shadow-[0_10px_28px_rgba(225,29,72,0.45)]';

  const sizeClass =
    size === 'compact'
      ? 'min-h-[44px] sm:min-h-[50px] px-4 sm:px-6 py-2 sm:py-2.5 rounded-2xl text-base sm:text-lg'
      : 'min-h-[64px] px-8 py-4 rounded-2xl text-xl sm:text-2xl';

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Floating Heart Burst on Click */}
      <AnimatePresence>
        {burstKey > 0 && (
          <motion.div
            key={burstKey}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75 }}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center z-30"
          >
            {BURST_PARTICLES.map((p) => (
              <motion.span
                key={p.id}
                initial={{ x: 0, y: 0, scale: 0.4, opacity: 1 }}
                animate={{ x: p.x, y: p.y, scale: 1.35, opacity: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="absolute"
              >
                <Heart className={`w-6 h-6 ${p.color} drop-shadow`} />
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.94 }}
        onClick={handlePress}
        className={`group relative overflow-hidden ${sizeClass} ${surfaceClass} font-extrabold flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap shrink-0 transition-all`}
      >
        {/* Continuous Shimmering Light Sweep */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/45 to-transparent animate-button-shimmer"
        />

        {/* Animated Pulsing Multicolored Hearts Left */}
        <span className="relative z-10 flex items-center -space-x-1.5">
          <Heart className="w-6 h-6 text-rose-200 fill-rose-400 animate-heartbeat-soft shrink-0" />
          <Heart className="w-5 h-5 text-amber-200 fill-amber-300 animate-heartbeat-soft [animation-delay:0.3s] shrink-0" />
        </span>

        <span className="relative z-10 tracking-tight">{label}</span>

        {/* Animated Sparkle Right */}
        <Sparkles className="relative z-10 w-6 h-6 text-yellow-200 fill-yellow-200 animate-sparkle-twinkle [animation-duration:1.6s] shrink-0" />
      </motion.button>
    </div>
  );
}

'use client';

import React from 'react';
import { Sparkles, Star } from 'lucide-react';

interface SparkleParticle {
  id: string;
  metal: 'gold' | 'silver';
  kind: 'sparkle' | 'star' | 'gem';
  leftClass: string;
  fallDurationClass: string;
  fallDelayClass: string;
  twinkleDurationClass: string;
  sizeClass: string;
}

const SPARKLE_PARTICLES: SparkleParticle[] = [
  { id: 'sp-1', metal: 'gold', kind: 'sparkle', leftClass: 'left-[2%]', fallDurationClass: '[animation-duration:13s]', fallDelayClass: '[animation-delay:0s]', twinkleDurationClass: '[animation-duration:2.2s]', sizeClass: 'w-6 h-6' },
  { id: 'sp-2', metal: 'silver', kind: 'star', leftClass: 'left-[6%]', fallDurationClass: '[animation-duration:16s]', fallDelayClass: '[animation-delay:-4s]', twinkleDurationClass: '[animation-duration:1.8s]', sizeClass: 'w-5 h-5' },
  { id: 'sp-3', metal: 'gold', kind: 'gem', leftClass: 'left-[9%]', fallDurationClass: '[animation-duration:11s]', fallDelayClass: '[animation-delay:-7s]', twinkleDurationClass: '[animation-duration:2.5s]', sizeClass: 'w-4 h-4' },
  { id: 'sp-4', metal: 'silver', kind: 'sparkle', leftClass: 'left-[13%]', fallDurationClass: '[animation-duration:15s]', fallDelayClass: '[animation-delay:-2s]', twinkleDurationClass: '[animation-duration:2.0s]', sizeClass: 'w-6 h-6' },
  { id: 'sp-5', metal: 'gold', kind: 'star', leftClass: 'left-[17%]', fallDurationClass: '[animation-duration:14s]', fallDelayClass: '[animation-delay:-9s]', twinkleDurationClass: '[animation-duration:1.7s]', sizeClass: 'w-5 h-5' },
  { id: 'sp-6', metal: 'silver', kind: 'gem', leftClass: 'left-[21%]', fallDurationClass: '[animation-duration:12s]', fallDelayClass: '[animation-delay:-5s]', twinkleDurationClass: '[animation-duration:2.4s]', sizeClass: 'w-4 h-4' },
  { id: 'sp-7', metal: 'gold', kind: 'sparkle', leftClass: 'left-[25%]', fallDurationClass: '[animation-duration:17s]', fallDelayClass: '[animation-delay:-11s]', twinkleDurationClass: '[animation-duration:2.1s]', sizeClass: 'w-7 h-7' },
  { id: 'sp-8', metal: 'silver', kind: 'star', leftClass: 'left-[29%]', fallDurationClass: '[animation-duration:13s]', fallDelayClass: '[animation-delay:-3s]', twinkleDurationClass: '[animation-duration:1.9s]', sizeClass: 'w-5 h-5' },
  { id: 'sp-9', metal: 'gold', kind: 'gem', leftClass: 'left-[33%]', fallDurationClass: '[animation-duration:15s]', fallDelayClass: '[animation-delay:-8s]', twinkleDurationClass: '[animation-duration:2.6s]', sizeClass: 'w-4 h-4' },
  { id: 'sp-10', metal: 'silver', kind: 'sparkle', leftClass: 'left-[37%]', fallDurationClass: '[animation-duration:12s]', fallDelayClass: '[animation-delay:-1s]', twinkleDurationClass: '[animation-duration:2.0s]', sizeClass: 'w-6 h-6' },
  { id: 'sp-11', metal: 'gold', kind: 'star', leftClass: 'left-[41%]', fallDurationClass: '[animation-duration:16s]', fallDelayClass: '[animation-delay:-6s]', twinkleDurationClass: '[animation-duration:1.6s]', sizeClass: 'w-6 h-6' },
  { id: 'sp-12', metal: 'silver', kind: 'gem', leftClass: 'left-[45%]', fallDurationClass: '[animation-duration:14s]', fallDelayClass: '[animation-delay:-10s]', twinkleDurationClass: '[animation-duration:2.3s]', sizeClass: 'w-4 h-4' },
  { id: 'sp-13', metal: 'gold', kind: 'sparkle', leftClass: 'left-[49%]', fallDurationClass: '[animation-duration:11s]', fallDelayClass: '[animation-delay:-4s]', twinkleDurationClass: '[animation-duration:1.9s]', sizeClass: 'w-6 h-6' },
  { id: 'sp-14', metal: 'silver', kind: 'star', leftClass: 'left-[53%]', fallDurationClass: '[animation-duration:15s]', fallDelayClass: '[animation-delay:-12s]', twinkleDurationClass: '[animation-duration:2.2s]', sizeClass: 'w-5 h-5' },
  { id: 'sp-15', metal: 'gold', kind: 'gem', leftClass: 'left-[57%]', fallDurationClass: '[animation-duration:13s]', fallDelayClass: '[animation-delay:-2s]', twinkleDurationClass: '[animation-duration:1.8s]', sizeClass: 'w-4 h-4' },
  { id: 'sp-16', metal: 'silver', kind: 'sparkle', leftClass: 'left-[61%]', fallDurationClass: '[animation-duration:17s]', fallDelayClass: '[animation-delay:-7s]', twinkleDurationClass: '[animation-duration:2.5s]', sizeClass: 'w-6 h-6' },
  { id: 'sp-17', metal: 'gold', kind: 'star', leftClass: 'left-[65%]', fallDurationClass: '[animation-duration:12s]', fallDelayClass: '[animation-delay:-5s]', twinkleDurationClass: '[animation-duration:2.0s]', sizeClass: 'w-5 h-5' },
  { id: 'sp-18', metal: 'silver', kind: 'gem', leftClass: 'left-[69%]', fallDurationClass: '[animation-duration:14s]', fallDelayClass: '[animation-delay:-9s]', twinkleDurationClass: '[animation-duration:1.7s]', sizeClass: 'w-4 h-4' },
  { id: 'sp-19', metal: 'gold', kind: 'sparkle', leftClass: 'left-[73%]', fallDurationClass: '[animation-duration:16s]', fallDelayClass: '[animation-delay:-3s]', twinkleDurationClass: '[animation-duration:2.3s]', sizeClass: 'w-7 h-7' },
  { id: 'sp-20', metal: 'silver', kind: 'star', leftClass: 'left-[77%]', fallDurationClass: '[animation-duration:11s]', fallDelayClass: '[animation-delay:-8s]', twinkleDurationClass: '[animation-duration:1.9s]', sizeClass: 'w-5 h-5' },
  { id: 'sp-21', metal: 'gold', kind: 'gem', leftClass: 'left-[81%]', fallDurationClass: '[animation-duration:15s]', fallDelayClass: '[animation-delay:-1s]', twinkleDurationClass: '[animation-duration:2.4s]', sizeClass: 'w-4 h-4' },
  { id: 'sp-22', metal: 'silver', kind: 'sparkle', leftClass: 'left-[85%]', fallDurationClass: '[animation-duration:13s]', fallDelayClass: '[animation-delay:-6s]', twinkleDurationClass: '[animation-duration:2.1s]', sizeClass: 'w-6 h-6' },
  { id: 'sp-23', metal: 'gold', kind: 'star', leftClass: 'left-[89%]', fallDurationClass: '[animation-duration:14s]', fallDelayClass: '[animation-delay:-11s]', twinkleDurationClass: '[animation-duration:1.8s]', sizeClass: 'w-6 h-6' },
  { id: 'sp-24', metal: 'silver', kind: 'gem', leftClass: 'left-[93%]', fallDurationClass: '[animation-duration:12s]', fallDelayClass: '[animation-delay:-4s]', twinkleDurationClass: '[animation-duration:2.2s]', sizeClass: 'w-4 h-4' },
  { id: 'sp-25', metal: 'gold', kind: 'sparkle', leftClass: 'left-[97%]', fallDurationClass: '[animation-duration:15s]', fallDelayClass: '[animation-delay:-9s]', twinkleDurationClass: '[animation-duration:1.7s]', sizeClass: 'w-6 h-6' },
];

export default function SparkleSnowfall() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {SPARKLE_PARTICLES.map((p) => {
        const isGold = p.metal === 'gold';
        const colorClasses = isGold
          ? 'text-amber-400 fill-amber-300 drop-shadow-[0_0_8px_rgba(245,158,11,0.75)]'
          : 'text-slate-400 fill-slate-200 drop-shadow-[0_0_8px_rgba(148,163,184,0.85)]';

        return (
          <div
            key={p.id}
            className={`absolute -top-10 ${p.leftClass} animate-sparkle-fall ${p.fallDurationClass} ${p.fallDelayClass}`}
          >
            <div className={`animate-sparkle-twinkle ${p.twinkleDurationClass}`}>
              {p.kind === 'sparkle' && (
                <Sparkles className={`${p.sizeClass} ${colorClasses}`} />
              )}
              {p.kind === 'star' && (
                <Star className={`${p.sizeClass} ${colorClasses}`} />
              )}
              {p.kind === 'gem' && (
                <div
                  className={`${p.sizeClass} rotate-45 rounded-xs ${
                    isGold
                      ? 'bg-gradient-to-br from-yellow-200 via-amber-400 to-orange-500 shadow-[0_0_10px_rgba(251,191,36,0.9)]'
                      : 'bg-gradient-to-br from-white via-slate-300 to-slate-400 shadow-[0_0_10px_rgba(148,163,184,0.9)]'
                  }`}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

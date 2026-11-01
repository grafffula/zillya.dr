'use client';

import React from 'react';
import { Heart } from 'lucide-react';

interface HeartMarqueeProps {
  accentLabel: string;
}

const HEART_ITEMS = [
  { id: 'h1', color: 'text-rose-500 fill-rose-500', label: 'Любим тебя!' },
  { id: 'h2', color: 'text-amber-300 fill-amber-300', label: 'Спасибо за всё!' },
  { id: 'h3', color: 'text-pink-400 fill-pink-400', label: 'С Юбилеем 55!' },
  { id: 'h4', color: 'text-red-500 fill-red-500', label: 'Родная мама Зиля!' },
  { id: 'h5', color: 'text-yellow-200 fill-yellow-200', label: 'Будь счастлива!' },
  { id: 'h6', color: 'text-fuchsia-400 fill-fuchsia-400', label: 'Ценим и гордимся!' },
  { id: 'h7', color: 'text-orange-200 fill-orange-200', label: 'Чудесного отпуска!' },
  { id: 'h8', color: 'text-white fill-white', label: 'Крепкого здоровья!' },
];

export default function HeartMarquee({ accentLabel }: HeartMarqueeProps) {
  const repeatedItems = [...HEART_ITEMS, ...HEART_ITEMS];

  return (
    <div className="-mx-7 sm:-mx-9 -mb-7 sm:-mb-9 mt-2 pt-3 pb-3 bg-stone-950/35 backdrop-blur-xs border-t border-white/25 overflow-hidden">
      <div className="animate-heart-marquee flex items-center gap-6 px-4">
        {repeatedItems.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="flex items-center gap-2.5 whitespace-nowrap shrink-0"
          >
            <Heart
              className={`w-6 h-6 sm:w-7 sm:h-7 ${item.color} animate-heartbeat-soft shrink-0 drop-shadow`}
            />
            <span className="text-lg sm:text-xl font-extrabold text-white tracking-wide">
              {idx % 2 === 0 ? accentLabel : item.label}
            </span>
            <Heart
              className="w-5 h-5 text-amber-300 fill-amber-300 shrink-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

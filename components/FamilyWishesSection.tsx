'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { FAMILY_WISHES, FamilyMemberWish, getFamilyWishById } from '@/lib/card-data';
import InteractiveHugButton from '@/components/InteractiveHugButton';

interface FamilyWishesSectionProps {
  onSendHug: (senderLabel: string) => void;
}

export default function FamilyWishesSection({
  onSendHug,
}: FamilyWishesSectionProps) {
  const [selectedId, setSelectedId] = useState<FamilyMemberWish['id']>('younger-son');
  const activeWish = getFamilyWishById(selectedId);

  return (
    <section
      id="family-wishes"
      aria-labelledby="family-wishes-heading"
      className="py-10 sm:py-14"
    >
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-lg sm:text-xl font-bold text-orange-700">
            Самые тёплые слова от близких · 3 личных поздравления
          </div>
          <h2
            id="family-wishes-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight [text-wrap:balance]"
          >
            Нажми на кнопку, чтобы открыть поздравление от каждого из нас
          </h2>
        </div>

        {/* Large Senior-Friendly Segmented Selector Buttons with Shimmer & Heart Animation */}
        <div
          role="tablist"
          aria-label="Выбор поздравления от семьи"
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {FAMILY_WISHES.map((item) => {
            const isActive = item.id === selectedId;
            return (
              <motion.button
                key={item.id}
                role="tab"
                type="button"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                aria-selected={isActive}
                onClick={() => setSelectedId(item.id)}
                className={`relative overflow-hidden min-h-[70px] px-6 py-4 rounded-2xl text-xl sm:text-2xl font-extrabold transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer border-2 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-600 via-amber-500 to-rose-500 text-white border-amber-300 shadow-[0_10px_25px_rgba(249,115,22,0.4)] scale-[1.01]'
                    : 'bg-white text-stone-800 border-orange-200 hover:border-orange-400 hover:bg-orange-50 shadow-sm'
                }`}
              >
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-button-shimmer"
                  />
                )}
                <Heart
                  className={`relative z-10 w-6 h-6 shrink-0 ${
                    isActive
                      ? 'text-yellow-200 fill-yellow-200 animate-heartbeat-soft'
                      : 'text-orange-500 fill-orange-400'
                  }`}
                />
                <span className="relative z-10">{item.senderName}</span>
                {isActive && (
                  <Sparkles className="relative z-10 w-5 h-5 text-yellow-200 animate-sparkle-twinkle [animation-duration:1.6s] shrink-0" />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Active Family Wish Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeWish.id}
            role="tabpanel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${activeWish.gradientClass} p-7 sm:p-10 md:p-12 text-white shadow-xl border-2 border-orange-300/60`}
          >
            <div className="relative z-10 max-w-4xl mx-auto space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/25 pb-4">
                <div className="text-xl sm:text-2xl font-extrabold text-orange-50">
                  {activeWish.roleLabel} · {activeWish.toastHighlight}
                </div>
              </div>

              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug text-white [text-wrap:balance]">
                «{activeWish.sentence}»
              </blockquote>

              <div className="pt-3 flex flex-wrap items-center justify-between gap-4">
                <InteractiveHugButton
                  label="Обнять в ответ"
                  variant="ruby"
                  size="large"
                  onClick={() => onSendHug(activeWish.senderName)}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Crown,
  Cake,
  Heart,
  Sun,
  Palmtree,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { StoryBlock } from '@/lib/card-data';
import HeartMarquee from '@/components/HeartMarquee';

interface StoryCardViewProps {
  blocks: StoryBlock[];
  activeStep: number;
  onNext: () => void;
  onPrev: () => void;
  onSelectStep: (idx: number) => void;
}

function renderBlockIcon(iconName: StoryBlock['iconName']) {
  switch (iconName) {
    case 'crown':
      return <Crown className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 shrink-0" />;
    case 'cake':
      return <Cake className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 shrink-0" />;
    case 'heart':
      return <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 fill-orange-500 shrink-0" />;
    case 'sun':
      return <Sun className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 shrink-0" />;
    case 'palmtree':
      return <Palmtree className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 shrink-0" />;
  }
}

export default function StoryCardView({
  blocks,
  activeStep,
  onNext,
  onPrev,
  onSelectStep,
}: StoryCardViewProps) {
  const currentBlock = blocks[activeStep] ?? blocks[0];

  return (
    <div className="space-y-16">
      {/* SECTION 1: Interactive Step-by-Step Large Card Carousel */}
      <section
        id="interactive-card"
        aria-labelledby="interactive-card-heading"
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-lg sm:text-xl font-bold text-orange-700">
              Интерактивная открытка · Страница{' '}
              <span className="tabular-nums">{activeStep + 1}</span> из{' '}
              <span className="tabular-nums">{blocks.length}</span>
            </div>
            <h2
              id="interactive-card-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900"
            >
              Листай праздничные карточки большими кнопками
            </h2>
          </div>

          {/* Step Number Quick Buttons */}
          <div
            role="group"
            aria-label="Номера праздничных страниц"
            className="flex items-center gap-2 sm:gap-3"
          >
            {blocks.map((b, idx) => (
              <motion.button
                key={b.id}
                type="button"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => onSelectStep(idx)}
                aria-label={`Открыть страницу ${idx + 1}: ${b.title}`}
                aria-current={idx === activeStep ? 'step' : undefined}
                className={`relative overflow-hidden min-w-[54px] min-h-[54px] rounded-2xl text-xl font-extrabold tabular-nums transition-all cursor-pointer border-2 ${
                  idx === activeStep
                    ? 'bg-gradient-to-br from-orange-600 to-amber-500 text-white border-orange-700 shadow-lg scale-105'
                    : 'bg-white text-stone-800 border-orange-200 hover:bg-orange-50'
                }`}
              >
                {idx === activeStep && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-button-shimmer"
                  />
                )}
                <span className="relative z-10">{idx + 1}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Shimmering Gradient Active Slide */}
        <AnimatePresence mode="wait">
          <motion.article
            key={currentBlock.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${currentBlock.gradientClass} p-7 sm:p-10 md:p-14 text-white shadow-xl border-2 border-orange-300/60`}
          >
            {/* Iridescent Shimmering Glow Effect */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full bg-yellow-300/30 blur-3xl"
            />

            <div className="relative z-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white flex items-center justify-center shadow-lg">
                    {renderBlockIcon(currentBlock.iconName)}
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-bold text-orange-50">
                      Глава {currentBlock.stepNumber} · {currentBlock.category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                      {currentBlock.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Single Large Sentence per Block */}
              <p className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-snug text-white py-2 [text-wrap:balance]">
                {currentBlock.sentence}
              </p>

              {/* Bottom Navigation Controls Inside Card */}
              <div className="pt-4 border-t border-white/25 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="text-lg sm:text-xl font-bold text-orange-50 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-yellow-200 animate-sparkle-twinkle [animation-duration:1.8s] shrink-0" />
                  <span>{currentBlock.accentLabel}</span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={onPrev}
                    className="group relative overflow-hidden flex-1 sm:flex-initial min-h-[60px] px-7 py-3.5 rounded-2xl bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-white border-2 border-amber-300/60 text-xl font-extrabold flex items-center justify-center gap-2 shadow-lg cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-button-shimmer"
                    />
                    <ChevronLeft className="relative z-10 w-7 h-7 text-amber-300 shrink-0" />
                    <span className="relative z-10">Назад</span>
                  </motion.button>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={onNext}
                    className="group relative overflow-hidden flex-1 sm:flex-initial min-h-[60px] px-8 py-3.5 rounded-2xl bg-white text-stone-900 border-2 border-yellow-300 text-xl font-extrabold flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(255,255,255,0.35)] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-orange-300/45 to-transparent animate-button-shimmer"
                    />
                    <span className="relative z-10">Дальше</span>
                    <ChevronRight className="relative z-10 w-7 h-7 text-orange-600 shrink-0" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </section>

      {/* SECTION 2: All 5 Shimmering Gradient Cards Together (One Sentence Per Block + Full-Width Heart Marquee) */}
      <section
        id="all-cards"
        aria-labelledby="all-cards-heading"
        className="space-y-8"
      >
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-lg sm:text-xl font-bold text-orange-700">
            Вся открытка целиком · 5 солнечных блоков
          </div>
          <h2
            id="all-cards-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 [text-wrap:balance]"
          >
            Пять главных поводов сказать тебе «Спасибо и Любим!»
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {blocks.map((block, index) => {
            const isWide = index === 0;
            return (
              <motion.article
                key={block.id}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.18 }}
                className={`${
                  isWide ? 'lg:col-span-2' : 'lg:col-span-1'
                } relative overflow-hidden rounded-3xl bg-gradient-to-br ${
                  block.gradientClass
                } p-7 sm:p-9 text-white shadow-xl border border-orange-300/60 flex flex-col justify-between gap-6`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-md shrink-0">
                        {renderBlockIcon(block.iconName)}
                      </div>
                      <div>
                        <div className="text-base sm:text-lg font-bold text-orange-50">
                          {block.stepNumber}. {block.category}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                          {block.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Strictly 1 clear, large sentence per gradient block */}
                  <p className="text-2xl sm:text-3xl font-extrabold leading-snug text-white [text-wrap:balance]">
                    {block.sentence}
                  </p>
                </div>

                {/* Full-width scrolling marquee of multicolored hearts replacing the 'Спасибо!' button */}
                <HeartMarquee accentLabel={block.accentLabel} />
              </motion.article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

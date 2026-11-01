'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Sun,
  Cake,
  Palmtree,
  ArrowDown,
  ArrowUp,
} from 'lucide-react';
import {
  STORY_BLOCKS,
  getNextStepIndex,
  getPrevStepIndex,
} from '@/lib/card-data';
import StoryCardView from '@/components/StoryCardView';
import FamilyWishesSection from '@/components/FamilyWishesSection';
import JubileeCakeStation from '@/components/JubileeCakeStation';
import SparkleSnowfall from '@/components/SparkleSnowfall';
import InteractiveHugButton from '@/components/InteractiveHugButton';

export default function HomePage() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hugsCount, setHugsCount] = useState<number>(55);
  const [bannerNotice, setBannerNotice] = useState<string | null>(null);
  const [celebrationBurst, setCelebrationBurst] = useState<boolean>(false);

  const showNotice = useCallback((message: string) => {
    setBannerNotice(message);
    setCelebrationBurst(true);
    setTimeout(() => {
      setCelebrationBurst(false);
    }, 2500);
  }, []);

  const handleSendHug = useCallback(
    (sourceLabel: string) => {
      setHugsCount((prev) => prev + 1);
      showNotice(`Отправлено тёплое объятие маме Зиле! (${sourceLabel})`);
    },
    [showNotice]
  );

  const handleNextStep = useCallback(() => {
    setActiveStep((prev) => getNextStepIndex(prev, STORY_BLOCKS.length));
  }, []);

  const handlePrevStep = useCallback(() => {
    setActiveStep((prev) => getPrevStepIndex(prev, STORY_BLOCKS.length));
  }, []);

  const handleCelebrateBurst = useCallback(() => {
    setHugsCount((prev) => prev + 5);
    showNotice('С Юбилеем 55 лет и выходом в отпуск, любимая мама Зиля!');
  }, [showNotice]);

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-stone-900">
      {/* Continuous Golden & Silver Sparkle Snowfall on the White Background */}
      <SparkleSnowfall />

      {/* Mandatory 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-orange-200 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            className="text-lg sm:text-2xl font-extrabold tracking-tight text-orange-700 whitespace-nowrap shrink-0"
          >
            Маме Зиле · 55 лет
          </a>

          {/* Zone 2: 4 concise single-line navigation links */}
          <nav
            aria-label="Основная навигация по открытке"
            className="hidden lg:flex items-center gap-8 text-lg font-bold text-stone-700"
          >
            <a
              href="#interactive-card"
              className="hover:text-orange-600 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Слайд-открытка
            </a>
            <a
              href="#all-cards"
              className="hover:text-orange-600 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Все карточки
            </a>
            <a
              href="#family-wishes"
              className="hover:text-orange-600 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Слова семьи
            </a>
            <a
              href="#jubilee-cake"
              className="hover:text-orange-600 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Праздничный торт
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center shrink-0">
            <InteractiveHugButton
              label={`Обнять (${hugsCount})`}
              variant="gold"
              size="compact"
              onClick={() => handleSendHug('Обнимашки из шапки открытки')}
            />
          </div>
        </div>
      </header>

      {/* Live Feedback Toast Banner for Interactions */}
      <AnimatePresence>
        {bannerNotice && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            role="status"
            aria-live="polite"
            className="relative z-30 bg-stone-900 text-white px-4 py-3 text-center border-b border-orange-500/40"
          >
            <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-3 text-lg sm:text-xl font-bold">
              <Sparkles className="w-6 h-6 text-amber-400 shrink-0" />
              <span>{bannerNotice}</span>
              <button
                type="button"
                onClick={() => setBannerNotice(null)}
                className="ml-2 px-3 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-base font-bold cursor-pointer whitespace-nowrap shrink-0"
              >
                Понятно
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Container */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-12">
        {/* HERO SECTION */}
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-600 via-amber-500 to-orange-500 p-7 sm:p-12 md:p-14 text-white shadow-2xl border-2 border-orange-300/60"
        >
          {/* Warm Sunlit Radial Highlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 -right-28 w-96 h-96 rounded-full bg-yellow-300/35 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-orange-300/30 blur-3xl"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-2 text-lg sm:text-xl font-extrabold text-orange-50">
                <span>Золотой Юбилей 55 лет</span>
                <span aria-hidden="true">·</span>
                <span>С выходом в отпуск!</span>
                <span aria-hidden="true">·</span>
                <span>Мы тебя очень любим</span>
              </div>

              <h1
                id="hero-heading"
                className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] text-white [text-wrap:balance]"
              >
                С Днём Рождения, любимая мама Зиля!
              </h1>

              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-50 leading-snug max-w-3xl [text-wrap:balance]">
                Родная наша, мы поздравляем тебя с 55-летием и началом долгожданного отпуска — спасибо за твои шедевры на кухне, уютный дом и бесконечную доброту!
              </p>

              {/* Single Dominant Primary CTA + Interactive Hug Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <motion.a
                  href="#interactive-card"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden min-h-[64px] px-8 py-4 rounded-2xl bg-white text-stone-900 border-2 border-yellow-200 text-xl font-extrabold shadow-xl flex items-center justify-center gap-3 whitespace-nowrap shrink-0"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-orange-300/45 to-transparent animate-button-shimmer"
                  />
                  <span className="relative z-10">Смотреть открытку</span>
                  <ArrowDown className="relative z-10 w-6 h-6 text-orange-600 animate-bounce shrink-0" />
                </motion.a>

                <InteractiveHugButton
                  label="Подарить обнимашки"
                  variant="ruby"
                  size="large"
                  onClick={() => handleSendHug('Праздничное объятие с главного экрана')}
                />
              </div>
            </div>

            {/* Right Emblem Card: 55 Jubilee Golden Sun Badge */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <motion.div
                animate={celebrationBurst ? { scale: 1.04 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-sm rounded-3xl bg-white/95 text-stone-900 p-7 sm:p-8 shadow-2xl border-4 border-amber-300 text-center space-y-4"
              >
                <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center shadow-lg">
                  <span className="font-[family-name:var(--font-display)] text-5xl font-extrabold tabular-nums">
                    55
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-bold text-orange-700">
                    Именинница дня
                  </div>
                  <div className="text-3xl font-extrabold text-stone-900">
                    Мама Зиля
                  </div>
                </div>
                <div className="pt-2 border-t border-orange-100 flex items-center justify-around text-base sm:text-lg font-bold text-stone-700">
                  <div className="flex flex-col items-center gap-1">
                    <Cake className="w-6 h-6 text-orange-600" />
                    <span>Лучший повар</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Palmtree className="w-6 h-6 text-orange-600" />
                    <span>Ура, отпуск!</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Sun className="w-6 h-6 text-orange-600" />
                    <span>Любимый дом</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE STORY CARDS (Step-by-Step + Full 5 Gradient Blocks with Heart Marquees) */}
        <StoryCardView
          blocks={STORY_BLOCKS}
          activeStep={activeStep}
          onNext={handleNextStep}
          onPrev={handlePrevStep}
          onSelectStep={setActiveStep}
        />

        {/* PERSONAL FAMILY WISHES */}
        <FamilyWishesSection onSendHug={handleSendHug} />

        {/* INTERACTIVE 55TH JUBILEE CAKE & CANDLES */}
        <JubileeCakeStation onCelebrateBurst={handleCelebrateBurst} />
      </main>

      {/* Quiet Senior-Friendly Footer */}
      <footer className="relative z-10 mt-12 border-t border-orange-200 bg-white/90 backdrop-blur-xs px-4 sm:px-8 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-lg font-bold text-stone-700">
          <div>
            С любовью для мамы Зили в день 55-летия · Мы всегда рядом и очень тебя любим
          </div>
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden min-h-[52px] px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-500 text-white font-extrabold shadow-md transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-button-shimmer"
            />
            <span className="relative z-10">Наверх в начало открытки</span>
            <ArrowUp className="relative z-10 w-5 h-5 shrink-0" />
          </motion.a>
        </div>
      </footer>
    </div>
  );
}

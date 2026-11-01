'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Sparkles, RotateCcw, Cake, HeartHandshake, Heart } from 'lucide-react';
import {
  INITIAL_CANDLES,
  CandleItem,
  toggleCandleState,
  blowOutAllCandles,
  relightAllCandles,
  areAllCandlesBlownOut,
  countExtinguishedCandles,
} from '@/lib/card-data';

interface JubileeCakeStationProps {
  onCelebrateBurst: () => void;
}

export default function JubileeCakeStation({ onCelebrateBurst }: JubileeCakeStationProps) {
  const [candles, setCandles] = useState<CandleItem[]>(INITIAL_CANDLES);
  const allBlown = areAllCandlesBlownOut(candles);
  const blownCount = countExtinguishedCandles(candles);

  const handleToggleCandle = (id: string) => {
    const next = toggleCandleState(candles, id);
    setCandles(next);
    if (areAllCandlesBlownOut(next)) {
      onCelebrateBurst();
    }
  };

  const handleBlowAll = () => {
    setCandles(blowOutAllCandles(candles));
    onCelebrateBurst();
  };

  const handleRelight = () => {
    setCandles(relightAllCandles(candles));
  };

  return (
    <section
      id="jubilee-cake"
      aria-labelledby="cake-heading"
      className="py-10 sm:py-14"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-600 via-amber-500 to-orange-500 p-6 sm:p-10 md:p-12 text-white shadow-xl border border-orange-300/40">
        {/* Shimmering ambient light */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-yellow-300/35 blur-3xl"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-lg sm:text-xl font-bold text-orange-50">
            <Cake className="w-6 h-6 shrink-0" />
            <span>Праздничный торт для шеф-повара</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">55 лет</span>
          </div>

          <h2
            id="cake-heading"
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white [text-wrap:balance]"
          >
            Мамочка, загадай желание и задуй свечи!
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-orange-50 max-w-3xl mx-auto leading-relaxed [text-wrap:balance]">
            Обычно ты печёшь для нас самые вкусные торты на свете, а сегодня этот солнечный юбилейный торт — только для тебя!
          </p>

          {/* Interactive 5 Candles Row */}
          <div className="pt-4 pb-2">
            <div
              role="group"
              aria-label="Юбилейные свечи желаний"
              className="grid grid-cols-1 sm:grid-cols-5 gap-4 max-w-4xl mx-auto"
            >
              {candles.map((candle, idx) => (
                <motion.button
                  key={candle.id}
                  type="button"
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => handleToggleCandle(candle.id)}
                  aria-pressed={!candle.isLit}
                  className={`group relative overflow-hidden flex flex-col items-center justify-between rounded-2xl p-5 min-h-[140px] transition-all duration-200 cursor-pointer border-2 focus-visible:outline-4 focus-visible:outline-white ${
                    candle.isLit
                      ? 'bg-white/95 text-stone-900 border-yellow-300 shadow-lg'
                      : 'bg-orange-950/60 text-white border-orange-300/50 hover:bg-orange-950/75'
                  }`}
                >
                  <div className="flex items-center justify-center h-14">
                    <AnimatePresence mode="wait">
                      {candle.isLit ? (
                        <motion.div
                          key="lit"
                          initial={{ scale: 0.7, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.5, opacity: 0 }}
                          transition={{ duration: 0.18 }}
                          className="flex flex-col items-center"
                        >
                          <Flame className="w-10 h-10 text-orange-500 fill-amber-400 drop-shadow animate-heartbeat-soft" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="blown"
                          initial={{ scale: 0.7, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.18 }}
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-400/20 text-amber-200"
                        >
                          <Sparkles className="w-7 h-7 animate-sparkle-twinkle [animation-duration:1.6s]" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Candle Stick */}
                  <div className="w-6 h-10 rounded-t-md bg-gradient-to-b from-amber-400 to-orange-600 border border-orange-700/20 flex items-center justify-center text-white font-extrabold text-sm tabular-nums shadow-inner my-1">
                    {idx + 1}
                  </div>

                  <div className="text-center mt-2">
                    <div className="text-lg sm:text-xl font-extrabold leading-tight">
                      {candle.isLit ? candle.label : candle.wishWord}
                    </div>
                    <div
                      className={`text-base font-bold mt-1 ${
                        candle.isLit ? 'text-orange-700' : 'text-amber-200'
                      }`}
                    >
                      {candle.isLit ? 'Нажми, чтобы задуть' : 'Желание загадано!'}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Festive Cake Base Graphic */}
          <div className="mx-auto max-w-xl rounded-3xl bg-white/95 text-stone-900 p-6 sm:p-8 shadow-xl border-2 border-amber-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left space-y-1">
                <div className="text-lg font-bold text-orange-700">
                  Статус праздничных свечей · <span className="tabular-nums">{blownCount} из 5</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                  {allBlown
                    ? 'Ура! Все 5 свечей задуты — желания обязательно сбудутся!'
                    : 'Задуй все свечи одним нажатием на большую кнопку ниже!'}
                </div>
              </div>
              <div className="shrink-0 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white font-extrabold text-3xl tabular-nums shadow-md">
                55
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              {!allBlown ? (
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBlowAll}
                  className="group relative overflow-hidden w-full sm:w-auto min-h-[64px] px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-600 via-orange-600 to-amber-500 text-white border-2 border-yellow-200 text-xl sm:text-2xl font-extrabold shadow-[0_10px_28px_rgba(234,88,12,0.45)] transition-all flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/45 to-transparent animate-button-shimmer"
                  />
                  <Sparkles className="relative z-10 w-7 h-7 text-yellow-200 animate-sparkle-twinkle [animation-duration:1.5s] shrink-0" />
                  <span className="relative z-10">Задуть все свечи на счастье!</span>
                  <Heart className="relative z-10 w-6 h-6 text-rose-200 fill-rose-300 animate-heartbeat-soft shrink-0" />
                </motion.button>
              ) : (
                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 bg-orange-50 border-2 border-orange-200 rounded-2xl p-4">
                  <div className="flex items-center gap-3 text-orange-900 text-xl font-extrabold">
                    <HeartHandshake className="w-8 h-8 text-orange-600 shrink-0" />
                    <span>С 55-летием и началом чудесного отпуска, мама Зиля!</span>
                  </div>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleRelight}
                    className="group relative overflow-hidden min-h-[54px] px-6 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 text-white border-2 border-amber-200 text-lg font-extrabold shadow-md flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-button-shimmer"
                    />
                    <RotateCcw className="relative z-10 w-5 h-5 shrink-0" />
                    <span className="relative z-10">Зажечь снова</span>
                  </motion.button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

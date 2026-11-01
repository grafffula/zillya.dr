import test from 'node:test';
import assert from 'node:assert/strict';
import {
  STORY_BLOCKS,
  FAMILY_WISHES,
  INITIAL_CANDLES,
  getNextStepIndex,
  getPrevStepIndex,
  toggleCandleState,
  blowOutAllCandles,
  relightAllCandles,
  areAllCandlesBlownOut,
  countExtinguishedCandles,
  getFamilyWishById,
} from './card-data';

test('STORY_BLOCKS contains 5 concise single-sentence greeting blocks for Zilya', () => {
  assert.equal(STORY_BLOCKS.length, 5);
  assert.ok(STORY_BLOCKS[0].sentence.includes('Зиля'));
  assert.ok(STORY_BLOCKS[0].sentence.includes('55'));
  assert.equal(
    STORY_BLOCKS[2].sentence,
    'Мы всегда в восторге от твоей заботы и бесконечно тебя любим!'
  );
  assert.equal(
    STORY_BLOCKS[3].sentence,
    'Пусть уютный дом и любимый огород радуют душу, но, пожалуйста, береги свои силы и отдыхай почаще!'
  );
  assert.ok(STORY_BLOCKS[4].sentence.includes('отпуск'));
});

test('step navigation wraps around cleanly forward and backward', () => {
  assert.equal(getNextStepIndex(0, 5), 1);
  assert.equal(getNextStepIndex(4, 5), 0);
  assert.equal(getPrevStepIndex(0, 5), 4);
  assert.equal(getPrevStepIndex(3, 5), 2);
});

test('candle state transitions work for individual and full blow-out', () => {
  assert.equal(areAllCandlesBlownOut(INITIAL_CANDLES), false);
  assert.equal(countExtinguishedCandles(INITIAL_CANDLES), 0);

  const afterOne = toggleCandleState(INITIAL_CANDLES, 'c1');
  assert.equal(countExtinguishedCandles(afterOne), 1);
  assert.equal(areAllCandlesBlownOut(afterOne), false);

  const allBlown = blowOutAllCandles(afterOne);
  assert.equal(areAllCandlesBlownOut(allBlown), true);
  assert.equal(countExtinguishedCandles(allBlown), 5);

  const relit = relightAllCandles(allBlown);
  assert.equal(areAllCandlesBlownOut(relit), false);
  assert.equal(countExtinguishedCandles(relit), 0);
});

test('family wishes lookup returns matching family member greeting', () => {
  assert.equal(FAMILY_WISHES.length, 3);
  const fanis = getFamilyWishById('husband-fanis');
  assert.ok(fanis.senderName.includes('Фаниса'));
  const younger = getFamilyWishById('younger-son');
  assert.ok(younger.senderName.includes('младшего'));
});

import { test } from 'node:test';
import assert from 'node:assert/strict';
import Leitner from '../js/leitner.js';

test('applyRating: again resets to box 1', () => {
  assert.deepEqual(Leitner.applyRating({ box: 4, lastSeen: 'x' }, 'again'),
    { box: 1, lastSeen: 'x' });
});

test('applyRating: ok increments, capped at MAX_BOX', () => {
  assert.equal(Leitner.applyRating({ box: 2, lastSeen: null }, 'ok').box, 3);
  assert.equal(Leitner.applyRating({ box: 5, lastSeen: null }, 'ok').box, 5);
});

test('applyRating: easy jumps to MAX_BOX', () => {
  assert.equal(Leitner.applyRating({ box: 1, lastSeen: null }, 'easy').box, 5);
});

test('applyRating: does not mutate input', () => {
  const e = { box: 1, lastSeen: null };
  Leitner.applyRating(e, 'easy');
  assert.equal(e.box, 1);
});

test('buildQueue: lower boxes first, unseen before seen, topic filter', () => {
  const cards = [
    { id: 'a', topicId: '201' },
    { id: 'b', topicId: '201' },
    { id: 'c', topicId: '202' },
  ];
  const state = { cards: {
    a: { box: 3, lastSeen: '2026-01-01' },
    b: { box: 1, lastSeen: null },
  } };
  assert.deepEqual(Leitner.buildQueue(cards, state, { topicIds: ['201'] }), ['b', 'a']);
});

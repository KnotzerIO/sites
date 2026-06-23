import { test } from 'node:test';
import assert from 'node:assert/strict';
import Storage from '../js/storage.js';

test('emptyState shape', () => {
  assert.deepEqual(Storage.emptyState(), { version: 1, cards: {} });
});

test('getEntry returns default for unknown id', () => {
  assert.deepEqual(Storage.getEntry(Storage.emptyState(), 'x'), { box: 1, lastSeen: null });
});

test('setEntry stores without mutating original', () => {
  const s0 = Storage.emptyState();
  const s1 = Storage.setEntry(s0, 'a', { box: 2, lastSeen: 't' });
  assert.equal(Storage.getEntry(s1, 'a').box, 2);
  assert.deepEqual(s0.cards, {});
});

test('serialize/deserialize round-trips', () => {
  const s = Storage.setEntry(Storage.emptyState(), 'a', { box: 3, lastSeen: 't' });
  assert.deepEqual(Storage.deserialize(Storage.serialize(s)), s);
});

test('deserialize falls back on garbage', () => {
  assert.deepEqual(Storage.deserialize('not json'), Storage.emptyState());
});

test('resetTopic removes only matching cards', () => {
  let s = Storage.emptyState();
  s = Storage.setEntry(s, 'a', { box: 2, lastSeen: null });
  s = Storage.setEntry(s, 'c', { box: 2, lastSeen: null });
  const allCards = [{ id: 'a', topicId: '201' }, { id: 'c', topicId: '202' }];
  const out = Storage.resetTopic(s, ['201'], allCards);
  assert.equal(Storage.getEntry(out, 'a').box, 1);
  assert.equal(Storage.getEntry(out, 'c').box, 2);
});

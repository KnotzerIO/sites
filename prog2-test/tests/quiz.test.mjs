import { test } from 'node:test';
import assert from 'node:assert/strict';
import Quiz from '../js/quiz.js';

const mc = { id: 'q1', type: 'mc', options: ['a','b'], correct: [1], explanation: 'b ist richtig' };
const multi = { id: 'q2', type: 'multi', options: ['a','b','c'], correct: [0,2], explanation: 'a und c' };

test('evaluate single choice correct', () => {
  const r = Quiz.evaluate(mc, [1]);
  assert.equal(r.correct, true);
  assert.deepEqual(r.correctIndices, [1]);
  assert.equal(r.explanation, 'b ist richtig');
});

test('evaluate single choice wrong', () => {
  assert.equal(Quiz.evaluate(mc, [0]).correct, false);
});

test('evaluate multi-select order-independent', () => {
  assert.equal(Quiz.evaluate(multi, [2,0]).correct, true);
  assert.equal(Quiz.evaluate(multi, [0]).correct, false);
});

test('scoreQuiz counts correct and percent', () => {
  const s = Quiz.scoreQuiz([mc, multi], { q1: [1], q2: [0] });
  assert.equal(s.total, 2);
  assert.equal(s.correct, 1);
  assert.equal(s.percent, 50);
});

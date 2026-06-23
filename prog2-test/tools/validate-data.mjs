import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'data');
const window = { DATA: {} };

// topics.js zuerst, dann alle content-*.js in Reihenfolge.
const files = ['topics.js',
  ...fs.readdirSync(dir).filter(f => /^content-.*\.js$/.test(f)).sort(),
  ...fs.readdirSync(dir).filter(f => /^theory-.*\.js$/.test(f)).sort()];
for (const f of files) {
  const code = fs.readFileSync(path.join(dir, f), 'utf8');
  new Function('window', code)(window);
}

const { topics, flashcards, theory, quiz } = window.DATA;
const errors = [];
const topicIds = new Set(topics.map(t => t.id));

const seenCard = new Set();
for (const c of flashcards) {
  for (const k of ['id', 'topicId', 'question', 'answerVerbose', 'answerExam']) {
    if (!c[k]) errors.push(`flashcard ${c.id || '?'} missing ${k}`);
  }
  if (!topicIds.has(c.topicId)) errors.push(`flashcard ${c.id} unknown topicId ${c.topicId}`);
  if (seenCard.has(c.id)) errors.push(`duplicate flashcard id ${c.id}`);
  seenCard.add(c.id);
}

const seenQ = new Set();
for (const q of quiz) {
  if (seenQ.has(q.id)) errors.push(`duplicate quiz id ${q.id}`);
  seenQ.add(q.id);
  if (!topicIds.has(q.topicId)) errors.push(`quiz ${q.id} unknown topicId ${q.topicId}`);
  if (!Array.isArray(q.options) || q.options.length < 2) errors.push(`quiz ${q.id} needs >=2 options`);
  if (!Array.isArray(q.correct) || q.correct.length === 0) errors.push(`quiz ${q.id} bad correct`);
  for (const i of q.correct || []) {
    if (typeof i !== 'number' || i < 0 || i >= (q.options || []).length) errors.push(`quiz ${q.id} correct index ${i} out of range`);
  }
  if (!['mc', 'multi', 'code-output'].includes(q.type)) errors.push(`quiz ${q.id} bad type ${q.type}`);
}

for (const t of theory) {
  if (!topicIds.has(t.topicId)) errors.push(`theory unknown topicId ${t.topicId}`);
  if (!Array.isArray(t.sections)) errors.push(`theory ${t.topicId} missing sections`);
}

const byTopic = id => flashcards.filter(c => c.topicId === id).length;
if (errors.length) { console.error('VALIDATION FAILED:\n' + errors.join('\n')); process.exit(1); }
console.log(`OK: ${flashcards.length} cards (201:${byTopic('201')} 202:${byTopic('202')} 203:${byTopic('203')} 204:${byTopic('204')}), ` +
  `${quiz.length} quiz, ${theory.length} theory units, ${topics.length} topics`);

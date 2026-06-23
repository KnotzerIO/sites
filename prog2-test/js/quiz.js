(function (root) {
  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    const sa = [...a].sort(), sb = [...b].sort();
    return sa.every((v, i) => v === sb[i]);
  }

  function evaluate(question, selected) {
    return {
      correct: sameSet(selected || [], question.correct || []),
      correctIndices: question.correct || [],
      explanation: question.explanation || '',
    };
  }

  function scoreQuiz(questions, answers) {
    const total = questions.length;
    let correct = 0;
    for (const q of questions) {
      if (evaluate(q, (answers || {})[q.id] || []).correct) correct++;
    }
    return { total, correct, percent: total ? Math.round((correct / total) * 100) : 0 };
  }

  const Quiz = { evaluate, scoreQuiz };
  if (typeof module !== 'undefined' && module.exports) module.exports = Quiz;
  else root.Quiz = Quiz;
})(typeof window !== 'undefined' ? window : globalThis);

(function (root) {
  const MAX_BOX = 5;

  function defaultEntry() {
    return { box: 1, lastSeen: null };
  }

  function applyRating(entry, rating) {
    const box = entry && entry.box ? entry.box : 1;
    let next;
    if (rating === 'again') next = 1;
    else if (rating === 'easy') next = MAX_BOX;
    else next = Math.min(box + 1, MAX_BOX); // 'ok'
    return { box: next, lastSeen: entry ? entry.lastSeen : null };
  }

  function buildQueue(cards, state, opts) {
    const topicIds = opts && opts.topicIds;
    const stateCards = (state && state.cards) || {};
    const filtered = cards.filter(c => !topicIds || topicIds.includes(c.topicId));
    return filtered
      .map(c => ({ id: c.id, e: stateCards[c.id] || defaultEntry() }))
      .sort((x, y) => {
        if (x.e.box !== y.e.box) return x.e.box - y.e.box;
        if (!x.e.lastSeen && y.e.lastSeen) return -1;
        if (x.e.lastSeen && !y.e.lastSeen) return 1;
        if (!x.e.lastSeen && !y.e.lastSeen) return 0;
        return x.e.lastSeen < y.e.lastSeen ? -1 : 1;
      })
      .map(o => o.id);
  }

  const Leitner = { MAX_BOX, defaultEntry, applyRating, buildQueue };
  if (typeof module !== 'undefined' && module.exports) module.exports = Leitner;
  else root.Leitner = Leitner;
})(typeof window !== 'undefined' ? window : globalThis);

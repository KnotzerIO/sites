(function (root) {
  const KEY = 'prog2-leitner-v1';

  function emptyState() { return { version: 1, cards: {} }; }

  function getEntry(state, id) {
    return (state.cards && state.cards[id]) || { box: 1, lastSeen: null };
  }

  function setEntry(state, id, entry) {
    return { version: state.version || 1, cards: { ...state.cards, [id]: entry } };
  }

  function resetTopic(state, topicIds, allCards) {
    const ids = new Set(allCards.filter(c => topicIds.includes(c.topicId)).map(c => c.id));
    const cards = {};
    for (const [k, v] of Object.entries(state.cards || {})) {
      if (!ids.has(k)) cards[k] = v;
    }
    return { version: state.version || 1, cards };
  }

  function serialize(state) { return JSON.stringify(state); }

  function deserialize(str) {
    try {
      const o = JSON.parse(str);
      if (o && typeof o === 'object' && o.cards) return o;
      return emptyState();
    } catch (e) { return emptyState(); }
  }

  function load() {
    if (typeof localStorage === 'undefined') return emptyState();
    const raw = localStorage.getItem(KEY);
    return raw ? deserialize(raw) : emptyState();
  }

  function save(state) {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem(KEY, serialize(state));
  }

  const Storage = { KEY, emptyState, getEntry, setEntry, resetTopic, serialize, deserialize, load, save };
  if (typeof module !== 'undefined' && module.exports) module.exports = Storage;
  else root.Storage = Storage;
})(typeof window !== 'undefined' ? window : globalThis);

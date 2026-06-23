(function () {
  const App = {
    state: Storage.load(),
    currentTab: 'learn',
    topicFilter: new Set(),
    queue: [], queuePos: 0, revealed: false,
    theoryTopic: null,
    quizPos: 0, quizAnswers: {}, quizChecked: false, quizSel: [],

    show(tab) {
      this.currentTab = tab;
      document.querySelectorAll('#tabs button').forEach(b =>
        b.classList.toggle('active', b.dataset.tab === tab));
      document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
      document.getElementById('view-' + tab).classList.remove('hidden');
      if (tab === 'learn') this.renderLearn();
      if (tab === 'theory') this.renderTheory();
      if (tab === 'quiz') this.renderQuiz();
    },

    highlightIn(el) {
      el.querySelectorAll('pre code').forEach(b => {
        b.innerHTML = window.JavaHL ? JavaHL.highlight(b.textContent) : b.textContent;
      });
    },

    escape(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); },

    cardById(id) { return window.DATA.flashcards.find(c => c.id === id); },

    rebuildQueue() {
      const opts = this.topicFilter.size ? { topicIds: [...this.topicFilter] } : {};
      this.queue = Leitner.buildQueue(window.DATA.flashcards, this.state, opts);
      this.queuePos = 0; this.revealed = false;
    },

    topicButtons(selectedSet, attr) {
      return window.DATA.topics.map(t =>
        `<button class="btn chip ${selectedSet.has ? (selectedSet.has(t.id) ? 'active' : '') : (selectedSet === t.id ? 'active' : '')}" data-${attr}="${t.id}">${t.short}</button>`).join('');
    },

    // ---------- Lernen ----------
    renderLearn() {
      const view = document.getElementById('view-learn');
      if (!this.queue.length) this.rebuildQueue();
      const filters = this.topicButtons(this.topicFilter, 'topic');
      const reset = `<button class="btn" id="reset-all" title="Alle Box-Stände löschen">↺ Reset</button>`;
      if (!window.DATA.flashcards.length) {
        view.innerHTML = `<div class="filters">${filters}${reset}</div>
          <div class="card"><p class="muted">Noch keine Karten geladen.</p></div>`;
        this.wireFilters(view); return;
      }
      if (this.queuePos >= this.queue.length) {
        view.innerHTML = `<div class="filters">${filters}${reset}</div>
          <div class="card"><p>Runde fertig! 🎉</p>
          <button class="btn" id="restart">Nochmal</button></div>`;
        view.querySelector('#restart').onclick = () => { this.rebuildQueue(); this.renderLearn(); };
        this.wireFilters(view); return;
      }
      const card = this.cardById(this.queue[this.queuePos]);
      const entry = Storage.getEntry(this.state, card.id);
      const back = this.revealed ? `
        <hr>
        <h4>Verständlich</h4><div class="answer">${card.answerVerbose}</div>
        <h4>Prüfungsreif</h4><div class="answer muted">${card.answerExam}</div>
        ${card.code ? `<pre><code>${this.escape(card.code)}</code></pre>` : ''}
        ${card.source ? `<p class="src muted">Quelle: ${this.escape(card.source)}</p>` : ''}
        <div class="rate">
          <button class="btn rate-again" data-rate="again">Nochmal (1)</button>
          <button class="btn rate-ok" data-rate="ok">Ok (2)</button>
          <button class="btn rate-easy" data-rate="easy">Sitzt (3)</button>
        </div>` : `<button class="btn primary" id="reveal">Aufdecken (Leertaste)</button>`;
      view.innerHTML = `<div class="filters">${filters}${reset}</div>
        <p class="muted">Karte ${this.queuePos + 1}/${this.queue.length} · Box ${entry.box}/5 · Block ${card.topicId}</p>
        <div class="card"><h3>${card.question}</h3>${back}</div>`;
      if (!this.revealed) view.querySelector('#reveal').onclick = () => { this.revealed = true; this.renderLearn(); };
      else {
        view.querySelectorAll('[data-rate]').forEach(b => b.onclick = () => this.rate(b.dataset.rate));
        this.highlightIn(view);
      }
      this.wireFilters(view);
    },

    wireFilters(view) {
      view.querySelectorAll('[data-topic]').forEach(b => b.onclick = () => {
        const id = b.dataset.topic;
        this.topicFilter.has(id) ? this.topicFilter.delete(id) : this.topicFilter.add(id);
        this.rebuildQueue(); this.renderLearn();
      });
      const r = view.querySelector('#reset-all');
      if (r) r.onclick = () => {
        if (!confirm('Alle Lern-Fortschritte (Box-Stände) zurücksetzen?')) return;
        this.state = Storage.emptyState(); Storage.save(this.state);
        this.rebuildQueue(); this.renderLearn();
      };
    },

    rate(rating) {
      const card = this.cardById(this.queue[this.queuePos]);
      const entry = Leitner.applyRating(Storage.getEntry(this.state, card.id), rating);
      entry.lastSeen = new Date().toISOString();
      this.state = Storage.setEntry(this.state, card.id, entry);
      Storage.save(this.state);
      if (rating === 'again') this.queue.push(card.id);
      this.queuePos++; this.revealed = false; this.renderLearn();
    },

    // ---------- Theorie ----------
    renderTheory() {
      const view = document.getElementById('view-theory');
      if (!this.theoryTopic) this.theoryTopic = window.DATA.topics[0].id;
      const nav = this.topicButtons(this.theoryTopic, 'th');
      const unit = window.DATA.theory.find(u => u.topicId === this.theoryTopic);
      const body = unit && unit.sections.length ? unit.sections.map(s =>
        `<h3>${s.heading}</h3><div class="answer">${s.body}</div>${s.code ? `<pre><code>${this.escape(s.code)}</code></pre>` : ''}`).join('')
        : '<p class="muted">Noch kein Inhalt für diesen Block.</p>';
      view.innerHTML = `<div class="filters">${nav}</div><article class="card">${body}</article>`;
      view.querySelectorAll('[data-th]').forEach(b => b.onclick = () => { this.theoryTopic = b.dataset.th; this.renderTheory(); });
      this.highlightIn(view);
    },

    // ---------- Quiz ----------
    renderQuiz() {
      const view = document.getElementById('view-quiz');
      const qs = window.DATA.quiz;
      if (!qs.length) { view.innerHTML = '<div class="card"><p class="muted">Noch keine Quizfragen geladen.</p></div>'; return; }
      if (this.quizPos >= qs.length) {
        const s = Quiz.scoreQuiz(qs, this.quizAnswers);
        view.innerHTML = `<div class="card"><h3>Ergebnis</h3>
          <p>${s.correct} / ${s.total} richtig (${s.percent}%)</p>
          <button class="btn primary" id="qrestart">Nochmal</button></div>`;
        view.querySelector('#qrestart').onclick = () => { this.quizPos = 0; this.quizAnswers = {}; this.quizChecked = false; this.quizSel = []; this.renderQuiz(); };
        return;
      }
      const q = qs[this.quizPos];
      const multi = q.type === 'multi';
      const opts = q.options.map((o, i) => {
        const sel = this.quizSel.includes(i);
        let cls = 'btn opt';
        if (this.quizChecked) { if (q.correct.includes(i)) cls += ' rate-easy'; else if (sel) cls += ' rate-again'; }
        else if (sel) cls += ' active';
        return `<button class="${cls}" data-opt="${i}">${this.escape(o)}</button>`;
      }).join('');
      view.innerHTML = `<p class="muted">Frage ${this.quizPos + 1}/${qs.length} · Block ${q.topicId}${multi ? ' · Mehrfachauswahl' : ''}</p>
        <div class="card"><h3>${q.prompt}</h3>
        ${q.code ? `<pre><code>${this.escape(q.code)}</code></pre>` : ''}
        <div id="opts">${opts}</div>
        ${this.quizChecked ? `<div class="answer muted" style="margin-top:12px">${q.explanation}</div>
          <button class="btn primary" id="qnext">Weiter</button>`
          : `<button class="btn primary" id="qcheck">Antworten</button>`}</div>`;
      this.highlightIn(view);
      if (!this.quizChecked) {
        view.querySelectorAll('[data-opt]').forEach(b => b.onclick = () => {
          const i = +b.dataset.opt;
          if (multi) { this.quizSel.includes(i) ? this.quizSel = this.quizSel.filter(x => x !== i) : this.quizSel.push(i); }
          else this.quizSel = [i];
          this.renderQuiz();
        });
        const chk = view.querySelector('#qcheck');
        if (chk) chk.onclick = () => { if (!this.quizSel.length) return; this.quizAnswers[q.id] = this.quizSel.slice(); this.quizChecked = true; this.renderQuiz(); };
      } else {
        view.querySelector('#qnext').onclick = () => { this.quizPos++; this.quizChecked = false; this.quizSel = []; this.renderQuiz(); };
      }
    },
  };

  window.App = App;
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('tabs').addEventListener('click', e => {
      if (e.target.dataset.tab) App.show(e.target.dataset.tab);
    });
    document.addEventListener('keydown', e => {
      if (App.currentTab !== 'learn') return;
      if (e.code === 'Space') {
        e.preventDefault();
        if (!App.revealed && App.queuePos < App.queue.length) { App.revealed = true; App.renderLearn(); }
      }
      if (App.revealed && ['1', '2', '3'].includes(e.key)) {
        App.rate({ '1': 'again', '2': 'ok', '3': 'easy' }[e.key]);
      }
    });
    App.show('learn');
  });
})();

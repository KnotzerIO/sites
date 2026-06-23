// Minimaler, dependency-freier Java-Syntax-Highlighter (offline, kein CDN).
(function (root) {
  const KEYWORDS = new Set(('abstract assert boolean break byte case catch char class const continue ' +
    'default do double else enum extends final finally float for goto if implements import instanceof ' +
    'int interface long native new package private protected public return short static strictfp super ' +
    'switch synchronized this throw throws transient try void volatile while var record yield sealed ' +
    'permits true false null').split(' '));

  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Tokenizer: Kommentare, Strings/Chars, Annotationen, Zahlen, Identifier.
  const TOKEN = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(@\w+)|(\b\d[\d._]*(?:[eE][+-]?\d+)?[fFlLdD]?\b)|([A-Za-z_$][A-Za-z0-9_$]*)/g;

  function highlight(code) {
    let out = '';
    let last = 0;
    let m;
    TOKEN.lastIndex = 0;
    while ((m = TOKEN.exec(code)) !== null) {
      out += esc(code.slice(last, m.index));
      last = m.index + m[0].length;
      if (m[1]) out += '<span class="tok-com">' + esc(m[1]) + '</span>';
      else if (m[2]) out += '<span class="tok-str">' + esc(m[2]) + '</span>';
      else if (m[3]) out += '<span class="tok-ann">' + esc(m[3]) + '</span>';
      else if (m[4]) out += '<span class="tok-num">' + esc(m[4]) + '</span>';
      else if (m[5]) {
        if (KEYWORDS.has(m[5])) out += '<span class="tok-kw">' + m[5] + '</span>';
        else if (/^[A-Z]/.test(m[5])) out += '<span class="tok-type">' + esc(m[5]) + '</span>';
        else out += esc(m[5]);
      }
    }
    out += esc(code.slice(last));
    return out;
  }

  const JavaHL = { highlight };
  if (typeof module !== 'undefined' && module.exports) module.exports = JavaHL;
  else root.JavaHL = JavaHL;
})(typeof window !== 'undefined' ? window : globalThis);

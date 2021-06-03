import { defineMode, defineMIME } from '../editor-modes.js';

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

defineMode('shell', function () {
  let words = {};
  function define (style, string) {
    let split = string.split(' ');
    for (let i = 0; i < split.length; i++) {
      words[split[i]] = style;
    }
  }

  // Atoms
  define('atom', 'true false');

  // Keywords
  define('keyword', 'if then do else elif while until for in esac fi fin ' +
    'fil done exit set unset export function');

  // Commands
  define('builtin', 'ab awk bash beep cat cc cd chown chmod chroot clear cp ' +
    'curl cut diff echo find gawk gcc get git grep hg kill killall ln ls make ' +
    'mkdir openssl mv nc node npm ping ps restart rm rmdir sed service sh ' +
    'shopt shred source sort sleep ssh start stop su sudo svn tee telnet top ' +
    'touch vi vim wall wc wget who write yes zsh');

  function tokenBase (stream, state) {
    if (stream.eatSpace()) return null;

    let sol = stream.sol();
    let ch = stream.next();

    if (ch === '\\') {
      stream.next();
      return null;
    }
    if (ch === '\'' || ch === '"' || ch === '`') {
      state.tokens.unshift(tokenString(ch, ch === '`' ? 'quote' : 'string'));
      return tokenize(stream, state);
    }
    if (ch === '#') {
      if (sol && stream.eat('!')) {
        stream.skipToEnd();
        return 'meta'; // 'comment'?
      }
      stream.skipToEnd();
      return 'comment';
    }
    if (ch === '$') {
      state.tokens.unshift(tokenDollar);
      return tokenize(stream, state);
    }
    if (ch === '+' || ch === '=') {
      return 'operator';
    }
    if (ch === '-') {
      stream.eat('-');
      stream.eatWhile(/\w/);
      return 'attribute';
    }
    if (/\d/.test(ch)) {
      stream.eatWhile(/\d/);
      if (stream.eol() || !/\w/.test(stream.peek())) {
        return 'number';
      }
    }
    stream.eatWhile(/[\w-]/);
    let cur = stream.current();
    if (stream.peek() === '=' && /\w+/.test(cur)) return 'def';
    return words.hasOwnProperty(cur) ? words[cur] : null;
  }

  function tokenString (quote, style) {
    let close = quote == '(' ? ')' : quote == '{' ? '}' : quote;
    return function (stream, state) {
      let next; let end = false; let escaped = false;
      while ((next = stream.next()) != null) {
        if (next === close && !escaped) {
          end = true;
          break;
        }
        if (next === '$' && !escaped && quote !== "'") {
          escaped = true;
          stream.backUp(1);
          state.tokens.unshift(tokenDollar);
          break;
        }
        if (!escaped && next === quote && quote !== close) {
          state.tokens.unshift(tokenString(quote, style));
          return tokenize(stream, state);
        }
        escaped = !escaped && next === '\\';
      }
      if (end || !escaped) state.tokens.shift();
      return style;
    };
  }

  var tokenDollar = function (stream, state) {
    if (state.tokens.length > 1) stream.eat('$');
    let ch = stream.next();
    if (/['"({]/.test(ch)) {
      state.tokens[0] = tokenString(ch, ch == '(' ? 'quote' : ch == '{' ? 'def' : 'string');
      return tokenize(stream, state);
    }
    if (!/\d/.test(ch)) stream.eatWhile(/\w/);
    state.tokens.shift();
    return 'def';
  };

  function tokenize (stream, state) {
    return (state.tokens[0] || tokenBase)(stream, state);
  }

  return {
    startState: function () { return { tokens: [] }; },
    token: function (stream, state) {
      return tokenize(stream, state);
    },
    closeBrackets: "()[]{}''\"\"``",
    lineComment: '#',
    fold: 'brace'
  };
});

defineMIME('text/x-sh', 'shell');

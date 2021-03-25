/* global System */
import { pt, Color } from 'lively.graphics';
import { connect, once, disconnect } from 'lively.bindings';
import { Path } from 'lively.lang';
import { morph } from '../helpers.js';
import { GridLayout } from '../layout.js';
import config from '../config.js';
import { Morph } from '../morph.js';
import { lessPosition, minPosition, maxPosition } from './position.js';
import { Icon } from './icons.js';

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// finds string / regexp matches in text morphs
export class TextSearcher {
  constructor (morph) {
    this.morph = morph;
    this.STOP = {};
  }

  get doc () { return this.morph.document; }

  processFind (start, match) {
    const i = this.doc.positionToIndex(start);
    const end = this.doc.indexToPosition(i + match.length);
    return { range: { start, end }, match };
  }

  stringSearch (lines, needle, caseSensitive, nLines, inRange, char, pos) {
    if (inRange) {
      if (lessPosition(pos, inRange.start) || lessPosition(inRange.end, pos)) { return this.STOP; }
    }

    if (!caseSensitive) char = char.toLowerCase();
    if (char !== needle[0]) return null;

    const { row, column } = pos;
    /* FIXME rk 2017-04-06 while transitioning to new text: */
    const lineString = lines[row];
    const followingText = nLines <= 1 ? '' : '\n' + lines.slice(row + 1, (row + 1) + (nLines - 1)).join('\n');
    const chunk = lineString.slice(column) + followingText;
    const chunkToTest = caseSensitive ? chunk : chunk.toLowerCase();

    return chunkToTest.indexOf(needle) !== 0
      ? null
      : this.processFind({ row, column }, chunk.slice(0, needle.length));
  }

  reSearch (lines, needle, multiline, inRange, char, pos) {
    if (inRange) {
      if (lessPosition(pos, inRange.start) || lessPosition(inRange.end, pos)) { return this.STOP; }
    }

    const { row, column } = pos;
    const chunk = lines[row].slice(column) + (multiline ? '\n' + lines.slice(row + 1).join('\n') : '');
    const reMatch = chunk.match(needle);
    return reMatch ? this.processFind({ row, column }, reMatch[0]) : null;
  }

  search (options) {
    let { start, needle, backwards, caseSensitive, inRange } = {
      start: this.morph.cursorPosition,
      needle: '',
      backwards: false,
      caseSensitive: false,
      inRange: null,
      ...options
    };

    if (!needle) return null;

    if (inRange) {
      start = backwards
        ? minPosition(inRange.end, start)
        : maxPosition(inRange.start, start);
    }

    let search;
    if (needle instanceof RegExp) {
      const flags = (needle.flags || '').split('');
      const multiline = !!needle.multiline; flags.splice(flags.indexOf('m'), 1);
      if (!caseSensitive && !flags.includes('i')) flags.push('i');
      needle = new RegExp('^' + needle.source.replace(/^\^+/, ''), flags.join(''));
      search = this.reSearch.bind(this, this.doc.lineStrings, needle, multiline, inRange);
    } else {
      needle = String(needle);
      if (!caseSensitive) needle = needle.toLowerCase();
      const nLines = needle.split(this.doc.constructor.newline).length;
      search = this.stringSearch.bind(this,
        this.doc.lineStrings, needle, caseSensitive,
        nLines, inRange);
    }

    const result = this.doc[backwards ? 'scanBackward' : 'scanForward'](start, search);

    return result === this.STOP ? null : result;
  }

  searchForAll (options) {
    const results = [];
    let i = 0;
    while (true) {
      if (i++ > 10000) throw new Error('endless loop');
      const found = this.search(options);
      if (!found) return results;
      results.push(found);
      options = { ...options, start: options.backwards ? found.range.start : found.range.end };
    }
  }
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// widget for text search, maintains search state

export class SearchWidget extends Morph {
  static get properties () {
    return {
      name: { defaultValue: 'search widget' },
      borderWidth: { defaultValue: 1 },
      borderColor: { defaultValue: Color.gray },
      borderRadius: { defaultValue: 3 },
      fill: { defaultValue: Color.black.withA(0.6) },
      epiMorph: { defaultValue: true },

      target: {},
      state: {},

      master: {
        initialize () {
          this.master = {
            auto: 'styleguide://SystemWidgets/search widget'
          };
        }
      },

      input: {
        after: ['submorphs'],
        get () {
          const text = this.get('searchInput').textString;
          const reMatch = text.match(/^\/(.*)\/([a-z]*)$/);
          return reMatch ? new RegExp(reMatch[1], reMatch[2]) : text;
        },
        set (v) { this.get('searchInput').textString = String(v); }
      },

      fontSize: {
        after: ['submorphs'],
        get () { return this.get('searchInput').fontSize; },
        set (v) {
          this.get('replaceInput').fontSize = v;
        }
      },

      fontFamily: {
        after: ['submorphs'],
        get () { return this.get('searchInput').fontFamily; },
        set (v) {
          this.get('searchInput').fontFamily = v;
          this.get('replaceInput').fontFamily = v;
        }
      },

      layout: {
        initialize () {
          this.layout = new GridLayout({
            groups: {
              nextButton: { resize: false },
              prevButton: { resize: false },
              acceptButton: { resize: false },
              cancelButton: { resize: false }
            },
            rows: [0, { fixed: 28, paddingTop: 5, paddingBottom: 2.5 },
              1, { fixed: 28, paddingTop: 2.5, paddingBottom: 5 }],
            columns: [0, { paddingLeft: 5, paddingRight: 5 },
              1, { fixed: 25 },
              2, { fixed: 25 },
              3, { fixed: 5 },
              4, { fixed: 25 },
              5, { fixed: 25 },
              6, { fixed: 10 }
            ],
            grid: [['searchInput', 'nextButton', 'prevButton', null, 'acceptButton', 'cancelButton', null],
              ['replaceInput', 'replaceButton', 'replaceButton', null, 'replaceAllButton', 'replaceAllButton', null]]
          });
        }
      },

      submorphs: {
        after: ['extent'],
        initialize () {
          this.submorphs = [
            morph({
              type: 'button',
              name: 'acceptButton',
              label: Icon.textAttribute('check-circle')
            }).fit(),
            morph({
              type: 'button',
              name: 'cancelButton',
              label: Icon.textAttribute('times-circle')
            }).fit(),
            morph({
              type: 'button',
              name: 'nextButton',
              label: Icon.textAttribute('arrow-alt-circle-down', {
                textStyleClasses: ['far']
              })
            }).fit(),
            morph({
              type: 'button',
              name: 'prevButton',
              label: Icon.textAttribute('arrow-alt-circle-up', {
                textStyleClasses: ['far']
              })
            }).fit(),
            morph({
              type: 'input',
              name: 'searchInput',
              placeholder: 'search input',
              historyId: 'lively.morphic-text search'
            }),
            morph({
              type: 'input',
              name: 'replaceInput',
              placeholder: 'replace input',
              historyId: 'lively.morphic-text replace'
            }),
            morph({
              type: 'button',
              styleClasses: ['replace'],
              name: 'replaceButton',
              label: 'replace'
            }),
            morph({
              type: 'button',
              styleClasses: ['replace'],
              name: 'replaceAllButton',
              label: 'replace all'
            })
          ];
          connect(this.get('searchInput'), 'onBlur', this, 'onBlur');
          connect(this.get('replaceInput'), 'onBlur', this, 'onBlur');
        }
      },

      textMap: {
        after: ['submorphs']
      }

    };
  }

  constructor (props = {}) {
    if (props.targetText) props.target = props.targetText;
    if (!props.target) throw new Error('SearchWidget needs a target text morph!');

    super(props);

    const replaceButton = this.getSubmorphNamed('replaceButton');
    const replaceAllButton = this.getSubmorphNamed('replaceAllButton');
    const replaceInput = this.getSubmorphNamed('replaceInput');
    const searchInput = this.getSubmorphNamed('searchInput');
    const prevButton = this.getSubmorphNamed('prevButton');
    const nextButton = this.getSubmorphNamed('nextButton');
    const cancelButton = this.getSubmorphNamed('cancelButton');
    const acceptButton = this.getSubmorphNamed('acceptButton');
    connect(acceptButton, 'fire', this, 'execCommand', { converter: () => 'accept search' });
    connect(cancelButton, 'fire', this, 'execCommand', { converter: () => 'cancel search and reset cursor in text' });
    connect(nextButton, 'fire', this, 'execCommand', { converter: () => 'search next' });
    connect(prevButton, 'fire', this, 'execCommand', { converter: () => 'search prev' });
    connect(searchInput, 'inputChanged', this, 'search');
    connect(replaceButton, 'fire', this, 'execCommand', { converter: () => 'replace and go to next' });
    connect(replaceAllButton, 'fire', this, 'execCommand', { converter: () => 'replace all' });

    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    this.state = {
      backwards: false,
      before: null,
      position: null,
      inProgress: null,
      last: null
    };

    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    // override existing commands
    searchInput.addCommands([
      {
        name: 'realign top-bottom-center',
        exec: async () => {
          this.target.execCommand('realign top-bottom-center');
          this.addSearchMarkersForPreview(
            this.state.inProgress && this.state.inProgress.found, false);
          return true;
        }
      }
    ]);
  }

  focus () {
    this.get('searchInput').focus();
    this.whenRendered().then(() =>
      this.get('searchInput').invalidateTextLayout(true, true));
  }

  onBlur (evt) {
    const world = this.world();
    if (!world) return;
    setTimeout(() => {
      const focusedMorph = world.focusedMorph;
      if (!this.withAllSubmorphsDetect(m => m.isFocused())) {
        this.cancelSearch(false);
        return;
      }
      if (this.get('searchInput') != focusedMorph &&
          this.get('replaceInput') != focusedMorph) {
        this.get('searchInput').focus();
      }
    });
  }

  cleanup () {
    this.removeSearchMarkers();
    this.state.inProgress = null;
    this.textMap && this.textMap.update();
  }

  cancelSearch (resetEditor) {
    if (this.state.inProgress) { this.state.last = this.state.inProgress; }
    this.cleanup();
    this.removeTextMap();
    if (this.state.before && resetEditor) {
      const { scroll, selectionRange } = this.state.before;
      this.target.selection = selectionRange;
      this.target.scroll = scroll;
      this.state.before = null;
    }
    this.remove();
    this.target.focus();
  }

  acceptSearch () {
    if (this.state.inProgress) { this.state.last = this.state.inProgress; }
    if (this.applySearchResult(this.state.inProgress)) { this.state.before && this.target.saveMark(this.state.before.position); }
    this.get('searchInput').acceptInput(); // for history
    this.cleanup();
    this.removeTextMap();
    this.state.before = null;
    this.remove();
    this.target.focus();
  }

  applySearchResult (searchResult) {
    // searchResult = {found, backwards, ...}
    if (!searchResult || !searchResult.found) return null;
    const text = this.target;
    const sel = text.selection;
    const select = !!text.activeMark || !sel.isEmpty();
    const { backwards, found: { range: { start, end } } } = searchResult;
    const pos = backwards ? start : end;
    select ? sel.lead = pos : text.cursorPosition = pos;
    if (!text.isLineFullyVisible(pos.row)) text.centerRow();
    return searchResult;
  }

  removeSearchMarkers () {
    (this.target.markers || []).forEach(({ id }) =>
      id.startsWith('search-highlight') && this.target.removeMarker(id));
  }

  addSearchMarkers (found, backwards = false, caseSensitive = false) {
    this.removeSearchMarkers();

    const { target: text, textMap } = this;
    let { startRow, endRow } = text.whatsVisible;
    const lines = text.document.lineStrings;
    let i = 0;
    const { maxCharsPerLine, fastHighlightLineCount } = config.codeEditor.search;

    if (textMap && found.match.length >= 3 && lines.length < fastHighlightLineCount) {
      startRow = 0, endRow = lines.length - 1;
    }

    let stop = false;
    const ts = window.performance.now();

    for (let row = startRow; row <= endRow; row++) {
      if (stop) break;
      const line = lines[row] || '';
      for (let col = 0; col < Math.min(line.length, maxCharsPerLine); col++) {
        if (window.performance.now() - ts > 300) { stop = true; break; }
        const matched = caseSensitive
          ? line.slice(col).indexOf(found.match) === 0
          : line.slice(col).toLowerCase().indexOf(found.match.toLowerCase()) === 0;
        if (matched) {
          text.addMarker({
            id: 'search-highlight-' + i++,
            range: { start: { row, column: col }, end: { row, column: col + found.match.length } },
            style: {
              'border-radius': '4px',
              'background-color': 'rgba(255, 200, 0, 0.3)',
              'box-shadow': '0 0 4px rgba(255, 200, 0, 0.3)',
              'pointer-events': 'none'
            }
          });
          col += found.match.length;
        }
      }
    }

    let positionRange;
    if (this.state.backwards) {
      const { row, column } = found.range.start;
      positionRange = { start: { row, column }, end: { row, column: column + 1 } };
    } else {
      const { row, column } = found.range.end;
      positionRange = { start: { row, column: column - 1 }, end: { row, column } };
    }

    text.addMarker({
      id: 'search-highlight-cursor',
      range: positionRange,
      style: {
        'pointer-events': 'none',
        'box-sizing': 'border-box',
        [this.state.backwards ? 'border-left' : 'border-right']: '3px red solid'
      }
    });

    textMap && textMap.update();
  }

  addSearchMarkersForPreview (found, noCursor = true) {
    if (!found) return;
    this.addSearchMarkers(found);
    noCursor && this.target.removeMarker('search-highlight-cursor');
  }

  prepareForNewSearch () {
    const { target: text, state } = this;
    const world = text.world();

    if (!world) return;
    this.openInWorld(world.visibleBounds().center(), world);
    this.topRight = text.globalBounds().insetBy(5).topRight();

    if (text.getWindow()) once(text.getWindow(), 'remove', this, 'remove');

    const inputMorph = this.get('searchInput');
    const { scroll, selection: sel } = text;
    state.position = sel.lead;
    state.before = {
      scroll,
      position: sel.lead,
      selectionRange: sel.range,
      selectionReverse: sel.isReverse()
    };

    if (state.last && state.last.found) {
      // FIXME...! noUpdate etc
      disconnect(inputMorph, 'inputChanged', this, 'search');
      this.input = state.last.needle;
      connect(inputMorph, 'inputChanged', this, 'search');
      this.addSearchMarkersForPreview(state.last.found);
    }

    this.focus();
    inputMorph.selectAll();
  }

  advance (backwards) {
    const { inProgress } = this.state;
    if (inProgress && inProgress.found) {
      const dirChange = backwards !== this.state.backwards;
      const { found: { range: { start, end } } } = inProgress;
      this.state.position = dirChange
        ? (backwards ? end : start)
        : (backwards ? start : end);
    }
    this.state.backwards = backwards;
    return this.search();
  }

  searchNext () { return this.advance(false); }
  searchPrev () { return this.advance(true); }

  search () {
    if (!this.input) {
      this.cleanup();
      return null;
    }

    const state = this.state; const { backwards, inProgress, position } = state;
    const opts = { backwards, start: position };
    const found = this.target.search(this.input, opts);

    const result = this.state.inProgress = { ...opts, needle: this.input, found };
    this.applySearchResult(result);
    if (found) {
      this.addSearchMarkers(found, backwards);
    } else {
      this.cleanup();
    }
    return result;
  }

  async showTextMap () {
    await System.import('lively.morphic/text/map.js');
    const textMap = this.textMap = morph({ type: 'textmap' });
    textMap.attachTo(this.target);
    textMap.isLayoutable = false;
    this.addMorph(textMap);
    textMap.topRight = this.innerBounds().bottomRight().addXY(0, 5);
    textMap.height = this.target.height - this.height - 15;
    textMap.update();
    this.renderOnGPU = true;
    return textMap;
  }

  removeTextMap () {
    if (this.textMap) {
      this.textMap.remove();
      this.textMap.detachFromCurrentTextMorph();
      this.textMap = null;
    }
  }

  get keybindings () {
    return [
      { keys: 'Enter', command: 'search next or replace and go to next' },
      { keys: 'Alt-Enter', command: 'only search prev' },
      { keys: 'Tab', command: 'change focus' },
      { keys: 'Ctrl-O', command: 'occur with search term' },
      { keys: 'Ctrl-W', command: 'yank next word from text' },
      { keys: 'Escape', command: 'cancel search' },
      { keys: { win: 'Ctrl-F|Ctrl-S|Ctrl-G', mac: 'Meta-F|Ctrl-S|Meta-G' }, command: 'search next' },
      { keys: { win: 'Ctrl-Shift-F|Ctrl-R|Ctrl-Shift-G', mac: 'Meta-Shift-F|Ctrl-R|Meta-Shift-G' }, command: 'search prev' }
    ];
  }

  get commands () {
    return [
      {
        name: 'occur with search term',
        exec: async () => {
          const { occurStartCommand } = await System.import('lively.morphic/text/occur.js');
          this.target.addCommands([occurStartCommand]);
          this.execCommand('accept search');
          return this.target.execCommand('occur', { needle: this.input });
        }
      },
      { name: 'accept search', exec: () => { this.acceptSearch(); return true; } },
      { name: 'cancel search and reset cursor in text', exec: () => { this.cancelSearch(true); return true; } },
      { name: 'cancel search', exec: () => { this.cancelSearch(false); return true; } },
      { name: 'search next', exec: () => { this.searchNext(); return true; } },
      { name: 'search prev', exec: () => { this.searchPrev(); return true; } },
      { name: 'only search prev', exec: () => { if (this.get('searchInput').isFocused()) { this.searchPrev(); return true; } } },

      {
        name: 'search next or replace and go to next',
        exec: (_, args, count) => {
          this.get('searchInput').acceptInput();
          return this.execCommand(
            this.get('replaceInput').isFocused()
              ? 'replace and go to next'
              : 'search next', args, count);
        }
      },

      {
        name: 'replace current search location with replace input',
        exec: () => {
          const search = Path('state.inProgress').get(this);
          if (search.found) {
            let replacement = this.get('replaceInput').textString;
            this.get('replaceInput').get('replaceInput').acceptInput(); // for history
            if (search.needle instanceof RegExp) {
              replacement = search.found.match.replace(search.needle, replacement);
            }
            this.target.replace(search.found.range, replacement);
          }
          return true;
        }
      },

      {
        name: 'replace and go to next',
        exec: () => {
          this.execCommand('replace current search location with replace input');
          this.execCommand(this.state.backwards ? 'search prev' : 'search next');
          return true;
        }
      },

      {
        name: 'replace all',
        exec: () => {
          let search = Path('state.inProgress').get(this);
          if (search.found) {
            search = { ...search, start: { row: 0, column: 0 } };

            let replacement = this.get('replaceInput').textString;
            this.get('replaceInput').get('replaceInput').acceptInput(); // for history

            const allMatches = new TextSearcher(this.target).searchForAll(search);

            this.target.undoManager.group();
            allMatches.forEach(found => {
              const { range, match } = found;
              if (search.needle instanceof RegExp) {
                replacement = match.replace(search.needle, replacement);
              }
              this.target.replace(range, replacement, true, true, false);
            });
            this.target.undoManager.group();
            this.acceptSearch();
          }
          return true;
        }
      },

      {
        name: 'change focus',
        exec: () => {
          if (this.get('searchInput').isFocused()) { this.get('replaceInput').focus(); } else { this.get('searchInput').focus(); }
          return true;
        }
      },

      {
        name: 'yank next word from text',
        exec: () => {
          const text = this.target;
          const word = text.wordRight();
          const input = this.get('searchInput');
          if (!input.selection.isEmpty()) input.selection.text = '';
          const string = text.textInRange({ start: text.cursorPosition, end: word.range.end });
          input.textString += string;
          return true;
        }
      }
    ];
  }
}

export var searchCommands = [
  {
    name: 'search in text',
    exec: (morph, opts = { backwards: false }) => {
      const search = morph._searchWidget ||
        (morph._searchWidget = new SearchWidget({ target: morph, extent: pt(300, 20) }));
      search.state.backwards = opts.backwards;
      search.prepareForNewSearch();

      if (config.codeEditor.search.showTextMap) {
        search.showTextMap();
      }
      return true;
    }
  }
];

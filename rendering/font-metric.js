import { pt, rect } from "lively.graphics";
import { arr, string } from "lively.lang";

export default class FontMetric {

  static default() {
    if (!this._fontMetric)
      throw new Error("FontMetric has not yet been initialized!")
    return this._fontMetric;
  }

  static initDefault(domEnv) {
    if (!this._fontMetric) {
      if (!domEnv && typeof document === "undefined")
        throw new Error("Cannot initialize FontMetric without document");
      if (!domEnv) domEnv = {document}
      this._fontMetric = this.forDOMEnv(domEnv);
    }
    return this._fontMetric;
  }

  static removeDefault() {
    if (this._fontMetric) {
      this._fontMetric.uninstall();
      this._fontMetric = null;
    }
  }

  static forDOMEnv({document}) {
    var fontMetric = new FontMetric();
    fontMetric.install(document, document.body);
    return fontMetric;
  }

  constructor() {
    this.charMap = [];
    this.element = this.cachedBounds
                 = this.cachedBoundsFontFamily
                 = this.cachedBoundsFontSize
                 = null;
    this.cachedBoundsStr = "";
  }

  install(doc, parentEl) {
    this.element = doc.createElement("div");
    this.element.name = "fontMetric";
    this.setMeasureNodeStyles(this.element.style, true);
    parentEl.appendChild(this.element);
  }

  uninstall() {
    if (!this.element) return
    if (this.element.parentNode) this.element.parentNode.removeChild(this.element);
    this.element = null;
  }

  setMeasureNodeStyles(style, isRoot) {
    style.width = style.height = "auto";
    style.left = style.top = "0px";
    style.visibility = "hidden";
    style.position = "absolute";
    style.whiteSpace = "pre";
    style.font = "inherit";
    style.overflow = isRoot ? "hidden" : "visible";
  }

  measure(fontFamily, fontSize, char) {
    var rect = null;
    this.element.innerHTML = char;
    this.element.style.fontFamily = fontFamily;
    this.element.style.fontSize = fontSize + "px";
    try {
      rect = this.element.getBoundingClientRect();
    } catch(e) {
      rect = {width: 0, height:0};
    };
    return {
      height: rect.height,
      width: rect.width
    }
  }

  charBoundsFor(fontFamily, fontSize, fontKerning, str) {
    let nCols = str.length,
        bounds = new Array(nCols),
        { cachedBounds, cachedBoundsFontFamily, cachedBoundsFontSize, cachedBoundsStr } = this,
        nCacheCols = cachedBoundsStr.length,
        useCache = cachedBounds &&
                   cachedBoundsFontFamily === fontFamily &&
                   cachedBoundsFontSize === fontSize,
        w_width = this.sizeFor(fontFamily, fontSize, 'w').width,
        i_width = this.sizeFor(fontFamily, fontSize, 'i').width,
        fontIsProportional = (w_width !== i_width);
    for (let col = 0, x = 0; col < nCols; col++) {
      let width, height, char = str[col];
      if (fontIsProportional && fontKerning) {
        useCache = useCache && char === cachedBoundsStr[col];
        if (useCache) {
          ({ width, height } = cachedBounds[col]);
        } else {
          let prefix = str.substr(0, col+1),
              { width: prefixWidth, height: prefixHeight } = this.measure(fontFamily, fontSize, prefix);
          width = prefixWidth - x;
          height = prefixHeight;
        }
      } else {
        ({ width, height } = this.sizeFor(fontFamily, fontSize, char));
      }
      bounds[col] = { x, y: 0, width, height };
      x += width;
    }
    if (fontKerning) {
      this.cachedBounds = bounds;
      this.cachedBoundsStr = str;
      this.cachedBoundsFontFamily = fontFamily;
      this.cachedBoundsFontSize = fontSize;
    }
    return bounds;
  }

  sizeFor(fontFamily, fontSize, char) {
    if (char.length > 1) return this.measure(fontFamily, fontSize, char);

    if (!this.charMap[fontFamily]) {
      this.charMap[fontFamily] = [];
    }
    if (!this.charMap[fontFamily][fontSize]) {
      this.charMap[fontFamily][fontSize] = [];
    }
    if (!this.charMap[fontFamily][fontSize][char])
      this.charMap[fontFamily][fontSize][char] = this.measure(fontFamily, fontSize, char);
    return this.charMap[fontFamily][fontSize][char];
  }

  asciiSizes(fontFamily, fontSize) {
    var result = {};
    for (var i = 32; i <= 126; i++) {
      var char = String.fromCharCode(i);
      result[char] = this.sizeFor(fontFamily, fontSize, char)
    }
    return result;
  }

  defaultLineHeight(fontFamily, fontSize) {
    return this.sizeFor(fontFamily, fontSize, " ").height;
  }
}

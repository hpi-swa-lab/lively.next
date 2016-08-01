import { pt } from "lively.graphics";

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
      this._fontMetric = new FontMetric();
      this._fontMetric.install(domEnv.document, domEnv.document.body);
    }
    return this._fontMetric;
  }

  static removeDefault() {
    if (this._fontMetric) {
      this._fontMetric.uninstall();
      this._fontMetric = null;
    }
  }

  constructor() {
    this.charMap = [];
    this.element = null;
  }

  install(doc, parentEl) {
    this.element = doc.createElement("div");
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

  sizeFor(fontFamily, fontSize, char) {
    if (char.length > 1)
      return this.sizeForStr(fontFamily, fontSize, char);

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

  sizeForStr(fontFamily, fontSize, str) {
    var height = 0, width = 0;
    for (let line of str.split('\n')) {
      let lineHeight = 0, lineWidth = 0;
      for (let char of line.split('')) {
        let { height: charHeight, width: charWidth } = this.sizeFor(fontFamily, fontSize, char);
        if (charHeight > lineHeight) lineHeight = charHeight;
        lineWidth += charWidth;
      }
      if (lineWidth > width) width = lineWidth;
      height += lineHeight || this.sizeFor(fontFamily, fontSize, " ").height;
    }
    return { height: height, width: width };
  }

  indexFromPoint(fontFamily, fontSize, str, point) {
    var sizeMap = this.sizeListForStr(fontFamily, fontSize, str),
        { x, y } = point,
        line = sizeMap.find(l => {
          let char = l[0],
              start = char.position.y,
              end = start + char.height;
          return y >= start && y <= end;
        });
    if (!line) return str.length;

    let char = line.find(c => {
      let start = c.position.x,
          end = start + c.width;
      return x >= start && x <= end;
    });
    return char ? char.index : line[line.length-1].index;
  }

  sizeListForStr(fontFamily, fontSize, str) {
    var sizeList = [], totalHeight = 0, index = 0;
    for (let line of str.split('\n')) {
      let lineSizeList = [],
          lineHeight = this.sizeFor(fontFamily, fontSize, " ").height,
          lineWidth = 0;
      for (let char of line.split('')) {
        let { height: charHeight, width: charWidth } = this.sizeFor(fontFamily, fontSize, char);
        if (charHeight > lineHeight) lineHeight = charHeight;
        lineSizeList.push({ index: index++, position: pt(lineWidth, totalHeight), width: charWidth }) // note: height will be set later
        lineWidth += charWidth;
      }
      lineSizeList.push({ index: index++, position: pt(lineWidth, totalHeight), width: 0}); // newline
      lineSizeList.map(c => c.height = lineHeight);
      sizeList.push(lineSizeList);
      totalHeight += lineHeight || this.sizeFor(fontFamily, fontSize, " ").height;
    }
    return sizeList;
  }

  asciiSizes(fontFamily, fontSize) {
    var result = {};
    for (var i = 32; i <= 126; i++) {
      var char = String.fromCharCode(i);
      result[char] = this.sizeFor(fontFamily, fontSize, char)
    }
    return result;
  }
}

import { promise, num } from "lively.lang";
import { addOrChangeCSSDeclaration, addOrChangeLinkedCSS } from "./dom-helper.js";
import { defaultStyle, defaultAttributes, render, transformStyle } from "./morphic-default.js";
import { h } from "virtual-dom";
import { pt } from "lively.graphics";

const defaultCSS = `

.no-html-select {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.halo-mesh {
  background-color:transparent;
  background-image: linear-gradient(rgba(0,0,0,.1) 2px, transparent 2px),
  linear-gradient(90deg, rgba(0,0,0,.1) 2px, transparent 2px),
  linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px);
  background-size:100px 100px, 100px 100px, 10px 10px, 10px 10px;
  background-position:-2px -2px, -2px -2px, -1px -1px, -1px -1px;
}

.morph {
  outline: none;
  /*for aliasing issue in chrome: http://stackoverflow.com/questions/6492027/css-transform-jagged-edges-in-chrome*/
  -webkit-backface-visibility: hidden;

  /*include border size in extent of element*/
  box-sizing: border-box;

  /*don't use dom selection on morphs*/
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  zIndex: 1010
}

.tooltip {
 z-index:  3;
}

.hand {
  z-index: 1;
}

.halo {
  z-index: 2;
}

.center-text {
	text-align: center;
	vertical-align: middle;
}

.halo-item {
  /*FIXME: we shouldn't need to hardcode the size...*/
	line-height: 24px !important;
	text-align: center;
	vertical-align: middle;
}

div.text-layer span {
  pointer-events: none;
  line-height: normal;
}

`;

export class Renderer {

  static default() { return this._default || new this() }

  constructor(world, rootNode, domEnvironment) {
    if (!world || !world.isMorph)
      throw new Error(`Trying to initialize renderer with an invalid world morph: ${world}`)
    if (!rootNode || !("nodeType" in rootNode))
      throw new Error(`Trying to initialize renderer with an invalid root node: ${rootNode}`)
    if (!domEnvironment) {
      var doc = rootNode.ownerDocument;
      domEnvironment = {window: System.global, document: doc};
    }
    this.worldMorph = world;
    world._renderer = this;
    this.rootNode = rootNode;
    this.domNode = null;
    this.domEnvironment = domEnvironment;
    this.renderMap = new WeakMap();
    this.renderWorldLoopProcess = null;
    this.afterRenderCallTargets = [];
    this.requestAnimationFrame = domEnvironment.window.requestAnimationFrame.bind(domEnvironment.window);
  }

  clear() {
    this.stopRenderWorldLoop();
    this.domNode && this.domNode.parentNode.removeChild(this.domNode);
    this.domNode = null;
    this.renderMap = new WeakMap();
  }

  ensureDefaultCSS() {
    return promise.waitFor(3000, () => this.domNode.ownerDocument)
      .then(doc => Promise.all([
        addOrChangeCSSDeclaration("lively-morphic-css", defaultCSS, doc),
        addOrChangeLinkedCSS("lively-font-awesome", System.decanonicalize("lively.morphic/assets/font-awesome/css/font-awesome.css"), doc),
        addOrChangeLinkedCSS("lively-font-hack", System.decanonicalize("lively.morphic/assets/Hack-webfonts/css/hack.min.css"), doc)]));
  }

  startRenderWorldLoop() {
    this.renderWorldLoopProcess = this.requestAnimationFrame(() => this.startRenderWorldLoop());
    this.worldMorph.renderAsRoot(this);
    return this;
  }

  stopRenderWorldLoop() {
    this.domEnvironment.window.cancelAnimationFrame(this.renderWorldLoopProcess);
    this.renderWorldLoopProcess = null;
  }

  getNodeForMorph(morph) {
    // Hmm, this also finds dom nodes not associated with this renderer, its
    // domNode... Is this a problem?
    // return this.domNode.ownerDocument.getElementById(morph.id);

    // test, for scoped lookup, fixing the issue mentioned above
    return this.domNode ? this.domNode.querySelector("#" + morph.id) : null;
  }

  getMorphForNode(node) {
    return this.worldMorph ?
      this.worldMorph.withAllSubmorphsDetect(morph => morph.id === node.id) :
      null;
  }

  render(x) {
    if (!x.needsRerender()) {
      var renderedTree = this.renderMap.get(x);
      if (renderedTree) return renderedTree;
    }

    x.aboutToRender(this);

    var tree = x.render(this);
    this.renderMap.set(x, tree);
    return tree;
  }

  renderMorph(morph) {
    return h("div", {
      ...defaultAttributes(morph, this),
      style: defaultStyle(morph)
    }, this.renderSubmorphs(morph));
  }

  renderSubmorphs(morph) {
    const submorphs = [];
    
    morph.submorphs.forEach(m => {
       if (m.dropShadow && !m.isImage) submorphs.push(this.renderShadow(m));
       submorphs.push(this.render(m));
    });
    
    return h("div", {
          style: {
            position: "absolute",
            transform: `translate(${morph.origin.x}px,${morph.origin.y}px)`
          }
        }, submorphs);
  }
  
  renderShadow(morph) {
    const shadowColor = "rgba(0,0,0,0.15)",
          shadowWidth = 20 + (morph.borderRadius.top() / 2),
          shadowHeight = 20 + (morph.borderRadius.left() / 2),
          offsetY = Math.min(morph.borderRadius.left(), morph.height / 2),
          offsetX = Math.min(morph.borderRadius.top(), morph.width / 2),
          height = Math.max(morph.height - (offsetY * 2), 0),
          width = Math.max(morph.width - (offsetX * 2), 0),
          gradientStop = 100,
          gradientStart = 95 * Math.min(offsetY / shadowHeight, offsetX / shadowWidth),
          background = (dir) => `linear-gradient(${dir}, ${shadowColor} ${gradientStart}%, transparent ${gradientStop}%)`,
          radialBackground = (dir) => `radial-gradient(${shadowWidth}px 
          				${shadowHeight}px at ${dir}, ${shadowColor} ${gradientStart}%, transparent ${gradientStop}%)`;
     return h("div", {style: transformStyle(morph), key: morph.id + "-shadow"},
         h("div", {style: {position: "absolute", transform: `translate(${offsetX}px, ${offsetY}px)`,
                           width: width + "px", height: height + "px", background: shadowColor}},
          [h("div", {style: {position: "absolute",
                             top: `-${shadowHeight}px`, width: width + "px", 
                             height: `${shadowHeight}px`, background: background("to top")}}), // top
           h("div", {style: {position: "absolute",
                             width: `${shadowWidth}px`, height: `${shadowHeight}px`, 
                             left: `-${shadowWidth}px`, top: `-${shadowHeight}px`, 
                             background: radialBackground("bottom right")}}), // top-left
           h("div", {style: {position: "absolute",
                             left: `-${shadowWidth}px`, width: `${shadowWidth}px`, 
                             height: height + "px", background: background("to left")}}), // left
           h("div", {style: {position: "absolute",
                             width: `${shadowWidth}px`, height: `${shadowHeight}px`, left: `-${shadowWidth}px`, top: height + "px",
                             background: radialBackground("top right")}}), //bottom-left ...
           h("div", {style: {position: "absolute",
                             top: height + "px", width: width + "px", 
                             height: `${shadowHeight}px`, background: background("to bottom")}}), // bottom
           h("div", {style: {position: "absolute",
                             width: `${shadowWidth}px`, height: `${shadowHeight}px`, left: width + "px", top: height + "px",
                             background: radialBackground("top left")}}), // bottom-right
           h("div", {style: {position: "absolute",
                             left: width + "px", 
                             width: `${shadowWidth}px`, height: height + "px", background: background("to right")}}), // right
           h("div", {style: {position: "absolute",
                             width: `${shadowWidth}px`, height: `${shadowHeight}px`, 
                             left: width + "px", top: `-${shadowHeight}px`,
                             background: radialBackground('bottom left')}}), //top-right ...
          ]));
     }

  renderImage(image) {
    return h("div", {
      ...defaultAttributes(image, this),
        style: {...defaultStyle(image)}
      }, [
        h("img", {
          src: image.imageUrl,
          draggable: false,
          style: {
            "pointer-events": "none",
            position: "absolute",
            width: "100%", height: "100%"
          }
        }),
        this.renderSubmorphs(image)
      ]);
  }
  
  renderCheckBox(checkbox) {
    return h("div", {
      ...defaultAttributes(checkbox, this),
        style: {...defaultStyle(checkbox)}
      }, [
        h("input", {
          type: "checkbox",
          checked: checkbox.checked,
          disabled: !checkbox.active,
          draggable: false,
          style: {
            "pointer-events": "none",
            position: "relative",
            top: "-3px",
            left: "-4px",
            width: "100%", height: "100%"
          }
        }),
        this.renderSubmorphs(checkbox)
      ]);
  }

  renderPath(path) {
    const vertices = [],
          edge = ({x: x1, y: y1}, {x: x2, y: y2}) =>
                  h("path",
                    {namespace: "http://www.w3.org/2000/svg",
                     attributes:
                      {"sroke-width": path.borderWidth,
                       stroke: path.gradient ? "url(#gradient-" + path.id + ")" : path.borderColor,
                       d: "M"+x1+","+y1+" "+"L"+x2+","+y2}});

    for (var i = 0; i < path.vertices.length - 1; i++) {
      vertices.push(edge(path.vertices[i], path.vertices[i + 1]));
    }
    return this.renderSvgMorph(path, vertices);
  }

  renderPolygon(polygon) {
    const vertices = h("polygon",
                        {namespace: "http://www.w3.org/2000/svg",
                         attributes:
                          {style: "fill:" + (polygon.gradient ? "url(#gradient-" + polygon.id + ")" : polygon.fill) +
                                  ";stroke-width:" + polygon.borderWidth +
                                  ";stroke:" + polygon.borderColor,
                           points: polygon.vertices.map(({x,y}) => x + "," + y).join(" ")}});
    return this.renderSvgMorph(polygon, [vertices]);
  }

  renderSvgMorph(morph, svg) {
    const {position, WebkitFilter,
           display, top, left, opacity} = defaultStyle(morph),
          {width, height} = morph.innerBounds(),
          defs = morph.gradient && renderGradient(morph);
    return h("div", {...defaultAttributes(morph, this),
                     style: {...transformStyle(morph), position, opacity,
                             width: width + 'px', height: height + 'px',
                             display, WebkitFilter, "pointer-events": "auto"}},
              [h("svg", {namespace: "http://www.w3.org/2000/svg", version: "1.1",
                        style: {position: "absolute", "pointer-events": "none"},
                        attributes:
                         {width, height, "viewBox": [0,0,width,height].join(" "),
                        ...(morph.borderStyle == "dashed" && {"stroke-dasharray": "7 4"})}},
                  [defs].concat(svg)),
                this.renderSubmorphs(morph)]);
  }
}


function renderGradient(morph) {
  return h("defs", {namespace: "http://www.w3.org/2000/svg"},
                h("linearGradient", {namespace: "http://www.w3.org/2000/svg",
                                     attributes: {id: "gradient-" + morph.id,
                                                  gradientUnits: "userSpaceOnUse"}
                                     },
                    morph.gradient.map(([k, c]) =>
                        h("stop",
                            {namespace: "http://www.w3.org/2000/svg",
                              attributes:
                                {offset: (k * 100) + "%",
                                 "stop-color": c}}))));
}

System.register("./__root_module__-c4d7431e.js kld-intersections ./user-ui-1bab221a.js ./editor-plugin-012baedf.js ./index-ad3a1066.js ./index-1640eed6.js ./index-596c305d.js".split(" "),function(ta,nb){var Bb,Vb,Qb,Dd,Ic,ud,Nc,Jc;return{setters:[function(Xc){Bb=Xc.ah;Vb=Xc.an;Qb=Xc.a2;Dd=Xc.C;Ic=Xc.a5;ud=Xc.L;Nc=Xc.r;Jc=Xc.ar},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var Xc=lively.FreezerRuntime.recorderFor("LivelyTopBar/index.js");Xc.Morph=
Bb;Xc.Icon=Vb;Xc.pt=Qb;Xc.Color=Dd;Xc.arr=Ic;Xc.LoadingIndicator=ud;Xc.resource=Nc;var id=function(Fd){var nd=lively.FreezerRuntime.recorderFor("LivelyTopBar/index.js"),Yc=nd.hasOwnProperty("LivelyTopBar")&&"function"===typeof nd.LivelyTopBar?nd.LivelyTopBar:nd.LivelyTopBar=function(Ta){Ta&&Ta[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Jc(Yc,Fd,[{key:"beforePublish",value:function(){this.activeSideBars=[];this.currentShapeMode=
"Rectangle";this.setEditMode("Halo")}},{key:"onLoad",value:function(){var Ta=this;return $jscomp.asyncExecutePromiseGeneratorProgram(function(sb){if(1==sb.nextAddress)return Ta.isComponent?sb.return():sb.yield(Ta.whenRendered(),2);document.body.style.background="black";Ta.setEditMode("Halo");Ta.getSubmorphNamed("fast load toggler").refresh();sb.jumpToEnd()})}},{key:"relayout",value:function(){this.respondsToVisibleWindow&&(this.width=this.world().visibleBounds().width,this.position=Xc.pt(0,0));var Ta=
this.getSubmorphNamed("user flap");this.get("ipad status bar").width=this.width;Ta.right=this.width-10}},{key:"getShapeMenuItems",value:function(){var Ta=this;return Object.entries(this.shapeToIcon).map(function(sb){sb=$jscomp.makeIterator(sb);var dc=sb.next().value,ac=sb.next().value;sb=ac.shortcut;ac=ac.args;return[[].concat($jscomp.arrayFromIterable(Ta.currentShapeMode===dc?[].concat($jscomp.arrayFromIterable(Xc.Icon.textAttribute("check",{fontSize:11,paddingTop:"2px"})),["   ",{}]):["     ",{}]),
$jscomp.arrayFromIterable(Xc.Icon.textAttribute.apply(Xc.Icon,$jscomp.arrayFromIterable(ac))),["   "+dc+" ",{float:"none"},"      "+sb,{float:"right",fontSize:11,opacity:.5,fontFamily:"IBM Plex Mono"}]),function(){Ta.currentShapeMode=dc;Ta.setEditMode("Shape")}]})}},{key:"getSideBarMenuItems",value:function(){var Ta=this;return Object.entries(this.sideBarToIcon).map(function(sb){sb=$jscomp.makeIterator(sb);var dc=sb.next().value;sb=sb.next().value.args;return[[].concat($jscomp.arrayFromIterable(Ta.activeSideBars.includes(dc)?
[].concat($jscomp.arrayFromIterable(Xc.Icon.textAttribute("check",{fontSize:11,paddingTop:"2px"})),["   ",{}]):["     ",{}]),$jscomp.arrayFromIterable(Xc.Icon.textAttribute.apply(Xc.Icon,$jscomp.arrayFromIterable(sb))),["   "+dc+" ",{float:"none"}]),function(){return Ta.openSideBar(dc)}]})}},{key:"reloadSidebar",value:function(){this.sideBar.remove();this.sideBar=null;this.stylingPalette.remove();this.stylingPalette=null;this.openSideBar("Scene Graph");this.openSideBar("Styling Palette")}},{key:"onKeyUp",
value:function(Ta){"Hand"==this._currentEditMode&&this.setEditMode("Hand",!0)}},{key:"onKeyDown",value:function(Ta){Jc._get(Object.getPrototypeOf(Yc.prototype),"onKeyDown",this).call(this,Ta);if(Ta.isCommandKey()&&"Hand"==this._currentEditMode)this.setEditMode("Halo",!0);else if(!Ta.isAltDown()){var sb={R:"Rectangle",E:"Ellipse",I:"Image",P:"Path",Q:"Polygon",L:"Label",C:"Canvas",H:"HTML"};switch(Ta.key){case "Escape":this.setEditMode("Halo");break;case "R":case "E":case "I":case "P":case "Q":case "L":case "C":case "H":this.currentShapeMode=
sb[Ta.key];this.setEditMode("Shape");break;case "T":this.setEditMode("Text")}}}},{key:"openSideBar",value:function(Ta){var sb=this,dc,ac,Vc,Hd,hc,kc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(xb){switch(xb.nextAddress){case 1:sb.activeSideBars.includes(Ta)?Xc.arr.remove(sb.activeSideBars,Ta):sb.activeSideBars.push(Ta);if("Scene Graph"!=Ta){xb.jumpTo(2);break}if(sb.sideBar){xb.jumpTo(3);break}dc=Xc.LoadingIndicator.open("loading side bar");ac=sb;return xb.yield(nb.import("./scene graph side bar master-3502ddd7.js"),
5);case 5:if(!(Vc=xb.yieldResult)){xb.jumpTo(6);break}return xb.yield(Xc.resource("part://SystemIDE/scene graph side bar master"),7);case 7:Vc=xb.yieldResult;case 6:return xb.yield(Vc.read(),4);case 4:return ac.sideBar=xb.yieldResult,sb.sideBar.hasFixedPosition=!0,sb.sideBar.openInWorld(),sb.sideBar.right=0,xb.yield(sb.sideBar.whenRendered(),8);case 8:dc.remove();case 3:sb.sideBar.toggle(sb.activeSideBars.includes("Scene Graph"));case 2:if("Styling Palette"!=Ta){xb.jumpTo(0);break}if(sb.stylingPalette){xb.jumpTo(10);
break}Hd=Xc.LoadingIndicator.open("loading side bar");hc=sb;return xb.yield(nb.import("./styling side bar master-a703f4cf.js"),12);case 12:if(!(kc=xb.yieldResult)){xb.jumpTo(13);break}return xb.yield(Xc.resource("part://SystemIDE/styling side bar master"),14);case 14:kc=xb.yieldResult;case 13:return xb.yield(kc.read(),11);case 11:return hc.stylingPalette=xb.yieldResult,sb.stylingPalette.hasFixedPosition=!0,sb.stylingPalette.openInWorld(),sb.stylingPalette.left=sb.world().right,xb.yield(sb.stylingPalette.whenRendered(),
15);case 15:Hd.remove();case 10:sb.stylingPalette.toggle(sb.activeSideBars.includes("Styling Palette")),xb.jumpToEnd()}})}},{key:"onMouseDown",value:function(Ta){var sb=this.get("select shape type"),dc=this.get("shape mode button"),ac=this.get("side bar selector");Ta.targetMorph==sb&&(this.world().openWorldMenu(Ta,this.getShapeMenuItems()).position=dc.globalBounds().bottomLeft().subPt(this.world().scroll));Ta.targetMorph==dc&&this.setEditMode("Shape");"text mode button"==Ta.targetMorph.name&&this.setEditMode("Text");
"hand mode button"==Ta.targetMorph.name&&this.setEditMode("Hand");"halo mode button"==Ta.targetMorph.name&&this.setEditMode("Halo");"open component browser"==Ta.targetMorph.name&&this.interactivelyLoadComponent();Ta.targetMorph==ac&&(this.world().openWorldMenu(Ta,this.getSideBarMenuItems()).position=ac.globalBounds().bottomLeft().subPt(this.world().scroll))}},{key:"interactivelyLoadComponent",value:function(){var Ta=this,sb,dc,ac,Vc,Hd;return $jscomp.asyncExecutePromiseGeneratorProgram(function(hc){if(1==
hc.nextAddress)return sb=Ta.get("open component browser"),dc=Ta.get("user flap"),ac=dc.haloShadow,Vc=dc.haloColor,Hd=Xc.Color.rgb(102,102,102),sb.fontColor=Vc,sb.dropShadow=ac,hc.yield(Ta.world().execCommand("browse and load component"),2);sb.dropShadow=!1;sb.fontColor=Hd;hc.jumpToEnd()})}},{key:"setEditMode",value:function(Ta,sb){var dc=this;sb=void 0===sb?!1:sb;var ac=this.get("user flap"),Vc=ac.haloShadow,Hd=ac.haloColor,hc=Xc.Color.rgb(102,102,102);sb||(this._currentEditMode=Ta);sb=this.get("shape mode button");
ac=this.get("text mode button");var kc=this.get("hand mode button"),xb=this.get("halo mode button");[["Shape",sb.submorphs],["Text",[ac]],["Hand",[kc]],["Halo",[xb]]].forEach(function(yb){var wc=$jscomp.makeIterator(yb);yb=wc.next().value;wc=wc.next().value;"Shape"==Ta?dc.world().toggleShapeMode(!0,dc.currentShapeMode):"Text"==Ta?dc.world().toggleShapeMode(!0,"Text"):dc.world().toggleShapeMode(!1);dc.world().showHaloPreviews("Halo"==Ta);yb==Ta?wc.forEach(function(Kc){Kc.dropShadow=Vc;Kc.fontColor=
Hd}):wc.forEach(function(Kc){Kc.dropShadow=null;Kc.fontColor=hc})})}}],[{key:"className",get:function(){return"LivelyTopBar"}},{key:"properties",get:function(){return{activeSideBars:{},currentShapeMode:{after:["submorphs"],set:function(Ta){this.setProperty("currentShapeMode",Ta);this.get("shape status icon").textAndAttributes=Xc.Icon.textAttribute(this.shapeToIcon[Ta].args[0])}},sideBarToIcon:{readOnly:!0,get:function(){return{"Scene Graph":{args:["sitemap",{textStyleClasses:["fas"]}]},"Styling Palette":{args:["palette",
{textStyleClasses:["fas"]}]}}}},shapeToIcon:{readOnly:!0,get:function(){return{Rectangle:{shortcut:"R",args:["square",{textStyleClasses:["fas"]}]},Ellipse:{shortcut:"E",args:["circle",{textStyleClasses:["fas"]}]},Image:{shortcut:"I",args:["image",{textStyleClasses:["fas"],paddingTop:"1px"}]},Path:{shortcut:"P",args:["bezier-curve",{fontSize:13,paddingTop:"3px"}]},Polygon:{shortcut:"Q",args:["draw-polygon",{fontSize:17}]},Label:{shortcut:"L",args:["tag",{paddingTop:"1px"}]},Canvas:{shortcut:"C",args:["chess-board",
{paddingTop:"1px"}]},HTML:{shortcut:"H",args:["code",{paddingTop:"1px"}]}}}}}}}],nd,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"LivelyTopBar",version:"0.1.1-151"}}},{start:328,end:9061})}(Xc.Morph);id=Xc.LivelyTopBar;Xc.default=id}}});
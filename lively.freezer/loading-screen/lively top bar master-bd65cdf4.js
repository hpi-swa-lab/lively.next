System.register(["./__root_module__-c4f77fb9.js","kld-intersections","./user-ui-0e8459b1.js","./index-347b764e.js"],function(ra,jb){var pb,Ub,Jb,jd,uc,nd,wc,Cc;return{setters:[function(Mc){pb=Mc.an;Ub=Mc.as;Jb=Mc.a3;jd=Mc.C;uc=Mc.a6;nd=Mc.L;wc=Mc.r;Cc=Mc.aw},function(){},function(){},function(){}],execute:function(){var Mc=lively.FreezerRuntime.recorderFor("LivelyTopBar/index.js");Mc.Morph=pb;Mc.Icon=Ub;Mc.pt=Jb;Mc.Color=jd;Mc.arr=uc;Mc.LoadingIndicator=nd;Mc.resource=wc;var Bd=function(re){var Ce=
lively.FreezerRuntime.recorderFor("LivelyTopBar/index.js"),be=Ce.hasOwnProperty("LivelyTopBar")&&"function"===typeof Ce.LivelyTopBar?Ce.LivelyTopBar:Ce.LivelyTopBar=function(Sb){Sb&&Sb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Cc(be,re,[{key:"beforePublish",value:function(){this.activeSideBars=[];this.currentShapeMode="Rectangle";this.setEditMode("Halo")}},{key:"onLoad",value:function(){var Sb=this;return $jscomp.asyncExecutePromiseGeneratorProgram(function(qc){if(1==
qc.nextAddress)return Sb.isComponent?qc.return():qc.yield(Sb.whenRendered(),2);document.body.style.background="black";Sb.setEditMode("Halo");Sb.getSubmorphNamed("fast load toggler").refresh();qc.jumpToEnd()})}},{key:"onUserChanged",value:function(Sb){this.getSubmorphNamed("user flap").onUserChanged(Sb)}},{key:"relayout",value:function(){this.respondsToVisibleWindow&&(this.width=this.world().visibleBounds().width,this.position=Mc.pt(0,0));var Sb=this.getSubmorphNamed("user flap");this.get("ipad status bar").width=
this.width;Sb.right=this.width-10}},{key:"getShapeMenuItems",value:function(){var Sb=this;return Object.entries(this.shapeToIcon).map(function(qc){qc=$jscomp.makeIterator(qc);var od=qc.next().value,Tb=qc.next().value;qc=Tb.shortcut;Tb=Tb.args;return[[].concat($jscomp.arrayFromIterable(Sb.currentShapeMode===od?[].concat($jscomp.arrayFromIterable(Mc.Icon.textAttribute("check",{fontSize:11,paddingTop:"2px"})),["   ",{}]):["     ",{}]),$jscomp.arrayFromIterable(Mc.Icon.textAttribute.apply(Mc.Icon,$jscomp.arrayFromIterable(Tb))),
["   "+od+" ",{float:"none"},"      "+qc,{float:"right",fontSize:11,opacity:.5,fontFamily:"IBM Plex Mono"}]),function(){Sb.currentShapeMode=od;Sb.setEditMode("Shape")}]})}},{key:"getSideBarMenuItems",value:function(){var Sb=this;return Object.entries(this.sideBarToIcon).map(function(qc){qc=$jscomp.makeIterator(qc);var od=qc.next().value;qc=qc.next().value.args;return[[].concat($jscomp.arrayFromIterable(Sb.activeSideBars.includes(od)?[].concat($jscomp.arrayFromIterable(Mc.Icon.textAttribute("check",
{fontSize:11,paddingTop:"2px"})),["   ",{}]):["     ",{}]),$jscomp.arrayFromIterable(Mc.Icon.textAttribute.apply(Mc.Icon,$jscomp.arrayFromIterable(qc))),["   "+od+" ",{float:"none"}]),function(){return Sb.openSideBar(od)}]})}},{key:"reloadSidebar",value:function(){this.sideBar.remove();this.sideBar=null;this.stylingPalette.remove();this.stylingPalette=null;this.openSideBar("Scene Graph");this.openSideBar("Styling Palette")}},{key:"onKeyUp",value:function(Sb){"Hand"==this._currentEditMode&&this.setEditMode("Hand",
!0)}},{key:"onKeyDown",value:function(Sb){Cc._get(Object.getPrototypeOf(be.prototype),"onKeyDown",this).call(this,Sb);if(Sb.isCommandKey()&&"Hand"==this._currentEditMode)this.setEditMode("Halo",!0);else if(!Sb.isAltDown()){var qc={R:"Rectangle",E:"Ellipse",I:"Image",P:"Path",Q:"Polygon",L:"Label",C:"Canvas",H:"HTML"};switch(Sb.key){case "Escape":this.setEditMode("Halo");break;case "R":case "E":case "I":case "P":case "Q":case "L":case "C":case "H":this.currentShapeMode=qc[Sb.key];this.setEditMode("Shape");
break;case "T":this.setEditMode("Text")}}}},{key:"openSideBar",value:function(Sb){var qc=this,od,Tb,wd,Fd,fc,ic;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Ab){switch(Ab.nextAddress){case 1:qc.activeSideBars.includes(Sb)?Mc.arr.remove(qc.activeSideBars,Sb):qc.activeSideBars.push(Sb);if("Scene Graph"!=Sb){Ab.jumpTo(2);break}if(qc.sideBar){Ab.jumpTo(3);break}od=Mc.LoadingIndicator.open("loading side bar");return Ab.yield(od.whenRendered(),4);case 4:return Tb=qc,Ab.yield(jb.import("./scene graph side bar master-2081d90d.js"),
6);case 6:if(!(wd=Ab.yieldResult)){Ab.jumpTo(7);break}return Ab.yield(Mc.resource("part://SystemIDE/scene graph side bar master"),8);case 8:wd=Ab.yieldResult;case 7:return Ab.yield(wd.read(),5);case 5:return Tb.sideBar=Ab.yieldResult,qc.sideBar.hasFixedPosition=!0,qc.sideBar.respondsToVisibleWindow=!0,qc.sideBar.openInWorld(),qc.sideBar.right=0,Ab.yield(qc.sideBar.whenRendered(),9);case 9:od.remove();case 3:qc.sideBar.toggle(qc.activeSideBars.includes("Scene Graph"));case 2:if("Styling Palette"!=
Sb){Ab.jumpTo(0);break}if(qc.stylingPalette){Ab.jumpTo(11);break}Fd=Mc.LoadingIndicator.open("loading side bar");return Ab.yield(Fd.whenRendered(),12);case 12:return fc=qc,Ab.yield(jb.import("./styling side bar master-523e4301.js"),14);case 14:if(!(ic=Ab.yieldResult)){Ab.jumpTo(15);break}return Ab.yield(Mc.resource("part://SystemIDE/styling side bar master"),16);case 16:ic=Ab.yieldResult;case 15:return Ab.yield(ic.read(),13);case 13:return fc.stylingPalette=Ab.yieldResult,qc.stylingPalette.collapseAll(),
qc.stylingPalette.hasFixedPosition=!0,qc.stylingPalette.respondsToVisibleWindow=!0,qc.stylingPalette.openInWorld(),qc.stylingPalette.left=qc.world().width,Ab.yield(qc.stylingPalette.whenRendered(),17);case 17:Fd.remove();case 11:qc.stylingPalette.toggle(qc.activeSideBars.includes("Styling Palette")),Ab.jumpToEnd()}})}},{key:"onMouseDown",value:function(Sb){var qc=this.get("select shape type"),od=this.get("shape mode button"),Tb=this.get("side bar selector");Sb.targetMorph==qc&&(this.world().openWorldMenu(Sb,
this.getShapeMenuItems()).position=od.globalBounds().bottomLeft().subPt(this.world().scroll));Sb.targetMorph==od&&this.setEditMode("Shape");"text mode button"==Sb.targetMorph.name&&this.setEditMode("Text");"hand mode button"==Sb.targetMorph.name&&this.setEditMode("Hand");"halo mode button"==Sb.targetMorph.name&&this.setEditMode("Halo");"open component browser"==Sb.targetMorph.name&&this.interactivelyLoadComponent();"load world button"==Sb.targetMorph.name&&this.world().execCommand("load world");Sb.targetMorph==
Tb&&(this.world().openWorldMenu(Sb,this.getSideBarMenuItems()).position=Tb.globalBounds().bottomLeft().subPt(this.world().scroll))}},{key:"interactivelyLoadComponent",value:function(){var Sb=this,qc,od,Tb,wd,Fd;return $jscomp.asyncExecutePromiseGeneratorProgram(function(fc){if(1==fc.nextAddress)return qc=Sb.get("open component browser"),od=Sb.get("user flap"),Tb=od.haloShadow,wd=od.haloColor,Fd=Mc.Color.rgb(102,102,102),qc.fontColor=wd,qc.dropShadow=Tb,fc.yield(Sb.world().execCommand("browse and load component"),
2);qc.dropShadow=!1;qc.fontColor=Fd;fc.jumpToEnd()})}},{key:"setEditMode",value:function(Sb,qc){var od=this;qc=void 0===qc?!1:qc;var Tb=this.get("user flap"),wd=Tb.haloShadow,Fd=Tb.haloColor,fc=Mc.Color.rgb(102,102,102);qc||(this._currentEditMode=Sb);qc=this.get("shape mode button");Tb=this.get("text mode button");var ic=this.get("hand mode button"),Ab=this.get("halo mode button");[["Shape",qc.submorphs],["Text",[Tb]],["Hand",[ic]],["Halo",[Ab]]].forEach(function(jc){var Bc=$jscomp.makeIterator(jc);
jc=Bc.next().value;Bc=Bc.next().value;"Shape"==Sb?od.world().toggleShapeMode(!0,od.currentShapeMode):"Text"==Sb?od.world().toggleShapeMode(!0,"Text"):od.world().toggleShapeMode(!1);od.world().showHaloPreviews("Halo"==Sb);jc==Sb?Bc.forEach(function(ad){ad.dropShadow=wd;ad.fontColor=Fd}):Bc.forEach(function(ad){ad.dropShadow=null;ad.fontColor=fc})})}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"LivelyTopBar"}},{key:"properties",get:function(){return{activeSideBars:{},currentShapeMode:{after:["submorphs"],
set:function(Sb){this.setProperty("currentShapeMode",Sb);this.get("shape status icon").textAndAttributes=Mc.Icon.textAttribute(this.shapeToIcon[Sb].args[0])}},sideBarToIcon:{readOnly:!0,get:function(){return{"Scene Graph":{args:["sitemap",{textStyleClasses:["fas"]}]},"Styling Palette":{args:["palette",{textStyleClasses:["fas"]}]}}}},shapeToIcon:{readOnly:!0,get:function(){return{Rectangle:{shortcut:"R",args:["square",{textStyleClasses:["fas"]}]},Ellipse:{shortcut:"E",args:["circle",{textStyleClasses:["fas"]}]},
Image:{shortcut:"I",args:["image",{textStyleClasses:["fas"],paddingTop:"1px"}]},Path:{shortcut:"P",args:["bezier-curve",{fontSize:13,paddingTop:"3px"}]},Polygon:{shortcut:"Q",args:["draw-polygon",{fontSize:17}]},Label:{shortcut:"L",args:["tag",{paddingTop:"1px"}]},Canvas:{shortcut:"C",args:["chess-board",{paddingTop:"1px"}]},HTML:{shortcut:"H",args:["code",{paddingTop:"1px"}]}}}}}}}],Ce,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},
subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"LivelyTopBar",version:"0.1.1-157"}}},{start:328,end:9460})}(Mc.Morph);Bd=Mc.LivelyTopBar;Mc.default=Bd}}});System.register("21",["./__root_module__-c4f77fb9.js","kld-intersections","./index-cb8cbefd.js","./user-ui-0e8459b1.js"],function(){return{setters:[function(){},function(){},function(){},function(){}],execute:function(){}}});
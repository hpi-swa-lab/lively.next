System.register(["./__root_module__-fd8ea0c8.js","kld-intersections","./user-ui-84db94da.js","./index-6c2aac83.js"],function(Ca,Bb){var Kb,lc,bc,Td,Xc,Wd,$c,Pc;return{setters:[function(md){Kb=md.an;lc=md.as;bc=md.a3;Td=md.C;Xc=md.a6;Wd=md.L;$c=md.r;Pc=md.aw},function(){},function(){},function(){}],execute:function(){var md=lively.FreezerRuntime.recorderFor("LivelyTopBar/index.js");md.Morph=Kb;md.Icon=lc;md.pt=bc;md.Color=Td;md.arr=Xc;md.LoadingIndicator=Wd;md.resource=$c;var ge=function(Qe){var kf=
lively.FreezerRuntime.recorderFor("LivelyTopBar/index.js"),ke=kf.hasOwnProperty("LivelyTopBar")&&"function"===typeof kf.LivelyTopBar?kf.LivelyTopBar:kf.LivelyTopBar=function(cc){cc&&cc[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Pc(ke,Qe,[{key:"beforePublish",value:function(){this.activeSideBars=[];this.currentShapeMode="Rectangle";this.setEditMode("Halo")}},{key:"onLoad",value:function(){var cc=this;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Hc){if(1==
Hc.nextAddress)return cc.isComponent?Hc.return():Hc.yield(cc.whenRendered(),2);document.body.style.background="black";cc.setEditMode("Halo");cc.getSubmorphNamed("fast load toggler").refresh();Hc.jumpToEnd()})}},{key:"onUserChanged",value:function(cc){this.getSubmorphNamed("user flap").onUserChanged(cc)}},{key:"relayout",value:function(){this.respondsToVisibleWindow&&(this.width=this.world().visibleBounds().width,this.position=md.pt(0,0));var cc=this.getSubmorphNamed("user flap");this.get("ipad status bar").width=
this.width;cc.right=this.width-10}},{key:"getShapeMenuItems",value:function(){var cc=this;return Object.entries(this.shapeToIcon).map(function(Hc){Hc=$jscomp.makeIterator(Hc);var Nd=Hc.next().value,ec=Hc.next().value;Hc=ec.shortcut;ec=ec.args;return[[].concat($jscomp.arrayFromIterable(cc.currentShapeMode===Nd?[].concat($jscomp.arrayFromIterable(md.Icon.textAttribute("check",{fontSize:11,paddingTop:"2px"})),["   ",{}]):["     ",{}]),$jscomp.arrayFromIterable(md.Icon.textAttribute.apply(md.Icon,$jscomp.arrayFromIterable(ec))),
["   "+Nd+" ",{float:"none"},"      "+Hc,{float:"right",fontSize:11,opacity:.5,fontFamily:"IBM Plex Mono"}]),function(){cc.currentShapeMode=Nd;cc.setEditMode("Shape")}]})}},{key:"getSideBarMenuItems",value:function(){var cc=this;return Object.entries(this.sideBarToIcon).map(function(Hc){Hc=$jscomp.makeIterator(Hc);var Nd=Hc.next().value;Hc=Hc.next().value.args;return[[].concat($jscomp.arrayFromIterable(cc.activeSideBars.includes(Nd)?[].concat($jscomp.arrayFromIterable(md.Icon.textAttribute("check",
{fontSize:11,paddingTop:"2px"})),["   ",{}]):["     ",{}]),$jscomp.arrayFromIterable(md.Icon.textAttribute.apply(md.Icon,$jscomp.arrayFromIterable(Hc))),["   "+Nd+" ",{float:"none"}]),function(){return cc.openSideBar(Nd)}]})}},{key:"reloadSidebar",value:function(){this.sideBar.remove();this.sideBar=null;this.stylingPalette.remove();this.stylingPalette=null;this.openSideBar("Scene Graph");this.openSideBar("Styling Palette")}},{key:"onKeyUp",value:function(cc){"Hand"==this._currentEditMode&&this.setEditMode("Hand",
!0)}},{key:"onKeyDown",value:function(cc){Pc._get(Object.getPrototypeOf(ke.prototype),"onKeyDown",this).call(this,cc);if(cc.isCommandKey()&&"Hand"==this._currentEditMode)this.setEditMode("Halo",!0);else if(!cc.isAltDown()){var Hc={R:"Rectangle",E:"Ellipse",I:"Image",P:"Path",Q:"Polygon",L:"Label",C:"Canvas",H:"HTML"};switch(cc.key){case "Escape":this.setEditMode("Halo");break;case "R":case "E":case "I":case "P":case "Q":case "L":case "C":case "H":this.currentShapeMode=Hc[cc.key];this.setEditMode("Shape");
break;case "T":this.setEditMode("Text")}}}},{key:"openSideBar",value:function(cc){var Hc=this,Nd,ec,$d,le,Dc,Ic;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Vb){switch(Vb.nextAddress){case 1:Hc.activeSideBars.includes(cc)?md.arr.remove(Hc.activeSideBars,cc):Hc.activeSideBars.push(cc);if("Scene Graph"!=cc){Vb.jumpTo(2);break}if(Hc.sideBar){Vb.jumpTo(3);break}Nd=md.LoadingIndicator.open("loading side bar");return Vb.yield(Nd.whenRendered(),4);case 4:return ec=Hc,Vb.yield(Bb.import("./scene graph side bar master-b596d18a.js"),
6);case 6:if(!($d=Vb.yieldResult)){Vb.jumpTo(7);break}return Vb.yield(md.resource("part://SystemIDE/scene graph side bar master"),8);case 8:$d=Vb.yieldResult;case 7:return Vb.yield($d.read(),5);case 5:return ec.sideBar=Vb.yieldResult,Hc.sideBar.hasFixedPosition=!0,Hc.sideBar.respondsToVisibleWindow=!0,Hc.sideBar.openInWorld(),Hc.sideBar.right=0,Vb.yield(Hc.sideBar.whenRendered(),9);case 9:Nd.remove();case 3:Hc.sideBar.toggle(Hc.activeSideBars.includes("Scene Graph"));case 2:if("Styling Palette"!=
cc){Vb.jumpTo(0);break}if(Hc.stylingPalette){Vb.jumpTo(11);break}le=md.LoadingIndicator.open("loading side bar");return Vb.yield(le.whenRendered(),12);case 12:return Dc=Hc,Vb.yield(Bb.import("./styling side bar master-4d0f1f6e.js"),14);case 14:if(!(Ic=Vb.yieldResult)){Vb.jumpTo(15);break}return Vb.yield(md.resource("part://SystemIDE/styling side bar master"),16);case 16:Ic=Vb.yieldResult;case 15:return Vb.yield(Ic.read(),13);case 13:return Dc.stylingPalette=Vb.yieldResult,Hc.stylingPalette.collapseAll(),
Hc.stylingPalette.hasFixedPosition=!0,Hc.stylingPalette.respondsToVisibleWindow=!0,Hc.stylingPalette.openInWorld(),Hc.stylingPalette.left=Hc.world().width,Vb.yield(Hc.stylingPalette.whenRendered(),17);case 17:le.remove();case 11:Hc.stylingPalette.toggle(Hc.activeSideBars.includes("Styling Palette")),Vb.jumpToEnd()}})}},{key:"onMouseDown",value:function(cc){var Hc=this.get("select shape type"),Nd=this.get("shape mode button"),ec=this.get("side bar selector");cc.targetMorph==Hc&&(this.world().openWorldMenu(cc,
this.getShapeMenuItems()).position=Nd.globalBounds().bottomLeft().subPt(this.world().scroll));cc.targetMorph==Nd&&this.setEditMode("Shape");"text mode button"==cc.targetMorph.name&&this.setEditMode("Text");"hand mode button"==cc.targetMorph.name&&this.setEditMode("Hand");"halo mode button"==cc.targetMorph.name&&this.setEditMode("Halo");"open component browser"==cc.targetMorph.name&&this.interactivelyLoadComponent();"load world button"==cc.targetMorph.name&&this.world().execCommand("load world");cc.targetMorph==
ec&&(this.world().openWorldMenu(cc,this.getSideBarMenuItems()).position=ec.globalBounds().bottomLeft().subPt(this.world().scroll))}},{key:"interactivelyLoadComponent",value:function(){var cc=this,Hc,Nd,ec,$d,le;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Dc){if(1==Dc.nextAddress)return Hc=cc.get("open component browser"),Nd=cc.get("user flap"),ec=Nd.haloShadow,$d=Nd.haloColor,le=md.Color.rgb(102,102,102),Hc.fontColor=$d,Hc.dropShadow=ec,Dc.yield(cc.world().execCommand("browse and load component"),
2);Hc.dropShadow=!1;Hc.fontColor=le;Dc.jumpToEnd()})}},{key:"setEditMode",value:function(cc,Hc){var Nd=this;Hc=void 0===Hc?!1:Hc;var ec=this.get("user flap"),$d=ec.haloShadow,le=ec.haloColor,Dc=md.Color.rgb(102,102,102);Hc||(this._currentEditMode=cc);Hc=this.get("shape mode button");ec=this.get("text mode button");var Ic=this.get("hand mode button"),Vb=this.get("halo mode button");[["Shape",Hc.submorphs],["Text",[ec]],["Hand",[Ic]],["Halo",[Vb]]].forEach(function(Lc){var dd=$jscomp.makeIterator(Lc);
Lc=dd.next().value;dd=dd.next().value;"Shape"==cc?Nd.world().toggleShapeMode(!0,Nd.currentShapeMode):"Text"==cc?Nd.world().toggleShapeMode(!0,"Text"):Nd.world().toggleShapeMode(!1);Nd.world().showHaloPreviews("Halo"==cc);Lc==cc?dd.forEach(function(Hd){Hd.dropShadow=$d;Hd.fontColor=le}):dd.forEach(function(Hd){Hd.dropShadow=null;Hd.fontColor=Dc})})}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"LivelyTopBar"}},{key:"properties",get:function(){return{activeSideBars:{},currentShapeMode:{after:["submorphs"],
set:function(cc){this.setProperty("currentShapeMode",cc);this.get("shape status icon").textAndAttributes=md.Icon.textAttribute(this.shapeToIcon[cc].args[0])}},sideBarToIcon:{readOnly:!0,get:function(){return{"Scene Graph":{args:["sitemap",{textStyleClasses:["fas"]}]},"Styling Palette":{args:["palette",{textStyleClasses:["fas"]}]}}}},shapeToIcon:{readOnly:!0,get:function(){return{Rectangle:{shortcut:"R",args:["square",{textStyleClasses:["fas"]}]},Ellipse:{shortcut:"E",args:["circle",{textStyleClasses:["fas"]}]},
Image:{shortcut:"I",args:["image",{textStyleClasses:["fas"],paddingTop:"1px"}]},Path:{shortcut:"P",args:["bezier-curve",{fontSize:13,paddingTop:"3px"}]},Polygon:{shortcut:"Q",args:["draw-polygon",{fontSize:17}]},Label:{shortcut:"L",args:["tag",{paddingTop:"1px"}]},Canvas:{shortcut:"C",args:["chess-board",{paddingTop:"1px"}]},HTML:{shortcut:"H",args:["code",{paddingTop:"1px"}]}}}}}}}],kf,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},
subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"LivelyTopBar",version:"0.1.1-157"}}},{start:328,end:9460})}(md.Morph);ge=md.LivelyTopBar;md.default=ge}}});System.register("21",["./__root_module__-fd8ea0c8.js","kld-intersections","./index-b8f51b00.js","./user-ui-84db94da.js"],function(){return{setters:[function(){},function(){},function(){},function(){}],execute:function(){}}});
System.register(["./__root_module__-a4bfb546.js","kld-intersections","./user-ui-ad7092aa.js","./index-951b11c6.js"],function(ta,cb){var mb,Sb,Jb,sd,vc,wd,wc,Cc;return{setters:[function(Gc){mb=Gc.an;Sb=Gc.as;Jb=Gc.a3;sd=Gc.C;vc=Gc.a6;wd=Gc.L;wc=Gc.r;Cc=Gc.aw},function(){},function(){},function(){}],execute:function(){var Gc=lively.FreezerRuntime.recorderFor("LivelyTopBar/index.js");Gc.Morph=mb;Gc.Icon=Sb;Gc.pt=Jb;Gc.Color=sd;Gc.arr=vc;Gc.LoadingIndicator=wd;Gc.resource=wc;var Cd=function(pe){var Je=
lively.FreezerRuntime.recorderFor("LivelyTopBar/index.js"),ce=Je.hasOwnProperty("LivelyTopBar")&&"function"===typeof Je.LivelyTopBar?Je.LivelyTopBar:Je.LivelyTopBar=function(Qb){Qb&&Qb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Cc(ce,pe,[{key:"beforePublish",value:function(){this.activeSideBars=[];this.currentShapeMode="Rectangle";this.setEditMode("Halo")}},{key:"onLoad",value:function(){var Qb=this;return $jscomp.asyncExecutePromiseGeneratorProgram(function(pc){if(1==
pc.nextAddress)return Qb.isComponent?pc.return():pc.yield(Qb.whenRendered(),2);document.body.style.background="black";Qb.setEditMode("Halo");Qb.getSubmorphNamed("fast load toggler").refresh();pc.jumpToEnd()})}},{key:"onUserChanged",value:function(Qb){this.getSubmorphNamed("user flap").onUserChanged(Qb)}},{key:"relayout",value:function(){this.respondsToVisibleWindow&&(this.width=this.world().visibleBounds().width,this.position=Gc.pt(0,0));var Qb=this.getSubmorphNamed("user flap");this.get("ipad status bar").width=
this.width;Qb.right=this.width-10}},{key:"getShapeMenuItems",value:function(){var Qb=this;return Object.entries(this.shapeToIcon).map(function(pc){pc=$jscomp.makeIterator(pc);var ld=pc.next().value,Rb=pc.next().value;pc=Rb.shortcut;Rb=Rb.args;return[[].concat($jscomp.arrayFromIterable(Qb.currentShapeMode===ld?[].concat($jscomp.arrayFromIterable(Gc.Icon.textAttribute("check",{fontSize:11,paddingTop:"2px"})),["   ",{}]):["     ",{}]),$jscomp.arrayFromIterable(Gc.Icon.textAttribute.apply(Gc.Icon,$jscomp.arrayFromIterable(Rb))),
["   "+ld+" ",{float:"none"},"      "+pc,{float:"right",fontSize:11,opacity:.5,fontFamily:"IBM Plex Mono"}]),function(){Qb.currentShapeMode=ld;Qb.setEditMode("Shape")}]})}},{key:"getSideBarMenuItems",value:function(){var Qb=this;return Object.entries(this.sideBarToIcon).map(function(pc){pc=$jscomp.makeIterator(pc);var ld=pc.next().value;pc=pc.next().value.args;return[[].concat($jscomp.arrayFromIterable(Qb.activeSideBars.includes(ld)?[].concat($jscomp.arrayFromIterable(Gc.Icon.textAttribute("check",
{fontSize:11,paddingTop:"2px"})),["   ",{}]):["     ",{}]),$jscomp.arrayFromIterable(Gc.Icon.textAttribute.apply(Gc.Icon,$jscomp.arrayFromIterable(pc))),["   "+ld+" ",{float:"none"}]),function(){return Qb.openSideBar(ld)}]})}},{key:"reloadSidebar",value:function(){this.sideBar.remove();this.sideBar=null;this.stylingPalette.remove();this.stylingPalette=null;this.openSideBar("Scene Graph");this.openSideBar("Styling Palette")}},{key:"onKeyUp",value:function(Qb){"Hand"==this._currentEditMode&&this.setEditMode("Hand",
!0)}},{key:"onKeyDown",value:function(Qb){Cc._get(Object.getPrototypeOf(ce.prototype),"onKeyDown",this).call(this,Qb);if(Qb.isCommandKey()&&"Hand"==this._currentEditMode)this.setEditMode("Halo",!0);else if(!Qb.isAltDown()){var pc={R:"Rectangle",E:"Ellipse",I:"Image",P:"Path",Q:"Polygon",L:"Label",C:"Canvas",H:"HTML"};switch(Qb.key){case "Escape":this.setEditMode("Halo");break;case "R":case "E":case "I":case "P":case "Q":case "L":case "C":case "H":this.currentShapeMode=pc[Qb.key];this.setEditMode("Shape");
break;case "T":this.setEditMode("Text")}}}},{key:"openSideBar",value:function(Qb){var pc=this,ld,Rb,xd,Hd,Dc,bc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Ib){switch(Ib.nextAddress){case 1:pc.activeSideBars.includes(Qb)?Gc.arr.remove(pc.activeSideBars,Qb):pc.activeSideBars.push(Qb);if("Scene Graph"!=Qb){Ib.jumpTo(2);break}if(pc.sideBar){Ib.jumpTo(3);break}ld=Gc.LoadingIndicator.open("loading side bar");return Ib.yield(ld.whenRendered(),4);case 4:return Rb=pc,Ib.yield(cb.import("./scene graph side bar master-dda0897f.js"),
6);case 6:if(!(xd=Ib.yieldResult)){Ib.jumpTo(7);break}return Ib.yield(Gc.resource("part://SystemIDE/scene graph side bar master"),8);case 8:xd=Ib.yieldResult;case 7:return Ib.yield(xd.read(),5);case 5:return Rb.sideBar=Ib.yieldResult,pc.sideBar.hasFixedPosition=!0,pc.sideBar.respondsToVisibleWindow=!0,pc.sideBar.openInWorld(),pc.sideBar.right=0,Ib.yield(pc.sideBar.whenRendered(),9);case 9:ld.remove();case 3:pc.sideBar.toggle(pc.activeSideBars.includes("Scene Graph"));case 2:if("Styling Palette"!=
Qb){Ib.jumpTo(0);break}if(pc.stylingPalette){Ib.jumpTo(11);break}Hd=Gc.LoadingIndicator.open("loading side bar");return Ib.yield(Hd.whenRendered(),12);case 12:return Dc=pc,Ib.yield(cb.import("./styling side bar master-fadc5061.js"),14);case 14:if(!(bc=Ib.yieldResult)){Ib.jumpTo(15);break}return Ib.yield(Gc.resource("part://SystemIDE/styling side bar master"),16);case 16:bc=Ib.yieldResult;case 15:return Ib.yield(bc.read(),13);case 13:return Dc.stylingPalette=Ib.yieldResult,pc.stylingPalette.collapseAll(),
pc.stylingPalette.hasFixedPosition=!0,pc.stylingPalette.respondsToVisibleWindow=!0,pc.stylingPalette.openInWorld(),pc.stylingPalette.left=pc.world().width,Ib.yield(pc.stylingPalette.whenRendered(),17);case 17:Hd.remove();case 11:pc.stylingPalette.toggle(pc.activeSideBars.includes("Styling Palette")),Ib.jumpToEnd()}})}},{key:"onMouseDown",value:function(Qb){var pc=this.get("select shape type"),ld=this.get("shape mode button"),Rb=this.get("side bar selector");Qb.targetMorph==pc&&(this.world().openWorldMenu(Qb,
this.getShapeMenuItems()).position=ld.globalBounds().bottomLeft().subPt(this.world().scroll));Qb.targetMorph==ld&&this.setEditMode("Shape");"text mode button"==Qb.targetMorph.name&&this.setEditMode("Text");"hand mode button"==Qb.targetMorph.name&&this.setEditMode("Hand");"halo mode button"==Qb.targetMorph.name&&this.setEditMode("Halo");"open component browser"==Qb.targetMorph.name&&this.interactivelyLoadComponent();"load world button"==Qb.targetMorph.name&&this.world().execCommand("load world");Qb.targetMorph==
Rb&&(this.world().openWorldMenu(Qb,this.getSideBarMenuItems()).position=Rb.globalBounds().bottomLeft().subPt(this.world().scroll))}},{key:"interactivelyLoadComponent",value:function(){var Qb=this,pc,ld,Rb,xd,Hd;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Dc){if(1==Dc.nextAddress)return pc=Qb.get("open component browser"),ld=Qb.get("user flap"),Rb=ld.haloShadow,xd=ld.haloColor,Hd=Gc.Color.rgb(102,102,102),pc.fontColor=xd,pc.dropShadow=Rb,Dc.yield(Qb.world().execCommand("browse and load component"),
2);pc.dropShadow=!1;pc.fontColor=Hd;Dc.jumpToEnd()})}},{key:"setEditMode",value:function(Qb,pc){var ld=this;pc=void 0===pc?!1:pc;var Rb=this.get("user flap"),xd=Rb.haloShadow,Hd=Rb.haloColor,Dc=Gc.Color.rgb(102,102,102);pc||(this._currentEditMode=Qb);pc=this.get("shape mode button");Rb=this.get("text mode button");var bc=this.get("hand mode button"),Ib=this.get("halo mode button");[["Shape",pc.submorphs],["Text",[Rb]],["Hand",[bc]],["Halo",[Ib]]].forEach(function(gc){var sc=$jscomp.makeIterator(gc);
gc=sc.next().value;sc=sc.next().value;"Shape"==Qb?ld.world().toggleShapeMode(!0,ld.currentShapeMode):"Text"==Qb?ld.world().toggleShapeMode(!0,"Text"):ld.world().toggleShapeMode(!1);ld.world().showHaloPreviews("Halo"==Qb);gc==Qb?sc.forEach(function(dd){dd.dropShadow=xd;dd.fontColor=Hd}):sc.forEach(function(dd){dd.dropShadow=null;dd.fontColor=Dc})})}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"LivelyTopBar"}},{key:"properties",get:function(){return{activeSideBars:{},currentShapeMode:{after:["submorphs"],
set:function(Qb){this.setProperty("currentShapeMode",Qb);this.get("shape status icon").textAndAttributes=Gc.Icon.textAttribute(this.shapeToIcon[Qb].args[0])}},sideBarToIcon:{readOnly:!0,get:function(){return{"Scene Graph":{args:["sitemap",{textStyleClasses:["fas"]}]},"Styling Palette":{args:["palette",{textStyleClasses:["fas"]}]}}}},shapeToIcon:{readOnly:!0,get:function(){return{Rectangle:{shortcut:"R",args:["square",{textStyleClasses:["fas"]}]},Ellipse:{shortcut:"E",args:["circle",{textStyleClasses:["fas"]}]},
Image:{shortcut:"I",args:["image",{textStyleClasses:["fas"],paddingTop:"1px"}]},Path:{shortcut:"P",args:["bezier-curve",{fontSize:13,paddingTop:"3px"}]},Polygon:{shortcut:"Q",args:["draw-polygon",{fontSize:17}]},Label:{shortcut:"L",args:["tag",{paddingTop:"1px"}]},Canvas:{shortcut:"C",args:["chess-board",{paddingTop:"1px"}]},HTML:{shortcut:"H",args:["code",{paddingTop:"1px"}]}}}}}}}],Je,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},
subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"LivelyTopBar",version:"0.1.1-157"}}},{start:328,end:9460})}(Gc.Morph);Cd=Gc.LivelyTopBar;Gc.default=Cd}}});System.register("21",["./__root_module__-a4bfb546.js","kld-intersections","./index-5e766f8e.js","./user-ui-ad7092aa.js"],function(){return{setters:[function(){},function(){},function(){},function(){}],execute:function(){}}});
System.register("./__root_module__-3d4e820f.js kld-intersections ./user-ui-0b738134.js ./index-334536b1.js ./index-cbb45750.js ./editor-plugin-a0c062dc.js ./index-7fab6f02.js".split(" "),function(ra,kb){var zb,Sb,Mb,Fd,Jc,wd,Kc,Fc;return{setters:[function(Wc){zb=Wc.ai;Sb=Wc.ao;Mb=Wc.a3;Fd=Wc.C;Jc=Wc.a6;wd=Wc.L;Kc=Wc.r;Fc=Wc.as},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var Wc=lively.FreezerRuntime.recorderFor("LivelyTopBar/index.js");Wc.Morph=
zb;Wc.Icon=Sb;Wc.pt=Mb;Wc.Color=Fd;Wc.arr=Jc;Wc.LoadingIndicator=wd;Wc.resource=Kc;var hd=function(Id){var nd=lively.FreezerRuntime.recorderFor("LivelyTopBar/index.js"),Xc=nd.hasOwnProperty("LivelyTopBar")&&"function"===typeof nd.LivelyTopBar?nd.LivelyTopBar:nd.LivelyTopBar=function(Na){Na&&Na[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Fc(Xc,Id,[{key:"beforePublish",value:function(){this.activeSideBars=[];this.currentShapeMode=
"Rectangle";this.setEditMode("Halo")}},{key:"onLoad",value:function(){var Na=this;return $jscomp.asyncExecutePromiseGeneratorProgram(function(nb){if(1==nb.nextAddress)return Na.isComponent?nb.return():nb.yield(Na.whenRendered(),2);document.body.style.background="black";Na.setEditMode("Halo");Na.getSubmorphNamed("fast load toggler").refresh();nb.jumpToEnd()})}},{key:"relayout",value:function(){this.respondsToVisibleWindow&&(this.width=this.world().visibleBounds().width,this.position=Wc.pt(0,0));var Na=
this.getSubmorphNamed("user flap");this.get("ipad status bar").width=this.width;Na.right=this.width-10}},{key:"getShapeMenuItems",value:function(){var Na=this;return Object.entries(this.shapeToIcon).map(function(nb){nb=$jscomp.makeIterator(nb);var Pb=nb.next().value,Wb=nb.next().value;nb=Wb.shortcut;Wb=Wb.args;return[[].concat($jscomp.arrayFromIterable(Na.currentShapeMode===Pb?[].concat($jscomp.arrayFromIterable(Wc.Icon.textAttribute("check",{fontSize:11,paddingTop:"2px"})),["   ",{}]):["     ",{}]),
$jscomp.arrayFromIterable(Wc.Icon.textAttribute.apply(Wc.Icon,$jscomp.arrayFromIterable(Wb))),["   "+Pb+" ",{float:"none"},"      "+nb,{float:"right",fontSize:11,opacity:.5,fontFamily:"IBM Plex Mono"}]),function(){Na.currentShapeMode=Pb;Na.setEditMode("Shape")}]})}},{key:"getSideBarMenuItems",value:function(){var Na=this;return Object.entries(this.sideBarToIcon).map(function(nb){nb=$jscomp.makeIterator(nb);var Pb=nb.next().value;nb=nb.next().value.args;return[[].concat($jscomp.arrayFromIterable(Na.activeSideBars.includes(Pb)?
[].concat($jscomp.arrayFromIterable(Wc.Icon.textAttribute("check",{fontSize:11,paddingTop:"2px"})),["   ",{}]):["     ",{}]),$jscomp.arrayFromIterable(Wc.Icon.textAttribute.apply(Wc.Icon,$jscomp.arrayFromIterable(nb))),["   "+Pb+" ",{float:"none"}]),function(){return Na.openSideBar(Pb)}]})}},{key:"reloadSidebar",value:function(){this.sideBar.remove();this.sideBar=null;this.stylingPalette.remove();this.stylingPalette=null;this.openSideBar("Scene Graph");this.openSideBar("Styling Palette")}},{key:"onKeyUp",
value:function(Na){"Hand"==this._currentEditMode&&this.setEditMode("Hand",!0)}},{key:"onKeyDown",value:function(Na){Fc._get(Object.getPrototypeOf(Xc.prototype),"onKeyDown",this).call(this,Na);if(Na.isCommandKey()&&"Hand"==this._currentEditMode)this.setEditMode("Halo",!0);else if(!Na.isAltDown()){var nb={R:"Rectangle",E:"Ellipse",I:"Image",P:"Path",Q:"Polygon",L:"Label",C:"Canvas",H:"HTML"};switch(Na.key){case "Escape":this.setEditMode("Halo");break;case "R":case "E":case "I":case "P":case "Q":case "L":case "C":case "H":this.currentShapeMode=
nb[Na.key];this.setEditMode("Shape");break;case "T":this.setEditMode("Text")}}}},{key:"openSideBar",value:function(Na){var nb=this,Pb,Wb,Pc,Bd,Hb,Ub;return $jscomp.asyncExecutePromiseGeneratorProgram(function(vb){switch(vb.nextAddress){case 1:nb.activeSideBars.includes(Na)?Wc.arr.remove(nb.activeSideBars,Na):nb.activeSideBars.push(Na);if("Scene Graph"!=Na){vb.jumpTo(2);break}if(nb.sideBar){vb.jumpTo(3);break}Pb=Wc.LoadingIndicator.open("loading side bar");Wb=nb;return vb.yield(kb.import("./scene graph side bar master-82d993c6.js"),
5);case 5:if(!(Pc=vb.yieldResult)){vb.jumpTo(6);break}return vb.yield(Wc.resource("part://SystemIDE/scene graph side bar master"),7);case 7:Pc=vb.yieldResult;case 6:return vb.yield(Pc.read(),4);case 4:return Wb.sideBar=vb.yieldResult,nb.sideBar.hasFixedPosition=!0,nb.sideBar.respondsToVisibleWindow=!0,nb.sideBar.openInWorld(),nb.sideBar.right=0,vb.yield(nb.sideBar.whenRendered(),8);case 8:Pb.remove();case 3:nb.sideBar.toggle(nb.activeSideBars.includes("Scene Graph"));case 2:if("Styling Palette"!=
Na){vb.jumpTo(0);break}if(nb.stylingPalette){vb.jumpTo(10);break}Bd=Wc.LoadingIndicator.open("loading side bar");Hb=nb;return vb.yield(kb.import("./styling side bar master-2908d850.js"),12);case 12:if(!(Ub=vb.yieldResult)){vb.jumpTo(13);break}return vb.yield(Wc.resource("part://SystemIDE/styling side bar master"),14);case 14:Ub=vb.yieldResult;case 13:return vb.yield(Ub.read(),11);case 11:return Hb.stylingPalette=vb.yieldResult,nb.stylingPalette.collapseAll(),nb.stylingPalette.hasFixedPosition=!0,
nb.stylingPalette.respondsToVisibleWindow=!0,nb.stylingPalette.openInWorld(),nb.stylingPalette.left=nb.world().right,vb.yield(nb.stylingPalette.whenRendered(),15);case 15:Bd.remove();case 10:nb.stylingPalette.toggle(nb.activeSideBars.includes("Styling Palette")),vb.jumpToEnd()}})}},{key:"onMouseDown",value:function(Na){var nb=this.get("select shape type"),Pb=this.get("shape mode button"),Wb=this.get("side bar selector");Na.targetMorph==nb&&(this.world().openWorldMenu(Na,this.getShapeMenuItems()).position=
Pb.globalBounds().bottomLeft().subPt(this.world().scroll));Na.targetMorph==Pb&&this.setEditMode("Shape");"text mode button"==Na.targetMorph.name&&this.setEditMode("Text");"hand mode button"==Na.targetMorph.name&&this.setEditMode("Hand");"halo mode button"==Na.targetMorph.name&&this.setEditMode("Halo");"open component browser"==Na.targetMorph.name&&this.interactivelyLoadComponent();"load world button"==Na.targetMorph.name&&this.world().execCommand("load world");Na.targetMorph==Wb&&(this.world().openWorldMenu(Na,
this.getSideBarMenuItems()).position=Wb.globalBounds().bottomLeft().subPt(this.world().scroll))}},{key:"interactivelyLoadComponent",value:function(){var Na=this,nb,Pb,Wb,Pc,Bd;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Hb){if(1==Hb.nextAddress)return nb=Na.get("open component browser"),Pb=Na.get("user flap"),Wb=Pb.haloShadow,Pc=Pb.haloColor,Bd=Wc.Color.rgb(102,102,102),nb.fontColor=Pc,nb.dropShadow=Wb,Hb.yield(Na.world().execCommand("browse and load component"),2);nb.dropShadow=!1;
nb.fontColor=Bd;Hb.jumpToEnd()})}},{key:"setEditMode",value:function(Na,nb){var Pb=this;nb=void 0===nb?!1:nb;var Wb=this.get("user flap"),Pc=Wb.haloShadow,Bd=Wb.haloColor,Hb=Wc.Color.rgb(102,102,102);nb||(this._currentEditMode=Na);nb=this.get("shape mode button");Wb=this.get("text mode button");var Ub=this.get("hand mode button"),vb=this.get("halo mode button");[["Shape",nb.submorphs],["Text",[Wb]],["Hand",[Ub]],["Halo",[vb]]].forEach(function(kc){var xc=$jscomp.makeIterator(kc);kc=xc.next().value;
xc=xc.next().value;"Shape"==Na?Pb.world().toggleShapeMode(!0,Pb.currentShapeMode):"Text"==Na?Pb.world().toggleShapeMode(!0,"Text"):Pb.world().toggleShapeMode(!1);Pb.world().showHaloPreviews("Halo"==Na);kc==Na?xc.forEach(function(Dc){Dc.dropShadow=Pc;Dc.fontColor=Bd}):xc.forEach(function(Dc){Dc.dropShadow=null;Dc.fontColor=Hb})})}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"LivelyTopBar"}},{key:"properties",get:function(){return{activeSideBars:{},currentShapeMode:{after:["submorphs"],
set:function(Na){this.setProperty("currentShapeMode",Na);this.get("shape status icon").textAndAttributes=Wc.Icon.textAttribute(this.shapeToIcon[Na].args[0])}},sideBarToIcon:{readOnly:!0,get:function(){return{"Scene Graph":{args:["sitemap",{textStyleClasses:["fas"]}]},"Styling Palette":{args:["palette",{textStyleClasses:["fas"]}]}}}},shapeToIcon:{readOnly:!0,get:function(){return{Rectangle:{shortcut:"R",args:["square",{textStyleClasses:["fas"]}]},Ellipse:{shortcut:"E",args:["circle",{textStyleClasses:["fas"]}]},
Image:{shortcut:"I",args:["image",{textStyleClasses:["fas"],paddingTop:"1px"}]},Path:{shortcut:"P",args:["bezier-curve",{fontSize:13,paddingTop:"3px"}]},Polygon:{shortcut:"Q",args:["draw-polygon",{fontSize:17}]},Label:{shortcut:"L",args:["tag",{paddingTop:"1px"}]},Canvas:{shortcut:"C",args:["chess-board",{paddingTop:"1px"}]},HTML:{shortcut:"H",args:["code",{paddingTop:"1px"}]}}}}}}}],nd,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},
subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"LivelyTopBar",version:"0.1.1-154"}}},{start:328,end:9325})}(Wc.Morph);hd=Wc.LivelyTopBar;Wc.default=hd}}});System.register("22",["./__root_module__-3d4e820f.js","kld-intersections","./user-ui-0b738134.js","./index-da7fb446.js"],function(){return{setters:[function(){},function(){},function(){},function(){}],execute:function(){}}});
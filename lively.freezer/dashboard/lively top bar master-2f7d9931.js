System.register("./__root_module__-7efb35ac.js kld-intersections ./user-ui-a91f8c15.js ./editor-plugin-3ec0f555.js ./index-48386cb3.js ./index-c9990055.js ./index-af0e845c.js".split(" "),function(Ba,Cb){var Sb,jc,lc,Xd,ed,Yd,id,Wc;return{setters:[function(Ad){Sb=Ad.ag;jc=Ad.am;lc=Ad.a1;Xd=Ad.C;ed=Ad.a4;Yd=Ad.L;id=Ad.r;Wc=Ad.aq},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var Ad=lively.FreezerRuntime.recorderFor("LivelyTopBar/index.js");Ad.Morph=
Sb;Ad.Icon=jc;Ad.pt=lc;Ad.Color=Xd;Ad.arr=ed;Ad.LoadingIndicator=Yd;Ad.resource=id;var Cd=function(fe){var Sd=lively.FreezerRuntime.recorderFor("LivelyTopBar/index.js"),jd=Sd.hasOwnProperty("LivelyTopBar")&&"function"===typeof Sd.LivelyTopBar?Sd.LivelyTopBar:Sd.LivelyTopBar=function(bb){bb&&bb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Wc(jd,fe,[{key:"beforePublish",value:function(){this.activeSideBars=[];this.currentShapeMode=
"Rectangle";this.setEditMode("Halo")}},{key:"onLoad",value:function(){var bb=this;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Fb){if(1==Fb.nextAddress)return bb.isComponent?Fb.return():Fb.yield(bb.whenRendered(),2);document.body.style.background="black";bb.setEditMode("Halo");bb.getSubmorphNamed("fast load toggler").refresh();Fb.jumpToEnd()})}},{key:"relayout",value:function(){this.respondsToVisibleWindow&&(this.width=this.world().visibleBounds().width,this.position=Ad.pt(0,0));var bb=
this.getSubmorphNamed("user flap");this.get("ipad status bar").width=this.width;bb.right=this.width-10}},{key:"getShapeMenuItems",value:function(){var bb=this;return Object.entries(this.shapeToIcon).map(function(Fb){Fb=$jscomp.makeIterator(Fb);var vc=Fb.next().value,pc=Fb.next().value;Fb=pc.shortcut;pc=pc.args;return[[].concat($jscomp.arrayFromIterable(bb.currentShapeMode===vc?[].concat($jscomp.arrayFromIterable(Ad.Icon.textAttribute("check",{fontSize:11,paddingTop:"2px"})),["   ",{}]):["     ",{}]),
$jscomp.arrayFromIterable(Ad.Icon.textAttribute.apply(Ad.Icon,$jscomp.arrayFromIterable(pc))),["   "+vc+" ",{float:"none"},"      "+Fb,{float:"right",fontSize:11,opacity:.5,fontFamily:"IBM Plex Mono"}]),function(){bb.currentShapeMode=vc;bb.setEditMode("Shape")}]})}},{key:"getSideBarMenuItems",value:function(){var bb=this;return Object.entries(this.sideBarToIcon).map(function(Fb){Fb=$jscomp.makeIterator(Fb);var vc=Fb.next().value;Fb=Fb.next().value.args;return[[].concat($jscomp.arrayFromIterable(bb.activeSideBars.includes(vc)?
[].concat($jscomp.arrayFromIterable(Ad.Icon.textAttribute("check",{fontSize:11,paddingTop:"2px"})),["   ",{}]):["     ",{}]),$jscomp.arrayFromIterable(Ad.Icon.textAttribute.apply(Ad.Icon,$jscomp.arrayFromIterable(Fb))),["   "+vc+" ",{float:"none"}]),function(){return bb.openSideBar(vc)}]})}},{key:"reloadSidebar",value:function(){this.sideBar.remove();this.sideBar=null;this.stylingPalette.remove();this.stylingPalette=null;this.openSideBar("Scene Graph");this.openSideBar("Styling Palette")}},{key:"onKeyUp",
value:function(bb){"Hand"==this._currentEditMode&&this.setEditMode("Hand",!0)}},{key:"onKeyDown",value:function(bb){Wc._get(Object.getPrototypeOf(jd.prototype),"onKeyDown",this).call(this,bb);if(bb.isCommandKey()&&"Hand"==this._currentEditMode)this.setEditMode("Halo",!0);else if(!bb.isAltDown()){var Fb={R:"Rectangle",E:"Ellipse",I:"Image",P:"Path",Q:"Polygon",L:"Label",C:"Canvas",H:"HTML"};switch(bb.key){case "Escape":this.setEditMode("Halo");break;case "R":case "E":case "I":case "P":case "Q":case "L":case "C":case "H":this.currentShapeMode=
Fb[bb.key];this.setEditMode("Shape");break;case "T":this.setEditMode("Text")}}}},{key:"openSideBar",value:function(bb){var Fb=this,vc,pc,sd,pd,tc,bd;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Xb){switch(Xb.nextAddress){case 1:Fb.activeSideBars.includes(bb)?Ad.arr.remove(Fb.activeSideBars,bb):Fb.activeSideBars.push(bb);if("Scene Graph"!=bb){Xb.jumpTo(2);break}if(Fb.sideBar){Xb.jumpTo(3);break}vc=Ad.LoadingIndicator.open("loading side bar");pc=Fb;return Xb.yield(Cb.import("./scene graph side bar master-10f04081.js"),
5);case 5:if(!(sd=Xb.yieldResult)){Xb.jumpTo(6);break}return Xb.yield(Ad.resource("part://SystemIDE/scene graph side bar master"),7);case 7:sd=Xb.yieldResult;case 6:return Xb.yield(sd.read(),4);case 4:return pc.sideBar=Xb.yieldResult,Fb.sideBar.openInWorld(),Fb.sideBar.right=0,Xb.yield(Fb.sideBar.whenRendered(),8);case 8:vc.remove();case 3:Fb.sideBar.toggle(Fb.activeSideBars.includes("Scene Graph"));case 2:if("Styling Palette"!=bb){Xb.jumpTo(0);break}if(Fb.stylingPalette){Xb.jumpTo(10);break}pd=Ad.LoadingIndicator.open("loading side bar");
tc=Fb;return Xb.yield(Cb.import("./styling side bar master-a4c33f3e.js"),12);case 12:if(!(bd=Xb.yieldResult)){Xb.jumpTo(13);break}return Xb.yield(Ad.resource("part://SystemIDE/styling side bar master"),14);case 14:bd=Xb.yieldResult;case 13:return Xb.yield(bd.read(),11);case 11:return tc.stylingPalette=Xb.yieldResult,Fb.stylingPalette.openInWorld(),Fb.stylingPalette.left=Fb.world().right,Xb.yield(Fb.stylingPalette.whenRendered(),15);case 15:pd.remove();case 10:Fb.stylingPalette.toggle(Fb.activeSideBars.includes("Styling Palette")),
Xb.jumpToEnd()}})}},{key:"onMouseDown",value:function(bb){var Fb=this.get("select shape type"),vc=this.get("shape mode button"),pc=this.get("side bar selector");bb.targetMorph==Fb&&(this.world().openWorldMenu(bb,this.getShapeMenuItems()).position=vc.globalBounds().bottomLeft().subPt(this.world().scroll));bb.targetMorph==vc&&this.setEditMode("Shape");"text mode button"==bb.targetMorph.name&&this.setEditMode("Text");"hand mode button"==bb.targetMorph.name&&this.setEditMode("Hand");"halo mode button"==
bb.targetMorph.name&&this.setEditMode("Halo");"open component browser"==bb.targetMorph.name&&this.interactivelyLoadComponent();bb.targetMorph==pc&&(this.world().openWorldMenu(bb,this.getSideBarMenuItems()).position=pc.globalBounds().bottomLeft().subPt(this.world().scroll))}},{key:"interactivelyLoadComponent",value:function(){var bb=this,Fb,vc,pc,sd,pd;return $jscomp.asyncExecutePromiseGeneratorProgram(function(tc){if(1==tc.nextAddress)return Fb=bb.get("open component browser"),vc=bb.get("user flap"),
pc=vc.haloShadow,sd=vc.haloColor,pd=Ad.Color.rgb(102,102,102),Fb.fontColor=sd,Fb.dropShadow=pc,tc.yield(bb.world().execCommand("browse and load component"),2);Fb.dropShadow=!1;Fb.fontColor=pd;tc.jumpToEnd()})}},{key:"setEditMode",value:function(bb,Fb){var vc=this;Fb=void 0===Fb?!1:Fb;var pc=this.get("user flap"),sd=pc.haloShadow,pd=pc.haloColor,tc=Ad.Color.rgb(102,102,102);Fb||(this._currentEditMode=bb);Fb=this.get("shape mode button");pc=this.get("text mode button");var bd=this.get("hand mode button"),
Xb=this.get("halo mode button");[["Shape",Fb.submorphs],["Text",[pc]],["Hand",[bd]],["Halo",[Xb]]].forEach(function(Tb){var Oc=$jscomp.makeIterator(Tb);Tb=Oc.next().value;Oc=Oc.next().value;"Shape"==bb?vc.world().toggleShapeMode(!0,vc.currentShapeMode):"Text"==bb?vc.world().toggleShapeMode(!0,"Text"):vc.world().toggleShapeMode(!1);vc.world().showHaloPreviews("Halo"==bb);Tb==bb?Oc.forEach(function(td){td.dropShadow=sd;td.fontColor=pd}):Oc.forEach(function(td){td.dropShadow=null;td.fontColor=tc})})}}],
[{key:"className",get:function(){return"LivelyTopBar"}},{key:"properties",get:function(){return{activeSideBars:{},currentShapeMode:{after:["submorphs"],set:function(bb){this.setProperty("currentShapeMode",bb);this.get("shape status icon").textAndAttributes=Ad.Icon.textAttribute(this.shapeToIcon[bb].args[0])}},sideBarToIcon:{readOnly:!0,get:function(){return{"Scene Graph":{args:["sitemap",{textStyleClasses:["fas"]}]},"Styling Palette":{args:["palette",{textStyleClasses:["fas"]}]}}}},shapeToIcon:{readOnly:!0,
get:function(){return{Rectangle:{shortcut:"R",args:["square",{textStyleClasses:["fas"]}]},Ellipse:{shortcut:"E",args:["circle",{textStyleClasses:["fas"]}]},Image:{shortcut:"I",args:["image",{textStyleClasses:["fas"],paddingTop:"1px"}]},Path:{shortcut:"P",args:["bezier-curve",{fontSize:13,paddingTop:"3px"}]},Polygon:{shortcut:"Q",args:["draw-polygon",{fontSize:17}]},Label:{shortcut:"L",args:["tag",{paddingTop:"1px"}]},Canvas:{shortcut:"C",args:["chess-board",{paddingTop:"1px"}]},HTML:{shortcut:"H",
args:["code",{paddingTop:"1px"}]}}}}}}}],Sd,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"LivelyTopBar",version:"0.1.1-150"}}},{start:328,end:8962})}(Ad.Morph);Cd=Ad.LivelyTopBar;Ad.default=Cd}}});
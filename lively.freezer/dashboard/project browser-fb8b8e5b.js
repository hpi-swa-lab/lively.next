System.register(["./__root_module__-64e296ea.js","kld-intersections","./index-997f10f9.js","./index-2a6f00a9.js","./user-ui-494b4ae6.js"],function(Ba,Ab){var Qb,dc,Xb,Xd,ad,Nd,dd,Lc,rd,Gd,ke,Kd,Hc,fb,Db,mc,hc,Tc,Ld;return{setters:[function(oc){Qb=oc.aj;dc=oc.aC;Xb=oc.al;Xd=oc.ao;ad=oc.Z;Nd=oc.a6;dd=oc.au;Lc=oc.s;rd=oc.C;Gd=oc.a3;ke=oc.r;Kd=oc.at;Hc=oc.aB;fb=oc.b0;Db=oc.b1;mc=oc.ar;hc=oc.aZ;Tc=oc.aY},function(){},function(){},function(){},function(oc){Ld=oc.UserUI}],execute:function(){var oc=
lively.FreezerRuntime.recorderFor("WorldDashboard/index.js");oc.Morph=Qb;oc.HorizontalLayout=dc;oc.VerticalLayout=Xb;oc.morph=Xd;oc.MorphicDB=ad;oc.arr=Nd;oc.fun=dd;oc.string=Lc;oc.Color=rd;oc.pt=Gd;oc.UserUI=Ld;oc.resource=ke;var pc=function(Vc){var Hd=lively.FreezerRuntime.recorderFor("WorldDashboard/index.js"),Id=Hd.hasOwnProperty("WorldDashboard")&&"function"===typeof Hd.WorldDashboard?Hd.WorldDashboard:Hd.WorldDashboard=function(rb){rb&&rb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,
arguments)};return Kd(Id,Vc,[{key:"focus",value:function(){this.ui.searchField.focus()}},{key:"update",value:function(){this.displayWorlds()}},{key:"beforePublish",value:function(){this.reset()}},{key:"reset",value:function(){this.ui.worldList.items=[];this.ui.noWorldWarning.visible=!1}},{key:"relayout",value:function(){this.alignInWorld()}},{key:"alignInWorld",value:function(rb){rb=void 0===rb?$world:rb;this.owner!=rb&&rb.addMorph(this);this.center=rb.visibleBounds().center()}},{key:"sortAndFilterPreviews",
value:function(rb){var Hb=oc.UserUI.getCurrentUser();rb=this.ui.searchField.fuzzyFilter(rb,function(Mc){return Mc._commit.name+Mc._commit.description});switch(this.ui.sortSelector.selection){case "RECENT":return oc.arr.sortBy(rb,function(Mc){return-Mc._commit.timestamp});case "TEMPLATES":return rb;case "MY PROJECTS":return oc.arr.filter(rb,function(Mc){return Mc._commit.author.name===Hb.name});case "PUBLISHED":return rb}}},{key:"updateList",value:function(){var rb=this;this.previews&&oc.fun.debounceNamed("update world list",
150,function(){rb.ui.worldList.items=rb.sortAndFilterPreviews(rb.previews)})()}},{key:"displayWorlds",value:function(){var rb=this,Hb,Mc,qb,tb,eb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(ob){switch(ob.nextAddress){case 1:return rb.reset(),Hb=rb.ui,Mc=Hb.loadingLabel,Mc.animate({opacity:1,duration:300}),ob.yield(rb.db.latestCommits("world"),2);case 2:return qb=ob.yieldResult,ob.yield(Ab.import("./world preview-b2f9ba7e.js"),4);case 4:if(!(tb=ob.yieldResult)){ob.jumpTo(5);break}return ob.yield(oc.resource("part://partial freezing/world preview"),
6);case 6:tb=ob.yieldResult;case 5:return ob.yield(tb.read(),3);case 3:return eb=ob.yieldResult,rb.previews=qb.map(function(wb){var cb=oc.morph({reactsToPointer:!1,fill:oc.Color.transparent,extent:eb.extent});cb._commit=wb;cb.displayPreview=function(){var Oa;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Gb){if(1==Gb.nextAddress)return Oa=eb.copy(),Oa._commit=wb,Oa.opacity=0,cb.addMorph(Oa),Oa.displayPreview(),Oa.position=oc.pt(0,0),Gb.yield(cb.whenRendered(),2);cb.layout=new oc.HorizontalLayout({autoResize:!0,
reactToSubmorphAnimations:!0});Gb.jumpToEnd()})};return cb}),ob.yield(Mc.animate({opacity:0,duration:300}),7);case 7:rb.updateList(),0==qb.length&&(rb.ui.noWorldWarning.center=rb.innerBounds().center(),rb.ui.noWorldWarning.animate({visible:!0,duration:300})),ob.jumpToEnd()}})}},{key:"createNewProject",value:function(){document.location="/worlds/load?name=__newWorld__"}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"WorldDashboard"}},{key:"properties",get:function(){return{showCloseButton:{derived:!0,
get:function(){return this.ui.closeButton.visible},set:function(rb){this.ui.closeButton.visible=rb}},db:{serialize:!1,get:function(){return oc.MorphicDB.default}},ui:{derived:!0,get:function(){return{worldList:this.getSubmorphNamed("world list"),sortSelector:this.getSubmorphNamed("search selector"),searchField:this.getSubmorphNamed("search field"),closeButton:this.getSubmorphNamed("close button"),loadingLabel:this.getSubmorphNamed("loading label"),noWorldWarning:this.getSubmorphNamed("no world warning")}}}}}}],
Hd,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"WorldDashboard",version:"0.1.1-127"}}},{start:330,end:3954})}(oc.Morph);pc=oc.WorldDashboard;oc.default=pc;var Nb=lively.FreezerRuntime.recorderFor("GrowingWorldList/index.js");Nb.Morph=Qb;Nb.touchInputDevice=Hc;Nb.TilingLayout=fb;Nb.arr=Nd;Nb.pt=Gd;pc=function(Vc){var Hd=lively.FreezerRuntime.recorderFor("GrowingWorldList/index.js"),
Id=Hd.hasOwnProperty("GrowingWorldList")&&"function"===typeof Hd.GrowingWorldList?Hd.GrowingWorldList:Hd.GrowingWorldList=function(rb){rb&&rb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Kd(Id,Vc,[{key:"onLoad",value:function(){this.clipMode="auto"}},{key:"onScroll",value:function(rb){Kd._get(Object.getPrototypeOf(Id.prototype),"onScroll",this).call(this,rb);this.update()}},{key:"onChange",value:function(rb){Kd._get(Object.getPrototypeOf(Id.prototype),
"onChange",this).call(this,rb);"extent"==rb.prop&&this.update(!0)}},{key:"onHoverIn",value:function(rb){this.clipMode="auto"}},{key:"onHoverOut",value:function(rb){Nb.touchInputDevice||(this.clipMode="hidden")}},{key:"update",value:function(rb){var Hb=this.items;if(Hb&&0!=Hb.length){var Mc=this.scrollContainer,qb=Mc.layout.spacing;Mc.extent=this.extent;var tb=this.ui,eb=tb.bufferTop;tb=tb.bufferBottom;eb=eb||Mc.addMorph({fill:null,name:"buffer top",height:10});tb=tb||Mc.addMorph({fill:null,name:"buffer bottom",
height:10});eb.width=tb.width=this.width-100;Mc.layout.disable();var ob=Hb[0];qb=Hb.slice(0,Math.floor(this.width/(ob.width+qb))*(Math.ceil((this.scroll.y+this.height)/(ob.height+qb))+1)).filter(function(Gb){return Gb.owner!=Mc});ob=this.scroll.y+2*this.height;for(var wb={},cb=$jscomp.makeIterator(qb),Oa=cb.next();!Oa.done;wb={$jscomp$loop$prop$item$2421:wb.$jscomp$loop$prop$item$2421},Oa=cb.next())wb.$jscomp$loop$prop$item$2421=Oa.value,ob++,wb.$jscomp$loop$prop$item$2421.top=ob,Mc.addMorph(wb.$jscomp$loop$prop$item$2421),
wb.$jscomp$loop$prop$item$2421._initialized||wb.$jscomp$loop$prop$item$2421.whenRendered().then(function(Gb){return function(){return $jscomp.asyncExecutePromiseGeneratorProgram(function(sc){Gb.$jscomp$loop$prop$item$2421._initialized=!0;return sc.yield(Gb.$jscomp$loop$prop$item$2421.displayPreview(),0)})}}(wb));rb&&(eb.position=Nb.pt(0,0),Hb.forEach(function(Gb,sc){return Gb.position=Nb.pt(sc+1,sc+1)}),tb.position=Nb.pt(Hb.length+2,Hb.length+2));Mc.layout.enable();if(rb||0<qb.length)tb.top=this.submorphBounds().height,
Mc.layout.apply()}}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"GrowingWorldList"}},{key:"properties",get:function(){return{scrollContainer:{get:function(){return this.getSubmorphNamed("scroll container")||this.addMorph({name:"scroll container",fill:null,reactsToPointer:!1,renderOnGPU:!0,layout:new Nb.TilingLayout({spacing:25,align:"center",autoResize:!0})})}},ui:{get:function(){return{bufferTop:this.getSubmorphNamed("buffer top"),bufferBottom:this.getSubmorphNamed("buffer bottom")}}},
items:{after:["layout","scrollContainer"],set:function(rb){this.setProperty("items",rb);var Hb=this.scrollContainer;Hb.layout&&Hb.layout.disable();var Mc=this.ui,qb=Mc.bufferTop;Mc=Mc.bufferBottom;Nb.arr.withoutAll(Hb.submorphs,[].concat($jscomp.arrayFromIterable(rb),[qb,Mc])).forEach(function(tb){return tb.remove()});this.update(!0)}}}}}],Hd,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},
package:function(){return{name:"GrowingWorldList",version:"0.1.1-32"}}},{start:179,end:3777})}(Nb.Morph);pc=Nb.GrowingWorldList;Nb.default=pc;var Dc=lively.FreezerRuntime.recorderFor("SearchInputLine/index.js");Dc.InputLine=Db;Dc.Color=rd;Dc.connect=mc;Dc.disconnectAll=hc;Dc.disconnect=Tc;Dc.arr=Nd;Dc.string=Lc;pc=function(Vc){var Hd=lively.FreezerRuntime.recorderFor("SearchInputLine/index.js"),Id=Hd.hasOwnProperty("SearchInputLine")&&"function"===typeof Hd.SearchInputLine?Hd.SearchInputLine:Hd.SearchInputLine=
function(rb){rb&&rb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Kd(Id,Vc,[{key:"fuzzyMatch",value:function(rb,Hb){Hb=void 0===Hb?this.parseInput():Hb;if(Hb.lowercasedTokens.every(function(qb){return rb.toLowerCase().includes(qb)}))return!0;var Mc=rb.toLowerCase();return 3>=Dc.arr.sum(Hb.lowercasedTokens.map(function(qb){return Dc.string.levenshtein(Mc,qb)}))}},{key:"fuzzyFilter",value:function(rb,Hb){var Mc=this;Hb=void 0===
Hb?function(tb){return tb}:Hb;var qb=this.parseInput();return Dc.arr.filter(rb,function(tb){return Mc.fuzzyMatch(Hb(tb),qb)})}},{key:"parseInput",value:function(){var rb=Array.from(this.textString).reduce(function(Mc,qb){if("\\"===qb&&!Mc.escaped)return Mc.escaped=!0,Mc;" "!==qb||Mc.escaped?(Mc.spaceSeen=!1,Mc.current+=qb):(!Mc.spaceSeen&&Mc.current&&(Mc.tokens.push(Mc.current),Mc.current=""),Mc.spaceSeen=!0);Mc.escaped=!1;return Mc},{tokens:[],current:"",escaped:!1,spaceSeen:!1});rb.current&&rb.tokens.push(rb.current);
var Hb=rb.tokens.map(function(Mc){return Mc.toLowerCase()});return{tokens:rb.tokens,lowercasedTokens:Hb}}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"SearchInputLine"}}],Hd,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"SearchInputLine",version:"0.1.1-4"}}},{start:239,end:1834})}(Dc.InputLine);pc=Dc.SearchInputLine;
Dc.default=pc}}});
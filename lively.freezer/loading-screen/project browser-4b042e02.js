System.register("./__root_module__-39b2be6e.js lively.collab kld-intersections ./index-6347bda8.js ./index-906d9efb.js ./user-ui-ad881150.js".split(" "),function(wa,bb){var ib,Qb,Ib,ed,qc,pd,uc,Ac,dd,Ad,le,Le,ae,lc,Wc,Ed,Tb,Bd,Sd;return{setters:[function(hc){ib=hc.av;Qb=hc.ay;Ib=hc.ax;ed=hc.ab;qc=hc.Y;pd=hc.a6;uc=hc.aO;Ac=hc.a7;dd=hc.C;Ad=hc.a3;le=hc.r;Le=hc.aJ;ae=hc.a_;lc=hc.az;Wc=hc.bk;Ed=hc.aF;Tb=hc.bj;Bd=hc.bh},function(){},function(){},function(){},function(){},function(hc){Sd=hc.UserUI}],
execute:function(){var hc=lively.FreezerRuntime.recorderFor("WorldDashboard/index.js");hc.Morph=ib;hc.HorizontalLayout=Qb;hc.VerticalLayout=Ib;hc.morph=ed;hc.MorphicDB=qc;hc.arr=pd;hc.fun=uc;hc.string=Ac;hc.Color=dd;hc.pt=Ad;hc.UserUI=Sd;hc.resource=le;var mc=function(vc){var gd=lively.FreezerRuntime.recorderFor("WorldDashboard/index.js"),Zc=gd.hasOwnProperty("WorldDashboard")&&"function"===typeof gd.WorldDashboard?gd.WorldDashboard:gd.WorldDashboard=function(Za){Za&&Za[Symbol.for("lively-instance-restorer")]||
this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Le(Zc,vc,[{key:"onLoad",value:function(){if(!this.isComponent&&"undefined"!==typeof localStorage){var Za=localStorage.getItem("lively.morphic-projects-filter");this.ui.sortSelector.selection!=Za&&(this.ui.sortSelector.selection=Za)}}},{key:"focus",value:function(){this.ui.searchField.focus()}},{key:"update",value:function(){this.displayWorlds();if("undefined"!==typeof localStorage)try{localStorage.setItem("lively.morphic-projects-filter",
this.ui.sortSelector.selection)}catch(Za){console.error(Za)}}},{key:"beforePublish",value:function(){this.reset()}},{key:"reset",value:function(){this.ui.worldList.items=[];this.ui.noWorldWarning.visible=!1}},{key:"relayout",value:function(){this.alignInWorld()}},{key:"alignInWorld",value:function(Za){Za=void 0===Za?$world:Za;this.owner!=Za&&Za.addMorph(this);this.center=Za.visibleBounds().center()}},{key:"sortAndFilterPreviews",value:function(Za){var Xa=hc.UserUI.getCurrentUser();Za=this.ui.searchField.fuzzyFilter(Za,
function(jb){return jb._commit.name+jb._commit.description});switch(this.ui.sortSelector.selection){case "RECENT":return hc.arr.sortBy(Za,function(jb){return-jb._commit.timestamp});case "TEMPLATES":return Za;case "MY PROJECTS":return hc.arr.filter(Za,function(jb){return jb._commit.author.name===Xa.name});case "PUBLISHED":return Za}}},{key:"updateList",value:function(){var Za=this;this.previews&&hc.fun.debounceNamed("update world list",150,function(){Za.ui.worldList.items=Za.sortAndFilterPreviews(Za.previews)})()}},
{key:"displayWorlds",value:function(){var Za=this,Xa,jb,Fa,Ea,ka;return $jscomp.asyncExecutePromiseGeneratorProgram(function(ja){switch(ja.nextAddress){case 1:return Za.reset(),Xa=Za.ui,jb=Xa.loadingLabel,jb.fit(),jb.animate({opacity:1,duration:300}),ja.yield(Za.db.latestCommits("world"),2);case 2:return Fa=ja.yieldResult,ja.yield(bb.import("./world preview-0cb7068b.js"),4);case 4:if(!(Ea=ja.yieldResult)){ja.jumpTo(5);break}return ja.yield(hc.resource("part://partial freezing/world preview"),6);case 6:Ea=
ja.yieldResult;case 5:return ja.yield(Ea.read(),3);case 3:return ka=ja.yieldResult,Za.previews=Fa.map(function(Ca){var mb=hc.morph({reactsToPointer:!1,fill:hc.Color.transparent,extent:ka.extent});mb._commit=Ca;mb.displayPreview=function(){var Ub;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Ya){if(1==Ya.nextAddress)return Ub=ka.copy(),Ub._commit=Ca,Ub.opacity=0,mb.addMorph(Ub),Ub.displayPreview(),Ub.position=hc.pt(0,0),Ya.yield(mb.whenRendered(),2);mb.layout=new hc.HorizontalLayout({autoResize:!0,
reactToSubmorphAnimations:!0});Ya.jumpToEnd()})};return mb}),ja.yield(jb.animate({opacity:0,duration:300}),7);case 7:Za.updateList(),0==Fa.length&&(Za.ui.noWorldWarning.center=Za.innerBounds().center(),Za.ui.noWorldWarning.animate({visible:!0,duration:300})),ja.jumpToEnd()}})}},{key:"createNewProject",value:function(){document.location="/worlds/load?name=__newWorld__"}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"WorldDashboard"}},{key:"properties",get:function(){return{showCloseButton:{derived:!0,
get:function(){return this.ui.closeButton.visible},set:function(Za){this.ui.closeButton.visible=Za}},db:{serialize:!1,get:function(){return hc.MorphicDB.default}},ui:{derived:!0,get:function(){return{worldList:this.getSubmorphNamed("world list"),sortSelector:this.getSubmorphNamed("search selector"),searchField:this.getSubmorphNamed("search field"),closeButton:this.getSubmorphNamed("close button"),loadingLabel:this.getSubmorphNamed("loading label"),noWorldWarning:this.getSubmorphNamed("no world warning")}}}}}}],
gd,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"WorldDashboard",version:"0.1.1-134"}}},{start:330,end:4479})}(hc.Morph);mc=hc.WorldDashboard;hc.default=mc;var Hb=lively.FreezerRuntime.recorderFor("GrowingWorldList/index.js");Hb.Morph=ib;Hb.touchInputDevice=ae;Hb.TilingLayout=lc;Hb.arr=pd;Hb.pt=Ad;mc=function(vc){var gd=lively.FreezerRuntime.recorderFor("GrowingWorldList/index.js"),
Zc=gd.hasOwnProperty("GrowingWorldList")&&"function"===typeof gd.GrowingWorldList?gd.GrowingWorldList:gd.GrowingWorldList=function(Za){Za&&Za[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Le(Zc,vc,[{key:"onLoad",value:function(){this.clipMode="auto"}},{key:"onScroll",value:function(Za){Le._get(Object.getPrototypeOf(Zc.prototype),"onScroll",this).call(this,Za);this.update()}},{key:"onChange",value:function(Za){Le._get(Object.getPrototypeOf(Zc.prototype),
"onChange",this).call(this,Za);"extent"==Za.prop&&this.update(!0)}},{key:"onHoverIn",value:function(Za){this.clipMode="auto"}},{key:"onHoverOut",value:function(Za){Hb.touchInputDevice||(this.clipMode="hidden")}},{key:"update",value:function(Za){var Xa=this.items;if(Xa&&0!=Xa.length){var jb=this.scrollContainer,Fa=jb.layout.spacing;jb.extent=this.extent;var Ea=this.ui,ka=Ea.bufferTop;Ea=Ea.bufferBottom;ka=ka||jb.addMorph({fill:null,name:"buffer top",height:10});Ea=Ea||jb.addMorph({fill:null,name:"buffer bottom",
height:10});ka.width=Ea.width=this.width-100;jb.layout.disable();var ja=Xa[0];Fa=Xa.slice(0,Math.floor(this.width/(ja.width+Fa))*(Math.ceil((this.scroll.y+this.height)/(ja.height+Fa))+1)).filter(function(Ya){return Ya.owner!=jb});ja=this.scroll.y+2*this.height;for(var Ca={},mb=$jscomp.makeIterator(Fa),Ub=mb.next();!Ub.done;Ca={$jscomp$loop$prop$item$2693:Ca.$jscomp$loop$prop$item$2693},Ub=mb.next())Ca.$jscomp$loop$prop$item$2693=Ub.value,ja++,Ca.$jscomp$loop$prop$item$2693.top=ja,jb.addMorph(Ca.$jscomp$loop$prop$item$2693),
Ca.$jscomp$loop$prop$item$2693._initialized||Ca.$jscomp$loop$prop$item$2693.whenRendered().then(function(Ya){return function(){return $jscomp.asyncExecutePromiseGeneratorProgram(function($a){Ya.$jscomp$loop$prop$item$2693._initialized=!0;return $a.yield(Ya.$jscomp$loop$prop$item$2693.displayPreview(),0)})}}(Ca));Za&&(ka.position=Hb.pt(0,0),Xa.forEach(function(Ya,$a){return Ya.position=Hb.pt($a+1,$a+1)}),Ea.position=Hb.pt(Xa.length+2,Xa.length+2));jb.layout.enable();if(Za||0<Fa.length)Ea.top=this.submorphBounds().height,
jb.layout.apply()}}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"GrowingWorldList"}},{key:"properties",get:function(){return{scrollContainer:{get:function(){return this.getSubmorphNamed("scroll container")||this.addMorph({name:"scroll container",fill:null,reactsToPointer:!1,renderOnGPU:!0,layout:new Hb.TilingLayout({spacing:25,align:"center",autoResize:!0})})}},ui:{get:function(){return{bufferTop:this.getSubmorphNamed("buffer top"),bufferBottom:this.getSubmorphNamed("buffer bottom")}}},
items:{after:["layout","scrollContainer"],set:function(Za){this.setProperty("items",Za);var Xa=this.scrollContainer;Xa.layout&&Xa.layout.disable();var jb=this.ui,Fa=jb.bufferTop;jb=jb.bufferBottom;Hb.arr.withoutAll(Xa.submorphs,[].concat($jscomp.arrayFromIterable(Za),[Fa,jb])).forEach(function(Ea){return Ea.remove()});this.update(!0)}}}}}],gd,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},
package:function(){return{name:"GrowingWorldList",version:"0.1.1-32"}}},{start:179,end:3777})}(Hb.Morph);mc=Hb.GrowingWorldList;Hb.default=mc;var ec=lively.FreezerRuntime.recorderFor("SearchInputLine/index.js");ec.InputLine=Wc;ec.Color=dd;ec.connect=Ed;ec.disconnectAll=Tb;ec.disconnect=Bd;ec.arr=pd;ec.string=Ac;mc=function(vc){var gd=lively.FreezerRuntime.recorderFor("SearchInputLine/index.js"),Zc=gd.hasOwnProperty("SearchInputLine")&&"function"===typeof gd.SearchInputLine?gd.SearchInputLine:gd.SearchInputLine=
function(Za){Za&&Za[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Le(Zc,vc,[{key:"fuzzyMatch",value:function(Za,Xa){Xa=void 0===Xa?this.parseInput():Xa;if(Xa.lowercasedTokens.every(function(Fa){return Za.toLowerCase().includes(Fa)}))return!0;var jb=Za.toLowerCase();return 3>=ec.arr.sum(Xa.lowercasedTokens.map(function(Fa){return ec.string.levenshtein(jb,Fa)}))}},{key:"fuzzyFilter",value:function(Za,Xa){var jb=this;Xa=void 0===
Xa?function(Ea){return Ea}:Xa;var Fa=this.parseInput();return ec.arr.filter(Za,function(Ea){return jb.fuzzyMatch(Xa(Ea),Fa)})}},{key:"parseInput",value:function(){var Za=Array.from(this.textString).reduce(function(jb,Fa){if("\\"===Fa&&!jb.escaped)return jb.escaped=!0,jb;" "!==Fa||jb.escaped?(jb.spaceSeen=!1,jb.current+=Fa):(!jb.spaceSeen&&jb.current&&(jb.tokens.push(jb.current),jb.current=""),jb.spaceSeen=!0);jb.escaped=!1;return jb},{tokens:[],current:"",escaped:!1,spaceSeen:!1});Za.current&&Za.tokens.push(Za.current);
var Xa=Za.tokens.map(function(jb){return jb.toLowerCase()});return{tokens:Za.tokens,lowercasedTokens:Xa}}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"SearchInputLine"}}],gd,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"SearchInputLine",version:"0.1.1-4"}}},{start:239,end:1834})}(ec.InputLine);mc=ec.SearchInputLine;
ec.default=mc}}});
System.register(["./__root_module__-255c8c26.js","kld-intersections","./user-ui-5be04eba.js","./index-029212ef.js","./index-88273505.js"],function(Da,Ab){var Tb,kc,ec,he,gd,Zd,kd,Sc,yd,Od,fe,Ud,md,db,Fb,tc,nc,td,ke;return{setters:[function(zc){Tb=zc.ah;kc=zc.aA;ec=zc.aj;he=zc.am;gd=zc.Y;Zd=zc.a5;kd=zc.as;Sc=zc.s;yd=zc.C;Od=zc.a2;fe=zc.r;Ud=zc.ar;md=zc.az;db=zc.a_;Fb=zc.a$;tc=zc.ap;nc=zc.aX;td=zc.aW},function(){},function(zc){ke=zc.UserUI},function(){},function(){}],execute:function(){var zc=
lively.FreezerRuntime.recorderFor("WorldDashboard/index.js");zc.Morph=Tb;zc.HorizontalLayout=kc;zc.VerticalLayout=ec;zc.morph=he;zc.MorphicDB=gd;zc.arr=Zd;zc.fun=kd;zc.string=Sc;zc.Color=yd;zc.pt=Od;zc.UserUI=ke;zc.resource=fe;var Ec=function(Tc){var ld=lively.FreezerRuntime.recorderFor("WorldDashboard/index.js"),Rb=ld.hasOwnProperty("WorldDashboard")&&"function"===typeof ld.WorldDashboard?ld.WorldDashboard:ld.WorldDashboard=function(qb){qb&&qb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,
arguments)};return Ud(Rb,Tc,[{key:"focus",value:function(){this.ui.searchField.focus()}},{key:"update",value:function(){this.displayWorlds()}},{key:"beforePublish",value:function(){this.reset()}},{key:"reset",value:function(){this.ui.worldList.items=[];this.ui.noWorldWarning.visible=!1}},{key:"relayout",value:function(){this.alignInWorld()}},{key:"alignInWorld",value:function(qb){qb=void 0===qb?$world:qb;this.owner!=qb&&qb.addMorph(this);this.center=qb.visibleBounds().center()}},{key:"sortAndFilterPreviews",
value:function(qb){var bc=zc.UserUI.getCurrentUser();qb=this.ui.searchField.fuzzyFilter(qb,function(Ic){return Ic._commit.name+Ic._commit.description});switch(this.ui.sortSelector.selection){case "RECENT":return zc.arr.sortBy(qb,function(Ic){return-Ic._commit.timestamp});case "TEMPLATES":return qb;case "MY PROJECTS":return zc.arr.filter(qb,function(Ic){return Ic._commit.author.name===bc.name});case "PUBLISHED":return qb}}},{key:"updateList",value:function(){var qb=this;this.previews&&zc.fun.debounceNamed("update world list",
150,function(){qb.ui.worldList.items=qb.sortAndFilterPreviews(qb.previews)})()}},{key:"displayWorlds",value:function(){var qb=this,bc,Ic,ra,Fa,mb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(ub){switch(ub.nextAddress){case 1:return qb.reset(),bc=qb.ui,Ic=bc.loadingLabel,Ic.visible=!0,Ic.animate({opacity:1,duration:300}),ub.yield(qb.db.latestCommits("world"),2);case 2:return ra=ub.yieldResult,ub.yield(Ab.import("./world preview-73075ebe.js"),4);case 4:if(!(Fa=ub.yieldResult)){ub.jumpTo(5);
break}return ub.yield(zc.resource("part://partial freezing/world preview"),6);case 6:Fa=ub.yieldResult;case 5:return ub.yield(Fa.read(),3);case 3:return mb=ub.yieldResult,qb.previews=ra.map(function(Db){var cb=zc.morph({reactsToPointer:!1,fill:zc.Color.transparent,extent:mb.extent});cb._commit=Db;cb.displayPreview=function(){var fb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Eb){if(1==Eb.nextAddress)return fb=mb.copy(),fb._commit=Db,fb.opacity=0,cb.addMorph(fb),fb.displayPreview(),
fb.position=zc.pt(0,0),Eb.yield(cb.whenRendered(),2);cb.layout=new zc.HorizontalLayout({autoResize:!0,reactToSubmorphAnimations:!0});Eb.jumpToEnd()})};return cb}),ub.yield(Ic.animate({opacity:0,duration:300}),7);case 7:Ic.visible=!1,qb.updateList(),0==ra.length&&(qb.ui.noWorldWarning.center=qb.innerBounds().center(),qb.ui.noWorldWarning.animate({visible:!0,duration:300})),ub.jumpToEnd()}})}},{key:"createNewProject",value:function(){document.location="/worlds/load?name=__newWorld__"}}],[{key:"className",
get:function(){return"WorldDashboard"}},{key:"properties",get:function(){return{showCloseButton:{derived:!0,get:function(){return this.ui.closeButton.visible},set:function(qb){this.ui.closeButton.visible=qb}},db:{serialize:!1,get:function(){return zc.MorphicDB.default}},ui:{derived:!0,get:function(){return{worldList:this.getSubmorphNamed("world list"),sortSelector:this.getSubmorphNamed("search selector"),searchField:this.getSubmorphNamed("search field"),closeButton:this.getSubmorphNamed("close button"),
loadingLabel:this.getSubmorphNamed("loading label"),noWorldWarning:this.getSubmorphNamed("no world warning")}}}}}}],ld,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"WorldDashboard",version:"0.1.1-124"}}},{start:330,end:4020})}(zc.Morph);Ec=zc.WorldDashboard;zc.default=Ec;var Pb=lively.FreezerRuntime.recorderFor("GrowingWorldList/index.js");
Pb.Morph=Tb;Pb.touchInputDevice=md;Pb.TilingLayout=db;Pb.arr=Zd;Pb.pt=Od;Ec=function(Tc){var ld=lively.FreezerRuntime.recorderFor("GrowingWorldList/index.js"),Rb=ld.hasOwnProperty("GrowingWorldList")&&"function"===typeof ld.GrowingWorldList?ld.GrowingWorldList:ld.GrowingWorldList=function(qb){qb&&qb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Ud(Rb,Tc,[{key:"onLoad",value:function(){this.clipMode="auto"}},{key:"onScroll",value:function(qb){Ud._get(Object.getPrototypeOf(Rb.prototype),
"onScroll",this).call(this,qb);this.update()}},{key:"onChange",value:function(qb){Ud._get(Object.getPrototypeOf(Rb.prototype),"onChange",this).call(this,qb);"extent"==qb.prop&&this.update(!0)}},{key:"onHoverIn",value:function(qb){this.clipMode="auto"}},{key:"onHoverOut",value:function(qb){Pb.touchInputDevice||(this.clipMode="hidden")}},{key:"update",value:function(qb){var bc=this.items;if(bc&&0!=bc.length){var Ic=this.scrollContainer,ra=Ic.layout.spacing;Ic.extent=this.extent;var Fa=this.ui,mb=Fa.bufferTop;
Fa=Fa.bufferBottom;mb=mb||Ic.addMorph({fill:null,name:"buffer top",height:10});Fa=Fa||Ic.addMorph({fill:null,name:"buffer bottom",height:10});mb.width=Fa.width=this.width-100;Ic.layout.disable();var ub=bc[0];ra=bc.slice(0,Math.floor(this.width/(ub.width+ra))*(Math.ceil((this.scroll.y+this.height)/(ub.height+ra))+1)).filter(function(Eb){return Eb.owner!=Ic});ub=this.scroll.y+2*this.height;for(var Db={},cb=$jscomp.makeIterator(ra),fb=cb.next();!fb.done;Db={$jscomp$loop$prop$item$2289:Db.$jscomp$loop$prop$item$2289},
fb=cb.next())Db.$jscomp$loop$prop$item$2289=fb.value,ub++,Db.$jscomp$loop$prop$item$2289.top=ub,Ic.addMorph(Db.$jscomp$loop$prop$item$2289),Db.$jscomp$loop$prop$item$2289._initialized||Db.$jscomp$loop$prop$item$2289.whenRendered().then(function(Eb){return function(){return $jscomp.asyncExecutePromiseGeneratorProgram(function(qc){Eb.$jscomp$loop$prop$item$2289._initialized=!0;return qc.yield(Eb.$jscomp$loop$prop$item$2289.displayPreview(),0)})}}(Db));qb&&(mb.position=Pb.pt(0,0),bc.forEach(function(Eb,
qc){return Eb.position=Pb.pt(qc+1,qc+1)}),Fa.position=Pb.pt(bc.length+2,bc.length+2));Ic.layout.enable();if(qb||0<ra.length)Fa.top=this.submorphBounds().height,Ic.layout.apply()}}}],[{key:"className",get:function(){return"GrowingWorldList"}},{key:"properties",get:function(){return{scrollContainer:{get:function(){return this.getSubmorphNamed("scroll container")||this.addMorph({name:"scroll container",fill:null,reactsToPointer:!1,renderOnGPU:!0,layout:new Pb.TilingLayout({spacing:25,align:"center",
autoResize:!0})})}},ui:{get:function(){return{bufferTop:this.getSubmorphNamed("buffer top"),bufferBottom:this.getSubmorphNamed("buffer bottom")}}},items:{after:["layout","scrollContainer"],set:function(qb){this.setProperty("items",qb);var bc=this.scrollContainer;bc.layout&&bc.layout.disable();var Ic=this.ui,ra=Ic.bufferTop;Ic=Ic.bufferBottom;Pb.arr.withoutAll(bc.submorphs,[].concat($jscomp.arrayFromIterable(qb),[ra,Ic])).forEach(function(Fa){return Fa.remove()});this.update(!0)}}}}}],ld,{pathInPackage:function(){return"index.js"},
unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"GrowingWorldList",version:"0.1.1-32"}}},{start:179,end:3777})}(Pb.Morph);Ec=Pb.GrowingWorldList;Pb.default=Ec;var Qb=lively.FreezerRuntime.recorderFor("SearchInputLine/index.js");Qb.InputLine=Fb;Qb.Color=yd;Qb.connect=tc;Qb.disconnectAll=nc;Qb.disconnect=td;Qb.arr=Zd;Qb.string=Sc;Ec=function(Tc){var ld=lively.FreezerRuntime.recorderFor("SearchInputLine/index.js"),
Rb=ld.hasOwnProperty("SearchInputLine")&&"function"===typeof ld.SearchInputLine?ld.SearchInputLine:ld.SearchInputLine=function(qb){qb&&qb[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Ud(Rb,Tc,[{key:"fuzzyMatch",value:function(qb,bc){bc=void 0===bc?this.parseInput():bc;if(bc.lowercasedTokens.every(function(ra){return qb.toLowerCase().includes(ra)}))return!0;var Ic=qb.toLowerCase();return 3>=Qb.arr.sum(bc.lowercasedTokens.map(function(ra){return Qb.string.levenshtein(Ic,
ra)}))}},{key:"fuzzyFilter",value:function(qb,bc){var Ic=this;bc=void 0===bc?function(Fa){return Fa}:bc;var ra=this.parseInput();return Qb.arr.filter(qb,function(Fa){return Ic.fuzzyMatch(bc(Fa),ra)})}},{key:"parseInput",value:function(){var qb=Array.from(this.textString).reduce(function(Ic,ra){if("\\"===ra&&!Ic.escaped)return Ic.escaped=!0,Ic;" "!==ra||Ic.escaped?(Ic.spaceSeen=!1,Ic.current+=ra):(!Ic.spaceSeen&&Ic.current&&(Ic.tokens.push(Ic.current),Ic.current=""),Ic.spaceSeen=!0);Ic.escaped=!1;
return Ic},{tokens:[],current:"",escaped:!1,spaceSeen:!1});qb.current&&qb.tokens.push(qb.current);var bc=qb.tokens.map(function(Ic){return Ic.toLowerCase()});return{tokens:qb.tokens,lowercasedTokens:bc}}}],[{key:"className",get:function(){return"SearchInputLine"}}],ld,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"SearchInputLine",
version:"0.1.1-4"}}},{start:239,end:1834})}(Qb.InputLine);Ec=Qb.SearchInputLine;Qb.default=Ec}}});